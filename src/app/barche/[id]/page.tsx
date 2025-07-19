import Link from "next/link";
import {
  Star,
  MapPin,
  Users,
  Calendar,
  Anchor,
  Clock,
  Shield,
} from "lucide-react";

const boat = {
  id: 1,
  name: "Gommone Zodiac 4.5m",
  type: "Gommone",
  location: "Porto Cervo, Sardegna",
  price: 120,
  rating: 4.8,
  reviews: 45,
  capacity: 6,
  length: "4.5 metri",
  engine: "40 HP",
  year: 2022,
  features: [
    "Motore 40HP",
    "GPS integrato",
    "Tenda parasole",
    "Ghiacciaia",
    "Scaletta di accesso",
    "Ancora",
    "Giubbotti di salvataggio",
    "Kit di sicurezza",
  ],
  description:
    "Gommone Zodiac professionale in perfette condizioni, ideale per escursioni giornaliere e snorkeling. Dotato di tutti i comfort necessari per una giornata in mare sicura e confortevole.",
  owner: {
    name: "Marco Rossi",
    rating: 4.9,
    reviews: 128,
    responseTime: "1 ora",
  },
  images: ["🛥️", "🌊", "⛵", "🏖️"],
};

export default async function BoatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const { id } = await params; // Will be used when implementing dynamic data
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
                Destinazioni
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Images */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2">
                  <div className="text-6xl text-center bg-gray-100 rounded-lg p-8">
                    {boat.images[0]}
                  </div>
                </div>
                {boat.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="text-3xl text-center bg-gray-100 rounded-lg p-4"
                  >
                    {image}
                  </div>
                ))}
              </div>
            </div>

            {/* Boat Info */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {boat.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    {boat.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{boat.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({boat.reviews} recensioni)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    €{boat.price}
                  </div>
                  <div className="text-gray-500">al giorno</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium">{boat.capacity} persone</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Anchor className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium">{boat.length}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mx-auto mb-2 block">⚙️</span>
                  <div className="font-medium">{boat.engine}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium">{boat.year}</div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Descrizione</h3>
                <p className="text-gray-600 leading-relaxed">
                  {boat.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Caratteristiche e Attrezzature
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {boat.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Proprietario</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">
                      {boat.owner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{boat.owner.name}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {boat.owner.rating} ({boat.owner.reviews} recensioni)
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  Risponde in {boat.owner.responseTime}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-8">
              <h3 className="text-xl font-semibold mb-4">
                Prenota questa barca
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data di partenza
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data di ritorno
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numero passeggeri
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 persona</option>
                    <option>2 persone</option>
                    <option>3 persone</option>
                    <option>4 persone</option>
                    <option>5 persone</option>
                    <option>6 persone</option>
                  </select>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>€{boat.price} × 1 giorno</span>
                  <span>€{boat.price}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Tassa di servizio</span>
                  <span>€15</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Assicurazione</span>
                  <span>€25</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Totale</span>
                    <span>€{boat.price + 40}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium mb-4">
                Prenota ora
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium mb-4">
                Contatta proprietario
              </button>

              <div className="text-center text-sm text-gray-500">
                <Shield className="h-4 w-4 inline mr-1" />
                Prenotazione sicura al 100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
