import json
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import *
from .serializers import *
# Create your views here.
def users_data(request):
    users = User.objects.all()
    serializer = Users_data(users, many=True)
    return JsonResponse(serializer.data,safe=False)



def google_login(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        token = body.get('token')

        try:
            # Verify the token
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), '427114991398-t3fjvng591tif39rapolck0tn157d97r.apps.googleusercontent.com')

            # Extract user information
            email = idinfo['email']
            first_name = idinfo.get('given_name', '')
            last_name = idinfo.get('family_name', '')

            # Check if the user exists
            user, created = User.objects.get_or_create(email=email, defaults={
                'first_name': first_name,
                'last_name': last_name,
                'username': email
            })

            token, _ = Token.objects.get_or_create(user=user)

            return JsonResponse({'token':token.key,'user_id':user.id,'name':f'{user.first_name} {user.last_name}'})

        except ValueError:
            return JsonResponse({'error': 'Invalid token'}, status=400)

    return JsonResponse({'error': 'Bad request'}, status=400)


@api_view(['POST'])
def signIn(request):
    if request.method == 'POST':
        print('hello')
        data = request.data
        email = data.get('email')
        password = data.get('password')
        user = User.objects.filter(email=email).first()
        if user is None or not user.check_password(password):
            return JsonResponse({"error": "Invalid credentials"},status=500)
        token, created = Token.objects.get_or_create(user=user)
        return JsonResponse({'token':token.key,'user_id':user.id,'name':f'{user.first_name} {user.last_name}'}, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)


@api_view(['POST'])
def signUp(request):
    if request.method == 'POST':
        print('hello')
        data = request.data
        firstName = data.get('first_name')
        lastName = data.get('last_name')
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already exists"})
        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already exists"})
        user = User.objects.create_user(
        username=username,
        password=password,
        email=email,
        first_name=firstName,
        last_name=lastName
        )
        user.save()
        
        token, created = Token.objects.get_or_create(user=user)
        return JsonResponse({'token':token.key,'user_id':user.id,'name':f'{user.first_name} {user.last_name}'}, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)


@api_view(['GET'])
def get_user_profile(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    except UserProfile.DoesNotExist:
        return Response({'error': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = UserProfile(user)
    return Response(serializer.data)