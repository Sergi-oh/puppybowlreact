import { useState } from "react"

const AddPlayerForm = () =>{
    const [name, setName] = useState("")
    const [body, setBody] = useState("")
    const [playerId, setPlayerId] = useState(1)

    async function handleSubmit(e) {
        e.preventDefault()
        const {data} = await axios.player('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/',{name, body, playerId})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
               <label>
                <input
                value={name}
                type="text"
                name="name"
                placeholder="Enter Player Name here"
                onChange={(e) => setName(e.target.value)}
                />
                </label> 
                <label>
                <input
                value={body}
                type="text"
                name="name"
                placeholder="Enter Body here"
                onChange={(e) => setBody(e.target.value)}
                />
                </label> 
                <label>
                <input
                value={playerId}
                type="text"
                name="name"
                placeholder="Enter Player ID here"
                onChange={(e) => setPlayerId(e.target.value)}
                />
                </label> 

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddPlayerForm