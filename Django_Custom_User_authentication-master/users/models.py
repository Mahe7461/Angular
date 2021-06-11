
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager

class CustomUser(AbstractUser):
    GENDER_CHOICES=(
    ('M','Male'),
    ('F','Female'),
    ('O', 'Other'),
    )
    username=None
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()
    date_of_birth = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.email
