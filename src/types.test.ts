import test from 'node:test';
import assert from 'node:assert/strict';
import { COMPLIANCE_PAGES, DISTRIBUTOR_INFO } from './types';

test('all 10 compliance routes and important links are configured', () => {
  const expectedRoutes = [
    'privacy-policy',
    'terms-and-conditions',
    'risk-disclaimer',
    'commission-disclosure',
    'grievance-redressal',
    'registration-disclosure',
    'investor-charter',
    'kyc-onboarding',
    'transaction-policy',
    'fund-recommendation-policy',
    'important-links',
  ];

  for (const route of expectedRoutes) {
    assert.ok(COMPLIANCE_PAGES[route], `Route ${route} should exist in COMPLIANCE_PAGES`);
    assert.ok(COMPLIANCE_PAGES[route].title.length > 0, `Route ${route} must have a title`);
    assert.ok(COMPLIANCE_PAGES[route].metaDescription.length > 10, `Route ${route} must have a description`);
  }
});

test('distributor credentials match AMFI source records', () => {
  assert.equal(DISTRIBUTOR_INFO.name, 'Avinash Bhandari');
  assert.equal(DISTRIBUTOR_INFO.arn, 'ARN-31739');
  assert.equal(DISTRIBUTOR_INFO.gstin, '08AHUPB5195Q1ZD');
  assert.equal(DISTRIBUTOR_INFO.email, 'avinash@sinvest.in');
  assert.ok(DISTRIBUTOR_INFO.scoresUrl.includes('scores.sebi.gov.in'));
  assert.ok(DISTRIBUTOR_INFO.smartOdrUrl.includes('smartodr.in'));
});
