import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import {GitGridItem} from './GitGridItem';
/* import { getGifs } from '../helpers/getGits'; */

export const GitGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  /* const [images, setImages] = useState([]);

  const getImages = async() =>{
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  useEffect( () => {
    getImages();  
  }, []) */
  /* useEffect( () => {
    getGifs(category)
      .then(newImages => setImages(newImages));
  
  }, []) */


  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
          /* isLoading
          ? ( <h2>Cargando...</h2> )
          : null */
        }
        <div className='card-grid'>
          {
            images.map( (image) => (
              <GitGridItem 
                key={image.id}
                { ...image }
              />
            ))  
          }
        </div>     
    </>
  )
}

GitGrid.propTypes = {}
