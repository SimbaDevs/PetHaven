from app import db, app, Pet


with app.app_context():
    db.create_all()
    print("Database tables created.")
    
    # query the Pets
    pets = Pet.query.all()
    for pet in pets:
        print(pet.name, pet.breed, pet.pet_type, pet.image_url)
    db.session.commit()
