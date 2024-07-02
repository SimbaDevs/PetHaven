from .schema import PetSchema
from .models import AdoptionFormSubmission, db, Pet
from flask_cors import CORS  # type: ignore
from flask import jsonify, request, Blueprint  # type: ignore
from backend.mail.email import send_email


# register as bp
bp = Blueprint('bp', __name__, url_prefix='/api/v1')

# get all pets
@bp.route("/pets", methods=["GET"])
def get_pets():
    pets = Pet.query.all()
    pet_schema = PetSchema(many=True)
    result = pet_schema.dump(pets)
    return jsonify(result)


# get pet by id
@bp.route("pets/<int:id>", methods=["GET"])
def get_pet(id):
    pet = Pet.query.get(id)
    pet_schema = PetSchema()
    result = pet_schema.dump(pet)
    return jsonify(result)


@bp.route("adopt", methods=["POST"])
def adopt():
    data = request.get_json()
    pet = Pet.query.get(data["pet_id"])
    if not pet:
        return jsonify({"message": "Pet not found!"}), 404

    new_adoption = AdoptionFormSubmission(
        first_name=data["first_name"],
        last_name=data["last_name"],
        email=data["email"],
        phone_number=data["phone_number"],
        address=data["address"],
        pet_id=data["pet_id"],
    )
    db.session.add(new_adoption)
    db.session.commit()

    send_email(data['email'], pet_name=pet.name)

    return jsonify({"message": "Adoption form submitted successfully!"}), 201
