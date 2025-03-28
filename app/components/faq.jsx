import React from "react";
import Accordion from "./atoms/accordion";
import { FAQ_CONTENT } from "../lib/mocks";

export default function Faq() {
    return(
        <section className="flex flex-col p-20 px-80 pt-30 gap-10 lg:flex lg:flex-col lg:px-20 md:px-10" id="faq">
            <div className="w-full inline-flex items-center justify-center gap-3 md:flex-col">
                <h3 className="text-5xl font-bold md:text-center">Preguntas Frecuentes</h3>
            </div>
            <div className="flex flex-col gap-5">
                {FAQ_CONTENT.map((faq)=> {
                    return(
                        <Accordion title={faq.title} content={faq.content} key={faq.title}/>
                    )
                })}
            </div>
        </section>
    )
}