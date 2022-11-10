import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { AddCategory, GitGrid } from './components';
/* import AddCategory from './components/AddCategory';
import GitGrid from './components/GitGrid'; */

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories])
    }    

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory
                /* setCategories={setCategories} */
                onNewCategory={onAddCategory}
            />

            {
                categories.map( (category) => (
                    <GitGrid 
                        key={ category } 
                        category={category}
                    />
                ))
            }
            
        </>
    )
}

GifExpertApp.propTypes = {}

export default GifExpertApp