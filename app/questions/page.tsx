import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FiArrowRight as ArrowRightIcon } from "react-icons/fi"

export default function QuestionsPage() {
  const generalFaqs = [
    {
      question: "¿A qué industrias atienden con su sistema?",
      answer:
        "Atendemos a empresas de diversos sectores como comercio (mayorista y minorista), distribución, servicios profesionales, tecnología, manufactura y metalmecánica. Nuestro sistema se adapta fácilmente a las necesidades de cada industria, automatizando procesos clave como facturación, cuentas por cobrar y pagar, conciliaciones bancarias, control de caja, operaciones multimoneda y cumplimiento fiscal.",
    },
    {
      question: "¿El sistema es apto para empresas con múltiples usuarios y sucursales?",
      answer:
        "Totalmente. Es multiusuario con roles personalizables (ej: administrador, vendedor, auditor) y soporta operaciones en la nube para acceso desde cualquier ubicación. Ideal para empresas con varias sucursales que necesiten centralizar información y mantener controles diferenciados.",
    },
    {
      question: "¿Está homologado para facturación electrónica con el SENIAT?",
      answer:
        "Actualmente, estamos en proceso de homologación con el SENIAT, ya estamos en la etapa de evalucion del sistema para su pronta homologacion. Mientras tanto, el sistema permite configurar impuestos parametrizables (municipales, nacionales, etc.) y generar facturas tradicionales.",
    },
  ]

  const processFaqs = [
    {
      question: "¿Cuál es el proceso de implementación del sistema?",
      answer:
        "Nuestro proceso de implementación está diseñado para garantizar una transición fluida a tu nuevo sistema de gestión. Comienza con una instalación flexible (remota o presencial), seguida de la migración segura de tus datos históricos desde sistemas anteriores como Excel.",
    },
    {
      question: "¿Ofrecen capacitación sobre el sistema?",
      answer:
        "¡Claro! Incluimos capacitación personalizada para que tu equipo domine todas las funcionalidades, desde el control de inventario hasta la facturación, con manuales detallados y sesiones prácticas adaptadas a tus procesos.",
    },
    {
      question: "¿Cómo funciona el soporte postventa?",
      answer:
        "Nuestro soporte postventa está pensado para brindarte tranquilidad y continuidad en el uso del sistema. Durante los primeros 3 meses, ofrecemos asistencia técnica gratuita prioritaria a través de WhatsApp, con respuestas rápidas para resolver dudas técnicas, configuraciones especiales o cualquier inconveniente crítico que pueda surgir. Una vez finalizado este período, puedes optar por soporte técnico adicional por un coste extra.",
    },
    {
      question: "¿Cuánto tiempo tarda la implementacion del sistema?",
      answer:
        "El tiempo de implementación varía según la complejidad de tu operación, pero trabajamos para minimizar cualquier interrupción en tu trabajo diario, asegurando que todo esté configurado y funcionando correctamente desde el primer día.",
    },
  ]

  const technicalFaqs = [
    {
      question: "¿Qué tan estable es la aplicación y qué garantías tengo como cliente?",
      answer:
        "Nuestra aplicación es 100% estable en todas sus versiones y procesos. Llevamos más de 20 años en el mercado, creciendo junto a nuestros clientes y adaptando continuamente nuestras soluciones a sus necesidades. Esta trayectoria garantiza confianza, respaldo técnico y un producto que funciona de forma eficiente en entornos empresariales exigentes.",
    },
    {
      question: "¿El sistema es modular? ¿Puedo adquirir solo los módulos que necesite?",
      answer:
        "Sí, nuestro sistema es modular. Puedes adquirir solo el módulo Administrativo (inventario, ventas, CXC), o combinarlo con Nómina y Contabilidad. También ofrecemos el paquete Business, que incluye los tres módulos para una gestión integral. Cada módulo se adapta a tus necesidades y presupuesto.",
    },
    {
      question: "¿Qué funcionalidades ofrece el módulo de Cuentas por Cobrar (CXC)?",
      answer:
        "El módulo de CXC permite gestionar cobros, abonos parciales y estados de cuenta detallados por cliente. Soporta transacciones en multimoneda y ofrece herramientas para conciliación bancaria semiautomática mediante archivos Excel. También integra recordatorios de pago y generación de documentos fiscales, optimizando la gestión de cartera y reduciendo la morosidad.",
    },
  ]

  const businessFaqs = [
    {
      question: "¿Cuál es el costo inicial del sistema y qué incluye?",
      answer:
        "El costo de nuestro software varía según el plan de suscripción elegido y los módulos que desees incluir. Ofrecemos desde una licencia básica con funciones esenciales hasta paquetes completos con todos los módulos integrados (administrativo, nómina y contabilidad), adaptándonos a las necesidades y presupuesto de cada cliente. Los precios cuentan con opciones personalizables según los requerimientos específicos de tu negocio, solo pagas por lo que realmente necesitas, sin sorpresas ni costos ocultos.",
    },
    {
      question: "¿Ofrecen prueba gratuita del sistema?",
      answer:
        "Actualmente no ofrecemos una versión de prueba autogestionable, pero realizamos demostraciones remotas personalizadas sin costo, donde nuestro equipo te guiará por todas las funcionalidades relevantes para tu negocio. Esto te permite evaluar si el sistema se adapta a tus procesos antes de comprometerte.",
    },
    {
      question: "¿Qué nivel de control y seguridad ofrece el sistema?",
      answer:
        "Ofrecemos un alto nivel de control gracias a funcionalidades como cuadre de caja por usuario, conciliaciones bancarias automáticas y registro detallado de cada operación. Además, cada transacción es trazable, permitiendo auditorías internas y supervisión por parte del área administrativa. Esto garantiza seguridad operativa y transparencia en todos los procesos.",
    },
    {
      question: "¿Cómo puedo saber si el sistema es adecuado para mi tipo de negocio?",
      answer:
        "Nuestro equipo comercial está listo para asesorarte y evaluar las necesidades específicas de tu empresa. Gracias a su diseño modular y flexible, el sistema se adapta a distintos tipos de negocio y sectores. Puedes agendar una demostración sin compromiso para conocer cómo funciona y cómo puede ayudarte a optimizar tu gestión empresarial.",
    },
  ]

  return (
    <main className="flex-1">
      {/* FAQ Hero */}
      <section className="w-full py-12 md:py-24 bg-[#1F2245] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PREGUNTAS FRECUENTES</h1>
              <p className="max-w-[900px] text-gray-200 md:text-xl">
                Encuentre respuestas a preguntas comunes sobre nuestros servicios, procesos y experiencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Introduction */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Hemos recopilado las preguntas más frecuentes que recibimos de nuestros clientes y prospectos. Si no
              encuentra la respuesta que busca, no dude en contactarnos directamente y estaremos encantados de ayudarle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* General Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2245] mb-6">Preguntas Generales</h2>
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-[#1F2245] py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Process Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2245] mb-6">Proceso y Metodología</h2>
              <Accordion type="single" collapsible className="w-full">
                {processFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`process-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-[#1F2245] py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Technical Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2245] mb-6">Aspectos Técnicos</h2>
              <Accordion type="single" collapsible className="w-full">
                {technicalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-[#1F2245] py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Business Questions */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2245] mb-6">Aspectos Comerciales</h2>
              <Accordion type="single" collapsible className="w-full">
                {businessFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`business-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-[#1F2245] py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#1F2245]">¿TODAVÍA TIENE PREGUNTAS?</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Nuestro equipo está aquí para ayudar. Contáctenos para obtener más información sobre nuestros servicios
                y cómo podemos ayudar a su empresa.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <button className="bg-[#1F2245] text-white px-8 py-3 font-medium rounded hover:bg-[#1F2245]/90 transition-colors inline-flex items-center">
                  CONTÁCTENOS
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
