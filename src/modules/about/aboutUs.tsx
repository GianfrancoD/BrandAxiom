import { Users, Lightbulb, Target, Rocket } from "lucide-react";

import { useState, React } from "react";
import TeamMemberModal from "../modals/teamModals/TeamMemberModal.tsx";

const teamMembers = [
  {
    name: "Ana Rodríguez",
    role: "CEO & Fundadora",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    name: "Carlos Mendoza",
    role: "Director de Estrategia",
    image:
      "https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg",
  },
  //   {
  //     name: "Laura Sánchez",
  //     role: "Directora Creativa",
  //     image: "/placeholder.svg?height=400&width=400",
  //   },
  //   {
  //     name: "Miguel Ángel Torres",
  //     role: "Director de Tecnología",
  //     image: "/placeholder.svg?height=400&width=400",
  //   },
];

const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    title: "Innovación",
    description:
      "Constantemente buscamos nuevas formas de impulsar el éxito de nuestros clientes.",
  },
  {
    icon: <Target className="w-8 h-8 text-red-400" />,
    title: "Precisión",
    description:
      "Nos enfocamos en estrategias basadas en datos para lograr resultados medibles.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Colaboración",
    description:
      "Trabajamos estrechamente con nuestros clientes para alcanzar objetivos comunes.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: "Excelencia",
    description:
      "Nos esforzamos por superar las expectativas en cada proyecto que emprendemos.",
  },
];

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section
      id="about-us"
      className="py-20 bg-gradient-to-b from-[#1E293B] to-[#1E293B]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Quiénes Somos
        </h2>

        <div className="mb-16">
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            En BrandAxiom, somos un equipo apasionado de expertos en marketing
            digital, diseño y tecnología. Nuestra misión es impulsar el
            crecimiento de tu negocio a través de estrategias innovadoras y
            soluciones creativas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" rounded-lg p-6 transition-all duration-300   hover:scale-105 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative w-auto h-40 mx-auto mb-4 overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
              >
                <div className="flex-shrink-0">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedMember && (
          <TeamMemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </section>
  );
}