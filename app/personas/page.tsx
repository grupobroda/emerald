"use client"

import React from "react";
import { motion } from "motion/react";
import {transition, secondTransition, thirdTransition, fourthTransition} from "../lib/transitions"

export default function Personas() {
    return(
        <section className="paddingTop px-10">
            <motion.div initial={{ opacity: 0, y: -10}} animate={{ opacity: 1, y: 0 }} className="bg-black py-15 rounded-lg shadow-md bg-cover bg-center bg-[url(https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/gucvblu7lkofybswolts)]">
                <h1 className="titulo text-center">Personas</h1>
            </motion.div>
            <div className="grid grid-cols-2 gap-10 py-30 lg:flex lg:flex-col">
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={transition} className="card">
                    <h2 className="subtitulo">Carteras de inversión según tu perfil de riesgo</h2>
                    <p>Conocé tu perfil de riesgo e invertí tu dinero en la estrategia correcta:</p>
                    <ul className="list-disc ml-8">
                        <li><span className="bold">Conservador:</span> se focaliza en activos de renta fija (como obligaciones negociables, letras o cauciones). Ideal para inversores que buscan rendimientos estables y es su primer experiencia en el mercado de capitales</li>
                        <li><span className="bold">Moderado:</span> agrega a la cartera conservadora activos de renta variable como acciones y CEDEARS. También incorpora bonos soberanos argentinos.</li>
                        <li><span className="bold">Agresivo:</span> para aquellos que buscan mayores rendimientos pero toleran un mayor nivel de volatilidad. Tiene mayo proporción en acciones.</li>
                    </ul>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={secondTransition} className="card">
                    <h2 className="subtitulo">¡Compra Dólar!</h2>
                    <p>Accede a la compra de dólar MEP mediante nuestra APP.</p>
                    <ul className="list-disc ml-8">
                        <li>¿Qué es el dólar MEP? Es una forma de adquirir dólares sin cupo en el mercado de capitales mediante la compra-venta de bonos.</li>
                        <li>¿Qué necesito para la compra de dólar MEP? Tener cuenta en nuestra APP y una cuenta bancaria en dólares a tu nombre.</li>
                    </ul>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={thirdTransition} className="card">
                    <h2 className="subtitulo">Fondo de Retiro</h2>
                    <p>Arma tu fondo de retiro en Emerald Capital, invirtiendo en acciones y bonos de las principales empresas argentinas y globales.</p>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} transition={fourthTransition} className="card">
                    <h2 className="subtitulo">Educación Financiera</h2>
                    <p>Nuestro pilar es la educación financiera, enseñando a nuestros clientes sobre herramientas de inversión disponibles en el mercado de capitales y su funcionamiento. Visita nuestro link de preguntas frecuentes.</p>
                </motion.article>
            </div>
        </section>
    )
}