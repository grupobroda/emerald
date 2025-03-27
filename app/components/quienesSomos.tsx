import React from "react";

import LinkedinIcon from "../assets/icons/linkedin"
import PersonIcon from "../assets/icons/person"
import BullseyeIcon from "../assets/icons/bullseye"

const INTEGRANTES_EQUIPO = [
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/cftnorbfnvw2taf6jllk",
        labor: "Cofounder-CEO en Emerald Capital",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
]

export default function QuienesSomos() {
    return (
        <section className="flex flex-col gap-20 p-20 pt-30 px-80 xl:px-20 md" id="quienesSomos">
            <div className="grid grid-cols-2 gap-10 xl:flex xl:flex-col">
                <div className="flex flex-col gap-5 border border-neutral-300 p-5 rounded-lg md:p-5">
                    <div className="inline-flex items-center gap-3 md:flex-col">
                        <div className="flex items-center justify-center bg-[#218F7F]/45 h-20 w-20 rounded-lg">
                            <PersonIcon/>
                        </div>
                        <h3 className="text-5xl font-bold md:text-center">¿Quiénes somos?</h3>
                    </div>
                    <p className="text-neutral-600 text-xl">Unidad financiera de Grupo Broda, empresa de triple impacto global que con originalidad: invierte, desarrolla y gestiona modelos de negocios sostenibles.</p>
                </div>
                <div className="flex flex-col gap-5 border border-neutral-300 p-5 rounded-lg">
                    <div className="inline-flex items-center gap-3 md:flex-col">
                        <div className="flex items-center justify-center bg-[#218F7F]/45 h-20 w-20 rounded-lg">
                            <BullseyeIcon/>
                        </div>
                        <h3 className="text-5xl font-bold md:text-center">Objetivo</h3>
                    </div>
                    <p className="text-neutral-600 text-xl">Con un fuerte equipo de profesionales, nos enfocamos en acompañar a nuestros clientes en el desarrollo tanto de sus finanzas tanto personales como corporativas, brindando herramientas locales y externas que optimicen sus inversiones.</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 lg:grid-cols-3 md:flex md:flex-col">
                {INTEGRANTES_EQUIPO.map((integrante)=> {
                    return(
                        <article key={integrante.nombre} className="bg-neutral-500 rounded-lg w-full h-[300px] relative bg-cover bg-center bg-no-repeat overflow-hidden translateTransition group md:bg-top md:h-[400px]" style={{backgroundImage: `url(${integrante.foto})`}}>
                            <div className="absolute p-3 pb-4 bottom-0 from-black to-transparent bg-linear-to-t w-full rounded-b-lg">
                                <h3 className="text-white text-2xl font-bold">{integrante.nombre}</h3>
                                <span className="text-sm text-neutral-300">{integrante.labor}</span>
                            </div>
                            <a href={integrante.linkedin} target="_blank" className="absolute right-3 -top-10 group-hover:top-3 duration-200 lg:top-3">
                                <LinkedinIcon/>
                            </a>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}