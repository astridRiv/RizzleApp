from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from django.utils import timezone

class Riddle(models.Model):
    owner = models.ForeignKey('auth.User', related_name='riddles', on_delete=models.CASCADE)
    riddleName = models.CharField(max_length=30, blank=False)
    riddleData = models.TextField(blank=False)
    riddleAnswer = models.CharField(max_length=30, blank=False)
    latitude = models.FloatField(blank=False)
    longitude = models.FloatField(blank=False)
    isSolved = models.BooleanField(default=False)
    timeSolved = models.DateTimeField(default=(timezone.now))
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return a human readable representation of the model instance (ie the riddle name)"""
        return "{}".format(self.riddleName)

@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)