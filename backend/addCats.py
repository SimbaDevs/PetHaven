from faker import Faker
from random import randint, choice
from datetime import date, timedelta
from app import db, create_app
from models import Pet, Shelter

app = create_app()
app.app_context().push()

faker = Faker()

# List of cat images
cats = [
    'Janet.jpg', 'Jane.jpg', 'Raney.jpg', 'Abby.jpg', 'Princess.png',
    'George.jpg', 'Ava.jpg', 'Peaches.png', 'Sunshine.jpg', 'Priscilla.jpg',
    'Louise.jpg', 'Sparkles.png', 'Molly.jpg'
]

# List of cat breeds
cat_breeds = [
    "Siamese", "Persian", "Maine Coon", "British Shorthair", "Bengal",
    "Ragdoll", "Scottish Fold", "Sphynx", "Abyssinian", "Russian Blue",
    "Birman", "Exotic Shorthair", "Norwegian Forest Cat", "Manx", "Siberian",
    "Chartreux", "American Shorthair", "Himalayan", "Somali", "Turkish Angora",
    "Burmese", "Devon Rex", "Cornish Rex", "Egyptian Mau", "Havana Brown",
    "Japanese Bobtail", "Korat", "LaPerm", "Ocicat", "Oriental Shorthair",
    "Pixie-Bob", "Savannah", "Selkirk Rex", "Singapura", "Snowshoe", "Tonkinese",
    "Turkish Van", "York Chocolate"
]

def add_random_cats():
    for cat_image in cats:
        name = cat_image.split('.')[0]  # Extract name from image file name
        breed = choice(cat_breeds)  # Randomly select a breed
        pet = Pet(
            pet_type="cat",
            name=name,
            breed=breed,
            weight=round(randint(3, 8) + faker.random.random(), 1),  # Weight between 3 and 8 kg
            age=randint(1, 15),  # Age between 1 and 15 years
            location="Nairobi, Kenya",
            arrival_date=date.today() - timedelta(days=randint(0, 365)),  # Random arrival date within the last year
            adoption_fee=round(randint(20, 100) + faker.random.random(), 2),  # Adoption fee between $20 and $100
            shelter_id=1,  # Assuming all pets are in shelter with id=1
            image_url=f"http://localhost:5000/static/images/{cat_image}"
        )
        db.session.add(pet)
        db.session.commit()
        print(f"Added {name} to the database with breed {breed}.")


if __name__ == "__main__":
    add_random_cats()
