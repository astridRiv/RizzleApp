from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from .models import Riddle

# Create your tests here.

class ModelTestCase(TestCase):
    """Test suite for the riddle model."""
    
    def setUp(self):
        """Define the test client and other test variables."""

        user = User.objects.create(username="johndoe")
        self.riddleName = 'Test Riddle'
        self.riddleData = 'This is a test of the riddle model'
        self.riddleAnswer = 'Answer'
        self.latitude = '0.000000'
        self.longitude = '0.000000'
        self.riddle = Riddle(
            owner=user,
            riddleName=self.riddleName,
            riddleData=self.riddleData, 
            riddleAnswer=self.riddleAnswer,
            latitude=self.latitude,
            longitude=self.longitude
        )

    def test_create_riddle(self):
        """Test the riddle model can create a riddle."""
        old_count = Riddle.objects.count()
        self.riddle.save()
        new_count = Riddle.objects.count()
        self.assertNotEqual(old_count, new_count)

    def test_model_returns_readable_representation(self):
        """Test a readable string is returned for the model instance."""
        self.assertEqual(str(self.riddle), self.riddleName)

class ViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="johndoe")

        self.client = APIClient()
        self.client.force_authenticate(user=user)

        self.riddle_data = {
            'owner': user.id,
            'riddleName': 'Test Riddle',
            'riddleData': 'This is a test of the riddle model',
            'riddleAnswer' : 'Answer',
            'latitude' : '0.00000',
            'longitude' : '0.00000',
        }
        
        self.response = self.client.post(
            reverse('create'),
            self.riddle_data,
            format='json'
        )

    def test_api_create_riddle(self):
        """Test the api has riddle creation capability."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_get_riddle(self):
        """Test the api can get a given riddle."""
        riddle = Riddle.objects.get(id=1)

        response = self.client.get(
            '/riddles/',
            kwargs={'pk': riddle.id}, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, riddle)

    def test_api_update_riddle(self):
        """Test the api can update a given riddle."""
        riddle = Riddle.objects.get()

        change_riddle = {
            'riddleName' : 'Another Test Riddle',
            'riddleData' : 'This is a test of an updated riddle model',
            'riddleAnswer' : 'Another answer',
            'latitude' : '25.759947',
            'longitude' : '-80.374599',
            'isSolved' : 'True',
            'timeSolved' : '2020-01-01T00:00:00.000000Z'
        }

        response = self.client.put(
            reverse('details', kwargs={'pk': riddle.id}),
            change_riddle,
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_delete_riddle(self):
        """Test the api can delete a riddle."""
        riddle = Riddle.objects.get()

        response = self.client.delete(
            reverse('details', kwargs={'pk': riddle.id}),
            format='json',
            follow=True
        )
        
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_authorization(self):
        """Test that the api has user authorization."""
        new_client = APIClient()
        res = new_client.get('/riddles/', kwargs={'pk': 3}, format="json")
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)