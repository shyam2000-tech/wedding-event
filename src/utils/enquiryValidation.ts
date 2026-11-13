/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EventTypeOption =
  | 'Wedding'
  | 'Engagement'
  | 'Reception'
  | 'Destination Wedding'
  | 'Other';

export const EVENT_TYPE_OPTIONS: EventTypeOption[] = [
  'Wedding',
  'Engagement',
  'Reception',
  'Destination Wedding',
  'Other',
];

export interface EnquiryFormData {
  name: string;
  phoneCountryCode: string;
  phoneNumber: string;
  eventType: EventTypeOption | string;
  eventName: string;
  district: string;
  city: string;
  fullAddress: string;
  additionalNotes: string;
}

export interface EnquiryValidationErrors {
  name?: string;
  phoneNumber?: string;
  eventType?: string;
  district?: string;
  city?: string;
  fullAddress?: string;
}

/**
 * Validates enquiry form fields without backend or third-party dependencies.
 */
export function validateEnquiryForm(data: EnquiryFormData): {
  isValid: boolean;
  errors: EnquiryValidationErrors;
} {
  const errors: EnquiryValidationErrors = {};

  // 1. Name (required)
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (minimum 2 characters).';
  }

  // 2. Phone Number (required, with country code)
  const rawPhone = data.phoneNumber.trim();
  const rawCountryCode = data.phoneCountryCode.trim();
  const fullPhone = rawPhone.startsWith('+')
    ? rawPhone
    : `${rawCountryCode} ${rawPhone}`;
  const digitsOnly = fullPhone.replace(/\D/g, '');

  if (!rawPhone) {
    errors.phoneNumber = 'Phone number is required.';
  } else if (!fullPhone.startsWith('+')) {
    errors.phoneNumber = 'Please select or enter a valid country code (e.g. +91).';
  } else if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    errors.phoneNumber = 'Please enter a valid phone number (8 to 15 digits including country code).';
  }

  // 3. Event Type (required)
  if (!data.eventType || data.eventType.trim().length === 0) {
    errors.eventType = 'Please select an event type.';
  }

  // 4. Event Name is optional

  // 5. District (required)
  if (!data.district || data.district.trim().length < 2) {
    errors.district = 'District is required.';
  }

  // 6. City (required)
  if (!data.city || data.city.trim().length < 2) {
    errors.city = 'City is required.';
  }

  // 7. Full Address (required)
  if (!data.fullAddress || data.fullAddress.trim().length < 5) {
    errors.fullAddress = 'Please provide the full venue or location address (minimum 5 characters).';
  }

  // 8. Additional Notes is optional

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
