# Collaborative Storytelling App

Welcome to the Collaborative Storytelling App! This application allows users to collaboratively create stories by contributing sentences. Each story starts with a title and a first sentence, and other users can add to the story. The app supports secure authentication, responsive design, and a user-friendly interface.

## Table of Contents

- Features
- Technologies Used
- Installation
- Usage
- Authentication Flow
- Folder Structure
- Development
- Contributing
- License

## Features

- User Authentication: Secure registration, login, and logout using JWT.
- Collaborative Storytelling: Users can create and contribute to stories.
- Responsive Design: Fully responsive layout for desktop and mobile devices.
- Custom UI: Designed with plain CSS for a unique and clean look.
- Story Management: View ongoing and completed stories, with each contribution credited to the author.

## Technologies Used

- Frontend:
  Url:-- https://peppy-klepon-d351d3.netlify.app/

  - React
  - React Router
  - Axios
  - Context API
  - Plain CSS

- Backend:
  - Url :- https://redsoftware-backend.onrender.com/
  - JSON Server (for mock API and data management)

# Landing Page

![alt text](<frontend/src/assets/Screenshot (1716).png>)

# Contributions Page

![alt text](<frontend/src/assets/Screenshot (1717).png>)

# Login

![alt text](<frontend/src/assets/Screenshot (1718).png>)

# Register Page

![alt text](<frontend/src/assets/Screenshot (1719).png>)

## Installation

To get started with the Collaborative Storytelling App, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/story-app.git
cd story-app
```

2. Install dependencies:

```bash
npm install
```

3. Run JSON Server:

```bash
npx json-server --watch db.json --port 5000
```

Ensure you have a db.json file in the root directory for data.

4. Start the React app:

```bash
npm start
```

The app will run on http://localhost:3000.

# Usage

1.  Registration:

        - Register a new account using an email and password.

2.  Login:

    - Log in with your credentials to access the main features.

3.  Creating Stories:

    - Once logged in, create a new story by providing a title and the first sentence.

4.  Contributing to Stories:

    - Add your contributions to ongoing stories, one sentence at a time.

5.  Viewing Stories:

    - Browse through ongoing and completed stories, and read contributions from other users.

## Authentication Flow

The authentication flow uses JWT for secure user management. User data is stored in the db.json file, and tokens are managed locally:

- Login: Users log in with email and password. A JWT token is issued and stored in localStorage.
- Protected Routes: Routes are protected using a custom PrivateRoute component, ensuring only authenticated users can access certain pages.
- Logout: Users can log out, clearing the token and user data from local storage.

## Folder Structure

```java
story-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Home.js
│ │ ├── Story.js
│ │ ├── CreateStory.js
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Navbar.js
│ │ └── PrivateRoute.js
│ ├── context/
│ │ └── AuthContext.js
│ ├── styles/
│ │ └── styles.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── db.json
├── package.json
└── README.md
```

## Development

To contribute to the project, follow these steps:

- Fork the repository.
- Create a new branch: git checkout -b feature-branch-name
- Make your changes.
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin feature-branch-name
- Create a pull request.
