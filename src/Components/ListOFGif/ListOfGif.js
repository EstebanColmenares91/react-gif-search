import React, { useState, useEffect } from 'react'
import { Gif } from "../Gif/Gif";
import { getGifs } from "../../services/getGifs";

function ListOfGif({ keyword }) {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({
            keyword,
            limit: 12,
        })
            .then((gifs) => setGifs(gifs))
            .catch((error) => console.error(error))
    }, [keyword])

    return gifs.map(({ id, title, url }) => (
        <Gif id={id} title={title} key={id} url={url} />
    ))
}

export { ListOfGif }