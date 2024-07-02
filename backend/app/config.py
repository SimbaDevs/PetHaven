import os

base_dir = os.path.abspath(os.path.dirname(__file__))
instance_dir = os.path.join(base_dir, '..', 'instance')

class Config:
    SECRET_KEY = "thisisasecretkey"

class Development(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///dev.db"

class Testing(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(
        instance_dir, 'pets-data.sqlite')    

class Production(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = "postgresql://user:password@localhost/dbname"
    
configs = {
    "development": Development,
    "production": Production,
    "default": Testing,
    "test": Testing
}
