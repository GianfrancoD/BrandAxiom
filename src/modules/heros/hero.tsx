import React from "react";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="/"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bg-black/50 w-[100vw] h-[100vh] z-50"></div>
        <img
          src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
          alt="Servicios de Marketing"
          className="w-[100vw] h-auto max-[768px]:h-[90vh]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20  to-cyan-600/20 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#020617] via-[#020617]/60  to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight ">
            {"<"} Tu Éxisto,{" "}
            <span className="bg-gradient-to-r text-[60px] from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nuestro Código {"/>"}
            </span>
          </h1>
          <div className="relative mb-8">
            <p className="text-xl sm:text-2xl text-blue-300 font-semibold mb-2 opacity-75">
              Tu Marca, Nuestra Pasión
            </p>
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Innovación y Eficiencia Garantizadas
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-[50vw] max-[768px]:max-w-[600vw] mx-auto">
            Transformamos tu visión en una marca poderosa, combinando
            creatividad innovadora con estrategias eficientes para un impacto
            duradero en el mercado digital.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Programación Web",
              "Software a Medida",
              "E-commerce",
              "SEO",
              "SEM",
              "Social Ads",
              "Aplicaciones Web",
              "Analisis de Tráfico",
            ].map((service, index) => (
              <span
                key={index}
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium max-md:hidden"
              >
                {service}
              </span>
            ))}
          </div>
          <a
            href="#BrandAxiom"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 inline-block"
          >
            Empieza tu viaje
          </a>
        </div>
      </div>
    </section>
  );
}
