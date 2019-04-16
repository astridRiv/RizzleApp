from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = User
        fields = ('id', 'username', 'password', 'riddle', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')