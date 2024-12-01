import { Metadata } from 'next';
import TermsAndConditions from '@/components/terms-and-conditions/terms-and-conditions';

export const metadata: Metadata = {
  title: 'Mel P Rentals | Terms and Conditions',
  description:
    'By using Mel P Rentals services, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our website and services, including booking and staying at our properties. Please read them carefully to understand your rights and obligations.',
};

export default function Terms() {
  return (
    <div className="min-h-screen">
      <TermsAndConditions />
    </div>
  );
}
