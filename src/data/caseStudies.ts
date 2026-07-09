export type CaseStudy = {
  slug: string
  title: string
  company: string
  year: string
  tags: string[]
  summary: string
  role: string
  overview: string
  problem: string
  approach: string[]
  outcome: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-assisted-design-practice',
    title: 'Building an AI-Assisted Design Practice',
    company: 'Employers Insurance Group',
    year: '2023–Present',
    tags: ['Design Systems', 'AI Tooling', 'Storybook'],
    summary:
      'Piloted AI-assisted design tooling across the practice — from an AI-generated component library to a live Storybook-to-Claude Design pipeline.',
    role: 'Manager, Experience Design',
    overview:
      'As part of owning the Figma design system for a nationwide workers’ compensation provider, I led evaluation and adoption of emerging AI design tools to help the design practice move faster without losing craft.',
    problem:
      'The design-to-code pipeline relied entirely on manual handoff, and the team had no shared, framework-agnostic component library to build from — slowing delivery and making AI-assisted prototyping impractical.',
    approach: [
      'Partnered with Enterprise Architecture to prototype an AI-generated, framework-agnostic first-pass component library.',
      'Evaluated Figma Make as an AI-assisted design tool for the practice.',
      'Built a test agent for quoting direct business.',
      'Established the company’s first Storybook component library and connected it to Claude Design as a live component source for AI-assisted prototyping.',
    ],
    outcome: [
      'First framework-agnostic component library prototype in the organization.',
      'A live, connected pipeline from Storybook to AI-assisted prototyping.',
      'A repeatable evaluation process for piloting new AI design tools.',
    ],
  },
  {
    slug: 'voice-of-customer-program',
    title: 'Standing Up a Real-Time Voice of Customer Program',
    company: 'Employers Insurance Group',
    year: '2023–Present',
    tags: ['Research', 'Measurement', 'Pendo'],
    summary:
      'Built the organization’s first real-time NPS/CES/CSAT infrastructure, tying design decisions directly to measurable business outcomes.',
    role: 'Manager, Experience Design',
    overview:
      'Customer feedback existed but wasn’t owned by design and wasn’t real-time, making it hard to connect specific design decisions to business impact.',
    problem:
      'CSAT was owned by Data Science, NPS/CES weren’t tracked in real time, and personas and journey maps were out of date.',
    approach: [
      'Took ownership of the bi-annual CSAT survey and transitioned it from Data Science to Design.',
      'Stood up real-time NPS and CES scoring in Pendo.',
      'Refreshed agent personas and created updated journey maps.',
    ],
    outcome: [
      'First real-time Voice of Customer program at the company.',
      'Design-owned measurement infrastructure connecting decisions to outcomes.',
      'Refreshed personas and journey maps in active use across initiatives.',
    ],
  },
  {
    slug: 'endorsements-navigation-redesign',
    title: 'Redesigning Agent-Facing Endorsements Navigation',
    company: 'Employers Insurance Group',
    year: '2024',
    tags: ['UX Research', 'UI Design', 'Insurance'],
    summary:
      'Redesigned a core agent workflow for policy endorsements, validated directly with the agents who use it daily.',
    role: 'Manager, Experience Design',
    overview:
      'Agents navigating policy endorsements were working within a confusing, legacy navigation structure that slowed down everyday tasks.',
    problem:
      'Existing navigation didn’t match how agents actually thought about or performed endorsement tasks, creating friction in a high-frequency workflow.',
    approach: [
      'Researched agent workflows to understand real task sequencing and mental models.',
      'Redesigned the navigation structure around agent tasks rather than internal system architecture.',
      'Validated the new design directly with surveyed agents before rollout.',
    ],
    outcome: [
      '86% of surveyed agents preferred the new experience over the legacy navigation.',
    ],
  },
  {
    slug: 'marketplace-lender-matching',
    title: 'Marketplace Lender-Matching System',
    company: 'BiggerPockets',
    year: '2022–2023',
    tags: ['Product Strategy', 'Fintech', 'Design Systems'],
    summary:
      'Designed a lender-matching system that translated lending complexity into plain language, contributing to 2x revenue growth in its first year.',
    role: 'Lead UX Designer',
    overview:
      'BiggerPockets’ Lender Finder product needed to help real estate investors navigate complex lending options without a lending background.',
    problem:
      'Lending terms and qualification criteria were dense and hard for non-experts to parse, creating a barrier between investors and the right lenders.',
    approach: [
      'Led Marketplace design strategy end to end.',
      'Designed a matching system that translated lending complexity into plain, investor-friendly language.',
      'Owned the design system and set brand/usability standards for design contractors, cutting new-product delivery time by roughly a third.',
    ],
    outcome: [
      '2x revenue growth for the Lender Finder product in its first year.',
      'Roughly 33% faster delivery time for new products built on the shared design system.',
    ],
  },
  {
    slug: 'quote-app-redesign',
    title: 'Cutting Quote Time from Weeks to Minutes',
    company: 'Cake Insure / Pinnacol Assurance',
    year: '2017–2021',
    tags: ['Insurance', 'Conversion', 'Design Systems'],
    summary:
      'Designed an insurance quote app that cut quote time from weeks to five minutes, then drove a follow-up redesign that raised NPS by 16 points.',
    role: 'Lead Senior UX Designer',
    overview:
      'Workers’ compensation quoting was a slow, multi-week manual process for both agents and customers.',
    problem:
      'Long quote turnaround times were a competitive disadvantage and a source of customer frustration.',
    approach: [
      'Designed an initial quote app enabling next-day coverage instead of a multi-week process.',
      'Later led an NPS-driven redesign informed directly by customer feedback.',
      'At Pinnacol, revamped the customer quote UI to remove friction from the conversion path.',
    ],
    outcome: [
      'Quote time cut from weeks to five minutes with next-day coverage.',
      '3rd place for best mobile app from AASCIF.',
      'NPS-driven redesign raised NPS by 16 points.',
      '6% increase in policy conversions from the Pinnacol quote UI revamp.',
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug)
}
