import Link from "next/link";

type IData = {
    results: {
        name: string;
        id: string;
    }[]
}

const NoHookPage = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()

    return(
        <>
            <h1>Server side Page</h1>
        {data.results.map((item, index) => {
            return(
                <div key={index}>
                    <h2>{item.name}</h2>
                    <Link href={`/perso/${item.id}`}>ABRIR</Link>
                    <br /><br />
                </div>
            )
        })}
        </> 
    )
}

export default NoHookPage;