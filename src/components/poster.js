import { useEffect, useState } from "react"
import { get_image } from "../apis/image.api";


const Poster = ({movie_id}) => {
    // const [posters, setPosters] = useState([]);
    const [image, setImage] = useState({})

    useEffect(() => {
        get_image(setImage, movie_id);
    },[])

    useEffect(() => {
        console.log(Array(image))
    }, [image])

    return(
        <>
            {image.posters !== undefined && image.posters.length !== 0 && <img
                src={`https://image.tmdb.org/t/p/w500/${image.posters[0].file_path}`}
            >
            </img>}
        </>
    )
}

export default Poster;