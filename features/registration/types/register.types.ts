export interface RegistrationFormData {
  fullName: string;
  email: string;
  department: string;
  college: string;
  eventsInterested: string[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  description: string[];
  accent: 'purple' | 'cyan';
}
