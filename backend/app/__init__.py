from flask import Flask
from app.routes import api_routes
from config import Config

def create_app():
    app = Flask(__name__)  # Load the config file
    app.config.from_object(Config)  # Register API routes
    app.register_blueprint(api_routes)  
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host='127.0.0.1', port=5000)
