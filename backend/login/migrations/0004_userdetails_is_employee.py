# Generated by Django 5.0.6 on 2024-08-15 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='is_employee',
            field=models.BooleanField(default=False),
        ),
    ]
