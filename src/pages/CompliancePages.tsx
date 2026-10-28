import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  AlertTriangle,
  ExternalLink,
  Printer,
  Calendar,
  Building2,
  CheckCircle,
  Download,
  Info
} from 'lucide-react';
import { COMPLIANCE_PAGES, DISTRIBUTOR_INFO } from '../types';

export const CompliancePage: React.FC = () => {
  const location = useLocation();
  const pageKey = location.pathname.replace(/^\//, '') || 'privacy-policy';
  const pageMeta = COMPLIANCE_PAGES[pageKey];

  if (!pageMeta) {
    return (
      <div className="pt-36 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="font-serif text-3xl text-[#103D3B] mb-4">Policy Document Not Found</h1>
        <p className="text-sm text-[#707B75] mb-6">
          The requested compliance or disclosure document could not be located.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#103D3B] text-white text-xs font-semibold uppercase tracking-wider"
        >
          Return to Homepage
        </Link>
      </div>
    );
  }

  const renderContent = () => {
    switch (pageKey) {
      case 'privacy-policy':
        return <PrivacyPolicyContent />;
      case 'terms-and-conditions':
        return <TermsContent />;
      case 'risk-disclaimer':
        return <RiskDisclaimerContent />;
      case 'commission-disclosure':
        return <CommissionDisclosureContent />;
      case 'grievance-redressal':
        return <GrievanceRedressalContent />;
      case 'registration-disclosure':
        return <RegistrationDisclosureContent />;
      case 'investor-charter':
        return <InvestorCharterContent />;
      case 'kyc-onboarding':
        return <KycOnboardingContent />;
      case 'transaction-policy':
        return <TransactionPolicyContent />;
      case 'fund-recommendation-policy':
        return <FundRecommendationContent />;
      case 'important-links':
        return <ImportantLinksContent />;
      default:
        return <div>Policy document under regulatory review.</div>;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#707B75]">
          <Link to="/" className="hover:text-[#103D3B] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span>{pageMeta.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#103D3B] font-medium">{pageMeta.title}</span>
        </nav>

        {/* Page Header Container */}
        <div className="bg-[#fffefa] border border-[#DFE6DF] rounded-3xl p-8 sm:p-12 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DFE6DF]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold block mb-2">
                Official Compliance Document · ARN-31739
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#103D3B] font-normal leading-tight">
                {pageMeta.title}
              </h1>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#DFE6DF] text-xs font-semibold text-[#103D3B] hover:bg-[#F7F8F4] transition-colors self-start sm:self-auto shrink-0 print:hidden cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#00B7A5]" />
              <span>Print Document</span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#707B75]">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#00B7A5]" />
              <span>Avinash Bhandari · Sukriti Investments</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00B7A5]" />
              <span>AMFI Registration Validity: {DISTRIBUTOR_INFO.mfValidity}</span>
            </span>
          </div>
        </div>

        {/* Document Content Body */}
        <article className="bg-[#fffefa] border border-[#DFE6DF] rounded-3xl p-8 sm:p-12 shadow-xs text-sm sm:text-base text-[#172321] leading-relaxed">
          {renderContent()}
        </article>

        {/* Related Policies & Disclosures Footer Links */}
        <div className="mt-8 p-6 rounded-2xl bg-[#eaf3ee] border border-[#a8d8c8]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#103D3B]">
            <ShieldCheck className="w-4 h-4 text-[#00B7A5]" />
            <span>Need further assistance or wish to submit a written query?</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${DISTRIBUTOR_INFO.phoneRaw}`} className="font-semibold text-[#103D3B] hover:underline">
              {DISTRIBUTOR_INFO.phone}
            </a>
            <span className="text-gray-300">|</span>
            <a href={`mailto:${DISTRIBUTOR_INFO.email}`} className="font-semibold text-[#103D3B] hover:underline">
              {DISTRIBUTOR_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   1. PRIVACY POLICY
========================================================================= */
const PrivacyPolicyContent: React.FC = () => (
  <div className="space-y-6">
    <p>
      This Privacy Policy explains how <strong>Avinash Bhandari</strong>, AMFI Registered Mutual Fund Distributor (ARN-31739), collects, uses, stores and protects the personal data of investors and visitors to this website, in line with the Digital Personal Data Protection Act, 2023, the Prevention of Money Laundering Act, 2002 and the guidelines of SEBI and AMFI. Avinash Bhandari is the Data Fiduciary for the personal data collected.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      1. Purpose and Lawful Basis
    </h2>
    <p>
      We collect personal data only for a lawful purpose connected with mutual fund distribution: completing KYC, opening and servicing folios, assessing the investor's risk profile, placing transactions, sending account statements and scheme information, handling complaints and meeting regulatory reporting requirements.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      2. Data We Collect
    </h2>
    <p>
      The data collected includes name, date of birth, PAN, Aadhaar or other address proof, photograph, bank details, contact details, income range, FATCA/CRS and nomination details, and the answers given in the Risk Profiling Form. Visitors who use the contact form on this website share their name, mobile number, email and query.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      3. Sharing with Authorized Entities
    </h2>
    <p>
      Personal data is shared only with the Asset Management Companies (AMCs), Registrar and Transfer Agents (RTAs such as CAMS and KFintech), KYC Registration Agencies (KRAs), transaction platforms (BSE StAR MF, NSE MF Invest), insurers and regulators to the extent needed to process the investor's transactions and to comply with the law. We do not sell personal data and we do not share it with anyone for marketing purposes.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      4. Storage, Security and Retention
    </h2>
    <p>
      Data is kept in physical client files at the registered office and on password-protected systems with back-up, and access is limited to the distributor.
    </p>
    <p>
      Personal data is kept for as long as the investor relationship continues and thereafter for the period required under the PML Rules, SEBI and AMFI guidelines and the Income Tax Act, after which it is erased securely.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      5. Your Rights as a Data Principal
    </h2>
    <p>
      An investor may ask to see, correct or update the personal data held, may withdraw consent for any use that is not required by law, and may raise a grievance about the handling of personal data by writing to the Grievance Officer, Avinash Bhandari, at{' '}
      <a href={`mailto:${DISTRIBUTOR_INFO.email}`} className="text-[#087F7C] underline font-medium">
        {DISTRIBUTOR_INFO.email}
      </a>{' '}
      or on {DISTRIBUTOR_INFO.phone}. Requests are answered within the time allowed under the Digital Personal Data Protection Act, 2023.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      6. Cookies and Browser Settings
    </h2>
    <p>
      This website may use cookies to remember visitor preferences and to understand how the site is used. Cookies do not hold sensitive personal data and can be disabled in your web browser. This Privacy Policy may be updated when the law or our practice changes; the current version is always displayed on this page.
    </p>
  </div>
);

/* =========================================================================
   2. TERMS & CONDITIONS
========================================================================= */
const TermsContent: React.FC = () => (
  <div className="space-y-6">
    <p>
      This website is owned and operated by <strong>Avinash Bhandari</strong>, AMFI Registered Mutual Fund Distributor & SIF Distributor (ARN-31739), Jodhpur. By using this website you agree to these terms. If you do not agree, please do not use the website.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      1. Nature of Information & Distributor Status
    </h2>
    <p>
      The content on this website is for general information and investor education only. It is not an offer, solicitation, recommendation or advice to buy or sell any mutual fund scheme or any other product. Nothing on this website should be treated as investment advice; <strong>Avinash Bhandari is not a SEBI-registered Investment Adviser</strong>.
    </p>
    <p>
      Before investing, read the scheme related documents and consider whether the scheme suits your risk profile, goals and time horizon. Any transaction is placed only after KYC, risk profiling and the signing of the risk and commission disclosures.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      2. Accuracy & Precedence of Scheme Documents
    </h2>
    <p>
      Information on this website is taken from sources believed to be reliable, including the AMCs, AMFI and SEBI, but its accuracy, completeness and timeliness are not guaranteed. Scheme details, Riskometer readings, expense ratios and performance change from time to time; the official scheme documents (SID/SAI/KIM) and the respective AMC's website prevail over anything shown here. Links to third-party websites are given for convenience only, and we are not responsible for their content or their privacy practices.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      3. Intellectual Property & Acceptable Use
    </h2>
    <p>
      The text, design, logo and material on this website belong to Avinash Bhandari or are used with permission, and may not be copied, reproduced or used for any commercial purpose without written consent. Users must not misuse the website, attempt to gain unauthorized access, or post anything unlawful or misleading.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      4. Limitation of Liability & Jurisdiction
    </h2>
    <p>
      We do not accept liability for any loss or damage arising from the use of this website or from reliance on its content, to the extent permitted by law.
    </p>
    <p>
      These terms are governed by the laws of India and the courts at <strong>Jodhpur, Rajasthan</strong> have exclusive jurisdiction. Investor grievances are handled under the Grievance Redressal Policy on this website and may be escalated to SEBI SCORES and SMART ODR.
    </p>
  </div>
);

/* =========================================================================
   3. RISK DISCLAIMER
========================================================================= */
const RiskDisclaimerContent: React.FC = () => (
  <div className="space-y-6">
    <div className="p-4 rounded-2xl bg-[#eaf3ee] border border-[#00B7A5]/50 text-xs sm:text-sm">
      <strong className="text-[#103D3B] block mb-1">Standard Statutory Disclaimer:</strong>
      Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
    </div>

    <p>
      Investments in Mutual Fund schemes carry risk. Please understand the following before you invest:
    </p>

    <ul className="space-y-4 list-disc pl-5 text-sm sm:text-base">
      <li>
        <strong>Market risk, including loss of capital:</strong> The value of a scheme moves with the market. It can fall because of market volatility, force majeure events, or changes in the political and economic environment. Returns are not fixed, and you can lose a part of the money you invested.
      </li>
      <li>
        <strong>Issuer default risk:</strong> A company or body whose securities the scheme holds may default on its payments, or may become bankrupt or insolvent. In such a situation the AMC may segregate the affected portion of the portfolio (create a segregated portfolio), and the money in that portion is paid only as and when it is recovered.
      </li>
      <li>
        <strong>Suspension of redemption:</strong> If a scheme faces a liquidity crisis, the AMC may suspend the redemption facility for the period permitted by the rules. During such a period you may not be able to take your money out.
      </li>
      <li>
        <strong>New Fund Offer (NFO) risks:</strong> A new scheme has no track record. Investments in an NFO carry price volatility risk, liquidity risk and, for schemes listed on an exchange, delisting risk.
      </li>
      <li>
        <strong>Winding up of a scheme:</strong> A scheme can be wound up if its instruments turn illiquid, if redemption requests are very high, or on account of unforeseen market events. On winding up, the money is returned as the scheme's assets are sold, which can take time and may be at reduced values.
      </li>
      <li>
        <strong>Past performance not indicative of future returns:</strong> The Net Asset Value (NAV) of a scheme moves up and down with the market. No return is assured, guaranteed or indicated by us or by any Mutual Fund, and no illustration shown by us assumes a return above 12% per annum.
      </li>
      <li>
        <strong>Match the risk with your risk profile:</strong> Every scheme carries a Riskometer showing its risk level. Check it against your own risk profile before investing. We explain these risks to every investor at the first investment and again at every additional investment.
      </li>
    </ul>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      Specialised Investment Fund (SIF) Risk Disclaimer
    </h2>
    <div className="p-4 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF]">
      <p className="text-sm">
        Investments in Specialised Investment Fund (SIF) involve relatively higher risk including potential loss of capital, liquidity risk and market volatility. Read all scheme related documents carefully before investing.
      </p>
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      Distributor & Agency Solicitations
    </h2>
    <p>
      Avinash Bhandari is NOT a SEBI-registered Investment Adviser. Any guidance given is incidental to the distribution of mutual fund schemes and no fee is charged for it.
    </p>
    <p className="text-xs text-[#707B75]">
      Insurance is the subject matter of solicitation. Insurance products are offered as an agent of LIC of India and HDFC ERGO General Insurance Company Limited; the insurer is responsible for the policy.
    </p>
  </div>
);

/* =========================================================================
   4. COMMISSION DISCLOSURE
========================================================================= */
const CommissionDisclosureContent: React.FC = () => (
  <div className="space-y-6">
    <p>
      Avinash Bhandari distributes Regular Plans of mutual fund and SIF schemes and receives trail commission from the Asset Management Companies (AMCs). The commission is part of the scheme's Base Expense Ratio (BER) and does not add to the investor's cost. No upfront commission is received.
    </p>

    <div className="p-5 rounded-2xl bg-[#eaf3ee] border border-[#00B7A5]/40 text-sm">
      <h3 className="font-serif text-lg text-[#103D3B] mb-2 font-medium">CAS Transparency</h3>
      <p>
        The commission actually paid to the distributor is transparently reported in the investor's Consolidated Account Statement (CAS) issued by RTAs / Depositories as mandated by SEBI.
      </p>
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      How Commission is Structured
    </h2>
    <p>
      The commission rate differs by scheme type (Equity, Debt, Hybrid, Liquid), AMC, Assets Under Management (AUM) slab, and investor location (T30 vs B30 cities).
    </p>
    <p>
      The commission on the scheme being recommended is explicitly communicated to the investor at the time of the recommendation and is documented in the <strong>Commission Disclosure</strong> signed by the investor prior to transaction submission.
    </p>

    <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#DFE6DF] text-sm font-medium text-[#103D3B]">
      Crucial Principle: Schemes are chosen strictly on suitability and investor goals, never on the commission rate paid by the AMC.
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      Scheme-Wise Commission Schedule
    </h2>
    <p className="text-sm text-[#707B75]">
      Commission rates are provided by individual AMCs and are subject to regulatory caps and periodic updates. The current applicable scheme-wise schedule is available on request at the distributor's office and is furnished with every formal scheme recommendation.
    </p>
    <div className="pt-2 flex flex-wrap gap-3">
      <a
        href={`mailto:${DISTRIBUTOR_INFO.email}?subject=Request for Current Scheme-Wise Commission Schedule`}
        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[#103D3B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#087F7C] transition-colors"
      >
        <span>Request Latest Commission Schedule via Email</span>
        <ExternalLink className="w-3.5 h-3.5 text-[#a8d8c8]" />
      </a>
      <a
        href="https://www.dropbox.com/scl/fo/wl5qcir2n34372500w4og/AKGxG9klkCogWpw32e1tfVQ?rlkey=qj6xrsdem5u7gwvq7bjbhfzlh&st=1d820pmw&dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl border border-[#00B7A5]/50 bg-[#eaf3ee] text-[#103D3B] text-xs font-semibold uppercase tracking-wider hover:bg-[#dcefe7] transition-colors"
      >
        <span>View Full Commission Disclosure</span>
        <ExternalLink className="w-3.5 h-3.5 text-[#087F7C]" />
      </a>
    </div>
  </div>
);

/* =========================================================================
   5. GRIEVANCE REDRESSAL
========================================================================= */
const GrievanceRedressalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <p>
        Investors may raise a complaint by phone, WhatsApp, email, letter or in person at our office. Every complaint is entered in the Complaint Register, acknowledged within <strong>three working days</strong> and resolved within <strong>fifteen working days</strong>. Where the matter lies with the AMC or the RTA, it is taken up with them on the investor's behalf and followed up till it is closed. A complaint is closed only after the investor confirms resolution.
      </p>

      {/* Contact Person Box */}
      <div className="p-5 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF]">
        <h3 className="font-serif text-lg text-[#103D3B] font-medium mb-3">
          Grievance Redressal Officer (GRO)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div>
            <span className="text-gray-500 block">Contact Person:</span>
            <strong className="text-[#103D3B]">{DISTRIBUTOR_INFO.gro}</strong>
          </div>
          <div>
            <span className="text-gray-500 block">Phone:</span>
            <a href={`tel:${DISTRIBUTOR_INFO.phoneRaw}`} className="text-[#087F7C] font-semibold">
              {DISTRIBUTOR_INFO.phone}
            </a>
          </div>
          <div>
            <span className="text-gray-500 block">Email:</span>
            <a href={`mailto:${DISTRIBUTOR_INFO.email}`} className="text-[#087F7C] font-semibold">
              {DISTRIBUTOR_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Resolution Stages Table */}
      <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
        How a Complaint is Handled
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
          <thead className="bg-[#103D3B] text-white">
            <tr>
              <th className="py-2.5 px-4 font-medium">Step</th>
              <th className="py-2.5 px-4 font-medium">What Happens</th>
              <th className="py-2.5 px-4 font-medium">Timeline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DFE6DF]">
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-mono font-semibold">1</td>
              <td className="py-2.5 px-4">Complaint received (phone, email, WhatsApp, letter, in person) and entered in Complaint Register</td>
              <td className="py-2.5 px-4 font-mono">Day 0</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-mono font-semibold">2</td>
              <td className="py-2.5 px-4">Official acknowledgement sent to you</td>
              <td className="py-2.5 px-4 font-medium text-[#087F7C]">3 working days</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-mono font-semibold">3</td>
              <td className="py-2.5 px-4">Records examined; matter taken up with AMC / RTA where needed</td>
              <td className="py-2.5 px-4">—</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-mono font-semibold">4</td>
              <td className="py-2.5 px-4">Written reply with the complete resolution</td>
              <td className="py-2.5 px-4 font-medium text-[#087F7C]">15 working days</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-mono font-semibold">5</td>
              <td className="py-2.5 px-4">Complaint formally closed after your confirmation</td>
              <td className="py-2.5 px-4">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Escalation Matrix */}
      <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
        Escalation Matrix
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
          <thead className="bg-[#eaf3ee] text-[#103D3B]">
            <tr>
              <th className="py-2.5 px-4 font-semibold">Level</th>
              <th className="py-2.5 px-4 font-semibold">Escalate To</th>
              <th className="py-2.5 px-4 font-semibold">Contact / Destination</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DFE6DF]">
            <tr>
              <td className="py-2.5 px-4 font-mono font-semibold text-[#087F7C]">L1</td>
              <td className="py-2.5 px-4 font-medium">Avinash Bhandari (GRO)</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.email} · {DISTRIBUTOR_INFO.phone}</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-mono font-semibold text-[#087F7C]">L2</td>
              <td className="py-2.5 px-4 font-medium">Concerned AMC / RTA</td>
              <td className="py-2.5 px-4">Investor service desk of the respective AMC / CAMS / KFintech</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-mono font-semibold text-[#087F7C]">L3</td>
              <td className="py-2.5 px-4 font-medium">SEBI SCORES</td>
              <td className="py-2.5 px-4">
                <a href={DISTRIBUTOR_INFO.scoresUrl} target="_blank" rel="noopener noreferrer" className="text-[#087F7C] underline inline-flex items-center gap-1">
                  <span>https://scores.sebi.gov.in/</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-mono font-semibold text-[#087F7C]">L4</td>
              <td className="py-2.5 px-4 font-medium">SMART ODR Portal</td>
              <td className="py-2.5 px-4">
                <a href={DISTRIBUTOR_INFO.smartOdrUrl} target="_blank" rel="noopener noreferrer" className="text-[#087F7C] underline inline-flex items-center gap-1">
                  <span>https://smartodr.in/</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Official Investor Complaint Format */}
      <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
        Investor Complaint Format
      </h2>
      <p className="text-xs text-[#707B75]">
        To submit a complaint, you may email the details below to <a href={`mailto:${DISTRIBUTOR_INFO.email}`} className="text-[#087F7C] underline font-semibold">{DISTRIBUTOR_INFO.email}</a> or print and hand it in at our registered office:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
          <thead className="bg-[#eaf3ee] text-[#103D3B]">
            <tr>
              <th className="py-2.5 px-4 font-semibold w-1/3">Particulars</th>
              <th className="py-2.5 px-4 font-semibold">Details Required</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DFE6DF]">
            <tr>
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Name of Investor</td>
              <td className="py-2.5 px-4 text-[#707B75]">Full name as recorded in folio</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Folio Number / PAN</td>
              <td className="py-2.5 px-4 text-[#707B75]">Folio number or 10-digit PAN</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Mobile Number & Email</td>
              <td className="py-2.5 px-4 text-[#707B75]">Registered phone number and email address</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Nature of Complaint</td>
              <td className="py-2.5 px-4 text-[#172321]">
                Transaction / Account statement / Service delay / Commission / Other
              </td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Details of Complaint</td>
              <td className="py-2.5 px-4 text-[#707B75]">Specific facts, dates, AMC/scheme name, and reference numbers</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Date and Signature</td>
              <td className="py-2.5 px-4 text-[#707B75]">Date of submission and investor's authorized signature</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={`mailto:${DISTRIBUTOR_INFO.email}?subject=Formal Investor Complaint - [Enter Folio/PAN]&body=Name of Investor:%0D%0AFolio Number / PAN:%0D%0AMobile Number:%0D%0AEmail Address:%0D%0ANature of Complaint (Transaction / Account statement / Service delay / Commission / Other):%0D%0A%0D%0ADetails of Complaint:%0D%0A`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#103D3B] hover:bg-[#087F7C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
        >
          <span>Email Complaint to GRO ({DISTRIBUTOR_INFO.email})</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#a8d8c8]" />
        </a>
      </div>
    </div>
  );
};

/* =========================================================================
   6. REGISTRATION DISCLOSURE
========================================================================= */
const RegistrationDisclosureContent: React.FC = () => {
  const amcList = [
    { name: 'Aditya Birla Sun Life Mutual Fund', reg: 'MF/020/94/8' },
    { name: 'Mahindra Manulife Mutual Fund', reg: 'MF/065/10/02' },
    { name: 'Axis Mutual Fund', reg: 'MF/061/09/02' },
    { name: 'Mirae Asset Mutual Fund', reg: 'MF/055/07/08' },
    { name: 'Bajaj Finserv Mutual Fund', reg: 'MF/078/23/04' },
    { name: 'Motilal Oswal Mutual Fund', reg: 'MF/062/09/03' },
    { name: 'Bandhan Mutual Fund', reg: 'MF/042/00/3' },
    { name: 'Nippon India Mutual Fund', reg: 'MF/022/95/1' },
    { name: 'Canara Robeco Mutual Fund', reg: 'MF/004/93/4' },
    { name: 'PGIM India Mutual Fund', reg: 'MF/049/03/01' },
    { name: 'Capitalmind Mutual Fund', reg: 'MF/084/25/10' },
    { name: 'PPFAS Mutual Fund', reg: 'MF/066/10/03' },
    { name: 'DSP Mutual Fund', reg: 'MF/036/97/7' },
    { name: 'Quant Mutual Fund', reg: 'MF/028/96/4' },
    { name: 'Edelweiss Mutual Fund', reg: 'MF/057/08/02' },
    { name: 'Samco Mutual Fund', reg: 'MF/081/23/07' },
    { name: 'Franklin Templeton Mutual Fund', reg: 'MF/026/96/8' },
    { name: 'SBI Mutual Fund', reg: 'MF/009/93/8' },
    { name: 'HDFC Mutual Fund', reg: 'MF/044/00/6' },
    { name: 'Sundaram Mutual Fund', reg: 'MF/017/96/6' },
    { name: 'Helios Mutual Fund', reg: 'MF/079/23/05' },
    { name: 'Tata Mutual Fund', reg: 'MF/034/95/7' },
    { name: 'HSBC Mutual Fund', reg: 'MF/046/02/5' },
    { name: 'Taurus Mutual Fund', reg: 'MF/027/94/9' },
    { name: 'ICICI Prudential Mutual Fund', reg: 'MF/003/93/6' },
    { name: 'The Wealth Company Mutual Fund', reg: 'MF/086/25/12' },
    { name: 'Invesco Mutual Fund', reg: 'MF/052/06/01' },
    { name: 'UTI Mutual Fund', reg: 'MF/048/03/08' },
    { name: 'Kotak Mahindra Mutual Fund', reg: 'MF/038/98/1' },
    { name: 'WhiteOak Capital Mutual Fund', reg: 'MF/074/18/01' },
    { name: 'LIC Mutual Fund', reg: 'MF/013/94/6' },
  ];

  return (
    <div className="space-y-6">
      <p>
        Content for the AMFI weblink registration page — complete statutory disclosure.
      </p>

      {/* Registration Details Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
          <thead className="bg-[#103D3B] text-white">
            <tr>
              <th className="py-3 px-4 font-medium w-1/3">Particulars</th>
              <th className="py-3 px-4 font-medium">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DFE6DF]">
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Name of Distributor</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.name}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Brand Name</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.brandName}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Registration</td>
              <td className="py-2.5 px-4">
                AMFI Registered Mutual Fund Distributor & SIF Distributor (<strong>{DISTRIBUTOR_INFO.arn}</strong>)
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Mutual Fund Distributor Validity</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.mfValidity}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">SIF Distributor Validity</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.sifValidity}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Constitution</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.constitution}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Registered Address</td>
              <td className="py-2.5 px-4">{DISTRIBUTOR_INFO.address}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Contact</td>
              <td className="py-2.5 px-4">
                {DISTRIBUTOR_INFO.phone} | {DISTRIBUTOR_INFO.email}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">GSTIN</td>
              <td className="py-2.5 px-4 font-mono">{DISTRIBUTOR_INFO.gstin}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Grievance Redressal Officer</td>
              <td className="py-2.5 px-4">
                {DISTRIBUTOR_INFO.gro} | {DISTRIBUTOR_INFO.email} | {DISTRIBUTOR_INFO.phone}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2.5 px-4 font-semibold text-[#103D3B]">Services Offered</td>
              <td className="py-2.5 px-4">
                Distribution of mutual fund schemes and SIF schemes (Regular Plans)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Empanelled AMCs List */}
      <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
        Empanelled AMCs with SEBI Registration Numbers
      </h2>
      <p className="text-xs text-[#707B75]">
        Complete verified list of Asset Management Companies with which Avinash Bhandari is empanelled:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
          <thead className="bg-[#eaf3ee] text-[#103D3B]">
            <tr>
              <th className="py-2.5 px-4 font-semibold">AMC Name</th>
              <th className="py-2.5 px-4 font-semibold">SEBI Regn. No.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DFE6DF]">
            {amcList.map((amc, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-2 px-4 font-medium">{amc.name}</td>
                <td className="py-2 px-4 font-mono text-xs text-[#087F7C]">{amc.reg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* =========================================================================
   7. INVESTOR CHARTER
========================================================================= */
const InvestorCharterContent: React.FC = () => (
  <div className="space-y-6">
    <div className="p-4 rounded-2xl bg-[#eaf3ee] border border-[#a8d8c8]/50 text-xs sm:text-sm">
      <strong className="text-[#103D3B] block mb-1">Official Investor Charter for Mutual Funds:</strong>
      This charter articulates the vision, mission, rights of mutual fund investors, investor responsibilities, and the code of conduct governing mutual fund distributors under SEBI and AMFI guidelines.
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B]">
      1. Vision & Mission
    </h2>
    <p>
      <strong>Vision:</strong> To facilitate informed and disciplined investing across Indian households and institutions, fostering long-term wealth creation while maintaining the highest fiduciary care and compliance.
    </p>
    <p>
      <strong>Mission:</strong> To ensure every investor receives transparent, objective information matching their specific suitability, timely account documentation, fair pricing, and responsive grievance resolution.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      2. Rights of Mutual Fund Investors
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>Receive transparent information about the investment objectives, risks, asset allocation, and fees of mutual fund schemes through official SID, SAI, and KIM documents.</li>
      <li>Receive allotment of units or account statements within prescribed regulatory timelines.</li>
      <li>Receive dividend proceeds and redemption payouts within statutory timeframes mandated by SEBI.</li>
      <li>Receive Consolidated Account Statements (CAS) containing comprehensive transaction records and distributor commissions paid.</li>
      <li>Be treated with honesty, fairness, and transparency without any misrepresentation or aggressive sales practices.</li>
      <li>Seek redressal of any grievance through our internal mechanism, the AMC, SEBI SCORES, or SMART ODR portal.</li>
    </ul>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      3. Responsibilities & Do's for Investors
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>Complete valid KYC verification with genuine identity, address, and bank proofs before making investments.</li>
      <li>Complete the Risk Profiling Questionnaire honestly to ensure recommended schemes align with your genuine risk tolerance and liquidity horizons.</li>
      <li>Read the Scheme Information Document (SID) and Key Information Memorandum (KIM) carefully before authorizing transactions.</li>
      <li>Make all payments only from your own bank account registered in the folio. <strong>Third-party payments are strictly prohibited by SEBI.</strong></li>
      <li>Verify your email address and mobile number are accurately recorded in your folios to receive instant OTP authorizations and transaction alerts.</li>
      <li>Keep your nominated beneficiaries up to date in all folios.</li>
    </ul>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      4. Don'ts for Investors
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>Do not sign blank transaction slips or application forms under any circumstances.</li>
      <li>Do not issue cash or cash equivalents for mutual fund transactions.</li>
      <li>Do not share your online transaction passwords, OTPs, or net banking credentials with anyone, including the distributor.</li>
      <li>Do not expect or solicit guaranteed or assured returns from mutual fund investments.</li>
    </ul>
  </div>
);

/* =========================================================================
   8. KYC & ONBOARDING POLICY
========================================================================= */
const KycOnboardingContent: React.FC = () => (
  <div className="space-y-6">
    <p>
      Every investor completes Know Your Customer (KYC) verification before the first investment. KYC is a requirement under the Prevention of Money Laundering Act, 2002 and SEBI rules. <strong>No transaction is accepted for an investor whose KYC is not validated.</strong>
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      1. Documents We Collect
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>
        <strong>PAN card and Aadhaar (or another valid address proof):</strong> Seen in original. Copies are verified against the originals and attested.
      </li>
      <li>
        <strong>Photograph and Bank Proof:</strong> A recent passport photograph, bank account proof (cancelled cheque leaf or bank statement with IFSC/MICR), and the mobile number and email that belong to the investor.
      </li>
      <li>
        <strong>For NRI Investors:</strong> Passport, overseas address proof, and NRE / NRO account details.
      </li>
      <li>
        <strong>For Minors:</strong> The guardian's KYC and the minor's proof of age/birth certificate.
      </li>
      <li>
        <strong>For Companies, Trusts, and HUFs:</strong> Constitution papers, board resolution, list of authorized signatories, and Ultimate Beneficial Owner (UBO) declaration.
      </li>
    </ul>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      2. Step-by-Step Onboarding Process
    </h2>
    <ol className="space-y-3 list-decimal pl-5 text-sm">
      <li>
        <strong>KRA Status Check:</strong> The KYC status is checked on the KYC Registration Agency (CVL, NDML, CAMS, Karvy, or NSE KRA). Where KYC is not already registered, the form is filled, In-Person Verification (IPV) is conducted by the distributor, and KYC documents are submitted to KRA / CKYC.
      </li>
      <li>
        <strong>Risk Profiling:</strong> The investor completes the 4-question Risk Profiling Form and signs the Risk Disclosure and Commission Disclosure.
      </li>
      <li>
        <strong>Statutory Certifications:</strong> FATCA / CRS self-certification, nomination (or signed opt-out), and bank mandate details are collected.
      </li>
      <li>
        <strong>Folio Creation:</strong> The folio is opened through an authorized transaction platform (BSE StAR MF, NSE MF Invest) or via physical form.
      </li>
      <li>
        <strong>Welcome Communication:</strong> The investor receives a welcome communication detailing the folio number, scheme documentation links, and grievance contact coordinates.
      </li>
    </ol>

    <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#DFE6DF] text-xs text-[#707B75]">
      * Only the investor's own details are entered in the application. Modifications to investor details are made only upon the investor's signed written request with supporting proofs. KYC records are kept for the statutory period under PML Rules and SEBI guidelines and are never shared for unauthorized purposes.
    </div>
  </div>
);

/* =========================================================================
   9. TRANSACTION POLICY
========================================================================= */
const TransactionPolicyContent: React.FC = () => (
  <div className="space-y-6">
    <p>
      Transactions are accepted only from investors whose KYC is validated and whose risk profile is on record. A transaction is placed <strong>only on the investor's own instruction</strong>—in writing, by email, via WhatsApp from the registered contact, or through the investor's own secure login on the transaction platform. Telephone instructions are confirmed in writing before placement.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      1. Online Transactions
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>
        Online transactions are placed through <strong>BSE STAR MF</strong> / <strong>NSE MF Invest Platform</strong> (For MF & SIF), CAMS Edge360, and KFintech IRIS.
      </li>
      <li>
        Every online transaction is authorized by the investor through OTP or email link sent directly by the exchange / platform.
      </li>
      <li>
        Payment is made from the investor's bank account registered in the folio via net banking, UPI, or registered mandate. <strong>Third-party payments are strictly rejected.</strong>
      </li>
      <li>
        SIP registration, pause, and stop requests are submitted through the platform or the RTA.
      </li>
    </ul>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      2. Physical Transactions
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>
        Application forms are checked for completeness, signature, and investor details before submission. The ARN-31739 and distributor code are endorsed on every form.
      </li>
      <li>
        Cheques must be drawn from the investor's own bank account in favor of the scheme. Forms and cheques are submitted at the CAMS / KFintech service centre at Jodhpur and time-stamped acknowledgments are retained in the client file.
      </li>
      <li>
        <strong>Cut-off time:</strong> Applications received after the AMC's statutory cut-off time are processed on the next business day at the applicable NAV.
      </li>
    </ul>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      3. Non-Financial Transactions & Records
    </h2>
    <p className="text-sm">
      Change of address, bank, nominee, or contact details is processed only on the investor's signed request with supporting documents submitted to the RTA or KRA.
    </p>
    <p className="text-sm">
      Every transaction is entered in the Transaction Register and matched with the platform order report and RTA mail-back file. Where an investor insists on a scheme that does not suit their risk profile, an <strong>Unsuitability Letter</strong> and the investor's written execution-only confirmation are retained with the record.
    </p>
  </div>
);

/* =========================================================================
   10. FUND RECOMMENDATION POLICY
========================================================================= */
const FundRecommendationContent: React.FC = () => (
  <div className="space-y-6">
    <p>
      At Sukriti Investments, scheme recommendation is a structured, objective process rooted in suitability analysis. Commission rates paid by AMCs are never a consideration.
    </p>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      1. Risk Profiling Categories
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
        <thead className="bg-[#103D3B] text-white">
          <tr>
            <th className="py-2.5 px-4 font-medium">Risk Category</th>
            <th className="py-2.5 px-4 font-medium">What It Means</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#DFE6DF]">
          <tr>
            <td className="py-3 px-4 font-semibold text-[#103D3B]">Conservative</td>
            <td className="py-3 px-4">Capital protection matters more than growth. Suited to debt, liquid, and conservative hybrid schemes.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold text-[#103D3B]">Moderate</td>
            <td className="py-3 px-4">A balance between growth and stability, with some ups and downs accepted for better long-term growth.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold text-[#103D3B]">Aggressive</td>
            <td className="py-3 px-4">Maximum growth; able to bear a large fall in value. Suited to equity schemes including mid cap, small cap, and thematic.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      2. Suitability Matrix by Horizon
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
        <thead className="bg-[#eaf3ee] text-[#103D3B]">
          <tr>
            <th className="py-2.5 px-3 font-semibold">Risk Profile</th>
            <th className="py-2.5 px-3 font-semibold">Short Term (&lt;3Y)</th>
            <th className="py-2.5 px-3 font-semibold">Medium Term (3-5Y)</th>
            <th className="py-2.5 px-3 font-semibold">Long Term (&gt;5Y)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#DFE6DF]">
          <tr>
            <td className="py-2.5 px-3 font-semibold text-[#103D3B]">Conservative</td>
            <td className="py-2.5 px-3">Overnight, Liquid, Money Market, Ultra Short Duration</td>
            <td className="py-2.5 px-3">Low Duration, Short Duration, Corporate Bond, Banking & PSU Debt</td>
            <td className="py-2.5 px-3">Short Duration, Corporate Bond, Conservative Hybrid, Equity Savings</td>
          </tr>
          <tr>
            <td className="py-2.5 px-3 font-semibold text-[#103D3B]">Moderate</td>
            <td className="py-2.5 px-3">Low Duration, Money Market, Arbitrage, Equity Savings</td>
            <td className="py-2.5 px-3">Equity Savings, Balanced Advantage, Multi Asset Allocation, Aggressive Hybrid</td>
            <td className="py-2.5 px-3">Balanced Advantage, Aggressive Hybrid, Mid Cap, Large Cap, Flexi Cap</td>
          </tr>
          <tr>
            <td className="py-2.5 px-3 font-semibold text-[#103D3B]">Aggressive</td>
            <td className="py-2.5 px-3">Arbitrage, Equity Savings</td>
            <td className="py-2.5 px-3">Aggressive Hybrid, Large Cap, Flexi Cap</td>
            <td className="py-2.5 px-3">Flexi Cap, Multi Cap, Small Cap, Sectoral / Thematic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      3. Indicative Asset Allocation
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs sm:text-sm border border-[#DFE6DF] rounded-xl overflow-hidden">
        <thead className="bg-[#F7F8F4] text-[#103D3B]">
          <tr>
            <th className="py-2.5 px-4 font-semibold">Risk Profile</th>
            <th className="py-2.5 px-4 font-semibold">Equity %</th>
            <th className="py-2.5 px-4 font-semibold">Debt %</th>
            <th className="py-2.5 px-4 font-semibold">Hybrid / Others %</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#DFE6DF]">
          <tr>
            <td className="py-2 px-4 font-semibold">Conservative</td>
            <td className="py-2 px-4">0 - 20%</td>
            <td className="py-2 px-4">70 - 85%</td>
            <td className="py-2 px-4">5 - 15%</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-semibold">Moderate</td>
            <td className="py-2 px-4">40 - 60%</td>
            <td className="py-2 px-4">30 - 50%</td>
            <td className="py-2 px-4">10 - 15%</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-semibold">Aggressive</td>
            <td className="py-2 px-4">80 - 100%</td>
            <td className="py-2 px-4">0 - 15%</td>
            <td className="py-2 px-4">0 - 10%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="font-serif text-xl sm:text-2xl text-[#103D3B] pt-4 border-t border-[#DFE6DF]">
      4. Scheme Selection Criteria & Annual Review
    </h2>
    <ul className="space-y-2 list-disc pl-5 text-sm">
      <li>Schemes are selected only from AMCs with which Avinash Bhandari is empanelled.</li>
      <li>Returns over 1, 3, and 5 years are compared with the benchmark and peer schemes.</li>
      <li>Risk measures (standard deviation, Sharpe ratio, and maximum past drawdown) and expense ratios are analyzed.</li>
      <li>Fund manager tenure and consistency of investment philosophy are evaluated.</li>
      <li><strong>Riskometer Rule:</strong> A scheme whose Riskometer reading is above the investor's risk category is not recommended. If an investor insists, an Unsuitability Letter must be signed prior to placement.</li>
      <li><strong>Annual Review:</strong> Every portfolio is reviewed once a year (or earlier upon client request or life changes like marriage, retirement, new career). Review checks whether holdings still match goals and Riskometers.</li>
    </ul>
  </div>
);

/* =========================================================================
   11. IMPORTANT LINKS
========================================================================= */
const ImportantLinksContent: React.FC = () => {
  const links = [
    {
      title: 'SID / SAI / KIM (SEBI Mutual Fund Filings)',
      url: DISTRIBUTOR_INFO.sebiOfferDocsUrl,
      desc: 'Access official Scheme Information Documents (SID), Statements of Additional Information (SAI), and Key Information Memorandums (KIM) across all AMCs.',
    },
    {
      title: 'AMFI Risk Parameters & Stress Tests',
      url: 'https://www.amfiindia.com/risk-parameters',
      desc: 'Check liquidity and stress test parameters for Mid Cap and Small Cap mutual fund schemes.',
    },
    {
      title: 'AMFI Factsheets Download Center',
      url: 'https://www.amfiindia.com/online-center/download-factsheets',
      desc: 'Direct links to download monthly factsheets and portfolio disclosures from all empanelled AMCs.',
    },
    {
      title: 'AMFI Code of Conduct for Intermediaries',
      url: 'https://www.amfiindia.com/uploads/AMFI_Master_Cicular_for_MF_Ds_3c7f5ee44f.pdf',
      desc: 'Regulatory standards of conduct, ethics, and investor communication governing mutual fund distributors.',
    },
    {
      title: 'AMFI Investor Awareness Programme',
      url: 'https://www.amfiindia.com/investor/awareness-program',
      desc: 'Official investor education initiatives and guides from the Association of Mutual Funds in India.',
    },
    {
      title: 'SEBI SCORES Grievance Redressal Portal',
      url: DISTRIBUTOR_INFO.scoresUrl,
      desc: 'SEBI Complaints Redress System for centralized online submission and tracking of investor grievances.',
    },
    {
      title: 'SMART ODR (Online Dispute Resolution)',
      url: DISTRIBUTOR_INFO.smartOdrUrl,
      desc: 'Securities Market Approach for Resolution Through ODR Portal for conciliation and online arbitration.',
    },
    {
      title: 'AMFI Daily Net Asset Value (NAV)',
      url: 'https://www.amfiindia.com/net-asset-value',
      desc: 'Official NAV tracking across all mutual fund schemes updated daily.',
    },
  ];

  return (
    <div className="space-y-6">
      <p>
        Verified links to statutory regulatory bodies, offer documents, risk parameters, and official dispute resolution portals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {links.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#F7F8F4] border border-[#DFE6DF] flex flex-col justify-between hover:border-[#00B7A5] transition-colors"
          >
            <div>
              <h3 className="font-serif text-lg text-[#103D3B] font-medium mb-1.5 flex items-center justify-between">
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-[#707B75] leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F7C] hover:text-[#103D3B] uppercase tracking-wider"
            >
              <span>Visit Official Resource</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
