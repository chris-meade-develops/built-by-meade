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

interface LeadNotificationEmailProps {
  name: string
  email: string
  company: string
  currentWebsite?: string
  projectType: string
  budget: string
  timeline: string
  hearAboutUs?: string
  businessDescription: string
  projectDescription: string
}

export const LeadNotificationEmail: React.FC<LeadNotificationEmailProps> = ({
  name,
  email,
  company,
  currentWebsite,
  projectType,
  budget,
  timeline,
  hearAboutUs,
  businessDescription,
  projectDescription,
}) => {
  return (
    <Html>
      <Head />
      <Preview>
        New lead from {company} - {formatProjectType(projectType)}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🚀 New Lead from Website</Heading>

          <Section style={sectionGray}>
            <Heading style={h2}>Contact Information</Heading>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
            <Text style={text}>
              <strong>Company:</strong> {company}
            </Text>
            {currentWebsite && (
              <Text style={text}>
                <strong>Current Website:</strong>{' '}
                <Link href={currentWebsite} style={link} target="_blank">
                  {currentWebsite}
                </Link>
              </Text>
            )}
          </Section>

          <Section style={sectionBlue}>
            <Heading style={h2}>Project Details</Heading>
            <Text style={text}>
              <strong>Project Type:</strong> {formatProjectType(projectType)}
            </Text>
            <Text style={text}>
              <strong>Budget Range:</strong> {formatBudget(budget)}
            </Text>
            <Text style={text}>
              <strong>Timeline:</strong> {formatTimeline(timeline)}
            </Text>
            {hearAboutUs && (
              <Text style={text}>
                <strong>How they heard about us:</strong> {hearAboutUs}
              </Text>
            )}
          </Section>

          <Section style={sectionGreen}>
            <Heading style={h2}>Business Description</Heading>
            <Text style={textPreWrap}>{businessDescription}</Text>
          </Section>

          <Section style={sectionYellow}>
            <Heading style={h2}>Project Description</Heading>
            <Text style={textPreWrap}>{projectDescription}</Text>
          </Section>

          <Section style={sectionCTA}>
            <Text style={textCTA}>
              <strong>🎯 Next Steps:</strong> Reply to this email or call them
              directly to discuss their project requirements.
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

const sectionYellow = {
  backgroundColor: '#fefce8',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
}

const sectionCTA = {
  marginTop: '30px',
  padding: '20px',
  border: '2px solid #10b981',
  borderRadius: '8px',
  backgroundColor: '#ecfdf5',
}

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '8px 0',
}

const textPreWrap = {
  ...text,
  whiteSpace: 'pre-wrap' as const,
}

const textCTA = {
  margin: '0',
  color: '#065f46',
  fontSize: '16px',
  lineHeight: '1.5',
}

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
}

export default LeadNotificationEmail
