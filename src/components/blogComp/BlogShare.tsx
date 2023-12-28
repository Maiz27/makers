'use client';
import { useIsClient } from '@/context/IsClientContext';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import CTA from '../CTA/CTA';

const BlogShare = () => {
  const isClient = useIsClient();
  const currentURL = isClient ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        console.log('URL copied to clipboard:', currentURL);
        // Optionally, you can show a success message to the user
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        // Handle the error, e.g., show an error message to the user
      });
  };
  return (
    <>
      <h3 className='text-3xl mb-2'>Share Blog</h3>

      <label className='form-control flex-row w-full px-8'>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
          disabled={true}
          value={currentURL}
        />
        <CTA text='Copy' isBtn={true} onClick={copyToClipboard} />
      </label>
      <div className='grid place-items-center grid-cols-6 gap-2'>
        {socials.map(({ id, icon, ShareButton }) => {
          return (
            <div
              key={id}
              className='grid place-items-center p-2 border-2  rounded-full group hover:border-primary transition-colors'
            >
              <ShareButton url={currentURL} className='tooltip' data-tip={id}>
                {icon}
              </ShareButton>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogShare;

const socials = [
  {
    id: 'email',
    icon: (
      <FaEnvelope className='text-xl xl:text-2xl group-hover:text-primary' />
    ),
    ShareButton: EmailShareButton,
  },
  {
    id: 'facebook',
    icon: (
      <FaFacebookF className='text-xl xl:text-2xl group-hover:text-[#0b83ed]' />
    ),
    ShareButton: FacebookShareButton,
  },
  {
    id: 'linkedin',
    icon: (
      <FaLinkedin className='text-xl xl:text-2xl group-hover:text-[#0077b5]' />
    ),
    ShareButton: LinkedinShareButton,
  },
  {
    id: 'telegram',
    icon: (
      <FaTelegram className='text-xl xl:text-2xl group-hover:text-[#25a3e1]' />
    ),
    ShareButton: TelegramShareButton,
  },
  {
    id: 'twitter',
    icon: (
      <RiTwitterXFill className='text-xl xl:text-2xl group-hover:text-[#1da1f2]' />
    ),
    ShareButton: TwitterShareButton,
  },
  {
    id: 'whatsapp',
    icon: (
      <FaWhatsapp className='text-xl xl:text-2xl group-hover:text-[#50ca5e]' />
    ),
    ShareButton: WhatsappShareButton,
  },
];
