import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feedback from "./components/Feedback";
import AverageRating from "./components/AverageRating";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <div className="home">
          <h1>Welcome to the Feedback Review System</h1>
          <p>Share your thoughts and let us know how we're doing!</p>
          <div className="navigation-buttons">
            <Link to="/feedback" className="nav-link button">Give Feedback</Link>
            <Link to="/admin" className="nav-link button">Admin Panel</Link>
          </div>
        </div>
        <Routes>
          <Route
            path="/feedback"
            element={
              <div className="feedback-page">
                <Feedback reviews={reviews} setReviews={setReviews} />
                <AverageRating reviews={reviews} />
              </div>
            }
          />
          <Route
            path="/admin"
            element={<AdminPanel initialReviews={reviews} setReviews={setReviews} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
