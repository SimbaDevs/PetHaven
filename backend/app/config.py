import os

base_dir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(
        base_dir, 'pets-data.sqlite')
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = ""
    MAIL_USERNAME = 'muchemi.developer@gmail.com'  # Replace with your email
    MAIL_PASSWORD = "tmns jpmt dzii qces" # Replace with your email password
    MAIL_DEFAULT_SENDER = 'muchemi.developer@gmail.com'  # Replace with your email

