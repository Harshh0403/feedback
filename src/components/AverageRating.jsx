import React from "react";

function AverageRating({ reviews }) {
  const approvedReviews = reviews.filter((r) => r.approved);
  const averageRating =
    approvedReviews.reduce((sum, r) => sum + Number(r.rating), 0) / 
      approvedReviews.length || 0;

  return (
    <div>
      <h3>Approved Feedback</h3>
      <ul>
        {approvedReviews.map((review, index) => (
          <li key={index}>
            {review.feedback} - {review.rating} Stars
          </li>
        ))}
      </ul>
      <h3>Average Rating: {averageRating.toFixed(1)}</h3>
    </div>
  );
}

export default AverageRating;
