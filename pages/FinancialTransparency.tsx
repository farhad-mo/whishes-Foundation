
import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  PieChart, 
  FileText, 
  Download, 
  CheckCircle2, 
  Lock, 
  TrendingUp,
  Search,
  Users,
  Heart,
  ChevronLeft,
  ArrowDownCircle,
  Eye,
  BadgeCheck,
  // Fix missing icon imports
  Globe2,
  Gift,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialTransparency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const financialStats = [
    { label: "صرف شده برای آرزوها", value: "۹۲٪", desc: "هزینه مستقیم تحقق رویاها", color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "هزینه‌های عملیاتی", value: "۵٪", desc: "نگهداری و زیرساخت بنیاد", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "جذب سرمایه", value: "۳٪", desc: "تولید محتوا و آگاه‌سازی", color: "text-orange-600", bg: "bg-orange-50" },
  ];

  const reports = [
    { year: "۱۴۰۲", title: "گزارش جامع عملکرد و مالی", size: "۴.۲ مگابایت", format: "PDF" },
    { year: "۱۴۰۱", title: "صورت‌های مالی حسابرسی شده", size: "۳.۸ مگابایت", format: "PDF" },
    { year: "۱۴۰۰", title: "گزارش سالانه تاثیر اجتماعی", size: "۵.۱ مگابایت", format: "PDF" },
    { year: "۱۳۹۹", title: "گزارش شفافیت عملکردی", size: "۲.۹ مگابایت", format: "PDF" },
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1554224155-1696413575b9?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Financial Transparency"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-2xl text-blue-200 text-sm font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck size={18} className="text-emerald-400" />
            تعهد ما: شفافیت بی قید و شرط
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            هر ریال، داستانی از یک <span className="text-orange-500">امید</span> است
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl font-medium max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            ما معتقدیم اعتماد شما بزرگترین سرمایه ماست. اینجا می‌توانید با دقت ببینید که کمک‌های شما چگونه صرف لبخند کودکان می‌شود.
          </p>
        </div>
      </section>

      {/* The 92% Rule Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-blue-900/5 border border-gray-50 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-8 text-right">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 leading-tight">
                استاندارد جهانی <br />
                <span className="text-blue-600 text-5xl md:text-7xl">۹۲٪ تخصص مستقیم</span>
              </h2>
              <p className="text-gray-500 text-lg leading-loose text-justify font-medium">
                بنیاد آرزوها مفتخر است که بر اساس استانداردهای بین‌المللی خیریه‌های پیشرو، ۹۲ درصد از کل درآمدهای خود را مستقیماً صرف هزینه‌های تحقق آرزوها و درمان کودکان می‌کند. این نرخ بهره‌وری در میان برترین بنیادهای خیریه جهان قرار دارد.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-2xl font-black text-sm">
                    <CheckCircle2 size={18} />
                    حسابرسی شده توسط موسسات معتبر
                 </div>
                 <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-3 rounded-2xl font-black text-sm">
                    <TrendingUp size={18} />
                    بهره‌وری عملیاتی بالا
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {financialStats.map((stat, i) => (
                <div key={i} className={`p-10 rounded-[3rem] ${stat.bg} ${stat.color} flex flex-col items-center justify-center space-y-4 shadow-sm transition-transform hover:scale-105 duration-500 ${i === 0 ? 'md:col-span-2' : ''}`}>
                   <div className="text-5xl md:text-7xl font-black tracking-tighter">{stat.value}</div>
                   <div className="text-xl font-black">{stat.label}</div>
                   <div className="text-sm opacity-60 font-bold">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distribution of Funds */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-blue-900">توزیع منابع مالی</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">جزئیات هزینه‌کرد در بخش‌های مختلف تحقق آرزو</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "تجهیزات پزشکی و درمان", value: "۴۰٪", icon: <TrendingUp />, color: "bg-blue-600" },
              { title: "سفر و اقامت آرزوها", value: "۲۵٪", icon: <Globe2 />, color: "bg-orange-500" },
              { title: "خرید هدایا و ابزارها", value: "۱۸٪", icon: <Gift />, color: "bg-purple-600" },
              { title: "رویدادهای غافلگیری", value: "۹٪", icon: <Sparkles />, color: "bg-emerald-600" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                <div className={`absolute top-0 right-0 h-1 transition-all duration-500 w-0 group-hover:w-full ${item.color}`}></div>
                <div className="text-4xl font-black text-blue-900 mb-4">{item.value}</div>
                <h4 className="text-lg font-black text-gray-700 mb-2">{item.title}</h4>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">بر اساس گزارش سالیانه</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports Library */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-right">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-blue-900">کتابخانه گزارش‌های مالی</h2>
            <p className="text-gray-500 text-lg font-medium">تمامی صورت‌های مالی ما برای عموم قابل دسترسی است.</p>
          </div>
          <div className="flex items-center gap-4 bg-blue-900 text-white px-8 py-4 rounded-2xl shadow-xl">
             <Search size={20} />
             <span className="font-black text-sm">جستجو در گزارش‌ها</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
              <div className="flex items-center gap-6">
                <div className="bg-blue-50 p-5 rounded-2xl text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  <FileText size={32} />
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-blue-900 font-black text-lg">{report.title}</div>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                    <span>سال مالی {report.year}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{report.size}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-blue-600">{report.format}</span>
                  </div>
                </div>
              </div>
              <button className="bg-gray-50 p-4 rounded-2xl text-blue-900 hover:bg-orange-500 hover:text-white transition-all shadow-inner">
                 <Download size={24} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Audit & Compliance Section */}
      <section className="py-24 bg-[#1D264F] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
           <BarChart3 className="absolute -top-20 -right-20 w-96 h-96" />
           <PieChart className="absolute -bottom-20 -left-20 w-80 h-80" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/10 text-blue-200 font-black">
             <BadgeCheck className="text-orange-400" />
             حسابرسی مستقل سالیانه
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            ما تحت نظارت <span className="text-orange-500">سخت‌گیرانه‌ترین</span> سیستم‌های مالی فعالیت می‌کنیم
          </h2>
          
          <p className="text-blue-100/60 text-lg md:text-xl leading-loose font-medium">
            گزارش‌های مالی بنیاد آرزوها هر سال توسط یکی از موسسات حسابرسی تراز اول کشور بررسی و تایید می‌شود. ما معتقدیم شفافیت تنها یک شعار نیست، بلکه عملی است که هر روز در تمامی فرآیندهای مالی ما جاری است.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
             <div className="space-y-4">
                <div className="text-3xl font-black text-orange-500">۱۰۰٪</div>
                <div className="text-sm font-bold text-blue-200/50">شفافیت تراکنش‌ها</div>
             </div>
             <div className="space-y-4 border-x border-white/10">
                <div className="text-3xl font-black text-orange-500">۲۴/۷</div>
                <div className="text-sm font-bold text-blue-200/50">نظارت بر پرداخت‌ها</div>
             </div>
             <div className="space-y-4">
                <div className="text-3xl font-black text-orange-500">۴۸ ساعت</div>
                <div className="text-sm font-bold text-blue-200/50">زمان ثبت گزارش نهایی</div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
         <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-gray-100 shadow-2xl shadow-blue-900/5 space-y-8">
            <h3 className="text-3xl font-black text-blue-900 leading-tight">سوالی درباره نحوه هزینه‌کرد دارید؟</h3>
            <p className="text-gray-500 text-lg font-medium">تیم مالی ما آماده پاسخگویی به هرگونه پرسش شما در زمینه شفافیت و گزارش‌های مالی است.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
               <button className="bg-blue-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-900/20">تماس با واحد مالی</button>
               <Link to="/donate" className="bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-orange-500/20">همین حالا حمایت کنید</Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default FinancialTransparency;
