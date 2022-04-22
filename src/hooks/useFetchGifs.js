import { useEffect, useState } from 'react'
import { getGit } from '../helpers/getGits'

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGit(category)
            .then(images =>
                setTimeout(() => {
                    setstate({
                        data: images,
                        loading: false
                    })
                }, 1000)
            );
    }, [category]);


    return state;
}
