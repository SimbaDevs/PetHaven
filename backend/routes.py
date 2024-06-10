from app import app, Pet, db
from flask import jsonify, request
from schema import PetSchema
from flask_cors import CORS
from app import AdoptionFormSubmission

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
    return jsonify({'message': 'Adoption form submitted successfully!'}), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)
