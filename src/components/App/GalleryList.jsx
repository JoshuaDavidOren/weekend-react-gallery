function GalleryList ({pictureList}) {
return(
    // console.log({pictureList});
    
    <>
    <h1>pics</h1>
    <tbody>
        {pictureList.map((path) => (
            <tr key={path.id}>
<td>{path.description}</td>
                <img src={path.path}/>
            </tr>
        ))}
    </tbody>
    </>
)
}

export default GalleryList;