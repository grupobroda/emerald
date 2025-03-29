"use client"

import React from "react";
import ChartIcon from "../assets/icons/chart"
import { motion } from "motion/react"
import {transition, secondTransition} from "../lib/transitions"

export default function Hero() {
    return(
        <section className="relative w-screen h-screen flex flex-col gap-10 items-center justify-center bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/sxsneyzxh1nu71mnhrzo)]">
            <div className="absolute w-screen h-screen from-[#055d52] to-[#023932] bg-clip-content bg-gradient-to-r opacity-80"></div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="z-10 text-white text-8xl font-bold w-[60%] text-center md:text-5xl">Tus finanzas al día, con <span className="degradadoTexto">Emerald Capital</span>.</motion.h1>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={secondTransition} className="z-10 inline-flex gap-5 md:flex-col">
                <a aria-label="Comenzar a operar" role="button" href="https://clientes.emeraldcapitalglobal.com/" target="_blank" className="ctaButton py-3"><ChartIcon/> Comenzar a operar</a>
            </motion.div>
        </section>
    )
}