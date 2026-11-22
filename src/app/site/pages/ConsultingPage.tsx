import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import logoZitounaBank from '../../../assets/clients/zitouna-bank.webp';

export function ConsultingPage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="consulting" />


<section style={{ background: "#F4EFE6", padding: "88px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-end" }}>
<div style={{ flex: "1 1 560px", minWidth: "0" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#B45309", marginBottom: "20px" }}>01 · Product Consulting</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(34px, 4.03vw, 58px)", lineHeight: "1.06", letterSpacing: "-1.2px", color: "#1B1F2A", margin: "0 0 22px" }}>Know what to build, and why, before you build it.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 32px", maxWidth: "580px" }}>Product vision, discovery and UX expertise for teams who need direction. We help you choose the right problems, shape the experience and set up your teams to deliver.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Discuss your product</a>
<a href="/flash-audit" style={{ display: "inline-flex", alignItems: "center", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", border: "1px solid rgba(27,31,42,.25)", minHeight: "44px", boxSizing: "border-box" }}>Start with a Flash Audit</a>
</div>
</div>
<div style={{ flex: "1 1 340px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "14px", padding: "28px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#6B7180", marginBottom: "16px" }}>Best for</div>
<ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px", color: "#1B1F2A", lineHeight: "1.5" }}>
<li>Founders shaping a new product or SaaS</li>
<li>Scale-ups whose roadmap has lost focus</li>
<li>Banks and institutions modernising a digital service</li>
<li>Teams whose product process slows delivery</li>
<li>Organisations adopting AI in their product teams</li>
</ul>
</div>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>When teams call us</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px", maxWidth: "720px" }}>You need consulting when the question is “what”, not “how”.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>The roadmap is a wish list</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Everything is a priority, so nothing ships with impact.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Users don’t adopt it</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Sign-ups stall, onboarding leaks, support tickets grow.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>An idea, no product yet</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>You need a clear vision and a validated MVP scope before investing.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Teams work, product doesn’t move</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Rituals, roles and handoffs get in the way of outcomes.</p></div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>What’s included</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>Eight areas of expertise.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "0", borderTop: "1px solid #E7E0D5" }}>

<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>01</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>Product vision & strategy</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>A clear vision, target users and business goals your whole team can repeat.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: vision statement, product strategy, success metrics</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>02</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>Discovery & UX research</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>Interviews, journeys and prototype tests to find what users need and will pay for.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: research insights, journey maps, tested prototype</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>03</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>Roadmap & prioritisation</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>An outcome-based roadmap with an honest MVP scope and clear trade-offs.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: roadmap, MVP scope, prioritised backlog</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>04</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>UX audit</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>Your product benchmarked against your sector, with friction and compliance gaps ranked.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: audit report, quick wins, structural fixes</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>05</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>Product process improvement</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>Roles, rituals and tooling that help your teams ship outcomes, not just tickets.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: operating model, team playbook, coaching</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>06</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>AI product strategy</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>Where AI creates real value in your product, and how to design it so users trust it.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: AI opportunity map, use-case priorities, UX principles</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>07</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>AI adoption in teams</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>Bring AI into the daily work of your product, design and engineering teams: use cases, tools, guardrails and new ways of working.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: adoption roadmap, team playbooks, hands-on coaching</p></div>
</div>
<div style={{ display: "flex", gap: "20px", padding: "28px 24px 28px 0", borderBottom: "1px solid #E7E0D5" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "15px", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>08</span>
<div><h3 style={{ fontSize: "19px", margin: "0 0 8px" }}>Transformation coaching</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 10px" }}>Coaching leaders and teams through an agile, product or AI transformation until new habits stick.</p><p style={{ fontSize: "13px", color: "#64748B", margin: "0" }}>You get: coaching plan, team and leadership coaching, progress reviews</p></div>
</div>

</div>
<p style={{ fontSize: "15px", color: "#475569", margin: "28px 0 0" }}>Need to train your teams too? See <a href="/academy" style={{ fontWeight: "600", color: "#B45309" }}>NDev Sprint Academy</a>, our training programmes.</p>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>How it runs</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>Three formats, depending on what you need.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "28px" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#64748B", marginBottom: "10px" }}>5 days · fixed price</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0 0 10px" }}>Flash Audit</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 18px" }}>A prioritised view of your product and UX in 5 days, with quick wins and structural fixes.</p>
<a href="/flash-audit" style={{ fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>See the audit</a>
</div>
<div style={{ border: "2px solid #F59E0B", borderRadius: "14px", padding: "27px" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#B45309", marginBottom: "10px" }}>Defined scope</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0 0 10px" }}>Product Sprint</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 18px" }}>Vision, discovery and roadmap on one focused question, ending with a decision-ready plan.</p>
<a href="/contact" style={{ fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Plan a sprint</a>
</div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "28px" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#64748B", marginBottom: "10px" }}>Monthly · ongoing</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0 0 10px" }}>Product Advisory</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 18px" }}>A senior product partner for your leadership: reviews, coaching and key decisions.</p>
<a href="/contact" style={{ fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Talk to us</a>
</div>
</div>
</div>
</section>


<section style={{ background: "#EDE5D8", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
<div style={{ flex: "1 1 480px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Case example</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(20px, 2.36vw, 34px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 16px" }}>Zitouna Bank: KYC onboarding, rethought end to end.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 24px" }}>We audited the existing onboarding, mapped the KYC journey with users and compliance, then designed a fully digital flow customers actually complete.</p>
<a href="/work/zitouna-bank-kyc" style={{ color: "#B45309", fontWeight: "600", fontSize: "15px", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Read the case study</a>
</div>
<div style={{ flex: "1 1 380px", minWidth: "0", aspectRatio: "16 / 9", background: "#FFFFFF", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", boxSizing: "border-box" }}><img src={logoZitounaBank} alt="Banque Zitouna" style={{ maxHeight: "80px", maxWidth: "70%", objectFit: "contain" }} /></div>
</div>
</section>


<section style={{ padding: "96px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between", border: "1px solid #E7E0D5", borderRadius: "20px", padding: "48px" }}>
<div style={{ flex: "1 1 520px" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(19px, 2.22vw, 32px)", margin: "0 0 10px" }}>Have a direction? We can build it too.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", margin: "0" }}>Consulting leads naturally into Product Delivery, with the same team and the same vision.</p>
</div>
<a href="/delivery" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>See Product Delivery</a>
</div>
</section>

<Footer  />
</div>
  );
}
