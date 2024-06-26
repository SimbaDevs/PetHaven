""" encodes the image to base64 text """
import base64


def encode_to_base64(img_path):
    """encodes and image to base64 string

    Args:
        img_path (str): path to the image

    Returns:
        str: the base64 encoded string of the image
    """
    with open(img_path, 'rb') as image_file:
        encoded_string = base64.b64encode(image_file.read())
        return encoded_string.decode('utf-8')
