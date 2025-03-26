"use client"
import React, { useEffect, useState } from "react";
import ChartIcon from "../assets/icons/chart";
import Link from "next/link";

export default function Header() {
    return(
        <header className="flex gap-10 justify-between items-center px-10 py-6 wrapperCorporativo fixed z-20">
            <Link href="/">
                <img src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/rqi6r1rzbopesgpc957q" className="w-60 object-contain" alt="Emerald Capital Logo" />
            </Link>
            <div>
                <ul className="flex justify-center gap-10 text-white">
                    <a href="#quienesSomos" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Quiénes Somos</a>
                    <Link href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Preguntas Frecuentes</Link>
                    <a href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Contacto</a>
                    <Link href="/aplicacion" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">App</Link>
                </ul>
            </div>
            <a href="https://clientes.emeraldcapitalglobal.com/" target="_blank" className="ctaButton py-3 rounded duration-200"><ChartIcon/>Comenzar a operar</a>
        </header>
    )
}