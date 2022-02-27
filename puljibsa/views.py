from django.shortcuts import render
from django.http import HttpResponse
from .models import Question, PJSUser


def index(request):
    qs_1 = Question.objects.get(id=1)
    qs_2 = Question.objects.get(id=2)
    qs_3 = Question.objects.get(id=3)
    qs_4 = Question.objects.get(id=4)

    context = {
        'qs_1': qs_1,
        'qs_2': qs_2,
        'qs_3': qs_3,
        'qs_4': qs_4,
    }
    return render(request, 'puljibsa/index.html', context)


def intro(request):
    return render(request, 'puljibsa/introduction.html')


def upload(request):
    if request.method == 'POST':
        for img in request.FILES.getlist('imgs'):
            photo = PJSUser()
            photo.image = img
            photo.save()


def result(request):
    return render(request, 'puljibsa/result.html')