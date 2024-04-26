'use client'
import Image from "next/image";
import axios from "axios"
import { useState, useEffect } from 'react';

function LoadingShimmer() {
  return (
    <div className="loading-shimmer">
        <p className="text-black font-bold text-2xl">
            loading ...
        </p>
    </div>
  );
}

export function Hero() {
    const [loading, setLoading] = useState(true);
    const [dadosPrudutos, setDadosProdutos] = useState({});
    const { products } = dadosPrudutos
    console.log(products)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
                const dados = response.data;
                setDadosProdutos(dados);
                setLoading(false); 
            } 
            catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <LoadingShimmer />;
    }
    return(
        <section className="pt-48 pb-24">
            <div className=" max-w-7xl px-4 mx-auto">
                <div className="justfy-center lg:grid-cols-4 sm:grid-cols-2 grid grid-cols-1 gap-7">
                    {
                        products.map(item => (
                            <div className="flex flex-col justify-between w-full max-w-sm bg-white rounded-lg shadow-md" key={item.id}>
                                <div className="p-3">
                                    <div className="">
                                        <Image className="p-5 mx-auto"  src={item.photo}  alt={item.name}  width={250} height={150}/>
                                    </div>
                                    <div className="flex justify-between align-top">
                                        <div className=" "> 
                                            <p className="text-xl font-normal">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className=" bg-[#373737] rounded-lg p-3 flex items-center justify-center">
                                            <p className="font-bold text-white text-sm text-center">R$ {item.price}</p>
                                        </div>
                                    </div>

                                    <p className="text-black text-sm mt-5">
                                        {item.description}
                                    </p>
                                </div>

                                
                               
                                <button className="inline-block w-full p-2 rounded-b-lg bg-custom-blue hover:bg-blue-700 focus:outline-none">
                                    <p className="text-white text-xl"> COMPRAR</p>
                                </button>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </section>
    )
}

export default function ClientHero() {
  return <Hero />;
}