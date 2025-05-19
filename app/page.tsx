import Image from "next/image"
import Link from "next/link"
import { Shield, Award, BarChart3, Code, Database, LineChart, Users, CheckCircle } from "lucide-react"
import { AiOutlineArrowRight as ArrowRightIcon } from "react-icons/ai"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-[#1F2245]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="S&H Software Banner"
            width={1600}
            height={800}
            className="object-cover w-full h-full opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Enfocados en ofrecer un sistema personalizado para tu negocio!</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              
S&H Software ofrece a sus clientes un servicio diferenciado y objetivo para cada segmento de negocio.
              Optimiza tu gestión empresarial con un sistema multimoneda, en la nube y 100% adaptable. Controla inventarios, ventas, impuestos y más, todo en un solo lugar.
            </p>
            <Link
              href="/services"
              className="inline-block bg-white text-[#1F2245] px-6 py-3 font-medium rounded hover:bg-gray-100 transition-colors"
            >
              Ver Mas
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1F2245] text-white p-8 text-center rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#1F2245]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">CONFIANZA</h3>
              <p className="text-gray-300">
                Saber se estruturamos todas as nossas atividades de forma a garantir aos nossos clientes um trabalho
                íntegro e de qualidade. Construimos relaciones basadas en la confianza mutua y la transparencia.
              </p>
            </div>
            <div className="bg-[#1F2245] text-white p-8 text-center rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#1F2245]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">CREDIBILIDAD</h3>
              <p className="text-gray-300">
                Uma qualidade que se conquista com um trabalho sério, responsável e com os melhores profissionais
                voltados a todos os nossos clientes. Nuestro historial de éxito respalda nuestra reputación.
              </p>
            </div>
            <div className="bg-[#1F2245] text-white p-8 text-center rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-[#1F2245]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">ÉTICA</h3>
              <p className="text-gray-300">
                Um pilar fundamental baseado em nossos valores morais, princípios, condutas e padrões, definindo
                critérios para a manipulação de informações de nossos clientes. Actuamos con integridad en todo momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2245] mb-4">QUIÉNES SOMOS</h2>
              <p className="text-gray-600 mb-4">
                S&H Software es una empresa líder en el desarrollo de soluciones tecnológicas innovadoras, fundada en
                2010 con la misión de transformar la manera en que las empresas utilizan la tecnología para crecer y
                prosperar.
              </p>
              <p className="text-gray-600 mb-4">
                Contamos con un equipo de más de 100 profesionales altamente cualificados y apasionados por la
                tecnología, distribuidos en nuestras oficinas de España, México y otros países de América Latina y
                Europa.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestra experiencia abarca diversos sectores, desde finanzas y salud hasta retail y manufactura, lo que
                nos permite ofrecer soluciones adaptadas a las necesidades específicas de cada industria.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#1F2245] font-medium hover:underline">
                Conozca más sobre nosotros
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-pink-200 rounded-lg p-8 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Sobre S&H Software"
                width={500}
                height={400}
                className="rounded-lg object-cover z-10 relative"
              />
              <div className="absolute bg-[#1F2245]/10 w-full h-full top-4 left-4 rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">NUESTROS SERVICIOS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios tecnológicos diseñados para impulsar el crecimiento y la eficiencia
              de su empresa. Nuestras soluciones son personalizadas para satisfacer sus necesidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: " Gestión Avanzada de Inventarios en Consignación",
                description:
                  "Controla y rastrea inventarios en consignación con almacenes virtuales vinculados a clientes, alertas de stock mínimo/máximo y monitoreo en tiempo real.",
                icon: <Code className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Sistema Multimoneda para Operaciones Internacionales",
                description:
                  "Maneja transacciones en múltiples monedas, costos de importación y ajustes cambiarios, ideal para negocios con proveedores o clientes globales.",
                icon: <Database className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Módulo de Cuentas por Cobrar (CXC)",
                description:
                  "Administra cobros, abonos parciales, historial de movimientos y conciliación bancaria automatizada mediante archivos Excel.",
                icon: <Users className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Facturación Electrónica y Gestión de Impuestos Parametrizables",
                description:
                  "Próximamente integrado con proveedores de facturación electrónica, con impuestos 100% parametrizables (municipales, nacionales, etc.).",
                icon: <LineChart className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: 'Soporte Técnico e Implementación "Llave en Mano"',
                description:
                  "Instalación presencial o remota, migración de datos y 3 meses de soporte gratuito post-implementación con respuestas inmediatas vía WhatsApp.",
                icon: <Shield className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Módulo de Conciliación Bancaria Automatizada",
                description:
                  "Compara automáticamente los movimientos de tu sistema con los extractos bancarios, soportando archivos Excel.",
                icon: <BarChart3 className="h-10 w-10 text-[#1F2245]" />,
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex">
                <div className="mr-4 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2245] mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-[#1F2245] font-medium flex items-center hover:underline">
                    Ver más detalles <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-[#1F2245] text-white px-8 py-3 font-medium rounded hover:bg-[#1F2245]/90 transition-colors">
                VER TODOS LOS SERVICIOS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">¿POR QUÉ ELEGIRNOS?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos diferenciamos por nuestro enfoque centrado en el cliente, nuestra experiencia técnica y nuestro
              compromiso con la excelencia en cada proyecto que emprendemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Experiencia y Conocimiento</h3>
              <ul className="space-y-3">
                {[
                  "Más de 13 años de experiencia en el sector tecnológico",
                  "Equipo de profesionales altamente cualificados y certificados",
                  "Conocimiento profundo de diversas industrias y sus necesidades específicas",
                  "Metodologías ágiles que garantizan resultados rápidos y de calidad",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Enfoque Centrado en el Cliente</h3>
              <ul className="space-y-3">
                {[
                  "Soluciones personalizadas adaptadas a sus necesidades específicas",
                  "Comunicación transparente y constante durante todo el proyecto",
                  "Soporte continuo y mantenimiento post-implementación",
                  "Compromiso con su satisfacción y éxito a largo plazo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Tecnología de Vanguardia</h3>
              <ul className="space-y-3">
                {[
                  "Utilizamos las últimas tecnologías y mejores prácticas del mercado",
                  "Soluciones escalables que crecen con su negocio",
                  "Arquitecturas robustas y seguras que protegen sus datos",
                  "Innovación constante para mantenerle a la vanguardia del sector",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Resultados Comprobados</h3>
              <ul className="space-y-3">
                {[
                  "Historial probado de proyectos exitosos en diversos sectores",
                  "Testimonios y referencias de clientes satisfechos",
                  "Métricas de rendimiento que demuestran el valor de nuestras soluciones",
                  "Reconocimientos y premios de la industria por nuestra excelencia",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">LO QUE DICEN NUESTROS CLIENTES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros clientes son nuestro mejor aval. Descubra lo que opinan sobre nuestros servicios y cómo hemos
              contribuido a su éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "S&H Software transformó completamente nuestros procesos internos con una solución a medida que aumentó nuestra productividad en un 40%. Su equipo entendió perfectamente nuestras necesidades y entregó un producto que superó todas nuestras expectativas.",
                name: "María Rodríguez",
                title: "Directora de Operaciones, Grupo Financiero XYZ",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "La aplicación móvil desarrollada por S&H Software ha revolucionado nuestra forma de interactuar con los clientes. Desde su implementación, hemos visto un aumento del 60% en la retención de usuarios y un 35% en las ventas a través de la app.",
                name: "Javier López",
                title: "Director de Marketing, Retail Innovations",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "Elegimos a S&H Software para nuestra migración a la nube y fue la mejor decisión que pudimos tomar. El proceso fue fluido, sin interrupciones en nuestras operaciones, y ahora disfrutamos de una infraestructura más segura, escalable y con un 30% de ahorro en costos.",
                name: "Carlos Martínez",
                title: "CIO, HealthTech Solutions",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <blockquote className="mb-4 text-gray-600 italic">&quot;{testimonial.quote}&quot;</blockquote>
                <div>
                  <p className="font-bold text-[#1F2245]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">PREGUNTAS FRECUENTES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentre respuestas a las preguntas más comunes sobre nuestros servicios y procesos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "¿Qué metodología utilizan para el desarrollo de software?",
                answer:
                  "Utilizamos metodologías ágiles como Scrum y Kanban, adaptadas a las necesidades específicas de cada proyecto. Esto nos permite entregar valor de forma incremental, mantener una comunicación constante con el cliente y adaptarnos rápidamente a los cambios.",
              },
              {
                question: "¿Cómo garantizan la calidad de sus soluciones?",
                answer:
                  "Implementamos un riguroso proceso de control de calidad que incluye pruebas unitarias, de integración, funcionales y de rendimiento. Además, realizamos revisiones de código periódicas y utilizamos herramientas automatizadas para detectar y corregir posibles problemas antes de la entrega.",
              },
              {
                question: "¿Ofrecen servicios de mantenimiento post-implementación?",
                answer:
                  "Sí, ofrecemos diversos planes de mantenimiento y soporte adaptados a las necesidades de cada cliente. Estos incluyen actualizaciones de seguridad, corrección de errores, mejoras de rendimiento y asistencia técnica continua para garantizar que su solución siga funcionando de manera óptima.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-[#1F2245] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/questions">
              <button className="bg-[#1F2245] text-white px-6 py-3 font-medium rounded hover:bg-[#1F2245]/90 transition-colors inline-flex items-center">
                VER TODAS LAS PREGUNTAS
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F2245] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿LISTO PARA TRANSFORMAR SU EMPRESA?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para discutir cómo nuestras soluciones tecnológicas pueden ayudar a su empresa a alcanzar
            nuevos niveles de éxito y eficiencia.
          </p>
        </div>
      </section>
    </main>
  )
}
