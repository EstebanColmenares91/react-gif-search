import React, { useState, useEffect } from 'react'
import { Gif } from "../Gif/Gif";
import { getGifs } from "../../services/getGifs";

function ListOfGif({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getGifs({
            keyword,
            limit: 12,
        })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
                setError(error);
            })
    }, [keyword])

    if(loading){
        return <h3>Cargando</h3>
    }

    return (
        <React.Fragment>
            {
                gifs.map(({ id, title, url }) => (
                    <Gif
                        id={id}
                        /* title={title} */
                        key={id}
                        url={url}
                    />
                ))
            }
        </React.Fragment>
    )
}

export { ListOfGif }