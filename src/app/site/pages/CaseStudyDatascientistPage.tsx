import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import logoDatascientist from '../../../assets/clients/datascientist.svg';

export function CaseStudyDatascientistPage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="work" />


<section style={{ background: "#F4EFE6", padding: "72px 24px 0" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<a href="/work" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", marginBottom: "20px" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>All work</a>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
<span style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FBEFD9", borderRadius: "999px", padding: "4px 10px" }}>Consulting</span>
<span style={{ fontSize: "12px", color: "#4A5160", border: "1px solid rgba(27,31,42,.14)", borderRadius: "999px", padding: "4px 10px" }}>E-learning</span>
</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(32px, 3.89vw, 56px)", lineHeight: "1.06", letterSpacing: "-1.2px", color: "#1B1F2A", margin: "0 0 20px", maxWidth: "900px" }}>Datascientist.fr: UX/UI for a data science e-learning platform.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 48px", maxWidth: "680px" }}>Datascientist.fr was launching a new e-learning platform specialised in data science. We designed its UX/UI with their team, from user research to delivery.</p>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "#E4DCCF", borderRadius: "14px 14px 0 0", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "8px" }}>01</div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#1B1F2A" }}>UX research</div></div>
<div style={{ background: "#FFFFFF", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "8px" }}>02</div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#1B1F2A" }}>Business alignment</div></div>
<div style={{ background: "#FFFFFF", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "8px" }}>03</div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#1B1F2A" }}>UX/UI design</div></div>
<div style={{ background: "#FFFFFF", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "8px" }}>04</div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#1B1F2A" }}>Design system</div></div>
<div style={{ background: "#FFFFFF", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "8px" }}>05</div><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#1B1F2A" }}>Design through delivery</div></div>
</div>
</div>
</section>


<section style={{ padding: "0 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#FFFFFF", border: "1px solid #E7E0D5", borderTop: "none", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px", borderRadius: "0 0 14px 14px", boxSizing: "border-box" }}><img src={logoDatascientist} alt="DataScientist.fr" style={{ maxHeight: "96px", maxWidth: "60%", objectFit: "contain" }} /></div>
</section>


<section style={{ padding: "96px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px" }}>
<aside style={{ flex: "1 1 260px", maxWidth: "320px", display: "flex", flexDirection: "column", gap: "22px", fontSize: "14px" }}>
<div><div style={{ color: "#64748B", marginBottom: "4px" }}>Client</div><div style={{ fontWeight: "600" }}>Datascientist.fr</div></div>
<div><div style={{ color: "#64748B", marginBottom: "4px" }}>Industry</div><div style={{ fontWeight: "600" }}>E-learning</div></div>
<div><div style={{ color: "#64748B", marginBottom: "4px" }}>Way to work</div><div style={{ fontWeight: "600" }}>Consulting</div></div>
<div><div style={{ color: "#64748B", marginBottom: "4px" }}>What we did</div><div style={{ fontWeight: "600", lineHeight: "1.6" }}>UX research · Business alignment · UX/UI design · Design system · Design through delivery</div></div>
</aside>
<div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "56px" }}>
<div>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "12px" }}>The challenge</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(17px, 2.08vw, 30px)", lineHeight: "1.2", margin: "0 0 14px" }}>Making technical learning feel approachable</h2>
<p style={{ fontSize: "17px", lineHeight: "1.75", color: "#475569", margin: "0" }}>Data science is demanding to learn. The platform had to make courses easy to find, follow and finish for learners of different levels.</p>
</div>
<div>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "12px" }}>What we did</div>
<div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #E7E0D5" }}>
<div style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>01</span><div><h3 style={{ fontSize: "17px", margin: "0 0 6px" }}>UX research with the team</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>User research run together with the Datascientist.fr team, so product decisions were shared from the start.</p></div></div>
<div style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>02</span><div><h3 style={{ fontSize: "17px", margin: "0 0 6px" }}>Working with the business</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Regular work with the business side to keep the platform aligned with their goals, offer and constraints.</p></div></div>
<div style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>03</span><div><h3 style={{ fontSize: "17px", margin: "0 0 6px" }}>UX/UI design</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>The platform’s journeys and screens designed, from the first flows to the final UI.</p></div></div>
<div style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>04</span><div><h3 style={{ fontSize: "17px", margin: "0 0 6px" }}>Design system</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>A UI design system for the platform, so the team can keep it consistent as it grows.</p></div></div>
<div style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", color: "#B45309", minWidth: "28px" }}>05</span><div><h3 style={{ fontSize: "17px", margin: "0 0 6px" }}>Design through delivery</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Design support all the way to delivery, working with the developers until the platform shipped.</p></div></div>
</div>
</div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #E7E0D5", paddingTop: "48px" }}>
<div>
<div style={{ fontSize: "13px", color: "#64748B", marginBottom: "6px" }}>Next case study</div>
<a href="/work/zitouna-bank-kyc" style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#0F172A", textDecoration: "none" }}>Zitouna Bank · Digital KYC onboarding</a>
</div>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Start a similar project</a>
</div>
</section>

<Footer  />
</div>
  );
}
