import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { useContactForm, FormStatus } from '../contactForm';

export function ContactPage() {
  const [need, setNeed] = useState('Not sure yet');
  const opts = [
    { label: 'Product Consulting', hint: 'Vision, discovery, roadmap, UX audit or process improvement.' },
    { label: 'Product Delivery', hint: 'Design and build of a web platform, SaaS product or mobile app.' },
    { label: 'Team Augmentation', hint: 'A PM, designer or developer joining your team. Mention the role and duration.' },
    { label: 'Flash Audit', hint: '5 days, fixed price. Share your product URL below.' },
    { label: 'Training', hint: 'Sprint Academy trainings for your team or for you. Tell us which training and how many people.' },
    { label: 'Not sure yet', hint: 'No problem: describe your situation and we will suggest the best way to start.' },
  ];
  const sel = opts.find((o) => o.label === need);
  const needs = opts.map((o) => ({ label: o.label, on: o.label === need, off: o.label !== need, pick: () => setNeed(o.label) }));
  const hint = { show: !!sel, text: sel ? sel.hint : '' };
  const form = useContactForm({ name: '', email: '', company: '', stage: 'Idea / concept', message: '' }, (v) => ({
    name: v.name, email: v.email, company: v.company, projectType: need,
    message: `[Stage: ${v.stage}]\n${v.message}`,
  }));
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="contact" />

<section style={{ padding: "96px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px" }}>

<div style={{ flex: "1 1 380px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Contact</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(31px, 3.75vw, 54px)", lineHeight: "1.06", letterSpacing: "-1.2px", margin: "0 0 20px" }}>Let’s talk about your product.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#475569", margin: "0 0 40px" }}>Tell us where you are and what you need. We reply within one business day.</p>
<div style={{ display: "flex", flexDirection: "column", gap: "22px", borderTop: "1px solid #E7E0D5", paddingTop: "28px" }}>
<div><div style={{ fontSize: "13px", color: "#64748B", marginBottom: "4px" }}>Email</div><a href="mailto:contact@ndev.digital" style={{ fontSize: "17px", fontWeight: "600", textDecoration: "none" }}>contact@ndev.digital</a></div>
<div><div style={{ fontSize: "13px", color: "#64748B", marginBottom: "4px" }}>Phone</div><a href="tel:+21654882779" style={{ fontSize: "17px", fontWeight: "600", textDecoration: "none" }}>+216 54 882 779</a></div>
<div><div style={{ fontSize: "13px", color: "#64748B", marginBottom: "4px" }}>Studio</div><div style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>Immeuble Tamayouz, 1082<br />Centre Urbain Nord, Tunis</div></div>
</div>
<div style={{ marginTop: "36px", background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "22px" }}>
<div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>Not sure where to start?</div>
<p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0 0 10px" }}>A 5-day Flash Audit gives you a clear plan with no long commitment.</p>
<a href="/flash-audit" style={{ fontSize: "14px", fontWeight: "600", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>See the Flash Audit</a>
</div>
</div>

<form onSubmit={form.submit} style={{ flex: "1 1 560px", minWidth: "0", border: "1px solid #E7E0D5", borderRadius: "20px", padding: "40px", display: "flex", flexDirection: "column", gap: "26px" }}>
<fieldset style={{ border: "none", margin: "0", padding: "0" }}>
<legend style={{ fontSize: "15px", fontWeight: "600", marginBottom: "12px", padding: "0" }}>What do you need?</legend>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{needs.map((n, $index) => (<React.Fragment key={$index}>
{n.on ? (<><button type="button" onClick={n.pick} aria-pressed="true" style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "600", minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid #1B1F2A", background: "#1B1F2A", color: "#FFFFFF", cursor: "pointer" }}>{n.label}</button></>) : null}
{n.off ? (<><button type="button" onClick={n.pick} aria-pressed="false" style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "500", minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#334155", cursor: "pointer" }}>{n.label}</button></>) : null}
</React.Fragment>))}
</div>
{hint.show ? (<><p style={{ fontSize: "13px", color: "#64748B", margin: "12px 0 0" }}>{hint.text}</p></>) : null}
</fieldset>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>Full name *<input type="text" name="name" required value={form.values.name} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>Work email *<input type="email" name="email" required value={form.values.email} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>Company<input type="text" name="company" value={form.values.company} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>Product stage
<select name="stage" value={form.values.stage} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 12px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#0F172A" }}>
<option>Idea / concept</option>
<option>MVP in progress</option>
<option>Live product</option>
<option>Scaling product</option>
</select></label>
</div>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>Tell us about your product *<textarea name="message" rows={5} required value={form.values.message} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", padding: "12px 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", resize: "vertical" }}></textarea></label>
<button type="submit" disabled={form.sending} style={{ fontFamily: "inherit", fontSize: "15px", fontWeight: "600", minHeight: "52px", border: "none", borderRadius: "10px", background: "#F59E0B", color: "#1B1F2A", cursor: "pointer" }}>{form.sending ? 'Sending\u2026' : 'Send message'}</button>
<FormStatus status={form.status} />
</form>

</div>
</section>

<Footer  />
</div>
  );
}
