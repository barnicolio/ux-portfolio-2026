export type Block =
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'text'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'browser'; src: string; url?: string; caption?: string }
  | { type: 'carousel'; slides: { src: string; caption?: string }[] }

export type CaseStudy = {
  slug: string
  title: string
  company: string
  year: string
  tags: string[]
  summary: string
  role: string
  thumbnail?: string
  thumbnailPosition?: string
  body: Block[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-assisted-design-practice',
    title: 'Building an AI-Assisted Design Practice',
    company: 'Employers Insurance Group',
    year: '2023–Present',
    tags: ['Leadership', 'Design Systems', 'AI Tooling'],
    summary:
      'Piloted AI-assisted design tooling across the practice, from an AI-generated component library to a live Storybook-to-Claude Design pipeline.',
    role: 'Manager, Experience Design',
    thumbnail: '/case-studies/ai-assisted-design-practice/office-ai-hero.jpg',
    thumbnailPosition: 'center',
    body: [
      {
        type: 'image',
        src: '/case-studies/ai-assisted-design-practice/office-ai-hero.jpg',
      },
      { type: 'heading', text: 'Overview' },
      {
        type: 'text',
        text: 'Leadership was challenging every team to get innovative with AI and use it to work more productively, with one principle held firm: AI isn’t a replacement for people but a new set of tools to help them do their best work. As the owner of the Figma design system for this nationwide workers’ compensation provider, I led how the design practice evaluated and adopted emerging AI tools, always looking for ways to move faster without losing craft.',
      },
      { type: 'heading', text: 'The opportunity' },
      {
        type: 'text',
        text: 'The design-to-code pipeline still ran on manual handoff, and the team had no shared, framework-agnostic component library to build from. Rather than a problem to patch, I saw an opportunity: a shared, code-ready component library could speed up delivery and, for the first time, make AI-assisted prototyping practical across the practice.',
      },
      { type: 'heading', text: 'Approach' },
      {
        type: 'list',
        items: [
          'Partnered with Enterprise Architecture to prototype an AI-generated, framework-agnostic first-pass component library.',
          'Partnered with our application development team to make sure the generated component code was usable in production.',
          'Evaluated Figma Make, Claude Design, and other AI prototyping tools for the practice.',
          'Established the company’s first Storybook component library and connected it to Claude Design as a live component source for AI-assisted prototyping.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/ai-assisted-design-practice/figma-tables.png',
        caption:
          'The Figma design system the team designs from, including the datagrid and table components.',
      },
      {
        type: 'image',
        src: '/case-studies/ai-assisted-design-practice/storybook.png',
        caption:
          'The Storybook component library, documenting each component’s variants, sizes, and states.',
      },
      {
        type: 'image',
        src: '/case-studies/ai-assisted-design-practice/claude-design-system.png',
        caption:
          'The framework-agnostic component library, connected to Claude Design as a live source for AI-assisted prototyping.',
      },
      { type: 'heading', text: 'Outcome' },
      {
        type: 'list',
        items: [
          'First framework-agnostic component library prototype in the organization.',
          'A live, connected pipeline from Storybook to AI-assisted prototyping.',
          'Opened the door for design roles to evolve into design engineers, with AI helping designers move from mockups into working, code-backed prototypes.',
        ],
      },
    ],
  },
  {
    slug: 'voice-of-customer-program',
    title: 'Standing Up a Real-Time Voice of Customer Program',
    company: 'Employers Insurance Group',
    year: '2023–Present',
    tags: ['Leadership', 'Research', 'Measurement'],
    summary:
      'Built the organization’s first real-time NPS/CES/CSAT infrastructure, tying design decisions directly to measurable business outcomes.',
    role: 'Manager, Experience Design',
    body: [
      { type: 'heading', text: 'Overview' },
      {
        type: 'text',
        text: 'No department at the company truly owned collecting and maintaining a pulse on customer sentiment and feedback. It existed, but it was scattered and rarely real-time, which made it hard to connect design decisions to business impact. I took the initiative to establish a Voice of Customer program, pairing the UX research skill on my team with behavioral analytics from Pendo and other sources to give the organization a real-time read on how customers felt.',
      },
      { type: 'heading', text: 'The problem' },
      {
        type: 'text',
        text: 'CSAT was owned by Data Science, NPS/CES weren’t tracked in real time, and personas and journey maps were out of date.',
      },
      { type: 'heading', text: 'Approach' },
      {
        type: 'list',
        items: [
          'Took ownership of the bi-annual CSAT survey and transitioned it from Data Science to Design.',
          'Stood up real-time NPS and CES scoring in Pendo.',
          'Refreshed agent personas and created updated journey maps.',
        ],
      },
      { type: 'heading', text: 'Outcome' },
      {
        type: 'list',
        items: [
          'First real-time Voice of Customer program at the company.',
          'Design-owned measurement infrastructure connecting decisions to outcomes.',
          'Refreshed personas and journey maps in active use across initiatives.',
        ],
      },
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
    thumbnail: '/case-studies/biggerpockets-lender-finder/urban-lender-finder-hero.jpg',
    thumbnailPosition: 'center',
    body: [
      {
        type: 'browser',
        src: '/case-studies/biggerpockets-lender-finder/desktop-landing.jpg',
        url: 'biggerpockets.com/lender-finder',
        caption: 'The Lender Finder landing page.',
      },
      { type: 'heading', text: 'Overview' },
      {
        type: 'text',
        text: 'BiggerPockets Lender Finder helps real estate investors find lenders who will actually fund their strategy, without needing a lending background or an existing network. As Lead UX Designer, I owned the Marketplace design strategy end to end and turned a dense, expert-only process into a few plain-language questions that match investors to the right lenders. The result: 2x revenue growth in the product’s first year, plus a shared design system that cut delivery time for new products by roughly a third.',
      },
      { type: 'heading', text: 'The problem' },
      {
        type: 'text',
        text: 'Lending terms and qualification criteria were dense and hard for non-experts to parse. But the harder problem was access: most real estate investors simply didn’t have contacts with investor-friendly lenders.',
      },
      {
        type: 'text',
        text: 'Conventional banks often won’t fund investment strategies like fix and flips, BRRRR deals, or rental portfolios, and the lenders who specialize in them are difficult to find without an existing network. So an investor could know exactly what they wanted to buy and still have no idea which lender could fund it, or how to reach them.',
      },
      { type: 'heading', text: 'Approach' },
      {
        type: 'list',
        items: [
          'Led Marketplace design strategy end to end.',
          'Designed a matching system that translated lending complexity into plain, investor-friendly language.',
          'Tested the flow with both real estate investors and lenders to make sure that when a connection was made, there would be no misunderstandings on either end about expectations or fit.',
          'Owned the design system and set brand/usability standards for design contractors, cutting new-product delivery time by roughly a third.',
        ],
      },
      { type: 'heading', text: 'Walking through the flow' },
      {
        type: 'text',
        text: 'The matching flow guides an investor from a few plain-language questions to a curated set of lenders. Swipe or click through the steps below.',
      },
      {
        type: 'carousel',
        slides: [
          {
            src: '/case-studies/biggerpockets-lender-finder/01-landing.png',
            caption: 'Landing page',
          },
          {
            src: '/case-studies/biggerpockets-lender-finder/02-property.png',
            caption: 'Step 1 · Do you have a property in mind?',
          },
          {
            src: '/case-studies/biggerpockets-lender-finder/03-address.png',
            caption: 'Step 2 · Property address',
          },
          {
            src: '/case-studies/biggerpockets-lender-finder/04-purchase-price.png',
            caption: 'Step 3 · Purchase price and down payment',
          },
          {
            src: '/case-studies/biggerpockets-lender-finder/05-additional-info.png',
            caption: 'Step 4 · Unique situations',
          },
          {
            src: '/case-studies/biggerpockets-lender-finder/06-portfolio-credit.png',
            caption: 'Step 5 · Portfolio size and credit',
          },
          {
            src: '/case-studies/biggerpockets-lender-finder/07-matches.png',
            caption: 'Results · Matched lenders',
          },
        ],
      },
      { type: 'heading', text: 'Outcome' },
      {
        type: 'list',
        items: [
          '2x revenue growth for the Lender Finder product in its first year.',
          'Roughly 33% faster delivery time for new products built on the shared design system.',
        ],
      },
    ],
  },
  {
    slug: 'biggerpockets-forums',
    title: 'Designing a Forum for Trust and Scale',
    company: 'BiggerPockets',
    year: '2022',
    tags: ['UX Research', 'Community', 'Responsive Web'],
    summary:
      'Rebuilt the forums for the largest US real estate investing community to reverse a 50% year-over-year decline in activity.',
    role: 'Lead UX Designer',
    thumbnail: '/case-studies/biggerpockets-forums/cozy-forum-hero.jpeg',
    body: [
      { type: 'heading', text: 'Overview' },
      {
        type: 'text',
        text: 'BiggerPockets is the largest and most active real estate investing community in the US, but in recent years its forums activity had begun to die down, the result of poor user experience, old and fragile code, and a rise in Facebook group activity. I was tasked with requirements gathering, design, user testing, and QA for the release of a completely new forums codebase aimed at maintaining (and hopefully increasing) user activity.',
      },
      {
        type: 'text',
        text: 'During my time working on the BiggerPockets forums, my work directly contributed to:',
      },
      {
        type: 'list',
        items: [
          'An improved user experience for both power users and forum lurkers.',
          'Increased total number of sessions by 10%+.',
          'Increased session length by a minute.',
          'Decreased rage clicks by 2–3%.',
          'Decreased dead clicks by 10%.',
        ],
      },
      { type: 'image', src: '/case-studies/biggerpockets-forums/01-hero.png' },
      { type: 'heading', text: 'Who did this project solve for?' },
      {
        type: 'text',
        text: 'Based on data about trending forums usage and interviews with BiggerPockets members (from long-time users to brand-new members), I arrived at four personas the forums really needed to support:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Power users create not only the highest number of posts, but the most useful and highly regarded posts in the community. They are arguably the most important to support, because they keep every other user engaged with relevant, helpful content.',
          'Lurkers search the forums for answers to specific questions, often seeking advice from professionals or power users the community trusts. They are the largest subset of users, and had begun to complain that they could no longer find answers in the forums.',
          'Professionals use the forums to network and share knowledge, building their reputation in the real estate investing community. Many credit the forums with generating business and good connections.',
          'Moderators are volunteers who keep the forums running smoothly out of love for the community. Without moderation the community would become chaotic and quickly lose its value.',
        ],
      },
      { type: 'heading', text: 'How should the community forums be designed?' },
      {
        type: 'text',
        text: 'My team had a couple of hypotheses about how the forums should be designed:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Take inspiration from successful social communities like Facebook and Reddit: threaded conversations with backend logic surfacing the most relevant or active content. This tested poorly: users reported they couldn’t follow a conversation from beginning to end, and lost the context they relied on to judge who was credible.',
          'Take inspiration from traditional, highly active forums. This tested very well: all personas could understand and use the chronological conversation format, and the credibility information was even more prominent than before.',
        ],
      },
      {
        type: 'text',
        text: 'Testing both hypotheses, alongside research on how people communicate and what makes information credible, made it clear that the traditional forums design was superior for BiggerPockets because it supported deep, continuous conversation that users could follow, catch up on, and join at any time with full context.',
      },
      {
        type: 'text',
        text: 'One thing that helped me frame the why behind not following the popular social-media pattern was an article on the four types of conversations people have, and the circumstances that call for each.',
      },
      {
        type: 'image',
        src: '/case-studies/biggerpockets-forums/02-conversation-types.png',
        caption: 'The four types of conversations, and the circumstances that call for each.',
      },
      {
        type: 'text',
        text: 'Social platforms primarily support one-way conversations, putting content out for others to react to, while two-way conversations are better served by a chronological, relationship-building format where in-depth learning through dialogue and debate can happen.',
      },
      { type: 'heading', text: 'The new forums' },
      {
        type: 'text',
        text: 'The final design was tested in person at a BiggerPockets conference and over video call with some of the community’s most influential members. A few of the most successful features I designed:',
      },
      { type: 'heading', level: 3, text: 'Power-user stats & relevant context' },
      {
        type: 'text',
        text: 'For a forum community to thrive, users must be able to tell who other users are and whether their information is credible and relevant. From conversations with real forum users and testing, members needed: the user’s real name, number of upvotes received, number of posts made, BiggerPockets membership status, professional real estate occupation, and location.',
      },
      {
        type: 'image',
        src: '/case-studies/biggerpockets-forums/03-screen.png',
        caption: 'Credibility signals let users show they’re a trustworthy source, and judge the same in others.',
      },
      { type: 'heading', level: 3, text: 'Top voted post' },
      {
        type: 'text',
        text: 'To help lurkers find answers quickly, and to improve SEO by bumping the most relevant information up the page, I surfaced the most-voted comment on each topic. To protect the integrity of the chronological conversation, a button let users jump to that comment in the context of the full thread.',
      },
      {
        type: 'image',
        src: '/case-studies/biggerpockets-forums/04-screen.png',
        caption: 'The top-voted comment appears above the chronological conversation, below the original post.',
      },
      { type: 'heading', level: 3, text: 'Streamlined topic views' },
      {
        type: 'text',
        text: 'To help users scan for topics of interest more quickly, I designed a condensed list view showing only the essential information a user needs to decide whether to open a topic.',
      },
      { type: 'image', src: '/case-studies/biggerpockets-forums/05-screen.png', caption: 'Condensed topic list view for faster scanning.' },
      { type: 'heading', text: 'Feedback and what I’d change' },
      {
        type: 'text',
        text: 'The release was phased so moderators and admins could test before the forums went to all users. Some of the comments from moderators and power users:',
      },
      { type: 'image', src: '/case-studies/biggerpockets-forums/06-screen.png' },
      { type: 'image', src: '/case-studies/biggerpockets-forums/07-screen.png' },
      { type: 'image', src: '/case-studies/biggerpockets-forums/08-screen.png' },
      { type: 'image', src: '/case-studies/biggerpockets-forums/09-screen.png' },
      {
        type: 'text',
        text: 'Once we’d launched to moderators and then to everyone, two pieces of feedback stood out that I believe a future update should address:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'The prominence of the “Quote” button on comments made quoting skyrocket. Threads became long and bloated, with nearly every comment quoting another user. The fix: reduce the prominence of the quote button relative to “Reply.”',
          'Forums search wasn’t updated in this release, and I believe it would be the single most impactful feature for keeping people on the site. Many users reported going to Google to search the forums because it worked better.',
        ],
      },
      { type: 'heading', text: 'Results' },
      {
        type: 'text',
        text: 'This was a huge undertaking that required multiple rounds of user testing and a lot of research. In the end it was an amazing learning experience, and I’m very proud of the results the new designs delivered.',
      },
    ],
  },
  {
    slug: 'salesforce-policy-management',
    title: 'Rebuilding a 15-Year-Old Policy Platform in Salesforce',
    company: 'Pinnacol Assurance',
    year: '2021',
    tags: ['Enterprise UX', 'Salesforce', 'Insurance'],
    summary:
      'Rebuilt a 15-year-old policy management platform in Salesforce, cutting policy binding time from two weeks to under ten minutes.',
    role: 'Senior UX Designer',
    thumbnail: '/case-studies/salesforce-policy-management/desk-salesforce-hero.jpg',
    body: [
      { type: 'heading', text: 'Overview' },
      {
        type: 'text',
        text: 'Pinnacol Assurance is a 100-year-old company, established as Colorado’s “insurer of last resort” in 1915. Its underwriting, audit, and customer service teams had all been using a 15+-year-old policy management platform to create, maintain, and update workers’ comp policies. As the product designer on the team rebuilding that outdated system into a modern, Salesforce-based platform, I designed and tested a new quoting and policy-maintenance tool.',
      },
      {
        type: 'text',
        text: 'During my time working on this application, my work contributed to achievements like:',
      },
      {
        type: 'list',
        items: [
          'Reduced time to bind (activate) a new policy from two weeks to 7–8 minutes.',
          'Customer service could offer coverage-change scenarios and options in seconds over the phone, instead of having to call the customer back.',
          'Policy audits and updates became more streamlined and efficient for both internal stakeholders and customers.',
        ],
      },
      { type: 'heading', text: 'Who did this design solve for?' },
      {
        type: 'text',
        text: 'The platform supported many internal stakeholders at Pinnacol Assurance: underwriters, customer service agents, auditors, and the Salesforce developers who support them.',
      },
      { type: 'heading', level: 3, text: 'Underwriters' },
      {
        type: 'text',
        text: 'Interviewing senior and junior underwriters, I learned they need to review information quickly and make changes like updating business classifications and risk evaluations. Watching the existing process, I saw that many of the actions they needed to take (and compare) were split across multiple screens, forcing them to use spreadsheets or paper outside the tool to keep track of the numbers.',
      },
      { type: 'heading', level: 3, text: 'Customer service agents' },
      {
        type: 'text',
        text: 'Watching agents on support calls and discussing the snags they hit, I saw several of them using an Excel spreadsheet that calculated policy-cost changes for them, something the existing platform didn’t do.',
      },
      { type: 'heading', level: 3, text: 'Auditors' },
      {
        type: 'text',
        text: 'Auditors review the previous year of coverage to make sure customers weren’t over- or under-charged, comparing actual payroll and employee numbers against the estimates used to issue coverage. Watching senior auditors work made it clear that seeing reported changes and original payroll data together on the same page was critical for this role.',
      },
      { type: 'heading', level: 3, text: 'Salesforce developers providing support' },
      {
        type: 'text',
        text: 'To support the key stakeholders quickly, developers who weren’t workers’-comp experts needed a way to see the code before and after changes were made, so they could understand where errors were occurring.',
      },
      { type: 'heading', text: 'How to determine the layout and information architecture?' },
      {
        type: 'text',
        text: 'This is a very data-dense, complex tool, so it was important to understand what information was absolutely required and what should be grouped together to best support each stakeholder. The information architecture also had to account for Salesforce’s Lightning Design System and how it structures objects and data in the UI.',
      },
      {
        type: 'text',
        text: 'After user testing with stakeholders, I identified the orienting information every user needed to get started:',
      },
      {
        type: 'list',
        items: [
          'Policy number',
          'Rating set number (the version of pricing applied to the policy)',
          'Policy period (the timeframe this rating set applies to)',
          'Case number (has support tied a case to this policy and rating set?)',
          'Alias (notes on the policy and rating set)',
          'Save / Update / Cancel actions',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/salesforce-policy-management/01-hero.png',
        caption: 'The highest-level orienting information lives in the top Salesforce page-header component.',
      },
      {
        type: 'text',
        text: 'Once the user is oriented to the specific policy and pricing version, the remaining groupings were dictated by type, relationship, and frequency of use: the further down the page, the less commonly used the tools and features.',
      },
      {
        type: 'image',
        src: '/case-studies/salesforce-policy-management/02-rating-tool.png',
        caption:
          'The full rating tool: an orienting header up top, then sections grouped by relationship and ordered by how often they’re used.',
      },
      {
        type: 'image',
        src: '/case-studies/salesforce-policy-management/03-rating-tool-expanded.png',
        caption:
          'After refreshing pricing, the tool surfaces updated rates, endorsements, and installment amounts with every section expanded, down to the request and response JSON that lets Salesforce developers debug a policy.',
      },
      { type: 'heading', text: 'Learnings' },
      {
        type: 'list',
        items: [
          'The classification and payroll data table required complex, custom-coded settings to support the variety of scenarios needed to price workers’-comp policies correctly.',
          'Transparency of the math behind prices was highly important for customer service agents helping customers understand their policies.',
          'Classifications and owner-vs-employee coverage were a common pain point that caused a lot of duplicate data entry, so adding a copy-row option to the classifications and payroll table was a huge efficiency win.',
        ],
      },
    ],
  },
  {
    slug: 'cake-insure',
    title: 'Cutting Workers’ Comp Quotes from Days to Five Minutes',
    company: 'Cake Insure / Pinnacol Assurance',
    year: '2017–2020',
    tags: ['Insurtech', 'Conversion', 'Responsive Web'],
    summary:
      'Designed a self-service quote flow that took small-business workers’ comp quotes from 3–5 days to under five minutes, and drove a redesign that lifted NPS by 16 points.',
    role: 'Lead Senior UX Designer',
    thumbnail: '/case-studies/cake-insure/coffee-cake-hero.jpeg',
    body: [
      { type: 'heading', text: 'Overview' },
      {
        type: 'text',
        text: 'Pinnacol Assurance is a 100-year-old company, established as Colorado’s “insurer of last resort” in 1915. In a new self-service world, how could Pinnacol provide Colorado businesses with workers’ compensation insurance quickly and easily? That was the core question Cake Insure (a wholly owned subsidiary of Pinnacol) set out to answer.',
      },
      {
        type: 'text',
        text: 'During my time working on this application, my work contributed to achievements like:',
      },
      {
        type: 'list',
        items: [
          '16-point NPS increase.',
          '8% more quote-page conversions.',
          '6% more purchase conversions.',
          '3rd place for “Best Mobile App” from AASCIF (American Association of State Compensation Insurance Funds).',
        ],
      },
      {
        type: 'text',
        text: 'The initial launch of the Cake Insure quoting app brought a process that took weeks down to minutes.',
      },
      { type: 'heading', text: 'Who did this app solve for?' },
      {
        type: 'text',
        text: 'Based on interviews with Pinnacol policyholders that the product manager and I conducted, small-business classification data, and customer-support testimonials, we found two distinct users:',
      },
      {
        type: 'image',
        src: '/case-studies/cake-insure/01-personas.png',
        caption: 'The two core personas: small business owners and small construction businesses.',
      },
      {
        type: 'text',
        text: 'Most small business owners start their business out of passion and often don’t realize they need workers’-comp insurance until they’ve already hired someone and are out of compliance with state law. That creates urgency to get covered ASAP: a non-compliant business can face a fine of $500/day from the state.',
      },
      {
        type: 'text',
        text: 'Small construction businesses love the independence of running their own business but struggle to balance the cost of workers’ comp with seasonal ebb and flow. They often buy a policy and cancel it when the job is done to manage costs, then need coverage fast when the next job comes up.',
      },
      {
        type: 'image',
        src: '/case-studies/cake-insure/02-screen.png',
        caption: 'The empathy map from my research, drawn from customer statements and the support reps who talk with customers every day.',
      },
      {
        type: 'text',
        text: 'Understanding that our customers mainly needed the right coverage quickly and at a reasonable price, the product team felt an online form similar to Lemonade, biBERK, or Hippo would scale best. I agreed.',
      },
      { type: 'heading', text: 'How should the application be formatted?' },
      {
        type: 'text',
        text: 'Pinnacol’s original paper application was about 40 questions long, so a single form could cover every possible scenario. With the Cake Insure app we could use a logic-based flow to cut the number of questions any one applicant answered to about 11. With that decided, I still needed to find the best way to present each question so the process felt quick and easy. I tested three formats:',
      },
      { type: 'heading', level: 3, text: 'Mad-Lib form' },
      {
        type: 'image',
        src: '/case-studies/cake-insure/03-madlib.gif',
        caption: 'The user “completes” the sentence to provide the information needed.',
      },
      {
        type: 'text',
        text: 'This proved confusing and clunky. If a user went back to change an answer, the subsequent questions often changed on them, creating a confusing experience.',
      },
      { type: 'heading', level: 3, text: 'One-page long form' },
      {
        type: 'image',
        src: '/case-studies/cake-insure/04-longform.gif',
        caption: 'Based on answers to a set of core questions, the app revealed additional questions.',
      },
      {
        type: 'text',
        text: 'This created anxiety about how much information the user would ultimately have to provide, and the form itself caused cognitive overload.',
      },
      { type: 'heading', level: 3, text: 'Single-question flow' },
      {
        type: 'image',
        src: '/case-studies/cake-insure/05-single-question-flow.gif',
        caption: 'One question at a time, with a progress bar showing how far along the user was.',
      },
      {
        type: 'text',
        text: 'This worked best. The “blinder” of having one thing to focus on at a time solved the cognitive-overload issues, and the changing question flow was less confusing thanks to a more linear, logical pattern.',
      },
      { type: 'heading', text: 'The quote' },
      {
        type: 'text',
        text: 'This is the moment every user is trying to reach. “What would I have to pay?” and “Is this the coverage I need?” were the top questions users asked when they hit the quote page.',
      },
      { type: 'heading', level: 3, text: 'The personal touch' },
      {
        type: 'text',
        text: 'With all the information the user had provided, it was vital that the quote felt personalized to them. In the first round of testing, users pointed out that the quote loaded so fast it couldn’t be custom to them. Even though this was a simulated prototype, the Cake rating tool really could return a quote in a second or less.',
      },
      {
        type: 'image',
        src: '/case-studies/cake-insure/06-quote-page.png',
        caption: 'The quote page, with an artificial delay and social proof from existing customers.',
      },
      {
        type: 'text',
        text: 'To address this, I designed and tested an artificial delay as part of the quote process. It alleviated all concerns that the quote wasn’t personalized, and it let us introduce social proof in the form of reviews from existing customers.',
      },
      { type: 'heading', level: 3, text: 'Evolution of the quote page' },
      {
        type: 'text',
        text: 'The quote page holds a lot of information and controls that let users play with pricing and coverage, plus legal disclaimers and notices. The first MVP quote page ordered this from most to least important and tucked long disclaimers into modals to keep the page short.',
      },
      {
        type: 'text',
        text: 'As the team built more services for more complex customers, the MVP page began causing cognitive overload: users missed important controls and information. Adding a single feature to let users add a deductible, for example, left several test participants unable to find it at all. The page was also long, and it wasn’t always clear that changing coverages farther down affected the price, especially on mobile, where the price wasn’t visible while adjusting coverage.',
      },
      {
        type: 'text',
        text: 'To fix this, I tested several new versions of the quote page, including the original with the deductibles feature added, as a control:',
      },
      {
        type: 'image',
        src: '/case-studies/cake-insure/07-coverage.png',
        caption: 'Variations of the quote page tested to improve usability.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'I gauged how well participants understood the coverages and whether they read any of the copy. Earlier results showed cognitive overload, with users assuming coverage from section titles and larger, eye-catching items, so I tested a version where an info icon or “learn more” link surfaced detail on demand.',
          'With the deductibles feature, there were many ways to enter and change data. I explored coverage-selection controls that were more consistent with one another, to reduce how much users had to learn and relearn the interface.',
          'Since roughly 30% of Cake users were on mobile, I tested a sticky “buy now” button that stayed at the top of the page on mobile, with the price inside it so it was always visible. Users could quickly see how their coverage changes affected the price.',
        ],
      },
      { type: 'heading', level: 3, text: 'Learnings' },
      {
        type: 'text',
        text: 'User testing of these variations surfaced a few learnings that shaped the final design:',
      },
      {
        type: 'list',
        items: [
          'Introducing a video to explain coverages worked against the need for users to feel their quote was personalized.',
          'The version with visually chunked information and accordion-style cards let users focus on the customization controls while still knowing more information was available.',
          'When the customization controls were visually and functionally similar, users understood the page more quickly than when each control, individually more “appropriate,” was different.',
        ],
      },
      { type: 'heading', text: 'What would I change?' },
      {
        type: 'text',
        text: 'After launch, I gathered data, observed users in FullStory, and interviewed customers to understand their experience. I found opportunities to communicate better around coverage requirements (for the state and the industry) and to smooth the onboarding experience after someone purchased a policy.',
      },
      {
        type: 'image',
        src: '/case-studies/cake-insure/08-journey-map.jpg',
        caption: 'Journey map of the Cake quote flow.',
      },
      {
        type: 'text',
        text: 'Over time it also became clear that the ambiguous progress bar caused anxiety about when the app would stop asking questions. Given the chance, I’d test a progress bar focused more on showing progress through chunked-up sections.',
      },
      { type: 'heading', text: 'Results' },
      { type: 'image', src: '/case-studies/cake-insure/09-asset.png' },
      {
        type: 'text',
        text: 'Over the life of this product, my designs contributed to substantial NPS and conversion increases. It was re-themed and launched to support all direct business for Pinnacol Assurance in early 2020. In 2021 it was awarded 3rd place for “Best Mobile App” by AASCIF.',
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug)
}
