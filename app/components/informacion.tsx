import React from "react";

const INFO_MOCK = [
    {
        titulo: "Personas",
        texto: "Ayudamos a potenciar tus ahorros, mediante la inversión en mercado de capitales, teniendo en cuenta tus objetivos, perfil de riesgo y horizonte temporal.",
        imagen: "",
        url: "/personas"
    },
    {
        titulo: "Empresas",
        texto: "Asesoramos a empresas en sus necesidades de manejo de flujo de caja y de financiamiento.",
        imagen: "",
        url: "/empresas"
    },
    {
        titulo: "Multi Family Office",
        texto: "Apoyamos a las familias empresarias en la gestión de su patrimonio, aconsejando sobre buenas prácticas para la preservación del mismo.",
        imagen: "",
        url: "/familyoffice"
    }]

export default function Informacion() {
    return(
        <section className="grid grid-cols-3 p-5 gap-5">
            {INFO_MOCK.map((info)=> {
                return(
                    <article key={info.titulo} className="flex flex-col items-center text-center py-50 gap-10 bg-black p-10 rounded-lg" style={{backgroundImage: `url(${info.imagen})`}}>
                        <h2 className="text-white font-bold text-3xl">{info.titulo}</h2>
                        <span className="text-neutral-400">{info.texto}</span>
                        <a href={info.url} className="text-white bg-neutral-300/15 px-6 py-3 rounded w-fit hover:bg-neutral-300/30 duration-200">Más información</a>
                    </article>
                )
            })}
        </section>
    )
}