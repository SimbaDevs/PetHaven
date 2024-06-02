from flask_marshmallow import Marshmallow
from flask import jsonify
from app import Pet, Shelter, Vaccine, app

ma = Marshmallow()

class VaccineSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Vaccine
        include_fk = True

class PetSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Pet
        load_instance = True

    vaccines = ma.Nested(VaccineSchema, many=True)
    image_url = ma.Method("get_image_url")

    def get_image_url(self, obj):
        return f"http://localhost:5000/static/images/{obj.name}.jpg"

class ShelterSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Shelter
        load_instance = True

    pets = ma.Nested(PetSchema, many=True)


@app.route('/api/v1/cats', methods=['GET'])
def get_cats():
    cats = Pet.query.all()
    cat_schema = PetSchema(many=True)
    result = cat_schema.dump(cats)
    return jsonify(result)
