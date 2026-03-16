import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import PokemonList  from "../components/PokemonList"
import PokemonCard from "../components/PokemonCard"
export default function SearchResults() {
    const { searchQuery } = useOutletContext()
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getSearchResults = async () => {
            if (!searchQuery) {
                setSearchResults([])
                return
            }

            try {
                setError("")
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`)
                const data = await res.json()

                setSearchResults(data)
            console.log(data)
            } catch (err) {
                setSearchResults([])
                setError("404 Error")
            }
        }

        getSearchResults()
    }, [searchQuery])

    const pokemonDef = {
        name: searchResults?.name,
        id: searchResults?.id,
        spirtes: searchResults?.sprites
    }

    return (
        <main>
            <h1>Search Results for: {searchQuery}</h1>
            <PokemonCard pokemonDef={pokemonDef}></PokemonCard>
        </main>
        
    )
}