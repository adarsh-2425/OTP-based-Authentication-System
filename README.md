# OTP based Authentication System

A simple OTP (One-Time Password) based authentication system built using Node.js, Express, and MongoDB.

## Features

- User registration with email verification using OTP
- User login with OTP verification
- User profile route with authentication

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adarsh-2425/OTP-based-Authentication-System.git
   ````
   
1. Install dependencies:
   ```bash
   cd OTP-based-Authentication-System
   npm install
  ```
  ```
2. Configure environment variables:  

Create a .env file in the root directory and set the following variables:

```bash
MONGODB_URI=your-mongodb-uri
```

3. Run the application:

```bash
npm start
```

## API Endpoints

### Registration

- **POST auth/registration**: Register a new user and verify their email using OTP.

### Login

- **POST auth/login**: Login with OTP verification.

### Profile

- **GET auth/profile**: Get user profile with authentication.



## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer (for email OTP)
- JWT (JSON Web Tokens)

## Usage

1. Register a new user by providing their email. An OTP will be sent to their email for verification. Use the route `/verify-otp/registration`.

2. Login using the registered email and the OTP received in their email. Use the route `/verify-otp/login`.

3. Access the profile route (`/profile`) to get user information. Requires authentication.


## Screenshots

1. Registration:
   ![Registration](/public/images/registration.png)

2. Registration OTP:
   ![Registration OTP](/public/images/registration_otp.png)

3. Email Example:
   ![Email Example](/public/images/email_example.png)

4. Login:
   ![Login](/public/images/login.png)

5. Login OTP:
   ![Login OTP](/public/images/login_otp.png)

6. JWT Token:
   ![JWT Token](/public/images/token.png)

7. Profile:
   ![Profile](/public/images/profile.png)



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

