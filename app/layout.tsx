import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"

import { ThemeProvider } from "@/components/ui/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "S&H Software - Soluciones de Software Innovadoras",
  description:
    "S&H Software ofrece soluciones tecnológicas de vanguardia para ayudar a su empresa a prosperar en la era digital.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Main Navigation */}
          <header className="w-full bg-white border-b">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
              <Link href="/" className="font-bold text-2xl text-[#1F2245]">
                S&H<span className="text-gray-500">Software</span>
              </Link>
              <nav className="hidden md:flex gap-8">
                <Link href="/" className="text-sm font-medium hover:text-[#1F2245] transition-colors">
                  INICIO
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-[#1F2245] transition-colors">
                  SOBRE S&H
                </Link>
                <Link href="/services" className="text-sm font-medium hover:text-[#1F2245] transition-colors">
                  SERVICIOS
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-[#1F2245] transition-colors">
                  CONTACTO
                </Link>
              </nav>
              <Link
                href="/contact"
                className="bg-[#1F2245] text-white px-4 py-2 text-sm font-medium rounded hover:bg-[#1F2245]/90 transition-colors"
              >
                Distribuidores
              </Link>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="w-full bg-[#1F2245] text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                  Contáctenos</h3>
                  <p className="mb-4">
                  Envíanos un mensaje rellenando el formulario, nos pondremos en contacto contigo lo antes posible!
                  </p>
                  <p className="mb-2">
                  Si lo prefieres puedes hacer tus consultas por teléfono:</p>
                  <p className="text-xl font-bold">(+58) 424 440 41 15</p>
                </div>
                <div>
                  <form
                    className="space-y-4"
                    action="https://formsubmit.co/info@syhcomputacion.com"
                    method="POST"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Nombre*"
                          className="w-full px-4 py-2 rounded text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only ">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="E-mail*"
                          className="w-full px-4 py-2 rounded text-white"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Telefono*"
                        className="w-full px-4 py-2 rounded text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Mensaje*"
                        rows={4}
                        className="w-full px-4 py-2 rounded text-white"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-[#1F2245] px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
                    >
                      ENVIAR
                    </button>
                  </form>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="font-bold text-xl mb-4 md:mb-0">
                  S&H<span className="text-gray-400">Software</span>
                </div>
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} S&H Software. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
