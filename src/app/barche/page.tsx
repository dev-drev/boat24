import Link from "next/link";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Users,
  UserCheck,
  UserX,
} from "lucide-react";

const boats = [
  {
    id: 1,
    name: "Gommone Zodiac 4.5m",
    type: "gommone",
    skipper: true,
    location: "Porto Cervo, Sardegna",
    price: 150,
    rating: 4.8,
    reviews: 45,
    capacity: 6,
    license_required: "Nessuna (con skipper)",
    image: "🛥️",
    features: ["Skipper incluso", "GPS", "Tenda", "Snorkeling"],
  },
  {
    id: 2,
    name: "Barca a Vela Bavaria 40",
    type: "vela",
    skipper: false,
    location: "Porto Rotondo, Sardegna",
    price: 250,
    rating: 4.9,
    reviews: 32,
    capacity: 8,
    license_required: "Patente Vela",
    image: "⛵",
    features: ["3 cabine", "Cucina", "WC", "Ponte volante"],
  },
  {
    id: 3,
    name: "Motoscafo Azimut 55",
    type: "motoscafo",
    skipper: true,
    location: "Porto Vecchio, Corsica",
    price: 800,
    rating: 5.0,
    reviews: 18,
    capacity: 12,
    license_required: "Nessuna (con skipper)",
    image: "🚤",
    features: ["Skipper incluso", "Jacuzzi", "WiFi", "Equipaggio"],
  },
  {
    id: 4,
    name: "Gommone Quicksilver 4.2m",
    type: "gommone",
    skipper: false,
    location: "Porto San Paolo, Sardegna",
    price: 95,
    rating: 4.6,
    reviews: 28,
    capacity: 4,
    license_required: "Patente A o B",
    image: "🛥️",
    features: ["Motore 25HP", "Ghiacciaia", "Scaletta", "Ancora"],
  },
  {
    id: 5,
    name: "Catamarano Lagoon 42",
    type: "catamarano",
    skipper: false,
    location: "Porto Torres, Sardegna",
    price: 350,
    rating: 4.7,
    reviews: 25,
    capacity: 10,
    license_required: "Patente Vela",
    image: "⛵",
    features: ["4 cabine", "Ponte volante", "Tender", "Stabilità"],
  },
  {
    id: 6,
    name: "Gommone Bombard 3.8m",
    type: "gommone",
    skipper: false,
    location: "Porto Rotondo, Sardegna",
    price: 80,
    rating: 4.5,
    reviews: 38,
    capacity: 5,
    license_required: "Patente A o B",
    image: "🛥️",
    features: ["Motore 20HP", "Tenda", "Ancora", "Giubbotti"],
  },
];

export default function BarchePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚤</span>
              <h1 className="text-2xl font-bold text-gray-900">RentABoat</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/barche" className="text-blue-600 font-medium">
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
              <button className="text-gray-700 hover:text-blue-600">
                Accedi
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Registrati
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Cerca barche, caratteristiche..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Tipo di barca</option>
                  <option>Gommone</option>
                  <option>Barca a Vela</option>
                  <option>Motoscafo</option>
                  <option>Catamarano</option>
                </select>
              </div>
              <div className="relative">
                <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Con/Senza Skipper</option>
                  <option>Con Skipper</option>
                  <option>Senza Skipper</option>
                </select>
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Passeggeri</option>
                  <option>1-4</option>
                  <option>5-8</option>
                  <option>9+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {boats.length} barche disponibili
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Ordina per:</span>
              <select className="border border-gray-200 rounded-lg px-3 py-2">
                <option>Prezzo crescente</option>
                <option>Prezzo decrescente</option>
                <option>Valutazione</option>
                <option>Nome</option>
              </select>
            </div>
          </div>

          {/* Boats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boats.map((boat) => (
              <div
                key={boat.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{boat.image}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        €{boat.price}
                      </div>
                      <div className="text-sm text-gray-500">al giorno</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {boat.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 capitalize">
                    {boat.type}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {boat.location}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{boat.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">
                        ({boat.reviews})
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {boat.capacity} persone
                    </div>
                  </div>

                  {/* Skipper/License Info */}
                  <div className="mb-4 p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {boat.skipper ? (
                          <UserCheck className="h-4 w-4 text-green-600 mr-2" />
                        ) : (
                          <UserX className="h-4 w-4 text-blue-600 mr-2" />
                        )}
                        <span className="text-sm font-medium">
                          {boat.skipper ? "Con Skipper" : "Senza Skipper"}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {boat.license_required}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {boat.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/barche/${boat.id}`}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      Prenota ora
                    </Link>
                    <Link
                      href={`/barche/${boat.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center"
                    >
                      Dettagli
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Carica altre barche
            </button>
          </div>
        </div>
      </section>

      {/* License Requirements */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Non hai la patente nautica?
          </h2>
          <p className="text-blue-100 mb-8">
            Nessun problema! Scegli una barca con skipper professionale e goditi
            la navigazione senza preoccupazioni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link
              href="/barche?skipper=true"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Barche con Skipper
            </Link>
            <Link
              href="#"
              className="text-white border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Informazioni Patente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
