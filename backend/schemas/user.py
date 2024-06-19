# schemas/user.py

from pydantic import BaseModel, Field
from typing import List, Optional


class UserBase(BaseModel):
    username: str
    password: Optional[str] = None
    name: Optional[str] = None
    lastname: Optional[str] = None
    badges: List[str] = []
    posts: List[int] = []
    favorites: List[int] = []
    following: List[int] = []
    strikes: Optional[int] = None
    country: Optional[str] = None
    state: Optional[str] = None
    city: Optional[str] = None
    institutions: List[int] = []
    avatar: Optional[str] = None


class UserCreate(UserBase):
    pass


class UserUpdate(UserBase):
    pass


class UserLogin(BaseModel):
    username: str
    password: str


class UserInDB(UserBase):
    id: str

    class Config:
        orm_mode = True


class UserLoginResponse(BaseModel):
    id: str
