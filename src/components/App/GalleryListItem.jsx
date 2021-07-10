import {useState} from 'react';

function GalleryListItem ({thing, like}) {

const [isDescription, setIsDescription] = useState(true);

const toggleDescription = ()=> {
console.log('at least your button works', isDescription);
setIsDescription(!isDescription)
}
let poop = <img src={thing.path}/>;
if (!isDescription && 
<img src={thing.path}/>){
    poop = <div id='dis' ><h3>{thing.description}</h3></div>
}




return (
    <section id={thing.id}>
        <div id='dis' onClick={toggleDescription} id={thing.id} >{poop}</div>
        <button onClick={ () => like(thing.id)}>likes: {thing.likes}</button>
    </section>
)
}

export default GalleryListItem;