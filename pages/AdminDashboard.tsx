
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Star, 
  Users, 
  HandHeart, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown,
  CheckCircle2, 
  Clock,
  AlertCircle,
  MoreVertical,
  Filter,
  ArrowUpRight,
  ArrowLeft,
  Calendar,
  DollarSign,
  User,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Building2,
  MessageCircle,
  Newspaper,
  Quote,
  Eye,
  Trash2,
  Edit3,
  Plus,
  ImageIcon,
  Upload,
  MapPin,
  MessageSquareQuote,
  X,
  ArrowRight,
  Save,
  Check,
  AlertTriangle,
  Mail,
  Phone,
  Briefcase,
  Award,
  GraduationCap,
  Handshake,
  BarChart3,
  Globe,
  FileText,
  XCircle,
  Reply,
  ShieldAlert,
  Hash,
  Type,
  Layers,
  BarChart,
  Download,
  CreditCard,
  ArrowDownLeft,
  ArrowUpRight as ArrowUpRightIcon,
  Wallet,
  PieChart as PieChartIcon,
  Receipt
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('donations');
  const [isAddingWish, setIsAddingWish] = useState(false);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [editingMessagesFor, setEditingMessagesFor] = useState<number | null>(null);
  
  // States for various modules
  const [viewingExperience, setViewingExperience] = useState<any>(null);
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [viewingVolunteer, setViewingVolunteer] = useState<any>(null);
  const [volunteerFilter, setVolunteerFilter] = useState('all');
  const [viewingPartner, setViewingPartner] = useState<any>(null);
  const [partnerFilter, setPartnerFilter] = useState('all');
  const [viewingComment, setViewingComment] = useState<any>(null);
  const [commentFilter, setCommentFilter] = useState('all');
  const [replyText, setReplyText] = useState('');
  const [blogFilter, setBlogFilter] = useState('all');

  // Financial States
  const [financeFilter, setFinanceFilter] = useState('all');

  const stats = [
    { label: "مجموع حمایت‌ها", value: "۴.۲ میلیارد", trend: "+۱۲٪", icon: <DollarSign size={24} />, color: "bg-blue-500" },
    { label: "آرزوهای فعال", value: "۲۸", trend: "+۳", icon: <Star size={24} />, color: "bg-orange-500" },
    { label: "داوطلبان جدید", value: "۱۴", trend: "+۸٪", icon: <Users size={24} />, color: "bg-emerald-500" },
    { label: "تراکنش‌های امروز", value: "۱۲۰ میلیون", trend: "-۲٪", icon: <TrendingUp size={24} />, color: "bg-purple-500" },
  ];

  const sidebarItems = [
    { id: 'overview', label: 'پیشخوان', icon: <LayoutDashboard size={20} /> },
    { id: 'wishes', label: 'مدیریت آرزوها', icon: <Star size={20} /> },
    { id: 'experiences', label: 'مدیریت تجربه‌ها', icon: <Quote size={20} /> },
    { id: 'volunteers', label: 'مدیریت داوطلبین', icon: <Users size={20} /> },
    { id: 'partners', label: 'شرکای تجاری', icon: <Building2 size={20} /> },
    { id: 'comments', label: 'مدیریت نظرات', icon: <MessageCircle size={20} /> },
    { id: 'blog', label: 'مدیریت وبلاگ', icon: <Newspaper size={20} /> },
    { id: 'donations', label: 'گزارش‌های مالی', icon: <HandHeart size={20} /> },
    { id: 'settings', label: 'تنظیمات سیستم', icon: <Settings size={20} /> },
  ];

  const mockTransactions = [
    { id: 1, donor: "حمید توسلی", amount: "۵,۰۰۰,۰۰۰", type: "حمایت مستقیم", target: "آرزوی آرش", status: "success", gateway: "بانک ملت", date: "۱۰:۴۵ - ۱۴۰۳/۰۲/۱۸", ref: "TR-99281" },
    { id: 2, donor: "هلدینگ پارس", amount: "۸۵,۰۰۰,۰۰۰", type: "مسئولیت اجتماعی", target: "صندوق عمومی", status: "success", gateway: "واریز شناسه", date: "۰۹:۱۵ - ۱۴۰۳/۰۲/۱۸", ref: "TR-99275" },
    { id: 3, donor: "ناشناس", amount: "۲۰۰,۰۰۰", type: "حمایت خرد", target: "آرزوی مریم", status: "failed", gateway: "زرین‌پال", date: "۰۸:۳۰ - ۱۴۰۳/۰۲/۱۸", ref: "TR-99264" },
    { id: 4, donor: "زهرا کریمی", amount: "۱,۵۰۰,۰۰۰", type: "ماهانه", target: "حلقه ستارگان", status: "success", gateway: "بانک ملی", date: "۲۳:۱۰ - ۱۴۰۳/۰۲/۱۷", ref: "TR-99240" },
    { id: 5, donor: "امیرمحمدی", amount: "۱۰,۰۰۰,۰۰۰", type: "نذری", target: "هزینه درمان", status: "pending", gateway: "بانک سامان", date: "۲۰:۴۰ - ۱۴۰۳/۰۲/۱۷", ref: "TR-99232" },
  ];

  const mockPartners = [
    { id: 1, name: "هلدینگ پارس", type: "حمایت مالی (طلایی)", industry: "صنایع غذایی", status: "active", contact: "مهندس علوی", totalSupport: "۸۵۰ میلیون", date: "۱۴۰۲/۰۶/۱۵" },
  ];

  const mockExperiences = [
    { id: 1, name: "مریم راد", role: "مادر سمانه", text: "وقتی آرزوی دخترم برآورده شد، انگار تمام خستگی‌ها از تن ما بیرون رفت.", cat: 'family', status: 'published', date: "۲ هفته پیش" },
  ];

  const mockVolunteers = [
    { id: 1, name: "علیرضا صبوری", city: "تهران", skill: "عکاسی", status: "verified", joinDate: "۱۴۰۲/۰۵/۱۰", bio: "عکاس حرفه‌ای با سابقه همکاری در پروژه‌های اجتماعی.", email: "alireza@mail.com", phone: "۰۹۱۲۳۴۵۶۷۸۹" },
  ];

  const mockComments = [
    { id: 1, author: "حمید توسلی", email: "hamid@mail.com", text: "چطور می‌توانم به صورت مستقیم برای آرزوی آرش کمک مالی واریز کنم؟ آیا درگاه مستقیم دارید؟", target: "آرزوی آرش نیکو", status: "pending", date: "۱۰ دقیقه پیش" },
  ];

  const mockBlogPosts = [
    { id: 1, title: "تاثیر مثبت برآورده شدن آرزو بر روند درمان", category: "پزشکی و سلامت", author: "دکتر سمانه ناصری", views: "۱۲۴۰", status: "published", date: "۱۴۰۲/۱۲/۱۵", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=200" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                      {stat.icon}
                    </div>
                    <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                      {stat.trend.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {stat.trend}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400 text-xs font-bold">{stat.label}</div>
                    <div className="text-2xl font-black text-blue-950" dir="ltr">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'donations':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Financial Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10 space-y-4">
                     <div className="bg-white/10 p-4 rounded-2xl w-fit"><Wallet size={32} className="text-orange-400" /></div>
                     <div>
                        <div className="text-xs font-bold text-blue-200/60 uppercase tracking-widest mb-1">موجودی جاری صندوق</div>
                        <div className="text-3xl font-black" dir="ltr">۱,۸۵۰,۰۰۰,۰۰۰ <span className="text-sm font-medium">تومان</span></div>
                     </div>
                     <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-bold">
                        <span className="text-blue-200">بروزرسانی: امروز ۱۱:۰۰</span>
                        <span className="flex items-center gap-1 text-emerald-400"><TrendingUp size={12}/> +۴٪ از دیروز</span>
                     </div>
                  </div>
               </div>

               <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div className="bg-orange-50 p-4 rounded-2xl"><PieChartIcon size={32} className="text-orange-500" /></div>
                     <div className="text-left font-black text-blue-900 text-sm">اهداف مالی ماه</div>
                  </div>
                  <div className="mt-6 space-y-2">
                     <div className="flex justify-between text-xs font-black text-gray-400">
                        <span>تخصص یافته به آرزوها</span>
                        <span>۷۸٪</span>
                     </div>
                     <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full w-[78%]"></div>
                     </div>
                  </div>
                  <p className="mt-4 text-[10px] text-gray-400 font-bold leading-relaxed">بیشترین هزینه‌کرد مربوط به آرزوهای بخش "سفر و اقامت" بوده است.</p>
               </div>

               <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div className="bg-emerald-50 p-4 rounded-2xl"><Receipt size={32} className="text-emerald-500" /></div>
                     <div className="text-left font-black text-blue-900 text-sm">تراکنش‌های منتظر تایید</div>
                  </div>
                  <div className="mt-4">
                     <div className="text-4xl font-black text-blue-950">۱۲</div>
                     <p className="text-[10px] text-gray-400 font-bold mt-2">تراکنش مشکوک یا نیازمند بررسی دستی توسط مدیر مالی</p>
                  </div>
                  <button className="mt-6 w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl font-black text-[10px] hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2">
                     <ShieldCheck size={14} /> مشاهده موارد نیازمند بررسی
                  </button>
               </div>
            </div>

            {/* Transactions Table Section */}
            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-l from-blue-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <CreditCard className="text-blue-600" />
                    مدیریت تراکنش‌ها و حمایت‌های مالی
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">مشاهده دقیق تاریخچه واریزی‌ها، حامیان و تخصیص بودجه</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-2xl text-[11px] font-black flex items-center gap-2 hover:bg-gray-200 transition-all">
                      <Download size={18} /> خروجی Excel
                   </button>
                   <div className="w-px h-10 bg-gray-100 mx-2"></div>
                   {[
                     { id: 'all', label: 'همه تراکنش‌ها', count: 1240 },
                     { id: 'success', label: 'موفق', count: 1102 },
                     { id: 'failed', label: 'ناموفق', count: 138 },
                   ].map(btn => (
                     <button 
                       key={btn.id}
                       onClick={() => setFinanceFilter(btn.id)}
                       className={`px-6 py-3 rounded-2xl text-[11px] font-black transition-all flex items-center gap-2 ${financeFilter === btn.id ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}
                     >
                       {btn.label}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] ${financeFilter === btn.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>{btn.count}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">نام حامی / موسسه</th>
                      <th className="px-8 py-5">مبلغ (تومان)</th>
                      <th className="px-8 py-5">نوع و هدف حمایت</th>
                      <th className="px-8 py-5">وضعیت / درگاه</th>
                      <th className="px-8 py-5">زمان و کد رهگیری</th>
                      <th className="px-8 py-5 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockTransactions
                      .filter(t => financeFilter === 'all' || t.status === financeFilter)
                      .map((tr) => (
                      <tr key={tr.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <User size={18} />
                             </div>
                             {tr.donor}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-lg font-black text-blue-950" dir="ltr">{tr.amount}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex flex-col">
                              <span className="text-[11px] font-black text-blue-800">{tr.type}</span>
                              <span className="text-[9px] font-bold text-gray-400">{tr.target}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              {tr.status === 'success' ? (
                                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
                                   <CheckCircle2 size={12} />
                                   <span className="text-[10px] font-black">موفق</span>
                                </div>
                              ) : tr.status === 'failed' ? (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                                   <XCircle size={12} />
                                   <span className="text-[10px] font-black">ناموفق</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">
                                   <Clock size={12} />
                                   <span className="text-[10px] font-black">در انتظار</span>
                                </div>
                              )}
                              <span className="text-[9px] font-bold text-gray-300">({tr.gateway})</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-gray-500">{tr.date}</span>
                              <span className="text-[9px] font-black text-blue-400 uppercase tracking-tighter">{tr.ref}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="مشاهده رسید">
                              <FileText size={18} />
                            </button>
                            <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="تایید دستی">
                              <CheckCircle2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-400">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    تمامی تراکنش‌ها با استاندارد SSL و امنیت ۱۰۰٪ پردازش می‌شوند.
                 </div>
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">بعدی</button>
                   <button className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-blue-900/20">۱</button>
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">قبلی</button>
                 </div>
              </div>
            </div>

            {/* Financial Insights Footer Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 flex-shrink-0 relative">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="64" cy="64" r="54" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                        <circle cx="64" cy="64" r="54" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="339" strokeDashoffset="27" />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-blue-950">۹۲٪</div>
                  </div>
                  <div className="space-y-4 text-right">
                     <h4 className="text-xl font-black text-blue-900">بهره‌وری تخصص بودجه</h4>
                     <p className="text-gray-500 text-xs font-medium leading-relaxed">
                        ۹۲٪ از مبالغ دریافتی مستقیماً برای تحقق آرزوها و درمان هزینه شده است که فراتر از استانداردهای سازمان‌های NGO بین‌المللی است.
                     </p>
                     <button className="text-blue-600 font-black text-[10px] flex items-center gap-2 hover:underline">مشاهده جزئیات گزارش شفافیت <ArrowLeft size={12}/></button>
                  </div>
               </div>
               <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
                  <div className="bg-orange-50 p-8 rounded-[2.5rem] flex-shrink-0"><BarChart3 size={48} className="text-orange-500" /></div>
                  <div className="space-y-4 text-right">
                     <h4 className="text-xl font-black text-blue-900">رشد مشارکت‌ها</h4>
                     <p className="text-gray-500 text-xs font-medium leading-relaxed">
                        میزان حمایت‌های مردمی در فصل بهار نسبت به سال گذشته ۳۵٪ رشد داشته است. بیشترین رشد مربوط به "حمایت‌های ماهیانه" بوده است.
                     </p>
                     <button className="text-orange-600 font-black text-[10px] flex items-center gap-2 hover:underline">تحلیل آماری کامل <ArrowLeft size={12}/></button>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'blog':
        return isAddingPost ? (
          <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden animate-in slide-in-from-left-4 duration-500">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gradient-to-l from-blue-50/30 to-transparent">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsAddingPost(false)}
                  className="p-3 bg-white shadow-sm hover:bg-gray-50 rounded-2xl transition-colors text-blue-900"
                >
                  <ArrowRight size={20} />
                </button>
                <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                  <Plus className="text-blue-600" />
                  نگارش مقاله جدید در مجله خبری
                </h3>
              </div>
            </div>
            
            <form className="p-10 space-y-10" onSubmit={(e) => { e.preventDefault(); setIsAddingPost(false); }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <Type size={14} /> عنوان اصلی مقاله
                    </label>
                    <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-5 text-lg font-black text-blue-950 focus:ring-2 focus:ring-blue-100 transition-all" placeholder="عنوان جذاب خود را اینجا بنویسید..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <FileText size={14} /> چکیده و توضیح کوتاه
                    </label>
                    <textarea className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-24 resize-none leading-relaxed" placeholder="خلاصه‌ای از مقاله جهت نمایش در لیست اخبار..."></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <Layers size={14} /> متن کامل مقاله
                    </label>
                    <div className="relative">
                       <textarea required className="w-full bg-gray-50 border-none rounded-[2rem] p-6 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-96 resize-none leading-[2.2] text-justify" placeholder="داستان، خبر یا آموزش خود را با جزییات کامل در اینجا بنویسید..."></textarea>
                       <div className="absolute bottom-4 left-4 flex gap-2">
                          <button type="button" className="p-2 bg-white rounded-lg shadow-sm text-gray-400 hover:text-blue-600"><Star size={18} /></button>
                          <button type="button" className="p-2 bg-white rounded-lg shadow-sm text-gray-400 hover:text-blue-600"><Plus size={18} /></button>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Config Area */}
                <div className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-[2.5rem] space-y-6">
                    <h4 className="text-sm font-black text-blue-900 border-b border-gray-200 pb-3">تنظیمات انتشار</h4>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">دسته بندی</label>
                        <select className="w-full bg-white border-none rounded-xl p-4 text-xs font-black appearance-none cursor-pointer">
                          <option>پزشکی و سلامت</option>
                          <option>اخبار بنیاد</option>
                          <option>آموزشی</option>
                          <option>گزارش‌های موردی</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">برچسب‌ها (با کاما)</label>
                        <div className="relative">
                          <input type="text" className="w-full bg-white border-none rounded-xl pr-10 pl-4 py-4 text-xs font-medium" placeholder="امید، درمان، آرزو..." />
                          <Hash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">تصویر شاخص</label>
                        <label className="flex flex-col items-center justify-center w-full h-40 bg-white rounded-3xl border-2 border-dashed border-gray-200 cursor-pointer hover:bg-blue-50 transition-all group">
                           <Upload size={24} className="text-gray-300 group-hover:text-blue-500 mb-2" />
                           <span className="text-[10px] font-black text-gray-400 group-hover:text-blue-600">آپلود تصویر کاور</span>
                           <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900 rounded-[2.5rem] p-8 text-white space-y-6 shadow-xl shadow-blue-900/20">
                    <div className="flex items-center gap-3">
                       <BarChart size={24} className="text-orange-400" />
                       <h4 className="text-sm font-black">وضعیت نهایی</h4>
                    </div>
                    <p className="text-xs text-blue-100/60 leading-relaxed">
                      مقالات منتشر شده بلافاصله در وب‌سایت اصلی بنیاد و اپلیکیشن حامیان نمایش داده خواهند شد.
                    </p>
                    <div className="space-y-3">
                       <button type="submit" className="w-full py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2">
                          <CheckCircle2 size={18} /> تایید و انتشار آنی
                       </button>
                       <button type="button" className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-sm transition-all">
                          ذخیره در پیش‌نویس
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Blog Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 group hover:shadow-md transition-all">
                  <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <Newspaper size={24} />
                  </div>
                  <div>
                     <div className="text-[10px] font-black text-gray-400 uppercase mb-1">کل مقالات</div>
                     <div className="text-2xl font-black text-blue-950">۱۵۶</div>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 group hover:shadow-md transition-all">
                  <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                     <Eye size={24} />
                  </div>
                  <div>
                     <div className="text-[10px] font-black text-gray-400 uppercase mb-1">مجموع بازدیدها</div>
                     <div className="text-2xl font-black text-blue-950" dir="ltr">۲۴.۸K</div>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 group hover:shadow-md transition-all">
                  <div className="bg-orange-50 text-orange-600 p-4 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all">
                     <MessageSquare size={24} />
                  </div>
                  <div>
                     <div className="text-[10px] font-black text-gray-400 uppercase mb-1">نظرات دریافت شده</div>
                     <div className="text-2xl font-black text-blue-950">۴۸۲</div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-l from-blue-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <Newspaper className="text-blue-600" />
                    مدیریت محتوا و مجله آرزوها
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">نگارش، ویرایش و پایش آماری مقالات منتشر شده</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   <button 
                    onClick={() => setIsAddingPost(true)}
                    className="bg-blue-900 text-white px-8 py-3 rounded-2xl text-xs font-black flex items-center gap-2 shadow-xl shadow-blue-900/20 hover:-translate-y-1 transition-all ml-4"
                   >
                     <Plus size={18} /> نگارش مقاله جدید
                   </button>
                   {[
                     { id: 'all', label: 'همه مقالات', count: 156 },
                     { id: 'published', label: 'منتشر شده', count: 142 },
                     { id: 'draft', label: 'پیش‌نویس', count: 14 },
                   ].map(btn => (
                     <button 
                       key={btn.id}
                       onClick={() => setBlogFilter(btn.id)}
                       className={`px-6 py-3 rounded-2xl text-[11px] font-black transition-all flex items-center gap-2 ${blogFilter === btn.id ? 'bg-white text-blue-900 shadow-lg border border-blue-100' : 'bg-transparent text-gray-400 hover:text-blue-900'}`}
                     >
                       {btn.label}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] ${blogFilter === btn.id ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-400'}`}>{btn.count}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">عنوان مقاله</th>
                      <th className="px-8 py-5">نویسنده</th>
                      <th className="px-8 py-5">دسته بندی</th>
                      <th className="px-8 py-5">آمار بازدید</th>
                      <th className="px-8 py-5">وضعیت</th>
                      <th className="px-8 py-5 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockBlogPosts
                      .filter(p => blogFilter === 'all' || p.status === blogFilter)
                      .map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-4">
                             <div className="w-14 h-10 rounded-lg overflow-hidden bg-gray-100 shadow-sm">
                                <img src={post.img} className="w-full h-full object-cover" />
                             </div>
                             <span className="line-clamp-1 max-w-[250px]">{post.title}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-[8px]"><User size={12} /></div>
                              <span className="text-[11px] font-bold text-gray-600">{post.author}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-black">{post.category}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2 text-blue-600 font-black" dir="ltr">
                              <TrendingUp size={12} />
                              <span className="text-[11px]">{post.views}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              {post.status === 'published' ? (
                                <div className="flex items-center gap-2 text-emerald-600">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                   <span className="text-[10px] font-black">منتشر شده</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-orange-600">
                                   <Clock size={12} />
                                   <span className="text-[10px] font-black">پیش‌نویس</span>
                                </div>
                              )}
                           </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                              <Eye size={18} />
                            </button>
                            <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                              <Edit3 size={18} />
                            </button>
                            <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-400">
                    <Sparkles size={14} className="text-orange-400" />
                    استفاده از کلمات کلیدی در متن مقاله سئو سایت را بهبود می‌بخشد.
                 </div>
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">بعدی</button>
                   <button className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-black shadow-lg">۱</button>
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">قبلی</button>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'wishes':
        return isAddingWish ? (
          <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden animate-in slide-in-from-left-4 duration-500">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gradient-to-l from-orange-50/30 to-transparent">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsAddingWish(false)}
                  className="p-3 bg-white shadow-sm hover:bg-gray-50 rounded-2xl transition-colors text-blue-900"
                >
                  <ArrowRight size={20} />
                </button>
                <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                  <Plus className="text-orange-500" />
                  ثبت آرزوی جدید برای قهرمان کوچک
                </h3>
              </div>
            </div>
            
            <form className="p-10 space-y-12" onSubmit={(e) => { e.preventDefault(); setIsAddingWish(false); }}>
              {/* Basic Information */}
              <div className="space-y-6">
                <h4 className="text-sm font-black text-blue-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                   <User size={18} className="text-blue-500" />
                   اطلاعات پایه کودک
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2">نام و نام خانوادگی کودک</label>
                    <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-orange-100 transition-all" placeholder="مثلاً: آرش نیکو" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2">سن کودک</label>
                    <input type="number" required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-orange-100 transition-all" placeholder="مثلاً: ۹" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2">شهر محل سکونت</label>
                    <div className="relative">
                      <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl pr-12 pl-4 py-4 text-sm font-medium focus:ring-2 focus:ring-orange-100 transition-all" placeholder="نام شهر" />
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-2">نوع آرزو</label>
                    <select required className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-black appearance-none cursor-pointer focus:ring-2 focus:ring-orange-100">
                      <option value="">انتخاب کنید...</option>
                      <option value="to_go">می‌خواهم بروم (سفر)</option>
                      <option value="to_be">می‌خواهم باشم (شغل)</option>
                      <option value="to_have">می‌خواهم داشته باشم (هدیه)</option>
                      <option value="to_meet">می‌خواهم ببینم (ملاقات)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Story Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-black text-blue-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                   <Newspaper size={18} className="text-emerald-500" />
                   داستان آرزو
                </h4>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 mr-2 uppercase tracking-widest">شرح کامل داستان زندگی و جزییات آرزو</label>
                  <textarea required className="w-full bg-gray-50 border-none rounded-3xl p-6 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-40 resize-none leading-relaxed" placeholder="داستان مبارزه کودک و جزییات دقیق آرزویی که در سر دارد را در اینجا بنویسید..."></textarea>
                </div>
              </div>

              {/* Media Uploads */}
              <div className="space-y-6">
                <h4 className="text-sm font-black text-blue-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                  <ImageIcon size={18} className="text-blue-500" />
                  مدیریت تصاویر
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 mr-2 uppercase">تصویر اصلی (کاور)</label>
                    <label className="flex flex-col items-center justify-center w-full h-48 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 cursor-pointer hover:bg-orange-50/40 hover:border-orange-200 transition-all group relative overflow-hidden">
                      <Upload size={28} className="text-gray-300 group-hover:text-orange-500 mb-2" />
                      <span className="text-xs font-black text-gray-400 group-hover:text-orange-600 text-center px-4 leading-relaxed">برای آپلود تصویر اصلی <br/> کلیک کنید یا تصویر را بکشید</span>
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black text-gray-400 mr-2 uppercase">تصویر گالری (چندگانه)</label>
                    <label className="flex flex-col items-center justify-center w-full h-48 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 cursor-pointer hover:bg-blue-50/40 hover:border-blue-200 transition-all group relative overflow-hidden">
                      <Plus size={28} className="text-gray-300 group-hover:text-blue-500 mb-2" />
                      <span className="text-xs font-black text-gray-400 group-hover:text-blue-600 text-center px-4 leading-relaxed">انتخاب تصاویر تکمیلی برای گالری آرزو</span>
                      <input type="file" className="hidden" multiple accept="image/*" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-10 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsAddingWish(false)}
                  className="px-10 py-5 rounded-3xl font-black text-sm text-gray-400 hover:bg-gray-100 transition-all"
                >
                  انصراف و بازگشت
                </button>
                <button 
                  type="submit"
                  className="px-16 py-5 bg-orange-500 text-white rounded-3xl font-black text-lg shadow-2xl shadow-orange-500/30 hover:bg-orange-600 transition-all flex items-center gap-3 hover:-translate-y-1 active:scale-95"
                >
                  <CheckCircle2 size={24} />
                  ثبت و انتشار آرزو
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Modal for Hope Messages */}
            {editingMessagesFor !== null && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setEditingMessagesFor(null)}></div>
                <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                  <div className="p-8 border-b border-gray-50 bg-gradient-to-l from-orange-50/50 to-transparent flex justify-between items-center">
                    <h3 className="text-xl font-black text-blue-900 flex items-center gap-3">
                      <MessageSquareQuote className="text-orange-500" />
                      مدیریت پیام‌های امید
                    </h3>
                    <button onClick={() => setEditingMessagesFor(null)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors"><X size={24} /></button>
                  </div>
                  <div className="p-8 space-y-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 mr-2 uppercase">پیام امید اول (جمله کلیدی)</label>
                      <textarea className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm font-medium focus:ring-2 focus:ring-orange-100 h-24 resize-none italic" placeholder="مثلاً: لبخند تو، زیباترین معجزه دنیاست..."></textarea>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 mr-2 uppercase">پیام امید دوم (توضیح تاثیر آرزو)</label>
                      <textarea className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm font-medium focus:ring-2 focus:ring-orange-100 h-24 resize-none italic" placeholder="مثلاً: پزشکان معتقدند این تجربه روحیه آرش را برای درمان دوچندان کرد..."></textarea>
                    </div>
                    <div className="flex gap-4">
                       <button onClick={() => setEditingMessagesFor(null)} className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-black text-sm">بستن</button>
                       <button onClick={() => setEditingMessagesFor(null)} className="flex-[2] py-4 bg-blue-900 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
                         <Save size={18} />
                         ذخیره پیام‌ها
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gradient-to-l from-blue-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <Star className="text-orange-500" fill="currentColor" />
                    لیست آرزوهای ثبت شده
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">مدیریت، ویرایش و پایش وضعیت آرزوهای قهرمانان کوچک</p>
                </div>
                <button 
                  onClick={() => setIsAddingWish(true)}
                  className="bg-blue-900 text-white px-8 py-4 rounded-2xl text-sm font-black flex items-center gap-2 shadow-xl shadow-blue-900/20 hover:-translate-y-1 transition-all"
                >
                  <Plus size={20} />
                  افزودن آرزوی جدید
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">نام قهرمان</th>
                      <th className="px-8 py-5">اطلاعات دموگرافیک</th>
                      <th className="px-8 py-5">دسته بندی</th>
                      <th className="px-8 py-5">وضعیت آرزو</th>
                      <th className="px-8 py-5">آخرین بروزرسانی</th>
                      <th className="px-8 py-5 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { id: 1, name: "آرش نیکو", age: "۸ ساله", city: "تهران", type: "سفر به دریا", status: "تحقق یافته", date: "۲ روز پیش" },
                      { id: 2, name: "هلیا راد", age: "۶ ساله", city: "اصفهان", type: "پلیس شدن", status: "در حال اجرا", date: "۵ ساعت پیش" },
                      { id: 3, name: "سامان نوری", age: "۱۲ ساله", city: "تبریز", type: "کنسول بازی", status: "در انتظار حامی", date: "۱ هفته پیش" },
                      { id: 4, name: "مریم احمدی", age: "۱۰ ساله", city: "شیراز", type: "ملاقات با هنرمند", status: "در انتظار حامی", date: "۱۰ روز پیش" },
                    ].map((wish) => (
                      <tr key={wish.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                               <User size={24} />
                            </div>
                            <div className="flex flex-col">
                              <span>{wish.name}</span>
                              <span className="text-[10px] text-gray-300 font-bold">WISH-ID: 10{wish.id}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="text-gray-600 text-xs font-bold">{wish.age}</div>
                          <div className="text-gray-400 text-[10px] flex items-center gap-1 font-medium"><MapPin size={10} className="text-orange-400" /> {wish.city}</div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black border border-blue-100">{wish.type}</span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                             <div className={`w-2.5 h-2.5 rounded-full ring-4 ring-current/10 ${wish.status === 'تحقق یافته' ? 'bg-emerald-500' : wish.status === 'در حال اجرا' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
                             <span className="text-[10px] font-black text-gray-700">{wish.status}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-gray-400 text-[10px] font-bold">{wish.date}</td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => setEditingMessagesFor(wish.id)}
                              className="p-2.5 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all shadow-sm" 
                              title="مدیریت پیام‌های امید"
                            >
                              <MessageSquareQuote size={18} />
                            </button>
                            <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="مشاهده جزییات"><Eye size={18} /></button>
                            <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="ویرایش آرزو"><Edit3 size={18} /></button>
                            <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm" title="حذف"><Trash2 size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <span className="text-[10px] font-black text-gray-400">نمایش ۱۰ مورد از مجموع ۴۸ آرزو</span>
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">۱</button>
                   <button className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-black">۲</button>
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">۳</button>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'experiences':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             {/* Experience Modal */}
             {viewingExperience && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-md" onClick={() => setViewingExperience(null)}></div>
                  <div className="relative bg-white w-full max-w-2xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
                    <div className="p-10 border-b border-gray-50 bg-gradient-to-l from-purple-50 to-transparent flex justify-between items-center">
                       <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                             <Quote size={32} />
                          </div>
                          <div>
                             <h3 className="text-xl font-black text-blue-950">مشاهده متن کامل تجربه</h3>
                             <p className="text-xs text-gray-400 font-bold">ارسالی توسط {viewingExperience.name}</p>
                          </div>
                       </div>
                       <button onClick={() => setViewingExperience(null)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"><X size={24} /></button>
                    </div>
                    <div className="p-10">
                       <div className="bg-gray-50 p-8 rounded-3xl border-r-8 border-purple-500">
                          <p className="text-gray-700 leading-[2.2] text-lg font-medium italic text-justify">
                            "{viewingExperience.text}"
                          </p>
                       </div>
                       <div className="mt-10 flex gap-4">
                          <button className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2">
                             <Check size={20} /> تایید و انتشار
                          </button>
                          <button className="flex-1 py-4 bg-red-50 text-red-600 rounded-2xl font-black text-sm flex items-center justify-center gap-2">
                             <Trash2 size={20} /> حذف کامل
                          </button>
                       </div>
                    </div>
                  </div>
                </div>
             )}

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-l from-purple-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <Quote className="text-purple-500" />
                    مدیریت تجربه‌های دریافتی
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">بررسی و نظارت بر داستان‌های به اشتراک گذاشته شده توسط کاربران</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   {[
                     { id: 'all', label: 'همه موارد', count: 48 },
                     { id: 'pending', label: 'در انتظار تایید', count: 12 },
                     { id: 'published', label: 'منتشر شده', count: 32 },
                   ].map(btn => (
                     <button 
                       key={btn.id}
                       onClick={() => setExperienceFilter(btn.id)}
                       className={`px-6 py-3 rounded-2xl text-[11px] font-black transition-all flex items-center gap-2 ${experienceFilter === btn.id ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-blue-100'}`}
                     >
                       {btn.label}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] ${experienceFilter === btn.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>{btn.count}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">نام ارسال کننده</th>
                      <th className="px-8 py-5">نقش</th>
                      <th className="px-8 py-5">خلاصه تجربه</th>
                      <th className="px-8 py-5">وضعیت نمایش</th>
                      <th className="px-8 py-5">تاریخ ثبت</th>
                      <th className="px-8 py-5 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockExperiences.map((exp) => (
                      <tr key={exp.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                <User size={18} />
                             </div>
                             {exp.name}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-black ${
                            exp.cat === 'family' ? 'bg-orange-50 text-orange-600' : 
                            exp.cat === 'donor' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                          }`}>
                            {exp.role}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                           <p className="text-gray-500 text-xs line-clamp-1 max-w-[200px] italic font-medium">
                              "{exp.text}"
                           </p>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              {exp.status === 'published' ? (
                                <div className="flex items-center gap-2 text-emerald-600">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                   <span className="text-[10px] font-black">منتشر شده</span>
                                </div>
                              ) : exp.status === 'pending' ? (
                                <div className="flex items-center gap-2 text-orange-600">
                                   <Clock size={12} />
                                   <span className="text-[10px] font-black">در انتظار تایید</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-gray-400">
                                   <Edit3 size={12} />
                                   <span className="text-[10px] font-black">پیش‌نویس</span>
                                </div>
                              )}
                           </div>
                        </td>
                        <td className="px-8 py-6 text-gray-400 text-[10px] font-bold">{exp.date}</td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => setViewingExperience(exp)}
                              className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            >
                              <Eye size={18} />
                            </button>
                            {exp.status !== 'published' && (
                              <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                                <Check size={18} />
                              </button>
                            )}
                            <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-400">
                    <AlertTriangle size={14} className="text-orange-400" />
                    تجربه‌های نامناسب را بلافاصله حذف کنید.
                 </div>
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">بعدی</button>
                   <button className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-blue-900/20">۱</button>
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">قبلی</button>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'volunteers':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             {/* Volunteer Detailed View Modal */}
             {viewingVolunteer && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-lg" onClick={() => setViewingVolunteer(null)}></div>
                  <div className="relative bg-white w-full max-w-3xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
                    <div className="p-10 border-b border-gray-50 bg-gradient-to-l from-emerald-50 to-transparent flex justify-between items-start">
                       <div className="flex items-center gap-6">
                          <div className="w-24 h-24 rounded-[2rem] bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                             <User size={48} />
                          </div>
                          <div className="space-y-2">
                             <h3 className="text-3xl font-black text-blue-950">{viewingVolunteer.name}</h3>
                             <div className="flex gap-3">
                                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-black border border-emerald-100 flex items-center gap-1">
                                   <Briefcase size={12} /> {viewingVolunteer.skill}
                                </span>
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-black border border-blue-100 flex items-center gap-1">
                                   <MapPin size={12} /> {viewingVolunteer.city}
                                </span>
                             </div>
                          </div>
                       </div>
                       <button onClick={() => setViewingVolunteer(null)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"><X size={24} /></button>
                    </div>
                    <div className="p-10 space-y-10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <h4 className="text-sm font-black text-gray-400 flex items-center gap-2 border-b pb-2">اطلاعات تماس</h4>
                             <div className="space-y-3">
                                <div className="flex items-center gap-3 text-blue-900 font-bold">
                                   <Mail size={18} className="text-gray-300" /> {viewingVolunteer.email}
                                </div>
                                <div className="flex items-center gap-3 text-blue-900 font-bold">
                                   <Phone size={18} className="text-gray-300" /> {viewingVolunteer.phone}
                                </div>
                             </div>
                          </div>
                          <div className="space-y-4">
                             <h4 className="text-sm font-black text-gray-400 flex items-center gap-2 border-b pb-2">سوابق و وضعیت</h4>
                             <div className="space-y-3">
                                <div className="flex items-center gap-3 text-blue-900 font-bold">
                                   <Calendar size={18} className="text-gray-300" /> تاریخ عضویت: {viewingVolunteer.joinDate}
                                </div>
                                <div className="flex items-center gap-3">
                                   <ShieldCheck size={18} className="text-emerald-500" />
                                   <span className={`text-sm font-black ${viewingVolunteer.status === 'verified' ? 'text-emerald-600' : viewingVolunteer.status === 'pending' ? 'text-orange-500' : 'text-red-500'}`}>
                                      {viewingVolunteer.status === 'verified' ? 'تایید شده و فعال' : viewingVolunteer.status === 'pending' ? 'در انتظار بررسی' : 'عدم تایید'}
                                   </span>
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className="space-y-4">
                          <h4 className="text-sm font-black text-gray-400 flex items-center gap-2 border-b pb-2">درباره داوطلب / خلاصه رزومه</h4>
                          <div className="bg-gray-50 p-6 rounded-3xl border-r-4 border-emerald-500 italic text-blue-950 leading-relaxed">
                             "{viewingVolunteer.bio}"
                          </div>
                       </div>

                       <div className="flex gap-4 pt-4">
                          <button className="flex-1 py-5 bg-emerald-500 text-white rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:-translate-y-1 transition-all">
                             <CheckCircle2 size={24} /> تایید نهایی داوطلب
                          </button>
                          <button className="flex-1 py-5 bg-red-50 text-red-600 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-red-100 transition-all">
                             <Trash2 size={24} /> رد درخواست
                          </button>
                       </div>
                    </div>
                  </div>
                </div>
             )}

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-l from-emerald-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <Users className="text-emerald-500" />
                    مدیریت سرمایه‌های انسانی (داوطلبان)
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">نظارت بر ثبت‌نام، مهارت‌سنجی و وضعیت فعالیت داوطلبان بنیاد</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   {[
                     { id: 'all', label: 'همه داوطلبان', count: 120 },
                     { id: 'pending', label: 'در انتظار تایید', count: 8 },
                     { id: 'verified', label: 'فعال', count: 94 },
                     { id: 'rejected', label: 'بایگانی شده', count: 18 },
                   ].map(btn => (
                     <button 
                       key={btn.id}
                       onClick={() => setVolunteerFilter(btn.id)}
                       className={`px-6 py-3 rounded-2xl text-[11px] font-black transition-all flex items-center gap-2 ${volunteerFilter === btn.id ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-emerald-100'}`}
                     >
                       {btn.label}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] ${volunteerFilter === btn.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>{btn.count}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">نام و شهر</th>
                      <th className="px-8 py-5">مهارت تخصصی</th>
                      <th className="px-8 py-5">وضعیت تایید</th>
                      <th className="px-8 py-5">تاریخ پیوستن</th>
                      <th className="px-8 py-5 text-center">عملیات مدیریت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockVolunteers
                      .filter(v => volunteerFilter === 'all' || v.status === volunteerFilter)
                      .map((vol) => (
                      <tr key={vol.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                <User size={18} />
                             </div>
                             <div className="flex flex-col">
                                <span>{vol.name}</span>
                                <span className="text-[9px] text-gray-300 font-bold flex items-center gap-1 uppercase tracking-tighter">
                                   <MapPin size={8} /> {vol.city}
                                </span>
                             </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black border border-blue-100 flex items-center gap-2 max-w-fit">
                             <Briefcase size={12} />
                             {vol.skill}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              {vol.status === 'verified' ? (
                                <div className="flex items-center gap-2 text-emerald-600">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                   <span className="text-[10px] font-black">تایید شده</span>
                                </div>
                              ) : vol.status === 'pending' ? (
                                <div className="flex items-center gap-2 text-orange-600">
                                   <Clock size={12} />
                                   <span className="text-[10px] font-black">در انتظار بررسی</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-red-400">
                                   <X size={12} />
                                   <span className="text-[10px] font-black">بایگانی شده</span>
                                </div>
                              )}
                           </div>
                        </td>
                        <td className="px-8 py-6 text-gray-400 text-[10px] font-bold">{vol.joinDate}</td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => setViewingVolunteer(vol)}
                              className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                              title="مشاهده پروفایل"
                            >
                              <Eye size={18} />
                            </button>
                            <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="تایید سریع">
                              <Check size={18} />
                            </button>
                            <button className="p-2.5 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all shadow-sm" title="ارسال پیام مستقیم">
                              <MessageSquare size={18} />
                            </button>
                            <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-800 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                       <Award size={14} className="text-orange-500" />
                       داوطلب طلایی ماه: علیرضا صبوری
                    </div>
                 </div>
                 <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50 transition-colors">
                      <ArrowRight size={18} />
                   </button>
                   <button className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-emerald-600/20">۱</button>
                   <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50 transition-colors">۲</button>
                   <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50 transition-colors">
                      <ArrowLeft size={18} />
                   </button>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'partners':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             {/* Partner Details Modal */}
             {viewingPartner && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-lg" onClick={() => setViewingPartner(null)}></div>
                  <div className="relative bg-white w-full max-w-3xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
                    <div className="p-10 border-b border-gray-50 bg-gradient-to-l from-blue-50 to-transparent flex justify-between items-start">
                       <div className="flex items-center gap-6">
                          <div className="w-24 h-24 rounded-[2rem] bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                             <Building2 size={48} />
                          </div>
                          <div className="space-y-2">
                             <h3 className="text-3xl font-black text-blue-950">{viewingPartner.name}</h3>
                             <div className="flex gap-3">
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-black border border-blue-100 flex items-center gap-1">
                                   <Briefcase size={12} /> {viewingPartner.industry}
                                </span>
                                <span className={`px-3 py-1 rounded-lg text-xs font-black border ${
                                  viewingPartner.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                                  viewingPartner.status === 'negotiating' ? 'bg-orange-50 text-orange-700 border-orange-100' : 
                                  'bg-gray-50 text-gray-700 border-gray-100'
                                }`}>
                                   {viewingPartner.status === 'active' ? 'همکار فعال' : viewingPartner.status === 'negotiating' ? 'در حال مذاکره' : 'پتانسیل همکاری'}
                                </span>
                             </div>
                          </div>
                       </div>
                       <button onClick={() => setViewingPartner(null)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"><X size={24} /></button>
                    </div>
                    <div className="p-10 space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <h4 className="text-sm font-black text-gray-400 flex items-center gap-2 border-b pb-2">اطلاعات تماسی و رابط</h4>
                             <div className="space-y-3">
                                <div className="flex items-center gap-3 text-blue-900 font-bold">
                                   <User size={18} className="text-gray-300" /> رابط مستقیم: {viewingPartner.contact}
                                </div>
                                <div className="flex items-center gap-3 text-blue-900 font-bold">
                                   <Mail size={18} className="text-gray-300" /> info@partner-corp.ir
                                </div>
                             </div>
                          </div>
                          <div className="space-y-4">
                             <h4 className="text-sm font-black text-gray-400 flex items-center gap-2 border-b pb-2">تاریخچه حمایت‌ها</h4>
                             <div className="space-y-3">
                                <div className="flex items-center gap-3 text-blue-900 font-bold">
                                   <Calendar size={18} className="text-gray-300" /> آغاز همکاری: {viewingPartner.date}
                                </div>
                                <div className="flex items-center gap-3 text-emerald-600 font-black">
                                   <BarChart3 size={18} /> مجموع ارزش حمایت: {viewingPartner.totalSupport}
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className="space-y-4">
                          <h4 className="text-sm font-black text-gray-400 flex items-center gap-2 border-b pb-2">تفاهم‌نامه‌های بارگذاری شده</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between border border-gray-100">
                                <div className="flex items-center gap-3">
                                   <FileText size={20} className="text-blue-500" />
                                   <span className="text-xs font-bold text-gray-600">قرارداد سال ۱۴۰۲</span>
                                </div>
                                <button className="text-[10px] font-black text-blue-600 hover:underline">دانلود نسخه PDF</button>
                             </div>
                             <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
                                <Plus size={16} />
                                <span className="text-xs font-black mr-2">افزودن فایل جدید</span>
                             </div>
                          </div>
                       </div>

                       <div className="flex gap-4 pt-4">
                          <button className="flex-1 py-5 bg-blue-900 text-white rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20">
                             <Edit3 size={24} /> ویرایش پروفایل تجاری
                          </button>
                          <button className="flex-1 py-5 bg-orange-50 text-orange-600 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3">
                             <MessageSquare size={24} /> ارسال پیام به رابط
                          </button>
                       </div>
                    </div>
                  </div>
                </div>
             )}

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-l from-blue-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <Handshake className="text-blue-600" />
                    مدیریت شرکای تجاری و مسئولیت اجتماعی
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">نظارت بر تعاملات با سازمان‌ها، برندها و نهادهای حامی</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   {[
                     { id: 'all', label: 'همه شرکا', count: 24 },
                     { id: 'active', label: 'فعال', count: 18 },
                     { id: 'negotiating', label: 'در حال مذاکره', count: 4 },
                     { id: 'potential', label: 'بالقوه', count: 2 },
                   ].map(btn => (
                     <button 
                       key={btn.id}
                       onClick={() => setPartnerFilter(btn.id)}
                       className={`px-6 py-3 rounded-2xl text-[11px] font-black transition-all flex items-center gap-2 ${partnerFilter === btn.id ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-blue-100'}`}
                     >
                       {btn.label}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] ${partnerFilter === btn.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>{btn.count}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">نام برند / سازمان</th>
                      <th className="px-8 py-5">نوع مشارکت</th>
                      <th className="px-8 py-5">حجم کل حمایت</th>
                      <th className="px-8 py-5">وضعیت</th>
                      <th className="px-8 py-5 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockPartners
                      .filter(p => partnerFilter === 'all' || p.status === partnerFilter)
                      .map((partner) => (
                      <tr key={partner.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <Building2 size={18} />
                             </div>
                             <div className="flex flex-col">
                                <span>{partner.name}</span>
                                <span className="text-[9px] text-gray-300 font-bold uppercase tracking-tighter">{partner.industry}</span>
                             </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-[11px] font-black text-gray-600">{partner.type}</span>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-[11px] font-black text-emerald-600" dir="ltr">{partner.totalSupport}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              {partner.status === 'active' ? (
                                <div className="flex items-center gap-2 text-emerald-600">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                   <span className="text-[10px] font-black">فعال</span>
                                </div>
                              ) : partner.status === 'negotiating' ? (
                                <div className="flex items-center gap-2 text-orange-600">
                                   <Clock size={12} />
                                   <span className="text-[10px] font-black">در حال مذاکره</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-gray-400">
                                   <AlertCircle size={12} />
                                   <span className="text-[10px] font-black">بالقوه</span>
                                </div>
                              )}
                           </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => setViewingPartner(partner)}
                              className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            >
                              <Eye size={18} />
                            </button>
                            <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                              <CheckCircle2 size={18} />
                            </button>
                            <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-400">
                    <Globe size={14} className="text-blue-400" />
                    مشاهده نقشه پراکندگی شرکای تجاری در کشور
                 </div>
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">بعدی</button>
                   <button className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-black">۱</button>
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">قبلی</button>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'comments':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             {/* Comment Response Modal */}
             {viewingComment && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md" onClick={() => setViewingComment(null)}></div>
                  <div className="relative bg-white w-full max-w-2xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
                    <div className="p-10 border-b border-gray-50 bg-gradient-to-l from-blue-50 to-transparent flex justify-between items-start">
                       <div className="flex items-center gap-5">
                          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
                             <MessageCircle size={32} />
                          </div>
                          <div className="space-y-1">
                             <h3 className="text-xl font-black text-blue-950">بررسی و پاسخ به نظر</h3>
                             <p className="text-xs text-gray-400 font-bold">فرستنده: {viewingComment.author} ({viewingComment.email})</p>
                          </div>
                       </div>
                       <button onClick={() => setViewingComment(null)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"><X size={24} /></button>
                    </div>
                    <div className="p-10 space-y-8">
                       <div className="bg-gray-50 p-6 rounded-3xl border-r-4 border-blue-500 italic text-blue-900 leading-relaxed text-sm">
                          "{viewingComment.text}"
                       </div>
                       
                       <div className="space-y-4">
                          <label className="text-xs font-black text-gray-400 mr-2 uppercase flex items-center gap-2">
                             <Reply size={14} className="text-orange-500" />
                             ثبت پاسخ مدیریت (نمایش عمومی در سایت)
                          </label>
                          <textarea 
                             value={replyText}
                             onChange={(e) => setReplyText(e.target.value)}
                             className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm font-medium focus:ring-2 focus:ring-blue-100 h-32 resize-none"
                             placeholder="پاسخ خود را بنویسید..."
                          ></textarea>
                       </div>

                       <div className="flex gap-4">
                          <button onClick={() => setViewingComment(null)} className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                             <CheckCircle2 size={20} /> تایید و ارسال پاسخ
                          </button>
                          <button onClick={() => setViewingComment(null)} className="flex-1 py-4 bg-red-50 text-red-600 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-red-100">
                             <Trash2 size={20} /> حذف کامل
                          </button>
                       </div>
                    </div>
                  </div>
                </div>
             )}

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-l from-blue-50/30 to-transparent">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-950 flex items-center gap-3">
                    <MessageSquareQuote className="text-blue-500" />
                    مدیریت نظرات و پرسش‌های کاربران
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">نظارت بر گفتگوهای عمومی در صفحات آرزوها و بلاگ</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   {[
                     { id: 'all', label: 'همه نظرات', count: 156 },
                     { id: 'pending', label: 'در انتظار تایید', count: 24 },
                     { id: 'approved', label: 'تایید شده', count: 118 },
                     { id: 'spam', label: 'اسپم / بایگانی', count: 14 },
                   ].map(btn => (
                     <button 
                       key={btn.id}
                       onClick={() => setCommentFilter(btn.id)}
                       className={`px-6 py-3 rounded-2xl text-[11px] font-black transition-all flex items-center gap-2 ${commentFilter === btn.id ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:border-blue-100'}`}
                     >
                       {btn.label}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] ${commentFilter === btn.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>{btn.count}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">نویسنده</th>
                      <th className="px-8 py-5">موضوع / صفحه</th>
                      <th className="px-8 py-5">متن نظر</th>
                      <th className="px-8 py-5">وضعیت</th>
                      <th className="px-8 py-5">زمان ثبت</th>
                      <th className="px-8 py-5 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockComments
                      .filter(c => commentFilter === 'all' || c.status === commentFilter)
                      .map((comment) => (
                      <tr key={comment.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6 font-black text-blue-900 text-sm">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <User size={18} />
                             </div>
                             <div className="flex flex-col">
                                <span>{comment.author}</span>
                                <span className="text-[9px] text-gray-300 font-bold lowercase">{comment.email}</span>
                             </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black border border-blue-100">
                             {comment.target}
                           </span>
                        </td>
                        <td className="px-8 py-6">
                           <p className="text-gray-500 text-xs line-clamp-1 max-w-[220px] font-medium">
                              {comment.text}
                           </p>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              {comment.status === 'approved' ? (
                                <div className="flex items-center gap-2 text-emerald-600">
                                   <CheckCircle2 size={12} />
                                   <span className="text-[10px] font-black">منتشر شده</span>
                                </div>
                              ) : comment.status === 'pending' ? (
                                <div className="flex items-center gap-2 text-orange-600">
                                   <Clock size={12} className="animate-pulse" />
                                   <span className="text-[10px] font-black">در انتظار تایید</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-red-400">
                                   <XCircle size={12} />
                                   <span className="text-[10px] font-black">اسپم</span>
                                </div>
                              )}
                           </div>
                        </td>
                        <td className="px-8 py-6 text-gray-400 text-[10px] font-bold">{comment.date}</td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => setViewingComment(comment)}
                              className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                              title="مشاهده و پاسخ"
                            >
                              <Reply size={18} />
                            </button>
                            {comment.status !== 'approved' && (
                              <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="تایید سریع">
                                <Check size={18} />
                              </button>
                            )}
                            <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm" title="حذف">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex justify-between items-center px-10">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-400">
                    <ShieldAlert size={14} className="text-orange-400" />
                    نظرات دارای لینک‌های مشکوک به صورت خودکار به عنوان اسپم علامت‌گذاری می‌شوند.
                 </div>
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">بعدی</button>
                   <button className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-black">۱</button>
                   <button className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-black text-gray-400 hover:bg-gray-50">قبلی</button>
                 </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="text-center py-20 text-gray-400 font-bold bg-white rounded-[3rem]">این بخش در حال توسعه است...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-right font-['Vazirmatn']" dir="rtl">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#1D264F] text-white flex flex-col fixed h-full z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="bg-orange-500 p-2 rounded-xl">
             <Star size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tighter">اتاق فرمان جادو</span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-8 overflow-y-auto custom-scrollbar">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { 
                setActiveTab(item.id); 
                setIsAddingWish(false); 
                setIsAddingPost(false);
              }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === item.id ? 'bg-white/10 text-orange-400 border-l-4 border-orange-500' : 'text-blue-100/50 hover:bg-white/5 hover:text-white'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut size={20} />
            خروج از پنل
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mr-72 p-10">
        
        {/* Top Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="space-y-1">
             <h1 className="text-3xl font-black text-blue-950">خوش آمدید، مدیر عزیز</h1>
             <p className="text-gray-400 text-sm font-medium">امروز ۵ آرزوی جدید توسط والدین ثبت شده است.</p>
          </div>

          <div className="flex items-center gap-6">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="جستجو در آرزوها و حامیان..." 
                  className="bg-white border-none rounded-2xl py-4 pr-12 pl-6 text-sm font-medium shadow-sm w-80 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
             </div>
             <button className="relative bg-white p-4 rounded-2xl shadow-sm text-gray-400 hover:text-blue-900 transition-all border border-gray-50">
                <Bell size={22} />
                <span className="absolute top-3 left-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-2xl shadow-sm border border-gray-50">
                <div className="text-left">
                   <div className="text-xs font-black text-blue-950">مدیر کل سیستم</div>
                   <div className="text-[10px] font-bold text-emerald-500">آنلاین و فعال</div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                   <User size={24} />
                </div>
             </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[600px]">
          {renderContent()}
        </div>

        {/* Footer info */}
        <footer className="mt-20 flex justify-between items-center text-gray-400 text-[10px] font-bold">
           <div className="flex gap-6">
              <span>نسخه ۲.۶.۵ - بهینه شده برای پنل آرزوها</span>
              <span>زمان سرور: {new Date().toLocaleTimeString('fa-IR')}</span>
           </div>
           <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-lg border border-emerald-100">
              <ShieldCheck size={14} />
              امنیت ورود تضمین شده (SSL ACTIVE)
           </div>
        </footer>

      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
