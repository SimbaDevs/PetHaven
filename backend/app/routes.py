from .schema import PetSchema
from .models import AdoptionFormSubmission, db, Pet
from flask_cors import CORS  # type: ignore
from flask import jsonify, request, Blueprint  # type: ignore
from backend.mail.email import send_email, send_confirmation_email
import base64


# register as bp
bp = Blueprint('bp', __name__, url_prefix='/api/v1')

# get all pets
@bp.route("/pets", methods=["GET"])
def get_pets():
    pets = Pet.query.all()
    pet_schema = PetSchema(many=True)
    result = pet_schema.dump(pets)
    return jsonify(result)

# send pagination object of 12 pet objects
@bp.route("/pets/pagination")
def get_paginated_pets():
    page = request.args.get('page', 1, type=int)
    per_page = 10
    pagination = Pet.query.paginate(
        page=page,
        per_page=per_page,
        error_out=False
    )
    items = pagination.items
    
    response = {
        'items': [{
            'id': item.id,
            'name': item.name,
            'breed': item.breed,
            'type': item.pet_type,
            'weight': item.weight,
            'age': item.age,
            'location': item.location,
            'adoption_fee':item.adoption_fee,
            'arrival_date': item.arrival_date,
            'image_str': base64.b64encode(item.image_str).decode('utf-8') \
                if item.image_str else None,
        }for item in items],
        'pagination': {
            'page': pagination.page,
            'per_page': pagination.per_page,
            'total_items': pagination.total,
            'total_pages': pagination.pages,
            'has_next': pagination.has_next,
            'has_prev': pagination.has_prev,
            'next_page': pagination.next_num,
            'prev_page': pagination.prev_num
        }
    }
    
    return jsonify(response)

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
    
    email_address = data['email']
    user_firstname = data['first_name']

    send_email(email_address, pet_name=pet.name)
    send_confirmation_email(email=email_address, user=user_firstname, pet=pet)

    return jsonify({"message": "Adoption form submitted successfully!"}), 201
