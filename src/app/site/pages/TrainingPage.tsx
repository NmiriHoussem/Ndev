import React, { useState } from 'react';
import { CertBadge } from '../CertBadge';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { TrainingForm } from '../TrainingForm';
import { TRAININGS, findTraining } from '../trainings';
import { sessionsFor } from '../sessions';
import { DETAILS, FAQ } from '../trainingDetails';

export function TrainingPage({ slug }: { slug: string }) {
  const training = findTraining(slug) ?? findTraining('product-ownership')!;
  const d = DETAILS[training.slug] ?? DETAILS['product-ownership'];
  const objectives = d.objectives;
  const audience = d.audience;
  const prereq = d.prereq;
  const modules = d.modules.map((m, i) => ({ ...m, label: `Module ${i + 1}` }));
  const faqs = FAQ;
  const [tab, setTab] = useState('public');
  const tabsDef = [{ id: 'public', label: 'Public session' }, { id: 'team', label: 'For my team' }];
  const sessions = sessionsFor(training.slug);
  const hasSessions = sessions.length > 0;
  const noSessions = !hasSessions;
  const tabs = tabsDef.map((x) => ({ label: x.label, on: x.id === tab, off: x.id !== tab, pick: () => setTab(x.id) }));
  const isTeam = tab === 'team';
  const isPublic = tab === 'public';
  const others = TRAININGS.filter((t) => t.slug !== training.slug);
  const related = [...others.filter((t) => t.cat === training.cat), ...others.filter((t) => t.cat !== training.cat)].slice(0, 3);
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="academy" />


<section style={{ background: "#F4EFE6", padding: "48px 24px 72px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<nav aria-label="Breadcrumb" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "14px", color: "#6B7180", marginBottom: "28px" }}><a href="/academy" style={{ color: "#4A5160", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Academy</a><span aria-hidden="true">/</span><a href="/academy" style={{ color: "#4A5160", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>{training.cat}</a><span aria-hidden="true">/</span><span style={{ color: "#1B1F2A" }}>{training.title}</span></nav>
<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 16px", marginBottom: "18px" }}><h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(35px, 4.17vw, 60px)", lineHeight: "1.05", letterSpacing: "-1.3px", color: "#1B1F2A", margin: "0" }}>{training.title}</h1><span style={{ fontSize: "13px", color: "#92400E", background: "#FBEFD9", border: "1px solid #EEDDBF", borderRadius: "999px", padding: "6px 12px", fontWeight: "600" }}>Certified</span></div>
<p style={{ fontSize: "19px", lineHeight: "1.65", color: "#4A5160", margin: "0 0 36px", maxWidth: "680px" }}>{training.desc}</p>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "#E4DCCF", border: "1px solid #E4DCCF", borderRadius: "14px", overflow: "hidden", maxWidth: "860px" }}>
<div style={{ background: "#FFFFFF", padding: "18px 20px" }}><div style={{ fontSize: "13px", color: "#6B7180", marginBottom: "4px" }}>Level</div><div style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>{training.level}</div></div>
<div style={{ background: "#FFFFFF", padding: "18px 20px" }}><div style={{ fontSize: "13px", color: "#6B7180", marginBottom: "4px" }}>Format</div><div style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>On-site or remote</div></div>
<div style={{ background: "#FFFFFF", padding: "18px 20px" }}><div style={{ fontSize: "13px", color: "#6B7180", marginBottom: "4px" }}>Language</div><div style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>French · English</div></div>
<div style={{ background: "#FFFFFF", padding: "18px 20px" }}><div style={{ fontSize: "13px", color: "#6B7180", marginBottom: "4px" }}>Certificate</div><div style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>Included</div></div>
</div>
</div>
</section>


<section style={{ padding: "88px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start" }}>

<div style={{ flex: "999 1 600px", minWidth: "0", display: "flex", flexDirection: "column", gap: "72px" }}>

<div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(17px, 2.08vw, 30px)", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 20px" }}>Training objectives</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
{objectives.map((o, $index) => (<React.Fragment key={$index}>
<div style={{ background: "#FBF5EA", borderRadius: "12px", padding: "20px" }}><div style={{ fontSize: "16px", fontWeight: "600", color: "#1B1F2A", marginBottom: "6px" }}>{o.key}</div><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5160", margin: "0" }}>{o.text}</p></div>
</React.Fragment>))}
</div>
</div>

<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
<div><h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 12px" }}>Who should attend?</h2><p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>{audience}</p></div>
<div><h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 12px" }}>Prerequisites</h2><p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>{prereq}</p></div>
</div>

<div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(17px, 2.08vw, 30px)", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 20px" }}>Training programme</h2>
<div style={{ borderTop: "1px solid #E7E0D5" }}>
{modules.map((m, $index) => (<React.Fragment key={$index}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", padding: "24px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", minWidth: "88px" }}>{m.label}</span>
<div style={{ flex: "1 1 400px" }}><h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 10px" }}>{m.title}</h3>
<ul style={{ margin: "0", padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "15px", lineHeight: "1.55", color: "#4A5160" }}>
{m.points.map((pt, $index) => (<React.Fragment key={$index}><li>{pt}</li></React.Fragment>))}
</ul></div>
</div>
</React.Fragment>))}
</div>
</div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "space-between", background: "#FBF5EA", border: "1px solid #EEDDBF", borderRadius: "16px", padding: "28px" }}>
<div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "24px", fontWeight: "500", color: "#1B1F2A", marginBottom: "4px" }}>Interested?</div><p style={{ fontSize: "15px", color: "#4A5160", margin: "0" }}>Join a public session or bring this training to your team.</p></div>
<a href="#training-request" data-format="public" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Request this training</a>
</div>

