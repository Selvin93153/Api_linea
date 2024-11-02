import { useState, useEffect } from 'react';
import { getAllcharacters } from './api/httpRequest';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DrinkDetail from './DrinkDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const drinksData = await getAllcharacters();
        setDrinks(drinksData);
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    };
    fetchDrinks();
  }, []);

  return (
    <Router>
      <div className="container">
        <h1 className="text-center text-white">Bienvenido a mi API en línea</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="cardContainer">
                {drinks && drinks.length > 0 ? (
                  drinks.map((item) => (
                    <Link to={`/drink/${item.idDrink}`} key={item.idDrink} className="card-link">
                      <div className="card">
                        <img src={item.strDrinkThumb} className="card-img-top" alt={item.strDrink} />
                        <div className="card-body">
                          <h5 className="card-title">{item.strDrink}</h5>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-center text-white">Cargando bebidas...</p>
                )}
              </div>
            }
          />
          <Route path="/drink/:id" element={<DrinkDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
