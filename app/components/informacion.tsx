import Link from "next/link";
import React from "react";
import {INFO_MOCK} from "../lib/mocks";
import ChevronRight from "../assets/icons/chevronright"

export default function Informacion() {
    return(
        <section className="grid grid-cols-3 p-20 pt-30 gap-5 lg:flex lg:flex-col md:px-10">
            {INFO_MOCK.map((info)=> {
                return(
                    <Link href={info.url} key={info.titulo} className="relative flex flex-col items-center text-center py-30 gap-10 bg-white p-10 rounded-lg bg-center bg-cover bg-no-repeat group cursor-pointer translateTransition" style={{backgroundImage: `url(${info.imagen})`}}>
                        <div className="absolute inset-0 bg-[#034941]/60 w-full h-full rounded-lg"></div>
                        <h2 className="text-white font-bold text-3xl z-10">{info.titulo}</h2>
                        <span className="text-white z-10">{info.texto}</span>
                        <button aria-label={"Más información sobre " + info.titulo} className="relative flex items-center justify-center text-white bg-neutral-300/15 border p-3 rounded-full z-10 cursor-pointer transition-[width] duration-300 overflow-hidden w-12 group-hover:w-48 group-hover:bg-white group-hover:text-black group-hover:border-transparent lg:w-48">
                            <span className="absolute whitespace-nowrap opacity-0 group-hover:relative group-hover:opacity-100 transition-opacity lg:relative lg:opacity-100 duration-300">
                                Más información
                            </span>
                            <ChevronRight  />
                        </button>
                    </Link>
                )
            })}
        </section>
    )
}