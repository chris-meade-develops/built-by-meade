'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import React from 'react'
import LeadNotificationEmail from '@/emails/lead-notification'
import AutoResponseEmail from '@/emails/auto-response'
import { formatProjectType } from '@/lib/utils'

// Zod schema for server-side validation
const contactFormSchema = z.object({
  // Basic contact information
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

  email: z
    .email('Please enter a valid email address')
    .min(5, 'Email is required'),

  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),

  // Project details for lead screening
  projectType: z.enum(
    [
      'new-website',
      'website-redesign',
      'ecommerce',
      'cms-migration',
      'seo-optimization',
      'maintenance',
      'other',
    ],
    {
      message: 'Please select a project type',
    }
  ),

  budget: z.enum(
    ['under-2k', '2k-5k', '5k-10k', '10k-20k', 'over-20k', 'not-sure'],
    {
      message: 'Please select a budget range',
    }
  ),

  // Business information
  businessDescription: z
    .string()
    .min(20, 'Please provide at least 20 characters about your business')
    .max(500, 'Business description must be less than 500 characters'),

  projectDescription: z
    .string()
    .min(30, 'Please provide at least 30 characters about your project')
    .max(1000, 'Project description must be less than 1000 characters'),

  timeline: z.enum(
    ['asap', '1-month', '2-3-months', '3-6-months', 'flexible'],
    {
      message: 'Please select a timeline',
    }
  ),

  // Spam prevention
  website: z.string().optional(), // Honeypot field

  // Additional information
  currentWebsite: z.url().optional().or(z.literal('')),
  hearAboutUs: z
    .enum(['google', 'social-media', 'referral', 'advertising', 'other'])
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Convert FormData to plain object
    const data = Object.fromEntries(formData.entries())
    
    // Spam prevention: Check honeypot field
    if (data.website) {
      console.error('Spam detected via honeypot')
      return { success: false, error: 'Spam detected' }
    }

    // Validate the data
    const validatedData = contactFormSchema.parse(data)

    // Create Nodemailer transporter for Mailjet
    const transporter = nodemailer.createTransport({
      host: 'in-v3.mailjet.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.MAILJET_API_KEY,
        pass: process.env.MAILJET_SECRET_KEY,
      },
    })

    // Render email components to HTML
    const leadEmailHtml = await render(
      React.createElement(LeadNotificationEmail, {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        currentWebsite: validatedData.currentWebsite || undefined,
        projectType: validatedData.projectType,
        budget: validatedData.budget,
        timeline: validatedData.timeline,
        hearAboutUs: validatedData.hearAboutUs || undefined,
        businessDescription: validatedData.businessDescription,
        projectDescription: validatedData.projectDescription,
      })
    )

    const autoResponseHtml = await render(
      React.createElement(AutoResponseEmail, {
        name: validatedData.name,
        company: validatedData.company,
        projectType: validatedData.projectType,
        budget: validatedData.budget,
        timeline: validatedData.timeline,
      })
    )
    await Promise.all([
transporter.sendMail({
      from: '"Website Contact Form" <hello@builtbymeade.com>',
      to: 'chris@builtbymeade.com',
      subject: `🚀 New Lead: ${validatedData.company} - ${formatProjectType(validatedData.projectType)}`,
      html: leadEmailHtml,
    }),
     transporter.sendMail({
      from: '"Chris Meade Web Development" <hello@builtbymeade.com>',
      to: validatedData.email,
      subject: `Thank you for your enquiry, ${validatedData.name}!`,
      html: autoResponseHtml,
    })
    ])


    return { success: true }
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: 'Validation failed',
        fieldErrors: z.treeifyError(error)
      }
    }
    
    return { success: false, error: 'Failed to send message' }
  }
}
