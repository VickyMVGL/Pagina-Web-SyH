import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Award, Clock, MapPin } from "lucide-react"
import { FiArrowRight as ArrowRightIcon } from "react-icons/fi"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Carlos Rodríguez",
      position: "CEO & Fundador",
      bio: "Con más de 15 años de experiencia en desarrollo de software y gestión de proyectos tecnológicos. Carlos fundó S&H Software con la visión de crear soluciones innovadoras que transformen empresas.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Elena Martínez",
      position: "CTO",
      bio: "Especialista en arquitectura de software y nuevas tecnologías. Elena lidera nuestro equipo técnico asegurando que implementemos las mejores soluciones tecnológicas para cada cliente.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Javier Sánchez",
      position: "Director de Operaciones",
      bio: "Con experiencia en optimización de procesos y gestión de equipos, Javier asegura que todos nuestros proyectos se entreguen a tiempo y con la máxima calidad.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Valentina López",
      position: "Directora de Experiencia de Cliente",
      bio: "Especialista en UX/UI y experiencia de cliente, María se asegura de que todas nuestras soluciones sean intuitivas y satisfagan las necesidades reales de los usuarios.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const locations = [
    {
      city: "Madrid",
      address: "Calle Gran Vía 28, 28013 Madrid, España",
      phone: "+34 91 123 4567",
      email: "madrid@shsoftware.com",
    },
    {
      city: "Barcelona",
      address: "Avinguda Diagonal 640, 08017 Barcelona, España",
      phone: "+34 93 123 4567",
      email: "barcelona@shsoftware.com",
    },
    {
      city: "Ciudad de México",
      address: "Paseo de la Reforma 222, 06600 Ciudad de México, México",
      phone: "+52 55 1234 5678",
      email: "mexico@shsoftware.com",
    },
  ]

  const timeline = [
    {
      year: "2010",
      title: "Fundación",
      description:
        "S&H Software fue fundada por Carlos Rodríguez con la visión de crear soluciones tecnológicas innovadoras para empresas.",
    },
    {
      year: "2012",
      title: "Expansión",
      description:
        "Abrimos nuestra primera oficina internacional en Ciudad de México y ampliamos nuestro equipo a 25 profesionales.",
    },
    {
      year: "2015",
      title: "Innovación",
      description:
        "Lanzamos nuestra plataforma de desarrollo ágil que revolucionó nuestra forma de entregar proyectos a clientes.",
    },
    {
      year: "2018",
      title: "Reconocimiento",
      description:
        "Recibimos el premio a la Empresa Tecnológica del Año por nuestra contribución a la transformación digital.",
    },
    {
      year: "2020",
      title: "Crecimiento",
      description:
        "Alcanzamos los 100 empleados y expandimos nuestras operaciones a 5 países en América Latina y Europa.",
    },
    {
      year: "2023",
      title: "Actualidad",
      description:
        "Continuamos innovando y creciendo, con un enfoque en soluciones de inteligencia artificial y cloud computing.",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-[#1F2245] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">SOBRE NOSOTROS</h1>
              <p className="max-w-[900px] text-gray-200 md:text-xl">
                Conozca nuestra historia, misión, visión y el equipo detrás de S&H Software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2245] mb-6">NUESTRA HISTORIA</h2>
              <p className="text-gray-600 mb-4">
                S&H Software nació en 2010 con una visión clara: transformar la manera en que las empresas utilizan la
                tecnología para crecer y prosperar. Desde nuestros humildes comienzos como una pequeña consultora con
                apenas 5 empleados, hemos crecido hasta convertirnos en una empresa líder en el sector con presencia
                internacional.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de nuestra trayectoria, hemos ayudado a cientos de empresas de todos los tamaños y sectores a
                implementar soluciones tecnológicas que han transformado sus operaciones y les han permitido alcanzar
                nuevos niveles de éxito.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso con la excelencia, la innovación y la satisfacción del cliente nos ha permitido
                construir relaciones duraderas con nuestros clientes, muchos de los cuales nos han acompañado desde
                nuestros inicios.
              </p>
            </div>
            <div className="bg-pink-200 rounded-lg p-8 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Historia de S&H Software"
                width={500}
                height={400}
                className="rounded-lg object-cover z-10 relative"
              />
              <div className="absolute bg-[#1F2245]/10 w-full h-full top-4 left-4 rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">MISIÓN, VISIÓN Y VALORES</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estos son los principios fundamentales que guían nuestro trabajo y definen quiénes somos como empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#1F2245] flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F2245] mb-4 text-center">MISIÓN</h3>
              <p className="text-gray-600 text-center">
                Proporcionar soluciones tecnológicas innovadoras y de alta calidad que impulsen el crecimiento y la
                eficiencia de nuestros clientes, contribuyendo a su transformación digital y ayudándoles a alcanzar sus
                objetivos de negocio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#1F2245] flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F2245] mb-4 text-center">VISIÓN</h3>
              <p className="text-gray-600 text-center">
                Ser reconocidos globalmente como líderes en el desarrollo de soluciones tecnológicas innovadoras,
                estableciendo nuevos estándares de excelencia en la industria y siendo el socio tecnológico preferido
                por empresas que buscan transformar sus negocios a través de la tecnología.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#1F2245] flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F2245] mb-4 text-center">VALORES</h3>
              <p className="text-gray-600 text-center">
              Nuestra empresa se guía por la excelencia, la innovación y la integridad, buscando siempre superar estándares y crear valor con ética. Trabajamos en equipo con clientes y socios, comprometidos en cumplir promesas y superar expectativas con dedicación.
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">NUESTRO EQUIPO</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Contamos con un equipo de profesionales altamente cualificados y apasionados por la tecnología, dedicados
              a ofrecer las mejores soluciones a nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2245] mb-1">{member.name}</h3>
                  <p className="text-[#1F2245]/70 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Nuestro equipo está formado por más de 100 profesionales distribuidos en nuestras oficinas de España,
              México y otros países de América Latina y Europa.
            </p>
            <Link href="/contact">
              <button className="bg-[#1F2245] text-white px-6 py-3 rounded font-medium hover:bg-[#1F2245]/90 transition-colors">
                ÚNETE A NUESTRO EQUIPO
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">NUESTRA TRAYECTORIA</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un vistazo a los momentos clave que han definido nuestra historia y crecimiento a lo largo de los años.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1F2245]/20"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } md:flex-row`}
                >
                  <div className="flex-1 md:w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#1F2245] flex items-center justify-center z-10">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 md:w-1/2 md:pl-12 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <span className="text-sm font-bold text-[#1F2245]/70">{item.year}</span>
                      <h3 className="text-xl font-bold text-[#1F2245] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2245] mb-4">NUESTRAS OFICINAS</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estamos presentes en varias ciudades para estar más cerca de nuestros clientes y ofrecer un servicio
              personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F2245] flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1F2245] mb-3 text-center">{location.city}</h3>
                <div className="text-gray-600 space-y-2 text-center">
                  <p>{location.address}</p>
                  <p>
                    <span className="font-medium">Teléfono:</span> {location.phone}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {location.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1F2245] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿QUIERE CONOCERNOS MEJOR?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos siempre abiertos a nuevas oportunidades y colaboraciones. Contáctenos para programar una reunión o
            visitar nuestras oficinas.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#1F2245] px-8 py-3 font-medium rounded hover:bg-gray-100 transition-colors inline-flex items-center">
              CONTÁCTENOS
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
