from flask import Blueprint, jsonify, request
from app.db import get_db
from app.models import Bike

api_routes = Blueprint('api_routes', __name__)

@api_routes.route('/', methods=['GET'])
def home():
    return jsonify({"status": "API is running", "message": "Welcome to the Bike Catalogue API!"}), 200

@api_routes.route('/bikes', methods=['GET'])
def get_bikes_list():
    db = get_db()
    bikes_collection = db['bikes']
    bikes = []
    for bike in bikes_collection.find({}):
        bike['_id'] = str(bike['_id'])  # Convert ObjectId to string
        bikes.append(bike)
    return jsonify(bikes), 200

@api_routes.route('/bikes', methods=['GET'])
def get_bikes():
    sort_by = request.args.get('sort', 'manufacturer')
    if sort_by == 'manufacturer':
        bikes = Bike.query.order_by(Bike.manufacturer).all()
    elif sort_by == 'lowPrice':
        bikes = Bike.query.order_by(Bike.price).all()
    elif sort_by == 'highPrice':
        bikes = Bike.query.order_by(Bike.price.desc()).all()
    return jsonify([bike.to_dict() for bike in bikes])

@api_routes.route('/bikes', methods=['POST'])
def add_bike():
    bike_data = request.json
    if not bike_data or 'manufacturer' not in bike_data or 'price' not in bike_data:
        return jsonify({"error": "Invalid input"}), 400
    
    db = get_db()
    bikes_collection = db['bikes']
     # Process the price information
    price_str = bike_data['price']  # For example, assume the price is in the form: '€185.00'
    if isinstance(price_str, str):
        price = float(price_str.replace('€', '').strip())  # Remove the '€' symbol and strip whitespace
    else:
        price = float(price_str)  # If it's already a number, convert it to float directly

    bike = Bike(
        manufacturer=bike_data['manufacturer'],
        model=bike_data['model'],
        price=price,  # Use the processed price
        category=bike_data['category'],
        img_url=bike_data['img_url'],
    )
    result = bikes_collection.insert_one(bike.to_dict())
    return jsonify({"_id": str(result.inserted_id), **bike.to_dict()}), 201
