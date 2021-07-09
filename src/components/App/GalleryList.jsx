import GalleryListItem from "./GalleryListItem";

function GalleryList ({pictureList, like}) {
 
    let listGalleryPictures = pictureList.map((thing) => {
        return (
            <GalleryListItem
                thing={thing}
                like={like}/>
        )
    })
    return(
   
 
    <div id='dad'>
        {listGalleryPictures}
    </div>
)
}

export default GalleryList;


  // checked to make sure props were propping
        // console.log({pictureList});
    
//     <>
//     <h1>pics</h1>
//     <tbody>
//         {pictureList.map((thing) => (
//             <tr key={thing.id}>
// <td>{thing.description}</td>
//                 <img src={thing.path}/>
//             </tr>
            
//         ))}
//     </tbody>
//     </>