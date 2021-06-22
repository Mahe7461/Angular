from django.contrib import admin
from .models import Answer,SubCat, Employees, Question, Link
# Register your models here.
admin.site.register(Answer)
admin.site.register(Employees)
admin.site.register(Question)
admin.site.register(Link)
admin.site.register(SubCat)