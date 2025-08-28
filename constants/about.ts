import { CheckCircle, Code2, Lightbulb, Target } from "lucide-react"

const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'We start with a detailed consultation to understand your business goals, target audience, and technical requirements.',
      icon: Lightbulb,
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description:
        'Creating wireframes and visual designs that align with your brand and provide excellent user experience.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        "Building your website with modern technologies, ensuring it's fast, secure, and works perfectly across all devices.",
      icon: Code2,
    },
    {
      step: '04',
      title: 'Launch & Support',
      description:
        'Deploying your site and providing ongoing support to ensure it continues to perform at its best.',
      icon: CheckCircle,
    },
  ]

  const skills = [
    'React & Next.js Development',
    'WordPress to Modern CMS Migration',
    'E-commerce Solutions',
    'SEO Optimization',
    'Performance Tuning',
    'Responsive Design',
    'Content Management Systems',
    'Local Business Optimization',
  ]

  export const getProcessSteps = () => processSteps
  export const getSkills = () => skills
  