from app import app
from flask_mail import Mail, Message # type: ignore


mail = Mail(app)

def send_confirmation_email(recipient, pet):
    msg = Message('Adoption Confirmation', recipients=[recipient])
    msg.body = f"""
    Dear {recipient},

    Thank you for your interest in adopting {pet.name}. Here are the details of the pet:

    Name: {pet.name}
    Breed: {pet.breed}
    Age: {pet.age}
    Location: {pet.location}
    Adoption Fee: {pet.adoption_fee}

    We will contact you shortly with more details.

    Best regards,
    Pet Haven
    """
    mail.send(msg)

    # Attach the pet's image if available
    if pet.image_url:
        # assuming pet.image_url is something like 'static/images/pet_name.jpg'
        with app.open_resource(pet.image_url) as fp:
            msg.attach(f"/static/images/{pet.name}.jpg", "image/jpeg", fp.read())

