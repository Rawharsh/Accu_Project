# Generated by Django 5.1 on 2024-08-17 05:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0004_userdetails_is_employee'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserDetails',
        ),
    ]
