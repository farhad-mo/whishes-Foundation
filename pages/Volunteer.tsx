
import React, { useEffect, useState } from 'react';
import { 
  Users, 
  Star, 
  Heart, 
  Sparkles, 
  Camera, 
  Brush, 
  Globe, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft,
  MessageCircle,
  Clock,
  Award,
  ChevronLeft,
  Quote,
  X,
  User,
  Phone,
  Mail,
  FileText,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Volunteer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opportunities = [
    {
      title: "آرزو دهنده",
      icon: <Sparkles className="w-10 h-10" />,
      color: "text-orange-50",
      bg: "bg-orange-50",
      desc: "اهداکنندگان آرزوها با کودکان آرزومند و خانواده‌هایشان ملاقات می‌کنند و به کودکان در تعیین آرزو کمک می‌کنند. آنها همچنین در طول فرآیند اهدا آرزوها در کنار کارکنان بنیاد و خانواده‌های آرزوکننده همکاری می‌کنند."
    },
    {
      title: "داوطلب رویدادها",
      icon: <Calendar className="w-10 h-10" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      desc: "داوطلبان رویدادهای ویژه با کار در کمیته‌های رویداد، کمک در روز رویداد و/یا شرکت در خود رویداد، رویدادهای موفق جمع‌آوری کمک‌های مالی را برنامه‌ریزی، سازماندهی و اجرا می‌کنند."
    },
    {
      title: "داوطلب مبتنی بر مهارت",
      icon: <Brush className="w-10 h-10" />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      desc: "از مهارت‌های خود در صورت نیاز استفاده کنید. این داوطلب باید دانش حرفه‌ای داشته باشد. مهارت‌های مورد نیاز شامل عکاسی، طراحی گرافیک، نجاری، طراحی داخلی و موارد دیگر می‌شود."
    },
    {
      title: "سفیر رسانه‌های اجتماعی",
      icon: <Globe className="w-10 h-10" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      desc: "با اشتراک‌گذاری داستان‌های آرزوها و کمپین‌های بنیاد در شبکه‌های اجتماعی، به ما کمک کنید تا پیام امید را به گوش افراد بیشتری برسانیم و حامیان جدیدی جذب کنیم."
    },
    {
      title: "پشتیبان اداری و لجستیک",
      icon: <Award className="w-10 h-10" />,
      color: "text-rose-600",
      bg: "bg-rose-50",
      desc: "به تیم اجرایی ما در سازماندهی پرونده‌ها، هماهنگی‌های تلفنی با تامین‌کنندگان و آماده‌سازی بسته‌های غافلگیری برای کودکان کمک کنید."
    },
    {
      title: "مترجم و همراه فرهنگی",
      icon: <MessageCircle className="w-10 h-10" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      desc: "برای خانواده‌هایی که از مناطق مختلف یا با زبان‌های متفاوت به مراکز درمانی مراجعه می‌کنند، نقش تسهیل‌گر و همراه را ایفا کنید تا فرآیند ثبت آرزو برایشان آسان‌تر شود."
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1559023953-a1292833075b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            alt="Volunteers"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-2xl text-orange-200 text-sm font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Heart size={18} fill="currentColor" />
            به خانواده بزرگ ما بپیوندید
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            داوطلب شوید و به یک جامعه دلسوز بپیوندید که <span className="text-orange-500">زندگی‌ها</span> را متحول می‌کنند.
          </h1>
          
          <p className="text-blue-100/80 text-xl md:text-2xl font-bold mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            تو می‌توانی آرزوها را برآورده کنی. از همین امروز شروع کن!
          </p>

          <button 
            onClick={handleOpenModal}
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-[2.5rem] font-black text-xl transition-all shadow-2xl shadow-orange-500/40 hover:-translate-y-1 active:scale-95 flex items-center gap-3"
          >
            ثبت‌نام به عنوان داوطلب
            <ChevronLeft size={24} />
          </button>
        </div>
      </section>

      {/* Intro Section: Making Hope and Smiles */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-orange-200 rounded-[3rem] -z-10"></div>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
                    alt="Helping Hands" 
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-[240px] animate-bounce-slow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                      <Heart size={24} fill="currentColor" />
                    </div>
                    <span className="text-blue-900 font-black text-lg">قلب تپنده</span>
                  </div>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed">
                    داوطلبان ما فراتر از یک همکار، روحِ جاری در رگ‌های هر آرزو هستند.
                  </p>
                </div>
                <div className="absolute top-1/4 -right-16 w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-white shadow-2xl overflow-hidden hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Happy Child"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10 text-right">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest mb-2">
                  <div className="w-12 h-0.5 bg-blue-600"></div>
                  ساخت امید و لبخند
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
                  جایی که <span className="text-orange-500">استعدادهای شما</span> <br />
                  معجزه می‌آفرینند
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-10 -right-12 text-blue-50 w-24 h-24 -z-10" />
                <p className="text-gray-600 text-lg md:text-xl leading-[2.2] text-justify font-medium">
                  زمان، انرژی و استعدادهای شما می‌تواند نقشی تعیین‌کننده در ساختن امید و لبخند برای کودکانی داشته باشد که در مسیر سخت درمان و زندگی قدم برمی‌دارند. داوطلبان «بنیاد آرزوها» فعالیت خود را فراتر از یک همکاری ساده می‌دانند؛ آن‌ها بخشی از قلب هر تجربه آرزویی هستند و در تحقق رؤیاهای کودکان نقش مستقیم و معنادار ایفا می‌کنند.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="bg-blue-50/50 p-6 rounded-3xl border-r-4 border-blue-800">
                  <p className="text-blue-900 text-sm md:text-base font-bold leading-loose">
                    شما به‌عنوان داوطلب این امکان را دارید که با توجه به توانمندی‌ها، علاقه‌مندی‌ها و زمان در دسترس خود، شیوه مشارکتتان را انتخاب کنید.
                  </p>
                </div>
                <div className="bg-orange-50/50 p-6 rounded-3xl border-r-4 border-orange-500">
                  <p className="text-orange-900 text-sm md:text-base font-bold leading-loose">
                    به شکلی انعطاف‌پذیر و اثرگذار، تغییری واقعی در زندگی کودکان و خانواده‌هایشان ایجاد نمایید و بخشی از این جادوی ماندگار باشید.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                {["مشارکت انعطاف‌پذیر", "اثرگذاری مستقیم", "رشد توانمندی‌ها"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-blue-900 font-black text-sm">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-blue-900">فرصت‌های داوطلبانه</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">نقش خود را در این سفر جادویی انتخاب کنید</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {opportunities.map((item, i) => (
              <div key={i} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center space-y-6">
                <div className={`${item.bg} ${item.color} p-6 rounded-[2rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm">
                  {item.desc}
                </p>
                <div className="pt-4 mt-auto">
                   <button onClick={handleOpenModal} className={`text-sm font-black flex items-center gap-2 ${item.color} group-hover:underline`}>
                     انتخاب این فرصت
                     <ArrowLeft size={16} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us & Steps */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 md:order-1">
             {[
               { icon: <CheckCircle2 size={32} />, title: "رشد شخصی و حرفه‌ای", desc: "مهارت‌های ارتباطی و تخصصی خود را در یک محیط پویا و انسانی ارتقا دهید.", color: "bg-blue-100 text-blue-600" },
               { icon: <Sparkles size={32} />, title: "خلق خاطرات ابدی", desc: "شاهد لحظاتی خواهید بود که قیمت ندارند؛ لحظاتی که یک رویا به واقعیت تبدیل می‌شود.", color: "bg-orange-100 text-orange-600" },
               { icon: <Users size={32} />, title: "شبکه‌سازی دلسوزانه", desc: "با افرادی آشنا شوید که مانند شما به دنبال ایجاد تغییری مثبت در جهان هستند.", color: "bg-green-100 text-green-600" }
             ].map((benefit, idx) => (
               <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex gap-6">
                 <div className={`${benefit.color} p-4 rounded-2xl flex-shrink-0`}>{benefit.icon}</div>
                 <div className="space-y-2">
                    <h4 className="text-xl font-black text-blue-900">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                 </div>
               </div>
             ))}
          </div>
          <div className="space-y-8 order-1 md:order-2 text-right">
             <h2 className="text-4xl font-black text-blue-900">چرا همراه ما باشید؟</h2>
             <p className="text-gray-600 text-lg leading-loose font-medium text-justify">
               پیوستن به بنیاد آرزوها به عنوان داوطلب، تنها یک کار داوطلبانه نیست؛ بلکه سفری است که در آن خودتان نیز تغییر می‌کنید. شما قدرت نهفته در مهربانی را کشف خواهید کرد و متوجه می‌شوید که چگونه یک اقدام کوچک می‌تواند کوهی از ناامیدی را جابجا کند.
             </p>
             <Link to="/gallery" className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-500 transition-all group">
                مشاهده لبخندهای ساخته شده
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1D264F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl font-black">مراحل پیوستن به تیم جادو</h2>
             <p className="text-blue-200/60 text-lg">چگونه از امروز سفر خود را آغاز کنید</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-white/10 -translate-y-1/2"></div>
            {[
              { step: "۰۱", title: "ثبت‌نام آنلاین", desc: "فرم اولیه داوطلبی را در وب‌سایت تکمیل کنید." },
              { step: "۰۲", title: "مصاحبه و آموزش", desc: "در یک جلسه صمیمانه شرکت کرده و با اصول بنیاد آشنا شوید." },
              { step: "۰۳", title: "آغاز جادو", desc: "به یکی از پروژه‌های فعال بپیوندید و لبخند بسازید." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-[2rem] flex items-center justify-center text-2xl font-black shadow-2xl shadow-orange-500/50 relative z-10">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black">{step.title}</h4>
                  <p className="text-blue-100/50 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <button 
              onClick={handleOpenModal}
              className="bg-white text-blue-900 px-16 py-6 rounded-[2.5rem] font-black text-xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl"
            >
              همین حالا درخواست بدهید
            </button>
          </div>
        </div>
      </section>

      {/* Volunteer Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-blue-900/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 left-6 text-gray-400 hover:text-blue-900 p-2 transition-colors z-20"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="bg-blue-50/50 p-8 pb-12 border-b border-gray-100">
               {!isSubmitted ? (
                 <div className="flex flex-col items-center text-center space-y-3">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600 mb-2">
                      <Heart size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-2xl font-black text-blue-900">فرم عضویت در تیم جادو</h3>
                    <div className="flex items-center gap-4 mt-4">
                       <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-800' : 'text-gray-300'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${step >= 1 ? 'bg-blue-800 text-white border-blue-800' : 'border-gray-200'}`}>۱</div>
                          <span className="text-xs font-black">اطلاعات فردی</span>
                       </div>
                       <div className="w-12 h-0.5 bg-gray-100"></div>
                       <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-800' : 'text-gray-300'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${step >= 2 ? 'bg-blue-800 text-white border-blue-800' : 'border-gray-200'}`}>۲</div>
                          <span className="text-xs font-black">انتخاب فرصت</span>
                       </div>
                    </div>
                 </div>
               ) : (
                 <div className="flex flex-col items-center text-center space-y-4 py-6">
                    <div className="bg-green-100 p-4 rounded-full text-green-600 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-blue-900">درخواست شما ثبت شد!</h3>
                 </div>
               )}
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-10">
              {!isSubmitted ? (
                <>
                  {step === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-left-4 duration-300">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-blue-900 mr-2 flex items-center gap-2">
                          <User size={16} /> نام و نام خانوادگی
                        </label>
                        <input 
                          type="text" 
                          placeholder="مثلاً: علی رضایی"
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-blue-900 mr-2 flex items-center gap-2">
                          <Phone size={16} /> شماره همراه
                        </label>
                        <input 
                          type="tel" 
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          dir="ltr"
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-blue-900 mr-2 flex items-center gap-2">
                          <Mail size={16} /> ایمیل
                        </label>
                        <input 
                          type="email" 
                          placeholder="example@mail.com"
                          dir="ltr"
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right"
                        />
                      </div>
                      <button 
                        onClick={() => setStep(2)}
                        className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 mt-8"
                      >
                        مرحله بعد
                        <ChevronLeft size={20} />
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-blue-900 mr-2 flex items-center gap-2">
                          <Sparkles size={16} /> انتخاب فرصت داوطلبانه
                        </label>
                        <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-black focus:ring-2 focus:ring-blue-100 transition-all text-right appearance-none cursor-pointer">
                           <option value="">انتخاب کنید...</option>
                           <option value="wish_granter">آرزو دهنده</option>
                           <option value="events">داوطلب رویدادها</option>
                           <option value="skilled">داوطلب مبتنی بر مهارت</option>
                           <option value="social">سفیر رسانه‌های اجتماعی</option>
                           <option value="admin">پشتیبان اداری</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-blue-900 mr-2 flex items-center gap-2">
                          <FileText size={16} /> توضیحات (مهارت‌ها و تجربیات)
                        </label>
                        <textarea 
                          placeholder="درباره خودتان و مهارتی که می‌توانید با آن به ما کمک کنید بنویسید..."
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right h-32 resize-none"
                        ></textarea>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <button 
                          onClick={() => setStep(1)}
                          className="flex-1 bg-gray-100 text-blue-900 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3"
                        >
                          <ChevronRight size={20} />
                          برگشت
                        </button>
                        <button 
                          onClick={() => setIsSubmitted(true)}
                          className="flex-[2] bg-orange-500 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3"
                        >
                          ارسال درخواست
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                   <p className="text-gray-500 text-lg leading-relaxed font-medium">
                     از اینکه آمادگی خود را برای پیوستن به خانواده بنیاد آرزوها اعلام کردید، سپاسگزاریم. کارشناسان ما پس از بررسی اولیه، با شما تماس خواهند گرفت.
                   </p>
                   <button 
                     onClick={() => setIsModalOpen(false)}
                     className="bg-blue-900 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-xl"
                   >
                     بستن پنجره
                   </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Support */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
         <div className="bg-blue-50 p-10 md:p-16 rounded-[4rem] border border-blue-100 space-y-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-black text-blue-900">سوالی دارید؟</h3>
            <p className="text-gray-500 font-medium">تیم پشتیبانی داوطلبان ما آماده پاسخگویی به شماست.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
               <div className="bg-white px-6 py-4 rounded-2xl shadow-sm font-bold text-blue-900 border border-gray-50 flex items-center gap-3 justify-center">
                 <span dir="ltr">۰۲۱-۸۸۸۸۸۸۸۸</span>
               </div>
               <div className="bg-white px-6 py-4 rounded-2xl shadow-sm font-bold text-blue-900 border border-gray-50 flex items-center gap-3 justify-center">
                 volunteer@arezooha.ir
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Volunteer;
