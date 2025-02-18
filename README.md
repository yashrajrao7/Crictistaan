# Crictistaan - Movie Review and Rating Platform

## Overview
Crictistaan is a web-based platform designed for movie enthusiasts to explore, review, and rate films. Users can browse top-rated, trending, and newly added movies while admins can manage movie records and moderate reviews to maintain quality content.

## Features
### **User Features:**
- Browse and search for movies.
- View top-rated, trending, and latest movies.
- Post, edit, and delete reviews.
- Rate movies.

### **Admin Features:**
- Add, update, and delete movies.
- Moderate user reviews (approve/reject inappropriate reviews).

## Tech Stack
- **Frontend:** React.js (Axios, React Router, Tailwind CSS/Material-UI)
- **Backend:** Spring Boot (RESTful API, JWT Authentication)
- **Database:** PostgreSQL
- **Version Control:** Git & GitHub

## Installation and Setup
### **1. Clone the Repository:**
```sh
 git clone https://github.com/your-username/Crictistaan.git
 cd Crictistaan
```

### **2. Backend Setup (Spring Boot):**
- Install Java (JDK 17 or above).
- Configure PostgreSQL
- Set up application.properties with database details.
- Run the Spring Boot application.
```sh
 mvn spring-boot:run
```

### **3. Frontend Setup (React.js):**
- Navigate to the frontend directory.
- Install dependencies and start the React app.
```sh
 cd frontend
 npm install
 npm start
```

## API Endpoints
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | /movies                | Fetch all movies    |
| POST   | /movies                | Add a new movie     |
| PUT    | /movies/{id}           | Update movie details|
| DELETE | /movies/{id}           | Delete a movie      |
| POST   | /reviews               | Add a review        |
| DELETE | /reviews/{id}          | Delete a review     |

## Future Enhancements
- AI-based movie recommendations.
- User profile & watchlists.
- Social sharing features.

## License
This project is licensed under the MIT License.

