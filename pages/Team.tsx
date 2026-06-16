import React, { useEffect, useState } from 'react';
import { 
  Users, 
  Star, 
  Heart, 
  Sparkles, 
  Linkedin, 
  Instagram, 
  Mail, 
  ShieldCheck, 
  Stethoscope, 
  Briefcase, 
  ChevronLeft,
  Quote,
  Activity,
  Award,
  BadgeCheck,
  UserPlus,
  ArrowLeft,
  Camera,
  Scale,
  Globe,
  Gavel
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { linkedin?: string; instagram?: string; mail?: string };
  category: 'management' | 'medical' | 'operations';
}

interface AdvisoryMember {
  id: number;
  name: string;
  role: string;
  expertise: string;
  institution: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "فرهاد مشتاقی",
    role: "بنیان‌گذار و مدیرعامل",
    bio: "با بیش از ۱۵ سال تجربه در مدیریت سازمان‌های مردم‌نهاد و دکتری روانشناسی، فرهاد بنیاد را با یک جرقه کوچک امید در سال ۱۳۹۵ بنا نهاد تا پلی میان رویا و واقعیت باشد.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    category: 'management',
    socials: { linkedin: "#", mail: "ceo@arezooha.ir" }
  },
  {
    id: 2,
    name: "دکتر سمانه ناصری",
    role: "مدیر دپارتمان پزشکی",
    bio: "متخصص انکولوژی کودکان با سوابق درخشان پژوهشی، سمانه نظارت مستقیم بر پرونده‌های پزشکی و تایید واجد شرایط بودن کودکان را بر عهده دارد.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop",
    category: 'medical',
    socials: { instagram: "#", mail: "medical@arezooha.ir" }
  },
  {
    id: 3,
    name: "امیرحسین راد",
    role: "مدیر عملیات و لجستیک",
    bio: "متخصص در طراحی رویدادهای غافلگیری؛ امیرحسین و تیمش مسئولیت تبدیل آرزوهای غیرممکن به واقعیت‌های لمس‌شدنی را بر عهده دارند.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    category: 'operations',
    socials: { linkedin: "#" }
  },
  {
    id: 4,
    name: "نیلوفر صادقی",
    role: "مددکار ارشد و مشاور خانواده",
    bio: "نیلوفر با صبوری و مهربانی، همراه همیشگی خانواده‌ها در مراحل دشوار درمان و ثبت آرزوهای فرزندانشان است.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop",
    category: 'medical',
    socials: { mail: "support@arezooha.ir" }
  },
  {
    id: 5,
    name: "رضا کریمی",
    role: "مدیر روابط عمومی و حامیان",
    bio: "رضا مسئولیت شفافیت در گزارش‌دهی و جذب منابع برای برآورده کردن آرزوهای بیشتر را در بنیاد بر عهده دارد.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    category: 'management',
    socials: { linkedin: "#" }
  },
  {
    id: 6,
    name: "سارا مهدوی",
    role: "هماهنگ‌کننده شبکه داوطلبان",
    bio: "سارا با انرژی بی‌پایان، شبکه بزرگ داوطلبان ما را سازماندهی کرده و اطمینان حاصل می‌کند که هر داوطلب در بهترین جایگاه قرار گیرد.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    category: 'operations',
    socials: { instagram: "#" }
  }
];

const advisoryBoard: AdvisoryMember[] = [
  {
    id: 1,
    name: "دکتر کامران سعیدی",
    role: "مشاور ارشد پزشکی",
    expertise: "فوق تخصص انکولوژی",
    institution: "دانشگاه علوم پزشکی تهران",
    icon: <Stethoscope size={24} className="text-blue-600" />
  },
  {
    id: 2,
    name: "استاد مینا علوی",
    role: "مشاور حقوقی و بین‌الملل",
    expertise: "حقوق سازمان‌های مردم‌نهاد",
    institution: "عضو کانون وکلا",
    icon: <Gavel size={24} className="text-orange-500" />
  },
  {
    id: 3,
    name: "مهندس آرش تهرانی",
    role: "مشاور استراتژی برند",
    expertise: "متخصص بازاریابی اجتماعی",
    institution: "آژانس خلاقیت پالس",
    icon: <Globe size={24} className="text-purple-500" />
  },
  {
    id: 4,
    name: "دکتر نیما بهرامی",
    role: "مشاور روانشناسی بالینی",
    expertise: "متخصص تروما کودکان",
    institution: "انجمن روانشناسی ایران",
    icon: <Heart size={24} className="text-red-500" />
  }
];

