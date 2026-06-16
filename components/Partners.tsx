
import React from 'react';
import { Shield } from 'lucide-react';

const partners = [
  { name: 'بیمه ایران', type: 'تکمیلی' },
  { name: 'بیمه آسیا', type: 'تکمیلی' },
  { name: 'بیمه البرز', type: 'تکمیلی' },
  { name: 'بیمه پارسیان', type: 'تکمیلی' },
  { name: 'بیمه دانا dana', type: 'تکمیلی' },
  { name: 'بیمه سلامت', type: 'پایه' },
  { name: 'نیروهای مسلح', type: 'پایه' },
  { name: 'تامین اجتماعی', type: 'پایه' },
  { name: 'بیمه رازی', type: 'تکمیلی' },
  { name: 'بیمه میهن', type: 'تکمیلی' },
  { name: 'بیمه معلم', type: 'تکمیلی' },
  { name: 'بیمه دی', type: 'تکمیلی' },
  { name: 'بیمه سینا', type: 'تکمیلی' },
  { name: 'بیمه کوثر', type: 'تکمیلی' },
  { name: 'بیمه ما', type: 'تکمیلی' },
  { name: 'بیمه حکمت', type: 'تکمیلی' },
  { name: 'بیمه کارآفرین', type: 'تکمیلی' },
  { name: 'بیمه سامان', type: 'تکمیلی' },
];

const Partners: React.FC = () => {
  // To ensure a truly infinite and seamless scroll, we triple the list.
  // This provides enough buffer so that the jump from 100% to 0% is invisible.
  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-white py-12 overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-[2.25rem] font-black text-[#1D264F] mb-2">حامیان بنیاد آرزوها</h2>
        <p className="text-gray-400 font-medium text-xs md:text-sm">همراهانی که در کنار ما لبخند می‌سازند</p>
      </div>
      
      <div className="relative flex items-center py-4">
        <div className="animate-infinite-scroll flex gap-6 px-3">
          {extendedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center min-w-[160px] w-[160px] h-[110px] bg-white rounded-3xl border border-gray-100 shadow-sm transition-all p-4 group"
            >
              <div className="mb-2 opacity-20 group-hover:opacity-50 transition-opacity">
                <Shield className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <div className="text-[#1D264F] font-black text-[10px] mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis w-full px-1">
                  {partner.name}
                </div>
                <div className="text-gray-400 text-[8px] font-bold uppercase tracking-tighter">
                  {partner.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Edge masks for smoothness */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;
