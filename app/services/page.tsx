import Image from "next/image"
import { CheckCircle, Users, Code, Database, Server, Shield, LineChart } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Gestión Avanzada de Inventarios en Consignación",
      description:
        "Controla y rastrea inventarios en consignación con almacenes virtuales vinculados a clientes, alertas de stock mínimo/máximo y monitoreo en tiempo real.",
      longDescription:
        "Nuestro sistema ofrece un control detallado y automatizado de inventarios en consignación, permitiendo la creación de almacenes virtuales asociados a clientes específicos. Con alertas en tiempo real y seguimiento histórico, garantizas la trazabilidad de cada producto, desde su ingreso hasta su venta final.",
      icon: <Code className="h-10 w-10 text-[#1F2245]" />,
      benefits: [
        "Monitorea stock mínimo y máximo con indicadores visuales",
        "Asigna productos a clientes sin perder el rastro de la propiedad",
        "Conecta con ventas, facturación y compras sin redundancias",
        "Genera análisis de rotación, caducidad y rentabilidad por ítem",
        "Adaptable a negocios con múltiples ubicaciones o modelos B2B/B2C",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Sistema Multimoneda para Operaciones Internacionales",
      description:
        "Maneja transacciones en múltiples monedas, costos de importación y ajustes cambiarios, ideal para negocios con proveedores o clientes globales.",
      longDescription:
        "Desarrollado para empresas con proveedores o clientes globales, este servicio maneja transacciones en cualquier moneda, ajustes cambiarios automáticos y cálculos de costos de importación/exportación, todo integrado con facturación y contabilidad.",
      icon: <Server className="h-10 w-10 text-[#1F2245]" />,
      benefits: [
        "Emite documentos en divisas locales o extranjeras",
        "Calcula IGTF, ISLR, Ret IVA y más según regulaciones",
        "Actualiza tasas de cambio diarias desde bancos centrales",
        "Registra gastos logísticos y aranceles en la valoración de inventario",
        "Visualiza ganancias y pérdidas por fluctuaciones cambiarias",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Módulo de Cuentas por Cobrar (CXC) Avanzado",
      description:
        "Administra cobros, abonos parciales, historial de movimientos y conciliación bancaria automatizada mediante archivos Excel.",
      longDescription:
        "Administra el ciclo completo de cobranza: desde emisión de facturas y abonos parciales hasta conciliación automática con extractos bancarios. Incluye estados de cuenta personalizados y recordatorios de pago integrados con WhatsApp.",
      icon: <Database className="h-10 w-10 text-[#1F2245]" />,
      benefits: [
        "Aplica pagos parciales en múltiples monedas",
        "Importa movimientos bancarios vía Excel para validación rápida",
        "Accede al récord completo de transacciones por cliente",
        "Notificaciones automáticas para gestionar cartera vencida",
        "Configura plazos, intereses y descuentos según políticas de tu empresa",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Facturación Electrónica y Gestión de Impuestos Parametrizables",
      description:
        "Infraestructura en la nube segura y escalable que permite a su empresa adaptarse rápidamente a las cambiantes demandas del mercado.",
      longDescription:
        "Próxima integración con proveedores de facturación digital homologados, combinado con un motor de impuestos ajustable (municipales, nacionales o sectoriales). Ideal para cumplir con obligaciones fiscales sin errores.",
      icon: <Server className="h-10 w-10 text-[#1F2245]" />,
      benefits: [
        "Próxima validación legal (proceso en curso)",
        "Define impuestos como Ret IVA, tasas municipales, etc",
        "Almacena documentos electrónicos con validez tributaria",
        "Diseña facturas con logo y campos personalizados",
        "Envía comprobantes automáticamente al cliente vía email/WhatsApp",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: 'Soporte Técnico e Implementación "Llave en Mano"',
      description:
        "Soluciones de seguridad integrales para proteger sus activos digitales contra amenazas cibernéticas cada vez más sofisticadas.",
      longDescription:
        "Desde la instalación (remota o presencial) hasta capacitación y soporte post-venta, ofrecemos acompañamiento completo. Incluye migración de datos históricos y 3 meses de asistencia prioritaria.",
      icon: <Shield className="h-10 w-10 text-[#1F2245]" />,
      benefits: [
        "Instalación en la nube, on-premise o híbrida",
        "Grupo exclusivo de WhatsApp para respuestas 24/7",
        "Sesiones prácticas para usuarios finales y administradores",
        "Traslado de datos desde sistemas legacy sin pérdida",
        "Agrega módulos (Nómina, Contabilidad) cuando lo necesites",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Módulo de Conciliación Bancaria Automatizada",
      description:
        "Compara automáticamente los movimientos de tu sistema con los extractos bancarios, soportando archivos Excel.",
      longDescription:
        "Simplifica y agiliza el proceso de conciliación bancaria con nuestra herramienta de comparación automática entre los movimientos de tu sistema y los extractos bancarios. Soporta formatos de archivos Excel y reduce el trabajo manual en un 90%, garantizando precisión en tus registros financieros.",
      icon: <LineChart className="h-10 w-10 text-[#1F2245]" />,
      benefits: [
        "Carga extractos bancarios en segundos desde tu excel",
        "El sistema sugiere y valida coincidencias entre transacciones",
        "Genera asientos automáticos para diferencias identificadas",
        "Mantén un registro detallado de todas las conciliaciones realizadas",
        "Compatible con cuentas bancarias en diferentes divisas",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const testimonials = [
    {
      quote:
        "S&H Software transformó nuestros procesos de negocio con su solución de software personalizada. Su equipo fue profesional, receptivo y entregó más allá de nuestras expectativas. La aplicación que desarrollaron ha aumentado nuestra eficiencia operativa en un 35% y nos ha permitido ofrecer un mejor servicio a nuestros clientes.",
      name: "Sara Jiménez",
      title: "CTO, TechCorp Inc.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "La aplicación móvil desarrollada por S&H Software ha aumentado significativamente la participación de nuestros clientes. Su atención al detalle y experiencia en experiencia de usuario no tiene igual. Desde el lanzamiento de la app, hemos visto un aumento del 40% en las ventas móviles y un incremento del 25% en la retención de clientes.",
      name: "Miguel Chen",
      title: "Director de Marketing, Retail Solutions",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Trabajar con S&H Software en nuestra migración a la nube fue perfecto. La experiencia de su equipo nos ahorró tiempo y dinero mientras mejoraba el rendimiento de nuestro sistema. La transición fue fluida, sin interrupciones en nuestras operaciones, y ahora disfrutamos de una infraestructura más segura, escalable y con un 30% de ahorro en costos operativos.",
      name: "David Rodríguez",
      title: "Gerente de TI, FinServe Group",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const industries = [
    {
      name: "Restaurantes y Cafeterías",
      description:
        "Gestiona tu cocina como un profesional con nuestro sistema integrado que controla inventario de ingredientes, optimiza pedidos entre sala y cocina, agiliza la facturación electrónica y genera reportes de ventas por platillo y horario. Ademas, lleva las comandas automaticamente desde la mesa hasta la cocina.",
      icon: <LineChart className="h-8 w-8 text-[#1F2245]" />,
    },
    {
      name: "Panaderías y Pastelerías",
      description:
        "Aplicaciones conformes con HIPAA para la gestión de pacientes, sistemas de telemedicina, y soluciones de análisis de datos clínicos que mejoran la atención al paciente.",
      icon: <Shield className="h-8 w-8 text-[#1F2245]" />,
    },
    {
      name: " Clínicas y Consultorios Médicos",
      description:
        "Plataformas de comercio electrónico, sistemas de gestión de inventario y soluciones omnicanal que mejoran la experiencia de compra y aumentan las ventas.",
      icon: <Database className="h-8 w-8 text-[#1F2245]" />,
    },
    {
      name: "Gimnasios y Centros Deportivos",
      description:
        "Sistemas de gestión de la cadena de suministro, soluciones IoT para monitoreo de equipos y aplicaciones de optimización de rutas que mejoran la eficiencia operativa.",
      icon: <Server className="h-8 w-8 text-[#1F2245]" />,
    },
    {
      name: "Zapaterías y Tiendas de Moda",
      description:
        "Plataformas de aprendizaje en línea, sistemas de gestión académica y soluciones de análisis de rendimiento estudiantil que transforman la experiencia educativa.",
      icon: <Users className="h-8 w-8 text-[#1F2245]" />,
    },
    {
      name: "y mas Industrias",
      description:
        "Ya sea una ferretería que necesita controlar miles de SKUs, una farmacia que requiere trazabilidad de medicamentos o una tienda de conveniencia que maneja alta rotación, nuestro sistema se adapta para darte el control total de tu operación con reportes en tiempo real y procesos optimizados.",
      icon: <Code className="h-8 w-8 text-[#1F2245]" />,
    },
  ]

  return (
    <main className="flex-1">
      {/* Services Hero */}
      <section className="w-full py-12 md:py-24 bg-[#1F2245] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">NUESTROS SERVICIOS</h1>
              <p className="max-w-[900px] text-gray-200 md:text-xl">
                Soluciones tecnológicas integrales diseñadas para impulsar la innovación, eficiencia y crecimiento de su
                empresa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold text-[#1F2245] mb-4">TRANSFORMANDO NEGOCIOS A TRAVÉS DE LA TECNOLOGÍA</h2>
            <p className="text-gray-600 mb-4">
              En S&H Software, entendemos que cada empresa es única, con desafíos y objetivos específicos. Por eso,
              ofrecemos una amplia gama de servicios tecnológicos personalizables que se adaptan perfectamente a sus
              necesidades particulares.
            </p>
            <p className="text-gray-600">
              Nuestro enfoque se centra en comprender profundamente su negocio para desarrollar soluciones que no solo
              resuelvan problemas actuales, sino que también establezcan las bases para su crecimiento futuro. Con un
              equipo de expertos apasionados por la tecnología y un compromiso inquebrantable con la calidad, estamos
              preparados para ayudarle a alcanzar sus objetivos tecnológicos y empresariales.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1F2245] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                  <div>
                    <h4 className="font-medium text-[#1F2245] mb-4">Beneficios principales:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#1F2245] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">INDUSTRIAS QUE ATENDEMOS</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestra experiencia abarca diversos sectores, lo que nos permite ofrecer soluciones adaptadas a las
              necesidades específicas de cada industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-[#1F2245]">{industry.name}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">NUESTRO PROCESO</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Seguimos una metodología probada que garantiza resultados de alta calidad, dentro del plazo y presupuesto
              establecidos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[#1F2245]/20 transform md:translate-x-0"></div>

              <div className="space-y-12">
                {[
                  {
                    title: "Descubrimiento y Análisis",
                    description:
                      "Comenzamos comprendiendo profundamente sus necesidades, objetivos y desafíos. Realizamos un análisis detallado de sus procesos actuales y definimos los requisitos específicos del proyecto.",
                    number: "01",
                  },
                  {
                    title: "Diseño y Planificación",
                    description:
                      "Desarrollamos una arquitectura sólida y diseñamos la solución, creando prototipos y wireframes para visualizar el producto final. Establecemos un plan detallado con hitos claros y entregables específicos.",
                    number: "02",
                  },
                  {
                    title: "Desarrollo e Implementación",
                    description:
                      "Nuestro equipo de desarrolladores construye la solución utilizando metodologías ágiles, con ciclos iterativos que permiten ajustes y mejoras continuas. Mantenemos una comunicación constante durante todo el proceso.",
                    number: "03",
                  },
                  {
                    title: "Pruebas y Control de Calidad",
                    description:
                      "Realizamos pruebas exhaustivas para garantizar que la solución cumple con todos los requisitos funcionales y de rendimiento. Identificamos y corregimos cualquier problema antes de la entrega.",
                    number: "04",
                  },
                  {
                    title: "Despliegue y Capacitación",
                    description:
                      "Implementamos la solución en su entorno de producción y proporcionamos capacitación completa a sus equipos para garantizar una adopción exitosa y maximizar el valor de la inversión.",
                    number: "05",
                  },
                  {
                    title: "Soporte y Mantenimiento",
                    description:
                      "Ofrecemos servicios continuos de soporte y mantenimiento para garantizar que su solución siga funcionando de manera óptima, con actualizaciones regulares y mejoras basadas en sus necesidades cambiantes.",
                    number: "06",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:flex-row`}
                  >
                    <div className="flex-1 md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
                      {index % 2 === 0 ? (
                        <div>
                          <div className="text-[#1F2245] font-bold text-4xl mb-2 opacity-30">{step.number}</div>
                          <h3 className="text-xl font-bold text-[#1F2245] mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ) : (
                        <div className="md:hidden">
                          <div className="text-[#1F2245] font-bold text-4xl mb-2 opacity-30">{step.number}</div>
                          <h3 className="text-xl font-bold text-[#1F2245] mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#1F2245] flex items-center justify-center z-10">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 md:w-1/2 md:pl-12 md:text-left">
                      {index % 2 === 1 ? (
                        <div>
                          <div className="text-[#1F2245] font-bold text-4xl mb-2 opacity-30">{step.number}</div>
                          <h3 className="text-xl font-bold text-[#1F2245] mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ) : (
                        <div className="md:hidden">
                          <div className="text-[#1F2245] font-bold text-4xl mb-2 opacity-30">{step.number}</div>
                          <h3 className="text-xl font-bold text-[#1F2245] mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#1F2245]">LO QUE DICEN NUESTROS CLIENTES</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                No se fíe solo de nuestra palabra. Esto es lo que nuestros clientes dicen sobre nuestros servicios.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center"
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
                <blockquote className="mb-4 text-gray-600 italic">{testimonial.quote}</blockquote>
                <div>
                  <p className="font-bold text-[#1F2245]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
