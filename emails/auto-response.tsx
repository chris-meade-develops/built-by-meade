import { formatProjectType, formatBudget, formatTimeline } from '@/lib/utils'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
} from '@react-email/components'
import * as React from 'react'

interface AutoResponseEmailProps {
  name: string
  company: string
  projectType: string
  budget: string
  timeline: string
}

export const AutoResponseEmail: React.FC<AutoResponseEmailProps> = ({
  name,
  company,
  projectType,
  budget,
  timeline,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your enquiry, {name}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank you for your enquiry, {name}!</Heading>

          <Text style={text}>Hi {name},</Text>

          <Text style={text}>
            Thank you for reaching out to Built By Meade. I've received your
            enquiry about your <strong>{formatProjectType(projectType)}</strong>{' '}
            project and I'm excited to learn more about {company}.
          </Text>

          <Section style={sectionGray}>
            <Heading style={h2}>📋 Your Enquiry Summary</Heading>
            <Text style={text}>
              <strong>Project Type:</strong> {formatProjectType(projectType)}
            </Text>
            <Text style={text}>
              <strong>Budget Range:</strong> {formatBudget(budget)}
            </Text>
            <Text style={text}>
              <strong>Timeline:</strong> {formatTimeline(timeline)}
            </Text>
          </Section>

          <Section style={sectionBlue}>
            <Heading style={h2}>🚀 What happens next?</Heading>
            <Text style={text}>
              • <strong>Within 24 hours:</strong> I'll review your requirements
              and get back to you with initial thoughts
            </Text>
            <Text style={text}>
              • <strong>Discovery call:</strong> We'll schedule a free
              consultation to discuss your project in detail
            </Text>
            <Text style={text}>
              • <strong>Proposal:</strong> I'll provide a tailored proposal with
              timeline and pricing
            </Text>
          </Section>

          <Section style={sectionGreen}>
            <Heading style={h2}>💡 In the meantime</Heading>
            <Text style={text}>Feel free to:</Text>
            <Text style={text}>
              • Check out my recent work at{' '}
              <Link href="https://builtbymeade.com" style={link}>
                builtbymeade.com
              </Link>
            </Text>
            <Text style={text}>
              • Connect with me on{' '}
              <Link href="https://linkedin.com/in/chrismeadedev" style={link}>
                LinkedIn
              </Link>
            </Text>
            <Text style={text}>
              • Email me directly at{' '}
              <Link href="mailto:chris@builtbymeade.com" style={link}>
                chris@builtbymeade.com
              </Link>
            </Text>
          </Section>

          <Text style={text}>Looking forward to working with you!</Text>

          <Hr style={hr} />

          <Section style={signature}>
            <Text style={signatureName}>Chris Meade</Text>
            <Text style={signatureTitle}>Web Developer</Text>
            <Text style={signatureContact}>
              <Link href="mailto:chris@builtbymeade.com" style={link}>
                chris@builtbymeade.com
              </Link>
            </Text>
            <Text style={signatureContact}>
              <Link href="https://builtbymeade.com" style={link}>
                builtbymeade.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
}

const h1 = {
  color: '#2563eb',
  borderBottom: '2px solid #2563eb',
  paddingBottom: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
}

const h2 = {
  marginTop: '0',
  color: '#334155',
  fontSize: '18px',
  fontWeight: 'bold',
}

const sectionGray = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
}

const sectionBlue = {
  backgroundColor: '#eff6ff',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
}

const sectionGreen = {
  backgroundColor: '#f0fdf4',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
}

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '8px 0',
}

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
}

const hr = {
  borderColor: '#e2e8f0',
  margin: '30px 0 20px 0',
}

const signature = {
  marginTop: '20px',
}

const signatureName = {
  margin: '0',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#374151',
}

const signatureTitle = {
  margin: '5px 0',
  color: '#64748b',
  fontSize: '14px',
}

const signatureContact = {
  margin: '5px 0',
  fontSize: '14px',
  color: '#374151',
}

export default AutoResponseEmail
