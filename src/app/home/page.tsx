"use client"

import { useEffect, useState } from "react";

interface IData {
  name: string;
  id: string;
}

export default function Home() {
    const [characters, setCharacters] = useState<IData[]>([])

 useEffect(() => {
  const load = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character/?page=1")
    const data = await res.json()
    setCharacters(data.results)
  };
  load()
}, [])

  return (
    <div>
      <h1>Requisição com fetch no client side</h1>
        {characters.map((item, index) => {
          return(
            <div key={index}>
              <h5>{item.id}</h5>
              <h2>{item.name}</h2>
              <br />
            </div>
          )
        })}
    </div>
  );
}