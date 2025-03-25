import React from "react";

export default function Header() {
    return(
        <header className="flex flex-col gap-10 justify-center items-center pt-10 pb-4 wrapperCorporativo">
            <a href="/">
                <img src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/rqi6r1rzbopesgpc957q" className="w-60 object-contain" alt="Emerald Capital Logo" />
            </a>
            <div className="w-screen">
                <ul className="flex justify-center gap-10 text-white">
                    <a href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Quiénes Somos</a>
                    <a href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Preguntas Frecuentes</a>
                    <a href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Contacto</a>
                    <a href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">App</a>
                    <a href="" className="hover:bg-neutral-200/15 px-3 py-1 rounded duration-200">Acceso Clientes</a>
                </ul>
            </div>
        </header>
    )
}