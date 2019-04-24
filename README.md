# Django REST Framework backend for Rizzle

The backend we've decided to use for our app is the Django REST Framework due to it's flexibility building
Web APIs. By building our app around a client-server model, we've simplified how our app interacts with 
with a database using representational state transfer, or REST. We created our own Web API so that our
app can access the resources from the backend by using HTTP methods. 

## How to get set up

To start running the backend service, make sure you have Python3, the package manager pip, and virtualenv installed.

## Installation

While in the server folder run

```bash
virtualenv env
```

To activate your virtual environment run 

```bash
source env/bin/activate
```

The equivalant script in Windows system is

```
\env\Scripts\activate.bat
```

Install the required software by running 

```bash
pip install -r requirements.txt
```

Once all the required software is installed, in the `rest` folder, run the server by executing

```bash
python manage.py makemigrations
python manage.py migrate --run-syncdb
python manage.py runserver
```

That's it!

## Testing

To run unit tests, execute 

```bash
python manage.py test
```

## Endpoints

The endpoints our client app needs to create, read, update, or destroy database resources are as follows:

### POST `users/`
- To create a new user
- Example request

```json
{
    "email" : "johndoe@email.com",
    "username" : "johndoe",
    "password" : "secretPassword"
}
```

## PUT `users/{id}`
- To update the current user. Must be authenticated as the owner of the user their trying to update.
- Example request

```json
{
    "email" : "John@gmail.com",
    "username" : "johnny",
    "password" : "Password1234"
}
```

### POST `get-token/`
- To login a user based on username and password. Returns a Token on success
- Example request 

```json
{
    "username" : "johndoe",
    "password" : "secretPassword"
}
```

## POST/GET `riddles/`
- To create a riddle object. GET retrieves all riddle object of the current user. Must be authenticated in
order to use both methods
- Example request

```json
{
    "riddleName" : "Name of riddle",  // Required
    "riddleData" : "This is a riddle. Try to solve me!", // Required
    "riddleAnswer" : "The answer", // Required
    "latitude" : 25.759947, // Required
    "longitude" : -80.374599, // Required
    "isSolved" : "True",
    "timeSolved" : "2019-04-25T00:00:00"
}
```

## PUT/GET/DELETE `riddles/{id}`
- To retrieve, update, or delete a riddle object. Must be authenticated as the owner of the riddle to use methods
- Example PUT request

```json
{
    "riddleName" : "New name of riddle",  // Required
    "riddleData" : "This is an updated riddle riddle. Try to solve me!", // Required
    "riddleAnswer" : "The updated answer", // Required
    "latitude" : 25.759947, // Required
    "longitude" : -80.374599, // Required
    "isSolved" : "False",
    "timeSolved" : "2019-04-25T09:00:00"
}
```