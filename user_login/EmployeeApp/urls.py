from django.conf.urls import url
from django.urls import path
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
   url(r'^Answer/$',views.answerApi),
    url(r'^Answer/([0-9]+)$',views.answerApi),

    url(r'^employee/$',views.employeeApi),
    url(r'^employee/([0-9]+)$',views.employeeApi), 

    url(r'^question/$',views.questionApi),
    url(r'^question/([0-9]+)$',views.questionApi), 

    url(r'^link/$',views.linkApi),
    url(r'^link/([0-9]+)$',views.linkApi), 
    
    url(r'^subcat/$',views.subCatApi),
    url(r'^subcat/([0-9]+)$',views.subCatApi), 
   
] 