import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [pictureList, setPictureList] = useState([]);
  
  useEffect(() => {
    getPictures()
  }, [])

  const getPictures = () => {
    axios.get('/gallery')
      .then(response => {
        setPictureList(response.data)
      })
      .catch(err => {
        console.log('GET',err);
      })
  }
console.log(pictureList);



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
