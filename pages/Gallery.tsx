
import React, { useState } from 'react';
import { Camera, Play, Filter, Heart, ChevronLeft, Star, ArrowLeft, Sparkles, Clock, CheckCircle2, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [catFilter, setCatFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const stories = [
    { id: 1, name: "آرش", cat: "to_go", status: "granted", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop", wish: "سفر به دیزنی‌لند" },
    { id: 2, name: "مهسا", cat: "to_be", status: "in_progress", img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop", wish: "پلیس شدن برای یک روز" },
    { id: 3, name: "امیرعلی", cat: "to_have", status: "pending", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop", wish: "داشتن یک کنسول بازی" },
    { id: 4, name: "یاسمن", cat: "to_meet", status: "granted", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", wish: "دیدار با عمو پورنگ" },
    { id: 5, name: "بردیا", cat: "to_go", status: "in_progress", img: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop", wish: "دیدن دریا برای اولین بار" },
    { id: 6, name: "هلیا", cat: "to_be", status: "pending", img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop", wish: "بالرین شدن" },
  ];

  const filteredStories = stories.filter(s => 
    (catFilter === 'all' || s.cat === catFilter) && 
    (statusFilter === 'all' || s.status === statusFilter)
  );

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'granted': return { text: 'تحقق یافته', color: 'bg-green-100 text-green-700' };
      case 'in_progress': return { text: 'در حال اجرا', color: 'bg-orange-100 text-orange-700' };
      case 'pending': return { text: 'نیاز به حامی', color: 'bg-blue-100 text-blue-700' };
      default: return { text: '', color: '' };
    }
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32">
      {/* Visual Hero Section - Adapted from SubmitWish */}
      <section className="relative h-[450px] md:h-[600px] overflow-hidden mb-16">
        <img 
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop" 
          alt="Happy Children" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-blue-900/60 to-transparent flex items-center justify-center text-center">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
               {/* Breadcrumb */}
               <div className="flex items-center gap-2 text-blue-100/70 text-sm font-bold mb-8">
                <Link to="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
                <ChevronLeft size={14} />
                <span className="text-white">گالری لبخندها</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
                هر آرزو، داستانی از یک <span className="text-orange-500">معجزه</span> است.
              </h1>
              
              <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-8"></div>
              
              <p className="text-blue-50 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
                گالری لبخندها؛ جایی که رویاهای کودکان به حقیقت پیوسته و قدرت تغییردهنده یک آرزو را به نمایش می‌گذارد.
              </p>

              <button className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-[2.5rem] font-black text-xl transition-all shadow-2xl shadow-orange-500/50 flex items-center gap-4 hover:-translate-y-1 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="bg-white/20 p-2 rounded-xl">
                  <Heart size={24} fill="currentColor" />
                </div>
                <span className="relative z-10">حمایت از یک آرزو</span>
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 text-white/20 animate-bounce-slow hidden md:block">
           <Sparkles size={100} fill="currentColor" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Filter and Content Header */}
        <div className="flex flex-col gap-12 mb-16 bg-white p-8 md:p-14 rounded-[2.5rem] shadow-sm border border-gray-100">
          
          {/* Header - Updated to be Centered and Larger */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 flex items-center gap-4 justify-center">
              <Camera className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />
              مرور معجزات
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">آرزوها را بر اساس نوع و وضعیت فیلتر کنید</p>
            <div className="h-1 w-20 bg-orange-500/20 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Category Filter */}
            <div className="flex-1 space-y-4">
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Filter size={14} /> نوع آرزو
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'همه آرزوها' },
                  { id: 'to_go', label: 'سفرها' },
                  { id: 'to_be', label: 'شغل‌ها' },
                  { id: 'to_have', label: 'هدیه‌ها' },
                  { id: 'to_meet', label: 'ملاقات‌ها' },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setCatFilter(btn.id)}
                    className={`px-6 py-2.5 rounded-xl font-black text-xs transition-all ${
                      catFilter === btn.id 
                      ? 'bg-blue-800 text-white shadow-lg' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex-1 space-y-4">
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Star size={14} /> وضعیت آرزو
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'همه وضعیت‌ها', icon: null },
                  { id: 'granted', label: 'تحقق یافته', icon: <CheckCircle2 size={14} /> },
                  { id: 'in_progress', label: 'در حال اجرا', icon: <Clock size={14} /> },
                  { id: 'pending', label: 'نیاز به حامی', icon: <HandHeart size={14} /> },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setStatusFilter(btn.id)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-xs transition-all ${
                      statusFilter === btn.id 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredStories.map((story) => (
            <div key={story.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                {/* Dynamic Status Badge */}
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl text-[10px] font-black uppercase shadow-lg backdrop-blur-sm ${getStatusLabel(story.status).color}`}>
                  {getStatusLabel(story.status).text}
                </div>

                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <Link to={`/wish/${story.id}`} className="bg-white p-4 rounded-2xl text-blue-800 hover:scale-110 transition-transform shadow-xl"><Camera size={24} /></Link>
                  <button className="bg-orange-500 p-4 rounded-2xl text-white hover:scale-110 transition-transform shadow-xl"><Play size={24} fill="currentColor" /></button>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-blue-900">{story.name}</h3>
                    <p className="text-orange-600 font-bold text-base">{story.wish}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-2xl group/heart cursor-pointer transition-colors hover:bg-red-500">
                    <Heart size={20} className="text-red-500 group-hover/heart:text-white transition-colors" fill="currentColor" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-loose font-medium text-justify">
                  {story.status === 'granted' 
                    ? "این آرزو با حمایت حامیان عزیز بنیاد و تلاش تیم داوطلبان به بهترین شکل ممکن رقم خورد و لبخندی ابدی بر لبان این قهرمان کوچک نشاند."
                    : story.status === 'in_progress'
                    ? "تیم اجرایی بنیاد در حال هماهنگی مقدمات لازم برای اجرای هر چه بهتر این آرزوی هیجان‌انگیز است. به زودی خبرهای خوشی در راه است."
                    : "این قهرمان کوچک منتظر دستان پرمهر شماست تا مسیر تحقق آرزوی رویایی‌اش آغاز شود. شما می‌توانید اولین قدم را بردارید."}
                </p>
                <Link to={`/wish/${story.id}`} className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${
                  story.status === 'pending' 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-gray-50 text-blue-800 group-hover:bg-blue-800 group-hover:text-white'
                }`}>
                  {story.status === 'pending' ? 'حمایت از این آرزو' : 'مشاهده کامل داستان'}
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStories.length === 0 && (
          <div className="text-center py-20 space-y-6 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gray-300">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-black text-gray-400">داستانی با این فیلترها پیدا نشد.</h3>
            <button onClick={() => {setCatFilter('all'); setStatusFilter('all');}} className="text-blue-800 font-bold underline">نمایش همه داستان‌ها</button>
          </div>
        )}

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="bg-white border-2 border-gray-100 px-16 py-5 rounded-[2rem] font-black text-gray-700 hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-all shadow-xl shadow-gray-200/50">
            نمایش آرزوهای بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
