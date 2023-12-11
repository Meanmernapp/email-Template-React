import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '@/src/emails/welcome';

const resend = new Resend('re_K85hpVj6_QC9ZEdNzykkjDSfPKncbgVpQ');

export async function POST(request: Request) {
  const { firstName, email } = await request.json();

  try {
    await resend.sendEmail({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Add uinininu",
      react: WelcomeEmail({
        firstName,email
      })
    });
    return NextResponse.json({
      status: 'Ok'
    }, {
      status: 200
    })
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }
  

}