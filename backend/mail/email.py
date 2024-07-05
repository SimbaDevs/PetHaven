import smtplib, ssl, os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.encoders import encode_base64
from dotenv import load_dotenv

load_dotenv()

port = 465  # using SMTP_SSL()
password = os.getenv("GMAIL_PWD")
sender_gmail = os.getenv("GMAIL_USERNAME")

mail_script_dir = os.path.dirname(os.path.abspath(__file__))
images_dir = os.path.join(mail_script_dir, '..', 'static', 'images')

def send_email(email_address, pet_name):

    subject = "Pet Adoption Confirmation"
    body = f"""
    Thank you for chosing to adopt {pet_name}.
    """

    msg = MIMEMultipart()
    msg["From"] = sender_gmail
    msg["To"] = email_address
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    context = ssl.create_default_context()

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", port=port, context=context) as server:
            server.login(sender_gmail, password)
            server.sendmail(sender_gmail, email_address, msg.as_string())
            print("Email sent successfully")
    except smtplib.SMTPException as e:
        print(f"SMTP error occurred: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

def send_confirmation_email(email, user, pet):
    msg = MIMEMultipart()
    
    msg["From"] = sender_gmail
    msg["To"] = email
    msg["Subject"] = "Adoption Request Confirmation"
    
    body = f"""
Dear {user},

Thank you for choosing PetHaven and for your interest in adopting {pet.name}. We are thrilled that you have decided to give a loving home to one of our pets.

Attached to this email, you will find a photo of {pet.name} along with the details you might find helpful. We hope you are as excited as we are about the newest addition to your family.

Here are some details about [Pet's Name]:
- Breed: {pet.breed}
- Age: {pet.age}
- Size: {pet.weight} Kgs
- Location: {pet.location}
- Arrival Date: {pet.arrival_date}
- Adoption Fee: {pet.adoption_fee}

Our team will be in touch with you soon to guide you through the adoption process and answer any questions you may have.

If you have any immediate questions, please feel free to reach out to us at pathaven@gmail.com or call us at +254 712 345 678.

Thank you once again for your kindness and for choosing PetHaven. We look forward to completing the adoption process with you and ensuring {pet.name} finds a loving home.

Warm regards,

The PetHaven Team        
    """
    msg.attach(MIMEText(body, 'plain'))
    pet_filename = f"{pet.name}.jpg"
    pet_file_path = os.path.join(images_dir, pet_filename)
    print(pet_file_path)
    
    # open file in binary mode
    with open(pet_file_path, 'rb') as attachment:
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())
        
    encode_base64(part)
    
    # add headers to the attachment part
    part.add_header(
    "Content-Disposition",
    f"attachement; filename= {pet_file_path}",
)
    
    msg.attach(part)
    
    context = ssl.create_default_context()
    
    with smtplib.SMTP_SSL("smtp.gmail.com", port=port, context=context) as server:
        server.login(sender_gmail, password)
        server.sendmail(sender_gmail, email, msg.as_string())
        print("Email sent successfully")
