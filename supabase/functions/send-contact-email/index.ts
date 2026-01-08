import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

async function sendEmail(payload: {
  from: string;
  to: string[];
  subject: string;
  html: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${response.status} - ${errorText}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", name, email);

    // Send notification to Midhun
    const notificationEmail = await sendEmail({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["midhunbalajisr@gmail.com"],
      subject: `New Hire Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #00CED1, #9333EA); padding: 30px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .value { color: #333; font-size: 16px; line-height: 1.6; }
            .message-box { background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #00CED1; }
            .footer { background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Hire Inquiry!</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
            <div class="footer">
              Received via Portfolio Contact Form
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation to the user
    const confirmationEmail = await sendEmail({
      from: "Midhun Balaji <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #00CED1, #9333EA); padding: 40px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 28px; }
            .content { padding: 30px; }
            .greeting { font-size: 20px; color: #333; margin-bottom: 20px; }
            .message { color: #555; line-height: 1.8; font-size: 16px; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
            .name { font-weight: 600; color: #00CED1; font-size: 18px; }
            .title { color: #888; font-size: 14px; }
            .footer { background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888; }
            .emoji { font-size: 40px; display: block; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="emoji">👋</span>
              <h1>Thanks for Reaching Out!</h1>
            </div>
            <div class="content">
              <p class="greeting">Hey ${name}!</p>
              <p class="message">
                I've received your message and I'm excited to connect with you! 🚀
                <br><br>
                I'll review your inquiry and get back to you as soon as possible, typically within 24-48 hours.
                <br><br>
                In the meantime, feel free to check out my portfolio and projects. Looking forward to potentially working together!
              </p>
              <div class="signature">
                <p class="name">Midhun Balaji</p>
                <p class="title">Full Stack Developer | Man of Dev</p>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} Midhun Balaji. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
