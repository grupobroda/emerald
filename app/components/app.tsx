import React from "react";

import AvailablePlaystore from "./atoms/availablePlayStore"
import AvailableAppStore from "./atoms/availapleAppStore"

export default function AppSection() {
    return(
        <section className="relative grid grid-cols-2 w-screen min-h-40 bg-linear-to-r from-[#1C8675] via-[#167364] to-[#218F7F] py-10 px-20 md:flex md:flex-col md:px-10">
            <div className="flex flex-col gap-15">
                <h2 className="text-3xl text-white font-bold w-[80%] md:w-full">Empezá a operar hoy mismo desde la aplicación.</h2>
                <div className="flex gap-5 lg:flex-col lg:w-fit md:flex-row">
                    <AvailablePlaystore/>
                    <AvailableAppStore/>
                </div>
            </div>
            <div className="relative md:hidden">
                <img className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 h-[450px] z-10 md:relative md:-bottom-20" src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/gdqzxqeu2tn8wwsfe2mx" alt="Preview de la aplicación"/>
            </div>
        </section>
    )
}