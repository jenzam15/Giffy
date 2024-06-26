import getSingleGif from "Services/getSingleGif";
import { useGifs } from "./useGifs";
import { useEffect, useState } from "react";

export default function useSingleGif({ id }) {
    const { gifs } = useGifs()

    const gifFormCache = gifs.find(singleGif =>
        singleGif.id === id)

    const [gif, setGif] = useState(gifFormCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!gif) {
            setIsLoading(true)
            getSingleGif({ id })
                .then(gif =>{
                    setGif(gif)
                    setIsLoading(false)
                    setIsError(false)
                }).catch(err =>{
                    setIsLoading(false)
                    setIsError(true)
                })

        }

    },[gif, id])


    return { gif, isLoading, isError }
}
