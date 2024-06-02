from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy # type: ignore
from flask_marshmallow import Marshmallow # type: ignore
from schema import PetSchema
from models import Pet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pets.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)


@app.route('/api/pets', methods=['GET'])
def pets():
    pets = Pet.query.all()
    pet_schema = PetSchema(many=True)
    return jsonify(pet_schema.dump(pets))

if __name__ == '__main__':
    app.run(debug=True)
