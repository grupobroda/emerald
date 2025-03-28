import Link from "next/link";
import React from "react";
import {INFO_MOCK} from "../lib/mocks";

export default function Informacion() {
    return(
        <section className="grid grid-cols-3 p-20 pt-30 gap-5 lg:flex lg:flex-col md:px-10">
            {INFO_MOCK.map((info)=> {
                return(
                    <Link href={info.url} key={info.titulo} className="flex flex-col items-center text-center py-30 gap-10 bg-white p-10 rounded-lg bg-center bg-cover bg-no-repeat relative group cursor-pointer translateTransition" style={{backgroundImage: `url(${info.imagen})`}}>
                        <div className="absolute inset-0 bg-[#034941]/60 w-full h-full rounded-lg"></div>
                        <h2 className="text-white font-bold text-3xl z-10">{info.titulo}</h2>
                        <span className="text-white z-10">{info.texto}</span>
                        <button className="text-white bg-neutral-300/15 border px-6 py-3 rounded-full w-fit group-hover:bg-white group-hover:text-black group-hover:border-transparent duration-200 z-10 cursor-pointer">Más información</button>
                    </Link>
                )
            })}
        </section>
    )
}