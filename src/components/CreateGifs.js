import React, { useEffect, useState } from 'react'
import { AddCategories } from './AddCategories';
import PropTypes from 'prop-types';
import { GetGifs } from './GetGifs';

export const CreateGifs = () => {
    const [categories, setcategories] = useState(['One piece']);

    return (
        <>
            <h2>Create App Gifs</h2>
            <h4>by: bryanSolórzano</h4>
            <hr />
            <AddCategories setcategories={setcategories} />
            <ol>
                {
                    categories.map((category) =>
                        <GetGifs
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}

AddCategories.propTypes = {
    setcategories: PropTypes.func.isRequired
}