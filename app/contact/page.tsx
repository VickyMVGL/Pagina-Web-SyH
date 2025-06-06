import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram, } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Contact Hero */}
      <section className="w-full py-12 md:py-24 bg-[#1F2245] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">CONTÁCTENOS</h1>
              <p className="max-w-[900px] text-gray-200 md:text-xl">
                Estamos aquí para responder a sus preguntas y discutir cómo podemos ayudar a su empresa a alcanzar sus
                objetivos tecnológicos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2245] mb-4">HABLEMOS DE SU PROYECTO</h2>
            <p className="text-gray-600 mb-4">
              Ya sea que tenga una idea clara de lo que necesita o esté explorando posibilidades, estamos aquí para
              ayudarle. Nuestro equipo de expertos está listo para escuchar sus necesidades y ofrecerle soluciones
              personalizadas que impulsen el crecimiento de su negocio.
            </p>
            <p className="text-gray-600">
              Complete el formulario a continuación, llámenos o visite nuestras oficinas. Nos pondremos en contacto con
              usted en un plazo de 24 horas para discutir su proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2245] mb-6">ENVÍENOS UN MENSAJE</h2>
              <form 
  className="space-y-4"
  action="https://formsubmit.co/info@syhcomputacion.com"
  method="POST"
>
  {/*Campo oculto para evitar spam */}
  <input type="hidden" name="_captcha" value="false" />
  <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      placeholder="Ingrese su nombre"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Ingrese su apellido"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nombre de su empresa"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese su correo electrónico"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ingrese su número de teléfono"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntenos sobre su proyecto o consulta"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1F2245] text-white px-6 py-3 rounded font-medium hover:bg-[#1F2245]/90 transition-colors"
                >
                  ENVIAR MENSAJE
                </button>
</form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1F2245] mb-6">INFORMACIÓN DE CONTACTO</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[#1F2245]" />
                      Correo Electrónico
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700">
                      <a href="mailto:info@shsoftware.com" className="hover:text-[#1F2245]">
                        info@syhcomputacion.com
                      </a>
                    </CardDescription>
                    
                  </CardContent>
                </Card>
                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Phone className="h-5 w-5 text-[#1F2245]" />
                      Teléfono
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700">
                      <a href="https://wa.link/i2nkf0" className="hover:text-[#1F2245]">
                        +58 (424) 440- 41 15
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#1F2245]" />
                      Dirección
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700">
                      Oficina Principal:
                      <br />
                      <br />
                      Av. Principal Qta. Nro 18 Conjunto Residencial El Remanso, Manzana 21-D (Dentro del Centro Medico Profesional El Remanso)
                      <br />
                      <br />
                      San Diego, Carabobo
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#1F2245]" />
                      Horario de Atención
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700">
                      Lunes - Viernes: 8am - 5pm
                      <br />
                      Sábado: Cerrado
                      <br />
                      Domingo: Cerrado
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#1F2245] mb-4">NUESTRA UBICACIÓN</h3>
                <div className="aspect-video w-full rounded-lg bg-gray-200 overflow-hidden border border-gray-300">
                  <iframe
                    title="Ubicación S&H Computación"
                    src="https://www.google.com/maps?q=Conjunto+Residencial+El+Remanso,+Manzana+D-4,+San+Diego,+Carabobo&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-2 text-center">
                  <a
                    href="https://www.google.com/maps/place/Centro+Medico+y+Profesional+el+Remanso/@10.2613134,-67.9633272,17z/data=!3m1!4b1!4m6!3m5!1s0x8e805d4472ec0447:0xca5f564ecaf2f69a!8m2!3d10.2613134!4d-67.9607523!16s%2Fg%2F11tp9zn02s?entry=tts&g_ep=EgoyMDI0MDYyNi4wKgBIAVAD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F2245] underline hover:text-[#1F2245]/80"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#1F2245] mb-4">SÍGANOS EN REDES SOCIALES</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/syhsoftware/"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/syhsoftware/"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://www.youtube.com/@tusyhsoftware7187"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                  >
                    <AiOutlineYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

