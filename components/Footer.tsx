
import React from 'react';
import { Star, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D264F] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4 text-right">
            <div className="flex items-center gap-2 justify-start md:justify-start">
              <Star className="text-yellow-400 w-8 h-8" fill="currentColor" />
              <span className="text-2xl font-black tracking-tighter">بنیاد آرزوها</span>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed font-medium">
              ما معتقدیم هر کودکی که با یک بیماری سخت دست و پنجه نرم می‌کند، حق دارد قدرت یک آرزوی برآورده شده را تجربه کند. آرزوها زندگی را تغییر می‌دهند.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6 text-white">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm text-blue-100/60 font-medium">
              <li><Link to="#" className="hover:text-white transition-colors">درباره ما</Link></li>
              <li><Link to="/submit-wish" className="hover:text-white transition-colors">ثبت آرزو</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">داستان موفقیت</Link></li>
              <li><Link to="/transparency" className="hover:text-white transition-colors">شفافیت مالی</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors font-bold text-orange-400/90">فرصت‌های شغلی</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6 text-white">تماس با ما</h4>
            <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
              <li className="flex items-center gap-3 justify-start">
                <Phone size={18} className="text-blue-400" />
                <span dir="ltr">۰۲۱-۸۸۸۸۸۸۸۸</span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Mail size={18} className="text-blue-400" />
                <span>info@arezooha.ir</span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <MapPin size={18} className="text-blue-400" />
                <span>تهران، خیابان ولیعصر، برج آرزو</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6 text-white">همراهی با ما</h4>
            <p className="text-sm text-blue-100/60 mb-4 font-medium">برای اطلاع از آخرین آرزوها عضو شوید.</p>
            <div className="flex group">
              <input 
                type="email" 
                placeholder="ایمیل شما" 
                className="bg-white/10 text-white placeholder:text-blue-100/30 px-4 py-3 rounded-r-xl w-full focus:outline-none focus:ring-1 focus:ring-blue-400 border-none transition-all group-hover:bg-white/15"
              />
              <button className="bg-blue-600 px-6 py-3 rounded-l-xl hover:bg-blue-500 transition-all font-black shadow-lg">تایید</button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row-reverse justify-between items-center gap-4 text-xs text-blue-100/40 font-medium">
          <div className="flex gap-6">
            <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
          <p>© تمامی حقوق برای بنیاد آرزوها محفوظ است. ۱۴۰۳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
