from flask import Flask  # type: ignore
from flask_sqlalchemy import SQLAlchemy # type: ignore
from flask_cors import CORS # type: ignore
# from .config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    
    db.init_app(app)
    CORS(app=app)
    
    with app.app_context():
        from . import routes
        from . import models
        app.register_blueprint(routes.bp)  # Register the Blueprint


    return app

    
