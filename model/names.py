# coding=utf-8
from io import BytesIO

from PIL import Image
from keras.models import model_from_json
from sklearn.externals import joblib

json_file = open('model.json')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)

loaded_model.load_weights("model.h5")

binarizer = joblib.load('./binarizer.bin')


def photo_to_array(photo):
    img = Image.open(BytesIO(photo)).convert('L')
    width, height = img.size  # Get dimensions

    new_width = min(*img.size)

    left = (width - new_width) / 2
    top = (height - new_width) / 2
    right = (width + new_width) / 2
    bottom = (height + new_width) / 2

    img = img.crop((left, top, right, bottom))
    img.thumbnail((64, 64))
    img /= 255
    img = img.reshape((-1, 64 ** 2))
    return img


def predict_names(photo):
    arr = photo_to_array(photo)
    prediction = loaded_model.predict_proba(arr.reshape((-1, 64 ** 2)))
    from collections import defaultdict
    names = defaultdict(list)
    for key, val in sorted(list(zip(binarizer.classes_, *prediction)),
                           key=lambda x: x[1], reverse=True):
        names[round(val, 3)].append(key)

    keys = sorted(names.keys(), reverse=True)

    selected_names = []
    for key in keys:
        if len(names[key]) > 0 and len(selected_names) <= 3:
            for name in names[key]:
                if len(selected_names) <= 3:
                    selected_names.append(name)

    return selected_names
