from app import db, app, Pet


with app.app_context():
    db.create_all()
    print("Database tables created.")
    
    # query the Pets in the database
    pets = db.session.query(Pet).all()
    for pet in pets:
        print(pet.image_url)
