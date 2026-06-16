
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Fix: Added missing 'Users' icon to the lucide-react import list
import { 
  MessageSquare, 
  Quote, 
  User, 
  Users,
  Heart, 
  Star, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Filter,
  Smile,
  BadgeCheck,
  Camera
} from 'lucide-react';

interface Experience {
  id: number;
  name: string;
  role: string;
  text: string;
  category: 'family' | 'donor' | 'volunteer';
  date: string;
  avatar?: string;
}

const mockExperiences: Experience[] = [
  {
    id: 1,
    name: "مریم راد",
    role: "مادر سمانه (قهرمان آرزوها)",
    text: "وقتی آرزوی دخترم برآورده شد، انگار تمام خستگی‌های دوران شیمی‌درمانی از تن ما بیرون رفت. لبخند سمانه در آن روز، بهترین دارویی بود که تا به حال دیده بودم. ممنونم که به رویاهای کودکان ما اهمیت می‌دهید.",
    category: 'family',
    date: "۲ هفته پیش",
    avatar: "https://i.pravatar.cc/150?u=maryam"
  },
  {
    id: 2,
    name: "دکتر کیانی",
    role: "حامی مالی",
    text: "بنیاد آرزوها بستری را فراهم کرده که ما به عنوان پزشک، فراتر از درمان فیزیکی، بتوانیم به روحیه بیمارانمان هم کمک کنیم. شفافیت این بنیاد در هزینه‌کرد مبالغ، واقعاً ستودنی است.",
    category: 'donor',
    date: "۱ ماه پیش",
    avatar: "https://i.pravatar.cc/150?u=kiani"
  },
  {
    id: 3,
    name: "علیرضا صبوری",
    role: "داوطلب اجرایی",
    text: "حضور در لحظه تحقق آرزوی یک کودک، نگاه آدم را به زندگی عوض می‌کند. من در این بنیاد یاد گرفتم که چطور با کوچکترین کارها، بزرگترین معجزه‌ها را خلق کنیم.",
    category: 'volunteer',
    date: "۳ روز پیش",
    avatar: "https://i.pravatar.cc/150?u=alireza"
  },
  {
    id: 4,
    name: "سارا مهدوی",
    role: "حامی طلایی",
    text: "دیدن گزارش‌های تصویری از آرزوهایی که با کمک‌های کوچک ما برآورده می‌شوند، انگیزه‌ای مضاعف برای ادامه حمایت به من می‌دهد. حس می‌کنم بخشی از یک خانواده بزرگ و پر از عشق هستم.",
    category: 'donor',
    date: "۵ روز پیش",
    avatar: "https://i.pravatar.cc/150?u=sara"
  },
  {
    id: 5,
    name: "پدر امیرعلی",
    role: "خانواده قهرمان",
    text: "امیرعلی آرزو داشت پلیس شود و شما این را به بهترین شکل ممکن انجام دادید. هنوز هم وقتی عکس‌های آن روز را می‌بیند، چشمانش از خوشحالی برق می‌زند.",
    category: 'family',
    date: "۲ ماه پیش",
    avatar: "https://i.pravatar.cc/150?u=amirali"
  }
];

