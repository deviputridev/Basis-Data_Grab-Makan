import { Search, MapPin, Clock, Star, Pizza, UtensilsCrossed, Cherry, IceCream, Fish, Coffee } from 'lucide-react';
import { View } from '../types';

const POPULAR_CATEGORIES = [
  { name: 'Pizza', icon: <Pizza className="w-6 h-6" /> },
  { name: 'Mie', icon: <UtensilsCrossed className="w-6 h-6" /> },
  { name: 'Burger', icon: <Cherry className="w-6 h-6" /> },
  { name: 'Es Krim', icon: <IceCream className="w-6 h-6" /> },
  { name: 'Ikan', icon: <Fish className="w-6 h-6" /> },
  { name: 'Kopi', icon: <Coffee className="w-6 h-6" /> },
];

const NEARBY_RESTAURANTS = [
  {
    id: '1',
    name: 'Pizza Milano Sudirman',
    cuisine: 'Italia • Pizza • Pasta',
    rating: 4.8,
    deliveryTime: '25-35 min',
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    isPromo: true,
    isOpen: true,
  },
  {
    id: '2',
    name: 'The Salad House',
    cuisine: 'Barat • Sehat • Salad',
    rating: 4.5,
    deliveryTime: '15-20 min',
    distance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    isPromo: false,
    isOpen: true,
  },
  {
    id: '3',
    name: 'Sushi & Ramen Ichi',
    cuisine: 'Jepang • Sushi • Ramen',
    rating: 4.9,
    deliveryTime: '30-45 min',
    distance: '2.4 km',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800',
    isPromo: true,
    isOpen: true,
  },
  {
    id: '4',
    name: 'Burger Lab',
    cuisine: 'Barat • Burger • Fast Food',
    rating: 4.2,
    deliveryTime: '20-30 min',
    distance: '1.5 km',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5c1457add?auto=format&fit=crop&q=80&w=800',
    isPromo: false,
    isOpen: false,
  },
];

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <section>
              <h3 className="text-lg font-bold mb-4">Kategori</h3>
              <div className="space-y-3">
                {['Indonesia', 'Barat', 'Jepang', 'Sehat'].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" />
                    <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </section>
            <section>
              <h3 className="text-lg font-bold mb-4">Harga</h3>
              <div className="flex gap-2">
                {['Rp', 'RpRp', 'RpRpRp'].map((price) => (
                  <button key={price} className="flex-1 py-2 px-1 border border-outline-variant rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                    {price}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Promo Banner */}
          <section className="mb-12 relative rounded-3xl overflow-hidden aspect-[21/9] bg-primary">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1400" 
              alt="Promo"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-8 md:px-16">
              <div className="max-w-md text-white">
                <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Diskon Gila-Gilaan Hingga 50%!</h2>
                <p className="text-sm md:text-lg mb-8 text-white/90">Pesan menu favoritmu dari restoran pilihan dan nikmati gratis ongkir hari ini.</p>
                <button 
                  onClick={() => onNavigate('restaurant')}
                  className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </section>

          {/* Popular Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Kategori Populer</h2>
            <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {POPULAR_CATEGORIES.map((cat) => (
                <div key={cat.name} className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {cat.icon}
                  </div>
                  <span className="text-sm font-semibold">{cat.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby Restaurants */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold">Restoran Terdekat</h2>
              <button className="text-primary font-bold text-sm hover:underline cursor-pointer">Lihat Semua</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {NEARBY_RESTAURANTS.map((resto) => (
                <article 
                  key={resto.id}
                  onClick={() => onNavigate('restaurant')}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all cursor-pointer group border border-slate-50"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={resto.image} 
                      alt={resto.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {resto.isPromo && (
                        <span className="bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-lg">Promo</span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md text-on-surface px-2 py-1 rounded-lg text-[10px] font-black flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> {resto.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold truncate group-hover:text-primary transition-colors">{resto.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${resto.isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                        {resto.isOpen ? 'Buka' : 'Tutup'}
                      </span>
                    </div>
                    <p className="text-sm text-outline mb-4">{resto.cuisine}</p>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {resto.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {resto.deliveryTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
