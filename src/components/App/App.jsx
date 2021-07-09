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

function like(id) {
    console.log('ooooh a like', id);
    axios.put(`/gallery/like/${id}`)
    .then(response => {
        console.log('OK but why do you like it?');
        GetPictures();
    })
    .catch(err => {
        console.log('its a simple put',err);
    })
}



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList pictureList={pictureList} like={like}/>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App; 
