import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import logoEndatao from '../../../assets/clients/endatao.svg';
import logoExcelliaInk from '../../../assets/clients/excellia-ink.svg';

export function AugmentationPage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#2F6B4F", "--nd-link-hover": "#22513B", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="augmentation" />


<section style={{ background: "#F4EFE6", padding: "88px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-end" }}>
<div style={{ flex: "1 1 560px", minWidth: "0" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#2F6B4F", marginBottom: "20px" }}>03 · Team Augmentation</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(34px, 4.03vw, 58px)", lineHeight: "1.06", letterSpacing: "-1.2px", color: "#1B1F2A", margin: "0 0 22px" }}>Senior product people, inside your team.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 32px", maxWidth: "580px" }}>Product managers, designers and developers who join your squads and work your way, with the NDev method and team behind them.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Tell us who you need</a>
<a href="#roles" style={{ display: "inline-flex", alignItems: "center", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", border: "1px solid rgba(27,31,42,.25)", minHeight: "44px", boxSizing: "border-box" }}>See the roles</a>
</div>
</div>
<div style={{ flex: "1 1 340px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1px", background: "#E4DCCF", borderRadius: "14px", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>UTC+1</div><div style={{ fontSize: "13px", color: "#6B7180" }}>Aligned with Europe</div></div>
<div style={{ background: "#FFFFFF", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>FR · EN</div><div style={{ fontSize: "13px", color: "#6B7180" }}>Working languages</div></div>
<div style={{ background: "#FFFFFF", padding: "24px", gridColumn: "1 / -1" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", color: "#1B1F2A" }}>Remote or on-site</div><div style={{ fontSize: "13px", color: "#6B7180" }}>Set-up</div></div>
</div>
</div>
</section>


<section id="roles" style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#2F6B4F", marginBottom: "14px" }}>Roles</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>Who can join your team.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "16px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}><h3 style={{ fontSize: "19px", margin: "0 0 10px" }}>Product manager / owner</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Owns the backlog, aligns stakeholders and keeps the team focused on outcomes.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}><h3 style={{ fontSize: "19px", margin: "0 0 10px" }}>Product designer</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Designs flows and UI end to end, and keeps your design system consistent.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}><h3 style={{ fontSize: "19px", margin: "0 0 10px" }}>UX researcher</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Runs interviews and usability tests, and turns findings into decisions.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}><h3 style={{ fontSize: "19px", margin: "0 0 10px" }}>Developers</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Front-end, back-end and mobile engineers who understand product and UX.</p></div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#2F6B4F", marginBottom: "14px" }}>How it works</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>From request to first sprint.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
<div><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2F6B4F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", marginBottom: "18px" }}>1</div><h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Share the need</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Role, seniority, duration and how your team works today.</p></div>
<div><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2F6B4F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", marginBottom: "18px" }}>2</div><h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Meet the profiles</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>We propose people from our team. You interview and choose.</p></div>
<div><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2F6B4F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", marginBottom: "18px" }}>3</div><h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Onboard fast</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>They join your tools, rituals and squads within the first week.</p></div>
<div><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2F6B4F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", marginBottom: "18px" }}>4</div><h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Stay on track</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>An NDev lead checks in regularly on quality and outcomes.</p></div>
</div>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px" }}>
<div style={{ flex: "1 1 400px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#2F6B4F", marginBottom: "14px" }}>Why NDev</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0" }}>More than a freelancer. A studio behind every person.</h2>
</div>
<div style={{ flex: "1 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px 32px" }}>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Product method included</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Our people bring the same vision-and-UX practice we use in consulting and delivery.</p></div>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Continuity</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Holidays or changes are covered by the studio, so your roadmap doesn’t stop.</p></div>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Domain fluency</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Experience in banking, payments and regulated platforms: KYC, compliance, trust.</p></div>
<div><h3 style={{ fontSize: "17px", margin: "0 0 8px" }}>Scale up or down</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Add a role or switch to a full Product Squad when your needs change.</p></div>
</div>
</div>
</section>


<section style={{ background: "#EDE5D8", padding: "104px 24px", marginBottom: "96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
<div style={{ flex: "1 1 480px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#2F6B4F", marginBottom: "14px" }}>Case example</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(20px, 2.36vw, 34px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 16px" }}>Excellia Solutions & Endatao: a dedicated UX/UI expert inside the team.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 24px" }}>For these fintech clients, including the Endatao wallet app, NDev dedicated one UX/UI resource to review existing platforms and design and build new ones alongside their teams.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
<span style={{ fontSize: "12px", color: "#4A5160", border: "1px solid #D6CEC2", borderRadius: "6px", padding: "4px 9px" }}>Fintech</span>
<span style={{ fontSize: "12px", color: "#4A5160", border: "1px solid #D6CEC2", borderRadius: "6px", padding: "4px 9px" }}>Wallet app</span>
<span style={{ fontSize: "12px", color: "#4A5160", border: "1px solid #D6CEC2", borderRadius: "6px", padding: "4px 9px" }}>UX review</span>
<span style={{ fontSize: "12px", color: "#4A5160", border: "1px solid #D6CEC2", borderRadius: "6px", padding: "4px 9px" }}>UX/UI design</span>
<span style={{ fontSize: "12px", color: "#4A5160", border: "1px solid #D6CEC2", borderRadius: "6px", padding: "4px 9px" }}>Dedicated resource</span>
</div>
</div>
<div style={{ flex: "1 1 380px", minWidth: "0", aspectRatio: "16 / 9", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px" }}><img src={logoExcelliaInk} alt="Excellia Solutions" style={{ height: "56px", maxWidth: "70%", objectFit: "contain" }} /><span style={{ fontSize: "14px", color: "#2F6B4F" }}>+</span><span style={{ background: "#FFFFFF", borderRadius: "10px", padding: "10px 16px", display: "inline-flex" }}><img src={logoEndatao} alt="Endatao" style={{ height: "44px", width: "auto", objectFit: "contain" }} /></span></div>
</div>
</section>


<section style={{ padding: "0 24px 96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ flex: "1 1 520px" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(20px, 2.36vw, 34px)", color: "#1B1F2A", margin: "0 0 10px" }}>Need a product person next month?</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Tell us the role and we’ll come back with matching profiles from our team.</p>
</div>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "8px", minHeight: "44px", boxSizing: "border-box" }}>Request profiles</a>
</div>
</section>

<Footer  />
</div>
  );
}
