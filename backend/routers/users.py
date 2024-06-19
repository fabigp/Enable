# routers/users.py
from fastapi import APIRouter, HTTPException, Depends
from schemas.user import UserCreate, UserUpdate, UserInDB, UserLogin, UserLoginResponse
from typing import List
from database import get_database
from bson import ObjectId
from fastapi.encoders import jsonable_encoder

router = APIRouter()


async def get_user_collection():
    db = await get_database()
    return db.users


@router.post("/login", response_model=UserLoginResponse)
async def login_user(
    user_login: UserLogin, users_collection=Depends(get_user_collection)
):
    user = await users_collection.find_one({"username": user_login.username})
    if user and user["password"] == user_login.password:
        return UserLoginResponse(id=str(user["_id"]))
    raise HTTPException(status_code=401, detail="Incorrect username or password")


@router.get("/users", response_model=List[UserInDB])
async def get_users(users_collection=Depends(get_user_collection)):
    users = []
    async for user in users_collection.find():
        users.append(UserInDB(id=str(user["_id"]), **user))
    return users


@router.get("/user/{id}", response_model=UserInDB)
async def get_user_by_id(id: str, users_collection=Depends(get_user_collection)):
    user = await users_collection.find_one({"_id": ObjectId(id)})
    if user:
        return UserInDB(id=str(user["_id"]), **user)
    raise HTTPException(status_code=404, detail="User not found")


@router.post("/user/", response_model=UserInDB, status_code=201)
async def create_user(
    newUser: UserCreate, users_collection=Depends(get_user_collection)
):
    user_dict = jsonable_encoder(newUser)
    new_user = await users_collection.insert_one(user_dict)
    created_user = await users_collection.find_one({"_id": new_user.inserted_id})
    return UserInDB(id=str(created_user["_id"]), **created_user)


@router.put("/user/{id}", response_model=UserInDB, status_code=202)
async def update_user(
    id: str, user: UserUpdate, users_collection=Depends(get_user_collection)
):
    user_dict = jsonable_encoder(user)
    update_result = await users_collection.update_one(
        {"_id": ObjectId(id)}, {"$set": user_dict}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    updated_user = await users_collection.find_one({"_id": ObjectId(id)})
    return UserInDB(id=str(updated_user["_id"]), **updated_user)


@router.delete("/user/{id}")
async def delete_user(id: str, users_collection=Depends(get_user_collection)):
    delete_result = await users_collection.delete_one({"_id": ObjectId(id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
