import React from "react";
import ChartIcon from "../assets/icons/chart"
import DownloadIcon from "../assets/icons/download"

export default function Hero() {
    return(
        <section className="flex flex-col gap-10 items-center justify-center w-screen h-screen from-[#034941] to-[#023932] bg-clip-content bg-gradient-to-r">
            <h1 className="text-white text-8xl font-bold w-[60%] text-center">Tus finanzas al día, con <span className="from-green-400 to-green-600 bg-gradient-to-r bg-clip-text text-transparent">Emerald Capital</span>.</h1>
            <div className="inline-flex gap-5">
                <a href="https://clientes.emeraldcapitalglobal.com/" target="_blank" className="ctaButton py-3"><ChartIcon/> Comenzar a operar</a>
                <a href="/aplicacion" className="secondaryButton py-3"><DownloadIcon/>Descargar aplicación</a>
            </div>
        </section>
    )
}