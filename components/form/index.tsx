'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitContactForm, type ContactFormData } from '@/actions/contact'
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  Briefcase,
} from 'lucide-react'
import { contactFormSchema } from '@/lib/schemas'
import {
  getBudgetRanges,
  getHearAboutOptions,
  getProjectTypes,
  getTimelines,
} from '@/constants/form'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create FormData object for server action
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          formData.append(key, value.toString())
        }
      })

      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Honeypot field for spam prevention - hidden from users */}
        <div style={{ display: 'none' }}>
          <input
            type="text"
            {...register('website')}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    {...register('name')}
                    placeholder="John Smith"
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    {...register('email')}
                    placeholder="john@company.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Name *
                </label>
                <Input
                  {...register('company')}
                  placeholder="Your Company Ltd"
                  className={errors.company ? 'border-red-500' : ''}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Website (if any)
                </label>
                <Input
                  {...register('currentWebsite')}
                  placeholder="https://yourwebsite.com"
                  className={errors.currentWebsite ? 'border-red-500' : ''}
                />
                {errors.currentWebsite && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.currentWebsite.message}
                  </p>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                Project Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    {...register('projectType')}
                    className={`w-full px-3 py-2 border rounded-md bg-background text-foreground ${
                      errors.projectType ? 'border-red-500' : 'border-input'
                    }`}
                  >
                    <option value="">Select project type</option>
                    {getProjectTypes().map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className={`w-full px-3 py-2 border rounded-md bg-background text-foreground ${
                      errors.budget ? 'border-red-500' : 'border-input'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {getBudgetRanges().map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline *
                </label>
                <select
                  {...register('timeline')}
                  className={`w-full px-3 py-2 border rounded-md bg-background text-foreground ${
                    errors.timeline ? 'border-red-500' : 'border-input'
                  }`}
                >
                  <option value="">Select timeline</option>
                  {getTimelines().map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.timeline.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How did you hear about us?
                </label>
                <select
                  {...register('hearAboutUs')}
                  className="w-full px-3 py-2 border rounded-md bg-background text-foreground border-input"
                >
                  <option value="">Select an option</option>
                  {getHearAboutOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Business Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Building className="h-5 w-5 mr-2 text-primary" />
                About Your Business & Project
              </h3>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your business *
                </label>
                <textarea
                  {...register('businessDescription')}
                  rows={4}
                  placeholder="What does your business do? Who are your customers? What makes you unique?"
                  className={`w-full px-3 py-2 border rounded-md bg-background text-foreground resize-none ${
                    errors.businessDescription
                      ? 'border-red-500'
                      : 'border-input'
                  }`}
                />
                {errors.businessDescription && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.businessDescription.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  {...register('projectDescription')}
                  rows={6}
                  placeholder="Describe your project goals, features needed, design preferences, and any specific requirements..."
                  className={`w-full px-3 py-2 border rounded-md bg-background text-foreground resize-none ${
                    errors.projectDescription
                      ? 'border-red-500'
                      : 'border-input'
                  }`}
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.projectDescription.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                size="lg"
                className="w-full text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                  I'll get back to you within 24 hours to discuss your project.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Sorry, there was an error sending your message.
                  </p>
                </div>
                <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                  Please try again or email me directly at hello@chrismeade.dev
                </p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
