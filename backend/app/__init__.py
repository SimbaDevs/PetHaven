from flask import Flask  # type: ignore

app = Flask(__name__)

from app import routes


