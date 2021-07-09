import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from './GalleryList';
import './App.css';


function App() {
  // sets GET call into use state
  
  
  //calls components on load
  useEffect(() => {
    GetPictures()
  }, [])

  let [pictureList, setPictureList] = useState([]);

  const GetPictures = () => {
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
        <GalleryList pictureList={pictureList}/>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App; 
