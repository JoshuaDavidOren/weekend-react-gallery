import Axios from 'axios';
import React, {useState} from 'react';

function GalleryListItem ({thing}) {

const [isDescription, setIsDescription] = useState(true);

const toggleDescription = ()=> {
console.log('at least you button works', isDescription);
setIsDescription(!isDescription)
}
let poop = <img src={thing.path}/>;
if (!isDescription && 
<img src={thing.path}/>){
    poop = <div id='dis' ><p>{thing.description}</p></div>
}

function like () {
    console.log('ooooh a like', thing.id);
    Axios.put(`/gallery/:${thing.id}`)
    .then(response => {
        console.log('OK but why do you like it?');
    })
    .catch(err => {
        console.log('its a simple put Joshua come on',err);
    })
}


return (
    <section id={thing.id}>
        <button onClick={toggleDescription} id={thing.id} >{poop}</button>
        <button onClick={like}>like: {thing.likes}</button>
    </section>






)

}

export default GalleryListItem;