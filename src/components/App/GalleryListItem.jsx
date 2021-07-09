import React, {useState} from 'react';

function GalleryListItem ({thing}) {

const [isDescription, setIsDescription] = useState(false);

const toggleDescription = ()=> {

console.log('at least you button works');
setIsDescription(!isDescription)
}










}

export default GalleryListItem;