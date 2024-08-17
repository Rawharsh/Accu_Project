from django.contrib import admin
from django.urls import path

from login.views import *


urlpatterns = [
    path('api/users',users_data, name='users'),
    path('api/signIn/',signIn,name='signin'),
    path('api/signUp/',signUp,name='signup'),
    path('api/google-login/', google_login, name='google-login'),
    path('api/profile/<int:user_id>/', get_user_profile, name='user_profile'),
]