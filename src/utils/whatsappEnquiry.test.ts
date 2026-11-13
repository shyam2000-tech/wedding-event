/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatWhatsAppMessage, buildWhatsAppEnquiryUrl } from './whatsappEnquiry';
import { EnquiryFormData } from './enquiryValidation';

const sampleEnquiry: EnquiryFormData = {
  name: 'Ananya Sharma',
  phoneCountryCode: '+91',
  phoneNumber: '9074604126',
  eventType: 'Wedding',
  eventName: 'Ananya & Kabir Wedding',
  district: 'Ernakulam',
  city: 'Kochi',
  fullAddress: 'Grand Hyatt Bolgatty, Kochi, Kerala',
  additionalNotes: 'Need sunset floral mandap decor and reception lighting.',
};

test('formatWhatsAppMessage formats fields in required order', () => {
  const message = formatWhatsAppMessage(sampleEnquiry);

  assert.ok(message.includes('*1. Name:* Ananya Sharma'));
  assert.ok(message.includes('*2. Phone Number:* +91 9074604126'));
  assert.ok(message.includes('*3. Event Type:* Wedding'));
  assert.ok(message.includes('*4. Event Name:* Ananya & Kabir Wedding'));
  assert.ok(message.includes('*5. District:* Ernakulam'));
  assert.ok(message.includes('*6. City:* Kochi'));
  assert.ok(message.includes('*7. Full Address:* Grand Hyatt Bolgatty, Kochi, Kerala'));
  assert.ok(message.includes('*8. Additional Notes:* Need sunset floral mandap decor and reception lighting.'));
});

test('buildWhatsAppEnquiryUrl encodes target phone and parameters correctly', () => {
  const url = buildWhatsAppEnquiryUrl(sampleEnquiry, '919074604126');

  assert.ok(url.startsWith('https://wa.me/919074604126?text='));
  assert.ok(url.includes(encodeURIComponent('Ananya Sharma')));
  assert.ok(url.includes(encodeURIComponent('Ernakulam')));
});
