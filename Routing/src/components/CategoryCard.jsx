import { useEffect } from "react"
import { useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { Link } from "react-router-dom"


export default function CategoryCard({name, url}){
    const {setApiEndpoint} = useOutletContext()
    const [apiData, setApiData] = useState({})

    const {slug} = useParams()

    const getData = async()=>{
        const response = await fetch(url)
        const data = await response.json() 

        setApiData(data)
    }

    console.log("Denne kommer fra CategoryCard", slug)
    
    useEffect(()=> {
        getData()
    }, [])
        return(
        <article>
            <h3>{name}</h3>
            <p>{apiData?.id}</p>
            {slug === 'type' ? <img src={`../type_img/${apiData?.name}.png`} /> :
            <img src={apiData?.sprites?.front_default} alt={apiData?.name} /> }
            <ul>
                {apiData?.stats?.map((item) => <li key={apiData?.name + item?.stat?.name}>{item?.stat?.name}: {item?.base_stat}</li>)}
            </ul>
            <p>{url}</p>
            <Link to={apiData?.name} onClick={()=> setApiEndpoint(url)}>Les mer om {apiData?.name}</Link>
        </article>
    )
}