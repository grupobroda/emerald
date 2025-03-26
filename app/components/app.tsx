import React from "react";

export default function AppSection() {
    return(
        <section className="grid grid-cols-2 w-screen min-h-40 bg-linear-to-r from-green-800 via-green-600 to-green-400 py-10 px-20">
            <div className="flex flex-col gap-15">
                <h2 className="text-5xl text-white font-bold">Empezá a operar hoy mismo desde la aplicación.</h2>
                <div className="inline-flex gap-5">
                    <a href="https://play.google.com/store/apps/details?id=com.emeraldcapitalglobal.app1&hl=es_AR" target="_blank">
                        <img className="w-50" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/uind6gkgiqwdzk1arao1" alt="Descargar en Google Play" />
                    </a>
                    <a href="https://apps.apple.com/us/app/emerald-capital/id6743625956?uo=2" target="_blank">
                        <img className="w-44" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/x5y4gfftalrsqqj70k4i" alt="Descargar en App Store" />
                    </a>
                </div>
            </div>
        </section>
    )
}