from schema import PetSchema, Pet
from models import AdoptionFormSubmission, db
from flask_cors import CORS # type: ignore
from app import app
from flask import jsonify, request # type: ignore


# Enable CORS
CORS(app)



# get all pets
@app.route('/api/v1/pets', methods=['GET'])
def get_pets():
    pets = Pet.query.all()
    pet_schema = PetSchema(many=True)
    result = pet_schema.dump(pets)
    return jsonify(result)

# get pet by id
@app.route('/api/v1/pets/<int:id>', methods=['GET'])
def get_pet(id):
    pet = Pet.query.get(id)
    pet_schema = PetSchema()
    result = pet_schema.dump(pet)
    return jsonify(result)

@app.route('/api/v1/adopt', methods=['POST'])
def adopt():
    data = request.get_json()
    pet = Pet.query.get(data['pet_id'])
    if not pet:
        return jsonify({'message': 'Pet not found!'}), 404

    new_adoption = AdoptionFormSubmission(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        phone_number=data['phone_number'],
        address=data['address'],
        pet_id=data['pet_id']
    )
    db.session.add(new_adoption)
    db.session.commit()
    
    # send_confirmation_email(data['email'], pet)
    
    return jsonify({'message': 'Adoption form submitted successfully!'}), 201
