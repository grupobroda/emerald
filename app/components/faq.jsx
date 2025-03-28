import React from "react";
import Accordion from "./atoms/accordion";

export default function Faq() {
    const FAQ_CONTENT = [
        {
            title: "¿Cómo es el asesoramiento?",
            content: (
                <p>
                    Nosotros asesoramos a nuestros clientes, respecto al mercado de capitales, una vez que tengas tu cuenta abierta bajo el agente Emerald comunicate con nosotros para continuar con el proceso de asesoramiento.
                </p>
            )
        },
        {
            title: "¿Cómo podés abrir tu propia cuenta comitente?",
            content: (
                <div className="flex flex-col gap-3">
                    <p>Se puede realizar la apertura de la cuenta comitente sin costo alguno, y así, comenzar a operar con nosotros.</p>
                    <p>¡Es simple! La podés abrir desde la app de IEB+ (en adjunto encontrarás el link para descargar la app).</p>
                    <p><span className="bold">¡IMPORTANTE!</span> Cuando en los pasos de apertura de cuenta te solicite un código de referido, no colocar nada y cuando pida Código de MANAGER colocar 299.</p>
                    <p>De esta manera te identificaremos como nuestro cliente y podremos darte un asesoramiento más personalizado.</p>
                </div>
            )
        },
        {
            title: "¿Cuán seguros están los depósitos en mi cuenta?",
            content: (
                <p>
                    Todos los activos que compres desde tu cuenta comitente quedan custodiado en Caja de Valores. Por lo que tus activos quedan resguardados.
                </p>
            )
        },
        {
            title: "¿Cuáles son los costos?",
            content: (
                <div className="flex flex-col gap-3">
                    <p>La cuenta comitente <span className="bold">NO</span> tiene gastos ni de apertura ni de mantenimiento. Puede permanecer abierta sin dinero invertido u operaciones realizadas que no generará costo alguno.</p>
                    <p>El asesoramiento financiero tampoco tiene un costo. Solo se paga una comisión en la compra-venta de activos (según la inversión). Por ejemplo, si se invierte en un activo financiero cuyo precio de compra es de $100 por unidad, se cobrará un 1% sobre ese precio, quedando en $101 final. Luego todo lo que genere la inversión es 100% del cliente. Se pueden observar los costos en la tabla debajo de esta sección.</p>
                </div>
            )
        },
    ]

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