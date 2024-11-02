import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DrinkDetail = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    const fetchDrinkDetail = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setDrink(response.data.drinks[0]);
      } catch (error) {
        console.error("Error fetching drink details:", error);
      }
    };
    fetchDrinkDetail();
  }, [id]);

  if (!drink) return <p>Loading...</p>;

  return (
    <div className="container text-center">
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="img-fluid" />
      <p><strong>Category:</strong> {drink.strCategory}</p>
      <p><strong>Glass:</strong> {drink.strGlass}</p>
      <p><strong>Instructions:</strong> {drink.strInstructions}</p>

      {/* Botón para regresar a la página principal */}
      <Link to="/" className="btn btn-primary mt-3">
        Regresar a la página principal
      </Link>
    </div>
  );
};

export default DrinkDetail;
