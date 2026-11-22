/**
 * Public (inter-company) sessions shown on each training page.
 * Private team sessions are never listed here.
 *
 * Add a session under the training's slug, e.g.:
 *   'scrum-master': [
 *     { date: '12–14 January 2027', place: 'Tunis · On-site' },
 *     { date: '9–11 February 2027', place: 'Remote' },
 *   ],
 * Slugs: product-management, product-ownership, scrum-master,
 * product-design-ux-in-scrum-teams, qa-in-product-teams,
 * cyber-security-team-awareness, ai-engineering
 */
export type PublicSession = { date: string; place: string };

export const SESSIONS: Record<string, PublicSession[]> = {};

export function sessionsFor(slug: string) {
  return (SESSIONS[slug] ?? []).map((s) => ({ ...s, label: `${s.date} · ${s.place}` }));
}
