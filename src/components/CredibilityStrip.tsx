import React from 'react';
import { UserCheck, Award, MapPin } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../types';

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="bg-[#fffefa] border-y border-[#DFE6DF] py-6 sm:py-8" aria-label="Distributor Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DFE6DF]">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 first:pl-0">
            <div className="w-10 h-10 rounded-full bg-[#F7F8F4] border border-[#DFE6DF] flex items-center justify-center text-[#103D3B] shrink-0">
              <UserCheck className="w-5 h-5 text-[#00B7A5]" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-[#707B75] font-semibold">
                Our Distributor
              </span>
              <span className="font-serif text-lg font-medium text-[#103D3B]">
                {DISTRIBUTOR_INFO.name}
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 py-4 md:py-0 md:px-6">
            <div className="w-10 h-10 rounded-full bg-[#F7F8F4] border border-[#DFE6DF] flex items-center justify-center text-[#103D3B] shrink-0">
              <Award className="w-5 h-5 text-[#00B7A5]" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-[#707B75] font-semibold">
                AMFI Registration
              </span>
              <span className="font-serif text-lg font-medium text-[#103D3B]">
                {DISTRIBUTOR_INFO.arn}
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 last:pr-0">
            <div className="w-10 h-10 rounded-full bg-[#F7F8F4] border border-[#DFE6DF] flex items-center justify-center text-[#103D3B] shrink-0">
              <MapPin className="w-5 h-5 text-[#00B7A5]" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-[#707B75] font-semibold">
                Based In
              </span>
              <span className="font-serif text-lg font-medium text-[#103D3B]">
                Jodhpur, Rajasthan
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
