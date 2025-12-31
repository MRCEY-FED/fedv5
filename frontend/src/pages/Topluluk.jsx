import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, X, ChevronRight, Image, Film, Play, Camera, Video,
  Skull, Eye, Lock, BookOpen, HelpCircle, Sparkles, PlayCircle,
  Gamepad2, Briefcase, Car, Home, Users, DollarSign, Heart, Shield,
  Search, Filter, Clock, ThumbsUp
} from 'lucide-react';

// ==================== İLLEGAL İPUCU VERİLERİ ====================
const illegalIpuclari = [
  {
    id: 1,
    resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-31%20130907.png",
    baslik: "Gergin Görünüşlü Adam",
    aciklama: "Bu adam bir harika dostum karanlık işlerin yürüyen marketi olarakta bilinir.",
    ipucu: "Yerin altına indikçe ses azalır; ama gerçek daha net duyulur"
  },
  {
    id: 2,
    resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-31%20132057.png",
    baslik: "Dr.Halliday",
    aciklama: "Bazı kimyasal maddeleri bu doktor çalıp satıyormuş diye duydum.",
    ipucu: "ÇUF ÇUF ÇUF"
  },
  {
    id: 3,
    resim: "https://694360ba73fe9fd20180e80e.imgix.net/33.webp",
    baslik: "Kod Adı: Federico",
    aciklama: "Şehrin dengesi bu adamla tanışırsan değişebilir. Kendine güveniyorsan bu adamı bul.",
    ipucu: "Çok istersen o seni bulur."
  },
  {
    id: 4,
    resim: "https://694360ba73fe9fd20180e80e.imgix.net/93b87301-f6e1-4f20-b281-e3c61a100936.png",
    baslik: "İllegal Mekanikler",
    aciklama: "Çalıntı araç parçalarını okutabilirsin.",
    ipucu: "Telefonunu Kullan"
  },
  {
    id: 5,
    resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-31%20133328.png",
    baslik: "Büyük Patronun Mezarı",
    aciklama: "Git ve burayı kaz gerisi tanrının takdiri.",
    ipucu: "Dikkat et çok tehlikeli bir görev."
  },
  {
    id: 6,
    resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-31%20133831.png",
    baslik: "Los Santos Üniversitesi",
    aciklama: "Buranın nasıl kimyagerler çıkardığını unutma kütüphane ve kimya odası işini görür.",
    ipucu: "Sadece bir öğrenciymiş gibi işini gör gerisi sende."
  }
];

// ==================== VİDEO REHBER VERİLERİ ====================
const videoRehberler = [
  {
    id: 1,
    videoId: "",
    kategori: "Başlangıç",
    baslik: "Sunucuya İlk Giriş Rehberi",
    aciklama: "Sunucuya ilk kez giriyorsan bu videoyu mutlaka izle! Karakter oluşturma, ilk adımlar ve temel bilgiler burada.",
    sure: "12:45",
    izlenme: "15.2K",
    renk: "emerald"
  },
  {
    id: 2,
    videoId: "",
    kategori: "Para Kazanma",
    baslik: "Legal İşler ile Para Kazanma",
    aciklama: "Taksicilik, kamyonculuk, balıkçılık ve daha fazlası! Legal yollarla nasıl zengin olursun öğren.",
    sure: "18:30",
    izlenme: "23.5K",
    renk: "yellow"
  },
  {
    id: 3,
    videoId: "",
    kategori: "Araçlar",
    baslik: "Araç Satın Alma ve Modifiye",
    aciklama: "Araç galerilerinin yerleri, araç modifikasyonu, sigorta sistemi ve özel plaka alma rehberi.",
    sure: "15:20",
    izlenme: "19.8K",
    renk: "blue"
  },
  {
    id: 4,
    videoId: "",
    kategori: "Gayrimenkul",
    baslik: "Ev ve İşyeri Satın Alma",
    aciklama: "Mülk satın alma işlemleri, dekorasyon sistemi, kiralama ve ihale kuralları hakkında her şey.",
    sure: "14:15",
    izlenme: "12.3K",
    renk: "purple"
  },
  {
    id: 5,
    videoId: "",
    kategori: "Organizasyon",
    baslik: "Gang ve Çete Kurma Rehberi",
    aciklama: "Kendi gangini nasıl kurarsın? Üyelik, bölge kontrolü, savaş kuralları ve ittifaklar.",
    sure: "22:00",
    izlenme: "31.2K",
    renk: "orange"
  },
  {
    id: 6,
    videoId: "",
    kategori: "Soygun",
    baslik: "Soygun Sistemleri Rehberi",
    aciklama: "Market, banka, mücevher soygunu nasıl yapılır? Tüm soygun sistemleri detaylı anlatım.",
    sure: "25:40",
    izlenme: "45.6K",
    renk: "red"
  }
];

