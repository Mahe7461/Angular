from django.db import models

# Create your models here.

class Question(models.Model):
    QuestionId = models.AutoField(primary_key=True)
    
    
    Question=models.CharField(max_length=50, blank=True)

class Answer(models.Model):
    AnswerId = models.AutoField(primary_key=True)
    
    Answer=models.CharField(max_length=50,blank=True)
    Question=models.CharField(max_length=50, blank=True)

class SubCat(models.Model):
    SubCatId = models.AutoField(primary_key=True)
    
    Answer=models.CharField(max_length=50,blank=True)
    Question=models.CharField(max_length=50, blank=True)
    SubCategory=models.CharField(max_length=50, blank=True)
    
class Link(models.Model):
    LinkId = models.AutoField(primary_key=True)
    Question=models.CharField(max_length=50, blank=True)
    Answer=models.CharField(max_length=50, blank=True)
    SubCategory=models.CharField(max_length=50, blank=True)
    Link=models.CharField(max_length=50, blank=True)

class Employees(models.Model):
    
    EmployeeId = models.AutoField(primary_key=True)
    FirstName=models.CharField(max_length=50)
    LastName=models.CharField(max_length=50)
    Email=models.EmailField()
    DOB=models.DateField()
    ContactNumber=models.CharField(max_length=50)
    Password=models.CharField(max_length=50)
    Department=models.CharField(max_length=50)
    KnownLanguage=[models.CharField(max_length=50)]
    Country=models.CharField(max_length=50)
    State=models.CharField(max_length=50)
    City=models.CharField(max_length=50)

    
