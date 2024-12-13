import { Globe, ShoppingBag, BarChart, Rocket } from "lucide-react";
import React from "react";

const reasons = [
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "Visibilidad 24/7",
    description:
      "Tu sitio web es tu vendedor más dedicado, trabajando incansablemente las 24 horas del día, los 7 días de la semana.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-cyan-400" />,
    title: "Expansión de Mercado",
    description:
      "Un e-commerce te permite llegar a clientes en todo el mundo, expandiendo drásticamente tu base de clientes potenciales.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-cyan-400" />,
    title: "Datos Accionables",
    description:
      "Las landing pages proporcionan insights valiosos sobre tus clientes, permitiéndote optimizar continuamente tus estrategias.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: "Crecimiento Acelerado",
    description:
      "Una presencia web sólida es el catalizador para un crecimiento exponencial en la era digital.",
  },
];

export const WhyWebPresence = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          La importancia de tu presencia digital
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          En el competitivo panorama actual, tu sitio web no es solo una opción,
          es una necesidad. Es tu escaparate digital, tu primera impresión y tu
          herramienta más poderosa para convertir visitantes en clientes leales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="text-xl font-semibold ml-4 text-white">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para dominar el mundo digital?
          </h3>
          <p className="text-white mb-6">
            No dejes pasar la oportunidad de transformar tu negocio. Cada
            segundo cuenta en el mundo online.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Comienza tu viaje digital
          </a>
        </div>
      </div>
    </section>
  );
};
