# OTP Authentication System

A simple OTP (One-Time Password) based authentication system built using Node.js, Express, and MongoDB.

## Features

- User registration with email verification using OTP
- User login with OTP verification
- User profile route with authentication
- Delete users (admin only) with role-based authorization

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adarsh-2425/otp-authentication-system.git
   
1. Install dependencies:
   ```
   cd otp-authentication-system
  npm install
```
2. Configure environment variables:  

Create a .env file in the root directory and set the following variables:

```
MONGODB_URI=your-mongodb-uri
```
3. Run the application:

```
npm start
```

## API Endpoints

### Registration

- **POST /registration**: Register a new user and verify their email using OTP.

### Login

- **POST /login**: Login with OTP verification.

### Profile

- **GET /profile**: Get user profile with authentication.

### Delete User (Admin Only)

- **DELETE /remove/:username**: Delete a user (admin only) with role-based authorization.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Nodemailer (for email OTP)
- JWT (JSON Web Tokens)

## Usage

1. Register a new user by providing their email. An OTP will be sent to their email for verification.

2. Login using the registered email and the OTP received in their email.

3. Access the profile route (`/profile`) to get user information. Requires authentication.

4. Admin users can delete other users using the delete route (`/remove/:username`). Admin role is required for authorization.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

