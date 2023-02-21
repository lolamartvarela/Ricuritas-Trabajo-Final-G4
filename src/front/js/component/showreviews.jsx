import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ShowReviews() {
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

    return (
        <div>
            <h2>Reseñas de nuestros clientes
            </h2>
            <ul> {
                reviews.map((review) => (
                    <li key={
                        review.id
                    }>
                        <p>Username: {
                            review.username
                        }</p>
                        <p>Puntos: {
                            review.puntos
                        }</p>
                        <p>Comentario: {
                            review.comentario
                        }</p>
                    </li>
                ))
            } </ul>
        </div>
    );
}
