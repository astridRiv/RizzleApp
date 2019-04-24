from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Riddle

class RiddleSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Riddle
        fields = (
            'id',
            'owner',
            'riddleName',
            'riddleData',
            'riddleAnswer',
            'latitude',
            'longitude',
            'isSolved',
            'timeSolved',
            'date_created',
            'date_modified'
        )
        read_only_fields = ('date_created', 'date_modified')

        extra_kwargs = {
            'riddleAnswer': {
                'write_only': True
            }
        } 

class UserSerializer(serializers.ModelSerializer):
    """A user serializer to aid in authentication and authorization."""

    riddles = serializers.PrimaryKeyRelatedField(
        many = True, queryset = Riddle.objects.all()
    )

    class Meta:
        """Map this serializer to the default django user model."""
        model = User
        fields = ('id', 'email', 'username', 'password', 'riddles')
        read_only_fields = ('id', 'riddles')
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        } 