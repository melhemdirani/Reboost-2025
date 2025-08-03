import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "smtp",
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Check environment variables first
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials. Please set EMAIL_USER and EMAIL_PASS in .env.local');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at info@reboost.live' },
        { status: 500 }
      );
    }

    const body: ContactFormData = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const date = new Date();
    const dateString = date.toLocaleString();
    const serverTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Email to ReBoost team
    const adminEmailHTML = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-radius: 8px;
              border-left: 4px solid #000;
            }
            .field-label {
              font-weight: bold;
              color: #000;
              margin-bottom: 5px;
            }
            .field-value {
              color: #555;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #ddd;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Received on ${dateString} (${serverTimeZone})</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Full Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address:</div>
                <div class="field-value">${email}</div>
              </div>
              
              ${company ? `
                <div class="field">
                  <div class="field-label">Company:</div>
                  <div class="field-value">${company}</div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Project Details:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from the ReBoost contact form</p>
              <p>Please respond directly to: ${email}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Confirmation email to client
    const clientEmailHTML = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .highlight {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #000;
              margin: 20px 0;
            }
            .footer {
              background: #000;
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px;
              margin-top: 20px;
            }
            .contact-info {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
              margin-top: 20px;
            }
            .contact-item {
              text-align: center;
              margin: 10px;
            }
            .logo {
              max-width: 150px;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://reboost.live/reboost.png" alt="ReBoost Logo" class="logo">
              <h1>Thank You for Contacting ReBoost!</h1>
            </div>
            
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for reaching out to us! We've received your message and our team will review it shortly.</p>
              
              <div class="highlight">
                <h3>What happens next?</h3>
                <ul>
                  <li>Our team will review your project details within 24 hours</li>
                  <li>We'll reach out to schedule a discovery call</li>
                  <li>Together, we'll explore how to bring your vision to life</li>
                </ul>
              </div>
              
              <p>In the meantime, feel free to explore our <a href="https://reboost.live/portfolio" style="color: #000;">portfolio</a> to see some of our recent work.</p>
              
              <p>If you have any urgent questions, don't hesitate to reach out directly:</p>
            </div>
            
            <div class="footer">
              <h3>Contact Information</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <strong>Email</strong><br>
                  info@reboost.live
                </div>
                <div class="contact-item">
                  <strong>Phone</strong><br>
                  +961 78 852 926
                </div>
                <div class="contact-item">
                  <strong>WhatsApp</strong><br>
                  +961 71 523 153
                </div>
              </div>
              
              <p style="margin-top: 30px;">
                <strong>Built for Visionaries. Trusted by Doers.</strong>
              </p>
              
              <p style="font-size: 12px; margin-top: 20px; opacity: 0.8;">
                This is an automated confirmation email. Please do not reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to ReBoost team
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to your business email
        subject: `New Contact Form Submission from ${name}${company ? ` (${company})` : ''}`,
        html: adminEmailHTML,
        replyTo: email, // Allow direct reply to the client
      });
      console.log('Admin email sent successfully');
    } catch (emailError) {
      console.error('Failed to send admin email:', emailError);
      throw emailError;
    }

    // Send confirmation email to client
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting ReBoost - We\'ll be in touch soon!',
        html: clientEmailHTML,
      });
      console.log('Confirmation email sent successfully');
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't throw here - admin email is more important
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later or contact us directly at info@reboost.live';
    
    if (error && typeof error === 'object' && 'code' in error) {
      switch (error.code) {
        case 'EAUTH':
          errorMessage = 'Email authentication failed. Please contact us directly at info@reboost.live';
          break;
        case 'ECONNECTION':
          errorMessage = 'Email service connection failed. Please try again later or contact us directly.';
          break;
        case 'ETIMEDOUT':
          errorMessage = 'Email service timeout. Please try again later.';
          break;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// Add a GET endpoint to test email configuration (SECURE VERSION)
export async function GET() {
  // Only allow this in development environment
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({
      status: 'error',
      message: 'Configuration endpoint disabled in production'
    }, { status: 403 });
  }

  try {
    // Check if environment variables are set (without exposing values)
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      return NextResponse.json({
        status: 'error',
        message: 'Email credentials not configured',
        details: {
          EMAIL_USER: emailUser ? 'Set' : 'Missing',
          EMAIL_PASS: emailPass ? 'Set' : 'Missing'
        }
      });
    }

    // Test transporter connection without exposing credentials
    try {
      await transporter.verify();
      return NextResponse.json({
        status: 'success',
        message: 'Email service is configured and ready',
        config: {
          host: 'smtp.titan.email',
          port: 465,
          secure: true,
          userDomain: emailUser.split('@')[1] // Only show domain part
        }
      });
    } catch (verifyError) {
      console.error('Email verification failed:', verifyError);
      return NextResponse.json({
        status: 'error',
        message: 'Email service configuration test failed',
        // Don't expose detailed error messages in production
        error: process.env.NODE_ENV === 'development' 
          ? (verifyError instanceof Error ? verifyError.message : 'Unknown error')
          : 'Authentication failed'
      });
    }
  } catch (error) {
    console.error('Configuration test error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to test email configuration',
      // Don't expose detailed error messages in production
      error: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Unknown error')
        : 'Configuration error'
    });
  }
}
