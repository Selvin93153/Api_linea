import axios from 'axios';

const url = 'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

export const getAllcharacters = async () => {
  const response = await axios.get(url);
  console.log(response.data.drinks); // Ahora accede correctamente a los datos
  return response.data.drinks; // Devuelve los datos correctos
};
