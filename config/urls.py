from django.contrib import admin
from django.urls import path, include
from puljibsa import views

urlpatterns = [
    path('', views.index),
    path('introduction/', views.intro),
    path('result/', views.result),
    path('admin/', admin.site.urls),
]