<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px", background: "#FFFFFF", border: "1px solid #EEDDBF", borderRadius: "16px", padding: "28px" }}>
<CertBadge title={training.title} />
<div style={{ flex: "1 1 280px", minWidth: "0" }}><h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 12px" }}>Certification</h2><p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 10px" }}>On completion, each participant receives the NDev Sprint Academy certificate for <strong style={{ color: "#1B1F2A" }}>{training.title}</strong>.</p><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#6B7180", margin: "0" }}>Share it on LinkedIn or add it to your CV.</p></div>
</div>

<div><h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 12px" }}>Our trainers</h2><p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>NDev product managers, designers and engineers who work on client products, and teach from real cases.</p></div>

<div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(17px, 2.08vw, 30px)", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 20px" }}>Frequently asked questions</h2>
<div style={{ borderTop: "1px solid #E7E0D5" }}>
{faqs.map((f, $index) => (<React.Fragment key={$index}>
<details style={{ borderBottom: "1px solid #E7E0D5" }}><summary style={{ cursor: "pointer", padding: "18px 0", fontSize: "16px", fontWeight: "600", color: "#1B1F2A", minHeight: "44px", boxSizing: "border-box" }}>{f.q}</summary><p style={{ fontSize: "15px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 18px" }}>{f.a}</p></details>
</React.Fragment>))}
</div>
</div>

</div>


<aside style={{ flex: "1 1 340px", minWidth: "0", position: "sticky", top: "24px", border: "1px solid #E7E0D5", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px", background: "#FFFFFF" }}>
<div role="tablist" aria-label="Format" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", background: "#F3EEE6", borderRadius: "10px", padding: "4px" }}>
{tabs.map((tb, $index) => (<React.Fragment key={$index}>
{tb.on ? (<><button type="button" role="tab" aria-selected="true" onClick={tb.pick} style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "600", minHeight: "44px", border: "none", borderRadius: "8px", background: "#FFFFFF", color: "#0F172A", cursor: "pointer", boxShadow: "0 1px 2px rgba(15,23,42,.08)" }}>{tb.label}</button></>) : null}
{tb.off ? (<><button type="button" role="tab" aria-selected="false" onClick={tb.pick} style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "500", minHeight: "44px", border: "none", borderRadius: "8px", background: "transparent", color: "#475569", cursor: "pointer" }}>{tb.label}</button></>) : null}
</React.Fragment>))}
</div>
{isPublic ? (<>
<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#1B1F2A" }}>Upcoming public sessions</div>
{hasSessions ? (<>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
{sessions.map((s, $index) => (<React.Fragment key={$index}>
<a href="#training-request" data-format="public" data-session={s.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", border: "1px solid #E7E0D5", borderRadius: "10px", padding: "12px 14px", minHeight: "56px", boxSizing: "border-box", textDecoration: "none", color: "#1B1F2A" }}>
<span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "15px", fontWeight: "600" }}>{s.date}</span><span style={{ fontSize: "13px", color: "#64748B" }}>{s.place}</span></span>
<span style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", whiteSpace: "nowrap" }}>Enroll →</span>
</a>
</React.Fragment>))}
</div>
<p style={{ fontSize: "13px", lineHeight: "1.6", color: "#64748B", margin: "0" }}>Price on request. Pick a date to request your seat.</p>
</>) : null}
{noSessions ? (<>
<p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Leave your details and we will tell you as soon as the next date opens.</p>
<a href="#training-request" data-format="public" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", minHeight: "50px", borderRadius: "10px" }}>Get notified of the next session</a>
</>) : null}
</div>
</>) : null}
{isTeam ? (<>
<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "28px", fontWeight: "500" }}>On quote</div>
<p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Private session for your team, adapted to your product. At your office, in Tunis or remote.</p>
<a href="#training-request" data-format="team" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", minHeight: "50px", borderRadius: "10px" }}>Request a team session</a>
</div>
</>) : null}
<p style={{ fontSize: "13px", color: "#64748B", margin: "0", borderTop: "1px solid #F3EEE6", paddingTop: "14px" }}>Questions? <a href="mailto:contact@ndev.digital" style={{ fontWeight: "600" }}>contact@ndev.digital</a></p>
</aside>

</div>
</section>


<section style={{ background: "#FBF5EA", borderTop: "1px solid #EEDDBF", padding: "80px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "28px", margin: "0 0 28px" }}>Related trainings</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
{related.map((r) => (<a key={r.slug} href={`/academy/${r.slug}`} style={{ textDecoration: "none", color: "inherit", background: "#FFFFFF", border: "1px solid #EEDDBF", borderRadius: "14px", padding: "22px" }}><div style={{ fontSize: "13px", fontWeight: "600", color: "#B45309", marginBottom: "8px" }}>{r.cat}</div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "20px", fontWeight: "500" }}>{r.title}</div><div style={{ fontSize: "13px", color: "#6B7180", marginTop: "8px" }}>{r.level}</div></a>))}
</div>
</div>
</section>

<TrainingForm training={training.title} sessions={sessions} format="public" />

<Footer  />
</div>
  );
}
