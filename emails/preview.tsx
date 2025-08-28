import { LeadNotificationEmail } from './lead-notification'
import { AutoResponseEmail } from './auto-response'

const sampleLeadData = {
  name: 'John Smith',
  email: 'john@techstartup.com',
  company: 'Tech Startup Ltd',
  currentWebsite: 'https://techstartup.com',
  projectType: 'new-website',
  budget: '5k-10k',
  timeline: '2-3-months',
  hearAboutUs: 'google',
  businessDescription:
    'We are a innovative tech startup developing cutting-edge software solutions for small businesses. Our mission is to make technology accessible and affordable for everyone.',
  projectDescription:
    'We need a modern, responsive website that showcases our software products and allows potential customers to sign up for demos. The site should have a clean, professional design with integrated contact forms and analytics.',
}

const sampleAutoResponseData = {
  name: 'John Smith',
  company: 'Tech Startup Ltd',
  projectType: 'new-website',
  budget: '5k-10k',
  timeline: '2-3-months',
}

export function LeadNotificationPreview() {
  return LeadNotificationEmail(sampleLeadData)
}

export function AutoResponsePreview() {
  return AutoResponseEmail(sampleAutoResponseData)
}

export default LeadNotificationPreview
