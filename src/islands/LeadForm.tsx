import { useState, type FormEvent, type ReactNode } from 'react';
import { submitLead, validateLeadPayload, type LeadFieldLabels } from '@/lib/lead';
import { formatPhoneDisplay, phoneDigitsOnly } from '@/lib/phone';
import { trackEvent } from '@/lib/analytics';
import type { LeadPayload, TrainingGoal } from '@/types/lead';

export type LeadFormCopy = {
  title: string;
  description: string;
  offerBadge: string;
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    contactNote: string;
    goal: string;
    preferredTime: string;
    preferredTimePlaceholder: string;
    notes: string;
  };
  goals: Record<TrainingGoal, string>;
  submit: string;
  submitting: string;
  success: string;
  errorGeneric: string;
  errorApi: string;
  errorUnavailable: string;
  validation: LeadFieldLabels;
};

type LeadFormProps = {
  copy: LeadFormCopy;
  apiUrl: string | null;
  phoneDisplay: string;
  phoneTel: string;
};

const initialState: LeadPayload = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  goals: 'first-class',
  preferredTime: '',
  notes: '',
};

export default function LeadForm({ copy, apiUrl, phoneDisplay, phoneTel }: LeadFormProps) {
  const [data, setData] = useState<LeadPayload>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload | 'form', string>>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined, form: undefined }));
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');
    setStatusMessage('');

    const fieldErrors = validateLeadPayload(data, copy.validation);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    if (!apiUrl) {
      setStatus('error');
      setStatusMessage(copy.errorUnavailable.replace('{phone}', phoneDisplay));
      return;
    }

    setErrors({});
    setSubmitting(true);
    trackEvent('lead_submit');

    const result = await submitLead(apiUrl, data);
    setSubmitting(false);

    if (!result.ok) {
      setStatus('error');
      setStatusMessage(copy.errorApi);
      return;
    }

    setStatus('success');
    setStatusMessage(copy.success);
    setData(initialState);
  };

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      <div className="lead-form__row">
        <Field label={copy.fields.firstName} error={errors.firstName}>
          <input
            className="lead-form__input focus-ring"
            value={data.firstName}
            onChange={(event) => update('firstName', event.target.value)}
            autoComplete="given-name"
            required
          />
        </Field>
        <Field label={copy.fields.lastName} error={errors.lastName}>
          <input
            className="lead-form__input focus-ring"
            value={data.lastName}
            onChange={(event) => update('lastName', event.target.value)}
            autoComplete="family-name"
            required
          />
        </Field>
      </div>

      <div className="lead-form__row lead-form__row--contact">
        <Field label={copy.fields.email} error={errors.email}>
          <input
            type="email"
            className="lead-form__input focus-ring"
            value={data.email ?? ''}
            onChange={(event) => update('email', event.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field label={copy.fields.phone} error={errors.phone}>
          <input
            type="tel"
            className="lead-form__input focus-ring lead-form__input--phone"
            value={formatPhoneDisplay(data.phone ?? '')}
            onChange={(event) => update('phone', phoneDigitsOnly(event.target.value))}
            autoComplete="tel-national"
            inputMode="numeric"
            placeholder="(000) 000-0000"
          />
        </Field>
        <p
          className={
            errors.form ? 'lead-form__contact-note lead-form__contact-note--error' : 'lead-form__contact-note'
          }
        >
          {errors.form ?? copy.fields.contactNote}
        </p>
      </div>

      <div className="lead-form__row">
        <Field label={copy.fields.goal} error={errors.goals}>
          <select
            className="lead-form__input focus-ring"
            value={data.goals}
            onChange={(event) => update('goals', event.target.value as TrainingGoal)}
          >
            {(Object.entries(copy.goals) as [TrainingGoal, string][]).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={copy.fields.preferredTime} error={errors.preferredTime}>
          <input
            className="lead-form__input focus-ring"
            value={data.preferredTime}
            onChange={(event) => update('preferredTime', event.target.value)}
            placeholder={copy.fields.preferredTimePlaceholder}
          />
        </Field>
      </div>

      <Field label={copy.fields.notes} error={errors.notes}>
        <textarea
          className="lead-form__input lead-form__textarea focus-ring"
          rows={4}
          value={data.notes ?? ''}
          onChange={(event) => update('notes', event.target.value)}
        />
      </Field>

      <button type="submit" disabled={submitting} className="cta-btn cta-btn--primary focus-ring cta-btn--block hero-cta-primary">
        <span className="hero-cta-primary__offer">
          <span className="hero-cta-primary__dot" aria-hidden="true" />
          {copy.offerBadge}
        </span>
        <span className="hero-cta-primary__action">{submitting ? copy.submitting : copy.submit}</span>
      </button>

      {statusMessage ? (
        <p className={`lead-form__status lead-form__status--${status}`} role="status">
          {statusMessage}
          {status === 'error' && !apiUrl ? (
            <>
              {' '}
              <a href={`tel:${phoneTel}`} className="lead-form__status-link">
                {phoneDisplay}
              </a>
            </>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  children: ReactNode;
  error?: string;
  hint?: string;
};

function Field({ label, children, error, hint }: FieldProps) {
  return (
    <label className="lead-form__field">
      <span className="lead-form__label">{label}</span>
      {children}
      {hint && !error ? <span className="lead-form__hint">{hint}</span> : null}
      {error ? <span className="lead-form__error">{error}</span> : null}
    </label>
  );
}
