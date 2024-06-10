from app import app, Pet, db
from flask import jsonify, request
from schema import PetSchema
from flask_cors import CORS # type: ignore
from app import AdoptionFormSubmission
from flask_mail import Mail, Message # type: ignore


# Enable CORS
CORS(app)

mail = Mail(app)

def send_confirmation_email(recipient, pet):
    msg = Message('Adoption Confirmation', recipients=[recipient])
    msg.body = f"""
    Dear {recipient},

    Thank you for your interest in adopting {pet.name}. Here are the details of the pet:

    Name: {pet.name}
    Breed: {pet.breed}
    Age: {pet.age}
    Location: {pet.location}
    Adoption Fee: {pet.adoption_fee}

    We will contact you shortly with more details.

    Best regards,
    Pet Haven
    """

    # # Attach the pet's image if available
    # if pet.image_url:
    #     # assuming pet.image_url is something like 'static/images/pet_name.jpg'
    #     with app.open_resource(pet.image_url) as fp:
    #         msg.attach(f"/static/images/{pet.name}.jpg", "image/jpeg", fp.read())


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
    
    send_confirmation_email(data['email'], pet)
    
    return jsonify({'message': 'Adoption form submitted successfully!'}), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)
