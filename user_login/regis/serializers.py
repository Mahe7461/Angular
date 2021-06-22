from rest_framework import serializers
from django.contrib.auth.models  import User
from .models import em

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','email')
        

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user
class changepass(serializers.Serializer):
    model= User
    old_password=serializers.CharField(required=True)
    new_password=serializers.CharField(required=True)
class empdetail(serializers.Serializer):
    model= User
    EmployeeId=serializers.CharField(required=True)
    firstName=serializers.CharField(required=True)
    lastName=serializers.CharField(required=True)
    contactNumber=serializers.CharField(required=True)
    country=serializers.CharField(required=True)
    state=serializers.CharField(required=True)
    city=serializers.CharField(required=True)
    gender=serializers.CharField(required=True)
    knownlanguage=serializers.CharField(required=True)