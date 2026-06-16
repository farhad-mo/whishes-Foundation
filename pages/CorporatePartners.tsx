
import React, { useEffect } from 'react';
import { 
  Building2, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Handshake, 
  Users2, 
  Award, 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare,
  BarChart3,
  Globe2,
  Briefcase,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporatePartners: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "ارتقای برند و اعتبار اجتماعی",
      desc: "اتصال نام برند شما به جادوی برآورده کردن آرزوها، تصویری انسانی و دلسوز از کسب‌وکار شما در ذهن مخاطب می‌سازد.",
      icon: <Award className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "افزایش وفاداری مشتریان",
      desc: "مشتریان امروز ترجیح می‌دهند از برندهایی خرید کنند که در حل چالش‌های اجتماعی سهیم هستند.",
      icon: <Target className="w-8 h-8" />,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "توسعه روحیه تیمی کارکنان",
      desc: "مشارکت کارکنان در پروژه‌های خیریه، حس غرور ملی و رضایت شغلی آن‌ها را به طرز چشمگیری افزایش می‌دهد.",
      icon: <Users2 className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "گزارشگری شفاف CSR",
      desc: "ارائه مستندات و داده‌های دقیق از تاثیر اجتماعی کمک‌های شما برای استفاده در گزارش‌های سالانه و تبلیغاتی.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  const models = [
    {
      title: "حمایت از یک آرزوی خاص",
      desc: "برند شما می‌تواند اسپانسر کامل تحقق آرزوی یک کودک شود و تمام مراحل از ابتدا تا انتها با نام برند شما ثبت گردد.",
      icon: <Handshake />
    },
    {
      title: "بازاریابی خیرخواهانه (CRM)",
      desc: "تخصیص درصدی از فروش یک محصول یا خدمت خاص به نفع کودکان بنیاد آرزوها در یک بازه زمانی مشخص.",
      icon: <TrendingUp />
    },
    {
      title: "تسهیلات و خدمات تخصصی",
      desc: "ارائه خدمات رایگان یا با تخفیف ویژه (مثل پرواز، هتل، تجهیزات دیجیتال) که در تحقق آرزوها حیاتی هستند.",
      icon: <Briefcase />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Corporate Partnership"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-2xl text-blue-200 text-sm font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Building2 size={18} />
            شراکت استراتژیک و انسانی
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            در این سفر جذاب <span className="text-orange-500">شریک ما</span> شوید
          </h1>
          
          <p className="text-blue-100/80 text-xl md:text-2xl font-bold mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            ما معتقدیم همکاری با کسب‌وکارها، فراتر از یک کمک مالی، یک سرمایه‌گذاری بر روی امید و آینده است.
          </p>

          <a href="#contact-form" className="bg-white text-blue-900 px-12 py-5 rounded-[2.5rem] font-black text-xl transition-all shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-3">
            شروع گفتگو تجاری
            <ChevronLeft size={24} />
          </a>
        </div>
      </section>

      {/* Intro: The Power of Partnership */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-xl shadow-blue-900/5 border border-gray-50 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 text-right">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 leading-tight">
              قدرت همکاری در <br />
              <span className="text-blue-600">ایجاد تغییرات ماندگار</span>
            </h2>
            <div className="h-1.5 w-24 bg-orange-500 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-[2.2] text-justify font-medium">
              بنیاد آرزوها مفتخر است که با مجموعه‌ای از پیشروترین کسب‌وکارهای کشور همکاری می‌کند. شراکت با ما به معنای پیوستن به جریانی است که در آن تخصص و منابع شما، مستقیماً به لبخند یک کودک قهرمان تبدیل می‌شود. ما پلتفرمی فراهم کرده‌ایم که برند شما بتواند مسئولیت اجتماعی خود را به شکلی خلاقانه، شفاف و با بیشترین تاثیرگذاری ممکن ایفا کند.
            </p>
            <div className="flex items-center gap-4 text-blue-900 font-black">
              <Globe2 className="text-orange-500" />
              شبکه بین‌المللی از حامیان و شرکای تجاری
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Meeting" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl -rotate-3 transition-transform hover:rotate-0 mt-12">
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Teamwork" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-blue-900">مزایای شراکت با بنیاد آرزوها</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">چرا برندهای پیشرو ما را انتخاب می‌کنند؟</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex gap-8 group">
                <div className={`${benefit.bg} ${benefit.color} p-6 rounded-3xl h-fit transition-transform group-hover:scale-110`}>
                  {benefit.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-blue-900">{benefit.title}</h3>
                  <p className="text-gray-500 leading-loose font-medium text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models of Cooperation */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-blue-900">روش‌های مشارکت تجاری</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <div key={i} className="relative group overflow-hidden bg-white p-12 rounded-[3.5rem] border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-8">
                {React.cloneElement(model.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-2xl font-black text-blue-900 mb-6">{model.title}</h4>
              <p className="text-gray-500 leading-loose font-medium mb-8">
                {model.desc}
              </p>
              <button className="flex items-center gap-2 text-blue-900 font-black text-sm group-hover:gap-4 transition-all">
                دریافت پروپوزال همکاری
                <ArrowLeft size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 bg-[#1D264F] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Globe2 className="absolute top-10 left-10 w-64 h-64" />
           <Building2 className="absolute bottom-10 right-20 w-48 h-48" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl font-black">گفتگو را آغاز کنیم</h2>
             <p className="text-blue-200/60 text-lg">تیم روابط تجاری ما در کوتاه‌ترین زمان با شما تماس خواهد گرفت.</p>
          </div>

          <div className="bg-white rounded-[3.5rem] p-10 md:p-16 text-blue-900 shadow-2xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-black mr-2">نام سازمان / برند</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right" placeholder="مثلاً: هلدینگ پارس" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black mr-2">نام رابط مستقیم</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right" placeholder="مثلاً: علیرضا محمدی" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black mr-2">شماره تماس (ترجیحاً مستقیم)</label>
                <input type="tel" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right" dir="ltr" placeholder="۰۹۱۲..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black mr-2">زمینه فعالیت</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right" placeholder="مثلاً: فناوری اطلاعات" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-black mr-2">پیام یا ایده اولیه همکاری</label>
                <textarea className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right h-32 resize-none" placeholder="تمایل دارید در چه زمینه‌ای با ما همکاری کنید؟"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl transition-all flex items-center justify-center gap-3">
                  ارسال درخواست همکاری
                  <CheckCircle2 size={24} />
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10 text-blue-200/50 text-sm font-bold">
             <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                اطلاعات شما نزد ما محفوظ است
             </div>
             <div className="flex items-center gap-2">
                <MessageSquare size={20} />
                پاسخگویی در کمتر از ۲۴ ساعت کاری
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePartners;
