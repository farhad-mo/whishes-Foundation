
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Heart, 
  Mail, 
  Lock, 
  User, 
  ArrowLeft, 
  ChevronLeft, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Eye,
  EyeOff,
  Building2,
  CheckCircle2,
  Linkedin
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

type UserRole = 'volunteer' | 'partner' | 'admin';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<UserRole>('volunteer');
  const [showPassword, setShowPassword] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogoClick = () => {
    setAdminClickCount(prev => prev + 1);
    if (adminClickCount + 1 >= 5) {
      setIsAdminVisible(true);
      setRole('admin');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAdminClickCount(0), 3000);
    return () => clearTimeout(timer);
  }, [adminClickCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (role === 'admin') {
      // Logic for admin credentials
      if (email === 'admin@arezooha.ir' && password === 'admin123') {
        navigate('/management-portal-v2');
      } else {
        alert('اطلاعات مدیریت نادرست است. دسترسی غیرمجاز ثبت شد.');
      }
    } else {
      // Logic for regular users
      alert(`خوش آمدید! در حال ورود به پنل ${role === 'partner' ? 'شرکای تجاری' : 'داوطلبین'}...`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col lg:flex-row overflow-hidden text-right">
      
      {/* Visual Side Panel */}
      <div className="lg:w-1/2 relative hidden lg:flex flex-col items-center justify-center p-20 overflow-hidden bg-[#1D264F] text-white">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-md space-y-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 text-orange-400 font-black">
             <Sparkles size={24} />
             دنیای آرزوها منتظر شماست
          </div>
          
          <h2 className="text-5xl font-black leading-tight drop-shadow-2xl">
            {isLogin ? 'دوباره به قلب معجزه خوش آمدید' : 'شما هم می‌توانید ستاره‌ای در این آسمان باشید'}
          </h2>
          
          <p className="text-blue-100/70 text-xl font-medium leading-loose">
            {isLogin 
              ? 'پنل اختصاصی شما برای مدیریت فعالیت‌های خیرخواهانه و پیگیری تاثیر لبخندها.' 
              : 'با پیوستن به ما، گامی بزرگ در جهت تغییر سرنوشت کودکان قهرمان بردارید.'}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-10">
             <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center space-y-2">
                <div className="text-3xl font-black text-white">۵۰۰+</div>
                <div className="text-[10px] font-bold text-blue-200/50 uppercase">آرزوی محقق شده</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center space-y-2">
                <div className="text-3xl font-black text-white">۱۰۰۰+</div>
                <div className="text-[10px] font-bold text-blue-200/50 uppercase">داوطلب فعال</div>
             </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 opacity-10 animate-bounce-slow">
           <Heart size={120} fill="currentColor" />
        </div>
      </div>

      {/* Main Auth Form Container */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative overflow-y-auto">
        <div className="w-full max-w-lg space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="text-center space-y-6">
            <div 
              onClick={handleLogoClick}
              className="inline-flex p-4 rounded-[2rem] bg-blue-50 text-blue-800 shadow-inner mb-2 cursor-pointer transition-transform active:scale-95 select-none"
            >
              <Star size={40} fill="currentColor" className={isAdminVisible ? 'text-orange-500' : ''} />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-blue-900 tracking-tighter">
              {isLogin ? 'ورود به حساب کاربری' : 'ساخت حساب کاربری جدید'}
            </h1>
            <p className="text-gray-400 font-bold">لطفاً نوع کاربری خود را انتخاب کنید</p>

            <div className="flex bg-gray-100 p-1.5 rounded-[2rem] gap-1">
              <button 
                onClick={() => setRole('volunteer')}
                className={`flex-1 py-3 rounded-[1.8rem] font-black text-xs transition-all flex items-center justify-center gap-2 ${role === 'volunteer' ? 'bg-white text-blue-900 shadow-xl' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Users size={16} />
                داوطلب
              </button>
              <button 
                onClick={() => setRole('partner')}
                className={`flex-1 py-3 rounded-[1.8rem] font-black text-xs transition-all flex items-center justify-center gap-2 ${role === 'partner' ? 'bg-white text-blue-900 shadow-xl' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Building2 size={16} />
                شریک تجاری
              </button>
              {isAdminVisible && (
                <button 
                  onClick={() => setRole('admin')}
                  className={`flex-1 py-3 rounded-[1.8rem] font-black text-xs transition-all flex items-center justify-center gap-2 bg-blue-900 text-white animate-in zoom-in duration-300 ${role === 'admin' ? 'ring-4 ring-orange-500/20' : 'opacity-70'}`}
                >
                  <ShieldCheck size={16} />
                  مدیریت
                </button>
              )}
            </div>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-4">
              {!isLogin && (
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <User size={20} />
                  </div>
                  <input 
                    type="text" 
                    required
                    placeholder={role === 'partner' ? 'نام سازمان / شرکت' : 'نام و نام خانوادگی'}
                    className="w-full bg-white border-2 border-gray-100 rounded-3xl py-5 pr-14 pl-6 text-sm font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              )}

              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="آدرس ایمیل"
                  className="w-full bg-white border-2 border-gray-100 rounded-3xl py-5 pr-14 pl-6 text-sm font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all placeholder:text-gray-300 text-right"
                  dir="ltr"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور"
                  className="w-full bg-white border-2 border-gray-100 rounded-3xl py-5 pr-14 pl-14 text-sm font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all placeholder:text-gray-300 text-right"
                  dir="ltr"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 pl-6 flex items-center text-gray-300 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {isLogin && (
                <div className="flex justify-between items-center px-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-200 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">مرا به خاطر بسپار</span>
                  </label>
                  <button type="button" className="text-xs font-black text-blue-800 hover:underline">فراموشی رمز عبور؟</button>
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className={`w-full py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95 group ${role === 'admin' ? 'bg-blue-900 text-white shadow-blue-900/30' : 'bg-orange-500 text-white shadow-orange-500/30'}`}
            >
              {isLogin ? 'ورود به پنل' : 'ساخت حساب کاربری'}
              <ChevronLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
            </button>
          </form>

          {role !== 'admin' && (
            <div className="space-y-6">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <span className="relative px-6 bg-[#fcfcfd] text-xs font-black text-gray-300 uppercase tracking-widest">یا از طریق</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white border border-gray-100 font-bold text-sm text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                   <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                   گوگل
                </button>
                <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white border border-gray-100 font-bold text-sm text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                   <Linkedin size={20} className="text-blue-600" />
                   لینکدین
                </button>
              </div>
            </div>
          )}

          <div className="text-center pt-6">
            <p className="text-gray-400 font-bold text-sm">
              {isLogin ? 'هنوز حساب کاربری ندارید؟' : 'قبلاً ثبت‌نام کرده‌اید؟'}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="mr-2 text-blue-900 font-black hover:underline"
              >
                {isLogin ? 'ساخت حساب جدید' : 'ورود به حساب'}
              </button>
            </p>
          </div>
          
          <div className="pt-10 flex flex-col items-center gap-4 border-t border-gray-100">
             <div className="flex items-center gap-6 opacity-30 grayscale">
                <div className="flex items-center gap-2 text-[10px] font-black"><ShieldCheck size={16} /> امن با SSL</div>
                <div className="flex items-center gap-2 text-[10px] font-black"><CheckCircle2 size={16} /> تایید اصالت</div>
             </div>
             <Link to="/" className="text-[10px] font-black text-gray-400 hover:text-blue-900 flex items-center gap-1 transition-colors">
                <ArrowLeft size={12} /> بازگشت به صفحه اصلی
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
