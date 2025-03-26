import React from "react";

export default function QuienesSomos() {
    return (
        <section className="flex flex-col gap-20 p-20 pt-30" id="quienesSomos">
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-5 p-5">
                    <h3 className="text-5xl font-bold">¿Quiénes somos?</h3>
                    <div className="w-80 h-[3px] bg-[#034941]"></div>
                    <p className="text-neutral-600 text-xl">Unidad financiera de Grupo Broda, empresa de triple impacto global que con originalidad: invierte, desarrolla y gestiona modelos de negocios sostenibles.</p>
                </div>
                <div className="bg-black w-full h-96 rounded-lg p-5 bg-[url(https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/p9ewoxpvupeygrti65we)] bg-center"></div>
            </div>
            <div className="grid grid-cols-2">
                <div className="bg-black w-full h-96 rounded-lg p-5 bg-[url(https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/jijxnj3wbdbxx4cljud9)] bg-center"></div>
                <div className="flex flex-col gap-5 p-5">
                    <h3 className="text-5xl font-bold">Objetivo</h3>
                    <div className="w-80 h-[3px] bg-[#034941]"></div>
                    <p className="text-neutral-600 text-xl">Con un fuerte equipo de profesionales, nos enfocamos en acompañar a nuestros clientes en el desarrollo tanto de sus finanzas tanto personales como corporativas, brindando herramientas locales y externas que optimicen sus inversiones.</p>
                </div>
            </div>
        </section>
    )
}