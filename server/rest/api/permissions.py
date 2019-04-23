from rest_framework.permissions import BasePermission
from .models import Riddle

class IsOwner(BasePermission):
    """Custom permission class to only allow owners to edit their riddles."""

    def has_object_permission(self, request, view, obj):
        """Return True if permission is granted to the riddle owner."""
        if isinstance(obj, Riddle):
            return obj.owner == request.user
        return obj.owner == request.user