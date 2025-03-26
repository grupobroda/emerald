import React from "react";

export default function Aplicacion() {
    return(
        <section className="paddingTop">
            <div className="flex justify-center w-full text-center pt-20">
                <h1 className="text-[65px] font-bold w-[80%]">¡Ahora podés operar desde cualquier lado con nuestra aplicación!</h1>
            </div>
            <div className="inline-flex gap-5 justify-center">
                    <a href="https://play.google.com/store/apps/details?id=com.emeraldcapitalglobal.app1&hl=es_AR" target="_blank">
                        <img className="w-50" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/uind6gkgiqwdzk1arao1" alt="Descargar en Google Play" />
                    </a>
                    <a href="https://apps.apple.com/us/app/emerald-capital/id6743625956?uo=2" target="_blank">
                        <img className="w-44" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/x5y4gfftalrsqqj70k4i" alt="Descargar en App Store" />
                    </a>
                </div>
        </section>
    )
}