// ==================== GALERİ VERİLERİ ====================--]]
const galeriFotograflar = [
  { id: 1, url: "https://694360ba73fe9fd20180e80e.imgix.net/Screenshot_5.png", title: "Yağmurlu bir gecede İskele", description: "Los Santos sokaklarında bir gece" },
  { id: 2, url: "https://694360ba73fe9fd20180e80e.imgix.net/Screenshot_72.webp", title: "İhale Günü", description: "Şehrin zenginlerinin bir araya geldiği bir etkinlik." },
  { id: 3, url: "https://694360ba73fe9fd20180e80e.imgix.net/Screenshot_2.png", title: "UwU Cafede sıradan bir gün", description: "UwU Cafenin demirbaşları." },
  { id: 4, url: "https://694360ba73fe9fd20180e80e.imgix.net/5.webp", title: "Bahamada bir parti gecesi", description: "VIP müşterilerin eğlencesi" },
  { id: 5, url: "https://694360ba73fe9fd20180e80e.imgix.net/1e.jpg", title: "Modifiyeli Araçlar Etkinliği", description: "Hız tutkunlarının bir araya gelmesi." },
  { id: 6, url: "https://694360ba73fe9fd20180e80e.imgix.net/image.webp", title: "Sağlam bir MaddeX Sonu", description: "Sağlam çatışma dönmüştü." },
  { id: 7, url: "https://694360ba73fe9fd20180e80e.imgix.net/1.png", title: "Zenciler iş başında", description: "Bir bahama eğencesinde çekilmiş bir kare." },
  { id: 8, url: "https://694360ba73fe9fd20180e80e.imgix.net/DSAASD%20(1).webp", title: "SS Arası dönen bir toplantı", description: "Zenciler şehri yönetir." },
  { id: 9, url: "https://694360ba73fe9fd20180e80e.imgix.net/Screenshot_25.webp", title: "Unicorndan bir gece", description: "Kırmızı tutku" }
];

const galeriVideolar = [
  { id: 1, videoId: "3AQSiU1tCKY", title: "U.S. Marshal Service", description: "U.S. Marshal Baskını" },
  { id: 2, videoId: "ZrM2Ru-j4iE", title: "Has**tir Ordan", description: "Bakanım Benim" },
  { id: 3, videoId: "fahOLs-1P54", title: "Sheriff Turizm", description: "Sheriff beylerle bir otobüs yolculuğu" },
  { id: 4, videoId: "AHfnBtPISBE", title: "Bakana Hediye", description: "Sheriff nacizane hediyesi" },
  { id: 5, videoId: "nh99JExo0nw", title: "LSPD Kesit #1", description: "En eğlenceli RP sahneleri" },
  { id: 6, videoId: "uI2-GPsgk6k", title: "LSPD Kesit #2", description: "En eğlenceli RP sahneleri" }
];

