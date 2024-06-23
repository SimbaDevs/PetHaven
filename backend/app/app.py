from flask import Flask  # type: ignore
from config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    return app


app = create_app()
