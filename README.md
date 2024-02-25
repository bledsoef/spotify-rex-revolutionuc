# Spotify Rex

Spotify Rex is a web application that revolutionizes how users discover music recommendations from their friends and community.

<img src="https://github.com/bledsoef/spotify-rex-revolutionuc/assets/89226977/9a552caf-05e3-4815-b895-da3d757435e9" alt="image" height="300" width="500">



## Features

- **Recommendation System**: Users can create and share music recommendations with their friends and community.
- **Spotify Integration**: Seamlessly connect your Spotify account to import playlists and top tracks for better recommendations.
- **User Profiles**: Customize your profile, view your recommendations, and manage your music preferences.
- **Social Interaction**: Like, comment, and share recommendations with friends, and explore new music based on your network's tastes.

## Directory Structure

- **app**: Contains the main application logic and components.
  - **controllers**: Handles HTTP requests and responses.
  - **main.py**: Entry point for the application.
  - **rec.py**, **spotify.py**: Modules for recommendation and Spotify integration.
- **logic**: Additional logic and utility functions.
- **models**: Database models and schemas.
- **database**: Database management scripts and configurations.
- **src**: Frontend source code.
  - **view**: Contains views and components.
  - **feed**, **home**, **profile**, **received**, **requests**, **reviews**, **search**: Different views for the application.
- **rex_client**: Client-side application or module.
- **node_modules**: Node.js dependencies.
- **README.md**: You're currently reading it!
- **package.json**, **package-lock.json**: Node.js package configuration files.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Start the development server: `npm run dev` or `yarn dev`.
4. Access the application at `http://localhost:3000`.

## Technologies Used

- Frontend: React.js, Tailwind CSS, React Router
- Backend: Python
- Database: MySQL
- Spotify API
