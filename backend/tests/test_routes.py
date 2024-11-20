import unittest
from app import create_app
from flask import json

class TestRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()

    def test_get_bikes(self):
        response = self.client.get('/bikes')
        self.assertEqual(response.status_code, 200)

    def test_add_bike(self):
        bike_data = {
            "manufacturer": "Giant",
            "model": "Defy 3",
            "price": 800
        }
        response = self.client.post('/bikes', data=json.dumps(bike_data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn("Bike added successfully!", response.get_data(as_text=True))

if __name__ == '__main__':
    unittest.main()
