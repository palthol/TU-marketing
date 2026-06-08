import type { LeadFormErrors, LeadPayload, TrainingGoal } from '@/types/lead';
import { formatPhoneForSubmit, isCompletePhone, phoneDigitsOnly } from '@/lib/phone';

const GOALS = new Set<TrainingGoal>([
  'first-class',
  'fitness-confidence',
  'competition',
  'weight-management',
  'youth-inquiry',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LeadFieldLabels = {
  firstNameRequired: string;
  lastNameRequired: string;
  emailInvalid: string;
  phoneInvalid: string;
  contactRequired: string;
  goalRequired: string;
  timeRequired: string;
  notesTooLong: string;
};

export function resolveLeadApiUrl(configured?: string): string | null {
  const trimmed = configured?.trim();
  if (trimmed) return trimmed.replace(/\/$/, '');
  if (import.meta.env.DEV) return 'http://localhost:3001/api/lead';
  return null;
}

export function validateLeadPayload(
  payload: LeadPayload,
  messages: LeadFieldLabels,
): LeadFormErrors {
  const errors: LeadFormErrors = {};
  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const email = payload.email?.trim() ?? '';
  const phoneDigits = phoneDigitsOnly(payload.phone ?? '');
  const preferredTime = payload.preferredTime.trim();
  const notes = payload.notes?.trim() ?? '';

  if (firstName.length < 2) errors.firstName = messages.firstNameRequired;
  if (lastName.length < 2) errors.lastName = messages.lastNameRequired;
  if (email && !EMAIL_RE.test(email)) errors.email = messages.emailInvalid;
  if (phoneDigits.length > 0 && !isCompletePhone(phoneDigits)) {
    errors.phone = messages.phoneInvalid;
  }
  if (!email && !phoneDigits) {
    errors.form = messages.contactRequired;
  }
  if (!GOALS.has(payload.goals)) errors.goals = messages.goalRequired;
  if (preferredTime.length < 2) errors.preferredTime = messages.timeRequired;
  if (notes.length > 500) errors.notes = messages.notesTooLong;

  return errors;
}

export async function submitLead(
  apiUrl: string,
  payload: LeadPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const body: LeadPayload = {
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    goals: payload.goals,
    preferredTime: payload.preferredTime.trim(),
    ...(payload.email?.trim() ? { email: payload.email.trim() } : {}),
    ...(phoneDigitsOnly(payload.phone ?? '').length
      ? { phone: formatPhoneForSubmit(payload.phone ?? '') }
      : {}),
    ...(payload.notes?.trim() ? { notes: payload.notes.trim() } : {}),
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let error = 'request_failed';
    try {
      const data = (await response.json()) as { error?: string };
      if (data.error) error = data.error;
    } catch {
      /* ignore */
    }
    return { ok: false, error };
  }

  return { ok: true };
}
