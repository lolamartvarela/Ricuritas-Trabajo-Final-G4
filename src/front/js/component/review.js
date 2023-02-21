import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaStar } from 'react-icons/fa';
import swal from 'sweetalert';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const handleClick = (value) => {
    setRating(value);
  };

  const content = (
    <div>
      <div className="d-flex">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={ratingValue}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleClick(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#666666'}
                size={30}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
    </div>
  );

  return content;
};

const showRatingAlert = () => {
  const content = document.createElement('div');
  ReactDOM.render(<Rating />, content);

  swal({
    title: 'Califica nuestro servicio',
    content: content,
    buttons: {
      confirm: {
        text: 'Enviar',
        value: null,
        visible: true,
        className: '',
        closeModal: true,
      },
    },
    closeOnClickOutside: true,
  }).then(() => {
    swal({
      title: '¡Gracias por calificar nuestro servicio!',
      icon: 'success',
      button: {
        text: 'Ok',
        value: null,
        visible: true,
        className: '',
        closeModal: true,
      },
    });
  });
};

export default showRatingAlert;