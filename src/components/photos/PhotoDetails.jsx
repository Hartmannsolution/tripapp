import { useEffect, useState } from 'react';
import photoFacade from '../../photolinks';
import { useParams  } from 'react-router-dom';
export default () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState({url:""});

    useEffect(() => {
       const photo = photoFacade.getPhoto(Number.parseInt(id));
       setPhoto(photo);
    });

    return (
        <>
        {/* <img src={url} alt="photo" width="300"/> */}
        <h1>PHOTO {id}:</h1>
        <img src={photo.url} alt="photo" width="300"/>
        </>
    )
};