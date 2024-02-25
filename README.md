# Spotify Rex

Spotify Rex is a web application that revolutionizes how users discover music recommendations from their friends and community.

<img src="https://github.com/bledsoef/spotify-rex-revolutionuc/assets/89226977/9a552caf-05e3-4815-b895-da3d757435e9" alt="image" height="400" width="600">



## Features

- **Recommendation System**: Users can create and share music recommendations with their friends and community.
- **Spotify Integration**: Seamlessly connect your Spotify account to import playlists and top tracks for better recommendations.
- **User Profiles**: Customize your profile, view your recommendations, and manage your music preferences.
- **Social Interaction**: Like, comment, and share recommendations with friends, and explore new music based on your network's tastes.

## Directory Structure

```
.
├── app
│   ├── controllers
│   │   ├── (Handles HTTP requests and responses)
│   ├── main.py
│   ├── rec.py
│   └── spotify.py
├── logic
│   └── (Additional logic and utility functions)
├── models
│   └── (Database models and schemas)
├── database
│   └── (Database management scripts and configurations)
├── src
│   └── view
│       ├── feed
│       ├── home
│       ├── profile
│       ├── received
│       ├── requests
│       ├── reviews
│       └── search
├── rex_client
├── node_modules
├── README.md
├── package.json
└── package-lock.json
```

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Start the development server: `npm run dev` or `yarn dev`.
4. Database Setup (see below)
5. Access the application at `localhost`.

## Database Setup
1. Install a MySQL database server on your machine if you haven't already.
2. Update the `connection.py` file with your MySQL database connection details, such as the database URL, username, and password.
3. Run the `reset_database.py` script to create the necessary tables and initialize the database schema.
5. Make sure the database is running and accessible before starting the application.

## Technologies Used

- Frontend: React.js, Tailwind CSS, React Router
- Backend: Python
- Database: MySQL
- Spotify API

## Built by Finn, Steven, Ali, and Daize from Berea College
