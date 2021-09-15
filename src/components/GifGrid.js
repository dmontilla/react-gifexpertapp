//import React, { useEffect, useState } from 'react'
import React from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifts } from './helpers/getGifs';
import { useFetchGifs } from './hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifts(category)
    //         .then(setImages);
    // }, [ category]);
    
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            {/* <h3>{category}</h3>
            <ol>
                {
                    images.map( img => (
                        <li key ={img.id}>{img.title}</li>
                    ))
                }
            </ol> */}
            {loading && <p>Loading</p>}
            <h3>{category}</h3>
            {
                images.map( img => (
                    <GifGridItem 
                        key = {img.id}    
                        {...img} 
                    />
                ))
            }
        </>
    )
}