// ==================== RENK SINIFLARI ====================
const renkSiniflari = {
  emerald: { bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40', icon: 'from-emerald-500 to-emerald-600', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300', glow: 'shadow-emerald-500/30' },
  yellow: { bg: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40', icon: 'from-yellow-500 to-yellow-600', text: 'text-yellow-400', badge: 'bg-yellow-500/20 text-yellow-300', glow: 'shadow-yellow-500/30' },
  blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', icon: 'from-blue-500 to-blue-600', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300', glow: 'shadow-blue-500/30' },
  purple: { bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', icon: 'from-purple-500 to-purple-600', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300', glow: 'shadow-purple-500/30' },
  orange: { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', icon: 'from-orange-500 to-orange-600', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-300', glow: 'shadow-orange-500/30' },
  red: { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', icon: 'from-red-500 to-red-600', text: 'text-red-400', badge: 'bg-red-500/20 text-red-300', glow: 'shadow-red-500/30' },
  cyan: { bg: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/40', icon: 'from-cyan-500 to-cyan-600', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300', glow: 'shadow-cyan-500/30' },
  pink: { bg: 'from-pink-500/20 to-pink-600/10', border: 'border-pink-500/40', icon: 'from-pink-500 to-pink-600', text: 'text-pink-400', badge: 'bg-pink-500/20 text-pink-300', glow: 'shadow-pink-500/30' },
  green: { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', icon: 'from-green-500 to-green-600', text: 'text-green-400', badge: 'bg-green-500/20 text-green-300', glow: 'shadow-green-500/30' }
};

const Topluluk = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedRehber, setSelectedRehber] = useState(null);
  const [activeTab, setActiveTab] = useState('illegal');
  const [rehberKategori, setRehberKategori] = useState('all');
  const [rehberSearch, setRehberSearch] = useState('');

  // Modal kontrolü
  const openImageModal = (index) => setSelectedImage(index);
  const closeImageModal = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev + 1) % galeriFotograflar.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + galeriFotograflar.length) % galeriFotograflar.length);

  const openVideoModal = (index) => setSelectedVideo(index);
  const closeVideoModal = () => setSelectedVideo(null);
  const nextVideo = () => setSelectedVideo((prev) => (prev + 1) % galeriVideolar.length);
  const prevVideo = () => setSelectedVideo((prev) => (prev - 1 + galeriVideolar.length) % galeriVideolar.length);

  const openRehberModal = (video) => setSelectedRehber(video);
  const closeRehberModal = () => setSelectedRehber(null);

  // Rehber filtreleme
  const filteredRehberler = videoRehberler.filter(rehber => {
    const matchKategori = rehberKategori === 'all' || rehber.kategori === rehberKategori;
    const matchSearch = rehber.baslik.toLowerCase().includes(rehberSearch.toLowerCase()) ||
                       rehber.aciklama.toLowerCase().includes(rehberSearch.toLowerCase());
    return matchKategori && matchSearch;
  });

  const kategoriler = [...new Set(videoRehberler.map(r => r.kategori))];

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeImageModal();
      }
      if (selectedVideo !== null) {
        if (e.key === 'ArrowRight') nextVideo();
        if (e.key === 'ArrowLeft') prevVideo();
        if (e.key === 'Escape') closeVideoModal();
      }
      if (selectedRehber !== null && e.key === 'Escape') {
        closeRehberModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedVideo, selectedRehber]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950/20 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeImageModal} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-violet-500/50 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-violet-500/50 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative">
            <img src={galeriFotograflar[selectedImage].url} alt={galeriFotograflar[selectedImage].title} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">{galeriFotograflar[selectedImage].title}</h3>
              <p className="text-gray-300">{galeriFotograflar[selectedImage].description}</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{selectedImage + 1} / {galeriFotograflar.length}</div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeVideoModal} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <button onClick={prevVideo} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextVideo} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="w-full max-w-4xl">
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">
              <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${galeriVideolar[selectedVideo].videoId}?autoplay=1`} title={galeriVideolar[selectedVideo].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">{galeriVideolar[selectedVideo].title}</h3>
              <p className="text-gray-300">{galeriVideolar[selectedVideo].description}</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{selectedVideo + 1} / {galeriVideolar.length}</div>
        </div>
      )}

      {/* Rehber Video Modal */}
      {selectedRehber !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeRehberModal} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl">
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full" 
                src={`https://www.youtube.com/embed/${selectedRehber.videoId}?autoplay=1`} 
                title={selectedRehber.baslik} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
            <div className="mt-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${renkSiniflari[selectedRehber.renk]?.icon || 'from-purple-500 to-violet-500'} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 ${renkSiniflari[selectedRehber.renk]?.badge || 'bg-purple-500/20 text-purple-300'} rounded-full text-xs font-bold`}>
                      {selectedRehber.kategori}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {selectedRehber.sure}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {selectedRehber.izlenme}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">{selectedRehber.baslik}</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedRehber.aciklama}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors mb-8 group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-violet-500/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              FED:V Topluluk
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            İpuçları, rehberler, galeri ve daha fazlası
          </p>
        </div>

        {/* Modern Sidebar + Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Menu */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-28 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Kategoriler</h3>
                  <p className="text-gray-500 text-xs">İçerik seçin</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('illegal')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 group ${
                    activeTab === 'illegal'
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-red-400'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    activeTab === 'illegal' 
                      ? 'bg-white/20' 
                      : 'bg-red-500/10 group-hover:bg-red-500/20'
                  }`}>
                    <Skull className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="block text-sm">Illegal İpucu</span>
                    <span className={`text-xs ${activeTab === 'illegal' ? 'text-white/70' : 'text-gray-600'}`}>
                      {illegalIpuclari.length} ipucu
                    </span>
                  </div>
                  {activeTab === 'illegal' && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('rehber')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 group ${
                    activeTab === 'rehber'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-emerald-400'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    activeTab === 'rehber' 
                      ? 'bg-white/20' 
                      : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                  }`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="block text-sm">Video Rehberler</span>
                    <span className={`text-xs ${activeTab === 'rehber' ? 'text-white/70' : 'text-gray-600'}`}>
                      {videoRehberler.length} video
                    </span>
                  </div>
                  {activeTab === 'rehber' && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('kareler')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 group ${
                    activeTab === 'kareler'
                      ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-violet-400'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    activeTab === 'kareler' 
                      ? 'bg-white/20' 
                      : 'bg-violet-500/10 group-hover:bg-violet-500/20'
                  }`}>
                    <Image className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="block text-sm">Oyundan Kareler</span>
                    <span className={`text-xs ${activeTab === 'kareler' ? 'text-white/70' : 'text-gray-600'}`}>
                      {galeriFotograflar.length} fotoğraf
                    </span>
                  </div>
                  {activeTab === 'kareler' && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('klipler')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 group ${
                    activeTab === 'klipler'
                      ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-fuchsia-400'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    activeTab === 'klipler' 
                      ? 'bg-white/20' 
                      : 'bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20'
                  }`}>
                    <Film className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="block text-sm">Oyundan Kesitler</span>
                    <span className={`text-xs ${activeTab === 'klipler' ? 'text-white/70' : 'text-gray-600'}`}>
                      {galeriVideolar.length} video
                    </span>
                  </div>
                  {activeTab === 'klipler' && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </nav>

              {/* Discord CTA in Sidebar */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="https://discord.gg/fedvsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/30 rounded-xl text-[#5865F2] transition-all group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span className="text-sm font-medium">Discord'a Katıl</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">

        {/* ==================== ILLEGAL İPUCU ==================== */}
        {activeTab === 'illegal' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
                <Lock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-medium">Gizli Bilgiler</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  🔒 ILLEGAL İPUÇLARI
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Bu bilgiler sadece güvenilir kişilerle paylaşılmalı. Dikkatli ol, her köşede tehlike var...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {illegalIpuclari.map((ipucu) => (
                <div key={ipucu.id} className="group relative bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img src={ipucu.resim} alt={ipucu.baslik} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-xl font-bold">{ipucu.baslik}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{ipucu.aciklama}</p>
                    <div className="flex items-center gap-2 bg-black/40 border border-red-500/30 rounded-lg px-3 py-2">
                      <Skull className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 text-xs font-medium">{ipucu.ipucu}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">⚠️ Uyarı</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bu ipuçları tamamen roleplay amaçlıdır. Bilgileri sadece güvendiğiniz kişilerle paylaşın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VİDEO REHBER ==================== */}
        {activeTab === 'rehber' && (
          <div>
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Video Rehberler</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  🎬 OYUN REHBERLERİ
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Sunucudaki tüm sistemleri öğrenmek için video rehberlerimizi izle!
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rehber ara..."
                  value={rehberSearch}
                  onChange={(e) => setRehberSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={rehberKategori}
                  onChange={(e) => setRehberKategori(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer min-w-[180px]"
                >
                  <option value="all">Tüm Kategoriler</option>
                  {kategoriler.map(kat => (
                    <option key={kat} value={kat}>{kat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mb-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Video className="w-4 h-4 text-emerald-400" />
                <span>{filteredRehberler.length} Video</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>{kategoriler.length} Kategori</span>
              </div>
            </div>

            {/* Video Grid - Netflix Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRehberler.map((rehber) => {
                const renk = renkSiniflari[rehber.renk] || renkSiniflari.emerald;
                
                return (
                  <div
                    key={rehber.id}
                    onClick={() => openRehberModal(rehber)}
                    className={`group relative bg-gradient-to-br ${renk.bg} border ${renk.border} rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl ${renk.glow} transition-all duration-500`}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${rehber.videoId}/maxresdefault.jpg`}
                        alt={rehber.baslik}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${renk.icon} rounded-full flex items-center justify-center shadow-xl ${renk.glow} transform group-hover:scale-110 transition-all duration-300 opacity-80 group-hover:opacity-100`}>
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium">{rehber.sure}</span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 ${renk.badge} rounded-full text-xs font-bold backdrop-blur-sm`}>
                          {rehber.kategori}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className={`text-white text-lg font-bold mb-2 group-hover:${renk.text} transition-colors line-clamp-1`}>
                        {rehber.baslik}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                        {rehber.aciklama}
                      </p>

                      {/* Footer Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-gray-500 text-xs">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            {rehber.izlenme}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3.5 h-3.5" />
                            98%
                          </span>
                        </div>
                        <div className={`${renk.text} text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                          <span>İzle</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t ${renk.bg}`} />
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredRehberler.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-400">Arama kriterlerinize uygun rehber bulunamadı.</p>
              </div>
            )}

            {/* Help Box */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Rehber Öneriniz mi Var?</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Hangi konuda rehber görmek istiyorsanız Discord'dan bize bildirin!
                </p>
                <a
                  href="https://discord.gg/fedvsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-emerald-500/30"
                >
                  <HelpCircle className="w-5 h-5" />
                  Öneri Gönder
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================== OYUNDAN KARELER ==================== */}
        {activeTab === 'kareler' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-4">
                <Camera className="w-4 h-4 text-violet-400" />
                <span className="text-violet-400 text-sm font-medium">Galeri</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  📸 POPÜLER KARELER
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Topluluğumuzun en güzel anları ve unutulmaz kareleri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriFotograflar.map((foto, index) => (
                <div key={foto.id} className="group bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer" onClick={() => openImageModal(index)}>
                  <div className="relative aspect-video">
                    <img src={foto.url} alt={foto.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/50 transform group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-violet-400 transition-colors">{foto.title}</h3>
                    <p className="text-gray-400 text-sm">{foto.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== OYUNDAN KESİTLER ==================== */}
        {activeTab === 'klipler' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full mb-4">
                <Video className="w-4 h-4 text-fuchsia-400" />
                <span className="text-fuchsia-400 text-sm font-medium">Videolar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  🎬 POPÜLER KESİTLER
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                En heyecanlı ve eğlenceli roleplay anları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriVideolar.map((video, index) => (
                <div key={video.id} onClick={() => openVideoModal(index)} className="group relative rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-fuchsia-500/50 transition-all duration-300 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5">
                  <div className="relative aspect-video">
                    <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-fuchsia-500/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-fuchsia-500/50">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-fuchsia-400 transition-colors">{video.title}</h3>
                    <p className="text-gray-400 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Topluluk;
