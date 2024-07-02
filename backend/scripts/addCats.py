import os

from faker import Faker # type: ignore
from random import randint, choice
from datetime import date, timedelta
from app import db, app
from app.models import Pet
from .image_encryption import encode_to_base64

app.app_context().push()

faker = Faker()

# List of cat images
cats = [
    'Janet.jpg', 'Jane.jpg', 'Raney.jpg', 'Abby.jpg', 'Princess.jpg',
    'George.jpg', 'Ava.jpg', 'Peaches.jpg', 'Sunshine.jpg', 'Priscilla.jpg',
    'Louise.jpg', 'Sparkles.jpg', 'Molly.jpg'
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
    script_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(script_dir, '..', 'static', 'images')
    for cat_image in cats:
        name = cat_image.split('.')[0]
        breed = choice(cat_breeds)
        image_path = os.path.join(images_dir, cat_image)
        pet = Pet(
            pet_type="Cats",
            name=name,
            breed=breed,
            weight=round(randint(3, 8) + faker.random.random(), 1),
            age=randint(1, 15),
            location=faker.city(),
            arrival_date=date.today() - timedelta(days=randint(0, 365)),  # Random arrival date within the last year
            adoption_fee=round(randint(20, 100) + faker.random.random(), 2),  # Adoption fee between $20 and $100
            shelter_id=1,  # Assuming all pets are in shelter with id=1
            image_str=encode_to_base64(image_path=image_path)
        )
        db.session.add(pet)
        db.session.commit()
        print(f"Added {name} to the database with breed {breed}.")


if __name__ == "__main__":
    add_random_cats()
