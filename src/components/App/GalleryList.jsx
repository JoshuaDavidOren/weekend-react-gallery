import GalleryListItem from "./GalleryListItem";

function GalleryList ({pictureList}) {
 
    let listGalleryPictures = pictureList.map((thing) => {
        return (
            <GalleryListItem
                thing={thing}/>
        )
    })
    return(
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
    <div>
        {listGalleryPictures}
    </div>
)
}

export default GalleryList;