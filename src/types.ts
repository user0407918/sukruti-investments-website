export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ComplianceRouteInfo {
  slug: string;
  title: string;
  metaDescription: string;
  category: 'Disclosures & Policies' | 'Investor Desk';
}

export const COMPLIANCE_PAGES: Record<string, ComplianceRouteInfo> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    metaDescription: 'How Avinash Bhandari (ARN-31739), Data Fiduciary, collects, uses, stores and protects personal data under DPDP Act 2023.',
    category: 'Disclosures & Policies',
  },
  'terms-and-conditions': {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    metaDescription: 'Terms of website use for Sukriti Investments, Avinash Bhandari (ARN-31739), AMFI Registered Mutual Fund & SIF Distributor.',
    category: 'Disclosures & Policies',
  },
  'risk-disclaimer': {
    slug: 'risk-disclaimer',
    title: 'Risk Disclaimer',
    metaDescription: 'Regulatory risk disclaimers for Mutual Funds and Specialised Investment Funds (SIF). Not a SEBI-registered Investment Adviser.',
    category: 'Disclosures & Policies',
  },
  'commission-disclosure': {
    slug: 'commission-disclosure',
    title: 'Commission Disclosure',
    metaDescription: 'Information regarding trail commission on Regular Plans as part of scheme Base Expense Ratio (BER).',
    category: 'Disclosures & Policies',
  },
  'grievance-redressal': {
    slug: 'grievance-redressal',
    title: 'Grievance Redressal Policy',
    metaDescription: 'Grievance escalation mechanism, timelines (3-day acknowledgement, 15-day resolution), GRO contact, SEBI SCORES and SMART ODR.',
    category: 'Disclosures & Policies',
  },
  'registration-disclosure': {
    slug: 'registration-disclosure',
    title: 'Registration Disclosure',
    metaDescription: 'Complete AMFI registration details for Avinash Bhandari (ARN-31739), validity, GSTIN, and empanelled AMCs list.',
    category: 'Disclosures & Policies',
  },
  'investor-charter': {
    slug: 'investor-charter',
    title: 'Investor Charter',
    metaDescription: 'Investor Charter for Mutual Fund investors: rights, responsibilities, code of conduct, and grievance escalation.',
    category: 'Investor Desk',
  },
  'kyc-onboarding': {
    slug: 'kyc-onboarding',
    title: 'KYC & Onboarding Policy',
    metaDescription: 'KYC requirements, document verification, in-person verification (IPV), risk profiling and onboarding procedures.',
    category: 'Investor Desk',
  },
  'transaction-policy': {
    slug: 'transaction-policy',
    title: 'Transaction Policy',
    metaDescription: 'Procedures for online and physical mutual fund transactions, BSE Star MF, NSE MF Invest, cut-off timings and authorizations.',
    category: 'Investor Desk',
  },
  'fund-recommendation-policy': {
    slug: 'fund-recommendation-policy',
    title: 'Fund Recommendation Policy',
    metaDescription: 'Methodology for scheme selection based on suitability matrix, risk profiling, performance track record, and annual reviews.',
    category: 'Investor Desk',
  },
  'important-links': {
    slug: 'important-links',
    title: 'Important Links',
    metaDescription: 'Official links to SEBI, AMFI, SID/SAI/KIM documents, risk stress tests, factsheets, SCORES, and SMART ODR.',
    category: 'Investor Desk',
  },
};

export const DISTRIBUTOR_INFO = {
  name: 'Avinash Bhandari',
  brandName: 'Sukriti Investments',
  tagline: 'Invest with understanding',
  arn: 'ARN-31739',
  registrationStatus: 'AMFI Registered Mutual Fund Distributor & SIF Distributor',
  mfValidity: '24-Jul-2025 to 23-Jul-2028 (registered since 16-Jul-2005)',
  sifValidity: '25-Jun-2025 to 11-Jun-2028',
  constitution: 'Individual',
  address: 'Utkarsh Complex, SBI Premises, Near Ashapurna Mall, Shastri Nagar, Jodhpur, Rajasthan – 342003',
  phone: '+91 98285 35035',
  phoneRaw: '+919828535035',
  email: 'avinash@sinvest.in',
  gstin: '08AHUPB5195Q1ZD',
  gro: 'Avinash Bhandari',
  scoresUrl: 'https://scores.sebi.gov.in/',
  smartOdrUrl: 'https://smartodr.in/',
  amfiUrl: 'https://www.amfiindia.com',
  sebiOfferDocsUrl: 'https://www.sebi.gov.in/filings/mutual-funds.html',
};
