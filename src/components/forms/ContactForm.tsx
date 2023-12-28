'use client';
import { useState } from 'react';
import CTA from '@/components/CTA/CTA';
import AnimateInView from '../animationWrappers/AnimateInView';
import { toast } from 'react-toastify';
import { contactFormFields } from '@/Constants';

const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState({ ...initialState });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validEmailRegex =
    '[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+';

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const toasts = {
      success: () => toast.success('Message Sent Successfully!'),
      error: () => toast.error('An Error Occurred, try again later!'),
      warnAll: () => toast.warn('Please fill out all form inputs!'),
      warnEmail: () => toast.warn('Invalid Email Address!'),
    };

    if (!name || !email || !message) {
      toasts.warnAll();
      return;
    }

    if (!email.match(validEmailRegex)) {
      toasts.warnEmail();
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('response', response);

      if (response.status === 200) {
        setFormData({ ...initialState });
        toasts.success();
      } else {
        toasts.error();
      }
    } catch (error) {
      toasts.error();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className='w-4/5 lg:w-2/5 flex flex-col items-center'
    >
      {contactFormFields.map((field, idx) => (
        <AnimateInView
          delay={idx * 0.2}
          key={field.name}
          className='form-control w-full max-w-sm focus-within:text-accent transition-colors mt-2'
        >
          <label className='label justify-start gap-2'>
            {field.icon}
            <span className='label-text text-inherit'>{field.label}</span>
          </label>
          {field.type === 'textarea' ? (
            <textarea
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className='input input-bordered focus-visible:outline-accent transition-colors w-full max-w-sm h-40'
            />
          ) : (
            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className='input input-bordered focus-visible:outline-accent transition-colors w-full max-w-sm'
            />
          )}
        </AnimateInView>
      ))}

      <AnimateInView delay={1} className='mt-4'>
        <CTA
          text='Send Message'
          isBtn={true}
          type='submit'
          loading={isLoading}
        />
      </AnimateInView>
    </form>
  );
};

export default ContactForm;
