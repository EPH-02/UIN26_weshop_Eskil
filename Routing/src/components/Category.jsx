import { useOutletContext, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function Category() {
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    
    const[apiData, setApiData] = useState()
    const { slug } = useParams()

    console.log("Denne kommer fra Category", apiEndpoint)

    const getSignleData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl + slug)
        const data = await response.json()
        setApiData(data)
    }

    console.log(apiData)

    useEffect(()=>{
        getSignleData()
    },[slug])

    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name}></img>
            </section>
        </main>
    )
}