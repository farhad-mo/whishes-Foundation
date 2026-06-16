
import React from 'react';
import { Star, Heart, UserPlus, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const BecomeStar: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1D264F] py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]"></div>
        
        {/* Floating Stars/Particles */}
        <Star className="absolute top-20 left-[15%] text-yellow-400/20 w-8 h-8 animate-bounce-slow" fill="currentColor" />
        <Star className="absolute bottom-20 right-[10%] text-blue-400/20 w-6 h-6 animate-pulse" fill="currentColor" />
        <Sparkles className="absolute top-40 right-[25%] text-white/10 w-12 h-12 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-4 py-2 rounded-2xl text-blue-300 text-sm font-bold mb-2">
              <Sparkles size={18} className="text-yellow-400" />
              فرصتی برای تغییر یک سرنوشت
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              شما هم می‌توانید <br />
              یک <span className="text-yellow-400 relative inline-block">
                ستاره
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#facc15" strokeWidth="4" fill="transparent" />
                </svg>
              </span> شوید
            </h2>
            
            <p className="text-blue-100/70 text-lg md:text-2xl font-medium max-w-2xl lg:ml-0 lg:mr-auto leading-relaxed">
              در آسمان آرزوهای این کودکان، هر حمایت شما نوری است که تاریکی بیماری را کنار می‌زند. بیایید با هم معجزه بسازیم.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Link
              to="/donate"
              className="group relative flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all shadow-2xl shadow-orange-500/40 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Heart size={28} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              حمایت مالی می‌کنم
            </Link>
            
            <Link
              to="#"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black text-xl transition-all backdrop-blur-md hover:-translate-y-1 active:scale-95"
            >
              <UserPlus size={28} />
              داوطلب می‌شوم
            </Link>
          </div>
        </div>

        {/* Impact Badge */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Star size={24} fill="currentColor" />
            </div>
            <div className="text-right">
              <div className="text-white font-black text-lg">۱۰۰٪ مستقیم</div>
              <div className="text-blue-200/40 text-xs">صرف هزینه‌های آرزو</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <Heart size={24} fill="currentColor" />
            </div>
            <div className="text-right">
              <div className="text-white font-black text-lg">شفافیت مالی</div>
              <div className="text-blue-200/40 text-xs">گزارش‌های لحظه‌ای</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeStar;
