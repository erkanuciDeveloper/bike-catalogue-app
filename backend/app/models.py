class Bike:
    def __init__(self, manufacturer, model, price, category, img_url):
        self.manufacturer = manufacturer
        self.model = model
        self.price = price
        self.category = category  # New attribute
        self.img_url = img_url  # New attribute

    def to_dict(self):
        return {
            "manufacturer": self.manufacturer,
            "model": self.model,
            "price": self.price,
            "category": self.category,
            "img_url": self.img_url     
        }
