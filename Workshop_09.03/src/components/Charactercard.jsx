import { useState, useEffect } from 'react'

export default function CharacterChard({char}){
    const apiUrl = "https://rickandmortyapi.com/api/character"
    const {name, image, species, origin} = char

    const [apiData, setApiData] = useState({})

     const getData = async()=>{
        const response = await fetch(apiUrl)
        const data = await response.json()
        setApiData(data.results)
     }

     useEffect(()=>{
        getData()
     },[])

    return (
       <articel>
            <h3>{apiData?.name}</h3>
            <img src={apiData?.image} alt={apiData?.name} />
            <p>{apiData?.species}</p>
            <p>{apiData?.origin.name}</p>
       </articel>
    )
}