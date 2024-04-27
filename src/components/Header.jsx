'use client'
import Image from "next/image";
import { useState } from "react";
import cart from '../../public/shppingcart.png'

export default function Header() {
    const [nav, setNav] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    const handleNav = () => setNav(!nav);

    const addToCart = (product) => {
        setCartItems(prevCartItems => [...prevCartItems, product]);
        console.log("Cart items:", cartItems);
    }
    return (
        <section className="fixed w-full h-24 bg-custom-blue flex justify-between items-center z-40">
            <div className="flex w-full justify-between max-w-7xl mx-auto px-4 text-white">
                <h1 className="text-white text-2xl font-bold flex items-end">
                    MKS
                    <p className="font-light text-sm p-1">SISTEMAS</p>
                </h1>

                <button onClick={handleNav}>
                    <div className="bg-white rounded-lg px-3 py-2">
                        <div className="flex gap-3">
                            <Image src={cart} width={19} height={18} alt="carrinho de compras" />
                            <p className="text-black font-bold">{cartItems.length}</p>
                        </div>
                    </div>
                </button>

                <div className={!nav ? "fixed z-40 right-0 top-0 w-[40%] h-full border-r bg-custom-blue shadow-sm ease-in-out duratio-500" : "fixed left-[-100%]"}>
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-white text-2xl font-semibold">
                            Carrinho <br /> de compras
                        </h1>
                        <button onClick={handleNav} className="bg-black rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className="p-4">
                        {cartItems.map((item, index) => (
                            <li className="p-4" key={index}>
                                <div className="bg-white p-2 rounded-lg relative ">
                                    <div className="grid grid-cols-2 items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-black p-10 rounded-lg"></div>
                                            <p className="text-black">{item.name}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <div className="bg-black p-5 rounded-lg"></div>
                                                <p className="text-black text-xs font-bold ">R$ {item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button  onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))}
                                        className="bg-black absolute -top-2 -right-2 rounded-full p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}