const Experiences: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'family' | 'donor' | 'volunteer'>('all');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', category: 'donor', text: '' });
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#share-form') {
      const element = document.getElementById('share-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const filteredExperiences = mockExperiences.filter(exp => filter === 'all' || exp.category === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // در دنیای واقعی اینجا اطلاعات به سرور ارسال می‌شود
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
            alt="Experiences Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-2xl text-blue-100 text-sm font-black mb-2 backdrop-blur-md">
            <MessageSquare size={20} className="text-orange-400" />
            صدای همراهان بنیاد
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
            تجربه‌هایی که <span className="text-orange-500">قلب‌ها</span> را به هم پیوند زد
          </h1>
          
          <p className="text-blue-50/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            ما اینجا هستیم تا روایت‌گر عشق و امیدی باشیم که در پس هر آرزوی برآورده شده جریان دارد. هر کلمه از تجربیات شما، انگیزه‌ای برای فردای ماست.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-black text-blue-900">۹۸٪</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">رضایت قلبی خانواده‌ها</div>
          </div>
          <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-900">۵۰۰+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">تجربه ثبت شده</div>
          </div>
          <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-900">۱۰۰٪</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">تعهد به شفافیت</div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-3xl shadow-sm border border-gray-100 max-w-fit mx-auto">
          {[
            { id: 'all', label: 'همه تجربه‌ها', icon: <Users size={18} /> },
            { id: 'family', label: 'خانواده کودکان', icon: <Smile size={18} /> },
            { id: 'donor', label: 'حامیان مالی', icon: <Heart size={18} /> },
            { id: 'volunteer', label: 'داوطلبان', icon: <Star size={18} /> },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-sm transition-all ${
                filter === btn.id 
                ? 'bg-blue-900 text-white shadow-xl' 
                : 'text-gray-400 hover:text-blue-900 hover:bg-gray-50'
              }`}
            >
              {btn.icon}
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Experience Masonry Grid */}
      <section className="py-8 max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredExperiences.map((exp) => (
            <div 
              key={exp.id} 
              className="break-inside-avoid group relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <Quote className="absolute -top-4 -left-4 text-blue-50 w-32 h-32 -z-10 group-hover:text-blue-100 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-orange-100 shadow-inner">
                  {exp.avatar ? (
                    <img src={exp.avatar} alt={exp.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-800">
                      <User size={24} />
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-blue-900">{exp.name}</h3>
                    <BadgeCheck size={18} className="text-blue-500" />
                  </div>
                  <p className="text-orange-600 font-black text-[10px] mt-1 uppercase tracking-tighter">{exp.role}</p>
                </div>
              </div>

              <div className="relative">
                <p className="text-gray-600 leading-[2.2] font-medium text-justify italic">
                  "{exp.text}"
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-400">{exp.date}</span>
                <div className="flex gap-1">
                   <Star size={14} className="text-yellow-400" fill="currentColor" />
                   <Star size={14} className="text-yellow-400" fill="currentColor" />
                   <Star size={14} className="text-yellow-400" fill="currentColor" />
                   <Star size={14} className="text-yellow-400" fill="currentColor" />
                   <Star size={14} className="text-yellow-400" fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Your Experience Section */}
      <section id="share-form" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#1D264F] rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <Sparkles className="absolute top-10 right-10 w-48 h-48 text-orange-400" />
            <Camera className="absolute bottom-10 left-10 w-64 h-64 text-blue-400" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-right space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl text-blue-300 text-sm font-black">
                <Sparkles size={18} className="text-yellow-400" />
                صدای شما بخشی از معجزه ماست
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                تجربه خود را با <br />
                <span className="text-orange-500">دنیا</span> در میان بگذارید
              </h2>
              <p className="text-blue-100/70 text-lg md:text-xl font-medium leading-relaxed">
                هر پیامی که اینجا ثبت می‌شود، مانند نوری است که مسیر حامیان جدید را روشن می‌کند. روایت شما می‌تواند انگیزه‌ای برای برآورده شدن یک آرزوی دیگر باشد.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-3xl">
                    <CheckCircle2 size={24} className="text-green-400" />
                    <span className="text-sm font-black">تایید اصالت پیام‌ها</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-3xl">
                    <Heart size={24} className="text-red-400" fill="currentColor" />
                    <span className="text-sm font-black">حفظ حریم خصوصی</span>
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 text-blue-900 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 mr-2">نام و نام خانوادگی</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all text-right"
                        placeholder="مثلاً: مریم احمدی"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 mr-2">نقش شما</label>
                      <select 
                        className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-black appearance-none focus:ring-2 focus:ring-blue-100"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value as any})}
                      >
                        <option value="donor">حامی مالی</option>
                        <option value="family">خانواده کودک</option>
                        <option value="volunteer">داوطلب</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2">تجربه یا پیام شما</label>
                    <textarea 
                      required
                      value={formData.text}
                      onChange={(e) => setFormData({...formData, text: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-3xl p-6 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-40 resize-none text-right"
                      placeholder="داستان یا نظر خود را در اینجا بنویسید..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-[2rem] font-black text-xl shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-3"
                  >
                    ثبت تجربه و جادوی عشق
                    <Send size={24} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-8 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-blue-900">سپاسگزاریم!</h3>
                    <p className="text-gray-500 text-lg font-medium">تجربه شما با موفقیت ثبت شد و پس از بررسی تیم مدیریت، در این دیوار مهربانی نمایش داده خواهد شد.</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-900 text-white px-10 py-4 rounded-2xl font-black text-sm"
                  >
                    ارسال نظر دیگر
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
