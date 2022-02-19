from django.shortcuts import render
from django.http import HttpResponse
from .models import Question, Answer


def index(request):
    return render(request, 'puljibsa/index.html')


def intro(request):
    return render(request, 'puljibsa/introduction.html')


def result(request):
    return render(request, 'puljibsa/result.html')