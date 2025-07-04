import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from 'npm:resend@2.0.0'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData: ContactFormData = await req.json()

    console.log('Received contact form data:', formData)

    // Email de confirmation au client
    const clientEmailResponse = await resend.emails.send({
      from: 'Pixelify <noreply@pixelify.ch>',
      to: [formData.email],
      subject: 'Merci pour votre message - Pixelify', 
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmation - Pixelify</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header avec logo -->
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #e6521c 100%); padding: 30px 40px; text-align: center;">
              <img src="https://tkyilebhirvpuzsrtjuf.supabase.co/storage/v1/object/public/pixelify/main_images/logo-big-transparent.png" alt="Pixelify Logo" style="max-width: 120px; height: auto; margin-bottom: 15px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                Merci ${formData.name} !
              </h1>
            </div>
            
            <!-- Contenu principal -->
            <div style="padding: 40px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #ff6b35, #e6521c); margin: 0 auto; border-radius: 2px;"></div>
              </div>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #ff6b35; margin: 25px 0;">
                <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; font-weight: bold;">
                  📋 Récapitulatif de votre demande
                </h3>
                <div style="color: #6b7280; font-size: 14px; line-height: 1.8;">
                  <p style="margin: 8px 0;"><strong style="color: #374151;">Nom :</strong> ${formData.name}</p>
                  <p style="margin: 8px 0;"><strong style="color: #374151;">Email :</strong> ${formData.email}</p>
                  ${formData.company ? `<p style="margin: 8px 0;"><strong style="color: #374151;">Entreprise :</strong> ${formData.company}</p>` : ''}
                  ${formData.phone ? `<p style="margin: 8px 0;"><strong style="color: #374151;">Téléphone :</strong> ${formData.phone}</p>` : ''}
                  ${formData.service ? `<p style="margin: 8px 0;"><strong style="color: #374151;">Service :</strong> ${formData.service}</p>` : ''}
                  <div style="margin-top: 15px;">
                    <strong style="color: #374151;">Message :</strong>
                    <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; margin-top: 8px; border: 1px solid #e2e8f0; font-style: italic;">
                      ${formData.message}
                    </div>
                  </div>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #374151; font-size: 16px; margin-bottom: 10px;">
                  À bientôt,<br>
                  <strong style="color: #ff6b35;">L'équipe Pixelify</strong>
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #374151; padding: 25px 40px; text-align: center;">
              <div style="color: #9ca3af; font-size: 14px; line-height: 1.6;">
                <p style="margin: 0 0 8px 0; font-weight: bold; color: #ffffff;">Pixelify</p>
                <p style="margin: 0;">Agence digitale innovante</p>
                <p style="margin: 8px 0 0 0;">
                  📧 <a href="mailto:info@pixelify.ch" style="color: #ff6b35; text-decoration: none;">info@pixelify.ch</a>
                </p>
              </div>
            </div>
          </div>
          
          <!-- Espacement final -->
          <div style="height: 40px;"></div>
        </body>
        </html>
      `,
    })

    console.log('Client email sent:', clientEmailResponse)

    // Email de notification pour Pixelify
    const notificationEmailResponse = await resend.emails.send({
      from: 'Pixelify Contact <noreply@pixelify.ch>',
      to: ['info@pixelify.ch'],
      subject: `Nouveau message de contact - ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau contact - Pixelify</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header avec logo -->
            <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 30px 40px; text-align: center;">
              <img src="https://tkyilebhirvpuzsrtjuf.supabase.co/storage/v1/object/public/pixelify/main_images/logo-big-transparent.png" alt="Pixelify Logo" style="max-width: 120px; height: auto; margin-bottom: 15px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🚀 Nouveau message de contact
              </h1>
              <div style="width: 60px; height: 4px; background: #ff6b35; margin: 15px auto 0; border-radius: 2px;"></div>
            </div>
            
            <!-- Contenu principal -->
            <div style="padding: 40px;">
              <!-- Alerte importante -->
              <div style="background: linear-gradient(135deg, #ff6b35 0%, #e6521c 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
                <h2 style="margin: 0; font-size: 18px; font-weight: bold;">
                  📨 Message de : ${formData.name}
                </h2>
              </div>
              
              <!-- Informations du contact -->
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #ff6b35; margin: 25px 0;">
                <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px; font-weight: bold;">
                  👤 Informations du contact
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <strong style="color: #374151;">Nom complet :</strong>
                    <span style="color: #6b7280; margin-left: 10px; font-size: 16px;">${formData.name}</span>
                  </div>
                  <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <strong style="color: #374151;">Email :</strong>
                    <a href="mailto:${formData.email}" style="color: #ff6b35; margin-left: 10px; text-decoration: none;">${formData.email}</a>
                  </div>
                  ${formData.company ? `
                  <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <strong style="color: #374151;">Entreprise :</strong>
                    <span style="color: #6b7280; margin-left: 10px;">${formData.company}</span>
                  </div>` : ''}
                  ${formData.phone ? `
                  <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <strong style="color: #374151;">Téléphone :</strong>
                    <a href="tel:${formData.phone}" style="color: #ff6b35; margin-left: 10px; text-decoration: none;">${formData.phone}</a>
                  </div>` : ''}
                  ${formData.service ? `
                  <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <strong style="color: #374151;">Service demandé :</strong>
                    <span style="color: #6b7280; margin-left: 10px;">${formData.service}</span>
                  </div>` : ''}
                </div>
              </div>
              
              <!-- Message -->
              <div style="background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); padding: 25px; border-radius: 12px; border: 2px solid #ff6b35; margin: 25px 0;">
                <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; font-weight: bold;">
                  💬 Message
                </h3>
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35; line-height: 1.6; color: #374151; font-size: 15px;">
                  ${formData.message}
                </div>
              </div>
              
              <!-- Call to action -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${formData.email}" style="display: inline-block; background: linear-gradient(135deg, #ff6b35 0%, #e6521c 100%); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(255, 107, 53, 0.3);">
                  📧 Répondre maintenant
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #374151; padding: 25px 40px; text-align: center;">
              <div style="color: #9ca3af; font-size: 14px; line-height: 1.6;">
                <p style="margin: 0 0 8px 0; color: #ffffff;">Message reçu le ${new Date().toLocaleString('fr-FR')}</p>
                <p style="margin: 0;">Système de contact automatique - Pixelify</p>
              </div>
            </div>
          </div>
          
          <!-- Espacement final -->
          <div style="height: 40px;"></div>
        </body>
        </html>
      `,
    })

    console.log('Notification email sent:', notificationEmailResponse)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Emails envoyés avec succès' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error sending emails:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors de l\'envoi des emails',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})