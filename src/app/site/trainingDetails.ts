/**
 * Detail content for each Sprint Academy training page (by slug).
 * Structure inspired by academy.thiga.co: objectives, audience,
 * prerequisites, programme by module.
 */
export type Objective = { key: string; text: string };
export type Module = { title: string; points: string[] };
export type TrainingDetail = {
  objectives: Objective[];
  audience: string;
  prereq: string;
  modules: Module[];
};

export const DETAILS: Record<string, TrainingDetail> = {
  'product-management': {
    objectives: [
      { key: 'Discovery', text: 'Understand users and problems before deciding what to build.' },
      { key: 'Strategy', text: 'Turn a product vision into clear goals the team can act on.' },
      { key: 'Roadmap', text: 'Build an outcome-based roadmap and keep stakeholders aligned.' },
      { key: 'Metrics', text: 'Measure what matters and learn from product data.' },
    ],
    audience: 'Product managers, product owners moving into a PM role, founders and business leads who own a product.',
    prereq: 'Some experience in a product, project or business role.',
    modules: [
      { title: 'The product manager’s job', points: ['Role and responsibilities of a PM', 'Product vision and product goal', 'Working with design and engineering'] },
      { title: 'Discovery', points: ['User research and interviews', 'Framing problems and opportunities', 'Testing ideas with prototypes and experiments'] },
      { title: 'Strategy and roadmap', points: ['From vision to objectives', 'Outcome-based roadmaps', 'Prioritisation and stakeholder alignment'] },
      { title: 'Measure and learn', points: ['Choosing product metrics', 'North star and leading indicators', 'Turning data into decisions'] },
    ],
  },
  'product-ownership': {
    objectives: [
      { key: 'Product goal', text: 'Align stakeholders around a product goal and a roadmap.' },
      { key: 'Backlog', text: 'Write user stories and acceptance criteria developers can build from.' },
      { key: 'Prioritisation', text: 'Prioritise a backlog by value, risk and effort.' },
      { key: 'Outcomes', text: 'Run sprint reviews that focus on outcomes, not output.' },
    ],
    audience: 'New or aspiring product owners, business analysts and project managers moving into product roles.',
    prereq: 'None. Basic knowledge of Scrum helps.',
    modules: [
      { title: 'The product owner’s role', points: ['Vision and product goal', 'The PO in Scrum', 'Working with the team and stakeholders'] },
      { title: 'From need to backlog', points: ['Story mapping', 'User stories and acceptance criteria', 'Splitting stories'] },
      { title: 'Prioritise and measure', points: ['Prioritisation methods', 'Release planning', 'Product metrics'] },
    ],
  },
  'scrum-master': {
    objectives: [
      { key: 'Facilitation', text: 'Run Scrum events that are short, useful and focused.' },
      { key: 'Coaching', text: 'Help the team grow towards self-management.' },
      { key: 'Flow', text: 'Spot and remove what slows delivery down.' },
      { key: 'Improvement', text: 'Make continuous improvement a team habit.' },
    ],
    audience: 'New Scrum Masters, team leads, project managers moving to agile, and anyone facilitating a delivery team.',
    prereq: 'None. Experience in a delivery team helps.',
    modules: [
      { title: 'Scrum foundations', points: ['Values, accountabilities and artefacts', 'The Scrum Master’s stance', 'Common anti-patterns'] },
      { title: 'Facilitating Scrum events', points: ['Sprint planning and daily scrum', 'Sprint review', 'Retrospective formats'] },
      { title: 'Coaching the team', points: ['Team dynamics and conflict', 'Supporting self-management', 'Working with the product owner'] },
      { title: 'Improving delivery', points: ['Impediments and escalation', 'Flow metrics', 'Working with stakeholders and management'] },
    ],
  },
  'product-design-ux-in-scrum-teams': {
    objectives: [
      { key: 'Research', text: 'Run lightweight user research inside the sprint rhythm.' },
      { key: 'Dual-track', text: 'Organise discovery and delivery so design stays ahead.' },
      { key: 'Collaboration', text: 'Work hand in hand with the product owner and developers.' },
      { key: 'Design system', text: 'Use and grow a shared design system.' },
    ],
    audience: 'UX, UI and product designers, and product owners or developers who work with designers.',
    prereq: 'Basic knowledge of design or product work.',
    modules: [
      { title: 'Design in an agile team', points: ['The designer’s role in Scrum', 'Dual-track discovery and delivery', 'Design in the definition of done'] },
      { title: 'Research inside sprints', points: ['Lean research and interviews', 'Usability testing', 'Sharing insights with the team'] },
      { title: 'From idea to design', points: ['Ideation and prototyping', 'Design reviews', 'Handoff and working with developers'] },
      { title: 'Design systems', points: ['Using components and tokens', 'Creating and documenting components', 'Keeping the system alive'] },
    ],
  },
  'qa-in-product-teams': {
    objectives: [
      { key: 'Strategy', text: 'Build a test strategy that fits your product and risks.' },
      { key: 'Shared quality', text: 'Make quality the whole team’s job, not a final step.' },
      { key: 'Automation', text: 'Know what to automate and where to start.' },
      { key: 'Definition of done', text: 'Agree on what done really means for your team.' },
    ],
    audience: 'QA engineers and testers, developers, product owners and Scrum Masters.',
    prereq: 'Experience in a software or product team.',
    modules: [
      { title: 'Quality as a team habit', points: ['Whole-team approach to quality', 'Definition of done', 'Acceptance criteria that can be tested'] },
      { title: 'Test strategy', points: ['The test pyramid', 'Risk-based testing', 'Exploratory testing'] },
      { title: 'Automation basics', points: ['What to automate first', 'Overview of tools', 'Tests in continuous integration'] },
      { title: 'Quality in the sprint', points: ['Bug triage and prioritisation', 'Quality metrics', 'Improving with the team'] },
    ],
  },
  'cyber-security-team-awareness': {
    objectives: [
      { key: 'Recognise', text: 'Spot phishing and social engineering attempts.' },
      { key: 'Protect', text: 'Secure accounts with strong passwords and two-factor authentication.' },
      { key: 'Handle data', text: 'Handle sensitive and personal data safely.' },
      { key: 'React', text: 'Know what to do and who to tell when something looks wrong.' },
    ],
    audience: 'Every member of your team, technical or not.',
    prereq: 'None.',
    modules: [
      { title: 'Why it matters', points: ['Common attacks on companies', 'Why people are the main target', 'Real-life examples'] },
      { title: 'Phishing and social engineering', points: ['Suspicious emails and messages', 'Phone and in-person tricks', 'Checking before clicking'] },
      { title: 'Passwords and access', points: ['Strong passwords and password managers', 'Two-factor authentication', 'Sharing access safely'] },
      { title: 'Data protection and safe habits', points: ['Handling sensitive data', 'Devices, remote work and public networks', 'Reporting an incident'] },
    ],
  },
  'ai-engineering': {
    objectives: [
      { key: 'LLMs', text: 'Understand what language models can and cannot do.' },
      { key: 'Building', text: 'Build AI features with prompting, tools and retrieval.' },
      { key: 'Evaluation', text: 'Measure the quality of AI features before and after release.' },
      { key: 'AI-assisted development', text: 'Use AI tools in your development workflow.' },
    ],
    audience: 'Developers, tech leads and technical product owners building AI features.',
    prereq: 'Programming experience, for example in Python or JavaScript.',
    modules: [
      { title: 'LLM foundations', points: ['How language models work', 'Capabilities and limits', 'Choosing a model'] },
      { title: 'Prompting and tools', points: ['Prompt design', 'Structured outputs', 'Tool use and agents'] },
      { title: 'Retrieval', points: ['Retrieval-augmented generation', 'Embeddings and vector search', 'Grounding answers in your data'] },
      { title: 'Evaluation and production', points: ['Evaluating quality', 'Cost, latency and safety', 'AI-assisted development workflows'] },
    ],
  },
};

export const FAQ = [
  { q: 'How do I register for a public session?', a: 'Open the Public session tab, pick a date and request your seat. We confirm by email with the price and practical details. If no date is open yet, leave your details and we will tell you when the next one is scheduled.' },
  { q: 'Can you run this training for my team?', a: 'Yes. We run private sessions for your team, at your office, in Tunis or remotely. Choose For my team and tell us how many people to train.' },
  { q: 'Can the programme be adapted?', a: 'Yes. For team sessions we adapt examples and exercises to your product, and we can combine several trainings into one programme.' },
  { q: 'Does this training lead to a certificate?', a: 'Yes. Each participant receives an NDev Sprint Academy certificate at the end of the training.' },
  { q: 'In which language is it taught?', a: 'In French or English, depending on the group.' },
];
