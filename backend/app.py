from flask import Flask
from flask_sqlalchemy import SQLAlchemy # type: ignore
from flask_marshmallow import Marshmallow # type: ignore
# from flask_migrate import Migrate
from flask import jsonify
from datetime import date
import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
'sqlite:///' + os.path.join(basedir, 'pets-data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587 
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'muchemi.developer@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = os.environ['MAIL_PASSWORD'] # Replace with your email password
app.config['MAIL_DEFAULT_SENDER'] = 'muchemi.developer@gmail.com'  # Replace with your email


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


# db.create_all()
# def create_app():
#     app = Flask(__name__)
#     app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pets.db'
#     db.init_app(app)
#     ma.init_app(app)
#     migrate = Migrate(app, db)
#     return app

# app = create_app()
