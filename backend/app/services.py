from app.db import get_db
from app.models import Bike

def get_bikes():
    """Fetches all bikes from the MongoDB collection."""
    db = get_db()
    bikes_collection = db['bikes']
    bikes = []
    for bike in bikes_collection.find():
        bike['_id'] = str(bike['_id'])  # Convert ObjectId to string
        # Ensure img_url exists
        if 'img_url' not in bike:
            bike['img_url'] = 'default-image-url.jpg'  # Fallback for missing image URLs
        bikes.append(bike)
    return bikes


def create_bike(bike_data):
    """Creates a new bike and inserts it into the database."""
    print("Received bike data:", bike_data)  # Log bike data

    db = get_db()
    bikes_collection = db['bikes']
    bike = Bike(
        manufacturer=bike_data['manufacturer'],
        model=bike_data.get('model', ''),  # Optional model
        price=bike_data['price'],
        category=bike_data['category'],
        img_url=bike_data['img_url']
    )
    result = bikes_collection.insert_one(bike.to_dict())
    print('Created bike:', result)
    return {"_id": str(result.inserted_id), **bike.to_dict()}


