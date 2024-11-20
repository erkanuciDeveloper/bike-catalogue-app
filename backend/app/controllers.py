from app.services import get_bikes, create_bike

class BikeController:
    """Controller class that manages the business logic related to bike data."""
    
    def get_all_bikes(self):
        """Fetches all bikes."""
        bikes = get_bikes()
        # We can return the bike data in a more suitable format
        return bikes

    def add_bike(self, bike_data):
        """Adds a new bike."""
        result = create_bike(bike_data)
        return result
