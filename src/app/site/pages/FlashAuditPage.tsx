import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { useContactForm, FormStatus } from '../contactForm';

export function FlashAuditPage() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: 'What do you need from us?', a: 'Access to the product (or a staging version), your goals and key metrics, and a 1-hour kickoff with the product owner.' },
    { q: 'Is it only for existing products?', a: 'No. For a new product we audit your prototype or concept against competitors and user expectations.' },
    { q: 'What happens after the audit?', a: 'You keep the report and can act on it alone. If you continue with Consulting or Delivery, the audit fee is deducted from the project.' },
    { q: 'Can you audit mobile apps?', a: 'Yes, web platforms, SaaS products and mobile apps on iOS and Android.' },
  ];
  const faqs = items.map((it, i) => ({
    ...it,
    open: open === i,
    expanded: open === i ? 'true' : 'false',
    icon: open === i ? '\u2212' : '+',
    toggle: () => setOpen(open === i ? -1 : i),
  }));
  const form = useContactForm({ name: '', email: '', company: '', url: '' }, (v) => ({
    name: v.name, email: v.email, company: v.company, projectType: 'UX Audit',
    message: `Flash Audit request. Product URL: ${v.url || '(not provided)'}`,
  }));
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="audit" />


<section style={{ background: "#F4EFE6", padding: "88px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
<div style={{ flex: "1 1 560px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "16px" }}>Consulting · Flash audit</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(34px, 4.03vw, 58px)", lineHeight: "1.06", letterSpacing: "-1.2px", color: "#1B1F2A", margin: "0 0 22px" }}>Product & UX Flash Audit</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 32px", maxWidth: "580px" }}>In 5 days we analyse your product, benchmark it against your sector and give you a prioritised plan of quick wins and structural fixes, presented live to your team.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "28px" }}>
<div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>5 days</div><div style={{ fontSize: "13px", color: "#6B7180" }}>From kickoff to report</div></div>
<div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>100%</div><div style={{ fontSize: "13px", color: "#6B7180" }}>Deducted if you continue</div></div>
</div>
</div>
<a href="#book" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "16px", padding: "18px 30px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Book your audit</a>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>What we look at</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>Product and UX, not just the interface.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Product fit & value</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Is the core promise clear, and does the product deliver it?</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Onboarding & conversion</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Where users drop off, and what stops them from activating.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Usability & flows</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Friction in key journeys, compared with your sector’s best.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Trust & compliance</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>KYC, consent and security moments that make or break trust.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Accessibility</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Contrast, structure and interaction against WCAG basics.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Design consistency</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>How ready your UI is for a scalable design system.</p></div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>How the 5 days run</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>One week. One clear plan.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "22px" }}><div style={{ fontSize: "13px", fontWeight: "700", color: "#B45309", marginBottom: "10px" }}>Day 1</div><h3 style={{ fontSize: "16px", margin: "0 0 6px" }}>Kickoff</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Goals, users, metrics and access to the product.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "22px" }}><div style={{ fontSize: "13px", fontWeight: "700", color: "#B45309", marginBottom: "10px" }}>Day 2–3</div><h3 style={{ fontSize: "16px", margin: "0 0 6px" }}>Analysis</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Expert review of key journeys and a sector benchmark.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "22px" }}><div style={{ fontSize: "13px", fontWeight: "700", color: "#B45309", marginBottom: "10px" }}>Day 4</div><h3 style={{ fontSize: "16px", margin: "0 0 6px" }}>Prioritisation</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Findings ranked by impact and effort into a roadmap.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "22px" }}><div style={{ fontSize: "13px", fontWeight: "700", color: "#B45309", marginBottom: "10px" }}>Day 5</div><h3 style={{ fontSize: "16px", margin: "0 0 6px" }}>Presentation</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>A 1-hour session with your team, plus the full report.</p></div>
</div>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "860px", margin: "0 auto" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 36px" }}>Questions</h2>
<div style={{ borderTop: "1px solid #E7E0D5" }}>
{faqs.map((q, $index) => (<React.Fragment key={$index}>
<div style={{ borderBottom: "1px solid #E7E0D5" }}>
<button type="button" onClick={q.toggle} aria-expanded={q.expanded} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", background: "none", border: "none", padding: "22px 0", fontFamily: "inherit", fontSize: "17px", fontWeight: "600", color: "#0F172A", textAlign: "left", cursor: "pointer", minHeight: "44px" }}>{q.q}<span aria-hidden="true" style={{ fontSize: "22px", color: "#64748B" }}>{q.icon}</span></button>
{q.open ? (<><p style={{ fontSize: "15px", lineHeight: "1.7", color: "#475569", margin: "0 0 22px", maxWidth: "720px" }}>{q.a}</p></>) : null}
</div>
</React.Fragment>))}
</div>
</div>
</section>


<section id="book" style={{ padding: "0 24px 104px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
<div style={{ flex: "1 1 380px", minWidth: "0" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 14px" }}>Book your Flash Audit</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>We reply within one business day to confirm dates and access.</p>
</div>
<form onSubmit={form.submit} style={{ flex: "1 1 480px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Name<input type="text" name="name" required value={form.values.name} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Work email<input type="email" name="email" required value={form.values.email} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Company<input type="text" name="company" value={form.values.company} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Product URL<input type="url" name="url" value={form.values.url} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<button type="submit" disabled={form.sending} style={{ gridColumn: "1 / -1", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", minHeight: "50px", border: "none", borderRadius: "10px", background: "#F59E0B", color: "#1B1F2A", cursor: "pointer" }}>{form.sending ? 'Sending\u2026' : 'Request my audit'}</button>
<FormStatus status={form.status} dark />
</form>
</div>
</section>

<Footer  />
</div>
  );
}
