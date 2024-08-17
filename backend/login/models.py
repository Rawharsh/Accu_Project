from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class UserDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_details')
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    is_employee = models.BooleanField(default=False)


    def save(self, *args, **kwargs):
        if self.user.is_superuser:
            self.is_employee = True
        super(UserDetails, self).save(*args, **kwargs)


    def _str_(self):
        return f"{self.user.username}"