import { FormData } from '@/components/contact-form/contact-form';
import { toast } from 'react-hot-toast';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
