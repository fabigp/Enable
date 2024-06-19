# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users, posts

app = FastAPI()

# Define the allowed origins
origins = ["http://localhost", "http://localhost:8000", "http://localhost:5173","http://localhost:5500"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(posts.router)


@app.get("/")
def root():
    return {"message": "Hello World!"}
