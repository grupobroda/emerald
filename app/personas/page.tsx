import React from "react";

export default function Personas() {
    return(
        <section>
            <div className="w-full bg-black py-15">
                <h1 className="titulo text-center">Personas</h1>
            </div>
            <div className="grid grid-cols-2 gap-10 px-20 py-30">
                <article className="card">
                    <h2 className="subtitulo">Carteras de inversión según tu perfil de riesgo</h2>
                    <p>Conocé tu perfil de riesgo e invertí tu dinero en la estrategia correcta:</p>
                    <ul className="list-disc ml-8">
                        <li><span className="bold">Conservador:</span> se focaliza en activos de renta fija (como obligaciones negociables, letras o cauciones). Ideal para inversores que buscan rendimientos estables y es su primer experiencia en el mercado de capitales</li>
                        <li><span className="bold">Moderado:</span> agrega a la cartera conservadora activos de renta variable como acciones y CEDEARS. También incorpora bonos soberanos argentinos.</li>
                        <li><span className="bold">Agresivo:</span> para aquellos que buscan mayores rendimientos pero toleran un mayor nivel de volatilidad. Tiene mayo proporción en acciones.</li>
                    </ul>
                </article>
                <article className="card">
                    <h2 className="subtitulo">¡Compra Dólar!</h2>
                    <p>Accede a la compra de dólar MEP mediante nuestra APP.</p>
                    <ul className="list-disc ml-8">
                        <li>¿Qué es el dólar MEP? Es una forma de adquirir dólares sin cupo en el mercado de capitales mediante la compra-venta de bonos.</li>
                        <li>¿Qué necesito para la compra de dólar MEP? Tener cuenta en nuestra APP y una cuenta bancaria en dólares a tu nombre.</li>
                    </ul>
                </article>
                <article className="card">
                    <h2 className="subtitulo">Fondo de Retiro</h2>
                    <p>Arma tu fondo de retiro en Emerald Capital, invirtiendo en acciones y bonos de las principales empresas argentinas y globales.</p>
                </article>
                <article className="card">
                    <h2 className="subtitulo">Educación Financiera</h2>
                    <p>Nuestro pilar es la educación financiera, enseñando a nuestros clientes sobre herramientas de inversión disponibles en el mercado de capitales y su funcionamiento. Visita nuestro link de preguntas frecuentes.</p>
                </article>
            </div>
        </section>
    )
}