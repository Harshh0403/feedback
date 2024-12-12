import React, { useState } from "react";

function AdminPanel({ initialReviews, setReviews }) {
  const [reviews, setReviewsState] = useState(initialReviews);

  const handleApproval = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].approved = true;
    setReviewsState(updatedReviews);
    setReviews(updatedReviews);
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviewsState(updatedReviews);
    setReviews(updatedReviews);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-item ${review.approved ? "approved" : "pending"}`}
          >
            <p>Rating: {review.rating} Stars</p>
            <p>{review.feedback}</p>
            <div className="admin-actions">
              <button
                onClick={() => handleApproval(index)}
                disabled={review.approved}
              >
                {review.approved ? "Approved" : "Approve"}
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
