from django.shortcuts import render
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .permissions import IsOwner
from .serializers import RiddleSerializer, UserSerializer
from .models import Riddle

class CreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""

    def get_queryset(self):
        user = self.request.user
        return Riddle.objects.filter(owner=user)
    
    serializer_class = RiddleSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

    def perform_create(self, serializer):
        """Save the post data when creating a new riddle."""
        serializer.save(owner=self.request.user)

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""

    queryset = Riddle.objects.all()
    serializer_class = RiddleSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

class UserCreateView(generics.ListCreateAPIView):
    """View to create a user"""
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        User.objects.create_user(username=self.request.username, email=self.request.email, password=self.request.password)

class UserDetailsView(generics.RetrieveAPIView):
    """View to retrieve a user instance."""
    queryset = User.objects.all()
    serializer_class = UserSerializer