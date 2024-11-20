# Bike Catalogue App

The Bike Catalogue App is a full-stack web application where users can manage and view a catalogue of bikes. The app features the ability to add new bikes, list them, and sort the list based on different criteria, including price and manufacturer. 

This app uses **React.js** for the frontend, **Flask** for the backend, and **MongoDB** as the database for storing bike data.

## Features

- **Add New Bikes**: Admin can add new bikes by providing details such as manufacturer, model, price, category, and image URL.
- **View Bike List**: Users can view a list of bikes, sorted by default according to the manufacturer name.
- **Sort Bikes**: Bikes can be sorted by:
  - Manufacturer (Alphabetical)
  - Price (Lowest to Highest)
  - Price (Highest to Lowest)
- **Responsive Design**: The application is responsive and optimized for both desktop and mobile users.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Flask
- **Database**: MongoDB
- **API**: RESTful APIs for CRUD operations
- **Styling**: CSS and responsive design for a user-friendly interface

## Requirements

To run the project locally, you will need the following tools installed:

- **Node.js** (for running React frontend)
- **MongoDB** (for the database)
- **Python 3.x** (for running Flask backend)
- **pip** (Python package manager)
- **Flask** (for the backend)
- **Flask-CORS** (for handling cross-origin requests)
  
## Installation

### 1. Backend Setup (Flask)

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bike-catalogue-app.git
cd bike-catalogue-app
```

2. Navigate to the backend folder:

```bash
cd backend
```

3. Create and activate a virtual environment:

```bash
python -m venv venv
# On Windows
venv\Scripts\activate
# On Mac/Linux
source venv/bin/activate
```

4. Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

5. Set up the database by connecting MongoDB (ensure MongoDB is running on your local machine or use a cloud MongoDB service like Atlas):

```bash
# MongoDB connection URI example
MONGO_URI = "mongodb://localhost:27017/bike-catalogue"
```

6. Start the Flask server:

```bash
flask run
```

### 2. Frontend Setup (React.js)

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install required Node.js packages:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

This will start the React frontend on `http://localhost:3000`.

## Endpoints

- **GET /api/bikes** - Get a list of all bikes in the catalogue.
- **POST /api/bikes** - Add a new bike to the catalogue. You need to send a JSON object with bike details (manufacturer, model, price, category, and image URL).
  
Example Bike data (for POST request):

```json
{
  "manufacturer": "Indi",
  "model": "ATB 1",
  "price": "€185.00",
  "category": "Mountain Bike",
  "img_url": "/assets/images/bikes/Indi-ATB-1-Mountain-Bike.png"
}
```

## Sorting Options

- **Sort by Manufacturer**: Default sorting method (alphabetical).
- **Sort by Price (Low to High)**: Displays bikes in ascending order of price.
- **Sort by Price (High to Low)**: Displays bikes in descending order of price.

## Known Issues

- Price formatting: Ensure the price is provided in `€` format, as the app currently only accepts prices with the euro symbol.
- MongoDB setup: Ensure that MongoDB is correctly configured and running.

