from . import db
from datetime import date


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
    name = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    pet_type = db.Column(db.String(50), nullable=False)
    weight = db.Column(db.Float, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    arrival_date = db.Column(db.Date, nullable=False, default=date.today)
    adoption_fee = db.Column(db.Float, nullable=False)
    shelter_id = db.Column(db.Integer, db.ForeignKey('Shelters.id'), nullable=False)
    image_str = db.Column(db.Text, nullable=True)
    vaccines = db.relationship('Vaccine', backref='pet', lazy=True)

class Vaccine(db.Model):
    __tablename__ = 'vaccines'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('Pets.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    date_administered = db.Column(db.Date, nullable=False)


class AdoptionFormSubmission(db.Model):
    __tablename__ = 'AdoptionFormSubmissions'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=True)
    address = db.Column(db.String(255), nullable=True)
    submission_date = db.Column(db.Date, nullable=False, default=date.today)
    pet_id = db.Column(db.Integer, db.ForeignKey('Pets.id'), nullable=False)
    pet = db.relationship('Pet', backref='adoption_form_submissions', lazy=True)
