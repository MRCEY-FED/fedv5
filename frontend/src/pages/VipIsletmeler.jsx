import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Star, DollarSign, ArrowLeft, Wallet, ArrowRight, UtensilsCrossed, Music, Car, ShoppingBag, Hotel, Warehouse } from 'lucide-react';

const VipIsletmeler = () => {
  const kategoriler = [
    { 
      id: 'yemek', 
      isim: "Restorant & Cafe & Bar", 
      fiyat: "1000₺ - 2500₺", 
      aciklama: "Restoran, kafe ve bar işletmeleri", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/1eb1332b-96a7-4f1c-b337-435cf80bd48b.png", 
      indirim: "50%", 
      yildiz: 5,
      icon: UtensilsCrossed,
      renk: 'purple',
      isletmeSayisi: 20,
      path: '/vip-store/isletmeler/yemek'
    },
    { 
      id: 'eglence', 
      isim: "İllegal İşletme - Meslek", 
      fiyat: "2000₺ - 10.000₺", 
      aciklama: "İllegal meslek işletmeleri", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/791449c8-e0a0-4f18-aaac-100f4802fd9d.png", 
      indirim: "50%", 
      yildiz: 5,
      icon: ShoppingBag,
      renk: 'orange',
      isletmeSayisi: 12,
      path: '/vip-store/isletmeler/eglence'
    },
    { 
      id: 'otomotiv', 
      isim: "Araç Galerileri", 
      fiyat: "2500₺ - 7000₺", 
      aciklama: "Araba, Motor, Yat, Helikopter, Galerileri", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/00d10673-acfa-47cd-9893-156de005d8a8.png", 
      indirim: "50%", 
      yildiz: 4,
      icon: Car,
      renk: 'blue',
      isletmeSayisi: 8,
      path: '/vip-store/isletmeler/otomotiv'
    },
    { 
      id: 'ticaret', 
      isim: "Legal İşletme - Meslek", 
      fiyat: "1000₺ - 5500₺", 
      aciklama: "Gunshop, mekanik ve mağaza işletmeleri", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/791449c8-e0a0-4f18-aaac-100f4802fd9d.png", 
      indirim: "25%", 
      yildiz: 4,
      icon: ShoppingBag,
      renk: 'green',
      isletmeSayisi: 12,
      path: '/vip-store/isletmeler/ticaret'
    },
    { 
      id: 'hizmet', 
      isim: "Motel - Hotel", 
      fiyat: "1000₺ - 3000₺", 
      aciklama: "İnsanlara konaklama sağlayarak para kazanmaya ne dersiniz.", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/7071f4c3-cdcf-4d20-8f16-854c32a36a15.png", 
      indirim: "50%", 
      yildiz: 5,
      icon: Hotel,
      renk: 'amber',
      isletmeSayisi: 12,
      path: '/vip-store/isletmeler/hizmet'
    },
    { 
      id: 'diger', 
      isim: "Endüstriyel ve Şirketler", 
      fiyat: "2000₺ - 3500₺", 
      aciklama: "Fabrika, liman ve çiftlik işletmeleri", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/4633d2be-e921-48c3-9bc2-f7a05f6147b4.png", 
      indirim: "50%", 
      yildiz: 5,
      icon: Warehouse,
      renk: 'rose',
      isletmeSayisi: 12,
      path: '/vip-store/isletmeler/diger'
    }
  ];

  const getRenkClasses = (renk) => {
    const renkler = {
      orange: { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', text: 'text-orange-400', button: 'from-orange-500 to-orange-600', glow: 'shadow-orange-500/30' },
      purple: { bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', text: 'text-purple-400', button: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/30' },
      blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', text: 'text-blue-400', button: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/30' },
      green: { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', text: 'text-green-400', button: 'from-green-500 to-green-600', glow: 'shadow-green-500/30' },
      amber: { bg: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/40', text: 'text-amber-400', button: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/30' },
      rose: { bg: 'from-rose-500/20 to-rose-600/10', border: 'border-rose-500/40', text: 'text-rose-400', button: 'from-rose-500 to-rose-600', glow: 'shadow-rose-500/30' },
    };
    return renkler[renk] || renkler.rose;
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            to="/vip-store" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl text-rose-400 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VIP Mağaza'ya Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl shadow-2xl shadow-rose-500/40">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                VIP İŞLETMELER
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Gelir getiren işletme kategorileri
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full">
                <span className="text-rose-400 font-semibold">6 Kategori</span>
              </div>
              <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">
                <span className="text-pink-400 font-semibold">76+ İşletme</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategoriler.map((kategori) => {
              const Icon = kategori.icon;
              const renkClass = getRenkClasses(kategori.renk);
              
              return (
                <Link 
                  key={kategori.id} 
                  to={kategori.path}
                  className={`group bg-gradient-to-br ${renkClass.bg} border ${renkClass.border} rounded-2xl overflow-hidden hover:shadow-xl ${renkClass.glow} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={kategori.resim} 
                      alt={kategori.isim} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-red-500 rounded-lg">
                      <span className="text-white text-sm font-bold">-{kategori.indirim}</span>
                    </div>

                    <div className={`absolute top-3 left-3 w-12 h-12 bg-gradient-to-br ${renkClass.button} rounded-xl flex items-center justify-center shadow-lg ${renkClass.glow}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400 text-sm line-through">{kategori.eskiFiyat}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wallet className={`w-5 h-5 ${renkClass.text}`} />
                        <span className="text-white text-2xl font-black">{kategori.fiyat}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
                      <span className="text-white font-semibold">{kategori.isletmeSayisi} İşletme</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold text-xl">{kategori.isim}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(kategori.yildiz)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${renkClass.text} fill-current`} />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4">{kategori.aciklama}</p>
                    
                    <div className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${renkClass.button} text-white font-semibold rounded-xl transition-all group-hover:shadow-lg ${renkClass.glow}`}>
                      <span>İşletmeleri Görüntüle</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipIsletmeler;
