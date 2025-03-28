import React from "react";
import PersonIcon from "../assets/icons/person"
import BullseyeIcon from "../assets/icons/bullseye"
import Carousel from "./carousel";

export default function QuienesSomos() {

    return (
        <section className="flex flex-col gap-20 pt-20 px-80 xl:px-30 lg:px-20 md:px-0" id="quienesSomos">
            <div className="grid grid-cols-2 gap-10 xl:flex xl:flex-col">
                <div className="flex flex-col gap-5 p-5 rounded-lg md:px-0">
                    <div className="inline-flex items-center gap-3 md:flex-col">
                        <div className="flex items-center justify-center bg-[#218F7F]/45 h-20 w-20 rounded-lg">
                            <PersonIcon/>
                        </div>
                        <h3 className="text-5xl font-bold md:text-center">Nosotros</h3>
                    </div>
                    <p className="text-neutral-600 text-xl md:text-center">Unidad financiera de Grupo Broda, empresa de triple impacto global que con originalidad: invierte, desarrolla y gestiona modelos de negocios sostenibles.</p>
                </div>
                <div className="flex flex-col gap-5 p-5 rounded-lg md:px-0">
                    <div className="inline-flex items-center gap-3 md:flex-col">
                        <div className="flex items-center justify-center bg-[#218F7F]/45 h-20 w-20 rounded-lg">
                            <BullseyeIcon/>
                        </div>
                        <h3 className="text-5xl font-bold md:text-center">Objetivo</h3>
                    </div>
                    <p className="text-neutral-600 text-xl md:text-center">Con un fuerte equipo de profesionales, nos enfocamos en acompañar a nuestros clientes en el desarrollo tanto de sus finanzas tanto personales como corporativas, brindando herramientas locales y externas que optimicen sus inversiones.</p>
                </div>
            </div>
            <Carousel/>
        </section>
    )
}