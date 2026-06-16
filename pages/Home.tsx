
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Heart, ArrowLeft, Trophy, Users, Gift, 
  CheckCircle2, Globe, ShieldCheck, ArrowUpLeft,
  Quote, Zap, Map, Footprints, Clock, Sparkles,
  MapPin, Calendar, ChevronRight, ChevronLeft,
  Ticket, ArrowRight, MessageSquare, BadgeCheck,
  Newspaper, BookOpen, ExternalLink, Activity,
  Sun, Smile, Target, Waves,
  X, Home as HomeIcon, Stethoscope, UserPlus
} from 'lucide-react';

// Counter Component for Stats
const StatCounter = ({ target, duration = 2500, suffix = "", className = "" }: { target: number, duration?: number, suffix?: string, className?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother finish
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * target);
      
      setCount(currentCount);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  const toPersianDigits = (n: number) => {
    return n.toLocaleString('fa-IR', { useGrouping: false });
  };

  return (
    <div ref={countRef} className={`font-black text-blue-900 tracking-tighter ${className}`}>
      {toPersianDigits(count)}{suffix}
    </div>
  );
};

const slides = [
  {
    id: 1,
    tag: "ما اهمیت می‌دهیم",
    title: "حمایت از کودکان با بیماری‌های خاص",
    subtitle: "آرزوها قدرت تغییر دنیای کودکان مبتلا به بیماری‌های سخت را دارند. بیایید با هم معجزه کنیم.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "بیایید کمک کنیم",
    title: "امیدی تازه برای قهرمانان کوچک",
    subtitle: "هر کمک شما، لبخندی است بر لبان کودکی که روزهای سختی را در مبارزه با بیماری می‌گذراند.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
  }
];

const activeCauses = [
  {
    id: 1,
    childName: "علی",
    age: 7,
    wish: "می‌خواهم برای یک روز یک ابرقهرمان واقعی باشم و شهر را نجات دهم.",
    status: "granted",
    statusLabel: "برآورده شده",
    image: "https://images.unsplash.com/photo-1594913785162-e6785b493bd2?q=80&w=2071&auto=format&fit=crop",
    icon: <Zap size={20} className="text-yellow-500" />
  },
  {
    id: 2,
    childName: "سارا",
    age: 10,
    wish: "آرزو دارم به یک سفر هیجان‌انگیز به دل جنگل بروم و حیوانات را ببینم.",
    status: "in_progress",
    statusLabel: "در حال اجرا",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
    icon: <Map size={20} className="text-orange-500" />
  },
  {
    id: 3,
    childName: "مهدی",
    age: 5,
    wish: "آرزو دارم یک پلیس شجاع باشم و با ماشین پلیس گشت بزنم.",
    status: "pending",
    statusLabel: "در انتظار",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
    icon: <ShieldCheck size={20} className="text-blue-500" />
  }
];

const testimonials = [
  {
    id: 1,
    author: "مریم احمدی",
    role: "والد (مادر سمانه)",
    text: "وقتی آرزوی دخترم برآورده شد، نوری در چشمانش دیدم که ماه‌ها بود خاموش شده بود. این فقط یک هدیه نبود، یک دلیل برای ادامه زندگی بود.",
    avatar: "https://i.pravatar.cc/150?u=maryam",
    location: "تهران",
    wishLink: "#",
    category: "family"
  },
  {
    id: 2,
    author: "دکتر سهرابی",
    role: "حامی طلایی",
    text: "بنیاد آرزوها بستری شفاف و صادقانه فراهم کرده تا بتوانیم تاثیر مستقیم کمک‌هایمان را در لبخند این فرشتگان ببینیم. افتخار می‌کنم که همراه هستم.",
    avatar: "https://i.pravatar.cc/150?u=sohrabi",
    location: "اصفهان",
    wishLink: "#",
    category: "donor"
  },
  {
    id: 3,
    author: "رضا محمدی",
    role: "داوطلب (تیم اجرایی)",
    text: "هیچ حسی در دنیا با لحظه‌ای که یک کودک به آرزویش می‌رسد قابل مقایسه نیست. ما اینجا با هم معجزه می‌سازیم.",
    avatar: "https://i.pravatar.cc/150?u=reza",
    location: "تبریز",
    wishLink: "#",
    category: "volunteer"
  }
];

