from app import app, Pet
from flask import jsonify
from schema import ShelterSchema, PetSchema


@app.route('/api/v1/cats', methods=['GET'])
def get_cats():
    cats = Pet.query.all()
    cat_schema = PetSchema(many=True)
    result = cat_schema.dump(cats)
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
