from django.db import models
from datetime import datetime

class User(models.Model):
    username=models.CharField(primary_key=True, max_length=10)
    firstname=models.CharField(max_length=10)
    lastname=models.CharField(max_length=10)
    email=models.EmailField()
    password=models.CharField(max_length=10)

class Video(models.Model):
    id = models.AutoField(primary_key=True)
    title=models.CharField(max_length=20)
    image=models.ImageField(upload_to="pics/")
    video=models.FileField(upload_to="videos/")
    video_type=models.CharField(max_length=10)
    date=models.DateTimeField(auto_now_add=True)
    desc=models.CharField(max_length=100)

    def __str__(self):
        return self.title
