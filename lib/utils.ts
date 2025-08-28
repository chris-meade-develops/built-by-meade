import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Helper functions for text email fallbacks
export function formatBudget(budget: string): string {
  const budgetMap: Record<string, string> = {
    'under-2k': 'Under £2,000',
    '2k-5k': '£2,000 - £5,000',
    '5k-10k': '£5,000 - £10,000',
    '10k-20k': '£10,000 - £20,000',
    'over-20k': 'Over £20,000',
    'not-sure': 'Not Sure'
  }
  return budgetMap[budget] || budget
}

export function formatProjectType(projectType: string): string {
  const typeMap: Record<string, string> = {
    'new-website': 'New Website',
    'website-redesign': 'Website Redesign',
    'ecommerce': 'E-commerce Store',
    'cms-migration': 'CMS Migration',
    'seo-optimization': 'SEO Optimization',
    'maintenance': 'Website Maintenance',
    'other': 'Other'
  }
  return typeMap[projectType] || projectType
}

export function formatTimeline(timeline: string): string {
  const timelineMap: Record<string, string> = {
    'asap': 'ASAP',
    '1-month': 'Within 1 month',
    '2-3-months': '2-3 months',
    '3-6-months': '3-6 months',
    'flexible': 'Flexible'
  }
  return timelineMap[timeline] || timeline
}