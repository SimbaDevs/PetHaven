import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(email_address, pet_name):
    port = 465  # using SMTP_SSL()
    password = "sqmzguzsqzpxibuy"  # Replace with your app-specific password

    sender_gmail = "muchemi7857@gmail.com"
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
