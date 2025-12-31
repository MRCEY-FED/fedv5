import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UtensilsCrossed, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerYemek = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "UwU Cafe",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20180111.png",
      aciklama: "Şehrin en prestijli kafesi. Fine dining deneyimi, özel şef menüsü ve VIP bölümler ile üst düzey müşteri kitlesine hitap edin.",
      fiyat: "1000₺",
      gelir: "Günlük +15.000$",
      kapasite: "200 Kişi",
      konum: "Calais Ave",
      yildiz: 4
    },
    {
      id: 2,
      isim: "Sun Cafe",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/sunny.jpeg",
      aciklama: "Minimal ve modern cafe. Özenle seçilmiş kahveler, hafif atıştırmalıklar ve taze tatlılar. Şehrin enerjisini seven gençler için keyifli bir buluşma noktası.",
      fiyat: "750₺",
      gelir: "Günlük +8.000$",
      kapasite: "60 Kişi",
      konum: "Magellan Ave",
      yildiz: 3
    },
    {
      id: 3,
      isim: "Noir Cafe",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203108.png",
      aciklama: "Sahil kenarında muhteşem manzaralı deniz ürünleri restoranı. Taze ürünler, romantik atmosfer ve özel etkinlikler.",
      fiyat: "1000₺",
      gelir: "Günlük +12.000$",
      kapasite: "80 Kişi",
      konum: "Vespucci Canals",
      yildiz: 4
    },
    {
      id: 4,
      isim: "Bean Machine",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203543.png",
      aciklama: "Sıcak ve çağdaş atmosfer. Gün boyu kaliteli kahve, sağlıklı tabaklar ve ev yapımı tatlılar. Dinamik ve sosyal bir müşteri kitlesine hitap eder.",
      fiyat: "750₺",
      gelir: "Günlük +7.000$",
      kapasite: "60 Kişi",
      konum: "Eclipse Blvd",
      yildiz: 3
    },
    {
      id: 5,
      isim: "Pond Cafe",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20211428.png",
      aciklama: "Modern tasarım, rahat ortam. Nitelikli kahve çeşitleri, hafif yemekler ve özgün tatlılar. Çalışmak, sohbet etmek ve mola vermek isteyenler için ideal.",
      fiyat: "2000₺",
      gelir: "Günlük +14.000$",
      kapasite: "90 Kişi",
      konum: "Mirror Park",
      yildiz: 5
    },
    {
      id: 6,
      isim: "Pizzeria",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/967fc012c51e8e49b95be00fb3d76972a4a8ad0f.png",
      aciklama: "Gerçek pizza deneyimi. İncecik hamur, bol malzeme ve dengeli soslar. Genç ve enerjik pizza severlerin buluşma noktası.",
      fiyat: "1000₺",
      gelir: "Günlük +10.000$",
      kapasite: "80 Kişi",
      konum: "Del Perro Fwy",
      yildiz: 4
    },    
    {
      id: 7,
      isim: "Lux Bar",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203447.png",
      aciklama: "Şehrin ritmini yansıtan bar. Yaratıcı kokteyller, sıcak atmosfer ve genç bir müşteri kitlesi. Sosyalleşmek ve eğlenmek isteyenler için ideal.",
      fiyat: "2000₺",
      gelir: "Günlük +15.000$",
      kapasite: "150 Kişi",
      konum: "West Vinewood",
      yildiz: 5
    },    
    {
      id: 8,
      isim: "Tequi-la-la",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203517.png",
      aciklama: "Geceye karakter katan bar. Güçlü içki menüsü, loş ambiyans ve dinamik DJ performansları. Eğlenceyi sevenlere hitap eder.",
      fiyat: "1000₺",
      gelir: "Günlük +10.000$",
      kapasite: "100 Kişi",
      konum: "Eclipse Blvd",
      yildiz: 4
    },
    {
      id: 9,
      isim: "Unicorn",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203353.png",
      aciklama: "Renkli geceler, güçlü müzik ve özgür ruhlar için tasarlanmış enerjik bir buluşma noktası..",
      fiyat: "1500₺",
      gelir: "Günlük +17.500$",
      kapasite: "100 Kişi",
      konum: "Strawberry",
      yildiz: 4
    },      
    {
      id: 10,
      isim: "Bahama Mamas",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/fc794834172dee47fa393b58ab9977601577e8e5.png",
      aciklama: "Egzotik ruh, güçlü sahne şovları. Direk dansı performanslarıyla dikkat çeken, gece hayatına renk katan bir adres..",
      fiyat: "1500₺",
      gelir: "Günlük +17.500$",
      kapasite: "100 Kişi",
      konum: "Delperro",
      yildiz: 5
    },  
    {
      id: 11,
      isim: "Burger Shot",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-26%20021312.png",
      aciklama: "Burgerin en saf hali. Kaliteli et, dengeli soslar ve özenle hazırlanan menüler.",
      fiyat: "750₺",
      gelir: "Günlük +8.500$",
      kapasite: "70 Kişi",
      konum: "Backlot City",
      yildiz: 3
    },        
    {
      id: 12,
      isim: "Greasy Joe’s Drive-in",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-26%20021805.png",
      aciklama: "Otantik İtalyan mutfağı. Odun fırınında pizza, ev yapımı makarna ve aile dostu atmosfer.",
      fiyat: "2500₺",
      gelir: "Günlük +18.500$",
      kapasite: "70 Kişi",
      konum: "Forum Dr",
      yildiz: 5
    },
    {
      id: 13,
      isim: "The Town Bar",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203216.png",
      aciklama: "Geceye karakter katan bar. Güçlü içki menüsü, loş ambiyans ve dinamik DJ performansları. Eğlenceyi sevenlere hitap eder.",
      fiyat: "2500₺",
      gelir: "Günlük +18.000$",
      kapasite: "170 Kişi",
      konum: "Magellan Ave",
      yildiz: 5
    },  
    {
      id: 14,
      isim: "İskele Bar",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203734.png",
      aciklama: "Samimi, enerjik, eğlenceli. Paylaşımlık atıştırmalıklar, iyi müzik ve keyifli sohbetler. Arkadaş gruplarının favori adresi.",
      fiyat: "2000₺",
      gelir: "Günlük +19.000$",
      kapasite: "50 Kişi",
      konum: "Del Perro İskelesi",
      yildiz: 5
    },
    {
      id: 15,
      isim: "Rusty Cup Bar",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203629.png",
      aciklama: "Şık detaylar, güçlü tatlar. Craft kokteyller, seçkin içkiler ve modern sunumlar. Şehirli ve stil sahibi misafirler için.",
      fiyat: "750₺",
      gelir: "Günlük +9.000$",
      kapasite: "50 Kişi",
      konum: "East Vinewood",
      yildiz: 3
    },  
    {
      id: 16,
      isim: "Sahil Bar",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20203250.png",
      aciklama: "Rahat ama iddialı. Klasik ve imza kokteyller, iyi müzik ve samimi bir ortam. Günün yorgunluğunu atmak isteyenler için.",
      fiyat: "750₺",
      gelir: "Günlük +9.000$",
      kapasite: "150 Kişi",
      konum: "Bay City Sahil",
      yildiz: 3
    },                          
    {
      id: 17,
      isim: "Galaxy Club",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/maxresdefault.jpg.738e1f1149a22fa8d817b50396b67d7e.jpg",
      aciklama: "Sınırları zorlayan bir eğlence deneyimi. Profesyonel dansçılar, etkileyici koreografiler ve özel bir atmosfer.",
      fiyat: "1000₺",
      gelir: "Günlük +15.000$",
      kapasite: "100 Kişi",
      konum: "Downtown Vinewood",
      yildiz: 4
    },
    {
      id: 18,
      isim: "Palace Nightclub",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Kpdey4x.png",
      aciklama: "Yetişkinlere özel, iddialı ve gizemli. Sahne şovlarıyla ön plana çıkan, geceyi farklı yaşamak isteyenler için.",
      fiyat: "1000₺",
      gelir: "Günlük +10.000$",
      kapasite: "100 Kişi",
      konum: "Vinewood",
      yildiz: 4
    },
    {
      id: 19,
      isim: "Yellow Jack",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/330bb51551c2ec0d07a6b89fd248afc609d2044c.jpeg",
      aciklama: "Rahat ama iddialı. Klasik ve imza kokteyller, iyi müzik ve samimi bir ortam. Günün yorgunluğunu atmak isteyenler için",
      fiyat: "1000₺",
      gelir: "Günlük +7.000$",
      kapasite: "50 Kişi",
      konum: "Panoroma Dr",
      yildiz: 4
    }, 
    {
      id: 20,
      isim: "Beach Bar",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/e1.webp",
      aciklama: "Modern ve stil sahibi bar. Özel kokteyller, kaliteli içkiler ve enerjik müzik. Akşam saatlerinden geceye uzanan keyifli buluşmalar için",
      fiyat: "750₺",
      gelir: "Günlük +7.500$",
      kapasite: "50 Kişi",
      konum: "Chumash",
      yildiz: 3
    },           
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Kapasite</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(121, 29, 226, 0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-2xl shadow-purple-500/40">
              <UtensilsCrossed className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                YEME & İÇME
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Restoran, kafe ve bar işletmeleri - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-purple-400 fill-current" />
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

export default VipIsletmelerYemek;
