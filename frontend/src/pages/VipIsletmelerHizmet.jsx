import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hotel, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerHizmet = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "Pink Cage Motel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151211.png",
      aciklama: "Lüks motel kompleksi. havuz, restoran ve konferans salonları dahil. Premium müşteri kitlesi.",
      fiyat: "1500₺",
      gelir: "Haftalık +30.000$",
      kapasite: "39 Oda",
      konum: "Hawick Caddesi",
      yildiz: 3
    },
    {
      id: 2,
      isim: "Vinewood Motel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151112.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "1700₺",
      gelir: "Haftalık +30.000$",
      kapasite: "20 Oda",
      konum: "Vinewood Bulvarı",
      yildiz: 3
    },
    {
      id: 3,
      isim: "Pennena Motel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151241.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "1500₺",
      gelir: "Haftalık +30.000$",
      kapasite: "38 Oda",
      konum: "Del Perro Bulvarı",
      yildiz: 3
    },    
    {
      id: 4,
      isim: "Vacancy Motel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151751.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "1000₺",
      gelir: "Haftalık +20.000$",
      kapasite: "12 Oda",
      konum: "Route68 Bulvarı",
      yildiz: 2
    },
    {
      id: 5,
      isim: "Lodge Motel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151810.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "1000₺",
      gelir: "Haftalık +25.000$",
      kapasite: "10 Oda",
      konum: "Paleto Bay Kasabası",
      yildiz: 2
    },
    {
      id: 6,
      isim: "Dream Wiew Motel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/1ce2ac5c984c55f64cab95a5e6c3e7b2ad348570.jpeg",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "1500₺",
      gelir: "Haftalık +27.000$",
      kapasite: "15 Oda",
      konum: "Paleto Bay Kasabası",
      yildiz: 2
    },      
    {
      id: 7,
      isim: "Vinewood Hotel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/b29c3a339298546f407bdc5ca9d6a75c94b20a81.jpeg",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "2000₺",
      gelir: "Haftalık +40.000$",
      kapasite: "40 Oda",
      konum: "Vinewood Bulvarı",
      yildiz: 2
    },      
    {
      id: 8,
      isim: "Mafia Hotel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151223.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "2000₺",
      gelir: "Haftalık +60.000$",
      kapasite: "40 Oda",
      konum: "Winewood Bulvarı",
      yildiz: 2
    }, 
    {
      id: 9,
      isim: "Sicilia Hotel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/2df572cfb32b9ff17c9448b29fe02e1f9d5b9daf.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "2000₺",
      gelir: "Haftalık +70.000$",
      kapasite: "40 Oda",
      konum: "Sandy Shores Kasabası",
      yildiz: 2
    },        
    {
      id: 10,
      isim: "Chumas Beach Hotel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151303.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "2000₺",
      gelir: "Haftalık +80.000$",
      kapasite: "8 Oda",
      konum: "Winewood Bulvarı",
      yildiz: 2
    },     
    {
      id: 11,
      isim: "La Puerta Hotel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20152221.png",
      aciklama: "Şık ve samimi motel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "3500₺",
      gelir: "Haftalık +100.000$",
      kapasite: "200 Oda",
      konum: "Uwu Cafe Önü",
      yildiz: 4
    },    
    {
      id: 12,
      isim: "Opium Nights Hotel",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-29%20151145.png",
      aciklama: "Lüks motel kompleksi. spa, havuz, restoran ve konferans salonları dahil. Premium müşteri kitlesi.",
      fiyat: "3000₺",
      gelir: "Haftalık +100.000$",
      kapasite: "100 Oda",
      konum: "Los Santos Airport Bulvarı",
      yildiz: 5
    }  
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedItem(isletmeler[index]);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextItem = () => {
    const newIndex = (currentIndex + 1) % isletmeler.length;
    setCurrentIndex(newIndex);
    setSelectedItem(isletmeler[newIndex]);
  };

  const prevItem = () => {
    const newIndex = (currentIndex - 1 + isletmeler.length) % isletmeler.length;
    setCurrentIndex(newIndex);
    setSelectedItem(isletmeler[newIndex]);
  };

  return (
    <div className="min-h-screen bg-black">
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <X className="w-6 h-6" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); prevItem(); }} className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); nextItem(); }} className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Kapasite</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
                <span>Satın Al</span>
              </a>
              <p className="text-center text-gray-500 text-sm mt-3">Satın almak için Discord sunucumuza yönlendirileceksiniz</p>
              <div className="text-center text-gray-500 text-sm mt-2">
                {currentIndex + 1} / {isletmeler.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-2xl shadow-amber-500/40">
              <Hotel className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                MOTEL VE HOTELLER
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Motel ve Hotellerin Ödemeleri Aylık Plandadır - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2">{isletme.aciklama}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">{isletme.gelir}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipIsletmelerHizmet;
