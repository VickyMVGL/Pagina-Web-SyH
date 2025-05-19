import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="first-name"
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
                    placeholder="Ingrese su número de teléfono"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="custom-software">Desarrollo de Software a Medida</option>
                    <option value="web-app">Aplicaciones Web</option>
                    <option value="mobile-app">Aplicaciones Móviles</option>
                    <option value="cloud">Soluciones Cloud</option>
                    <option value="security">Ciberseguridad</option>
                    <option value="data-ai">Análisis de Datos e IA</option>
                    <option value="consulting">Consultoría Tecnológica</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    placeholder="Cuéntenos sobre su proyecto o consulta"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1F2245] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="privacy" className="mt-1 mr-2" required />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    He leído y acepto la{" "}
                    <a href="#" className="text-[#1F2245] hover:underline">
                      política de privacidad
                    </a>
                  </label>
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
                        info@shsoftware.com
                      </a>
                    </CardDescription>
                    <CardDescription className="text-base text-gray-700 mt-2">
                      <a href="mailto:ventas@shsoftware.com" className="hover:text-[#1F2245]">
                        ventas@shsoftware.com
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
                      <a href="tel:+15551234567" className="hover:text-[#1F2245]">
                        +1 (555) 123-4567
                      </a>
                    </CardDescription>
                    <CardDescription className="text-base text-gray-700 mt-2">
                      <a href="tel:+15557654321" className="hover:text-[#1F2245]">
                        +1 (555) 765-4321
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
                      123 Tech Park, Suite 456
                      <br />
                      San Francisco, CA 94105
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
                      Lunes - Viernes: 9am - 6pm
                      <br />
                      Sábado: 10am - 2pm
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
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-600">
                      Mapa interactivo - sería reemplazado con una integración de mapa real
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#1F2245] mb-4">SÍGANOS EN REDES SOCIALES</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1F2245] flex items-center justify-center text-white hover:bg-[#1F2245]/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
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

