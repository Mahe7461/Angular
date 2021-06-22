from .views import RegisterAPI,LoginAPI
from regis import views
from django.urls import path
from knox import views as knox_views
from .views import ChangePasswordView
from django.urls import path
from django.conf.urls import url

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
     path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/change-password/', ChangePasswordView.as_view(), name='change-password'),
   
     url(r'^employee/$',views.employeeApi),
    url(r'^employee/([0-9]+)$',views.employeeApi), 

]