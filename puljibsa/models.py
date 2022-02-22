import datetime
from django.db import models
from django.utils import timezone


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