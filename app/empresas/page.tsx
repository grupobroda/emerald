"use client"

import React from "react";
import { motion } from "motion/react";
import {transition, secondTransition, thirdTransition, fourthTransition} from "../lib/transitions"

export default function Empresas() {
    return(
        <section className="paddingTop px-10">
            <motion.div initial={{ opacity: 0, y: -10}} animate={{ opacity: 1, y: 0 }} className="w-full bg-black py-15 rounded-lg shadow-md bg-cover bg-center bg-[url(https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/xcfn4oihppai0p0yxg8n)]">
                <h1 className="titulo text-center">Empresas</h1>
            </motion.div>
            <div className="grid grid-cols-2 gap-10 py-30 lg:flex lg:flex-col">
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={transition} className="card">
                    <h2 className="subtitulo">Instrumentos para el manejo de Flujo de Fondos</h2>
                    <p>En el mercado de capitales encontrarás herramientas para la gestión de los pesos sobrantes con rendimientos atractivos y la liquidez necesaria para disponer inmediatamente de los fondos.</p>
                    <ul className="list-disc ml-8">
                        <li><span className="bold">Cauciones bursátiles:</span> Son préstamos realizados en el mercado bursátil. Similares a los plazos fijos convencionales, pero con la ventaja de que se pueden realizar a menores plazos (Ejemplo: 1, 4, 17, 14, 30 días)</li>
                        <li><span className="bold">LECAPS:</span> Letras emitidas por el tesoro con intereses capitalizables, disponibles para vender inmediatamente con plazos hasta un año.</li>
                        <li><span className="bold">Fondos comunes de inversión Money Market:</span> Es un tipo de fondo de inversión colectiva diseñado para ofrecer alta liquidez y bajo riesgo, invirtiendo en instrumentos financieros de corto plazo y alta calidad crediticia</li>
                    </ul>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={secondTransition} className="card">
                    <h2 className="subtitulo">Financiamiento</h2>
                    <p>Mediante el mercado bursátil podrás obtener financiamiento a corto, mediano y largo plazo.</p>
                    <ul className="list-disc ml-8">
                        <li><span className="bold">Capital de Trabajo</span> (Cauciones, Facturas, CPD, Pagarés): Financia tus necesidades de liquidez a corto plazo mediante la emisión de instrumentos bursátiles.</li>
                        <li><span className="bold">Proyectos e Infraestructura</span> (Obligaciones Negociables): Participamos de la emisión de Obligaciones Negociables para financiar inversiones a largo plazo. </li>
                        <li><span className="bold">Avales:</span> Trabajamos con las principales Sociedades de Garantía Recíproca (SGR) del país, para avalar los instrumentos de financiación y obtener tasas más bajas</li>
                    </ul>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={thirdTransition} className="card">
                    <h2 className="subtitulo">Herramientas de cobertura</h2>
                    <p>Para proteger los flujos de fondo de tu empresa de saltos cambiarios o inflación, te asesoramos en la compra de activos de cobertura como Bonos atados a la inflación o compra de Dólar futuro.</p>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={fourthTransition} className="card">
                    <h2 className="subtitulo">Servicio de Finanzas corporativas</h2>
                    <p>Recientemente incorporamos nuestro servicio de finanzas corporativas, asistiendo a los Gerentes Financieros de empresas en la optimización de flujo de fondos y toma de financiamiento, mediante el análisis de ratios financieros y balances</p>
                </motion.article>
            </div>
        </section>
    )
}