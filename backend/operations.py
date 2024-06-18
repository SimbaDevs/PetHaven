from app import db, app, Pet


with app.app_context():
    db.create_all()
    print("Database tables created.")
    
    # query the Pets
    pet3 = Pet.query.filter_by(name='Morris')
    
    # old method
    # pet = Pet.query.all()
    # for p in pet:
    #     if pet.id == 2:
    #         print(pet.name)
    
    print(type(pet3))
    
    for pet in pet3:
        print(pet.name)
        print(pet.pet_type)
