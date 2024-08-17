from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class Users_data(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']


class UserProfile(serializers.ModelSerializer):
    phone_number = serializers.CharField(source='user_details.phone_number', read_only=True)
    profile_picture = serializers.ImageField(source='user_details.profile_picture', read_only=True)
    is_employee = serializers.BooleanField(source='user_details.is_employee', read_only=True)

    class Meta:
        model = User
        fields = ['id','first_name', 'last_name', 'phone_number', 'profile_picture', 'is_employee']