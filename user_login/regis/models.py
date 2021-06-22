from django.db import models

# Create your models here.
class em(models.Model):
    email=models.EmailField( max_length=254, primary_key=True)
    def __str__(self):
        return self.email
