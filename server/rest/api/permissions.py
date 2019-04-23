from rest_framework.permissions import BasePermission
from django.contrib.auth.models import User
from .models import Riddle

class IsOwnerOfRiddle(BasePermission):
    """Custom permission class to only allow owners to edit their riddles."""

    def has_object_permission(self, request, view, obj):
        """Return True if permission is granted to the riddle owner."""
        if isinstance(obj, Riddle):
            return obj.owner == request.user
        return obj.owner == request.user

class IsOwnerOfUser(BasePermission):
    """Custom permission class to only allow users edit their own instances"""
    def has_object_permission(self, request, view, obj):
        return request.user == obj