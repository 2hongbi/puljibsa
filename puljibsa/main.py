from keras.models import load_model
import glob
from PIL import Image
import numpy as np
import os


# 이미지 전처리
def preprocessing(img_path):
    """
    :param img_path: image가 있는 디렉토리 경로 (이미지 경로 X)
    :return: 전처리한 image의 numpy.ndarray
    """
    img_format_types = ['*.jpg', '*.png']   # 이미지 포맷 타입
    pre_image_path = []     # 이미지 경로
    for f in img_format_types:
        os.path.join(img_path, f)
        pre_image_path.extend(glob.glob(f))     # 포맷 타입인 모든 파일 검색

    pre_image_path = pre_image_path[0]      # 검색한 사진 중 하나만 선택 (지정한 path에 사진이 하나만 있다고 가정)
    img = Image.open(pre_image_path)
    img = img.convert("RGB")
    img = img.resize((64, 64))  # 64x64로 resize

    pre_data = np.asarray(img)
    pre_data = np.expand_dims(pre_data, axis=0)
    return pre_data


# 식물 종 예측
def predict_species(mod_path, img_path):
    """
    :param mod_path: h5 파일의 경로
    :param img_path: image 파일의 디렉토리 경로
    :return:
    """
    categories = ["African milk tree", "Areca palm", "Fatsia japonica", "Golden Pothos", "Heteropanax fragrans",
                  "Monstera", "Pachira aquatica", "Rubber fig", "Sansevieria", "Schefflera arboricola"]

    model = load_model(mod_path)    # 모델 불러오기

    image_data = preprocessing(img_path)    # 이미지 전처리
    y_prob = model.predict(image_data)
    predicted = y_prob.argmax(axis=-1)
    return categories[predicted[0]]


#   실행
if __name__ == '__main__':
    model_path = './10plants_model_a87.h5'
    image_path = './rrb.jpg'

    print(predict_species(model_path, image_path))


