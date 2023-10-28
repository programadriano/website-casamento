'use client'
import Image from 'next/image'
import { useState } from 'react';
import { api } from '@/lib/api';
const CardProduto = ({ data }: { data: any }) => {
  const pixuruco = 'data:image/jpeg;base64,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'
  const [modalAberto, setModalAberto] = useState(false);

  const handleClick = () => {    
    setModalAberto(true);
  };

  const handleCloseModal = () => {    
    setModalAberto(false);
  };
  
  const handleCompraConfirmado = async () => {   
    data.comprado=true
    try {
      const response = await api.put(`/presentes/${data.id}`,data); 
      if (response.status === 200) {
        window.open(data.urlProduto, '_blank');        
        setModalAberto(false);
      }
    } catch (error) {
      setModalAberto(false);
      console.error('Erro ao buscar dados:', error);
    } 
  };
  return (
    <div className={`flex flex-1 flex-col items-center p-16 m-2 bg-white-100 w-80 max-h-[450px] rounded-3xl ${data.comprado ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className='flex flex-1 flex-col items-center mb-auto w-64 h-max-content'>
        <Image src={data.urlFoto} alt="produto" className='h-full block w-full'
        width={600} 
        height={400} />
        <p className="text-sans text-black">
           {data.nomeProduto}
        </p>
      </div>
      <a onClick={handleClick} className='text-sans text-black p-2 border border-green-900 rounded-3xl hover:bg-green-900 hover:text-white-100'>Acesse o link</a>
      {(modalAberto && data.id != 100) && (      
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white-100 p-4 rounded-lg text-center">
          <p className="text-black">Deseja comprar este produto?</p>
          <button className="text-white bg-green-500 p-2 m-2 rounded" onClick={handleCompraConfirmado}>Confirmar</button>
          <button className="text-white bg-red-500 p-2 m-2 rounded" onClick={handleCloseModal}>Cancelar</button>
        </div>
      </div>
      )}
      {(modalAberto && data.id == 100) &&(
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white-100 p-4 rounded-lg text-center">
          <p className="text-black">TA PIXURUCO MEU?</p>   
          <Image src={pixuruco} alt="produto" className='h-full  w-full'
           width={800} 
           height={900}/>       
          <button className="text-white bg-red-500 p-2 m-2 rounded" onClick={handleCloseModal}>Cancelar</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default CardProduto