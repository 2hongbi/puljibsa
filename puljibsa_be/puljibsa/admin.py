from django.contrib import admin

from .models import Question, Answer, Plant, PlantStatus, PJSUser

admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Plant)
admin.site.register(PlantStatus)
admin.site.register(PJSUser)