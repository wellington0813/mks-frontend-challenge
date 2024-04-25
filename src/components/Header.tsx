import Image from "next/image";

import cart from '../../public/shppingcart.png'

export default function Header(){
    return(
        <section className="fixed w-full h-24 bg-custom-blue flex justify-between items-center z-40">
            <div className="flex w-full justify-between max-w-7xl mx-auto px-4 text-white">
                <h1 className="text-white text-2xl font-bold flex items-end">
                    MKS
                    <p className="font-light text-sm p-1">SISTEMAS</p>
                </h1>

                <button className="bg-white rounded-lg px-3 py-2">
                    <div className="flex gap-3">
                        <Image src={cart} width={19} height={18} alt="carrinho de compras"/>
                        <p className="text-black font-bold">0</p>
                    </div>
                </button>
            </div>
        </section>
    )
}