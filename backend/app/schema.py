from .models import Pet, Shelter, Vaccine, AdoptionFormSubmission
from flask_marshmallow import Marshmallow # type: ignore

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

class AdoptionFormSubmissionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AdoptionFormSubmission
