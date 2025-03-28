"use client"
import React, { useEffect, useState } from "react";
import ChartIcon from "../assets/icons/chart";
import Menu from "../assets/icons/menu"
import Link from "next/link";

export default function Header() {

    const [navbar, setNavbar] = useState(false)

    return(
        <header className="flex gap-10 justify-between items-center px-10 py-6 wrapperHeader z-20 fixed">
            {navbar && (
                <div className="z-30 top-0 left-0 w-screen h-screen bg-black absolute px-10 py-6">
                    <div className="w-full inline-flex items-center justify-between">
                        <img className="w-40 object-contain" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/rqi6r1rzbopesgpc957q" alt="Logo Emerald" />
                        <button className="text-white cursor-pointer border h-10 w-10 hover:bg-neutral-300/30 rounded-lg border-neutral-700" onClick={()=> setNavbar(!navbar)}>X</button>
                    </div>
                </div>
            )}
            <Link href="/">
                <img src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/rqi6r1rzbopesgpc957q" className="w-40 object-contain" alt="Emerald Capital Logo" />
            </Link>
            <div>
                <ul className="flex justify-center gap-10 text-white lg:hidden">
                    <Link href="#quienesSomos" className="hover:bg-neutral-200/30 px-5 py-3 rounded-full duration-200">Nosotros</Link>
                    <Link href="" className="hover:bg-neutral-200/30 px-5 py-3 rounded-full duration-200">Mercado</Link>
                    <Link href="#faq" className="hover:bg-neutral-200/30 px-5 py-3 rounded-full duration-200">FAQ</Link>
                    <Link href="" className="hover:bg-neutral-200/30 px-5 py-3 rounded-full duration-200">Contacto</Link>
                    <Link href="/aplicacion" className="hover:bg-neutral-200/30 px-5 py-3 rounded-full duration-200">App</Link>
                </ul>
            </div>
            <div className="inline-flex items-center gap-5">
                <a href="https://clientes.emeraldcapitalglobal.com/" target="_blank" className="ctaButton py-3 rounded duration-200 sm:absolute sm:-top-20"><ChartIcon/>Comenzar</a>
                <div className="hidden lg:block" onClick={()=> setNavbar(!navbar)}>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}