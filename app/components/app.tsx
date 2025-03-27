import React from "react";

import AvailablePlaystore from "./atoms/availablePlayStore"
import AvailableAppStore from "./atoms/availapleAppStore"

export default function AppSection() {
    return(
        <section className="grid grid-cols-2 w-screen min-h-40 bg-linear-to-r from-[#1C8675] via-[#167364] to-[#218F7F] py-10 px-20 md:flex md:flex-col">
            <div className="flex flex-col gap-15">
                <h2 className="text-5xl text-white font-bold">Empezá a operar hoy mismo desde la aplicación.</h2>
                <div className="flex gap-5 lg:flex-col lg:w-fit md:flex-row">
                    <AvailablePlaystore/>
                    <AvailableAppStore/>
                </div>
            </div>
        </section>
    )
}