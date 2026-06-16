
import React, { useEffect } from 'react';
import { 
  Sparkles, 
  Heart, 
  Star,
  Quote,
  MoveDown,
  Film,
  Sun,
  HandHeart,
  ArrowDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-32 overflow-x-hidden">
      {/* Attractive Low-Height Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Founding History"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D264F]/80 via-white/5 to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 bg-blue-900/5 backdrop-blur-sm border border-blue-900/10 px-6 py-2 rounded-full text-blue-900 text-xs font-black">
            <Star size={14} className="text-orange-500 fill-orange-500" />
            داستانِ پیدایش یک رویا
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight tracking-tighter">
            روایتی از <span className="text-orange-500">قلب</span> تا امید
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed italic">
              "گاهی زندگی ما را از مسیرهای نرفته عبور می‌دهد تا به مقصدی بزرگتر برسیم."
            </p>
          </div>

          <div className="pt-4 opacity-30">
            <ArrowDown size={24} className="mx-auto text-blue-900 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Chapter 1: God / The Longing */}
        <section className="py-20 md:py-32 space-y-12">
          <div className="space-y-4 text-right">
            <span className="text-orange-500 font-black text-sm uppercase tracking-[0.3em] block">فصل اول : خدا</span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">رویای نشنیده</h2>
          </div>
          
          <div className="relative">
            <div className="absolute -right-8 -top-8 text-blue-50/50 -z-10">
              <Quote size={120} fill="currentColor" />
            </div>
            
            <div className="space-y-10 text-gray-500 text-xl md:text-2xl leading-[2.2] font-medium text-justify">
              <p>
                از کودکی، همیشه یک عشق عمیق در قلبم بود؛ عشق به کودکان. همیشه رؤیای شنیدن یک کلمه ساده اما بزرگ را در دل داشتم: <span className="text-blue-900 font-black border-b-4 border-blue-100">«بابا»</span>.
              </p>
              <p>
                اما زندگی مسیر دیگری برایم انتخاب کرد. با وجود تمام تلاش‌ها و آرزوها، فرصت پدر شدن برایم فراهم نشد و این حس، سال‌ها به‌صورت یک خلأ آرام اما عمیق در وجودم باقی ماند.
              </p>
              <p>
                پس از تجربه یک جدایی سخت، با خودم عهد بستم اگر روزی شرایطش فراهم شود، از طریق بهزیستی سرپرستی کودکی را بر عهده بگیرم؛ نه فقط برای پر کردن جای خالی قلبم، بلکه برای ساختن آینده‌ای روشن‌تر برای یک انسان کوچک.
              </p>
            </div>
          </div>
        </section>

        {/* Founding Story Section */}
        <section className="py-24 border-t border-gray-50 space-y-16">
          <div className="space-y-4 text-right">
            <span className="text-blue-500 font-black text-sm uppercase tracking-[0.3em] block">فصل دوم : جادو</span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">داستان شکل‌گیری</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 space-y-10 text-gray-500 text-xl md:text-2xl leading-[2.2] font-medium text-justify order-2 md:order-1">
              <p>
                تا اینکه یک شب، همه چیز تغییر کرد. در حال تماشای فیلمی بودم که داستان بنیادی را روایت می‌کرد که آرزوهای کودکان بیمار را به واقعیت تبدیل می‌کرد. همان لحظه جرقه‌ای در قلبم زده شد. با خودم گفتم:
              </p>
              
              <div className="bg-orange-50/50 p-8 md:p-12 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-500/5 relative overflow-hidden">
                <Sparkles className="absolute top-4 left-4 text-orange-200" size={40} />
                <p className="text-2xl md:text-4xl font-black text-blue-900 leading-tight text-center italic">
                  «شاید قرار نیست فقط پدر یک کودک باشم… <br className="hidden md:block" />
                  <span className="text-orange-600">شاید قرار است امید هزاران کودک باشم.</span>»
                </p>
              </div>

              <p>
                آن شب، <span className="text-blue-900 font-black">«بنیاد آرزوها»</span> متولد شد. ایده‌ای ساده اما عمیق: ساختن لحظه‌هایی که زندگی کودکان را تغییر می‌دهد. لحظه‌هایی پر از امید، لبخند، انگیزه و احساس زنده بودن. ما باور داریم که یک آرزو می‌تواند چیزی فراتر از یک خواسته باشد؛ می‌تواند نیرویی باشد برای ادامه مسیر، برای جنگیدن با درد، برای باور به فردا.
              </p>
              
              <p>
                بنیاد آرزوها با یک هدف شکل گرفت: <span className="text-blue-800 font-black">اینکه هیچ کودکی در سخت‌ترین روزهای زندگی‌اش، احساس تنهایی نکند.</span>
              </p>
              
              <p>
                امروز ما اینجا هستیم تا با کمک انسان‌هایی که قلبشان برای مهربانی می‌تپد، آرزوها را به واقعیت تبدیل کنیم، لبخندها را بازگردانیم و به کودکان یادآوری کنیم که دنیا هنوز جای قشنگی برای زندگی کردن است.
              </p>
            </div>

            <div className="md:col-span-4 space-y-6 order-1 md:order-2">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0">
                <img 
                  src="https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale" 
                  alt="Transformation"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl text-center space-y-2">
                 <Film className="mx-auto text-blue-800 mb-2" size={32} />
                 <p className="text-xs font-black text-gray-400">یک جرقه در تاریکی سینما</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="relative py-24 rounded-[4rem] bg-[#1D264F] text-white text-center overflow-hidden shadow-2xl shadow-blue-900/40">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <Sparkles className="absolute top-10 right-10 w-64 h-64 text-orange-400" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"></div>
           </div>
           
           <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                این فقط یک بنیاد نیست… <br />
                <span className="text-orange-500">این یک حرکت انسانی است.</span>
              </h2>
              <div className="h-1 w-20 bg-white/20 mx-auto rounded-full"></div>
              <p className="text-blue-100/70 text-xl md:text-2xl font-black tracking-tight leading-relaxed">
                یک خانواده بزرگ از امید.
              </p>
              
              <div className="pt-8">
                <Link to="/donate" className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:-translate-y-1 transition-all shadow-xl shadow-orange-500/30">
                  <HandHeart size={24} />
                  همراه این حرکت شوید
                </Link>
              </div>
           </div>
        </section>

      </div>

      {/* Footer Nav Links */}
      <div className="max-w-7xl mx-auto px-6 mt-32 border-t border-gray-100 pt-16">
         <div className="flex flex-wrap justify-center gap-12 text-blue-900 font-black text-sm opacity-50 hover:opacity-100 transition-opacity">
            <Link to="/gallery" className="hover:text-orange-500 transition-colors">گالری لبخندها</Link>
            <Link to="/transparency" className="hover:text-orange-500 transition-colors">شفافیت مالی</Link>
            <Link to="/events" className="hover:text-orange-500 transition-colors">رویدادها</Link>
         </div>
         <p className="text-center text-gray-400 text-xs font-bold mt-12">بنیاد آرزوها | روایت‌گر معجزات کوچک</p>
      </div>
    </div>
  );
};

export default History;
