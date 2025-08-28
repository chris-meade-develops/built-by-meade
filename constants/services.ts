import { Code2, Palette, Zap, } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description:
      'Bespoke websites and web applications built with modern technologies. From simple brochure sites to complex e-commerce platforms.',
    features: [
      'Responsive design for all devices',
      'Modern frameworks (React, Next.js)',
      'Content management systems',
      'E-commerce integration',
    ],
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive designs that engage your users and drive conversions. Every pixel crafted for maximum impact.',
    features: [
      'User-centered design approach',
      'Brand identity development',
      'Wireframing & prototyping',
      'Accessibility compliance',
    ],
    color: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Zap,
    title: 'SEO & Performance',
    description:
      'Get found online and keep visitors engaged with lightning-fast, search-optimized websites that rank well on Google.',
    features: [
      'Technical SEO optimization',
      'Local SEO for Surrey businesses',
      'Speed optimization',
      'Analytics & monitoring',
    ],
    color: 'text-green-600 dark:text-green-400',
  },
]

export const getServices = () => services
