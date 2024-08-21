import React from 'react';
import CardPizza from './CardPizza';
import {pizzas} from '../data/pizzas'; // Ruta correcta

const Home = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))}
    </div>
  );
};

export default Home;
