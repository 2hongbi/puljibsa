from django.shortcuts import render
from django.http import HttpResponse
from .models import Question, Answer


def index(request):
    return render(request, 'puljibsa/index.html')


def qna(request):
    return render(request, 'puljibsa/qna.html')