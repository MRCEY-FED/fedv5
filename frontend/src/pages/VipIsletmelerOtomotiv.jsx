import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerOtomotiv = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "Temel Oto Galeri",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/8677d2ee-cf30-41be-81ba-c1a68216f3e4.png",
      aciklama: "Temel araç satış galerisi Sedans,Vans,Coupes,Compacts,muscle araçlarının satışı burada yapılır.",
      fiyat: "2500₺",
      gelir: "Haftalık 305.000$",
      kapasite: "Aylık",
      konum: "Power St.",
      yildiz: 3
    },
    {
      id: 2,
      isim: "Lüks Oto Galeri",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/f2baa4f6-f20e-40cc-b7e0-b2b8db8cb2d0.png",
      aciklama: "Lüks araç satış galerisi Sport ve Super araçlarının satışı burada yapılır.",
      fiyat: "4000₺",
      gelir: "Haftalık 2.000.000$",
      kapasite: "Aylık",
      konum: "Rackford Hills",
      yildiz: 4
    },
    {
      id: 3,
      isim: "Arazi Oto Galerisi", 
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/97f56340-0a85-4669-8103-cbcdc051af79.png",
      aciklama: "Arazi araç satış galerisi Offroad ve Suvs araçlarının satışı burada yapılır.",
      fiyat: "3000₺",
      gelir: "Haftalık 505.000$",
      kapasite: "Aylık",
      konum: "Bay City Ave",
      yildiz: 3
    },
    {
      id: 4,
      isim: "Motosiklet Galerisi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/47d5f4e8-3605-49d4-b00f-b623870e3e6d.png",
      aciklama: "Motosiklet araç satış galerisi Motosiklet ve Bisiklet araçlarının satışı burada yapılır.",
      fiyat: "3000₺",
      gelir: "Haftalık 305.000$",
      kapasite: "Aylık",
      konum: "Rackford Hills",
      yildiz: 4
    },
    {
      id: 5,
      isim: "MK2 Oto Galerisi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/03db15be-91a9-4b9e-b096-af197a961720.png",
      aciklama: "MK2 araç satış galerisi MK2 araçlarının satışı burada yapılır.",
      fiyat: "7000₺",
      gelir: "Haftalık 5.000.000$",
      kapasite: "Aylık",
      konum: "İstenilen Yer",
      yildiz: 5
    },    
    {
      id: 6,
      isim: "Yat - Tekne Galerisi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/6eec68c5-29f2-4446-bc73-37c0734d5d54.png",
      aciklama: "Yat ve Tekne araç satış galerisi. deniz araçlarının satışı burada yapılır.",
      fiyat: "4000₺",
      gelir: "Haftalık 8.000.000$",
      kapasite: "Aylık",
      konum: "Puerto Del Sol",
      yildiz: 5
    },
    {
      id: 7,
      isim: "Helikopter Galerisi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/e800814a-6599-4daa-a52c-70ecc5ad5c1c.png",
      aciklama: "Helikopter araç satış galerisi. hava araçlarının satışı burada yapılır.",
      fiyat: "5000₺",
      gelir: "Haftalık 10.000.000$",
      kapasite: "Aylık",
      konum: "Los Santos Airport",
      yildiz: 5
    },
    {
      id: 8,
      isim: "Uçak Galerisi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/8dcfaa5b-e146-4f17-8ddd-3c5abd5fd770.png",
      aciklama: "Uçak araç satış galerisi. hava araçlarının satışı burada yapılır.",
      fiyat: "6000₺",
      gelir: "Haftalık 15.000.000$",
      kapasite: "Aylık",
      konum: "Los Santos Airport",
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Ödeme Planı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl shadow-blue-500/40">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ARAÇ GALERİLERİ
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Araba, Motor, Yat, Helikopter, Galerileri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-blue-400 fill-current" />
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

export default VipIsletmelerOtomotiv;
