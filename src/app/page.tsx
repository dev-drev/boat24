"use client";

import Link from "next/link";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Anchor,
  UserCheck,
  UserX,
} from "lucide-react";
import AuthModal from "@/components/AuthModal";
import { useState } from "react";

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">BOAT24</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link
                href="/barche"
                className="text-gray-700 hover:text-blue-600"
              >
                Barche
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                La Mia Patente
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Contatti
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAuthModal(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                Accedi
              </button>
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Registrati
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Boat Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/assets/boat.webp)",
            }}
          ></div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-700/80"></div>

          {/* Ocean Waves Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-800/60 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 120%22%3E%3Cpath d=%22M0 120 L0 80 Q300 60 600 80 T1200 80 L1200 120 Z%22 fill=%22%23ffffff%22 opacity=%220.2%22/%3E%3Cpath d=%22M0 120 L0 90 Q300 70 600 90 T1200 90 L1200 120 Z%22 fill=%22%23ffffff%22 opacity=%220.1%22/%3E%3C/svg%3E')] bg-repeat-x opacity-40"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Affitta la tua
            <span className="text-cyan-300"> barca ideale</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Scegli tra barche con skipper professionale o noleggia autonomamente
            se hai la patente nautica. Esperienze su misura per ogni livello di
            esperienza.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Dove ritirare la barca?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Numero passeggeri</option>
                  <option>1-4 persone</option>
                  <option>5-8 persone</option>
                  <option>9+ persone</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Cerca
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Scegli il tipo di esperienza
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Con Skipper */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Con Skipper
              </h3>
              <p className="text-gray-600 mb-4">
                Goditi la navigazione senza preoccupazioni. Skipper
                professionale incluso, perfetto per chi non ha patente o vuole
                rilassarsi.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Nessuna patente richiesta</li>
                <li>• Skipper esperto incluso</li>
                <li>• Sicurezza garantita</li>
                <li>• Consigli su rotte e ancoraggi</li>
              </ul>
              <div className="text-2xl font-bold text-green-600 mb-4">
                da €150/giorno
              </div>
              <Link
                href="/barche?type=con-skipper"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 inline-block"
              >
                Sfoglia barche con skipper
              </Link>
            </div>

            {/* Senza Skipper */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserX className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Senza Skipper
              </h3>
              <p className="text-gray-600 mb-4">
                Noleggia autonomamente se hai la patente nautica. Libertà totale
                nella scelta di rotte e destinazioni.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Patente nautica richiesta</li>
                <li>• Libertà di navigazione</li>
                <li>• Prezzi più convenienti</li>
                <li>• Esperienza completa</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                da €80/giorno
              </div>
              <Link
                href="/barche?type=senza-skipper"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 inline-block"
              >
                Sfoglia barche senza skipper
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tipi di Imbarcazioni Disponibili
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gommoni */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛥️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gommoni
              </h3>
              <p className="text-gray-600 mb-4">
                Perfetti per escursioni giornaliere
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>Capacità: 4-8 persone</div>
                <div>Patente: A o B (senza skipper)</div>
              </div>
              <Link
                href="/barche?category=gommone"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sfoglia gommoni →
              </Link>
            </div>

            {/* Barche a Vela */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⛵</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Barche a Vela
              </h3>
              <p className="text-gray-600 mb-4">
                Esperienze di navigazione autentiche
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>Capacità: 6-12 persone</div>
                <div>Patente: Vela (senza skipper)</div>
              </div>
              <Link
                href="/barche?category=vela"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sfoglia barche a vela →
              </Link>
            </div>

            {/* Motoscafi */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚤</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Motoscafi
              </h3>
              <p className="text-gray-600 mb-4">Velocità e comfort</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>Capacità: 8-15 persone</div>
                <div>Patente: A o B (senza skipper)</div>
              </div>
              <Link
                href="/barche?category=motoscafo"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sfoglia motoscafi →
              </Link>
            </div>

            {/* Catamarani */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⛵</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Catamarani
              </h3>
              <p className="text-gray-600 mb-4">Stabilità e spazio</p>
              <div className="text-sm text-gray-500 mb-4">
                <div>Capacità: 10-20 persone</div>
                <div>Patente: Vela (senza skipper)</div>
              </div>
              <Link
                href="/barche?category=catamarano"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sfoglia catamarani →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* License Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Informazioni sulla Patente Nautica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patente A
              </h3>
              <p className="text-gray-600 text-sm">
                Per barche a motore fino a 40 CV. Età minima: 18 anni.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patente B
              </h3>
              <p className="text-gray-600 text-sm">
                Per barche a motore senza limiti di potenza. Età minima: 18
                anni.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patente Vela
              </h3>
              <p className="text-gray-600 text-sm">
                Per barche a vela. Età minima: 16 anni.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="text-white border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Verifica la tua patente
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Anchor className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold">RentABoat</h3>
              </div>
              <p className="text-gray-400">
                La tua piattaforma di fiducia per l'affitto di imbarcazioni in
                Italia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servizi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Barche con Skipper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Noleggio Autonomo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Verifica Patente
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Assicurazione
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Centro Assistenza
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contatti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sicurezza
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legale</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Termini di Servizio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Licenze
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RentABoat. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          console.log("Autenticazione completata!");
          setShowAuthModal(false);
        }}
      />
    </div>
  );
}
