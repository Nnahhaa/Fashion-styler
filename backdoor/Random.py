import os
import random
from PIL import Image

"""
# NEED FOLDER PATH
def rando_images(folder_path):
    try:
        files = os.listdir(folder_path)
        images = [file for file in files if file.lower().endswith(('.png', '.jpg', '.jpeg', 'gif'))]
    
    if not images:
            print("Womp womp")
            return None
    
    random_image = random.choice(images)
        random_image_path = os.path.join(folder_path, random_image)
        return random_image_path

def display_image(image_path):
    try:
        if image_path and os.path.isfile(image_path):
            with Image.open(image_path) as img:
                img.show()
                print("{image_path}")
        else:
            print("{image_path}")

    except Exception as e:
        print(f"haha: {e}")

def show_random_image_from_folder(folder_path):
    random_image_path = rando_images(folder_path)
    display_image(random_image_path)


import os
import random

"""

#NEED PATH

folder_path = "/path/to/dir"
random_file = random.choice(os.listdir(folder_path))
random_image_path = os.path.join(folder_path, random_file)