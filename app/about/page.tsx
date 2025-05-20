import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Award, Clock, MapPin } from "lucide-react"
import { FiArrowRight as ArrowRightIcon } from "react-icons/fi"

export default function AboutPage() {
  

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
      title: "Fundación como Taller de Soporte Técnico",
      description:
        "Iniciamos como un local especializado en reparación de equipos, ofreciendo soluciones inmediatas a problemas tecnológicos básicos en nuestra comunidad.",
    },
    {
      year: "2012",
      title: "Primer Sistema Empresarial Personalizado",
      description:
        "Desarrollamos nuestro primer software a medida para una PYME local, marcando el inicio de nuestra especialización en soluciones digitales integrales.",
    },
    {
      year: "2015",
      title: "Expansión a Consultoría Tecnológica",
      description:
        "Incorporamos servicios de consultoría estratégica, ayudando a clientes a migrar procesos manuales a plataformas digitales eficientes.",
    },
    {
      year: "2018",
      title: "Lanzamiento de la Suite Modular",
      description:
        "Creamos sistemas modulares (Administrativo, Nómina, Contabilidad) permitiendo a los clientes escalar sus herramientas según sus necesidades.",
    },
    {
      year: "2020",
      title: "Integración con Facturación Electrónica",
      description:
        "Adaptamos nuestros sistemas a normativas fiscales digitales, facilitando a los clientes el cumplimiento de obligaciones tributarias.",
    },
    {
      year: "2023",
      title: "Reconocimiento como Aliado Tecnológico Regional",
      description:
        "Superamos los 500 clientes activos, consolidándonos como referentes en transformación digital para PYMES en la región.",
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
                SYH Computación nació hace más de una década como un modesto taller de soporte técnico, fundado por un grupo de apasionados por la informática con una visión clara: democratizar el acceso a soluciones tecnológicas confiables. Lo que comenzó como un servicio local de reparación de equipos y asesoría básica, pronto evolucionó gracias a la demanda creciente de transformación digital. Nuestro primer hito fue el desarrollo de un sistema empresarial personalizado para una PYME local, proyecto que marcó el inicio de nuestra especialización en software a medida y nos impulsó a ampliar nuestro portafolio hacia consultoría tecnológica y soluciones integrales.
              </p>
              <p className="text-gray-600 mb-4">
                Hoy, somos reconocidos como aliados estratégicos en la digitalización de negocios, pero mantenemos intacto nuestro ADN de empresa cercana. Cada logro, desde implementaciones complejas hasta la creación de nuestra suite modular de software, ha sido posible gracias a relaciones duraderas con clientes que nos han permitido crecer junto a ellos. Nuestra historia es la de una constante adaptación: hemos abrazado tendencias emergentes, superado crisis tecnológicas y ampliado nuestro equipo, siempre guiados por la misión de hacer que la innovación sea tangible para emprendedores y empresas. El futuro nos encuentra preparados para seguir escribiendo este legado, con la misma pasión que tuvimos al reparar aquel primer computador.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="w-full">
                <Image
                  src="/images/equipo.png"
                  alt="Historia de S&H Software"
                  width={700}
                  height={400}
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
               Ofrecer soluciones tecnológicas innovadoras que impulsen la productividad y el éxito de nuestros clientes a través de servicios personalizados, desde desarrollo de software hasta consultoría tecnológica. Simplificando procesos y potenciando negocios, siempre con un enfoque centrado en las necesidades reales de empresas y profesionales.
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
                Visualizamos un futuro donde nuestras soluciones integrales sean sinónimo de excelencia, innovación e impacto positivo en la comunidad empresarial. Aspiramos a ser líderes regionales en transformación digital, reconocidos por nuestra capacidad de combinar tecnología de vanguardia con un servicio humano.
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
              Nos guían la innovación constante, el compromiso con el cliente, la integridad en cada acción y la búsqueda de excelencia. Creemos en la colaboración, la inclusión digital y el poder de la tecnología para crear oportunidades, manteniendo siempre relaciones transparentes y soluciones éticas.
              </p>


            </div>
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
      {/* Timeline line solo visible en md+ */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1F2245]/20"></div>

      <div className="flex flex-col gap-12">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 relative
              ${index % 2 === 0 ? "" : "md:flex-row-reverse"}
            `}
          >
            {/* Línea e ícono */}
            <div className="flex md:justify-center md:items-center md:col-span-2 md:row-span-1 w-full md:w-auto">
              <div className="relative flex flex-col items-center w-full md:w-auto">
                {/* Línea vertical solo en mobile */}
                <div className={`block md:hidden w-1 h-6 bg-[#1F2245]/20 ${index === 0 ? "invisible" : ""}`}></div>
                {/* Icono */}
                <div className="w-12 h-12 rounded-full bg-[#1F2245] flex items-center justify-center z-10 mb-2 md:mb-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                {/* Línea vertical solo en mobile */}
                <div className={`block md:hidden w-1 h-6 bg-[#1F2245]/20 ${index === timeline.length - 1 ? "invisible" : ""}`}></div>
              </div>
            </div>
            {/* Contenido */}
            <div className={`
              bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-4 md:mt-0 w-full
              ${index % 2 === 0 ? "md:col-start-2 md:text-left" : "md:col-start-1 md:text-right"}
              text-center md:text-inherit
            `}>
              <h3 className="text-xl font-bold text-[#1F2245] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Locations
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
      </section> */}

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
