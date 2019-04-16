from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from django.test import TestCase
from .models import User

# Create your tests here.

class ModelTestCase(TestCase):
    def setUp(self):
        """Define the test client and other test variables."""
        self.firstName = "John"
        self.lastName = "Doe"
        self.email = "JDoe@email.com"
        self.password = "Password1234"
        self.user = User(firstName=self.firstName, lastName=self.lastName, email=self.email, password=self.password)

    def create_user(self):
        """Test the bucketlist model can create a User."""
        old_count = User.objects.count()
        self.user.save()
        new_count = User.objects.count()
        self.assertNotEqual(old_count, new_count)

class ViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Define the test client and other test variables."""
        self.client = APIClient()
        self.user_data = {'firstName' : 'John', 'lastName' : 'Doe', 'email' : 'JDoe@email.com', 'password' : 'Password1234'}
        self.response = self.client.post(
            reverse('create'),
            self.user_data,
            format="json")

    def test_api_create_user(self):
        """Test the api has user creation capability."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)