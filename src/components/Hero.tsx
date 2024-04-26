'use client'
import Image from "next/image";
import axios from "axios"
import { useState, useEffect } from 'react';

function LoadingShimmer() {
  return (
    <div className="loading-shimmer">
        loading ...
    </div>
  );
}

// Exporte sua função Hero
export function Hero() {
    const [loading, setLoading] = useState(true);
    const [dadosPrudutos, setDadosProdutos] = useState({});
    const { products } = dadosPrudutos

    console.log(products)
    useEffect(() => {
        // Função para buscar os dados da API
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

        // Chame a função para buscar os dados da API
        fetchData();
    }, []);

    if (loading) {
        return <LoadingShimmer />;
    }
    return(
        <section className="pt-48 pb-24">
            <div className=" max-w-7xl px-4 mx-auto">
                <div className="justfy-center lg:grid-cols-4 sm:grid-cols-2 grid grid-cols-1 gap-5">
                    {
                        products.map(item => (
                            <div className="w-full max-w-sm bg-white rounded-lg shadow-md" key={item.id}>
                                <div className="p-3">
                                    <Image className="p-5 rounded-t-lg"  src={item.photo}  alt={item.name}  width={250} height={150}/>
                                    <div className=" grid grid-cols-2">
                                        <p>
                                            {item.name}
                                        </p>
                                        <div className="bg-[#373737] p-1 rounded-lg">
                                            <p className="font-bold text-white text-center">R$ {item.price}</p>
                                        </div>
                                    </div>
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

// Use o hook useClient para marcar a função Hero como um componente do lado do cliente
export default function ClientHero() {
  return <Hero />;
}