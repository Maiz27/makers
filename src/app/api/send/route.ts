import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/forms/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { subject } = body;
    const data = await resend.emails.send({
      from: 'Website <website@makersengineeringltd.com>',
      to: ['info@makersengineeringltd.com'],
      subject: subject,
      react: EmailTemplate({ ...body }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
