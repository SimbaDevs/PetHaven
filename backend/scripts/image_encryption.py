"""image encryption using bcrypt"""
import base64


def encode_to_base64(image_path: str):
    """encodes the image to base64

    Args:
        image_path (str): path to the image

    Returns:
        str: the encoded str
    """
    with open(image_path, 'rb') as image_file:
        encoded_str = base64.b64encode(image_file.read())
    return encoded_str

def decode_b64_to_image(encoded_str: str, output_path: str):
    """decodes str to image file

    Args:
        encoded_str (str): the base64 encoded string
        output_path (str): path to store the image file
    """
    image_data = base64.b64decode(encoded_str)
    
    with open(output_path, 'wb') as img_file:
        img_file.write(image_data)


# test the image encoding and decoding
# encode_img_str = encode_to_base64('Abby.jpg')

# print(encode_img_str)

# print("\nDecoding the base64 str to image...")
# decode_b64_to_image(encode_img_str, output_path='decoded.jpg')
