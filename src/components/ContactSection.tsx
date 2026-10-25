import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../types';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#eaf3ee] border-t border-[#DFE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Narrative & Action Buttons */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold block mb-3">
              Reach Out
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#103D3B] leading-[1.2] mb-6">
              Every good plan begins with a conversation.
            </h2>
            <p className="text-base text-[#172321]/80 leading-relaxed mb-8">
              Contact Sukriti Investments for information about distribution services, investor onboarding or support. We are available for in-person consultations, phone discussions, and email correspondence.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href={`tel:${DISTRIBUTOR_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#103D3B] hover:bg-[#087F7C] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Phone className="w-4 h-4 text-[#a8d8c8] transition-transform group-hover:rotate-12" />
                <span>Call Us</span>
              </a>

              <a
                href={`mailto:${DISTRIBUTOR_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#DFE6DF]/50 text-[#103D3B] border border-[#DFE6DF] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Mail className="w-4 h-4 text-[#00B7A5] transition-transform group-hover:scale-110" />
                <span>Send an Email</span>
              </a>

              <a
                href="https://wa.me/919828535035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Assurance Notice */}
            <div className="flex items-center gap-3 text-xs text-[#707B75] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#00B7A5] shrink-0" />
              <span>Prompt response guaranteed within regular business hours. No third-party solicitation.</span>
            </div>
          </div>

          {/* Right Column: Verified Practice Credentials & Office Details (No Form) */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#fffefa] border border-[#DFE6DF] shadow-sm space-y-6">
              
              <div className="border-b border-[#DFE6DF] pb-5">
                <span className="text-[11px] font-mono uppercase text-[#087F7C] tracking-widest font-semibold block mb-1">
                  Distributor Identification
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#103D3B]">
                  {DISTRIBUTOR_INFO.name}
                </h3>
                <p className="text-xs text-[#707B75] mt-1 font-medium">
                  {DISTRIBUTOR_INFO.registrationStatus} · <span className="font-mono text-[#103D3B] font-semibold">{DISTRIBUTOR_INFO.arn}</span>
                </p>
                <p className="text-xs text-[#707B75] mt-0.5 font-mono">
                  GSTIN: {DISTRIBUTOR_INFO.gstin}
                </p>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F8F4] border border-[#DFE6DF] flex items-center justify-center shrink-0 text-[#103D3B] mt-0.5">
                  <MapPin className="w-5 h-5 text-[#00B7A5]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#103D3B] block">
                    Registered Office
                  </span>
                  <p className="text-sm text-[#172321]/85 leading-relaxed mt-1">
                    {DISTRIBUTOR_INFO.address}
                  </p>
                  <p className="text-xs text-[#707B75] mt-1">
                    Located in Shastri Nagar, easily accessible near Ashapurna Mall & SBI premises.
                  </p>
                </div>
              </div>

              {/* Direct Communications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#DFE6DF]">
                <a
                  href={`tel:${DISTRIBUTOR_INFO.phoneRaw}`}
                  className="p-4 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF] hover:border-[#00B7A5] transition-all group block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#707B75]">
                      Phone
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#707B75] group-hover:text-[#00B7A5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <span className="font-semibold text-sm text-[#103D3B] group-hover:text-[#087F7C] transition-colors">
                    {DISTRIBUTOR_INFO.phone}
                  </span>
                  <p className="text-[11px] text-[#707B75] mt-1">Direct call or SMS</p>
                </a>

                <a
                  href={`mailto:${DISTRIBUTOR_INFO.email}`}
                  className="p-4 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF] hover:border-[#00B7A5] transition-all group block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#707B75]">
                      Email
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#707B75] group-hover:text-[#00B7A5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <span className="font-semibold text-sm text-[#103D3B] group-hover:text-[#087F7C] transition-colors break-all">
                    {DISTRIBUTOR_INFO.email}
                  </span>
                  <p className="text-[11px] text-[#707B75] mt-1">Official investor desk</p>
                </a>
              </div>

              {/* Consultation & Office Timings */}
              <div className="p-4 rounded-2xl bg-[#eaf3ee] border border-[#a8d8c8]/40 flex items-start gap-3 text-xs text-[#103D3B]">
                <Clock className="w-4 h-4 text-[#00B7A5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Office Consultations & In-Person Verification:</span>
                  <p className="text-[#172321]/80 mt-0.5 leading-relaxed">
                    Monday to Saturday, 10:00 AM to 6:00 PM. Prior appointment recommended for dedicated portfolio reviews.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
