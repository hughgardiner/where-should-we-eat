import React, { useState } from 'react';
import './App.css';

function App() {
  const [restaurant, setRestaurant] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Where should we eat??
        </p>
        <label>{restaurant}</label>
        <br/>
        <button onClick={() => setRestaurant(selectRestaurant)}>Pick a Restaurant!</button>
      </header>
    </div>
  );
}

function selectRestaurant() {
  let restaurants = ['Chipotle', 'Cava', 'District Taco', 'Good Greek', 'Bibimix'];
  return restaurants[Math.floor(Math.random() * restaurants.length)];
}

export default App;
