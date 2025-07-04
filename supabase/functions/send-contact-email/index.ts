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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ff6b35;">Merci ${formData.name} !</h1>
          <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Récapitulatif de votre demande :</h3>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            ${formData.company ? `<p><strong>Entreprise :</strong> ${formData.company}</p>` : ''}
            ${formData.phone ? `<p><strong>Téléphone :</strong> ${formData.phone}</p>` : ''}
            ${formData.service ? `<p><strong>Service :</strong> ${formData.service}</p>` : ''}
            <p><strong>Message :</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${formData.message}</p>
          </div>
          
          <p>À bientôt,<br>
          L'équipe Pixelify</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          <p style="color: #6b7280; font-size: 14px;">
            Pixelify - Agence digitale<br>
            Email: info@pixelify.ch
          </p>
        </div>
      `,
    })

    console.log('Client email sent:', clientEmailResponse)

    // Email de notification pour Pixelify
    const notificationEmailResponse = await resend.emails.send({
      from: 'Pixelify Contact <noreply@pixelify.ch>',
      to: ['info@pixelify.ch'],
      subject: `Nouveau message de contact - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ff6b35;">Nouveau message de contact</h1>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations du contact :</h3>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            ${formData.company ? `<p><strong>Entreprise :</strong> ${formData.company}</p>` : ''}
            ${formData.phone ? `<p><strong>Téléphone :</strong> ${formData.phone}</p>` : ''}
            ${formData.service ? `<p><strong>Service demandé :</strong> ${formData.service}</p>` : ''}
          </div>
          
          <div style="background-color: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message :</h3>
            <p style="line-height: 1.6;">${formData.message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Message reçu le ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
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