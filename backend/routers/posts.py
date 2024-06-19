# routers/posts.py
from fastapi import APIRouter, HTTPException, Depends
from schemas.post import PostCreate, PostUpdate, PostInDB
from typing import List
from database import get_database
from bson import ObjectId
from fastapi.encoders import jsonable_encoder

router = APIRouter()


async def get_post_collection():
    db = await get_database()
    return db.posts


@router.get("/posts", response_model=List[PostInDB])
async def get_posts(posts_collection=Depends(get_post_collection)):
    posts = []
    async for post in posts_collection.find():
        posts.append(PostInDB(id=str(post["_id"]), **post))
    return posts


@router.get("/post/{id}", response_model=PostInDB)
async def get_post(id: str, posts_collection=Depends(get_post_collection)):
    post = await posts_collection.find_one({"_id": ObjectId(id)})
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return PostInDB(id=str(post["_id"]), **post)


@router.get("/user/{user_id}/posts", response_model=List[PostInDB])
async def get_user_posts(user_id: str, posts_collection=Depends(get_post_collection)):
    posts = []
    async for post in posts_collection.find({"author": user_id}):
        posts.append(PostInDB(id=str(post["_id"]), **post))
    return posts


@router.get("/user/posts/{id}", response_model=List[PostInDB])
async def get_user_posts_by_id(id: str, posts_collection=Depends(get_post_collection)):
    posts = []
    async for post in posts_collection.find({"author": int(id)}):
        posts.append(PostInDB(id=str(post["_id"]), **post))
    return posts


@router.post("/post/", response_model=PostInDB, status_code=201)
async def create_post(
    newPost: PostCreate, posts_collection=Depends(get_post_collection)
):
    post_dict = jsonable_encoder(newPost)
    new_post = await posts_collection.insert_one(post_dict)
    created_post = await posts_collection.find_one({"_id": new_post.inserted_id})
    return PostInDB(id=str(created_post["_id"]), **created_post)


@router.put("/post/{id}", response_model=PostInDB, status_code=202)
async def update_post(
    id: str, post: PostUpdate, posts_collection=Depends(get_post_collection)
):
    post_dict = jsonable_encoder(post)
    update_result = await posts_collection.update_one(
        {"_id": ObjectId(id)}, {"$set": post_dict}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    updated_post = await posts_collection.find_one({"_id": ObjectId(id)})
    return PostInDB(id=str(updated_post["_id"]), **updated_post)


@router.delete("/post/{id}")
async def delete_post(id: str, posts_collection=Depends(get_post_collection)):
    delete_result = await posts_collection.delete_one({"_id": ObjectId(id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted successfully"}
