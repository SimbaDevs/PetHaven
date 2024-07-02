import os
from .config import configs
from flask import Flask  # type: ignore
from flask_sqlalchemy import SQLAlchemy # type: ignore
from flask_cors import CORS # type: ignore

db = SQLAlchemy()

def create_app(config=None):
    app = Flask(__name__)
    app.config.from_object(configs[config])
    
    db.init_app(app)
    CORS(app=app)
    
    with app.app_context():
        from . import routes
        from . import models
        app.register_blueprint(routes.bp)


    return app

app = create_app(os.getenv("FLASK_ENV") or "default")


    
