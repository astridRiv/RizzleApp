from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=30, blank=False, unique=True)
    password = models.CharField(max_length=30, blank=False)
    riddle = models.ForeignKey(Riddle, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return a human readable representation of the model instance."""
        return "{}".format(self.name)

class Riddle(models.Model):
    riddleName = models.CharField(max_length=30, blank=False)
    riddleData = models.TextField(blank=False)
    latitude = models.DecimalField(max_digits=10, decimal_places=10, blank=False)
    longitude = models.DecimalField(max_digits=10, decimal_places=10, blank=False)
    isSolved = models.BooleanField(default=False)
    timeSolved = models.DateTimeField(default=timezone.now)

    def __str__(self):
        """Return a human readable representation of the model instance."""
        return "{}".format(self.name)
