/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiryForm, EnquiryFormData } from './enquiryValidation';

const validData: EnquiryFormData = {
  name: 'Ananya Sharma',
  phoneCountryCode: '+91',
  phoneNumber: '9876543210',
  eventType: 'Wedding',
  eventName: "Ananya & Rohan's Celebration",
  district: 'Ernakulam',
  city: 'Kochi',
  fullAddress: 'Bolgatty Palace Resort, Mulavukad, Kochi',
  additionalNotes: 'Need full-service planning for 350 guests.',
};

test('validateEnquiryForm accepts valid enquiry submission', () => {
  const result = validateEnquiryForm(validData);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateEnquiryForm flags missing mandatory fields', () => {
  const emptyData: EnquiryFormData = {
    name: '',
    phoneCountryCode: '+91',
    phoneNumber: '',
    eventType: '',
    eventName: '',
    district: '',
    city: '',
    fullAddress: '',
    additionalNotes: '',
  };
  const result = validateEnquiryForm(emptyData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.eventType);
  assert.ok(result.errors.district);
  assert.ok(result.errors.city);
  assert.ok(result.errors.fullAddress);
});

test('validateEnquiryForm validates phone number format and length', () => {
  const invalidPhoneData: EnquiryFormData = {
    ...validData,
    phoneNumber: '123', // too short
  };
  const result = validateEnquiryForm(invalidPhoneData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.phoneNumber);
});
