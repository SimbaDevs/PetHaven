from app import app, Pet
from flask import jsonify
from schema import PetSchema
from flask_cors import CORS

# Enable CORS only for images
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

if __name__ == "__main__":
    app.run(debug=True, port=5000)