const Team: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'management' | 'medical' | 'operations'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMembers = teamMembers.filter(m => filter === 'all' || m.category === filter);

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1D264F]">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
            alt="Team Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D264F] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-2xl text-blue-100 text-sm font-black mb-2 backdrop-blur-md">
            <Users size={20} className="text-orange-400" />
            تیم متخصص و عاشق بنیاد
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            تپش قلب ما، برای <span className="text-orange-500">رویاهای</span> آن‌هاست
          </h1>
          
          <p className="text-blue-50/80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            ما مجموعه‌ای از متخصصان پزشکی، مددکاران، هنرمندان و داوطلبانی هستیم که دور هم جمع شده‌ایم تا به یک باور معنا ببخشیم: آرزوها قدرت شفا دارند.
          </p>

          <div className="flex gap-10 pt-4">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">۱۲۰+</span>
                <span className="text-xs font-bold text-white/50 uppercase tracking-widest">داوطلب متخصص</span>
             </div>
             <div className="w-px h-12 bg-white/20"></div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">۱۵</span>
                <span className="text-xs font-bold text-white/50 uppercase tracking-widest">عضو هسته مرکزی</span>
             </div>
          </div>
        </div>
      </section>

      {/* Founder Message - Special Layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[100px] opacity-60"></div>
         <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-blue-900/5 border border-gray-50 flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/3 relative group">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-orange-200 rounded-[3.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                  <img src={teamMembers[0].image} alt="CEO" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl flex gap-4 text-blue-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <Linkedin size={20} className="hover:text-blue-600 cursor-pointer" />
                      <Instagram size={20} className="hover:text-orange-500 cursor-pointer" />
                      <Mail size={20} className="hover:text-blue-800 cursor-pointer" />
                  </div>
                </div>
            </div>
            <div className="lg:w-2/3 space-y-8 text-right">
                <div className="bg-orange-100 text-orange-600 px-6 py-2 rounded-2xl inline-block text-sm font-black mb-2">پیام بنیان‌گذار</div>
                <h2 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
                  داستانی که با یک <span className="text-orange-500">سوال</span> آغاز شد
                </h2>
                <div className="relative">
                   <Quote className="absolute -top-10 -right-12 text-blue-50 w-24 h-24 -z-10" />
                   <p className="text-gray-600 text-lg md:text-xl leading-[2.2] font-medium text-justify italic">
                      "از من می‌پرسند چرا تمام وقت و انرژی خود را صرف آرزوی دیگران می‌کنی؟ پاسخ من ساده است: چون دیده‌ام که چگونه یک لبخند می‌تواند مرگ را به عقب براند. ما در بنیاد آرزوها، فقط به کودکان هدیه نمی‌دهیم؛ ما به آن‌ها دلیلی برای فردا می‌دهیم. این تیم، خانواده‌ای است که با عشق انتخاب شده تا جادو را به زندگی‌های خاکستری برگرداند."
                   </p>
                </div>
                <div className="pt-4 border-r-4 border-orange-500 pr-6">
                    <div className="text-2xl font-black text-blue-900">فرهاد مشتاقی</div>
                    <div className="text-gray-400 font-bold">بنیان‌گذار بنیاد آرزوها</div>
                </div>
            </div>
         </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-6">
         <div className="flex flex-wrap justify-center gap-3 md:gap-6 bg-white p-3 rounded-3xl shadow-sm border border-gray-100 max-w-fit mx-auto">
            {[
              { id: 'all', label: 'همه اعضا', icon: <Users size={18} /> },
              { id: 'management', label: 'مدیریت و راهبرد', icon: <Briefcase size={18} /> },
              { id: 'medical', label: 'تیم پزشکی و مددکاری', icon: <Stethoscope size={18} /> },
              { id: 'operations', label: 'عملیات و داوطلبان', icon: <Activity size={18} /> },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-sm transition-all whitespace-nowrap ${
                  filter === btn.id 
                  ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20' 
                  : 'text-gray-400 hover:text-blue-900 hover:bg-gray-50'
                }`}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
         </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMembers.map((member) => (
            <div key={member.id} className="group relative flex flex-col bg-white rounded-[3.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-blue-900 font-black text-[10px] shadow-lg">
                  {member.category === 'management' ? 'تیم مدیریت' : member.category === 'medical' ? 'تیم درمانی' : 'تیم اجرایی'}
                </div>

                {/* Social Floating */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="bg-white/20 backdrop-blur-xl p-3 rounded-xl text-white hover:bg-blue-600 transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials.mail && (
                      <a href={`mailto:${member.socials.mail}`} className="bg-white/20 backdrop-blur-xl p-3 rounded-xl text-white hover:bg-orange-500 transition-colors">
                        <Mail size={20} />
                      </a>
                    )}
                </div>
              </div>
              
              <div className="p-10 space-y-4 text-right">
                <div className="flex justify-between items-center">
                  <BadgeCheck size={24} className="text-blue-500" />
                  <h3 className="text-2xl font-black text-blue-900">{member.name}</h3>
                </div>
                <p className="text-orange-600 font-black text-sm">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-medium min-h-[60px]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board Section - RE-DESIGNED */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-3xl md:text-5xl font-black text-blue-900">همراهان و <span className="text-orange-500">مشاوران</span> عالی</h2>
             <p className="text-gray-500 font-bold max-w-2xl mx-auto">متخصصانی که با دانش و تجربه خود، مسیر ما را برای خدمت‌رسانی بهتر روشن می‌کنند.</p>
             <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((advisor) => (
              <div key={advisor.id} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                 <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {advisor.icon}
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-xl font-black text-blue-900">{advisor.name}</h3>
                    <p className="text-blue-600 font-black text-xs">{advisor.role}</p>
                 </div>
                 <div className="pt-4 border-t border-gray-50 w-full space-y-2">
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black inline-block">
                       {advisor.expertise}
                    </div>
                    <div className="text-gray-400 text-[10px] font-bold">
                       {advisor.institution}
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Member Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-[#1D264F] rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Sparkles className="absolute top-10 left-10 w-32 h-32 text-orange-400" />
                <Star className="absolute bottom-10 right-10 w-48 h-48 text-blue-400" fill="currentColor" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="text-right space-y-6 lg:w-2/3">
                  <h2 className="text-3xl md:text-5xl font-black leading-tight">جای تو در تیم ما <span className="text-orange-500">خالیست</span></h2>
                  <p className="text-blue-100/70 text-lg md:text-xl font-medium leading-loose">
                    آیا شما هم متخصصی هستید که می‌خواهید وقت و مهارت خود را برای نشاندن لبخند بر لبان کودکان قهرمان صرف کنید؟ ما همیشه از حضور قلب‌های بزرگ استقبال می‌کنیم.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-end">
                     <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-xs font-black">
                        <ShieldCheck size={18} className="text-green-400" /> فضای حرفه‌ای و استاندارد
                     </div>
                     <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-xs font-black">
                        <Heart size={18} className="text-red-400" fill="currentColor" /> محیطی سرشار از عشق
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/3 w-full">
                  <Link 
                    to="/volunteer" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-orange-500/30 transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
                  >
                    <UserPlus size={24} />
                    داوطلب شوید
                    <ArrowLeft size={24} />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Team;