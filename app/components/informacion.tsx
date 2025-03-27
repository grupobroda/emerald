import Link from "next/link";
import React from "react";

const INFO_MOCK = [
    {
        titulo: "Personas",
        texto: "Ayudamos a potenciar tus ahorros, mediante la inversión en mercado de capitales, teniendo en cuenta tus objetivos, perfil de riesgo y horizonte temporal.",
        imagen: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/xjalfo9rrqasdug4plzm",
        url: "/personas"
    },
    {
        titulo: "Empresas",
        texto: "Asesoramos a empresas en sus necesidades de manejo de flujo de caja y de financiamiento.",
        imagen: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/vgd6ldj2dbz88cnl5p0g",
        url: "/empresas"
    },
    {
        titulo: "Multi Family Office",
        texto: "Apoyamos a las familias empresarias en la gestión de su patrimonio, aconsejando sobre buenas prácticas para la preservación del mismo.",
        imagen: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/ew0gog4cybcbsppit6vd",
        url: "/familyoffice"
    }]

export default function Informacion() {
    return(
        <section className="grid grid-cols-3 p-20 pt-30 gap-5 lg:flex lg:flex-col md:px-10">
            {INFO_MOCK.map((info)=> {
                return(
                    <article key={info.titulo} className="flex flex-col items-center text-center py-30 gap-10 bg-white p-10 rounded-lg bg-center bg-cover bg-no-repeat relative" style={{backgroundImage: `url(${info.imagen})`}}>
                        <div className="absolute inset-0 bg-[#034941]/60 w-full h-full rounded-lg"></div>
                        <h2 className="text-white font-bold text-3xl z-10">{info.titulo}</h2>
                        <span className="text-white z-10">{info.texto}</span>
                        <Link href={info.url} className="text-white bg-neutral-300/15 border px-6 py-3 rounded-full w-fit hover:bg-white hover:text-black hover:border-transparent duration-200 z-10">Más información</Link>
                    </article>
                )
            })}
        </section>
    )
}