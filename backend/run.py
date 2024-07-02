from app import create_app
import os

app = create_app(os.getenv("FLASK_ENV") or "default")


if __name__ == "__app__":
    app.run(debug=True)
