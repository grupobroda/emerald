import React from "react";
import ChartIcon from "../assets/icons/chart"

export default function Hero() {
    return(
        <section className="relative w-screen h-screen flex flex-col gap-10 items-center justify-center bg-[url(https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/hovkyb0ljvjxqetc6yme)]">
            <div className="absolute w-screen h-screen from-[#055d52] to-[#023932] bg-clip-content bg-gradient-to-r opacity-80"></div>
            <h1 className="z-10 text-white text-8xl font-bold w-[60%] text-center md:text-5xl">Tus finanzas al día, con <span className="degradadoTexto">Emerald Capital</span>.</h1>
            <div className="z-10 inline-flex gap-5 md:flex-col">
                <a href="https://clientes.emeraldcapitalglobal.com/" target="_blank" className="ctaButton py-3"><ChartIcon/> Comenzar a operar</a>
            </div>
        </section>
    )
}