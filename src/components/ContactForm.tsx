'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { EmailFormData } from '@/types/contact';
import { sendContactEmail } from '@/service/contact';

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<EmailFormData>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: '메일을 성공적으로 보냈습니다.',
          state: 'success',
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: '메일 전송에 실패했습니다. 다시 시도해 주세요.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        className='w-full flex flex-col gap-2  my-4 p-4 bg-slate-600 rounded-xl text-white'
        onSubmit={onSubmit}
      >
        <label className='font-semibold' htmlFor='from'>
          Your Email
        </label>
        <input
          className='text-black px-1 py-0.5 rounded-sm'
          type='email'
          id='from'
          name='from'
          value={form.from}
          onChange={onChange}
          required
          autoFocus
        />
        <label className='font-semibold' htmlFor='subject'>
          Subject
        </label>
        <input
          className='text-black px-1 py-0.5 rounded-sm'
          type='text'
          id='subject'
          name='subject'
          value={form.subject}
          onChange={onChange}
          required
        />
        <label className='font-semibold' htmlFor='message'>
          Message
        </label>
        <textarea
          className='text-black px-1 py-0.5 rounded-sm'
          rows={10}
          id='message'
          name='message'
          value={form.message}
          onChange={onChange}
          required
        />
        <button className='bg-amber-300 text-gray-800 font-bold hover:bg-amber-400 py-1 rounded-sm'>
          submit
        </button>
      </form>
    </section>
  );
}
