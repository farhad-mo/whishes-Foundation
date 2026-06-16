
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Ticket, 
  Users, 
  Share2, 
  ArrowLeft, 
  ChevronLeft, 
  Star, 
  Heart, 
  ShieldCheck, 
  Zap,
  Info,
  CheckCircle2,
  Camera,
  Map as MapIcon
} from 'lucide-react';

const EVENTS_DATABASE: Record<string, any> = {
  "1": {
    title: "جشنواره غذای خیریه آرزوها",
    date: "۱۵ اسفند ۱۴۰۳",
    time: "۱۶:۰۰ الی ۲۲:۰۰",
    location: "مرکز همایش‌های برج میلاد، تهران",
    type: "حضوری",
    tag: "غذا و هنر",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    price: "رایگان (با امکان حمایت)",
    description: "بزرگترین جشنواره غذای خیریه سال با حضور سرآشپزهای برتر و هنرمندان محبوب. تمامی درآمد حاصل از فروش غرفه‌ها صرف آرزوهای کودکان مبتلا به بیماری‌های خاص خواهد شد.",
    longDescription: "این جشنواره با هدف جمع‌آوری کمک‌های مالی برای برآورده کردن آرزوی ۱۰۰ کودک در لیست انتظار برگزار می‌شود. در این رویداد، بیش از ۵۰ غرفه از بهترین رستوران‌ها و کافه‌های تهران حضور دارند. همچنین بخش ویژه‌ای برای نقاشی زنده کودکان و مزایده آثار هنری در نظر گرفته شده است. حضور شما در این جشنواره، نه تنها یک شب شاد را برای شما رقم می‌زند، بلکه نوری از امید در دل قهرمانان کوچک ما روشن می‌کند.",
    features: ["موسیقی زنده", "غرفه‌های متنوع غذا", "بخش بازی کودکان", "مزایده خیریه"],
    organizer: "بنیاد آرزوها - واحد رویدادها",
    gallery: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000"
    ]
  },
  "2": {
    title: "کنسرت آنلاین ستاره‌های مهربان",
    date: "۲۰ اسفند ۱۴۰۳",
    time: "۲۱:۰۰ الی ۲۳:۰۰",
    location: "پخش زنده اختصاصی آپارات",
    type: "آنلاین",
    tag: "موسیقی",
    image: "https://images.unsplash.com/photo-1514525253361-bee1d382183e?q=80&w=2073&auto=format&fit=crop",
    price: "بلیت حمایت: ۵۰,۰۰۰ تومان",
    description: "یک شب فراموش‌نشدنی با اجرای زنده خوانندگان مطرح کشور به صورت آنلاین. با خرید بلیت این کنسرت، شما هم در برآورده کردن یک آرزوی بزرگ سهیم می‌شوید.",
    longDescription: "کنسرت آنلاین 'ستاره‌های مهربان' فرصتی است تا از هر کجای ایران و جهان، در یک حرکت خیرخواهانه بزرگ شرکت کنید. برترین خوانندگان پاپ و سنتی کشور به صورت داوطلبانه در این برنامه به اجرای زنده می‌پردازند. تمام مبالغ حاصل از بلیت‌فروشی مستقیماً به حساب درمان کودکان اختصاص می‌یابد.",
    features: ["پخش با کیفیت 4K", "امکان چت زنده", "قرعه‌کشی بین حامیان", "دسترسی مادام‌العمر به بازپخش"],
    organizer: "گروه هنری آوا با همکاری بنیاد آرزوها",
    gallery: []
  }
};

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS_DATABASE[id || "1"] || EVENTS_DATABASE["1"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-16">
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                <Link to="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
                <ChevronLeft size={14} />
                <Link to="/events" className="hover:text-white transition-colors">رویدادها</Link>
                <ChevronLeft size={14} />
                <span className="text-white">{event.title}</span>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                <div className="space-y-4 text-right">
                  <div className="flex gap-3">
                    <div className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                      {event.type}
                    </div>
                    <div className="bg-white/20 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-xl text-xs font-black">
                      {event.tag}
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                    {event.title}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white hover:bg-white/20 transition-all shadow-xl">
                    <Share2 size={24} />
                  </button>
                  <button className="bg-orange-500 p-4 rounded-2xl text-white shadow-xl shadow-orange-500/20 hover:scale-110 transition-transform">
                    <Heart size={24} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
               <div className="flex flex-col items-center gap-2 text-center border-l md:border-l border-gray-50 last:border-0">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-800"><Calendar size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">تاریخ برگزاری</span>
                  <span className="text-blue-900 font-black">{event.date}</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center border-l md:border-l border-gray-50 last:border-0">
                  <div className="p-3 bg-orange-50 rounded-2xl text-orange-600"><Clock size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">زمان شروع</span>
                  <span className="text-blue-900 font-black text-sm">{event.time}</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center border-l md:border-l border-gray-50 last:border-0">
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600"><MapPin size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">موقعیت</span>
                  <span className="text-blue-900 font-black text-xs leading-relaxed">{event.location}</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center">
                  <div className="p-3 bg-purple-50 rounded-2xl text-purple-600"><Ticket size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">هزینه شرکت</span>
                  <span className="text-blue-900 font-black text-sm">{event.price}</span>
               </div>
            </div>

            {/* Event Description */}
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-gray-100 space-y-8 relative">
               <h2 className="text-3xl font-black text-blue-900 flex items-center gap-3">
                  <Zap size={28} className="text-orange-500" fill="currentColor" />
                  درباره این رویداد
               </h2>
               <div className="space-y-6 text-gray-600 leading-[2.2] text-justify font-medium text-lg">
                  <p>{event.longDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                    {event.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                        <CheckCircle2 className="text-blue-600" size={20} />
                        <span className="text-sm font-black text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* Impact Section */}
            <div className="bg-blue-900 rounded-[3.5rem] p-10 md:p-14 text-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <Heart className="absolute top-10 right-10 w-48 h-48" />
                  <Star className="absolute bottom-10 left-10 w-32 h-32" />
               </div>
               <div className="relative z-10 space-y-6 text-right">
                  <h3 className="text-2xl md:text-3xl font-black">حضور شما، بذر امید است</h3>
                  <p className="text-blue-100/70 text-lg leading-loose">
                    تمام عواید حاصل از این رویداد صرفاً برای هزینه‌های درمانی و برآورده کردن آرزوی کودکان مبتلا به بیماری‌های خاص هزینه می‌شود. با شرکت در این برنامه، شما هم جزئی از خانواده بزرگ حامیان بنیاد آرزوها خواهید بود.
                  </p>
                  <div className="flex items-center gap-4 text-orange-400 font-black">
                    <ShieldCheck size={24} />
                    ۱۰۰٪ شفافیت مالی در تمام مراحل
                  </div>
               </div>
            </div>

            {/* Gallery */}
            {event.gallery.length > 0 && (
              <div className="space-y-8">
                 <h3 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                    <Camera className="text-blue-800" />
                    گالری تصاویر رویداد
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {event.gallery.map((img: string, idx: number) => (
                      <div key={idx} className="group aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white hover:-translate-y-2 transition-all">
                         <img src={img} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Registration Card */}
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-gray-50 text-right space-y-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-full h-2 bg-orange-500"></div>
                 
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black text-blue-900">رزرو و ثبت‌نام</h3>
                    <p className="text-gray-400 text-sm font-medium">ظرفیت محدود است، همین حالا اقدام کنید.</p>
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                       <span className="text-gray-500 text-sm font-bold">هزینه پایه</span>
                       <span className="text-blue-900 font-black">{event.price}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                       <span className="text-gray-500 text-sm font-bold">وضعیت ظرفیت</span>
                       <span className="text-green-600 font-black">موجود</span>
                    </div>
                 </div>

                 <button className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                    <Ticket size={24} />
                    رزرو بلیت رویداد
                 </button>

                 <div className="pt-6 border-t border-gray-50 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold">
                       <Users size={16} />
                       بیش از ۱۵۰ نفر ثبت‌نام کرده‌اند
                    </div>
                 </div>
              </div>

              {/* Organizer Info */}
              <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100 space-y-4">
                 <h4 className="font-black text-blue-900 text-sm flex items-center gap-2">
                    <Info size={18} className="text-blue-600" />
                    برگزارکننده
                 </h4>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                       <Star className="text-blue-800" fill="currentColor" size={24} />
                    </div>
                    <div>
                       <div className="text-blue-900 font-black text-sm">{event.organizer}</div>
                       <div className="text-blue-400 text-[10px] font-bold">تایید شده توسط بنیاد</div>
                    </div>
                 </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 space-y-6">
                 <h4 className="font-black text-blue-900 flex items-center gap-2">
                    <MapIcon size={20} className="text-blue-800" />
                    محل برگزاری
                 </h4>
                 <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden relative group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white p-3 rounded-full shadow-xl">
                          <MapPin size={32} className="text-red-500 animate-bounce" />
                       </div>
                    </div>
                 </div>
                 <p className="text-gray-500 text-xs font-medium leading-relaxed">{event.location}</p>
                 <button className="w-full py-4 border-2 border-blue-800 text-blue-800 rounded-2xl font-black text-sm hover:bg-blue-800 hover:text-white transition-all">
                    مسیریابی با نقشه
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
