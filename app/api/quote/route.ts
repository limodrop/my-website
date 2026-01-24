import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface QuoteRequest {
  name: string;
  email: string;
  phone?: string;
  pickupCity: string;
  dropoffCity: string;
  date: string;
  time: string;
  notes?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: QuoteRequest = await request.json();
    
    console.log('[Quote API] Quote request received:', {
      name: body.name,
      email: body.email,
      pickup: body.pickupCity,
      dropoff: body.dropoffCity,
      date: body.date,
      time: body.time
    });

    // Validate required fields
    if (!body.name || body.name.trim().length < 2) {
      console.error('[Quote API] Validation failed: Invalid name');
      return NextResponse.json(
        { success: false, error: 'Name is required (minimum 2 characters)' },
        { status: 400 }
      );
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      console.error('[Quote API] Validation failed: Invalid email');
      return NextResponse.json(
        { success: false, error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!body.pickupCity || body.pickupCity.trim().length < 2) {
      console.error('[Quote API] Validation failed: Invalid pickup location');
      return NextResponse.json(
        { success: false, error: 'Pickup location is required' },
        { status: 400 }
      );
    }

    if (!body.dropoffCity || body.dropoffCity.trim().length < 2) {
      console.error('[Quote API] Validation failed: Invalid dropoff location');
      return NextResponse.json(
        { success: false, error: 'Dropoff location is required' },
        { status: 400 }
      );
    }

    if (!body.date) {
      console.error('[Quote API] Validation failed: Invalid date');
      return NextResponse.json(
        { success: false, error: 'Date is required' },
        { status: 400 }
      );
    }

    if (!body.time) {
      console.error('[Quote API] Validation failed: Invalid time');
      return NextResponse.json(
        { success: false, error: 'Time is required' },
        { status: 400 }
      );
    }

    // Check for SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('[Quote API] SMTP configuration missing (SMTP_HOST, SMTP_USER, or SMTP_PASS)');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = 'hello@oregontowncar.com';

    // Send email to admin (hello@oregontowncar.com)
    try {
      await transporter.sendMail({
        from: `"Oregon Town Car" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        replyTo: body.email,
        subject: `New Quote Request from ${body.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
              New Quote Request
            </h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #333;">Customer Information</h3>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
              ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
            </div>
            
            <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #333;">Trip Details</h3>
              <p><strong>Pickup:</strong> ${body.pickupCity}</p>
              <p><strong>Dropoff:</strong> ${body.dropoffCity}</p>
              <p><strong>Date:</strong> ${body.date}</p>
              <p><strong>Time:</strong> ${body.time}</p>
              ${body.notes ? `<p><strong>Notes:</strong><br/>${body.notes.replace(/\n/g, '<br/>')}</p>` : ''}
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              This quote request was submitted via oregontowncar.com
            </p>
          </div>
        `,
      });

      console.log('[Quote API] Admin email sent successfully to', adminEmail);
    } catch (emailError) {
      console.error('[Quote API] Failed to send admin email:', emailError);
      return NextResponse.json(
        { success: false, error: 'Failed to send quote request' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    try {
      await transporter.sendMail({
        from: `"Oregon Town Car" <${process.env.SMTP_USER}>`,
        to: body.email,
        replyTo: adminEmail,
        subject: 'Quote Request Received - Oregon Town Car',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
              Thank You for Your Quote Request
            </h2>
            
            <p>Dear ${body.name},</p>
            
            <p>We've received your quote request and our team will get back to you shortly with pricing and availability.</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #333;">Your Trip Details</h3>
              <p><strong>Pickup:</strong> ${body.pickupCity}</p>
              <p><strong>Dropoff:</strong> ${body.dropoffCity}</p>
              <p><strong>Date:</strong> ${body.date}</p>
              <p><strong>Time:</strong> ${body.time}</p>
              ${body.notes ? `<p><strong>Notes:</strong><br/>${body.notes.replace(/\n/g, '<br/>')}</p>` : ''}
            </div>
            
            <div style="background-color: #e6f2ff; padding: 15px; margin: 20px 0; border-left: 4px solid #0066cc;">
              <p style="margin: 0;"><strong>What's Next?</strong></p>
              <ul style="margin: 10px 0;">
                <li>Our team will review your request</li>
                <li>You'll receive a personalized quote within 24 hours</li>
                <li>Questions? Call us at (503) 353-7755</li>
              </ul>
            </div>
            
            <p>Thank you for choosing Oregon Town Car!</p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            
            <div style="color: #666; font-size: 12px;">
              <p><strong>Oregon Town Car</strong><br/>
              4260 SW 110th Ave, Beaverton, OR 97005<br/>
              Phone: (503) 353-7755<br/>
              Email: <a href="mailto:hello@oregontowncar.com">hello@oregontowncar.com</a></p>
            </div>
          </div>
        `,
      });

      console.log('[Quote API] Customer confirmation email sent successfully to', body.email);
    } catch (emailError) {
      // Log but don't fail the request if customer email fails
      console.error('[Quote API] Failed to send customer confirmation email:', emailError);
    }

    return NextResponse.json({ 
      success: true,
      message: 'Quote request received. We will contact you shortly.'
    });

  } catch (error) {
    console.error('[Quote API] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
