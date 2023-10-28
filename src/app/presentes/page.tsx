'use client'
import { useEffect, useState } from "react";
import CardProduto  from "../components/CardProduto";
import { api } from "@/lib/api";
import { data } from "autoprefixer";


type Presente ={
  id : number,
  urlFoto: string,
  urlProduto :string,
  nomeProduto:string,
  comprado:boolean
}
export default function Home() {
  const [listaPresentes, setListaPresentes] = useState<Presente[]>([])
  useEffect( ()=>{
    async function fetchData() {
      try {
        const response = await api.get('/presentes')
        if (response.status === 200) {
        const list:Presente[] =  await response.data
        setListaPresentes(list)
        }        
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    } 
    fetchData();    
  } ,[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white-500">
      <p className="font-alt text-4xl sm:text-7xl md:text-6xl lg:text-5xl xl:text-9xl text-green-900">Gabriel e Beatriz</p>
      <p className="text-sans text-1xl p-1 m-auto w-100">Os Eletrodomésticos deverão ser 110V na cor preta :)</p>
      <div className='flex flex-1 flex-col justify-center align-center m-auto'>                     
      </div>
      <div className="flex flex-1 flex-row flex-wrap">
      {listaPresentes.map((item, index) => (
        <CardProduto key={index} data={item}/>       
      ))}        
      </div>
    </main>
  )
}