import { Metadata } from 'next';
import PrivacyPolicy from '@/components/privacy-notice/privacy-notice';

export const metadata: Metadata = {
  title: 'Mel P Rentals | Privacy Policy and Notice',
  description:
    'This Privacy Policy and Notice explains how Mel P Rentals collects, uses, and protects your personal information when you use our website and services. Please read this policy carefully to understand our practices regarding your personal data and how we will treat it.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <PrivacyPolicy />
    </div>
  );
}
