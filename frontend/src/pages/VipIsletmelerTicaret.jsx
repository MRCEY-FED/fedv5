import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerTicaret = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "Silah Dükkanı",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/551185ee-70c4-4eed-b7c5-42f6190f40c0.png",
      aciklama: "Lisanslı silah ve mühimmat satışı. Atış poligonu ve eğitim hizmetleri dahil.",
      fiyat: "2500₺",
      gelir: "Haftalık +108.000$",
      kapasite: "Aylık",
      konum: "Pillbox Hill",
      yildiz: 4
    },  
    {        
      id: 2,
      isim: "Legal Mekanik",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/a823b37c-fd73-4d79-9a66-51719ede79d5.png",
      aciklama: "Mekanik bakım ve onarım hizmetleri. Arıza tespit, motor ve yürür aksam işlemleri dahil..",
      fiyat: "2500₺",
      gelir: "Haftalık +70.000$",
      kapasite: "Aylık",
      konum: "Sandy Shores",
      yildiz: 3
    },
    {
      id: 3,
      isim: "Casino",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/dea714ec-bea3-43c9-a876-6eece142c6f0.png",
      aciklama: "Oyun masaları, slot makineleri ve özel salon hizmetleri dahil.",
      fiyat: "5500₺",
      gelir: "Haftalık +370.000$",
      kapasite: "Aylık",
      konum: "Mirror Park",
      yildiz: 4
    },
    {
      id: 4,
      isim: "Kuyumcu",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/16a8db9c-4b42-4cca-b25a-1f17a4426981.png",
      aciklama: "Lüks mücevher ve saat satışı. Yüksek kar marjı, özel müşteri kitlesi ve güvenlik sistemi.",
      fiyat: "1000₺",
      gelir: "Haftalık +50.000$",
      kapasite: "Aylık",
      konum: "Rockford Hills",
      yildiz: 5
    },
    {
      id: 5,
      isim: "Güzellik Salonu",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/5d0d66a7-2c00-4c6f-ae39-30f4e07cca55.png",
      aciklama: "Protez tırnak, saç ve güzellik uygulamaları. Profesyonel hizmetler dahil.",
      fiyat: "2000₺",
      gelir: "Haftalık +70.000$",
      kapasite: "Aylık",
      konum: "Pillbox Hill",
      yildiz: 4
    },
    {
      id: 6,
      isim: "Elektronik Mağazası",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/142b7dfe-0795-430c-8ae4-a2605cbad00b.png",
      aciklama: "Telefon, bilgisayar ve elektronik ürün satışı. Teknik servis ve aksesuar bölümü.",
      fiyat: "1000₺",
      gelir: "Haftalık +50.000$",
      kapasite: "Aylık",
      konum: "Del Perro",
      yildiz: 4
    },
    {
      id: 7,
      isim: "Giyim Mağazası",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/a569e65f-8750-471a-8bfe-bdc6f1fd1a49.png",
      aciklama: "Moda giyim ve aksesuar satışı. Kadın, erkek ve çocuk koleksiyonları.",
      fiyat: "1000₺",
      gelir: "Haftalık +30.000$",
      kapasite: "Aylık",
      konum: "Vinewood",
      yildiz: 4
    },
    {
      id: 8,
      isim: "Eczane",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/54a1fd7b-f011-4dfe-9527-35e161b6ed16.png",
      aciklama: "İlaç ve sağlık ürünleri satışı. Reçeteli ve reçetesiz ilaçlar, kozmetik.",
      fiyat: "1500₺",
      gelir: "Haftalık +40.000$",
      kapasite: "Aylık",
      konum: "Strawberry",
      yildiz: 4
    },
    {
      id: 9,
      isim: "Spor Mağazası",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/96c415ee-8642-46c1-a683-68cb3f46e5be.png",
      aciklama: "Spor malzemeleri ve giyim satışı. Fitness ekipmanları ve outdoor ürünleri.",
      fiyat: "1000₺",
      gelir: "Haftalık +30.000$",
      kapasite: "Aylık",
      konum: "Vespucci",
      yildiz: 4
    },
    {
      id: 10,
      isim: "Tekel Bayii",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/7681a1ae-ce4e-4d9f-86c9-739de32c0adf.png",
      aciklama: "Alkollü içecek ve sigara satışı. Gece geç saatlere kadar açık, yüksek kar marjı.",
      fiyat: "1000₺",
      gelir: "Haftalık +40.000$",
      kapasite: "Aylık",
      konum: "Davis",
      yildiz: 3
    },
    {
      id: 11,
      isim: "Dövmeci Dükkanı",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/b047a6f2-f536-4306-8ef5-0452c6e1f58d.png",
      aciklama: "Profesyonel dövme uygulamaları, steril ortam ve kişiye özel tasarımlar dahil.",
      fiyat: "1500₺",
      gelir: "Haftalık +40.000$",
      kapasite: "Aylık",
      konum: "Pillbox Hill",
      yildiz: 4
    },
    {
      id: 12,
      isim: "Berber - Kuaför",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/f95f8943-f386-4ade-aa05-6326d2964288.png",
      aciklama: "Saç kesimi, sakal tıraşı ve kişisel bakım hizmetleri dahil.",
      fiyat: "1000₺",
      gelir: "Haftalık +20.000$",
      kapasite: "Aylık",
      konum: "Pillbox Hill",
      yildiz: 4
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Ödeme Planı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl shadow-green-500/40">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                LEGAL İŞLETMELER
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Dükkan, kuyumcu ve mağaza işletmeleri - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-green-400 fill-current" />
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

export default VipIsletmelerTicaret;
