
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Clock, 
  Filter, 
  Star, 
  Heart, 
  Camera, 
  Megaphone,
  ChevronLeft,
  ArrowLeft,
  Sparkles,
  Search,
  Users,
  Trophy,
  Globe,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EVENTS_DATA = [
  {
    id: 1,
    title: "جشنواره غذای خیریه آرزوها",
    date: "۱۵ اسفند ۱۴۰۳",
    time: "۱۶:۰۰ الی ۲۲:۰۰",
    location: "مرکز همایش‌های برج میلاد، تهران",
    type: "حضوری",
    category: "upcoming",
    tag: "غذا و هنر",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    price: "رایگان",
    description: "بزرگترین جشنواره غذای خیریه سال با حضور سرآشپزهای برتر و هنرمندان محبوب. تمامی درآمد حاصل از فروش غرفه‌ها صرف آرزوهای کودکان مبتلا به بیماری‌های خاص خواهد شد."
  },
  {
    id: 2,
    title: "کنسرت آنلاین ستاره‌های مهربان",
    date: "۲۰ اسفند ۱۴۰۳",
    time: "۲۱:۰۰ الی ۲۳:۰۰",
    location: "پخش زنده اختصاصی آپارات",
    type: "آنلاین",
    category: "upcoming",
    tag: "موسیقی",
    image: "https://images.unsplash.com/photo-1514525253361-bee1d382183e?q=80&w=2073&auto=format&fit=crop",
    price: "خرید بلیت",
    description: "یک شب فراموش‌نشدنی با اجرای زنده خوانندگان مطرح کشور به صورت آنلاین. با خرید بلیت این کنسرت، شما هم در برآورده کردن یک آرزوی بزرگ سهیم می‌شوید."
  },
  {
    id: 3,
    title: "پیاده‌روی بزرگ خانوادگی قهرمانان",
    date: "۱۰ فروردین ۱۴۰۴",
    time: "۰۸:۰۰ صبح",
    location: "پارک ملت، تهران",
    type: "حضوری",
    category: "upcoming",
    tag: "ورزشی",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
    price: "رایگان",
    description: "همراه با خانواده و فرزندان خود، در یک پیاده‌روی شاد شرکت کنید و نماد امید برای کودکان قهرمان باشید. جوایز ارزنده‌ای برای شرکت‌کنندگان در نظر گرفته شده است."
  },
  {
    id: 4,
    title: "نمایشگاه نقاشی فرشتگان کوچک",
    date: "۲۵ بهمن ۱۴۰۳",
    time: "۱۰:۰۰ الی ۱۸:۰۰",
    location: "گالری آرزو، تهران",
    type: "حضوری",
    category: "past",
    tag: "هنری",
    image: "https://images.unsplash.com/photo-1564349683136-77e08bef1ed1?q=80&w=2070&auto=format&fit=crop",
    price: "تمام شده",
    description: "نمایش آثار برگزیده نقاشی کودکان تحت پوشش بنیاد آرزوها. این رویداد با فروش تمامی آثار به نفع کودکان با موفقیت به پایان رسید."
  }
];

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = EVENTS_DATA.filter(event => {
    const matchesFilter = filter === 'all' || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover mix-blend-overlay"
              alt="Event Background"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1D264F] to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-2xl text-blue-200 text-sm font-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap size={18} className="text-yellow-400" fill="currentColor" />
            رویدادهایی که دنیا را تغییر می‌دهند
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            با هم <span className="text-orange-500">معجزه</span> می‌سازیم
          </h1>
          
          <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000">
            در رویدادهای ما شرکت کنید، داوطلب شوید و بخشی از مسیر برآورده شدن آرزوی یک کودک قهرمان باشید.
          </p>
        </div>
        
        <div className="absolute top-20 right-20 text-white/10 animate-pulse hidden md:block">
          <Star size={60} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 left-20 text-orange-500/20 animate-bounce-slow hidden md:block">
          <Heart size={80} fill="currentColor" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        {/* Filter Bar */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 p-4 md:p-6 flex flex-col lg:flex-row items-center gap-6 border border-gray-50">
          <div className="flex flex-wrap items-center justify-center gap-3 flex-1">
            {[
              { id: 'all', label: 'همه رویدادها' },
              { id: 'upcoming', label: 'رویدادهای پیش‌رو' },
              { id: 'past', label: 'برگزار شده' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${
                  filter === btn.id 
                  ? 'bg-blue-800 text-white shadow-lg shadow-blue-800/20' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          
          <div className="w-full lg:w-80 relative">
            <input 
              type="text" 
              placeholder="جستجوی رویداد..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border-none rounded-2xl px-12 py-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all font-medium"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Events Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredEvents.map((event) => (
            <Link 
              to={`/event/${event.id}`}
              key={event.id} 
              className={`group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 ${event.category === 'past' ? 'grayscale-[0.5]' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Floating Badges */}
                <div className="absolute top-5 right-5 flex flex-col gap-2">
                  <span className={`backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-white shadow-lg uppercase tracking-wider ${
                    event.type === 'آنلاین' ? 'bg-purple-500/80' : 'bg-blue-600/80'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="absolute bottom-5 right-5 left-5 flex justify-between items-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-[10px] font-black text-white">
                    {event.tag}
                  </div>
                  {event.category === 'past' && (
                    <div className="bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1 rounded-lg">
                      پایان یافته
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-orange-500">
                    <Calendar size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-blue-900 font-black text-sm">{event.date}</span>
                    <span className="text-gray-400 font-bold text-[10px]">{event.time}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-blue-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                  {event.title}
                </h3>
                
                <div className="flex items-start gap-2 text-gray-500 text-xs mb-5 min-h-[32px]">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>
                
                <p className="text-gray-400 text-[13px] leading-relaxed font-medium mb-8 line-clamp-3">
                  {event.description}
                </p>
                
                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">بهای شرکت</span>
                    <span className="text-sm font-black text-blue-900">{event.price}</span>
                  </div>
                  
                  {event.category === 'upcoming' ? (
                    <div className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-xl font-black text-xs shadow-lg shadow-blue-900/20 group-hover:bg-orange-500 transition-all">
                      <span>رزرو بلیت</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-400 px-5 py-2.5 rounded-xl font-black text-xs">
                      <span>گزارش</span>
                      <Camera size={14} />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
            <Megaphone size={64} className="mx-auto text-gray-200 mb-6" />
            <h3 className="text-2xl font-black text-gray-400">رویدادی پیدا نشد!</h3>
            <p className="text-gray-400 mt-2">شما می‌توانید اولین برگزارکننده یک رویداد خیرخواهانه باشید.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchTerm('');}} 
              className="mt-6 text-blue-800 font-bold underline"
            >
              نمایش همه رویدادها
            </button>
          </div>
        )}

        {/* Host an Event Section */}
        <div className="mt-32 relative rounded-[4rem] bg-[#1D264F] p-10 md:p-20 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <Sparkles className="absolute top-10 left-10 w-32 h-32 text-blue-400 animate-pulse" />
            <Users className="absolute bottom-10 right-20 w-48 h-48 text-orange-400 opacity-20" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl text-blue-200 text-sm font-bold">
                <Megaphone size={18} className="text-orange-500" />
                میزبان رویاها باشید
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                آیا می‌خواهید یک رویداد <br />
                <span className="text-orange-500">خیرخواهانه</span> برگزار کنید؟
              </h2>
              <p className="text-blue-100/70 text-lg leading-loose font-medium">
                فرقی نمی‌کند یک جشن تولد باشد، یک مسابقه ورزشی یا یک وبینار تخصصی؛ شما می‌توانید با میزبانی یک رویداد شخصی، دوستان و اطرافیان خود را برای برآورده کردن آرزوی یک کودک قهرمان دعوت کنید.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all shadow-xl shadow-orange-500/30 flex items-center gap-3 group">
                  شروع به کار
                  <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-[2rem] font-black text-lg transition-all">
                  دریافت ایده و راهنما
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "رویداد برگزار شده", count: "۱۲۰+", icon: <Trophy className="text-yellow-400" /> },
                { label: "حامیان فعال", count: "۵۰۰۰+", icon: <Heart className="text-red-400" fill="currentColor" /> },
                { label: "شهر تحت پوشش", count: "۱۸+", icon: <Globe className="text-blue-400" /> },
                { label: "آرزوی محقق شده", count: "۳۴۰+", icon: <Star className="text-orange-400" fill="currentColor" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-3 group hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.count}</div>
                  <div className="text-xs text-blue-100/40 font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Calendar Highlight */}
        <div className="mt-32 bg-white rounded-[3.5rem] p-10 md:p-16 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-right">
             <h3 className="text-3xl font-black text-blue-900">تقویم مهربانی را دنبال کنید</h3>
             <p className="text-gray-500 text-lg font-medium">با عضویت در خبرنامه، هیچ رویدادی را برای لبخند بخشیدن به کودکان از دست ندهید.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <input 
               type="email" 
               placeholder="ایمیل شما" 
               className="bg-gray-50 border-none rounded-2xl px-8 py-5 text-sm focus:ring-2 focus:ring-blue-100 font-medium md:w-80"
             />
             <button className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-800/20">
                عضویت
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
