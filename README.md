# Noms&Bits REST API - v1.0
This is a RESTful API built with Node.js, Express.js and PostgreSQL that provides registration, user data retrieval, user deletion and other functionalities for the Noms&Bits web application.


## API URL
```
  https://nomsnbits-rest-api.onrender.com
```
- Deployed in [Render](https://render.com/)


## ToDo 
- Login & Authorization


## Getting Started
To get started with this project, you should have Node.js, Express.js and PostgreSQL installed on your machine. It is recommended to create a virtual environment for your project. Refer [Here](https://pypi.org/project/nodeenv/)


## Testing
**Client**: RESTClient on [VScode Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)


## API Endpoints
This API has the following endpoints:


-  `GET /`
**Description**: Returns a 200 status code and a JSON message "OK" when the server is running.<br>


- `POST /auth/register`
**Description**: Allows a user to register for an account with a unique username, email, and password.
**Example**: 
  * Request 
    ```
    POST http://URL/api/auth/register
    Content-Type: application/json

    {
      "username": "test123",
      "email": "test123@email.com",
      "password": "test-password",
      "regDate": "2023-02-20"
    }
    ```
    
  * Response 
    ```json
    {
        "status": 200,
        "message": "Successfully Registered the Account"
    }
    ```

- `GET /user/:username` 
**Description**: Retrieves the data of a user with the specified username.
**Example**: 
  * Response 
  ```json
  {
  "status": 200,
  "data": [
    {
      "username": "john_doe",
      "email": "john_doe@example.com",
      "password": "$2b$08$7z1Mx.McDCMzQyjYKj7.3uJqfkB7V2OZJb9X9q3CmrsKzdOwNUy8W",
      "registration_date": "2022-01-11"
      }
    ]
  }
  ```
- `DELETE /user/:username`
**Description**: Deletes the account of a user with the specified username
**Example**: 
  * Response
  ```json
  {
    "status": 200,
    "message": "User data has been deleted"
  }
  ```

- `PUT /user/:username/update-uname/:newuname`
**Description**: Allows a user to update their username.
**Example**: 
  * Response 
  ```json 
  {
    "status": 200,
    "message": "Successfully Updated the username"
  }
  ```

- `PUT /user/:username/update-passwd/:newpasswd`
**Description**: Allows a user to update their password.
**Example**:
  * Response 
  ```json 
  {
    "status": 200,
    "message": "Successfully Updated the Password"
  }
  ```

- `PUT /user/:username/update-email/:newemail`
**Description**: Allows a user to update their login email.
**Example**: 
  * Response 
  ```json 
  {
    "status": 200,
    "message": "Successfully Updated the Login Email"
  }
  ```

- `POST /auth/login`
**Description**:
**Example**: 

## README format
```
- 
**Description**:
**Example**: 
```
