'use client';
import { useState } from 'react';
import CTA from '@/components/CTA/CTA';
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
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validEmailRegex =
    '[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+';

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setResult(null);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setResult('Please fill out all form inputs');
      return;
    }

    if (!email.match(validEmailRegex)) {
      setResult('Invalid Email!');
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
        setResult('Message Sent Successfully!');
      } else {
        setResult('Error Sending Message');
      }
    } catch (error) {
      setResult('An Error Occurred, try again later!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className='flex flex-col items-center w-4/5 lg:w-2/5'
    >
      {contactFormFields.map((field) => (
        <div
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
        </div>
      ))}

      {isLoading && <p>Sending...</p>}
      {result && <p className='p-4'>{result}</p>}

      <div className='mt-4'>
        <CTA text='Send Message' isBtn={true} type='submit' />
      </div>
    </form>
  );
};

export default ContactForm;
