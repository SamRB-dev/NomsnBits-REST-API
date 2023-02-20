# Noms&Bits REST API - v1.0
This is a RESTful API built with Node.js, Express.js and PostgreSQL that provides registration, user data retrieval, user deletion and other functionalities for the Noms&Bits web application.

## Getting Started
To get started with this project, you should have Node.js, Express.js and PostgreSQL installed on your machine. It is recommended to create a virtual environment for your project. Refer [Here](https://pypi.org/project/nodeenv/)

## API Endpoints
This API has the following endpoints:

## GET /
### Description: Returns a 200 status code and a JSON message "OK" when the server is running.

## POST /auth/register
### Description: Allows a user to register for an account with a unique username, email, and password.