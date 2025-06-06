'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, KeyRound, CheckCircle, Server, HandCoins, ReceiptText, Laptop, Landmark, CircleFadingArrowUp, CircleUserRound} from "lucide-react"
import { AiOutlineArrowRight as ArrowRightIcon } from "react-icons/ai"

const banners = [
  {
    src: "/images/banner.png",
    alt: "S&H Software Banner 1",
  },
  {
    src: "/images/banner2.jpg",
    alt: "S&H Software Banner 2",
  },
  {
    src: "/images/banner3.jpg",
    alt: "S&H Software Banner 3",
  },
  {
    src: "/images/banner4.jpg",
    alt: "S&H Software Banner 4",
  },
  // Agrega más imágenes si lo deseas
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex-1">
      {/* Hero Section - Carrusel con efecto deslizado */}
      <section className="relative bg-[#1F2245] overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[450px]">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner, idx) => (
              <div key={idx} className="w-full flex-shrink-0 h-[300px] md:h-[450px] relative">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  className="object-cover w-full h-full opacity-20"
                  priority={idx === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          {/* Indicadores del carrusel */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/50"} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Ir al banner ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-24 relative z-10 -mt-[300px] md:-mt-[450px] flex items-center h-[300px] md:h-[450px]">
          <div className="max-w-3xl w-full mx-auto text-white bg-[#1F2245]/80 rounded-lg p-4 text-center md:text-left md:bg-transparent md:p-0">
            <h1 className="text-xl font-bold mb-3 leading-tight md:text-5xl md:mb-4">
              Enfocados en ofrecer un sistema personalizado para tu negocio!
            </h1>
            <p className="text-xs mb-4 text-gray-200 md:text-xl md:mb-6">
              S&H Software ofrece a sus clientes un servicio diferenciado y objetivo para cada segmento de negocio.
              Optimiza tu gestión empresarial con un sistema multimoneda, en la nube y 100% adaptable. Controla inventarios, ventas, impuestos y más, todo en un solo lugar.
            </p>
            <Link
              href="/services"
              className="inline-block bg-white text-[#1F2245] px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors md:px-6 md:py-3 md:text-base"
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
                  <CircleFadingArrowUp className="h-8 w-8 text-[#1F2245]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovación</h3>
              <p className="text-gray-300">
                En S&H Computación, la innovación es el motor que impulsa nuestras soluciones. Nos dedicamos a explorar y aplicar tecnologías emergentes para ofrecer herramientas digitales de vanguardia que resuelvan problemas reales.
              </p>
            </div>
            <div className="bg-[#1F2245] text-white p-8 text-center rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#1F2245]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Compromiso</h3>
              <p className="text-gray-300">
                Nuestro compromiso se refleja en cada interacción con el cliente. No solo entregamos soluciones técnicas, sino que construimos relaciones a largo plazo basadas en la confianza y la atención personalizada.
              </p>
            </div>
            <div className="bg-[#1F2245] text-white p-8 text-center rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <CircleUserRound className="h-8 w-8 text-[#1F2245]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Integridad</h3>
              <p className="text-gray-300">
                Actuamos con transparencia, ética y responsabilidad en todos nuestros procesos. La honestidad guía nuestras decisiones, desde la cotización de servicios hasta la implementación de sistemas.
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
                En S&H Computación somos un equipo apasionado por la tecnología, dedicado a ofrecer soluciones digitales innovadoras que transforman negocios y simplifican procesos. Con más de dos décadas de experiencia, hemos evolucionado desde un taller de soporte técnico hasta convertirnos en aliados estratégicos para Empresas y Profesionales, brindando desde un desarrollo de software a la medida, hasta consultoría tecnológica integral.
              </p>
              <p className="text-gray-600 mb-4">
                Lo que nos distingue es nuestra combinación de experiencia técnica y un servicio cercano. No solo implementamos sistemas, sino que construimos relaciones de confianza, escuchando las necesidades únicas de cada cliente para ofrecer soluciones personalizadas.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#1F2245] font-medium hover:underline">
                Conozca más sobre nosotros
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="w-full">
                <Image
                  src="/images/us.png"
                  alt="Sobre S&H Software"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-xl w-full h-auto max-h-[350px] md:max-h-[400px]"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                />
                <div className="absolute bg-[#1F2245]/10 w-full h-full top-4 left-4 rounded-lg -z-0"></div>
              </div>
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
                icon: <Server className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Sistema Multimoneda para Operaciones Internacionales",
                description:
                  "Maneja transacciones en múltiples monedas, costos de importación y ajustes cambiarios, ideal para negocios con proveedores o clientes globales.",
                icon: <HandCoins className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Módulo de Cuentas por Cobrar (CXC)",
                description:
                  "Administra cobros, abonos parciales, historial de movimientos y conciliación bancaria automatizada mediante archivos Excel.",
                icon: <ReceiptText className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Facturación Electrónica y Gestión de Impuestos Parametrizables",
                description:
                  "Próximamente integrado con proveedores de facturación electrónica, con impuestos 100% parametrizables (municipales, nacionales, etc.).",
                icon: <Laptop className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: 'Soporte Técnico e Implementación "Llave en Mano"',
                description:
                  "Instalación presencial o remota, migración de datos y 3 meses de soporte gratuito post-implementación con respuestas inmediatas vía WhatsApp.",
                icon: <KeyRound className="h-10 w-10 text-[#1F2245]" />,
              },
              {
                title: "Módulo de Conciliación Bancaria Automatizada",
                description:
                  "Compara automáticamente los movimientos de tu sistema con los extractos bancarios, soportando archivos Excel.",
                icon: <Landmark className="h-10 w-10 text-[#1F2245]" />,
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
              Nos diferenciamos por nuestra amplia experiencia, nuestro soporte técnico de alta calidad y nuestra flexibilidad para adaptarnos a las necesidades únicas de cada cliente. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Experiencia Comprobada y Crecimiento Continuo</h3>
              <ul className="space-y-3">
                {[
                  "+20 años en el mercado acompañando a negocios como el tuyo",
                  "Portafolio diverso de clientes satisfechos que avalan nuestra trayectoria",
                  "Soluciones evolutivas que se adaptan a las necesidades cambiantes del mercado",
                  "Compromiso a largo plazo, creciendo junto a tu empresa",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Soporte Capacitado y Soluciones Reales</h3>
              <ul className="space-y-3">
                {[
                  "Equipo técnico especializado con formación constante en las últimas tecnologías",
                  "Respuestas efectivas, sin improvisaciones, gracias a protocolos establecidos",
                  "Canales de soporte ágiles (presenciales, remotos y distribuidores certificados)",
                  "Soporte en español con comprensión de regulaciones locales",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Sistema 100% Estable y Multimoneda</h3>
              <ul className="space-y-3">
                {[
                  "Plataforma robusta sin fallos en versiones o procesos críticos",
                  "Operaciones en múltiples monedas (ej: $ y Bs.) con tasas actualizables",
                  "Reportes fiscales precisos, incluyendo libros parafiscales en Bs",
                  "Impresión fiscal compatible con requerimientos legales locales",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#1F2245] mb-4">Transparencia y Trazabilidad en Cada Proceso</h3>
              <ul className="space-y-3">
                {[
                  "Registro detallado de todas las operaciones con su tasa cambiaria",
                  "Auditoría completa para cumplir con normativas fiscales",
                  "Historial accesible que facilita la conciliación bancaria",
                  "Declaración de impuestos a través de nuestra aplicación",
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
                question: "¿El sistema admite operaciones con productos importados y múltiples monedas?",
                answer:
                  "Sí, nuestro sistema está diseñado para manejar productos importados y operaciones en múltiples monedas (como USD, Bs. o EUR). Puedes registrar costos según la moneda de compra y automatizar cálculos de impuestos como IGTF, ISLR o Ret IVA. Además, el sistema actualiza tasas cambiarias y genera reportes financieros en la moneda que elijas, cumpliendo con normativas locales e internacionales.",
              },
              {
                question: "¿Está homologado para facturación electrónica con el SENIAT?",
                answer:
                  "Actualmente, estamos en proceso de homologación con el SENIAT y tenemos agenda la segunda revisión para avanzar en esta integración. Mientras tanto, el sistema permite configurar impuestos parametrizables (municipales, nacionales, etc.) y generar facturas tradicionales. Una vez completada la homologación, ofreceremos facturación electrónica con validez legal.",
              },
              {
                question: "¿Cómo funciona el soporte postventa y la implementación?",
                answer:
                  "Tras la instalación (remota o presencial), brindamos 3 meses de soporte gratuito vía WhatsApp para resolver dudas inmediatas. La implementación incluye migración de datos desde sistemas anteriores y capacitación para usuarios. Posteriormente, el soporte técnico tiene un costo de $30/hora. Además, ofrecemos demostraciones remotas para que conozcas el sistema antes de adquirirlo.",
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
