import React, { useEffect, useState } from 'react';

const Finder = () => {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([])

    const getPhotos = (query) => {
        if (query) {
            fetch(`https://api.pexels.com/v1/search?query=${query}`, {
                headers: {
                    Authorization: "Ev02ycnqxwmyffbsOlDCgmxFB8ahp34nN2FmCraI9vx6UBd2p0psqvlg"
                }
            })
                .then(resp => {
                    return resp.json()
                })
                .then(data => {
                    if (data) {
                        setPhotos(data.photos);
                        return;
                    }
                })
        }
    }

    useEffect(() => {
        getPhotos(query);
    }, [query])
    console.log(photos)
    return (
        <div>
            <input placeholder='Buscador de imagenes' type='text' onChange={(e) => setQuery(e.target.value)} />
            <div className='d-flex flex-wrap'>
                {photos.map((photo) => <img style={{ height: '200px' }} className='col-3 object-fit-cover' key={photo.id} src={photo.src.original} />)}
            </div>
        </div>
    )
};

export default Finder