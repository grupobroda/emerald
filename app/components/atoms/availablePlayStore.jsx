import React from "react";

export default function AvailablePlaystore() {
    return(
        <a aria-label="Descargar en Google Play" href="https://play.google.com/store/apps/details?id=com.emeraldcapitalglobal.app1&hl=es_AR" target="_blank" className="flex items-center gap-3 bg-white px-5 py-2 rounded-lg select-none cursor-pointer hover:shadow-lg hover:bg-neutral-200 duration-200 md:justify-center">
            <img className="h-10" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/tw4sh8irpysoppxeg1iz" alt="Play Store icono" />
            <div className="flex flex-col">
                <span className="text-xs">DISPONIBLE EN</span>
                <p className="text-3xl font-bold">Google Play</p>
            </div>
        </a>
    )
}