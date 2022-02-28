import datetime
from django.db import models


class PJSUser(models.Model):
    # user_id  = auto_increment
    # user_plants_code
    answer_1 = models.IntegerField()
    answer_2 = models.IntegerField()
    answer_3 = models.IntegerField()
    answer_4 = models.IntegerField()
    user_pic = models.ImageField(upload_to='puljibsa', blank=True, null=True)

    def __str__(self):
        return self.answer_1 + '/' + self.answer_2 + '/' + self.answer_3 + '/' + self.answer_4


class Question(models.Model):
    question_id = models.IntegerField(unique=True)
    question_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.CharField(max_length=200)
    # votes = models.IntegerField(default=0)

    def __str__(self):
        return self.answer_text


# 농사로
class Plant(models.Model):
    plt_cd = models.CharField(unique=True, max_length=10)
    plt_nm = models.CharField(max_length=100)
    plt_enm = models.CharField(max_length=100)
    plt_exp = models.TextField()    # 한줄 설명
    plt_water = models.TextField()
    plt_amount_water = models.TextField()
    plt_location = models.TextField()
    plt_disease = models.TextField()

    def __str__(self):
        return self.plt_nm


class PlantStatus(models.Model):
    plants = models.ForeignKey(Plant, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    plt_status_content = models.TextField()

    def __str__(self):
        return self.plants.plt_nm + '/' + self.answer.answer_text + ' : ' + self.plt_status_content