import { EmailFormData } from '@/types/contact';

export async function sendContactEmail(email: EmailFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || '서버 요청에 실패함 🥹');
  }

  return data;
}
