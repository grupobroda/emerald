import React from "react";

export default function FamilyOffice() {
    return(
        <section className="paddingTop">
            <div className="w-full bg-black py-15">
                <h1 className="titulo text-center">Multi Family Office</h1>
            </div>
            <div className="flex flex-col items-center gap-10">
                <h2 className="subtitulo pt-20 w-[60%]">Emerald Capital Multi Family Office se origina a partir de la administración del propio patrimonio de nuestra familia empresaria.</h2>
                <div className="flex flex-col gap-5 w-[60%]">
                    <p>A través de la confianza con otras familias empresarias y respaldados por la experiencia financiera de nuestros colaboradores, ofrecemos un servicio de excelencia profesional. Comprendemos de primera mano los desafíos que se presentan y proporcionamos soluciones personalizadas para abordar factores internos y externos.</p>
                    <p>Buscamos generar independencia al construir relaciones sin conflictos de intereses y con objetivos alineados, priorizando siempre lo mejor para nuestros clientes.</p>
                    <p>Colaboramos con instituciones de renombre como Harvard Business School, Sistema B y Endeavor, entre otras destacadas alianzas.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10 px-20 py-30">
                <article className="card">
                    <h2 className="subtitulo">1. Asesoramiento Integral</h2>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl bold">Estrategia Impositiva y Estructuras para protección patrimonial y de activos</h3>
                            <p className="pl-3">Orientamos a nuestros clientes en la estructuración de sociedades o fideicomisos para su protección y planificación patrimonial.</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl bold">Gobernanza y Estrategia Familiar</h3>
                            <p className="pl-3">Nuestro objetivo es crear <span className="bold">espacios de interacción</span>, como cenas y eventos, con otros miembros de la comunidad empresarial para fomentar el intercambio de ideas y el aprendizaje mutuo.</p>
                            <p className="pl-3">Además, organizamos regularmente <span className="bold">capacitaciones</span> sobre aspectos relacionados con la gobernanza familiar, con un enfoque especial en las nuevas generaciones.</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl bold">Tarifas Transparentes y Acuerdo de Privacidad</h3>
                            <p className="pl-3">Uno de nuestros principales pilares es transmitir claramente al cliente sobre costos asociados y tarifas de servicio. Buscamos optimizar costos con todos nuestros aliados estratégicos, como bancos o agentes de registro, y al mismo tiempo, establecer <span className="bold">tarifas propias transparentes</span>, sin costos ocultos para el cliente. Al mismo tiempo, priorizamos la <span className="bold">confidencialidad</span> armando acuerdos de privacidad a medida de las inquietudes de nuestros clientes.</p>
                        </div>
                    </div>
                </article>
                <article className="card">
                    <h2 className="subtitulo">2. Cartera de Inversiones</h2>
                    <div className="flex flex-col gap-10">
                        <p className="bold">Buscamos promover el análisis completo e integral de la cartera de inversiones de la familia, tanto en activos financieros como en activos reales, como lo son el Real Estate y la inversión en el propio negocio familiar.</p>
                        <p>Comprender la asignación global de activos nos permitirá saber dónde enfocar nuestras recomendaciones de cartera para maximizar rendimientos al menor riesgo posible. Uno de nuestros principales servicios consiste en el <span className="bold">armado de carteras de inversión y monitoreo del portafolio</span> a medida del perfil de riesgo de nuestros clientes.</p>
                        <p>Nos concentramos en buscar <span className="bold">activos de calidad</span>, no solo llevando a cabo un exhausto research de mercado, sino también mediante una profunda evaluación sobre la coyuntura macroeconómica.</p>
                        <p>Enfatizamos la importancia de realizar un análisis fundamental de las empresas que recomendamos, haciendo hincapié en los principales indicadores financieros que presentan para asegurar la generación de valor a través de la inversión en ellas.</p>
                        <p>La <span className="bold">educación financiera</span> es nuestro pilar, buscando que nuestros clientes generen conocimiento y conciencia de los activos que poseen en su portafolio y entiendan de dónde proviene el valor agregado de estos.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}