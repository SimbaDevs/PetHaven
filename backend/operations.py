import os

# Specify the directory path
directory_path = "static/images/cats"

# Create an empty list to store file names
file_names = []

# Loop through all files in the directory
for filename in os.listdir(directory_path):
    file_path = os.path.join(directory_path, filename)
    
    if os.path.isfile(file_path):
        file_names.append(filename)

# Print the list of file names
print(file_names)

cats = ['Janet.jpg', 'Jane.jpg', 'Raney.jpg', 'Abby.jpg', 'Princess.png',
        'George.jpg', 'Ava.jpg', 'Peaches.png', 'Sunshine.jpg',
        'Priscilla.jpg', 'Louise.jpg', 'Sparkles.png', 'Molly.jpg']

