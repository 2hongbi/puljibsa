from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('introduction/', views.intro),
    path('result/', views.result),
]