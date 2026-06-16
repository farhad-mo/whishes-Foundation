
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Users, 
  Activity, 
  ClipboardCheck, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  ChevronLeft,
  ArrowLeft,
  Heart,
  UserPlus,
  Plane,
  Briefcase,
  Gift,
  Smile,
  X,
  Stethoscope,
  Home,
  ChevronRight,
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Stethoscope as StethIcon,
  CheckCircle,
  BriefcaseMedical,
  Hospital,
  ShieldAlert,
  MessageSquareText,
  Send,
  UserCheck,
  ListChecks,
  FileSearch,
  Wand2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SubmitWish: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [showFamilyForm, setShowFamilyForm] = useState(false);
  const [showMedicalForm, setShowMedicalForm] = useState(false);
  const [showOtherForm, setShowOtherForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form States
  const [relation, setRelation] = useState('');
  const [medicalField, setMedicalField] = useState('');
  const [department, setDepartment] = useState('');

  // Auto-open specific forms based on URL query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type === 'family') setShowFamilyForm(true);
    if (type === 'medical') setShowMedicalForm(true);
    if (type === 'other') setShowOtherForm(true);
  }, [location.search]);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showOtherForm) {
      setIsSubmitted(true);
    } else {
      if (currentStep === 4) {
        setIsSubmitted(true);
        setCurrentStep(5);
      } else {
        nextStep();
      }
    }
  };

  const closeModals = () => {
    setIsReferralModalOpen(false);
    setShowFamilyForm(false);
    setShowMedicalForm(false);
    setShowOtherForm(false);
    setCurrentStep(1);
    setIsSubmitted(false);
    setRelation('');
    setMedicalField('');
    setDepartment('');
  };

  const tabs = [
    { 
      id: 0, 
      label: 'یک کودک چه آرزویی دارد؟', 
      icon: <Sparkles size={20} />,
      content: (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Star size={14} fill="currentColor" />
              دنیای بی‌پایان رویاها
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
              آرزوها از قلب‌های کوچک جوانه می‌زنند
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-loose font-medium max-w-2xl mx-auto">
              تخیل کودک، تنها نیروی محرکه در طراحی و خلق یک تجربه آرزوی تغییر دهنده زندگی است. ما معتقدیم هیچ آرزویی برای برآورده شدن، بزرگ یا کوچک نیست.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "می‌خواهم بروم", icon: <Plane className="w-8 h-8" />, color: "text-blue-600", bg: "bg-blue-50/50", border: "hover:border-blue-200", desc: "سفرهای ماجراجویانه به سرزمین‌های دور و نزدیک." },
              { title: "می‌خواهم باشم", icon: <Briefcase className="w-8 h-8" />, color: "text-orange-600", bg: "bg-orange-50/50", border: "hover:border-orange-200", desc: "تجربه یک روز در نقش یک قهرمان یا متخصص محبوب." },
              { title: "می‌خواهم داشته باشم", icon: <Gift className="w-8 h-8" />, color: "text-purple-600", bg: "bg-purple-50/50", border: "hover:border-purple-200", desc: "هدایای خاصی که سال‌ها لبخند را حفظ می‌کنند." },
              { title: "می‌خواهم ببینم", icon: <Smile className="text-emerald-600 w-8 h-8" />, color: "text-emerald-600", bg: "bg-emerald-50/50", border: "hover:border-emerald-200", desc: "ملاقات صمیمانه با مشاهیر و اسطوره‌های زندگی." },
            ].map((cat, i) => (
              <div key={i} className={`group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 ${cat.border} transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col items-center text-center space-y-6 overflow-hidden`}>
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${cat.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className={`relative w-20 h-20 rounded-[1.75rem] ${cat.bg} ${cat.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {cat.icon}
                </div>
                <div className="relative space-y-3">
                  <h4 className="text-xl font-black text-blue-900 group-hover:text-blue-800 transition-colors">{cat.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1D264F] rounded-[3rem] p-8 md:p-14 relative overflow-hidden text-white shadow-2xl">
            <Star className="absolute top-10 right-10 w-64 h-64 text-white/5 -rotate-12 pointer-events-none" fill="currentColor" />
            
            <div className="relative z-10">
              <div className="flex justify-start mb-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full flex items-center gap-2 text-xs font-black text-blue-200">
                  <Info size={16} className="text-orange-500" />
                  تحلیل علمی تاثیر آرزو
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 lg:order-1 text-right space-y-8">
                  <h3 className="text-3xl md:text-5xl font-black leading-tight">
                    چرا تحقق یک <span className="text-orange-500">آرزو</span> تا این حد حیاتی است؟
                  </h3>
                  <p className="text-blue-100/70 text-lg md:text-xl leading-loose font-medium text-justify">
                    تحقق یک آرزو، تنها یک لحظه شاد گذرا نیست؛ بلکه یک نقطه عطف در مسیر درمان کودک است. آرزوها به کودکان کمک می‌کنند تا فراتر از محدودیت‌های بیماری خود را ببینند و به خانواده‌ها قدرت مبارزه دوباره می‌بخشند.
                  </p>
                </div>

                <div className="order-2 lg:order-2 space-y-6">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] flex items-center justify-between group hover:bg-white/10 transition-all duration-500">
                    <div className="text-right">
                      <div className="text-blue-100/60 text-sm font-black mb-1">بهبود روحیه و</div>
                      <div className="text-blue-100/60 text-sm font-black">کاهش استرس خانواده</div>
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-orange-500">۹۸٪</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] flex items-center justify-between group hover:bg-white/10 transition-all duration-500">
                    <div className="text-right">
                      <div className="text-blue-100/60 text-sm font-black mb-1">افزایش امید و</div>
                      <div className="text-blue-100/60 text-sm font-black">پذیرش پروتکل‌های درمانی</div>
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-blue-400">۸۵٪</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 1, 
      label: 'چه کسی واجد شرایط است؟', 
      icon: <Activity size={20} />,
      content: (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "بیماری بحرانی", desc: "تشخیص یک بیماری پیش‌رونده، دژنراتیو یا بدخیم که زندگی کودک را در معرض خطر قرار می‌دهد.", icon: <Activity className="text-red-500" /> },
              { title: "محدوده سنی", desc: "سن کودک در زمان ارجاع باید بیش از ۲.۵ سال و کمتر از ۱۸ سال باشد.", icon: <UserPlus className="text-blue-500" /> },
              { title: "اولین آرزو", desc: "کودک نباید قبلاً از سازمان دیگری درخواست مشابهی دریافت کرده باشد.", icon: <Star className="text-yellow-500" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="bg-gray-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                <h4 className="font-black text-blue-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-sm">
            <p className="text-gray-600 text-lg leading-[2.2] text-justify font-medium">
              کودکانی واجد شرایط دریافت خدمات بنیاد آرزوها هستند که شرایط پزشکی آن‌ها توسط پزشک معالج یا مرکز درمانی معتبر تأیید شده باشد و امکان اجرای آرزو بدون به خطر افتادن سلامت جسمی یا روانی کودک وجود داشته باشد. ثبت درخواست باید با رضایت کامل والدین یا سرپرست قانونی انجام شود و کودک در حد توان خود قادر به بیان علاقه و آرزوی شخصی‌اش باشد تا تجربه‌ای واقعی، انسانی و متناسب با شرایط او شکل بگیرد. همچنین درخواست‌ها بر اساس میزان فوریت پزشکی، شرایط روحی کودک و ظرفیت اجرایی بنیاد بررسی و اولویت‌بندی می‌شوند تا آرزوها به منصفانه‌ترین و مؤثرترین شکل ممکن تحقق پیدا کنند.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem] flex items-start gap-5">
            <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-600/20">
              <Info size={24} />
            </div>
            <p className="text-blue-900 text-base md:text-lg font-black leading-relaxed">
              معیارهای پزشکی توسط تیم متخصص بنیاد و با مشورت پزشکان معالج کودک بررسی نهایی می‌شوند تا اطمینان حاصل شود که آرزو در ایمن‌ترین حالت ممکن برآورده می‌شود.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      label: 'چه کسی می‌تواند ارجاع دهد؟',
      icon: <UserCheck size={20} />,
      content: (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-3xl mx-auto text-center space-y-4">
             <h3 className="text-2xl font-black text-blue-900">ارجاع‌دهندگان مجاز</h3>
             <p className="text-gray-500 font-medium">ما اطلاعات مربوط به ارجاع را فقط از منابع زیر می‌پذیریم تا از صحت شرایط اطمینان حاصل کنیم.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "متخصصان پزشکی", desc: "پزشکان، پرستاران، مددکاران اجتماعی یا متخصصان زندگی کودک که از نزدیک با شرایط بیمار آشنا هستند.", icon: <StethIcon className="text-blue-600" /> },
              { title: "والدین و سرپرستان", desc: "پدر، مادر یا سرپرست قانونی کودک که اطلاعات کامل پزشکی و اجازه رسمی برای معرفی دارند.", icon: <Home className="text-orange-500" /> },
              { title: "خودِ کودک", desc: "کودکانی که دارای بیماری بحرانی هستند و سن آن‌ها به حد قانونی برای بیان آرزو رسیده است.", icon: <Star className="text-purple-600" fill="currentColor" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 text-center space-y-6 shadow-sm group hover:shadow-xl transition-all">
                <div className="bg-gray-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-black text-blue-900 text-xl">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      label: 'روند کار چیست؟',
      icon: <ListChecks size={20} />,
      content: (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-5xl mx-auto relative px-4">
            {/* The Subtle Timeline Line */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-blue-50/50"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
              {[
                { step: "۰۱", title: "معرفی", desc: "کودک توسط پزشک یا خانواده به بنیاد معرفی می‌شود.", icon: <UserPlus /> },
                { step: "۰۲", title: "بررسی شرایط", desc: "تیم پزشکی بنیاد واجد شرایط بودن کودک را تایید می‌کند.", icon: <FileSearch /> },
                { step: "۰۳", title: "کشف آرزو", desc: "داوطلبان ما با کودک ملاقات کرده تا آرزوی واقعی او را بیابند.", icon: <Star fill="currentColor" /> },
                { step: "۰۴", title: "طراحی و اجرا", desc: "تیم اجرایی مقدمات لازم برای تحقق آرزو را فراهم می‌کند.", icon: <Wand2 /> },
                { step: "۰۵", title: "تحقق جادو", desc: "آرزوی کودک به زیباترین شکل ممکن برآورده می‌شود.", icon: <CheckCircle2 /> }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center group">
                  {/* Icon Container with Subtle Squircle Shape */}
                  <div className="relative z-10 mb-8">
                    <div className="w-20 h-20 bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center text-blue-800 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-110 group-hover:border-blue-100">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 30, strokeWidth: 1.5 })}
                    </div>
                    {/* Minimal Step Label */}
                    <div className="absolute -top-2 -right-2 bg-blue-900 text-white text-[10px] font-black w-8 h-8 rounded-xl flex items-center justify-center border-4 border-white shadow-md">
                      {item.step}
                    </div>
                  </div>

                  {/* Minimal Text Content */}
                  <div className="text-center space-y-3 px-2">
                    <h4 className="text-lg font-black text-blue-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-gray-400 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-blue-50/50 to-orange-50/50 p-12 md:p-16 rounded-[4rem] border border-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <Heart className="absolute -top-10 -left-10 w-40 h-40 text-orange-500 rotate-12" fill="currentColor" />
             </div>
             <Heart className="mx-auto text-orange-500 animate-pulse" size={48} fill="currentColor" />
             <div className="space-y-6 relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-blue-900 leading-tight">
                   آیا کودکی را می‌شناسید که با یک بیماری سخت و طاقت‌فرسا دست‌وپنجه نرم می‌کند؟
                </h3>
                <p className="text-xl font-bold text-blue-800/80">
                   کودکی که در میان درد و درمان، هنوز رویای بزرگی در دل دارد؟
                </p>
                <p className="text-gray-600 text-lg md:text-xl leading-loose font-medium max-w-2xl mx-auto">
                   گاهی فقط یک آرزو، یک لحظه شادی، یا یک تجربه خاص می‌تواند امید را دوباره به قلب او برگرداند و مسیر زندگی‌اش را تغییر دهد.
                </p>
                <div className="h-px w-32 bg-orange-200 mx-auto my-4"></div>
                <p className="text-xl md:text-2xl font-black text-blue-900 leading-relaxed italic">
                   اگر چنین کودکی را می‌شناسید، شما می‌توانید پلی باشید برای رسیدن به لبخندش… همین امروز قدمی برای ساختن فردایی روشن‌تر بردارید.
                </p>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32">
      {/* Visual Hero Section */}
      <section className="relative h-[450px] md:h-[600px] overflow-hidden mb-16">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
          alt="Happy Child" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-blue-900/60 to-transparent flex items-center justify-center text-center">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
               <div className="flex items-center gap-2 text-blue-100/70 text-sm font-bold mb-8">
                <Link to="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
                <ChevronLeft size={14} />
                <span className="text-white">ارجاع کودک</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
                هر مسیر تحقق <span className="text-orange-500">آرزو</span>، با یک معرفی آغاز می‌شود.
              </h1>
              
              <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-8"></div>
              
              <p className="text-blue-50 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
                شما می‌توانید با معرفی یک کودک واجد شرایط، اولین قدم را در مسیر تغییر زندگی او و خانواده‌اش بردارید.
              </p>

              <button 
                onClick={() => setIsReferralModalOpen(true)}
                className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-[2.5rem] font-black text-xl transition-all shadow-2xl shadow-orange-500/50 flex items-center gap-4 hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-colors">
                  <UserPlus size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="relative z-10">ارجاع کودک قهرمان</span>
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Modal */}
      {isReferralModalOpen && !showFamilyForm && !showMedicalForm && !showOtherForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={closeModals}></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button onClick={closeModals} className="absolute top-6 left-6 text-gray-400 hover:text-blue-900 p-2 z-20 transition-colors">
              <X size={28} />
            </button>
            <div className="p-8 md:p-16">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-blue-900">نحوه معرفی کودک</h2>
                <p className="text-gray-500 font-bold">لطفاً وضعیت خود را انتخاب کنید تا به فرم مناسب هدایت شوید</p>
                <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col bg-orange-50/50 rounded-[2.5rem] p-8 border border-orange-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                  <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"><Home size={32} /></div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4">خانواده</h3>
                  <p className="text-gray-600 text-sm leading-loose font-medium flex-grow mb-8">
                    اگر شما والدین/سرپرست قانونی کودک، خود کودک یا یکی از اعضای خانواده هستید که از وضعیت پزشکی فعلی کودک اطلاع دقیقی دارید، از این فرم استفاده کنید.
                  </p>
                  <button onClick={() => setShowFamilyForm(true)} className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors">
                    معرفی یک کودک
                  </button>
                </div>
                <div className="flex flex-col bg-blue-50/50 rounded-[2.5rem] p-8 border border-blue-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                  <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"><Stethoscope size={32} /></div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4">تیم پزشکی</h3>
                  <p className="text-gray-600 text-sm leading-loose font-medium flex-grow mb-8">
                    اگر عضوی از تیم مراقبت‌های بهداشتی کودک مانند پزشک، دستیار پزشک، پرستار، متخصص پرستاری، مددکار اجتماعی یا متخصص زندگی کودک هستید، از این فرم استفاده کنید.
                  </p>
                  <button onClick={() => setShowMedicalForm(true)} className="w-full bg-[#1D264F] text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors">
                    معرفی یک کودک
                  </button>
                </div>
                <div className="flex flex-col bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 group">
                  <div className="bg-white text-gray-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform"><UserPlus size={32} /></div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4">دیگر</h3>
                  <p className="text-gray-600 text-sm leading-loose font-medium flex-grow mb-8">
                    اگر شما عضو خانواده یا عضوی از تیم مراقبت‌های بهداشتی کودک، همانطور که توضیح داده شد، نیستید، از شما دعوت می‌کنیم تا اطلاعات مربوط به اشتراک بگذارید.
                  </p>
                  <button onClick={() => setShowOtherForm(true)} className="w-full bg-white border-2 border-gray-200 text-gray-500 py-4 rounded-2xl font-black hover:bg-gray-100 transition-colors">
                    معرفی یک کودک
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Container (Used for Family and Medical flows) */}
      {(showFamilyForm || showMedicalForm) && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md animate-in fade-in duration-300" onClick={closeModals}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-8 md:p-10 bg-gray-50 border-b border-gray-100 flex-shrink-0">
               <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                     <div className={`${showMedicalForm ? 'bg-blue-600' : 'bg-orange-500'} p-3 rounded-2xl text-white shadow-lg shadow-current/20`}>
                       {showMedicalForm ? <StethIcon size={24} /> : <Home size={24} />}
                     </div>
                     <div className="text-right">
                        <h3 className="text-xl font-black text-blue-900">
                          {showMedicalForm ? 'فرم ارجاع توسط تیم پزشکی' : 'فرم ارجاع توسط خانواده'}
                        </h3>
                        <p className="text-xs text-gray-400 font-bold">
                           {currentStep === 1 ? 'مرحله اول: شروع به کار' : 
                            currentStep === 2 ? 'مرحله دوم: اطلاعات ارجاع دهنده' : 
                            currentStep === 3 ? 'مرحله سوم: اطلاعات کودک' : 
                            currentStep === 4 ? 'مرحله چهارم: اطلاعات پزشکی' :
                            'مرحله پنجم: ثبت موفقیت‌آمیز'}
                        </p>
                     </div>
                  </div>
                  <button onClick={closeModals} className="text-gray-400 hover:text-blue-900 transition-colors"><X size={24} /></button>
               </div>
               <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${showMedicalForm ? 'bg-blue-600' : 'bg-orange-500'} transition-all duration-500`} style={{ width: `${(currentStep/5)*100}%` }}></div>
               </div>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12">
               {!isSubmitted ? (
                 <form onSubmit={handleSubmit} className="space-y-10 animate-in fade-in duration-500">
                    
                    {/* STEP 1: START */}
                    {currentStep === 1 && (
                      <div className="space-y-8 animate-in slide-in-from-left-4">
                         <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl inline-block text-sm font-black">مرحله اول: شروع به کار</div>
                         
                         <div className="space-y-6">
                            <label className="text-lg font-black text-blue-900 block">آیا خانواده با معرفی شما موافقت کرده‌اند؟</label>
                            <div className="flex gap-4">
                               <label className="flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl border-2 border-gray-100 cursor-pointer hover:border-blue-200 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                                  <input type="radio" name="agreement" required className="hidden" />
                                  <span className="font-black text-blue-900">بلی</span>
                               </label>
                               <label className="flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl border-2 border-gray-100 cursor-pointer hover:border-blue-200 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                                  <input type="radio" name="agreement" className="hidden" />
                                  <span className="font-black text-blue-900">خیر</span>
                               </label>
                            </div>
                         </div>

                         {showMedicalForm ? (
                            <div className="space-y-6">
                              <label className="text-lg font-black text-blue-900 block">رشته پزشکی شما در چه دسته‌ای قرار دارد؟</label>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {['مددکار اجتماعی', 'متخصص کودک', 'پرستار / پرستار متخصص', 'دستیار پزشک', 'پزشک', 'سایر'].map(opt => (
                                  <label key={opt} className="flex items-center justify-center p-4 rounded-xl border border-gray-100 cursor-pointer hover:border-blue-200 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                                    <input type="radio" name="medical_field" required className="hidden" value={opt} onChange={(e) => setMedicalField(e.target.value)} />
                                    <span className="font-bold text-blue-900 text-xs">{opt}</span>
                                  </label>
                                ))}
                              </div>
                              {medicalField === 'سایر' && (
                                <input type="text" placeholder="لطفاً رشته خود را بنویسید..." className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm font-medium animate-in fade-in" />
                              )}
                            </div>
                         ) : (
                            <div className="space-y-6">
                              <label className="text-lg font-black text-blue-900 block">نسبت شما با کودک چیست؟</label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {['والدین / سرپرست', 'خودم', 'عضو خانواده / خویشاوند'].map(rel => (
                                  <label key={rel} className="flex items-center justify-center gap-3 p-5 rounded-2xl border-2 border-gray-100 cursor-pointer hover:border-blue-200 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                                      <input type="radio" name="relation_to_child" required className="hidden" />
                                      <span className="font-black text-blue-900 text-sm">{rel}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                         )}

                         <div className="space-y-6">
                            <label className="text-lg font-black text-blue-900 block flex items-center gap-2">
                               <Sparkles size={20} className="text-orange-500" />
                               ثبت و توضیحات آرزوی کودک
                            </label>
                            <textarea required className="w-full bg-gray-50 border-none rounded-3xl p-6 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-32 resize-none placeholder:text-gray-300" placeholder="کودک شما چه آرزویی در سر دارد؟"></textarea>
                         </div>

                         <div className="space-y-6">
                            <label className="text-lg font-black text-blue-900 block">چطور با بنیاد آرزوها آشنا شدید؟</label>
                            <select required className="w-full bg-gray-50 border-none rounded-2xl p-5 font-black text-sm appearance-none cursor-pointer focus:ring-2 focus:ring-blue-100">
                               <option value="">انتخاب کنید...</option>
                               {['سایت', 'گوگل', 'معرفی دوستان', 'معرفی مددکار', 'خانواده', 'پزشک', 'رویداد', 'کارمندهای بنیاد'].map(opt => (
                                 <option key={opt} value={opt}>{opt}</option>
                               ))}
                            </select>
                         </div>
                      </div>
                    )}

                    {/* STEP 2: REFERRER INFO */}
                    {currentStep === 2 && (
                      <div className="space-y-12 animate-in slide-in-from-right-4">
                         <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl inline-block text-sm font-black">مرحله دوم: اطلاعات ارجاع دهنده</div>
                         
                         {/* Personal Info */}
                         <div className="space-y-6">
                            <h4 className="text-xl font-black text-blue-900 border-b pb-3 flex items-center gap-3">
                               <User size={20} className="text-blue-600" />
                               اطلاعات هویتی
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-500">نام و نام خانوادگی</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-500">شماره همراه</label>
                                  <input type="tel" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" placeholder="۰۹..." />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-500">ایمیل</label>
                                  <input type="email" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-500">کشور</label>
                                  <input type="text" required defaultValue="ایران" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-500">شهر</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                </div>
                                {showMedicalForm && (
                                  <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500">تخصص پزشکی</label>
                                    <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                  </div>
                                )}
                            </div>
                         </div>

                         {/* Hospital / Center Info - ONLY FOR MEDICAL */}
                         {showMedicalForm && (
                            <div className="space-y-6">
                              <h4 className="text-xl font-black text-blue-900 border-b pb-3 flex items-center gap-3">
                                 <Hospital size={20} className="text-blue-600" />
                                 اطلاعات بیمارستان / مراکز ارجاع
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500">نام مرکز درمانی</label>
                                    <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500">تلفن مرکز</label>
                                    <input type="tel" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" />
                                  </div>
                                  <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-black text-gray-500">آدرس</label>
                                    <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500">شهر</label>
                                    <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500">دپارتمان</label>
                                    <select 
                                      required 
                                      className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-black appearance-none"
                                      onChange={(e) => setDepartment(e.target.value)}
                                    >
                                       <option value="">انتخاب کنید...</option>
                                       {['قلب و عروق', 'مراقبت های ویژه', 'اطفال', 'اورژانس', 'گوارش', 'بیماری های عفونی', 'سایر'].map(opt => (
                                         <option key={opt} value={opt}>{opt}</option>
                                       ))}
                                    </select>
                                    {department === 'سایر' && (
                                      <input type="text" placeholder="نام دپارتمان را بنویسید..." className="w-full mt-2 bg-gray-50 border-none rounded-xl p-4 text-sm font-medium animate-in fade-in" />
                                    )}
                                  </div>
                              </div>
                            </div>
                         )}
                      </div>
                    )}

                    {/* STEP 3: CHILD & FAMILY INFO */}
                    {currentStep === 3 && (
                      <div className="space-y-12 animate-in slide-in-from-left-4">
                         <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl inline-block text-sm font-black">مرحله سوم: اطلاعات کودک و خانواده</div>
                         
                         {/* Child Info */}
                         <div className="space-y-6">
                            <h4 className="text-xl font-black text-blue-900 border-b pb-3 flex items-center gap-3">
                               <Star size={20} className="text-orange-500" fill="currentColor" />
                               اطلاعات کودک
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">نام و نام خانوادگی کودک</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">جنسیت</label>
                                  <div className="flex gap-2">
                                     <label className="flex-1 flex items-center justify-center py-4 rounded-xl border border-gray-100 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-200 cursor-pointer transition-all">
                                        <input type="radio" name="gender" required className="hidden" />
                                        <span className="text-xs font-black">پسر</span>
                                     </label>
                                     <label className="flex-1 flex items-center justify-center py-4 rounded-xl border border-gray-100 has-[:checked]:bg-pink-50 has-[:checked]:border-pink-200 cursor-pointer transition-all">
                                        <input type="radio" name="gender" className="hidden" />
                                        <span className="text-xs font-black">دختر</span>
                                     </label>
                                  </div>
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">تاریخ تولد</label>
                                  <input type="date" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-xs font-black text-gray-700 leading-relaxed">آیا کودک قبلا آرزویی دریافت کرده است؟</label>
                                  <div className="flex gap-2">
                                     <label className="flex-1 flex items-center justify-center py-4 rounded-xl border border-gray-100 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-200 cursor-pointer transition-all">
                                        <input type="radio" name="prev_wish" required className="hidden" />
                                        <span className="text-xs font-black">بلی</span>
                                     </label>
                                     <label className="flex-1 flex items-center justify-center py-4 rounded-xl border border-gray-100 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-200 cursor-pointer transition-all">
                                        <input type="radio" name="prev_wish" className="hidden" />
                                        <span className="text-xs font-black">خیر</span>
                                     </label>
                                  </div>
                               </div>
                            </div>
                         </div>

                         {/* Family Info */}
                         <div className="space-y-6">
                            <h4 className="text-xl font-black text-blue-900 border-b pb-3 flex items-center gap-3">
                               <Users size={20} className="text-blue-600" />
                               اطلاعات خانواده (والد و سرپرست)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="space-y-2 md:col-span-2">
                                  <label className="text-sm font-black text-gray-700">رابطه با کودک</label>
                                  <select 
                                    required
                                    className="w-full bg-gray-50 border-none rounded-2xl p-4 font-black text-sm appearance-none cursor-pointer"
                                    onChange={(e) => setRelation(e.target.value)}
                                  >
                                     <option value="">انتخاب کنید...</option>
                                     {['پدر', 'مادر', 'خواهر', 'برادر', 'پدربزرگ', 'مادربزرگ', 'نامادری', 'ناپدری', 'خواهر ناتنی', 'برادر ناتنی', 'سایر'].map(opt => (
                                       <option key={opt} value={opt}>{opt}</option>
                                     ))}
                                  </select>
                                  {relation === 'سایر' && (
                                    <textarea 
                                       required
                                       placeholder="لطفاً نسبت را توضیح دهید..." 
                                       className="w-full mt-3 bg-white border-2 border-gray-100 rounded-2xl p-4 text-sm animate-in fade-in h-24 resize-none"
                                    ></textarea>
                                  )}
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">نام و نام خانوادگی سرپرست</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">شهر</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                               <div className="space-y-2 md:col-span-2">
                                  <label className="text-sm font-black text-gray-700">آدرس دقیق</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">کد پستی</label>
                                  <input type="text" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">ایمیل سرپرست</label>
                                  <input type="email" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" />
                               </div>
                               <div className="space-y-2 md:col-span-2">
                                  <label className="text-sm font-black text-gray-700">شماره همراه سرپرست</label>
                                  <input type="tel" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right" placeholder="۰۹..." />
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* STEP 4: MEDICAL INFO */}
                    {currentStep === 4 && (
                      <div className="space-y-12 animate-in slide-in-from-right-4">
                         <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl inline-block text-sm font-black">مرحله چهارم: اطلاعات پزشکی</div>
                         
                         <div className="space-y-6">
                            <h4 className="text-xl font-black text-blue-900 border-b pb-3 flex items-center gap-3">
                               <StethIcon size={20} className="text-red-500" />
                               اطلاعات تشخیصی
                            </h4>
                            <div className="grid grid-cols-1 md:col-span-2 gap-6">
                               <div className="space-y-2 md:col-span-2">
                                  <label className="text-sm font-black text-gray-700">نام بیماری</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" placeholder="نام دقیق بیماری" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">درجه / شدت بیماری</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">تاریخ دقیق تشخیص</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" placeholder="مثلاً: خرداد ۱۴۰۲" />
                               </div>
                            </div>
                         </div>

                         <div className="space-y-6">
                            <h4 className="text-xl font-black text-blue-900 border-b pb-3 flex items-center gap-3">
                               <Building2 size={20} className="text-blue-600" />
                               اطلاعات پزشکی درمان
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">بیمارستان یا مرکز درمانی</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-sm font-black text-gray-700">نام کامل پزشک معالج</label>
                                  <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium" />
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-10 sticky bottom-0 bg-white/80 backdrop-blur-md">
                       {currentStep > 1 && (
                         <button 
                           type="button" 
                           onClick={prevStep} 
                           className="flex-1 py-5 bg-gray-100 text-blue-900 rounded-[2rem] font-black flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-sm"
                         >
                            <ChevronRight size={20} />
                            مرحله قبل
                         </button>
                       )}
                       {currentStep < 4 ? (
                         <button 
                           type="button" 
                           onClick={nextStep} 
                           className={`flex-[2] py-5 ${showMedicalForm ? 'bg-blue-600' : 'bg-blue-900'} text-white rounded-[2rem] font-black flex items-center justify-center gap-2 shadow-xl shadow-current/20 hover:opacity-90 transition-all`}
                         >
                            مرحله بعد
                            <ChevronLeft size={20} />
                         </button>
                       ) : (
                         <button 
                           type="submit" 
                           className="flex-[2] py-5 bg-orange-500 text-white rounded-[2rem] font-black flex items-center justify-center gap-2 shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all"
                         >
                            ثبت و ارسال نهایی
                            <CheckCircle2 size={24} />
                         </button>
                       )}
                    </div>
                 </form>
               ) : (
                 <div className="text-center py-16 space-y-10 animate-in zoom-in duration-500 flex flex-col items-center">
                    <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl inline-block text-sm font-black mb-4">مرحله پنجم: ثبت موفقیت‌آمیز</div>
                    
                    <div className="relative">
                       <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner animate-pulse">
                          <CheckCircle size={64} />
                       </div>
                       <Sparkles className="absolute -top-4 -right-4 text-orange-400 animate-bounce" size={32} />
                    </div>
                    
                    <div className="space-y-6 max-w-xl">
                       <h3 className="text-3xl font-black text-blue-900 leading-tight">درخواست شما با موفقیت ثبت شد</h3>
                       <p className="text-gray-500 font-bold text-lg leading-loose">
                          از اعتماد شما سپاسگزاریم. تیم مددکاری بنیاد آرزوها اطلاعات ارائه شده را بررسی کرده و در کوتاه‌ترین زمان ممکن با شما تماس خواهند گرفت.
                       </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                       <div className="bg-gray-50 p-6 rounded-[2rem] text-right border border-gray-100">
                          <div className="text-xs text-gray-400 font-bold mb-1">کد رهگیری:</div>
                          <div className="text-xl font-black text-blue-900 tracking-widest">WISH-99{Math.floor(Math.random()*900)+100}-M</div>
                       </div>
                       <div className="bg-gray-50 p-6 rounded-[2rem] text-right border border-gray-100">
                          <div className="text-xs text-gray-400 font-bold mb-1">تخمین بررسی:</div>
                          <div className="text-xl font-black text-blue-900">۲۴ الی ۴۸ ساعت</div>
                       </div>
                    </div>

                    <button 
                      onClick={closeModals} 
                      className="bg-[#1D264F] text-white px-16 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl shadow-blue-900/20 hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                       متوجه شدم، بازگشت
                       <ArrowLeft size={24} />
                    </button>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}

      {/* "Other" Form Modal */}
      {showOtherForm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md animate-in fade-in duration-300" onClick={closeModals}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-8 md:p-10 bg-gray-50 border-b border-gray-100 flex-shrink-0">
               <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                     <div className="bg-gray-200 p-3 rounded-2xl text-gray-600 shadow-lg">
                       <UserPlus size={24} />
                     </div>
                     <div className="text-right">
                        <h3 className="text-xl font-black text-blue-900">فرم اطلاع‌رسانی</h3>
                        <p className="text-xs text-gray-400 font-bold">بخش معرفی آزاد</p>
                     </div>
                  </div>
                  <button onClick={closeModals} className="text-gray-400 hover:text-blue-900 transition-colors"><X size={24} /></button>
               </div>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12">
               {!isSubmitted ? (
                 <form onSubmit={handleSubmit} className="space-y-10 animate-in fade-in duration-500">
                    
                    {/* Descriptions Section */}
                    <div className="space-y-4">
                       <div className="p-6 bg-blue-50 border border-blue-100 rounded-3xl flex gap-4 items-start">
                          <ShieldAlert size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                          <p className="text-sm text-blue-900 leading-[1.8] font-bold text-justify">
                            برای احترام به حریم خصوصی کودکان و خانواده‌هایی که به آنها خدمت می‌کنیم، «بنیاد آرزوها» فقط در صورت ارائه معرفی‌نامه از یک منبع معتبر با خانواده تماس خواهد گرفت. پس از دریافت معرفی‌نامه معتبر، «بنیاد آرزوها» با تیم مراقبت‌های بهداشتی کودک برای تعیین واجد شرایط بودن پزشکی همکاری خواهد کرد.
                          </p>
                       </div>
                       <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex gap-3 items-center">
                          <Info size={20} className="text-orange-600 flex-shrink-0" />
                          <p className="text-xs text-orange-900 font-black">
                            توجه : ارسال این فرم صرفاً جهت اطلاع‌رسانی بوده و منجر به معرفی نخواهد شد.
                          </p>
                       </div>
                    </div>

                    {/* Sender Info */}
                    <div className="space-y-6">
                       <h4 className="text-lg font-black text-blue-900 border-b-2 border-gray-100 pb-3 flex items-center gap-3">
                          <User size={20} className="text-gray-400" />
                          مشخصات شما
                       </h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 md:col-span-2">
                             <label className="text-xs font-black text-gray-500 mr-2">نام و نام خانوادگی شما</label>
                             <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-100" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-black text-gray-500 mr-2">آدرس ایمیل</label>
                             <input type="email" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right focus:ring-2 focus:ring-blue-100" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-black text-gray-500 mr-2">شماره همراه</label>
                             <input type="tel" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right focus:ring-2 focus:ring-blue-100" placeholder="۰۹..." />
                          </div>
                       </div>
                    </div>

                    {/* Recipient Family Info */}
                    <div className="space-y-6">
                       <h4 className="text-lg font-black text-blue-900 border-b-2 border-orange-100 pb-3 flex items-center gap-3">
                          <Users size={20} className="text-orange-500" />
                          اطلاعات خانواده گیرنده
                       </h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 md:col-span-2">
                             <label className="text-xs font-black text-gray-500 mr-2">نام و نام خانوادگی</label>
                             <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-orange-100" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-black text-gray-500 mr-2">ایمیل</label>
                             <input type="email" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right focus:ring-2 focus:ring-orange-100" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-black text-gray-500 mr-2">شماره تماس</label>
                             <input type="tel" required dir="ltr" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium text-right focus:ring-2 focus:ring-orange-100" placeholder="۰۹..." />
                          </div>
                       </div>
                    </div>

                    {/* Personal Message */}
                    <div className="space-y-4">
                       <label className="text-lg font-black text-blue-900 flex items-center gap-3">
                          <MessageSquareText size={20} className="text-blue-600" />
                          پیام شخصی به گیرنده
                       </label>
                       <textarea required className="w-full bg-gray-50 border-none rounded-[2rem] p-6 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-40 resize-none placeholder:text-gray-300" placeholder="پیام خود را در اینجا بنویسید..."></textarea>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-6 sticky bottom-0 bg-white/80 backdrop-blur-md">
                       <button 
                         type="submit" 
                         className="w-full py-6 bg-blue-900 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-900/20 hover:bg-blue-800 transition-all flex items-center justify-center gap-3 group"
                       >
                          ارسال فرم اطلاع‌رسانی
                          <Send size={24} className="group-hover:-translate-x-2 group-hover:translate-y-1 transition-transform" />
                       </button>
                    </div>
                 </form>
               ) : (
                 <div className="text-center py-20 space-y-10 animate-in zoom-in duration-500 flex flex-col items-center">
                    <div className="relative">
                       <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
                          <CheckCircle size={64} />
                       </div>
                       <Sparkles className="absolute -top-4 -right-4 text-orange-400 animate-bounce" size={32} />
                    </div>
                    
                    <div className="space-y-6 max-w-xl">
                       <h3 className="text-3xl font-black text-blue-900 leading-tight">اطلاعات با موفقیت ثبت شد</h3>
                       <p className="text-gray-500 font-bold text-lg leading-loose">
                          از اعتماد شما سپاسگزاریم. تیم مددکاری بنیاد آرزوها اطلاعات ارائه شده را بررسی کرده و در کوتاه‌ترین زمان ممکن با شما تماس خواهند گرفت.
                       </p>
                    </div>

                    <button 
                      onClick={closeModals} 
                      className="bg-[#1D264F] text-white px-16 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl shadow-blue-900/20 hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                       متوجه شدم، بازگشت
                       <ArrowLeft size={24} />
                    </button>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-10">
          <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-2 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-t-3xl font-black text-base transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                  ? 'bg-white border-x border-t border-gray-100 text-blue-900 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]' 
                  : 'text-gray-400 hover:text-blue-800'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-orange-500' : ''}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            {tabs[activeTab].content}
          </div>
        </div>

        <div className="mt-20 bg-white border border-gray-100 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-right">
             <h3 className="text-2xl font-black text-blue-900">آماده‌اید لبخندی بسازید؟</h3>
             <p className="text-gray-500 font-medium">همین حالا می‌توانید فرم درخواست اطلاعات بیشتر را تکمیل کنید.</p>
          </div>
          <button 
            onClick={() => setIsReferralModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all shadow-xl shadow-orange-500/30 flex items-center gap-3 group"
          >
             تکمیل فرم درخواست اطلاعات
             <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitWish;
