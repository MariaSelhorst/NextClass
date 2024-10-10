import Image from "next/image";

interface IPerso {
    params: {
        id:string;
    }
}

interface IData {
    id: string;
    name: string;
    status: string;
    species:string;
    image: string;
}

interface IDataStaticIndex {
    results: IData[];
}

const Perso = async ({ params: {id} } : IPerso) => {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data: IData = await res.json()

    return(
        <div>
            <h1>{data.name}</h1>
            <h2>{data.id}</h2>
            <h3>{data.status}</h3>
            <h4>{data.species}</h4>
            <Image className="w-[300px] h-auto" src={data.image} alt="Imagens da API" width={200} height={300} priority={true}/>
        </div>
    )
}

export default Perso

export async function generateStaticParams() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IDataStaticIndex = await res.json()

    return data.results.map((item) => item.id.toString())
}