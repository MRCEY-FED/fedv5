import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crosshair, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerEglence = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "İllegal Mekanik",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/5a99eef2-35a8-42c1-b14e-f87fcd82acb0.png",
      aciklama: "Gizli yarışlar düzenleyebilir, nitro ve chip satışı yapabilirsiniz. Özel egzozlar ve araç kaplamalarıyla yüksek kazanç elde edebilirsiniz.",
      fiyat: "3000₺",
      gelir: "Haftalık +100.000$",
      kapasite: "Aylık",
      konum: "İstediğiniz Yer",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Pawn Shop",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/3be05678-5454-422b-b194-8713413925e4.png",
      aciklama: "Çalıntı ev eşyaları ve elden çıkarılması gereken tüm çalıntı malzemelerin alım satımı yapılır.",
      fiyat: "1200₺",
      gelir: "Haftalık +50.000$",
      kapasite: "Aylık",
      konum: "South Side",
      yildiz: 5
    },
    {
      id: 3,
      isim: "Black Market",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/d1209491-94c9-40af-af83-d3f081106d8b.png",
      aciklama: "Tüm illegal ve soygun malzemelerin tedarikçisi.",
      fiyat: "1500₺",
      gelir: "Haftalık +25.000$",
      kapasite: "Aylık",
      konum: "İstediğiniz Yer",
      yildiz: 4
    },
    {
      id: 4,
      isim: "Hacker",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/b0a8f209-85ad-4b6b-9330-c22dbc34e13e.png",
      aciklama: "Banka hesaplarına ve kişilerin konum bilgilerine erişebilen, soygun planlarında vazgeçilmez bir roldür.",
      fiyat: "2500₺",
      gelir: "Haftalık +55.000$",
      kapasite: "Aylık",
      konum: "İstediğiniz Yer",
      yildiz: 4
    },
    {
      id: 5,
      isim: "Kumarhane",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/34dfe19d-3202-4a53-a38f-42ecdedbcafc.png",
      aciklama: "Poker, slot makineleri, rulet, illegal bahis, sanal bahis ve daha fazlası.",
      fiyat: "3000₺",
      gelir: "Haftalık +205.000$",
      kapasite: "Aylık",
      konum: "South Side",
      yildiz: 4
    },
    {
      id: 6,
      isim: "Kenevir Taciri",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/8ee26bbe-08ed-4c42-8649-e7264e875e45.png",
      aciklama: "İstenilen bir sokakta torbacılık yapar şehirdeki esrarı toplar ve cartele satar.",
      fiyat: "2000₺",
      gelir: "Haftalık +115.000$",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 5
    },
    {
      id: 7,
      isim: "Kokain Taciri",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/25ab1782-9b41-45b6-b9aa-7be6a419ae91.png",
      aciklama: "İstenilen bir sokakta torbacılık yapar şehirdeki kokaini toplar ve cartele satar.",
      fiyat: "2500₺",
      gelir: "Haftalık +215.000$",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 5
    },
    {
      id: 8,
      isim: "Meth Taciri",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/14004d7e-c430-42f0-9f4e-0f3d09ee67b2.png",
      aciklama: "İstenilen bir sokakta torbacılık yapar şehirdeki methi toplar ve cartele satar.",
      fiyat: "3000₺",
      gelir: "Haftalık +295.000$",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 5
    }, 
    {
      id: 9,
      isim: "Silah İmalathanesi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/15036430-0ce2-48de-b692-8279da8e5b8b.png",
      aciklama: "Hafif silahların ürteimini yapıp gunshoplara satar.",
      fiyat: "5000₺",
      gelir: "Haftalık +205.000$",
      kapasite: "Aylık",
      konum: "İstenilen Yer",
      yildiz: 4
    },
    {
      id: 10,
      isim: "Uyuşturucu İmalathanesi",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/f2125393-38e8-4dfb-ad1a-f2feedf81856.png",
      aciklama: "Kenevir,kokain,meth üretimini laboratuvarda yapıp satar ve laboratuvarı kiralar.",
      fiyat: "3500₺",
      gelir: "Haftalık +175.000$",
      kapasite: "Aylık",
      konum: "İstenilen Yer",
      yildiz: 4
    },               
    {
      id: 11,
      isim: "Uyuşturucu Carteli",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/5eeddad8-6234-43bc-9874-ec3146bafa67.png",
      aciklama: "Ülkedeki tüm uyuşturucu hattından sorumludur kenevir,kokain,meth imalatı ve ihracatından sorumludur.",
      fiyat: "8000₺",
      gelir: "Haftalık +595.000$",
      kapasite: "Aylık",
      konum: "İstenilen Bölge",
      yildiz: 5
    },
    {
      id: 12,
      isim: "Silah Carteli",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/5f887fda-c1d3-44ab-9417-0c5b52a5ed15.png",
      aciklama: "Ülkedeki tüm silah hattından sorumludur. Tüm hafif ve ağır silahların imalatı ve ihracatından sorumludur.",
      fiyat: "10.000₺",
      gelir: "Haftalık +795.000$",
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Ödeme Planı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(240, 124, 57, 0.23),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl text-orange-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl shadow-orange-500/40">
              <Crosshair className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400 bg-clip-text text-transparent">
                İLLEGAL MESLEKLER
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              İllegaş işletmeler - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-orange-400 fill-current" />
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

export default VipIsletmelerEglence;
