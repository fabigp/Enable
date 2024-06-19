from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId


class PostBase(BaseModel):
    author: str
    title: str
    body: str
    likes: List[int] = []
    dislikes: List[int] = []
    reports: List[int] = []
    topics: List[str] = []
    rating_people: List[int] = []
    rating: List[float] = []
    institutions: List[int] = []
    comments: List[str] = []
    date: datetime = None


class PostCreate(PostBase):
    pass


class PostUpdate(PostBase):
    pass


class PostInDB(PostBase):
    id: str = Field(default_factory=lambda: str(ObjectId()))

    class Config:
        orm_mode = True
