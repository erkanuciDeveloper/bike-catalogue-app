from pymongo import MongoClient
from flask import current_app

def get_db():
    client = MongoClient(current_app.config['MONGO_URI'])  # Get MONGO_URI from Config
    db = client.get_database()  # Select the database
    return db
