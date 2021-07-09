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
    poop = <div id='dis' ><p>{thing.description}</p></div>
}




return (
    <section id={thing.id}>
        <button onClick={toggleDescription} id={thing.id} >{poop}</button>
        <button onClick={ () => like(thing.id)}>likes: {thing.likes}</button>
    </section>
)
}

export default GalleryListItem;