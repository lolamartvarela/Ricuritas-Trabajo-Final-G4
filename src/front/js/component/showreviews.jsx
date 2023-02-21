import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://3001-lolamartvar-ricuritastr-yk0h84oabi1.ws-us87.gitpod.io/api/reviews');
                setReviews(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchReviews();
    }, []);

    const StarRating = ({puntos}) => {
        const maxPuntos = 5;
        const estrellas = [];
        for (let i = 1; i <= maxPuntos; i++) {
            if (i <= puntos) {
                estrellas.push (
                    <i key={i}
                        className="fas fa-star"></i>
                );
            } else {
                estrellas.push (
                    <i key={i}
                        className="far fa-star"></i>
                );
            }
        }
        return (
            <div> {estrellas} </div>
        );
    }

    return (
        <div>
            <h2>Reseñas de nuestros clientes</h2>
            <div className="m-auto w-50">
                {
                reviews.map((review) => (
                    <div key={
                            review.id
                        }
                        className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex mb-2">
                                <h5 className="card-title me-2">Cliente: {
                                    review.username
                                }</h5>
                                <StarRating puntos={
                                    review.puntos
                                }/>
                            </div>
                            <p className="card-text">Comentario: {
                                review.comentario
                            }</p>
                        </div>
                    </div>
                ))
            } </div>
        </div>
    );
}

export default ShowReviews;
