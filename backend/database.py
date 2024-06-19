from motor.motor_asyncio import AsyncIOMotorClient

MONGO_DETAILS = "mongodb+srv://Focil:5fOxmeo4ps8x11nT@hackpuebla.z8bsujd.mongodb.net/"

client = AsyncIOMotorClient(MONGO_DETAILS)

database = client.user_db


async def get_database():
    return database
