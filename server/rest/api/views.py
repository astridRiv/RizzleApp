from django.shortcuts import render
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .permissions import IsOwnerOfRiddle, IsOwnerOfUser
from .serializers import RiddleSerializer, UserSerializer
from .models import Riddle

class CreateView(generics.ListCreateAPIView):
    """View to POST and GET a riddle instance"""

    def get_queryset(self):
        user = self.request.user
        return Riddle.objects.filter(owner=user)

    def perform_create(self, serializer):
        """Save the post data when creating a new riddle."""
        serializer.save(owner=self.request.user)
    
    serializer_class = RiddleSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwnerOfRiddle)

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """View to GET, PUT, and DELETE a riddle instance"""
    queryset = Riddle.objects.all()
    serializer_class = RiddleSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwnerOfRiddle)

class UserCreateView(generics.CreateAPIView):
    """View to POST a user instance"""
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        password = make_password(self.request.data['password'])

        serializer.save(password=password)

class UserDetailsView(generics.UpdateAPIView):
    """View to PUT a user instance."""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwnerOfUser)

    def perform_update(self, serializer):
        password = make_password(self.request.data['password'])

        serializer.save(password=password)