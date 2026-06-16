
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  ChevronLeft, 
  Star, 
  MapPin, 
  Calendar, 
  User, 
  Award, 
  Share2, 
  ArrowLeft, 
  Sparkles,
  CheckCircle2,
  Clock,
  HandHeart,
  Camera,
  Play,
  MessageSquareQuote,
  Quote,
  Send
} from 'lucide-react';

// Database of all wishes to make the page dynamic
const WISHES_DATABASE: Record<string, any> = {
  "1": {
    name: "آرش",
    age: 8,
    city: "تهران",
    wish: "سفر به دیزنی‌لند و ملاقات با میکی‌موس",
    cat: "to_go",
    status: "granted",
    mainImg: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544333346-64e4fe18274b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
    ],
    story: "آرش از زمانی که خیلی کوچک بود، همیشه آرزو داشت شخصیت‌های کارتونی مورد علاقه‌اش را از نزدیک ببیند. او که با بیماری سختی دست و پنجه نرم می‌کرد، قدرت عجیبی در تخیل داشت. با حمایت حامیان عزیز، این رویای دور از دسترس به یک واقعیت شیرین تبدیل شد. آرش نه تنها به سفر رفت، بلکه یک روز کامل را در کنار میکی‌موس گذراند.",
    impact: "پزشکان آرش معتقدند این تجربه تاثیر بسیار مثبتی بر روند روحی او داشته و انگیزه او را برای ادامه درمان چندین برابر کرده است."
  },
  "2": {
    name: "مهسا",
    age: 10,
    city: "شیراز",
    wish: "پلیس شدن برای یک روز",
    cat: "to_be",
    status: "in_progress",
    mainImg: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501503060443-ec2136e651e4?q=80&w=1000",
      "https://images.unsplash.com/photo-1471189641895-16c58a695bcb?q=80&w=1000"
    ],
    story: "مهسا همیشه با تحسین به نیروهای پلیس نگاه می‌کرد. او می‌خواهد امنیت را برقرار کند و نشان دهد که شجاعت به سن و سال نیست. ما در حال هماهنگی با نیروی انتظامی هستیم تا یک روز فراموش‌نشدنی برای او رقم بزنیم.",
    impact: "این آرزو به مهسا کمک می‌کند تا خود را یک قهرمان ببیند، نه یک بیمار."
  },
  "3": {
    name: "امیرعلی",
    age: 12,
    city: "تبریز",
    wish: "داشتن یک کنسول بازی",
    cat: "to_have",
    status: "pending",
    mainImg: "https://images.unsplash.com/photo-1594913785162-e6785b493bd2?q=80&w=2071&auto=format&fit=crop",
    gallery: [],
    story: "امیرعلی به دلیل طولانی شدن روند درمان، زمان زیادی را در خانه می‌گذراند. دنیای بازی‌ها برای او دریچه‌ای به سوی هیجان و ارتباط با دوستانش است. او آرزو دارد جدیدترین کنسول بازی را داشته باشد تا دوران نقاهت را با لبخند بگذراند.",
    impact: "سرگرمی‌های دیجیتال می‌تواند درد و خستگی ناشی از درمان‌های طولانی را برای کودکان کاهش دهد."
  },
  "4": {
    name: "یاسمن",
    age: 9,
    city: "اصفهان",
    wish: "دیدار با عمو پورنگ",
    cat: "to_meet",
    status: "granted",
    mainImg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1496337589254-7e19d01ced44?q=80&w=1000"
    ],
    story: "یاسمن تمام برنامه‌های عمو پورنگ را حفظ است. او در سخت‌ترین لحظات بیماری با دیدن برنامه‌های او می‌خندید. رویای او این بود که یک بار از نزدیک با قهرمان دوران کودکی‌اش صحبت کند.",
    impact: "خنده بهترین دارو است و یاسمن بعد از این دیدار روحیه فوق‌العاده‌ای پیدا کرد."
  }
};

const WishDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Use id to get specific child data, fallback to Arash (ID 1) if not found
  const wish = WISHES_DATABASE[id || "1"] || WISHES_DATABASE["1"];

  // Mock data for messages list
  const [messages, setMessages] = useState([
    { id: 1, sender: "مریم راد", text: `قهرمان عزیز، ${wish.name} شجاع، تو الگوی ما هستی. بخند که لبخندت دنیا رو قشنگ‌تر می‌کنه.`, date: "۲ ساعت پیش" },
    { id: 2, sender: "علی کاظمی", text: `خیلی خوشحالم که مسیر آرزوت شروع شده. همیشه پرقدرت به مبارزه ادامه بده قهرمان.`, date: "۵ ساعت پیش" },
    { id: 3, sender: "ناشناس", text: "دنیای ما به آدم‌های شجاعی مثل تو نیاز داره. همیشه موفق باشی فرشته کوچک.", date: "۱ روز پیش" },
  ]);

  const [senderName, setSenderName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const msg = {
      id: Date.now(),
      sender: senderName.trim() || "حامی مهربان",
      text: newMessage,
      date: "همین الان"
    };
    setMessages([msg, ...messages]);
    setNewMessage("");
    setSenderName("");
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'granted': return { text: 'تحقق یافته', color: 'bg-green-500', icon: <CheckCircle2 size={18} /> };
      case 'in_progress': return { text: 'در حال اجرا', color: 'bg-orange-500', icon: <Clock size={18} /> };
      case 'pending': return { text: 'نیاز به حامی', color: 'bg-blue-600', icon: <HandHeart size={18} /> };
      default: return { text: '', color: '', icon: null };
    }
  };

  const statusConfig = getStatusConfig(wish.status);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Hero Section - Reduced height as requested */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img src={wish.mainImg} alt={wish.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12">
            <div className="flex flex-col gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                <Link to="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
                <ChevronLeft size={14} />
                <Link to="/gallery" className="hover:text-white transition-colors">گالری لبخندها</Link>
                <ChevronLeft size={14} />
                <span className="text-white">داستان {wish.name}</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4 text-right">
                  <div className={`inline-flex items-center gap-2 ${statusConfig.color} text-white px-5 py-2 rounded-2xl text-xs font-black shadow-xl`}>
                    {statusConfig.icon}
                    {statusConfig.text}
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                    آرزوی {wish.name} برای <br className="hidden md:block" />
                    <span className="text-orange-400">{wish.wish}</span>
                  </h1>
                </div>
                <div className="flex gap-4">
                   <button className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl text-white hover:bg-white/20 transition-all">
                      <Share2 size={24} />
                   </button>
                   <button className="bg-red-500 p-3 md:p-4 rounded-2xl text-white shadow-xl shadow-red-500/20 hover:scale-110 transition-transform">
                      <Heart size={24} fill="currentColor" />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            {/* Child Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
               <div className="flex flex-col items-center gap-2 text-center border-l md:border-l border-gray-50 last:border-0">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-800"><User size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">نام کودک</span>
                  <span className="text-blue-900 font-black">{wish.name}</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center border-l md:border-l border-gray-50 last:border-0">
                  <div className="p-3 bg-orange-50 rounded-2xl text-orange-600"><Calendar size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">سن</span>
                  <span className="text-blue-900 font-black">{wish.age} ساله</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center border-l md:border-l border-gray-50 last:border-0">
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600"><MapPin size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">شهر</span>
                  <span className="text-blue-900 font-black">{wish.city}</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center">
                  <div className="p-3 bg-purple-50 rounded-2xl text-purple-600"><Award size={20} /></div>
                  <span className="text-gray-400 text-xs font-bold">نوع آرزو</span>
                  <span className="text-blue-900 font-black uppercase text-[10px] tracking-widest">{wish.cat === 'to_go' ? 'می‌خواهم بروم' : wish.cat === 'to_be' ? 'می‌خواهم باشم' : wish.cat === 'to_have' ? 'می‌خواهم داشته باشم' : 'می‌خواهم ببینم'}</span>
               </div>
            </div>

            {/* The Story */}
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-gray-100 space-y-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-orange-500 opacity-20"></div>
               <h2 className="text-3xl font-black text-blue-900 flex items-center gap-3">
                  <Sparkles className="text-orange-500" />
                  داستان یک رویا
               </h2>
               <div className="space-y-6 text-gray-600 leading-[2.2] text-justify font-medium text-lg">
                  <p>{wish.story}</p>
                  <div className="bg-blue-50/50 p-8 rounded-3xl border-r-4 border-blue-800 italic text-blue-900">
                     "{wish.impact}"
                  </div>
               </div>
            </div>

            {/* Photo Gallery (Only if exists) */}
            {wish.gallery && wish.gallery.length > 0 && (
              <div className="space-y-8">
                 <h3 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                    <Camera className="text-blue-800" />
                    تصاویر این خاطره
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {wish.gallery.map((img: string, idx: number) => (
                      <div key={idx} className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white transform transition-transform hover:-rotate-2">
                         <img src={img} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Play size={40} className="text-white fill-white opacity-80" />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {/* NEW: Messages Display Section (Wall of Hope) */}
            <div className="space-y-8 pt-8">
               <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                      <MessageSquareQuote className="text-orange-500" />
                      دیوار امید و مهربانی
                    </h3>
                    <p className="text-sm text-gray-400 font-bold mr-9">پیام‌های پرمهر شما برای {wish.name}</p>
                  </div>
                  <span className="text-xs font-black text-blue-800 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">{messages.length} پیام دریافت شده</span>
               </div>
               
               <div className="grid grid-cols-1 gap-6">
                  {messages.map((msg) => (
                    <div key={msg.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex gap-6 relative group overflow-hidden transition-all hover:shadow-md animate-in fade-in slide-in-from-right-4">
                       <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-5 transition-opacity">
                          <Quote size={120} className="text-blue-900" />
                       </div>
                       <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-blue-800 shadow-inner">
                             <User size={28} />
                          </div>
                       </div>
                       <div className="flex-grow space-y-3 relative z-10">
                          <div className="flex justify-between items-center">
                             <h4 className="font-black text-blue-900 text-lg">{msg.sender}</h4>
                             <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-3 py-1 rounded-full flex items-center gap-1">
                                <Clock size={12} />
                                {msg.date}
                             </span>
                          </div>
                          <p className="text-gray-600 leading-loose font-medium text-base text-justify italic">
                             "{msg.text}"
                          </p>
                       </div>
                    </div>
                  ))}
                  {messages.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100">
                       <MessageSquareQuote size={48} className="mx-auto text-gray-200 mb-4" />
                       <p className="text-gray-400 font-black italic">هنوز پیامی برای این قهرمان ثبت نشده است. اولین نفر باشید!</p>
                    </div>
                  )}
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Support Card */}
              <div className="bg-[#1D264F] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                 <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black">شما هم معجزه‌گر باشید</h3>
                      <p className="text-blue-100/60 font-medium leading-relaxed">حمایت‌های شما مستقیماً لبخند می‌سازد.</p>
                    </div>
                    <div className="space-y-4">
                       <Link to="/donate" className="flex items-center justify-center gap-3 w-full py-5 bg-orange-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all hover:-translate-y-1">
                          <Heart size={20} fill="currentColor" />
                          حمایت مالی
                       </Link>
                       <button className="flex items-center justify-center gap-3 w-full py-5 bg-white/10 text-white rounded-2xl font-black border border-white/20 hover:bg-white/20 transition-all">
                          داوطلب می‌شوم
                       </button>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                       <div className="flex items-center gap-4 text-sm text-blue-200/60 font-medium">
                          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center"><Star size={20} className="text-yellow-400" /></div>
                          این آرزو با حمایت فرشته‌های مهربان پیش می‌رود.
                       </div>
                    </div>
                 </div>
              </div>

              {/* Message Input Section */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
                 <h4 className="text-xl font-black text-blue-900 flex items-center gap-2">
                   <Send size={20} className="text-orange-500" />
                   پیام امید برای {wish.name}
                 </h4>
                 
                 <div className="space-y-4">
                    <input 
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="نام شما (اختیاری)"
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all font-medium placeholder:text-gray-300"
                    />
                    <textarea 
                       value={newMessage}
                       onChange={(e) => setNewMessage(e.target.value)}
                       placeholder="جمله‌ای زیبا برای این قهرمان بنویسید..." 
                       className="w-full h-32 bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-blue-100 transition-all resize-none font-medium placeholder:text-gray-300"
                    ></textarea>
                 </div>
                 
                 <button 
                    onClick={handleSendMessage}
                    className="w-full py-4 bg-blue-50 text-blue-800 rounded-2xl font-black text-sm hover:bg-blue-800 hover:text-white transition-all shadow-sm"
                 >
                    ارسال پیام مهربانی
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Stories Footer */}
        <div className="mt-32 space-y-12">
           <div className="flex justify-between items-end border-b border-gray-100 pb-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-blue-900">آرزوهای شنیدنی دیگر</h3>
                <p className="text-gray-400 font-bold">قهرمانان دیگری که با امید می‌جنگند</p>
              </div>
              <Link to="/gallery" className="text-blue-800 font-black flex items-center gap-2 hover:underline bg-blue-50 px-6 py-3 rounded-2xl transition-all">
                 مشاهده همه
                 <ArrowLeft size={18} />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.values(WISHES_DATABASE).filter(w => w.name !== wish.name).slice(0, 3).map((item, i) => (
                <Link to={`/wish/${Object.keys(WISHES_DATABASE).find(key => WISHES_DATABASE[key] === item)}`} key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                   <div className="aspect-video overflow-hidden relative">
                      <img src={item.mainImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                   </div>
                   <div className="p-8 space-y-2">
                      <h4 className="text-xl font-black text-blue-900">آرزوی {item.name}</h4>
                      <p className="text-orange-600 font-black text-sm">{item.wish}</p>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default WishDetail;
