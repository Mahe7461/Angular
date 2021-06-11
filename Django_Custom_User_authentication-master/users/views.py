from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from rest_framework.response import Responseb
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status


#from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from .serializers import changepass
from rest_framework.permissions import IsAuthenticated   

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        return Response({
        
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })
from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ``                                 
    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
    
         
        if serializer.is_valid():
            # Check old password
            
            response = {                                                                                                                                                                                                                                                                  
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': '  assword updated successfully',
                'data': [],
            
            }
            login(request, user)
            
            return super(LoginAPI, self).post(request, format=None,)
        return Response(response)
