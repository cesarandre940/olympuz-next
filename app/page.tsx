"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Dumbbell, Heart, Timer, Users } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  // Features data
  const features = [
    {
      name: "Planes Personalizados",
      description: "Rutinas adaptadas a tus objetivos y nivel de experiencia.",
      icon: Dumbbell,
    },
    {
      name: "Soporte Continuo",
      description:
        "Guía de entrenadores expertos para asegurar resultados óptimos.",
      icon: Users,
    },
    {
      name: "Flexibilidad Total",
      description: "Entrena a tu ritmo, en cualquier momento y lugar.",
      icon: Timer,
    },
    {
      name: "Resultados Garantizados",
      description:
        "Transforma tu cuerpo y mejora tu salud con nuestros planes.",
      icon: Heart,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: `Tengo más de 2 años haciendo ejercicio pero en solo 8 meses con Olympuz he notado cambios en verdad✨ 
Puedo ir al gym en el horario que mejor me resulte y hacer las rutinas personalizadas a mi propio ritmo y avance.`,
      author: "Danye Alfaro",
      role: "Cliente Plan Básico",
      avatar: "/placeholder.svg",
    },
    {
      quote: `Obtuve el plan de entrenamiento de olimpuz 🔱 y desde el primer día, noté una diferencia significativa en mi energía y motivación. Los entrenamientos son variados y desafiantes, pero siempre adaptables a mi nivel de condición física.
El plan se adecuo muy bien a mis tiempos y mis objetivos que deseo alcanzar, llevo ya varios años entrenando de manera individual, pero he notado la diferencia al entrenar ya con un plan definido y que me ayudado mucho en realizar de mejor manera los ejercicios y las técnicas correctas.`,
      author: "Nestor Iván",
      role: "Cliente Plan Basico",
      avatar: "/placeholder.svg",
    },
  ];

  // Plans data
  const plans = [
    {
      name: "Plan Básico",
      price: "$15",
      features: [
        "Rutinas simples y efectivas",
        "Adaptable a casa o gimnasio",
        "Soporte básico",
        "Seguimiento mensual",
      ],
    },
    {
      name: "Plan Avanzado",
      price: "$30",
      features: [
        "Rutinas intensivas",
        "Enfoque en fuerza y estética",
        "Soporte prioritario",
        "Seguimiento semanal",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-saas-primary via-saas-secondary to-black">
      {/* Navigation Bar */}

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fadeIn">
              {/* Logo Section */}
              <div className="flex justify-center mb-8">
                <img
                  src="/logo.svg"
                  alt="Olympuz Logo"
                  className="w-48 md:w-64 lg:w-80 hover:scale-105 transition-all duration-300"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 sm:text-6xl mb-6">
                Transforma tu vida con Olympuz
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                Planes de entrenamiento físico personalizados para principiantes
                y avanzados. Alcanza tus metas de acondicionamiento físico, ya
                sea ganar músculo, perder peso o mejorar tu rendimiento.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  onClick={() => router.push("/plan")}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  Empieza Ahora
                </Button>
                <Button
                  onClick={() => {
                    const featuresSection = document.querySelector("#features");
                    featuresSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="outline"
                  className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border-white/20 px-8 py-6 rounded-full text-lg transition-all duration-300"
                >
                  Saber Más
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 sm:text-4xl">
                Todo lo que necesitas para alcanzar tus metas
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Nuestra plataforma te brinda las herramientas necesarias para
                transformar tu cuerpo.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="group flex flex-col items-center text-center animate-fadeIn backdrop-blur-lg bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 border border-white/10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 justify-items-center max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative p-8 backdrop-blur-lg bg-white/5 border-white/10 shadow-lg rounded-2xl animate-fadeIn hover:bg-white/10 transition-all duration-300 hover:scale-105 max-w-xl w-full group"
                >
                  <svg
                    className="absolute top-4 right-4 h-8 w-8 text-white/40 group-hover:text-white/60 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 border-2 border-white/30 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-300 text-justify">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-24 sm:py-32 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Planes de entrenamiento
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Elige el plan que mejor se adapte a tus objetivos
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="p-8 animate-fadeIn backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-white">
                    {plan.price}
                    <span className="text-lg text-gray-300">/mes</span>
                  </p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-white mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full backdrop-blur-md bg-white/10 border border-white/20 text-white 
                    hover:bg-white/20 transition-all duration-300 transform hover:scale-105 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)]"
                    onClick={() => router.push("/plan")}
                  >
                    Empezar Ahora
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Servicios
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Plan Básico
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Plan Avanzado
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Testimonios
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Empresa
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Sobre Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Recursos
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Comunidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Soporte
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Términos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-saas-secondary transition-colors"
                    >
                      Seguridad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-300">
                &copy; 2024 Olympuz. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
