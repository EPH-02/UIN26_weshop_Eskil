import { useEffect, useState } from 'react'
import CharacterChard from '../components/Charactercard'

export default function Characters() {
  const apiUrl = "https://rickandmortyapi.com/api/character"

  const [apiData, setApiData] = useState([])

  const getData = async()=>{
    try{
      const response = await fetch(apiUrl)
      const data = await response.json()
      setApiData(data.results)
    } catch(error){
      console.error(error)
    }
  }

  console.log("Karakterer", apiData)

  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
    <main>
    <h1>Karakter</h1>
      <section>
        {apiData?.map((char) => <CharacterChard key={char.id} char={char} />)}
      </section>
    </main>
    </>
    
    
  )
}
