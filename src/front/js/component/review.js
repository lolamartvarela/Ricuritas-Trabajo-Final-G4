import React, { useState, useContext } from 'react';

const Review = () => {
  const { store } = useContext(Context);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  function submitReview(e) {
    e.preventDefault();
    // Lógica para enviar la revisión
  }

  function handleRatingChange(e) {
    setRating(parseInt(e.target.value, 10));
  }

  function handleReviewChange(e) {
    setReview(e.target.value);
  }

  return (
    <div>
      <form onSubmit={submitReview}>
        <div className="mb-3">
          <label>
            Calificación:
            <select className="form-select" value={rating} onChange={handleRatingChange}>
              <option value="0">Selecciona una calificación</option>
              <option value="1">1 estrella</option>
              <option value="2">2 estrellas</option>
              <option value="3">3 estrellas</option>
              <option value="4">4 estrellas</option>
              <option value="5">5 estrellas</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label>
            Reseña:
            <textarea className="form-control" value={review} onChange={handleReviewChange}></textarea>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Review;