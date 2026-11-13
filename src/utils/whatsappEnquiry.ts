/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EnquiryFormData } from './enquiryValidation';
import { siteConfig } from '../config/site';

/**
 * Formats enquiry form data into a structured, readable message for WhatsApp.
 * Fields follow the required sequence:
 * 1. Name
 * 2. Phone Number (with country code)
 * 3. Event Type
 * 4. Event Name (if provided)
 * 5. District
 * 6. City
 * 7. Full Address
 * 8. Additional Notes (if provided)
 */
export function formatWhatsAppMessage(data: EnquiryFormData): string {
  const rawPhone = data.phoneNumber.trim();
  const rawCode = data.phoneCountryCode.trim();
  const fullPhone = rawPhone.startsWith('+') ? rawPhone : `${rawCode} ${rawPhone}`;

  const lines: string[] = [
    `*NEW EVENT ENQUIRY — AURELIA*`,
    ``,
    `*1. Name:* ${data.name.trim()}`,
    `*2. Phone Number:* ${fullPhone}`,
    `*3. Event Type:* ${data.eventType.trim()}`,
  ];

  if (data.eventName && data.eventName.trim()) {
    lines.push(`*4. Event Name:* ${data.eventName.trim()}`);
  }

  lines.push(`*5. District:* ${data.district.trim()}`);
  lines.push(`*6. City:* ${data.city.trim()}`);
  lines.push(`*7. Full Address:* ${data.fullAddress.trim()}`);

  if (data.additionalNotes && data.additionalNotes.trim()) {
    lines.push(`*8. Additional Notes:* ${data.additionalNotes.trim()}`);
  }

  return lines.join('\n');
}

/**
 * Constructs a fully encoded https://wa.me/ URL for WhatsApp submission.
 */
export function buildWhatsAppEnquiryUrl(
  data: EnquiryFormData,
  targetPhone: string = siteConfig.whatsappPhone || '919074604126'
): string {
  const message = formatWhatsAppMessage(data);
  const cleanPhone = targetPhone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
