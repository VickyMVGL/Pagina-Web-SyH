import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FiArrowRight as ArrowRightIcon } from "react-icons/fi"

export default function QuestionsPage() {
  const generalFaqs = [
    {
      question: "¿Qué industrias atienden?",
      answer:
        "Atendemos a una amplia gama de industrias, incluyendo finanzas y banca, salud y ciencias de la vida, retail y e-commerce, manufactura y logística, educación, y servicios profesionales. Nuestro equipo tiene experiencia trabajando con empresas de todos los tamaños, desde startups hasta organizaciones de nivel empresarial, adaptando nuestras soluciones a las necesidades específicas de cada sector.",
    },
    {
      question: "¿Cuánto tiempo toma un proyecto de software típico?",
      answer:
        "Los plazos del proyecto varían según la complejidad y los requisitos. Un proyecto simple puede tomar de 2 a 3 meses, mientras que soluciones más complejas pueden tomar más de 6 meses. Durante nuestra consulta inicial, realizamos un análisis detallado de sus necesidades y proporcionamos un cronograma realista basado en las especificaciones de su proyecto, con hitos claros y entregables definidos.",
    },
    {
      question: "¿Proporcionan soporte continuo después de completar el proyecto?",
      answer:
        "Sí, ofrecemos diversos planes de mantenimiento y soporte adaptados a las necesidades de cada cliente. Estos incluyen actualizaciones de seguridad, corrección de errores, mejoras de rendimiento, asistencia técnica y capacitación continua. Nuestro objetivo es establecer relaciones a largo plazo con nuestros clientes, asegurando que sus soluciones sigan funcionando de manera óptima y evolucionando según sus necesidades cambiantes.",
    },
  ]

  const processFaqs = [
    {
      question: "¿Cómo manejan la gestión de proyectos y la comunicación?",
      answer:
        "Seguimos metodologías ágiles como Scrum y Kanban, con ciclos de desarrollo iterativos que permiten una entrega incremental de valor. Asignamos un gerente de proyecto dedicado que sirve como su principal punto de contacto y coordina todos los aspectos del proyecto. Utilizamos herramientas colaborativas que le dan visibilidad completa del progreso, y mantenemos reuniones regulares para garantizar la alineación y abordar cualquier inquietud de manera oportuna.",
    },
    {
      question: "¿Qué metodología utilizan para el desarrollo de software?",
      answer:
        "Utilizamos principalmente metodologías ágiles como Scrum y Kanban, adaptadas a las necesidades específicas de cada proyecto. Este enfoque nos permite entregar valor de forma incremental, mantener una comunicación constante con el cliente, y adaptarnos rápidamente a los cambios en los requisitos. Trabajamos en sprints de 1-2 semanas, con demostraciones regulares del producto para obtener retroalimentación temprana y frecuente.",
    },
    {
      question: "¿Cómo garantizan la calidad de sus soluciones?",
      answer:
        "Implementamos un riguroso proceso de control de calidad que incluye pruebas unitarias, de integración, funcionales y de rendimiento. Utilizamos prácticas como la integración continua y el despliegue continuo (CI/CD) para detectar problemas temprano. Además, realizamos revisiones de código periódicas, auditorías de seguridad y utilizamos herramientas automatizadas para mantener altos estándares de calidad en todo momento.",
    },
    {
      question: "¿Cómo manejan los cambios en los requisitos del proyecto?",
      answer:
        "Entendemos que los requisitos pueden evolucionar durante un proyecto. Nuestro enfoque ágil está diseñado para adaptarse a estos cambios de manera eficiente. Tenemos un proceso estructurado de gestión de cambios que incluye la evaluación del impacto en el cronograma y presupuesto, la priorización de cambios, y la implementación planificada para minimizar interrupciones. Mantenemos una comunicación transparente sobre las implicaciones de cualquier cambio solicitado.",
    },
  ]

  const technicalFaqs = [
    {
      question: "¿En qué tecnologías se especializan?",
      answer:
        "Nuestro equipo es competente en una amplia gama de tecnologías modernas. Para desarrollo frontend, trabajamos con React, Angular, Vue.js y Next.js. En backend, utilizamos Node.js, Python, Java, .NET y PHP. Para desarrollo móvil, dominamos Swift, Kotlin, React Native y Flutter. También tenemos experiencia en cloud computing (AWS, Azure, Google Cloud), bases de datos (SQL, NoSQL), DevOps, y tecnologías emergentes como blockchain e inteligencia artificial.",
    },
    {
      question: "¿Cómo garantizan la seguridad del software que desarrollan?",
      answer:
        "La seguridad está integrada en todo nuestro proceso de desarrollo. Seguimos el principio de 'seguridad por diseño', implementando mejores prácticas como OWASP Top 10. Realizamos análisis de código estático, pruebas de penetración, y evaluaciones de vulnerabilidad regulares. Nuestros desarrolladores reciben formación continua en seguridad, y nos mantenemos actualizados sobre las últimas amenazas y contramedidas para proteger sus aplicaciones y datos.",
    },
    {
      question: "¿Pueden trabajar con nuestros sistemas existentes e integrar nuevas soluciones?",
      answer:
        "Sí, tenemos amplia experiencia en la integración de nuevas soluciones con sistemas existentes. Comenzamos con un análisis detallado de su infraestructura actual para entender las dependencias y puntos de integración. Utilizamos APIs, middleware, microservicios y otras técnicas para crear integraciones robustas que preservan sus inversiones existentes mientras añaden nuevas capacidades. Nuestro enfoque minimiza las interrupciones en sus operaciones durante la transición.",
    },
    {
      question: "¿Cómo abordan la escalabilidad en sus soluciones?",
      answer:
        "Diseñamos nuestras soluciones pensando en la escalabilidad desde el principio. Utilizamos arquitecturas modernas como microservicios, implementamos técnicas de balanceo de carga y caching, y aprovechamos servicios cloud que escalan automáticamente según la demanda. Realizamos pruebas de carga para identificar y resolver cuellos de botella, y optimizamos bases de datos y consultas para mantener un rendimiento óptimo incluso con volúmenes crecientes de datos y usuarios.",
    },
  ]

  const businessFaqs = [
    {
      question: "¿Cuál es su modelo de precios?",
      answer:
        "Ofrecemos varios modelos de precios flexibles para adaptarnos a diferentes tipos de proyectos y presupuestos. Estos incluyen: 1) Precio fijo: para proyectos con alcance bien definido, 2) Tiempo y materiales: para proyectos que requieren mayor flexibilidad, 3) Retainer: para servicios continuos de desarrollo y soporte. Proporcionamos propuestas detalladas con desglose de costos transparente, sin cargos ocultos, y podemos personalizar un modelo que se ajuste a sus necesidades específicas.",
    },
    {
      question: "¿Ofrecen servicios de consultoría?",
      answer:
        "Sí, proporcionamos servicios de consultoría tecnológica para ayudar a las empresas a tomar decisiones informadas sobre su estrategia digital. Nuestros servicios incluyen evaluaciones tecnológicas, planificación de transformación digital, auditorías de sistemas, arquitectura de soluciones, y roadmapping tecnológico. Nuestros consultores combinan experiencia técnica con conocimiento de negocio para ofrecer recomendaciones prácticas y accionables que generan valor real para su empresa.",
    },
    {
      question: "¿Qué hace que S&H Software sea diferente de otras empresas de desarrollo?",
      answer:
        "Nos diferenciamos por varios factores clave: 1) Enfoque consultivo: nos tomamos el tiempo para entender profundamente su negocio antes de proponer soluciones, 2) Equipo de élite: contamos con desarrolladores senior con amplia experiencia en diversas industrias, 3) Calidad excepcional: mantenemos estándares rigurosos en cada línea de código que escribimos, 4) Transparencia total: proporcionamos visibilidad completa del progreso y los costos, 5) Compromiso con resultados: nos enfocamos en entregar valor de negocio real, no solo código. Nos vemos como socios estratégicos en su éxito, no simplemente como proveedores.",
    },
    {
      question: "¿Ofrecen capacitación para los usuarios del software que desarrollan?",
      answer:
        "Sí, la capacitación es una parte integral de nuestro proceso de implementación. Ofrecemos programas de formación personalizados que incluyen sesiones presenciales, webinars, documentación detallada, videos tutoriales y materiales de referencia. Adaptamos la capacitación según los diferentes perfiles de usuarios (administradores, usuarios finales, etc.) y podemos proporcionar formación adicional cuando se implementan nuevas funcionalidades o se incorporan nuevos miembros al equipo.",
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
