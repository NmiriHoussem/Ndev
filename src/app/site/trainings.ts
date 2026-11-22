const RAW = [
      { cat: 'Product', title: 'Product Management', desc: 'Vision, discovery, user research, roadmap and metrics: the full job of a product manager.', tags: ['Discovery', 'Roadmap', 'Metrics'], level: 'Foundation → Advanced', isNew: false },
      { cat: 'Product', title: 'Product Ownership', desc: 'Turn strategy into a valuable backlog: user stories, prioritisation and stakeholder alignment.', tags: ['Backlog', 'User stories', 'Prioritisation'], level: 'Foundation', isNew: false },
      { cat: 'Agile & Scrum', title: 'Scrum Master', desc: 'Facilitate Scrum events, coach the team and remove what slows delivery.', tags: ['Facilitation', 'Scrum events', 'Coaching'], level: 'Foundation', isNew: false },
      { cat: 'Design & UX', title: 'Product Design & UX in Scrum Teams', desc: 'Run research and design inside sprints, with dual-track discovery and a shared design system.', tags: ['Dual-track', 'Design systems', 'UX research'], level: 'Intermediate', isNew: false },
      { cat: 'Quality', title: 'QA in Product Teams', desc: 'Make quality a team habit: test strategy, definition of done and automation basics.', tags: ['Test strategy', 'Automation', 'Definition of done'], level: 'Intermediate', isNew: false },
      { cat: 'Security', title: 'Cyber Security Team Awareness', desc: 'Help everyone in your team recognise and prevent threats: phishing, passwords and access, data protection and safe everyday habits.', tags: ['Phishing', 'Data protection', 'Safe habits'], level: 'All levels', isNew: true },
      { cat: 'AI', title: 'AI Engineering', desc: 'Build AI features into real products: LLMs, prompting, retrieval, evaluation and AI-assisted development.', tags: ['LLMs', 'RAG', 'Evaluation'], level: 'Intermediate → Advanced', isNew: true }
    ];

export const TRAININGS = RAW.map((t) => ({
  ...t,
  slug: t.title.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
}));

export function findTraining(slug: string) {
  return TRAININGS.find((t) => t.slug === slug);
}
