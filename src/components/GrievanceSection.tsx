import React from 'react';
import { ShieldAlert, ExternalLink, Clock, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DISTRIBUTOR_INFO } from '../types';

export const GrievanceSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#fffefa] border-t border-[#DFE6DF]" aria-label="Grievance Redressal Mechanism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-[#00B7A5]" />
            <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold">
              Investor Protection
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#103D3B] leading-[1.2] mb-4">
            Investor Grievance Redressal Framework
          </h2>
          <p className="text-sm sm:text-base text-[#707B75] leading-relaxed">
            Sukriti Investments is committed to timely and fair resolution of any client concern. Complaints are formally registered, tracked, and closed only upon investor satisfaction.
          </p>
        </div>

        {/* Timelines Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#103D3B] text-[#a8d8c8] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#087F7C] tracking-wider font-semibold block">
                Stage 1 — Acknowledgement
              </span>
              <p className="font-serif text-lg text-[#103D3B] font-medium mt-0.5">
                Within 3 Working Days
              </p>
              <p className="text-xs text-[#707B75] mt-1">
                Your complaint is logged into the Complaint Register and an official acknowledgement receipt is issued.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#00B7A5] text-[#103D3B] flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#087F7C] tracking-wider font-semibold block">
                Stage 2 — Resolution
              </span>
              <p className="font-serif text-lg text-[#103D3B] font-medium mt-0.5">
                Within 15 Working Days
              </p>
              <p className="text-xs text-[#707B75] mt-1">
                Records are examined, liaised with AMC/RTA if needed, and a formal written reply is communicated.
              </p>
            </div>
          </div>
        </div>

        {/* Escalation Matrix Table */}
        <div className="rounded-2xl border border-[#DFE6DF] overflow-hidden bg-[#fffefa] shadow-xs mb-8">
          <div className="px-6 py-4 bg-[#103D3B] text-white flex items-center justify-between">
            <h3 className="font-serif text-lg font-normal">Grievance Escalation Matrix</h3>
            <span className="text-[11px] font-mono text-[#a8d8c8] uppercase tracking-wider">
              Levels L1 to L4
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F7F8F4] text-[#103D3B] border-b border-[#DFE6DF] font-semibold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-6">Level</th>
                  <th className="py-3 px-6">Escalate To</th>
                  <th className="py-3 px-6">Official Destination / Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE6DF] text-[#172321]">
                <tr className="hover:bg-[#F7F8F4]/50">
                  <td className="py-3.5 px-6 font-mono font-medium text-[#087F7C]">L1</td>
                  <td className="py-3.5 px-6 font-medium">Avinash Bhandari (GRO)</td>
                  <td className="py-3.5 px-6">
                    <a href={`mailto:${DISTRIBUTOR_INFO.email}`} className="text-[#103D3B] hover:text-[#00B7A5] underline">
                      {DISTRIBUTOR_INFO.email}
                    </a>{' '}
                    · {DISTRIBUTOR_INFO.phone}
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F4]/50">
                  <td className="py-3.5 px-6 font-mono font-medium text-[#087F7C]">L2</td>
                  <td className="py-3.5 px-6 font-medium">Concerned AMC / RTA</td>
                  <td className="py-3.5 px-6 text-[#707B75]">
                    Investor Service Desk of the respective Mutual Fund AMC / CAMS / KFintech
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F4]/50">
                  <td className="py-3.5 px-6 font-mono font-medium text-[#087F7C]">L3</td>
                  <td className="py-3.5 px-6 font-medium">SEBI SCORES</td>
                  <td className="py-3.5 px-6">
                    <a
                      href={DISTRIBUTOR_INFO.scoresUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#087F7C] hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>https://scores.sebi.gov.in/</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F4]/50">
                  <td className="py-3.5 px-6 font-mono font-medium text-[#087F7C]">L4</td>
                  <td className="py-3.5 px-6 font-medium">SMART ODR Portal</td>
                  <td className="py-3.5 px-6">
                    <a
                      href={DISTRIBUTOR_INFO.smartOdrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#087F7C] hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>https://smartodr.in/</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* View Full Grievance Redressal Policy Page */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#707B75] pt-2">
          <span>Need to submit a formal written complaint form?</span>
          <Link
            to="/grievance-redressal"
            className="inline-flex items-center gap-1.5 font-semibold text-[#087F7C] hover:text-[#103D3B] transition-colors"
          >
            <span>Open Grievance Redressal Page & Form</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
