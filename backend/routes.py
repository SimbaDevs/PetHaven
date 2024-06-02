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

@app.route('/api/v1/cats', methods=['GET'])
def get_cats():
    cats = Pet.query.filter_by(pet_type='cat').all()
    cat_schema = PetSchema(many=True)
    result = cat_schema.dump(cats)
    return jsonify(result)

@app.route('/api/v1/cats/<int:id>', methods=['GET'])
def get_cat(id):
    cat = Pet.query.filter_by(pet_type='cat').get(id)
    cat_schema = PetSchema()
    result = cat_schema.dump(cat)
    return jsonify(result)

@app.route('/api/v1/dogs',methods=['GET'])
def get_dogs():
    dogs = Pet.query.filter_by(pet_type='dog').all()
    dog_schema = PetSchema(many=True)
    result = dog_schema.dump(dogs)
    return jsonify(result)

@app.route('/api/v1/<string:name>',methods=['GET'])
def get_pet(name):
    pet = Pet.query.filter_by(name=name).first()
    pet_schema = PetSchema()
    result = pet_schema.dump(pet)
    return jsonify(result)

@app.route('/api/v1/dogs/<int:id>', methods=['GET'])
def get_dog(id):
    dog = Pet.query.filter_by(pet_type='dog').get(id)
    dog_schema = PetSchema()
    result = dog_schema.dump(dog)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
