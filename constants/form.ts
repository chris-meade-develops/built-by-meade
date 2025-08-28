const projectTypes = [
  { value: 'new-website', label: 'New Website' },
  { value: 'website-redesign', label: 'Website Redesign' },
  { value: 'ecommerce', label: 'E-commerce Store' },
  { value: 'cms-migration', label: 'CMS Migration' },
  { value: 'seo-optimization', label: 'SEO Optimization' },
  { value: 'maintenance', label: 'Website Maintenance' },
  { value: 'other', label: 'Other' },
]

const budgetRanges = [
  { value: 'under-2k', label: 'Under £2,000' },
  { value: '2k-5k', label: '£2,000 - £5,000' },
  { value: '5k-10k', label: '£5,000 - £10,000' },
  { value: '10k-20k', label: '£10,000 - £20,000' },
  { value: 'over-20k', label: 'Over £20,000' },
  { value: 'not-sure', label: 'Not Sure' },
]

const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '2-3-months', label: '2-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: 'flexible', label: 'Flexible' },
]

const hearAboutOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'referral', label: 'Referral' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'other', label: 'Other' },
]

export const getProjectTypes = () => projectTypes
export const getBudgetRanges = () => budgetRanges
export const getTimelines = () => timelines
export const getHearAboutOptions = () => hearAboutOptions
