from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import jsonify
from datetime import date


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pets.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Shelter(db.Model):
    __tablename__ = 'Shelters'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=True)
    address = db.Column(db.String(255), nullable=True)
    phone_number = db.Column(db.String(15), nullable=True)
    email = db.Column(db.String(100), unique=True, nullable=True)
    pets = db.relationship('Pet', backref='shelter', lazy=True)

class Pet(db.Model):
    __tablename__ = 'Pets'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_type = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    weight = db.Column(db.Float, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    arrival_date = db.Column(db.Date, nullable=False, default=date.today)
    adoption_fee = db.Column(db.Float, nullable=False)
    shelter_id = db.Column(db.Integer, db.ForeignKey('Shelters.id'), nullable=False)
    image_url = db.Column(db.String(255), nullable=True)
    vaccines = db.relationship('Vaccine', backref='pet', lazy=True)

class Vaccine(db.Model):
    __tablename__ = 'vaccines'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('Pets.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    date_administered = db.Column(db.Date, nullable=False)

