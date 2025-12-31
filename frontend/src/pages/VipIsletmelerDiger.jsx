import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Warehouse, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerDiger = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "Karpuz Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/karpuz.png",
      aciklama: "Bir karpuz çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2000₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 3
    },
    {
      id: 2,
      isim: "Mantar Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/mantar.png",
      aciklama: "Bir mantar çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2000₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 3
    },    
    {
      id: 3,
      isim: "Üzüm - Şarap Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/%C3%9Cz%C3%BCm.png",
      aciklama: "Bir üzüm çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2500₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 4
    },
    {
      id: 4,
      isim: "Portakal Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/portakal.png",
      aciklama: "Bir portakal çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2000₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 3
    }, 
    {
      id: 5,
      isim: "Balkabağı Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/balkabak.png",
      aciklama: "Bir balkabağı çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2000₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 3
    },      
    {
      id: 6,
      isim: "Mısır Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/m%C4%B1s%C4%B1r.png",
      aciklama: "Bir mısır çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2000₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 3
    },   
    {
      id: 7,
      isim: "Şeftali Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/seftali.png",
      aciklama: "Bir seftali çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2000₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 3
    },   
    {
      id: 8,
      isim: "İnek Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/inek.png",
      aciklama: "Bir inek çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2500₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 4
    },  
    {
      id: 9,
      isim: "Tavuk Çiftliği",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/tavuk.png",
      aciklama: "Bir tavuk çifliği kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "2500₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 4
    },  
    {
      id: 10,
      isim: "Maden Ocağı",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/maden.png",
      aciklama: "Bir maden ocağı kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "3500₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 5
    },  
    {
      id: 11,
      isim: "Fabrika",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/fabrika.png",
      aciklama: "Bir fabrika kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "3500₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 5
    },   
    {
      id: 12,
      isim: "Liman",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/liman.png",
      aciklama: "Bir liman ticareti şirketi kurup insanları çalışırp para kazanabilirsin.",
      fiyat: "3500₺",
      gelir: "Çalışan Sayısına Bağlı",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-rose-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Ödeme Planı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl text-rose-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl shadow-2xl shadow-rose-500/40">
              <Warehouse className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                ENDÜSTRİYEL
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Havalimanı, liman ve depo işletmeleri - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-rose-500/10 to-rose-600/5 border border-rose-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-rose-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-rose-400 fill-current" />
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

export default VipIsletmelerDiger;
