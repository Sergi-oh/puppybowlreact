import axios from "axios"
import { useState, useEffect} from "react"
import {Link} from "react-router-dom"
import AddPlayerForm from "./AddPlayerForm"

const AllPlayers = () => {
    const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
        async function fetchAllPlayers () {
            const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/')
            setAllPlayers(data)
        }

        fetchAllPlayers()
    },[])

    return (
        <div>
            <h1>All Players</h1>
            <AddPlayerForm/>
            {
                allPlayers.map((post) => {
                    return(
                        <div key = {player.id}>
                            <Link to={`/posts/${player.id}`}>{player.name}</Link>
                    
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
export default AllPlayers