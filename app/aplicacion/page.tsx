import React from "react";
import AvailablePlaystore from "../components/atoms/availablePlayStore";
import AvailableAppStore from "../components/atoms/availapleAppStore";

export default function Aplicacion() {
    return(
        <section className="grid grid-cols-2 gap-10 py-40 bg-[#034941] xl:flex xl:flex-col xl:px-10 xl:items-center xl:h-auto">
            <div className="flex flex-col justify-center gap-20 pl-20 xl:pl-0 xl:pt-20">
                <h1 className="text-white text-6xl font-bold xl:w-full">¡Ahora podés operar desde <span className="degradadoTexto">cualquier lado</span> con nuestra aplicación!</h1>
                <div className="flex flex-col gap-5 text-neutral-300">
                    <p>Con la aplicación, vas a poder acceder a instrumentos financieros, permitiéndote operar de manera rápida e eficiente además de visualizar fácilmente tu cartera de inversión, órdenes y rendimientos.</p>
                    <p>Vas a poder operar con acciones, bonos, O.N.s, letras y opciones del mercado argentino, fondos comunes de inversión, compra y venta de Dólar MEP, CEDEARs y más.</p>
                    <p>Precios en tiempo real y acceso a la información detallada de cada especie, saldos y tenencia valorizada, cuenta corriente, estado de órdenes y resultado del día.</p>
                </div>
                <div className="inline-flex gap-5 sm:flex-col">
                    <AvailablePlaystore/>
                    <AvailableAppStore/>
                </div>
            </div>
            <div className="flex justify-center pr-20 xl:hidden">
                <img className="h-[700px]" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/gdqzxqeu2tn8wwsfe2mx" alt="Preview de la aplicación"/>
            </div>
        </section>
    )
}