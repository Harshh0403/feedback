import React, { useState } from "react";

function Feedback({ reviews, setReviews }) {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback && rating) {
      setReviews([...reviews, { feedback, rating, approved: false }]);
      setFeedback("");
      setRating("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <textarea
        placeholder="Enter your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      >
        <option value="">Select Rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Star{num > 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <button type="submit" className="submit-button">Submit Feedback</button>
    </form>
  );
}

export default Feedback;
