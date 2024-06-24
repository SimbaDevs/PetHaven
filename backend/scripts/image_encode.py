"""handles image file encoding"""
import base64


def encode_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        image_data = image_file.read()
        base64_encoded_data = base64.b64encode(image_data)
        base64_string = base64_encoded_data.decode('utf-8')
        
        print("decoded image to {}".format(base64_string))
        
        return base64_string
