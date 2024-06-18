from flask import Flask
from datetime import date
from config import Config
import os

basedir = os.path.abspath(os.path.dirname(__file__))

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)


app = create_app()
