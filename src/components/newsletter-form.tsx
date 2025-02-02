'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribeUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('You have successfully subscribed!');
        setIsError(false);
        setEmail(''); // Clear input after successful submission
      } else {
        setMessage(data.error || 'Subscription failed.');
        setIsError(true);
      }
    } catch {
      setMessage('An error occurred. Please try again later.');
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9A1840] focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#9A1840] hover:opacity-80 transition-opacity"
          aria-label="Subscribe to newsletter"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-sm ${
            isError ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
