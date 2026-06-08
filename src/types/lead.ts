export type TrainingGoal =
  | 'first-class'
  | 'fitness-confidence'
  | 'competition'
  | 'weight-management'
  | 'youth-inquiry';

export type LeadPayload = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  goals: TrainingGoal;
  preferredTime: string;
  notes?: string;
};

export type LeadFormErrors = Partial<Record<keyof LeadPayload | 'form', string>>;