const recentEvents = [
  {
    id: 1,
    title: "جشنواره غذای خیریه آرزوها",
    date: "۱۵ اسفند ۱۴۰۳",
    location: "برج میلاد، تهران",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    type: "حضوری"
  },
  {
    id: 2,
    title: "کنسرت آنلاین حمایت از فرشتگان",
    date: "۲۰ اسفند ۱۴۰۳",
    location: "پخش زنده آپارات",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop",
    type: "آنلاین"
  },
  {
    id: 3,
    title: "نمایشگاه نقاشی کودکان قهرمان",
    date: "۲۵ اسفند ۱۴۰۳",
    location: "گالری آرزو، تهران",
    image: "https://images.unsplash.com/photo-1460662136046-53a815049903?q=80&w=2070&auto=format&fit=crop",
    type: "حضوری"
  }
];

const newsItems = [
  {
    id: 1,
    title: "تاثیر مثبت برآورده شدن آرزو بر روند درمان",
    excerpt: "تحقیقات جدید نشان می‌دهد که تقویت روحیه کودکان از طریق برآورده شدن آرزوها، پاسخ به درمان را تا ۳۰ درصد بهبود می‌بخشد...",
    date: "۱۰ اسفند ۱۴۰۳",
    category: "پزشکی و سلامت",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop",
    readTime: "۵ دقیقه"
  },
  {
    id: 2,
    title: "امضای تفاهم‌نامه همکاری با انجمن پزشکان ایران",
    excerpt: "بنیاد آرزوها در راستای شناسایی دقیق‌تر کودکان واجد شرایط، همکاری گسترده‌ای را با مراکز درمانی سراسر کشور آغاز کرد...",
    date: "۰۵ اسفند ۱۴۰۳",
    category: "اخبار بنیاد",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    readTime: "۳ دقیقه"
  },
  {
    id: 3,
    title: "چگونه یک داوطلب موثر برای کودکان باشیم؟",
    excerpt: "راهنمای جامع برای کسانی که می‌خواهند وقت و مهارت خود را در مسیر شاد کردن دل فرشتگان کوچک صرف کنند...",
    date: "۰۱ اسفند ۱۴۰۳",
    category: "آموزشی",
    image: "https://images.unsplash.com/photo-1559023953-a1292833075b?q=80&w=2070&auto=format&fit=crop",
    readTime: "۷ دقیقه"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <span className="inline-block bg-blue-600/90 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {slide.tag}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    to="/donate"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-orange-500/20"
                  >
                    همین حالا کمک کنید
                  </Link>
                  <button
                    onClick={() => setIsReferralModalOpen(true)}
                    className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl"
                  >
                    ثبت آرزوی کودک
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 right-1/2 translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Referral Selection Modal */}
      {isReferralModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setIsReferralModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsReferralModalOpen(false)} 
              className="absolute top-6 left-6 text-gray-400 hover:text-blue-900 p-2 z-20 transition-colors"
            >
              <X size={28} />
            </button>
            <div className="p-8 md:p-16">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-blue-900">نحوه معرفی کودک</h2>
                <p className="text-gray-500 font-bold">لطفاً وضعیت خود را انتخاب کنید تا به فرم مناسب هدایت شوید</p>
                <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link to="/submit-wish?type=family" className="flex flex-col bg-orange-50/50 rounded-[2.5rem] p-8 border border-orange-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                  <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"><HomeIcon size={32} /></div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4">خانواده</h3>
                  <p className="text-gray-600 text-sm leading-loose font-medium flex-grow mb-8 text-right">
                    اگر شما والدین/سرپرست قانونی کودک، خود کودک یا یکی از اعضای خانواده هستید که از وضعیت پزشکی فعلی کودک اطلاع دقیقی دارید، از این فرم استفاده کنید.
                  </p>
                  <div className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors text-center">
                    معرفی یک کودک
                  </div>
                </Link>
                <Link to="/submit-wish?type=medical" className="flex flex-col bg-blue-50/50 rounded-[2.5rem] p-8 border border-blue-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                  <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"><Stethoscope size={32} /></div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4 text-right">تیم پزشکی</h3>
                  <p className="text-gray-600 text-sm leading-loose font-medium flex-grow mb-8 text-right">
                    اگر عضوی از تیم مراقبت‌های بهداشتی کودک مانند پزشک، دستیار پزشک، پرستار، متخصص پرستاری، مددکار اجتماعی یا متخصص زندگی کودک هستید، از این فرم استفاده کنید.
                  </p>
                  <div className="w-full bg-[#1D264F] text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors text-center">
                    معرفی یک کودک
                  </div>
                </Link>
                <Link to="/submit-wish?type=other" className="flex flex-col bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                  <div className="bg-white text-gray-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform"><UserPlus size={32} /></div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4 text-right">دیگر</h3>
                  <p className="text-gray-600 text-sm leading-loose font-medium flex-grow mb-8 text-right">
                    اگر شما عضو خانواده یا عضوی از تیم مراقبت‌های بهداشتی کودک نیستید، از شما دعوت می‌کنیم تا اطلاعات مربوط به اشتراک بگذارید.
                  </p>
                  <div className="w-full bg-white border-2 border-gray-200 text-gray-500 py-4 rounded-2xl font-black hover:bg-gray-100 transition-colors text-center">
                    معرفی یک کودک
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories / Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-blue-900">دسته‌بندی آرزوها</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">بنیاد آرزوها در چهار حوزه اصلی به کودکان کمک می‌کند تا رویاهای خود را به واقعیت تبدیل کنند.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "می‌خواهم بروم", icon: <Map className="w-10 h-10" />, color: "bg-blue-50 text-blue-600", desc: "سفرهای رویایی به مقاصد شگفت‌انگیز" },
              { title: "می‌خواهم باشم", icon: <Users className="w-10 h-10" />, color: "bg-orange-50 text-orange-600", desc: "تجربه مشاغل و قهرمان بودن" },
              { title: "می‌خواهم داشته باشم", icon: <Gift className="w-10 h-10" />, color: "bg-purple-50 text-purple-600", desc: "هدایای خاص و یادگاری‌های ماندگار" },
              { title: "می‌خواهم ببینم", icon: <Sparkles className="w-10 h-10" />, color: "bg-green-50 text-green-600", desc: "ملاقات با افراد مشهور و محبوب" },
            ].map((cat, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] border-2 border-gray-50 hover:border-blue-100 transition-all text-center space-y-4 group">
                <div className={`${cat.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-12`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -right-20 bottom-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">قدرت تغییردهنده یک آرزو</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              برآورده شدن آرزو تنها یک لحظه شاد نیست؛ بلکه یک نقطه عطف در مسیر مبارزه با بیماری است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Impact Card 1: Medical */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] translate-y-4 translate-x-4 opacity-0 group-hover:opacity-10 transition-all" />
              <div className="bg-white border-2 border-blue-50 p-10 rounded-[3rem] h-full flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <div className="bg-blue-100 text-blue-600 p-5 rounded-[2rem]">
                  <Activity size={32} />
                </div>
                <h3 className="text-xl font-black text-blue-900">تاثیر جسمانی</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  بیش از <span className="text-blue-700 font-bold">۷۵٪</span> از پزشکان معتقدند آرزوها به بهبود علائم حیاتی کودکان کمک می‌کنند.
                </p>
              </div>
            </div>

            {/* Impact Card 2: Hope */}
            <div className="relative group lg:mt-12">
              <div className="absolute inset-0 bg-orange-500 rounded-[3rem] translate-y-4 translate-x-4 opacity-0 group-hover:opacity-10 transition-all" />
              <div className="bg-white border-2 border-orange-50 p-10 rounded-[3rem] h-full flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-orange-500/5">
                <div className="bg-orange-100 text-orange-600 p-5 rounded-[2rem]">
                  <Sun size={32} />
                </div>
                <h3 className="text-xl font-black text-blue-900">تولد دوباره امید</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  آرزوها به کودکان دلیلی برای مبارزه می‌دهند و جایگزین ترس با امید به آینده می‌شوند.
                </p>
              </div>
            </div>

            {/* Impact Card 3: Family */}
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-600 rounded-[3rem] translate-y-4 translate-x-4 opacity-0 group-hover:opacity-10 transition-all" />
              <div className="bg-white border-2 border-purple-50 p-10 rounded-[3rem] h-full flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <div className="bg-purple-100 text-purple-600 p-5 rounded-[2rem]">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-black text-blue-900">انسجام خانواده</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  این تجربه، فشار روانی را از روی خانواده‌ها برداشته و پیوندهای عاطفی را در سخت‌ترین شرایط تقویت می‌کند.
                </p>
              </div>
            </div>

            {/* Impact Card 4: Community */}
            <div className="relative group lg:mt-12">
              <div className="absolute inset-0 bg-green-600 rounded-[3rem] translate-y-4 translate-x-4 opacity-0 group-hover:opacity-10 transition-all" />
              <div className="bg-white border-2 border-green-50 p-10 rounded-[3rem] h-full flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <div className="bg-green-100 text-green-600 p-5 rounded-[2rem]">
                  <Waves size={32} />
                </div>
                <h3 className="text-xl font-black text-blue-900">تاثیر اجتماعی</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  هر آرزو، موجی از همدلی در جامعه ایجاد کرده و فرهنگ حمایتگری را نهادینه می‌کند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-blue-900">آرزوهای در جریان</h2>
              <p className="text-gray-600">داستان کودکانی که منتظر دستان مهربان شما هستند.</p>
            </div>
            <Link to="/gallery" className="text-blue-800 font-bold flex items-center gap-1 hover:underline">
              مشاهده همه آرزوها <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeCauses.map((cause) => (
              <div key={cause.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                <div className="relative aspect-video">
                  <img src={cause.image} alt={cause.childName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black ${
                    cause.status === 'granted' ? 'bg-green-100 text-green-700' : 
                    cause.status === 'in_progress' ? 'bg-orange-100 text-orange-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {cause.statusLabel}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-50 p-2 rounded-xl">{cause.icon}</div>
                    <div>
                      <h3 className="text-xl font-black text-blue-900">{cause.childName}، {cause.age} ساله</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[48px]">
                    {cause.wish}
                  </p>
                  <Link to="/donate" className="block w-full text-center py-3 bg-blue-50 text-blue-800 rounded-xl font-bold hover:bg-blue-800 hover:text-white transition-all">
                    حمایت از این آرزو
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section - Updated to be Minimal and Smaller */}
      <section className="bg-gray-50 py-6 md:py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Trophy size={20} className="text-yellow-500" />, count: 500, suffix: "+", label: "آرزوی برآورده شده" },
              { icon: <Users size={20} className="text-blue-500" />, count: 1000, suffix: "+", label: "داوطلب فعال" },
              { icon: <Heart size={20} className="text-red-500" fill="currentColor" />, count: 2000, suffix: "+", label: "حامی مهربان" },
              { icon: <Globe size={20} className="text-green-500" />, count: 30, suffix: "", label: "شهر تحت پوشش" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center p-4 md:p-5 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md group text-center"
              >
                <div className="mb-2 transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <StatCounter target={stat.count} suffix={stat.suffix} className="text-xl md:text-2xl" />
                <div className="mt-1 text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-right space-y-4">
              <h2 className="text-4xl font-black text-blue-900">آخرین رویدادها</h2>
              <p className="text-gray-600">با حضور در این رویدادها، شما هم بخشی از معجزه آرزوها باشید.</p>
            </div>
            <Link to="/events" className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl font-black hover:bg-blue-800 hover:text-white transition-all flex items-center gap-2 group">
              مشاهده تمام رویدادها
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentEvents.map((event) => (
              <div key={event.id} className="group relative flex flex-col bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl text-blue-800 font-black text-xs shadow-lg">
                    {event.type}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar size={16} className="text-orange-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin size={16} className="text-blue-800" />
                      {event.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-blue-900 mb-6 leading-tight group-hover:text-blue-700 transition-colors">
                    {event.title}
                  </h3>
                  
                  <button className="mt-auto flex items-center justify-between w-full p-4 bg-gray-50 rounded-2xl font-bold text-gray-700 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <span>ثبت‌نام و جزئیات</span>
                    <Ticket size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Testimonials */}
      <section className="py-24 bg-[#1D264F] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-[40px] border-blue-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-[40px] border-orange-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-blue-300 text-sm font-bold">
              <MessageSquare size={16} />
              صدای همراهان ما
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">تجربیات تغییر دهنده زندگی</h2>
            <p className="text-blue-200/60 max-w-2xl mx-auto">روایت‌هایی واقعی از کسانی که جادوی یک آرزو را از نزدیک لمس کرده‌اند.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute -top-6 -left-6 z-20 flex gap-2">
                  <button onClick={prevTestimonial} className="bg-white/10 hover:bg-white text-white hover:text-blue-900 p-4 rounded-2xl backdrop-blur-xl border border-white/10 transition-all">
                    <ChevronRight size={24} />
                  </button>
                  <button onClick={nextTestimonial} className="bg-white/10 hover:bg-white text-white hover:text-blue-900 p-4 rounded-2xl backdrop-blur-xl border border-white/10 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
                  <Quote size={120} className="absolute -top-8 -right-8 text-white/5 group-hover:text-blue-400/10 transition-colors" />
                  
                  <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl relative z-10">
                        <img 
                          src={testimonials[currentTestimonial].avatar} 
                          alt={testimonials[currentTestimonial].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-2xl shadow-xl z-20">
                        <Heart size={24} fill="currentColor" />
                      </div>
                    </div>

                    <div className="flex-grow space-y-6 text-center md:text-right">
                      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                        <span className={`px-4 py-1 rounded-full text-xs font-black border ${
                          testimonials[currentTestimonial].category === 'family' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                          testimonials[currentTestimonial].category === 'donor' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                          'bg-green-500/20 text-green-300 border-green-500/30'
                        }`}>
                          {testimonials[currentTestimonial].role}
                        </span>
                        <div className="flex items-center gap-1 text-blue-300/60 text-xs font-medium">
                          <MapPin size={12} />
                          {testimonials[currentTestimonial].location}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white leading-relaxed text-justify" style={{ fontStyle: 'normal', fontSize: '1.5rem' }}>
                        "{testimonials[currentTestimonial].text}"
                      </h3>

                      <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-xl font-black text-white flex items-center gap-2">
                              {testimonials[currentTestimonial].author}
                              <BadgeCheck size={20} className="text-blue-400" />
                            </div>
                            <div className="text-sm text-blue-200/50">همراه بنیاد آرزوها</div>
                          </div>
                        </div>
                        <Link to="/gallery" className="text-white font-bold flex items-center gap-2 hover:text-orange-400 transition-colors">
                          مشاهده داستان آرزو
                          <ArrowUpLeft size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-orange-500 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden group">
                <Sparkles className="absolute top-4 right-4 text-white/20 w-16 h-16 group-hover:scale-125 transition-transform" />
                <h4 className="text-3xl font-black mb-2">۹۸٪</h4>
                <p className="text-orange-100 font-bold leading-tight">والدین معتقدند آرزوها انگیزه مبارزه با بیماری را افزایش می‌دهند.</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 text-white group hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                  <Users className="text-blue-400" />
                  شما هم بنویسید
                </h4>
                <p className="text-blue-100/60 text-sm mb-6 leading-relaxed">اگر تجربه‌ای از همراهی با بنیاد دارید، خوشحال می‌شویم آن را با دیگران به اشتراک بگذارید.</p>
                <Link to="/experiences#share-form" className="block w-full py-4 bg-white text-blue-900 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all text-center">
                  ارسال نظر و تجربه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Blog */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-right space-y-4">
              <div className="flex items-center gap-2 text-blue-800 font-bold mb-2 justify-center md:justify-start">
                <Newspaper size={24} />
                مجله خبری آرزوها
              </div>
              <h2 className="text-4xl font-black text-blue-900">آخرین اخبار و مقالات</h2>
              <p className="text-gray-600">دانستنی‌ها، گزارش‌ها و اخبار دنیای فرشتگان کوچک</p>
            </div>
            <Link to="/gallery" className="text-blue-800 font-bold flex items-center gap-2 hover:text-orange-600 transition-colors group">
              مشاهده آرشیو مطالب
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-xl text-xs font-bold">
                    {news.category}
                  </div>
                </div>
                
                <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      زمان مطالعه: {news.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="pt-6 mt-auto border-t border-gray-50 flex justify-between items-center">
                    <Link to="/gallery" className="text-blue-800 font-black text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      ادامه مطلب
                      <ArrowLeft size={16} />
                    </Link>
                    <button className="text-gray-400 hover:text-blue-800 transition-colors">
                      <ExternalLink size={18} />
                    </button>
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

export default Home;
