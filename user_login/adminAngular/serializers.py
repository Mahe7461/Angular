#from models import adminModel
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import adminModel
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = adminModel
        fields = ('username','password')
        

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = adminModel
        fields = ('username', 'password')


        extra_kwargs = {'password': {'write_only': True}}

    
class changepass(serializers.Serializer):
    model= User
    old_password=serializers.CharField(required=True)
    new_password=serializers.CharField(required=True)
