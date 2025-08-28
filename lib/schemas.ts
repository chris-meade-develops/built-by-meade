import z from "zod";

// Zod schema for form validation (client-side)
export const contactFormSchema = z.object({
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
  currentWebsite: z.string().url().optional().or(z.literal('')),
  hearAboutUs: z
    .enum(['google', 'social-media', 'referral', 'advertising', 'other'])
    .optional(),
})