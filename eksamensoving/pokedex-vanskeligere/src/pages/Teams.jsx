import { useEffect, useState } from "react"
import TeamCard from "../components/TeamCard"

export default function Teams(){
    const [storedTeams, setStoredTeams] = useState([])

    const teams = [
        {
            name: "Instinct",
            color: "yellow",
            pokemons: [{
                name: "Pikachu",
                id: 25
            }, {
                name: "Charmander",
                id: 4
                }]
        },
        {
            name: "Mystic",
            color: "blue",
            pokemons: [{
                name: "Squirtle",
                id: 7
            }, {
                name: "Psyduck",
                id: 54
            }]   
        },
        {
            name: "Valor",
            color: "red", 
            pokemons: [{
                name: "Charmander",
                id: 4
            }, {
                name: "Bulbasaur",
                id: 1
            }]     
        }
    ]

    useEffect(()=>{
        localStorage.setItem('teams', JSON.stringify(teams))
        setStoredTeams(JSON.parse(localStorage.getItem('teams')) ?? [])
    },[])

    return(
        <main>
            <section className="flex">
            <h1>Teams</h1>
            {storedTeams?.map((team) => (
                <TeamCard key={team.name} team={team} />
            ))}
        </section>
        </main>
        
    )
}
