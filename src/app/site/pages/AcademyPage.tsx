import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { TrainingForm } from '../TrainingForm';
import { TRAININGS } from '../trainings';

export function AcademyPage() {
  const [filter, setFilter] = useState('All');
  const labels = ['All', 'Product', 'Agile & Scrum', 'Design & UX', 'Quality', 'Security', 'AI'];
  const filters = labels.map((l) => ({ label: l, on: l === filter, off: l !== filter, pick: () => setFilter(l) }));
  const trainings = filter === 'All' ? TRAININGS : TRAININGS.filter((t) => t.cat === filter);
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="academy" />


<section className="nd-academy-scene" style={{ backgroundColor: "#F4EFE6", backgroundSize: "cover", backgroundPosition: "center right", padding: "112px 24px 120px", borderBottom: "1px solid #E4DCCF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ maxWidth: "620px" }}>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(35px, 4.17vw, 60px)", lineHeight: "1.05", letterSpacing: "-1.3px", color: "#1B1F2A", margin: "0 0 22px" }}>Train your teams to build products <span style={{ color: "#B45309" }}>the way we do.</span></h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 34px", maxWidth: "600px" }}>Hands-on trainings in product management, Scrum, UX, quality, cybersecurity and AI, for teams and professionals. Taught by NDev practitioners who ship products every week.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="#catalog" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Find a training</a>
<a href="#training-request" style={{ display: "inline-flex", alignItems: "center", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", border: "1px solid rgba(27,31,42,.25)", minHeight: "44px", boxSizing: "border-box" }}>Train my team</a>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "32px", marginTop: "40px" }}>
<div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>7</div><div style={{ fontSize: "13px", color: "#4A5160" }}>Trainings</div></div>
<div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>3</div><div style={{ fontSize: "13px", color: "#4A5160" }}>Formats: team, public, custom</div></div>
<div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>FR · EN</div><div style={{ fontSize: "13px", color: "#4A5160" }}>On-site or remote</div></div>
</div>
</div>
</div>
</section>


<section id="catalog" style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "32px" }}>
<div>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Training catalog</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(24px, 2.92vw, 42px)", lineHeight: "1.1", letterSpacing: "-.9px", margin: "0" }}>Every role in a product team.</h2>
</div>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", margin: "0", maxWidth: "400px" }}>Practical, case-based and ready to apply the next day. Each training ends with an NDev Sprint Academy certificate.</p>
</div>
<div role="group" aria-label="Filter trainings" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
{filters.map((f, $index) => (<React.Fragment key={$index}>
{f.on ? (<><button type="button" onClick={f.pick} aria-pressed="true" style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "600", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #1B1F2A", background: "#1B1F2A", color: "#FFFFFF", cursor: "pointer" }}>{f.label}</button></>) : null}
{f.off ? (<><button type="button" onClick={f.pick} aria-pressed="false" style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "500", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#334155", cursor: "pointer" }}>{f.label}</button></>) : null}
</React.Fragment>))}
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
{trainings.map((t, $index) => (<React.Fragment key={$index}>
<a href={`/academy/${t.slug}`} style={{ textDecoration: "none", color: "inherit", border: "1px solid #E7E0D5", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px", background: "#FFFFFF" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
<span style={{ fontSize: "14px", fontWeight: "600", color: "#B45309" }}>{t.cat}</span>
{t.isNew ? (<><span style={{ fontSize: "12px", fontWeight: "700", color: "#1B1F2A", background: "#F6D58E", borderRadius: "999px", padding: "3px 10px" }}>New</span></>) : null}
</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", lineHeight: "1.2", margin: "0" }}>{t.title}</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>{t.desc}</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
{t.tags.map((tag, $index) => (<React.Fragment key={$index}><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>{tag}</span></React.Fragment>))}
</div>
</a>
</React.Fragment>))}
</div>
</div>
</section>


<section id="teams" style={{ background: "#FBF5EA", borderTop: "1px solid #EEDDBF", borderBottom: "1px solid #EEDDBF", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Formats</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(24px, 2.92vw, 42px)", lineHeight: "1.1", letterSpacing: "-.9px", margin: "0 0 48px" }}>For your whole team, or just for you.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
<div style={{ background: "#FFFFFF", border: "2px solid #F59E0B", borderRadius: "16px", padding: "30px" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#B45309", marginBottom: "10px" }}>Most requested</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", margin: "0 0 10px" }}>In-company training</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 18px" }}>A private session for your team, adapted to your product and context. At your office, in Tunis or remote.</p>
<a href="#training-request" data-format="team" style={{ fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Request a team session</a>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #EEDDBF", borderRadius: "16px", padding: "31px" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#64748B", marginBottom: "10px" }}>For professionals</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", margin: "0 0 10px" }}>Public sessions</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 18px" }}>Join a small group of professionals from other companies on a scheduled date.</p>
<a href="#training-request" data-format="public" style={{ fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Register your interest</a>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #EEDDBF", borderRadius: "16px", padding: "31px" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#64748B", marginBottom: "10px" }}>Made to measure</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "24px", margin: "0 0 10px" }}>Upskilling programmes</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 18px" }}>Multi-training paths for a team or department, including AI adoption, combined with on-the-job coaching.</p>
<a href="/consulting" style={{ fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Pair it with coaching</a>
</div>
</div>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px" }}>
<div style={{ flex: "1 1 400px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>How we teach</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(24px, 2.92vw, 42px)", lineHeight: "1.1", letterSpacing: "-.9px", margin: "0 0 18px" }}>Taught by practitioners, not presenters.</h2>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#475569", margin: "0" }}>Our trainers are the product managers, designers and engineers who deliver NDev’s consulting and product work.</p>
</div>
<div style={{ flex: "1 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px 32px" }}>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Real cases</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Exercises built from banking, fintech and SaaS products we worked on.</p></div>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Small groups</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Workshops, not lectures, so everyone practises.</p></div>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Your own product</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>In-company sessions use your backlog, your users and your tools.</p></div>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Certificate</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>An NDev Sprint Academy certificate after a final assessment.</p></div>
</div>
</div>
</section>


<section style={{ background: "#EDE5D8", padding: "96px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
<div style={{ flex: "1 1 520px", minWidth: "0", maxWidth: "760px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>They trained with us</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(19px, 2.22vw, 32px)", lineHeight: "1.2", color: "#1B1F2A", margin: "0 0 14px" }}>Scheidt & Bachmann Group</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>UX/UI training and coaching for their team, helping them design and build the UX/UI of their application.</p>
</div>
</div>
</section>

<TrainingForm format="public" />

<Footer  />
</div>
  );
}
