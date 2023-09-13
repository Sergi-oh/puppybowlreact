import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

const SinglePlayer = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState(null)

    useEffect(()=> {
        async function fetchPlayer(){
            const {data} = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/${id}`)
            setPlayer(data)
        }

        fetchPlayer()
    },[])

    return(
        <div>
            <h1>{player && player.name}</h1>
            <h2>{player && player.breed}</h2>
        </div>
    )
}

export default SinglePlayer