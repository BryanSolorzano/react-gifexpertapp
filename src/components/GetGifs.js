import React, { useEffect, useState } from 'react'
import { getGit } from '../helpers/getGits'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GetItemGit } from './GetItemGit'

export const GetGifs = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid '>
                {
                    images.map(img =>
                        <GetItemGit
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>)
}
