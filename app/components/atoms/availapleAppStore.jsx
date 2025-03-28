import React from "react";

export default function AvailableAppStore() {
    return(
        <a href="https://apps.apple.com/us/app/emerald-capital/id6743625956?uo=2" target="_blank" className="flex items-center gap-3 bg-white px-5 py-2 rounded-lg select-none cursor-pointer hover:shadow-lg hover:bg-neutral-200 duration-200 md:justify-center">
            <img className="h-10" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/kmq5fz75eisunawq93co" alt="App Store icono" />
            <div className="flex flex-col">
                <span className="text-sm">Descargar de la</span>
                <p className="text-3xl font-bold">App Store</p>
            </div>
        </a>
    )
}