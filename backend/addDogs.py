from faker import Faker
from random import randint, choice
from datetime import date, timedelta
from app import db, Vaccine, Pet, Shelter, app

app.app_context().push()

faker = Faker()

import os

# Specify the directory path
directory_path = "static/images/dogs"

# Create an empty list to store file names
file_names = []

# Loop through all files in the directory
for filename in os.listdir(directory_path):
    # Get the full file path
    file_path = os.path.join(directory_path, filename)
    
    # Check if it's a file (not a directory)
    if os.path.isfile(file_path):
        # Add the file name to the list
        file_names.append(filename)

# Print the list of file names
dogs = file_names

# list of dog breeds
dog_breeds = [
"Labrador Retriever", "German Shepherd", "Golden Retriever","Bulldog",
"Beagle", "Poodle", "Rottweiler", "Boxer", "Yorkshire Terrier",
"Dachshund", "Siberian Husky", "Great Dane", "Doberman Pinscher",
"Shih Tzu", "Chihuahua", "Pomeranian", "Maltese",
"Miniature Schnauzer", "Bernese Mountain Dog", "Cavalier King Charles Spaniel"
]

def add_random_cats():
    for dog_image in dogs:
        name = dog_image.split('.')[0]  # Extract name from image file name
        breed = choice(dog_breeds)  # Randomly select a breed
        pet = Pet(
            pet_type="dog",
            name=name,
            breed=breed,
            weight=round(randint(3, 8) + faker.random.random(), 1),  # Weight between 3 and 8 kg
            age=randint(1, 15),  # Age between 1 and 15 years
            location=faker.city(),
            arrival_date=date.today() - timedelta(days=randint(0, 365)),  # Random arrival date within the last year
            adoption_fee=round(randint(20, 100) + faker.random.random(), 2),  # Adoption fee between $20 and $100
            shelter_id=1,  # Assuming all pets are in shelter with id=1
            image_url=f"http://localhost:5000/static/images/dogs/{dog_image}"
        )
        db.session.add(pet)
        db.session.commit()
        print(f"Added {name} to the database with breed {breed}.")


if __name__ == "__main__":
    add_random_cats()
