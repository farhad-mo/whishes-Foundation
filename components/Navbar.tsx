
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Star, ChevronDown, UserPlus, MessageSquare, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'صفحه اصلی', path: '/' },
    { 
      name: 'درباره ما', 
      path: '/about-us',
      subMenu: [
        { name: 'ماموریت و هدف ما', path: '/about-us' },
        { name: 'تیم ما', path: '/team' },
        { name: 'شفافیت مالی', path: '/transparency' },
      ]
    },
    { name: 'داستان آرزوها', path: '/gallery' },
    { name: 'تجربه‌های شما', path: '/experiences' },
    { name: 'رویدادها', path: '/events' },
    { 
      name: 'مشارکت کنید', 
      path: '#',
      subMenu: [
        { name: 'جمع‌آوری کمک‌های مالی', path: '/donate' },
        { name: 'داوطلب شوید', path: '/volunteer' },
        { name: 'شرکای تجاری', path: '/corporate-partners' },
      ]
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse group">
              <div className="bg-blue-800 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-blue-800/20">
                <Star className="text-white w-6 h-6" fill="currentColor" />
              </div>
              <span className={`text-2xl font-black tracking-tighter mr-2 transition-colors ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
                بنیاد <span className="text-blue-800">آرزوها</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center px-4">
            <div className="flex items-center space-x-1 space-x-reverse">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 text-[14px] font-black transition-all hover:text-blue-800 px-4 py-4 whitespace-nowrap rounded-xl ${
                      location.pathname === item.path || (item.subMenu && item.subMenu.some(sub => sub.path === location.pathname)) ? 'text-blue-800 bg-blue-50/50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    {item.subMenu && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {item.subMenu && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl rounded-2xl p-4 transition-all duration-300 transform origin-top border border-gray-50 ${
                      activeDropdown === item.name ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'
                    }`}>
                      {item.subMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block px-4 py-3 text-[14px] font-black rounded-xl transition-colors ${location.pathname === sub.path ? 'bg-blue-50 text-blue-800' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-800'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-shrink-0 items-center gap-3">
            <Link
              to="/auth"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm transition-all ${scrolled ? 'text-blue-900 hover:bg-gray-100' : 'text-blue-900 hover:bg-white/20'}`}
            >
              <LogIn size={18} />
              ورود
            </Link>
            <Link
              to="/submit-wish"
              className="bg-[#1e3a8a] hover:bg-[#172554] text-white px-5 py-3 rounded-xl font-black text-[0.85rem] transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              ارجاع کودک
            </Link>
            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-black text-[0.85rem] transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              حمایت مالی
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto shadow-2xl">
          <div className="px-4 py-6 space-y-2 text-right">
            <Link to="/auth" className="flex items-center gap-2 py-4 px-2 text-blue-800 font-black border-b border-gray-50" onClick={() => setIsOpen(false)}>
              <LogIn size={20} />
              ورود / ثبت‌نام
            </Link>
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-50 last:border-0">
                <div 
                  className="flex justify-between items-center py-4 px-2"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <Link to={item.path} className={`text-[14px] font-black ${location.pathname === item.path ? 'text-blue-800' : 'text-gray-800'}`} onClick={() => !item.subMenu && setIsOpen(false)}>
                    {item.name}
                  </Link>
                  {item.subMenu && <ChevronDown size={20} className={activeDropdown === item.name ? 'rotate-180' : ''} />}
                </div>
                {item.subMenu && activeDropdown === item.name && (
                  <div className="bg-gray-50 rounded-2xl mb-4 p-2 animate-in fade-in duration-300">
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-3 text-[14px] font-black ${location.pathname === sub.path ? 'text-blue-800' : 'text-gray-600'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
