"use client"

import ChevronLeft from "@/app/assets/icons/chevronleft";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function Accordion({title, content}) {

    const [opened, setOpened] = useState(false)

    return(
        <div className="flex flex-col gap-2 px-80 lg:px-20 md:px-0">
            <div className="font-semibold text-xl inline-flex justify-between items-center px-10 w-full h-20 rounded-lg border border-neutral-300 cursor-pointer hover:bg-neutral-200 hover:border-neutral-400 select-none group duration-200" onClick={()=> setOpened(!opened)} style={opened ? {backgroundColor: "#034941", color: "white"} : {backgroundColor: "#f5f5f5", color: "black"}}>
                {title}
                <div className="inline-flex items-center justify-center -rotate-90 transition-transform w-10 h-10 border border-neutral-300 rounded-full group-hover:border-neutral-400" style={opened ? {rotate: "90deg", borderColor: "white"} : null}>
                    <ChevronLeft/>
                </div>
            </div>
            {opened && (
                <motion.div initial={{ opacity: 0, y: -10}} animate={{ opacity: 1, y: 0 }} className="text-lg w-full h-auto p-10 bg-neutral-100 rounded-lg border border-neutral-300">
                    <p>{content}</p>
                </motion.div>
            )}
        </div>
    )
}