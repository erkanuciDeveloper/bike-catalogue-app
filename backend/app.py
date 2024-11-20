from flask import Flask, jsonify, request
from app.routes import api_routes
from config import Config
from flask_cors import CORS  # Added for CORS management

def create_app():
    """Creates the Flask application and loads the configuration."""
    app = Flask(__name__)
    app.config.from_object(Config)  # Load configuration from the Config file
    CORS(app)  # Include CORS management in the application
    app.register_blueprint(api_routes)  # Register API routes
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)
