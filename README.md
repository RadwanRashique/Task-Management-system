# Task Management System 📝

The Task Management System is a web application designed to help users organize and track their tasks effectively. It provides a user-friendly interface for managing tasks, including features for adding, editing, and deleting tasks. The system also includes authentication and login functionality to ensure secure access to user-specific task lists. 🔐

## Technologies Used 💻

### Backend
- **Express**: Backend framework of Node.js for handling server-side logic and routing. 🚀
- **MongoDB**: NoSQL database for storing user data and task information. 📊
- **Mongoose**: MongoDB object modeling for Node.js, providing a straightforward schema-based solution to model application data. 🍃
- **bcrypt**: Library for hashing passwords securely. 🔒
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT) for user authentication. 🔑
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express. 🔄
- **dotenv**: Module for loading environment variables from a .env file into process.env. 📁

### Frontend
- **React**: JavaScript library for building user interfaces. ⚛️
- **react-router-dom**: Library for handling routing in React applications. 🛣️
- **axios**: Promise-based HTTP client for making API requests from the frontend. 🌐
- **react-icons**: Library for adding icons to React applications. 🎨

- ## How to Use 🚀

1. Clone the git repository.
2. Install dependencies by running `npm install` in the root directory.
3. Set up environment variables by creating a `.env` file in the root directory with the following content:
**PORT=5000
MONGO_URL=mongodb+srv://your-mongodb-connection-string
SECRET=your-secret-key**

4. Start the backend server by running `npm start` in the root directory.
5. Navigate to the client directory by running `cd client`.
6. Install frontend dependencies by running `npm install`.
7. Start the frontend server by running `npm start`.
8. Access the application in your browser at `http://localhost:3000`.

## Usage Instructions 📋

- Sign up for a new account by providing the required details, including username, email, phone number, and password. Make sure to follow the validation rules provided.
- Log in with your registered email and password.
- Once logged in, you will be redirected to the task dashboard.
- On the task dashboard, you can view, add, edit, and delete tasks.
- Use drag and drop functionality to reorder tasks.
- Log out when you're done using the application.




