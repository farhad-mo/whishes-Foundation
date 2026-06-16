
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Rocket, 
  Gift, 
  ChevronLeft, 
  Star, 
  CheckCircle2, 
  Lock, 
  CreditCard, 
  Users, 
  Zap,
  ArrowLeft,
  ChevronRight,
  HandHeart,
  CalendarDays,
  Activity,
  Award,
  Crown,
  BellRing
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | null>(500000);
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [customAmount, setCustomAmount] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
    { 
      id: '1', 
      title: 'حامی نقره‌ای', 
      amount: 200000, 
      icon: <Sparkles className="text-blue-500" />, 
      impactOnce: "تامین بخشی از هزینه‌های درمانی و داروهای خاص یک کودک.",
      impactMonthly: "تامین مستمر هزینه داروهای یک کودک در طول سال.",
      color: "border-blue-100 bg-blue-50/30"
    },
    { 
      id: '2', 
      title: 'حامی طلایی', 
      amount: 500000, 
      icon: <Rocket className="text-orange-500" />, 
      impactOnce: "خرید یک کیت آرزوی تخصصی (مثل تبلت، ابزار موسیقی یا دوچرخه).",
      impactMonthly: "پشتیبانی از آموزش و مهارت‌آموزی ماهیانه ۳ کودک قهرمان.",
      color: "border-orange-100 bg-orange-50/30"
    },
    { 
      id: '3', 
      title: 'فرشته آرزو', 
      amount: 2000000, 
      icon: <Heart className="text-red-500" fill="currentColor" />, 
      impactOnce: "حمایت کامل از یک رویداد آرزو (مثل جشن تولد رویایی یا سفر کوتاه).",
      impactMonthly: "فرماندهی مستقیم تحقق ۱ آرزوی بزرگ در هر فصل سال.",
      color: "border-red-100 bg-red-50/30"
    },
  ];

  const currentImpact = amount ? (
    donationType === 'once' 
      ? tiers.find(t => t.amount === amount)?.impactOnce || "این هدیه مستقیماً صرف هزینه‌های اولویت‌دار درمان و تحقق آرزوهای کودکان خواهد شد."
      : tiers.find(t => t.amount === amount)?.impactMonthly || "حمایت مستمر شما، امنیت خاطر را برای برنامه‌ریزی آرزوهای پیچیده فراهم می‌کند."
  ) : "لطفاً مبلغی را انتخاب کنید تا تاثیر آن را مشاهده نمایید.";

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32">
      {/* Dynamic Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="Donate Charity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-[#1D264F]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-2xl text-orange-200 text-xs font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <HandHeart size={18} />
            سهمی در خلق یک معجزه داشته باشید
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 max-w-4xl drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            حمایت شما، جادویی برای <span className="text-orange-500">فردای</span> فرشتگان کوچک است.
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl font-medium max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000 leading-relaxed">
            هر هدیه، هر چقدر هم کوچک، گامی بزرگ به سوی برآورده کردن یک آرزوی قلبی است که می‌تواند مسیر درمان یک کودک را متحول کند.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Donation Interface */}
          <div className="lg:col-span-8">
            <div className={`bg-white rounded-[4rem] p-8 md:p-14 shadow-2xl transition-all duration-700 border ${donationType === 'monthly' ? 'border-orange-200 ring-4 ring-orange-500/5' : 'border-gray-100'}`}>
              
              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-12">
                <div className="bg-gray-100 p-1.5 rounded-[2rem] flex gap-1 relative overflow-hidden">
                  <button 
                    onClick={() => setDonationType('once')}
                    className={`px-10 py-4 rounded-[1.8rem] font-black text-sm transition-all relative z-10 ${donationType === 'once' ? 'bg-white text-blue-900 shadow-xl shadow-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    کمک یکباره
                  </button>
                  <button 
                    onClick={() => setDonationType('monthly')}
                    className={`px-10 py-4 rounded-[1.8rem] font-black text-sm transition-all relative z-10 flex items-center gap-2 ${donationType === 'monthly' ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <CalendarDays size={18} />
                    حمایت ماهانه
                  </button>
                </div>
              </div>

              {/* Monthly Star Circle Callout - ONLY for Monthly */}
              {donationType === 'monthly' && (
                <div className="mb-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-[2.5rem] p-8 text-white relative overflow-hidden animate-in fade-in zoom-in duration-500">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <Star className="absolute top-2 left-10 w-20 h-20 rotate-12" />
                    <Sparkles className="absolute bottom-5 right-10 w-16 h-16" />
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-orange-500 p-4 rounded-2xl shadow-xl shadow-orange-500/30">
                      <Crown size={32} />
                    </div>
                    <div className="text-center md:text-right flex-grow">
                      <h4 className="text-xl font-black mb-1">عضویت در حلقه ستارگان</h4>
                      <p className="text-blue-100/70 text-sm font-medium">با حمایت ماهیانه، شما تبدیل به ستاره‌ای می‌شوید که آسمان آرزوها را همیشه روشن نگه می‌دارد.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                       <div className="flex items-center gap-2 text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full"><CheckCircle2 size={12} className="text-orange-400" /> گزارش‌های ماهانه اختصاصی</div>
                       <div className="flex items-center gap-2 text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full"><CheckCircle2 size={12} className="text-orange-400" /> نشان افتخار در پروفایل</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tiers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {tiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setAmount(tier.amount);
                      setCustomAmount('');
                    }}
                    className={`relative flex flex-col items-center p-8 rounded-[3rem] border-2 transition-all duration-300 text-center space-y-4 group overflow-hidden ${
                      amount === tier.amount 
                        ? (donationType === 'monthly' ? 'border-blue-800 bg-blue-50/30 scale-105' : 'border-orange-500 bg-orange-50/30') 
                        : 'border-gray-50 bg-white hover:border-gray-200'
                    }`}
                  >
                    {/* Animated Shine for Selected Tier */}
                    {amount === tier.amount && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
                    )}
                    
                    <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 duration-500 bg-white shadow-sm`}>
                      {tier.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-blue-900">{tier.title}</h4>
                      <div className="text-xl font-black text-blue-800" dir="ltr">
                        {tier.amount.toLocaleString()} <span className="text-[10px] text-gray-400">{donationType === 'monthly' ? 'تومان / ماه' : 'تومان'}</span>
                      </div>
                    </div>
                    {amount === tier.amount && (
                       <div className={`absolute -top-3 -right-3 text-white p-1.5 rounded-full shadow-lg animate-in zoom-in duration-300 ${donationType === 'monthly' ? 'bg-blue-800' : 'bg-orange-500'}`}>
                         <CheckCircle2 size={20} />
                       </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="relative mb-12">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest mr-6 mb-3 block">مبلغ دلخواه شما {donationType === 'monthly' && '(ماهیانه)'}</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="مبلغ مورد نظر را وارد کنید..." 
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(Number(e.target.value.replace(/\D/g, '')));
                    }}
                    className="w-full bg-gray-50 border-none rounded-[2.5rem] px-10 py-6 text-center font-black text-2xl focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-300"
                  />
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 font-bold">تومان</div>
                </div>
              </div>

              {/* Impact Card - Dynamically shows what the gift does */}
              <div className={`rounded-[2.5rem] p-8 mb-12 border flex flex-col md:flex-row items-center gap-8 transition-colors duration-500 ${donationType === 'monthly' ? 'bg-orange-50 border-orange-100' : 'bg-blue-50/50 border-blue-100/50'}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${donationType === 'monthly' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                  {donationType === 'monthly' ? <Star size={32} fill="currentColor" /> : <Activity size={32} />}
                </div>
                <div className="space-y-2 text-center md:text-right">
                  <h4 className={`text-xl font-black ${donationType === 'monthly' ? 'text-orange-900' : 'text-blue-900'}`}>
                    {donationType === 'monthly' ? 'جادوی پایداری شما:' : 'تاثیر هدیه شما:'}
                  </h4>
                  <p className={`font-medium leading-relaxed ${donationType === 'monthly' ? 'text-orange-800/80' : 'text-blue-800/60'}`}>
                    {currentImpact}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button className={`w-full py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl transition-all flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 group ${donationType === 'monthly' ? 'bg-blue-900 text-white shadow-blue-900/30' : 'bg-orange-500 text-white shadow-orange-500/40'}`}>
                <CreditCard size={28} />
                {donationType === 'monthly' ? 'تایید و عضویت در حلقه ستارگان' : 'تایید و انتقال به درگاه بانکی'}
                <ChevronLeft size={28} className="group-hover:-translate-x-2 transition-transform" />
              </button>

              {/* Monthly Specific Note */}
              {donationType === 'monthly' && (
                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs font-bold animate-in fade-in slide-in-from-bottom-2">
                   <BellRing size={16} className="text-orange-400" />
                   شما می‌توانید در هر زمان که بخواهید، حمایت ماهیانه خود را از پنل کاربری متوقف یا تغییر دهید.
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="flex items-center gap-2 font-bold text-xs"><Lock size={16} /> پرداخت امن SSL</div>
                 <div className="flex items-center gap-2 font-bold text-xs"><ShieldCheck size={16} /> مورد تایید نهادهای نظارتی</div>
                 <div className="flex items-center gap-2 font-bold text-xs"><CheckCircle2 size={16} /> شفافیت ۱۰۰ درصدی</div>
              </div>
            </div>
          </div>

          {/* Sidebar / Impact Stats */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Real-time Impact */}
            <div className="bg-blue-900 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
               <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black">نبض مهربانی</h3>
                    <p className="text-blue-100/60 font-medium text-sm">آمارهایی که شما ساخته‌اید</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400 shadow-inner">
                         <Star size={24} fill="currentColor" />
                       </div>
                       <div>
                          <div className="text-2xl font-black">۴۸۰+</div>
                          <div className="text-xs text-blue-200/50">آرزوی برآورده شده</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                         <Users size={24} />
                       </div>
                       <div>
                          <div className="text-2xl font-black">۲,۵۰۰+</div>
                          <div className="text-xs text-blue-200/50">حامی فعال در ماه</div>
                       </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <p className="text-sm text-blue-100 font-medium leading-loose italic">
                      "هدیه شما، لبخندی است که هیچگاه از یاد یک کودک نخواهد رفت."
                    </p>
                  </div>
               </div>
            </div>

            {/* Other ways to help */}
            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm space-y-6 text-right">
               <h4 className="text-xl font-black text-blue-900">روش‌های دیگر همیاری</h4>
               <div className="space-y-4">
                  <Link to="/volunteer" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-blue-50 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-800 shadow-sm">
                           <Users size={20} />
                        </div>
                        <span className="text-sm font-black text-gray-700">داوطلب شوید</span>
                     </div>
                     <ChevronLeft size={18} className="text-gray-300 group-hover:text-blue-800 transition-all" />
                  </Link>
                  <Link to="/corporate-partners" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-blue-50 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-800 shadow-sm">
                           <Zap size={20} />
                        </div>
                        <span className="text-sm font-black text-gray-700">مشارکت شرکتی</span>
                     </div>
                     <ChevronLeft size={18} className="text-gray-300 group-hover:text-blue-800 transition-all" />
                  </Link>
               </div>
            </div>

            {/* Support Contact */}
            <div className="p-8 text-center space-y-2">
               <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">نیاز به راهنمایی دارید؟</p>
               <div className="text-blue-900 font-black" dir="ltr">۰۲۱-۸۸۸۸۸۸۸۸</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
