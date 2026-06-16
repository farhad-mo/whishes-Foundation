
import React, { useEffect } from 'react';
import { 
  Heart, 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  Star, 
  Sparkles, 
  Award, 
  ArrowLeft,
  Quote,
  CheckCircle2,
  Globe2,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "مهربانی بی‌پایان",
      desc: "ما معتقدیم مهربانی زبانی است که حتی نشنیده‌ها هم آن را درک می‌کنند و اساس تمام فعالیت‌های ماست.",
      icon: <Heart className="w-8 h-8" fill="currentColor" />,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "شفافیت مطلق",
      desc: "اعتماد شما ارزشمندترین دارایی ماست؛ لذا تمامی فرآیندهای مالی و اجرایی ما با دقت ۱۰۰ درصدی گزارش می‌شود.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "امیدآفرینی",
      desc: "آرزو فقط یک هدیه نیست، بلکه جرقه‌ای از امید است که به کودک قدرت مبارزه با بیماری را می‌دهد.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "جامعه‌محوری",
      desc: "ما با تکیه بر قدرت خرد جمعی و مشارکت داوطلبان، زنجیره‌ای از عشق در سراسر کشور ساخته‌ایم.",
      icon: <Users className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="About Us Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-[#1D264F]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-2xl text-blue-200 text-sm font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star size={18} className="text-yellow-400" fill="currentColor" />
            شناسنامه بنیاد آرزوها
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 max-w-4xl drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            ما برای <span className="text-orange-500">لبخند</span> آن‌ها <br className="hidden md:block" /> دنیایی ساخته‌ایم
          </h1>
          
          <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000">
            روایتی از عشق، پشتکار و باوری عمیق به اینکه هیچ آرزویی برای برآورده شدن، بزرگ نیست.
          </p>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-blue-900/5 border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right">
              <div className="flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest mb-2">
                <div className="w-12 h-0.5 bg-blue-600"></div>
                داستان پیدایش ما
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 leading-tight">
                چرا بنیاد آرزوها <br />
                <span className="text-orange-500">متولد شد؟</span>
              </h2>
              <div className="text-gray-600 text-lg leading-[2.2] text-justify font-medium space-y-6">
                <p>
                  بنیاد آرزوها فقط یک سازمان خیریه نیست.
                  این یک حرکت انسانی است؛ تلاشی برای تبدیل عشقِ ناتمام به امیدی بی‌پایان. ما با این باور آغاز کردیم که تحقق یک آرزو می‌تواند فراتر از یک لحظه شادی باشد؛ می‌تواند امید را در دل کودک زنده کند، روحیه او را تقویت کند و حتی توان درونی‌اش را برای مبارزه با بیماری افزایش دهد.
                </p>
                <p>
                  اینجا جایی است که آرزوها جدی گرفته می‌شوند، لبخندها معنا پیدا می‌کنند و کودکان یاد می‌گیرند که هنوز دلیلی برای رؤیا دیدن وجود دارد؛ دلیلی برای ادامه دادن، قوی‌تر شدن و باور به فردا.
                </p>
                <p className="font-black text-blue-900">
                  شاید قرار نبود پدرِ یک کودک باشم… <br />
                  اما امروز با افتخار می‌گویم: <br />
                  بنیاد آرزوها، تلاشی است برای پدر بودن در مقیاس امید.
                </p>
              </div>
              <div className="bg-blue-50/50 p-8 rounded-3xl border-r-4 border-blue-800 italic text-blue-900 relative">
                <Quote className="absolute top-4 left-4 text-blue-100 w-16 h-16 -z-10" />
                "ما آرزوها را نمی‌خریم، ما لحظات جادویی می‌سازیم که تا ابد در قلب کودک و خانواده‌اش باقی می‌ماند."
                <div className="mt-4 text-xs font-black text-blue-400">— مدیریت بنیاد آرزوها</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-orange-200 rounded-[3.5rem] -z-10"></div>
              <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Team Interaction" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:block">
                 <div className="flex items-center gap-4 mb-2">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                       <Award size={28} />
                    </div>
                    <div>
                       <div className="text-blue-900 font-black text-xl">۸ سال</div>
                       <div className="text-gray-400 text-xs font-bold">خدمت عاشقانه</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-blue-900">ارزش‌های محوری ما</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">اصولی که هرگز در مسیر برآورده کردن آرزوها از آن‌ها عدول نمی‌کنیم.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((val, i) => (
              <div key={i} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center space-y-6">
                <div className={`${val.bg} ${val.color} p-6 rounded-[2rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {val.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#1D264F] p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden group">
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10 space-y-8">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-400">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black">ماموریت ما</h3>
              <p className="text-blue-100/70 text-lg leading-loose font-medium text-justify">
                ماموریت ما شناسایی و برآورده کردن آرزوهای قلبی کودکانی است که با بیماری‌های سخت دست و پنجه نرم می‌کنند. ما تلاش می‌کنیم تا با ایجاد تجربه‌ای منحصربه‌فرد، لبخند را به لبان آن‌ها بازگردانیم و به آن‌ها یادآوری کنیم که قهرمان زندگی خود هستند.
              </p>
              <ul className="space-y-4 pt-4">
                 {["شناسایی دقیق کودکان واجد شرایط", "اجرای ایمن و با کیفیت آرزوها", "حمایت روانی از خانواده‌ها"].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm font-bold text-blue-200">
                     <CheckCircle2 size={18} className="text-orange-500" />
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-gray-100 shadow-xl relative overflow-hidden group">
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-orange-50 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10 space-y-8 text-right">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 mr-auto">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-blue-900">چشم‌انداز ما</h3>
              <p className="text-gray-500 text-lg leading-loose font-medium text-justify">
                ما دنیایی را متصوریم که در آن هیچ کودکی به دلیل بیماری، آرزوهایش را فراموش نکند. چشم‌انداز ما تبدیل شدن به مرجع اصلی تحقق آرزوها در خاورمیانه و گسترش شبکه داوطلبان به دورترین نقاط کشور است تا هیچ لبخندی به دلیل دوری راه خاموش نماند.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                 <div className="bg-gray-50 p-6 rounded-3xl text-center">
                    <Globe2 className="mx-auto text-blue-600 mb-2" />
                    <div className="text-blue-900 font-black">شبکه سراسری</div>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-3xl text-center">
                    <Activity className="mx-auto text-orange-500 mb-2" />
                    <div className="text-blue-900 font-black">تاثیر درمانی</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Teaser */}
      <section className="py-20 bg-white border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-right space-y-2">
              <h2 className="text-3xl font-black text-blue-900">تاثیری که با هم ساخته‌ایم</h2>
              <p className="text-gray-400 font-bold">اعداد فقط بخش کوچکی از داستان ما هستند.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
               <div className="text-center">
                  <div className="text-4xl font-black text-blue-900 tracking-tighter">۵۰۰+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase">آرزوی برآورده شده</div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black text-blue-900 tracking-tighter">۲۵۰۰+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase">داوطلب فعال</div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black text-blue-900 tracking-tighter">۳۰+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase">شهر تحت پوشش</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-32 max-w-5xl mx-auto px-6 text-center">
         <div className="bg-gradient-to-br from-blue-900 to-[#1D264F] p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-blue-900/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
               <Sparkles className="absolute top-10 left-10 w-32 h-32 text-orange-400" />
               <Heart className="absolute bottom-10 right-10 w-48 h-48 text-white" fill="currentColor" />
            </div>
            <div className="relative z-10 space-y-8">
               <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">آیا می‌خواهید بخشی از این <br /> داستان جادویی باشید؟</h2>
               <p className="text-blue-100/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                  ما همیشه به دنبال دست‌های مهربان و قلب‌های بزرگ هستیم. شما می‌توانید با وقت، مهارت یا کمک مالی خود، معجزه بسازید.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                  <Link to="/donate" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3">
                     حمایت مالی می‌کنم
                     <Heart size={20} fill="currentColor" />
                  </Link>
                  <Link to="/volunteer" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-[2rem] font-black text-lg transition-all backdrop-blur-md flex items-center justify-center gap-3">
                     داوطلب می‌شوم
                     <Users size={20} />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutUs;
