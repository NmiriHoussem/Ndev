import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import logoZitounaBank from '../../../assets/clients/zitouna-bank.webp';
import logoIzi from '../../../assets/clients/izi.webp';
import logoScheidt from '../../../assets/clients/scheidt-bachmann.webp';
import logoEndatao from '../../../assets/clients/endatao.svg';
import logoGazelec from '../../../assets/clients/gazelec.svg';
import logoDatascientist from '../../../assets/clients/datascientist.svg';
import logoExcelliaInk from '../../../assets/clients/excellia-ink.svg';
import logoAmarisInk from '../../../assets/clients/amaris-ink.webp';
import logoCodezysInk from '../../../assets/clients/codezys-ink.webp';
import logoVenariInk from '../../../assets/clients/venari-ink.webp';
import markInk from '../../../assets/brand/ndev-mark-ink.png';

export function HomePage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#1B1F2A", "--nd-link-hover": "#E08A00", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="home" />


<section className="nd-hero-scene" style={{ backgroundColor: "#EDE5D8", backgroundSize: "cover", backgroundPosition: "center right", padding: "0 24px", borderBottom: "1px solid #E4DCCF" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", minHeight: "640px", display: "flex", alignItems: "center" }}>
<div style={{ maxWidth: "620px", padding: "112px 0 120px" }}>
<div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 1l10 6-10 6 3-6z" fill="#E08A00"></path></svg>
<span style={{ fontSize: "14px", color: "#4A5160" }}>Product studio in Tunis, working across Europe</span>
</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(42px, 5.0vw, 72px)", lineHeight: "1.02", letterSpacing: "-1.6px", color: "#1B1F2A", margin: "0 0 28px" }}>We shape, design and build products people adopt</h1>
<p style={{ fontSize: "19px", lineHeight: "1.65", color: "#4A5160", margin: "0 0 40px", maxWidth: "540px" }}>Product vision and UX at the core of everything we do. Consulting when you need direction, delivery when you need it built, and experts when your team needs to grow.</p>
<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 28px" }}>
<a href="/flash-audit" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "15px 26px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Book a Flash Audit</a>
<a href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", minHeight: "44px" }}>See our work
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</div>
</div>
</section>


<section style={{ background: "#F4EFE6", borderBottom: "1px solid #E4DCCF", padding: "32px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 44px" }}>
<span style={{ fontSize: "13px", color: "#6B7180" }}>Trusted by</span>
<img src={logoZitounaBank} alt="Banque Zitouna" style={{ height: "34px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoIzi} alt="IZI by Zitouna Payment" style={{ height: "34px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoAmarisInk} alt="Amaris Consulting" style={{ height: "26px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoScheidt} alt="Scheidt & Bachmann Group" style={{ height: "20px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoExcelliaInk} alt="Excellia Solutions" style={{ height: "30px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoEndatao} alt="Endatao" style={{ height: "30px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoVenariInk} alt="Venari Security" style={{ height: "28px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoCodezysInk} alt="Codezys" style={{ height: "24px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoDatascientist} alt="DataScientist.fr" style={{ height: "22px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
<img src={logoGazelec} alt="Gaz Elec Moins Cher" style={{ height: "34px", width: "auto", maxWidth: "150px", objectFit: "contain" }} />
</div>
</section>


<section style={{ padding: "112px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px" }}>
<div style={{ flex: "1 1 420px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Our core</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(26px, 3.06vw, 44px)", lineHeight: "1.1", letterSpacing: "-1px", margin: "0 0 20px" }}>Product vision and UX first. Technology serves them.</h2>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#475569", margin: "0" }}>Most agencies start with the tech stack. We start with the problem, the user and the outcome you need, then design and build exactly what gets you there.</p>
</div>
<div style={{ flex: "1 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#B45309", marginBottom: "12px" }}>01</div>
<h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Problems before features</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Every engagement starts by agreeing what is worth solving and how we will measure it.</p>
</div>
<div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#B45309", marginBottom: "12px" }}>02</div>
<h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Users before screens</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Research and testing shape the design, so what ships is what people actually adopt.</p>
</div>
<div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#B45309", marginBottom: "12px" }}>03</div>
<h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Outcomes before output</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>We judge our work on activation, conversion and retention, not on the number of screens.</p>
</div>
<div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#B45309", marginBottom: "12px" }}>04</div>
<h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>Built to ship</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Strategy and design stay connected to engineering until the product is live.</p>
</div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "112px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "56px" }}>
<div>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>How we work with you</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(26px, 3.06vw, 44px)", lineHeight: "1.1", letterSpacing: "-1px", margin: "0" }}>Three ways to work. One core.</h2>
</div>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#475569", margin: "0", maxWidth: "420px" }}>Choose the model that fits where your product is today. Product vision and UX come with every one of them.</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>

<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#B45309" }}>01</span>
<span style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FBEFD9", borderRadius: "999px", padding: "4px 10px" }}>Advice & direction</span>
</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "26px", margin: "0 0 12px" }}>Product Consulting</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 24px" }}>We help you decide what to build, for whom, and how your teams should work to get there.</p>
<ul style={{ margin: "0 0 32px", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#334155" }}>
<li>Product vision & strategy</li>
<li>Discovery & UX research</li>
<li>Roadmap & prioritisation</li>
<li>UX audit</li>
<li>Product process improvement</li>
<li>AI product strategy & adoption in teams</li>
<li>Transformation coaching</li>
</ul>
<a href="/consulting" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "15px", color: "#B45309", textDecoration: "none", minHeight: "44px" }}>Explore consulting
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>

<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#6D28D9" }}>02</span>
<span style={{ fontSize: "12px", fontWeight: "600", color: "#6D28D9", background: "#F1EAFE", borderRadius: "999px", padding: "4px 10px" }}>A finished product</span>
</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "26px", margin: "0 0 12px" }}>Product Delivery</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 24px" }}>We design and build it for you, from MVP to scale, always starting from product vision and UX.</p>
<ul style={{ margin: "0 0 20px", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#334155" }}>
<li>UX/UI design</li>
<li>Branding & design systems</li>
<li>MVP to scale engineering</li>
</ul>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px" }}>
<span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "4px 9px" }}>Web platforms</span>
<span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "4px 9px" }}>SaaS products</span>
<span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "4px 9px" }}>Mobile apps</span>
</div>
<a href="/delivery" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "15px", color: "#6D28D9", textDecoration: "none", minHeight: "44px" }}>Explore delivery
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>

<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
<span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "14px", fontWeight: "500", color: "#2F6B4F" }}>03</span>
<span style={{ fontSize: "12px", fontWeight: "600", color: "#2F6B4F", background: "#E6F0EA", borderRadius: "999px", padding: "4px 10px" }}>Our people, your team</span>
</div>
<h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "26px", margin: "0 0 12px" }}>Team Augmentation</h3>
<p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0 0 24px" }}>Senior product people embedded in your squads, with the NDev method behind them.</p>
<ul style={{ margin: "0 0 32px", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#334155" }}>
<li>Product managers & owners</li>
<li>Product designers & UX researchers</li>
<li>Developers</li>
</ul>
<a href="/team-augmentation" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "15px", color: "#2F6B4F", textDecoration: "none", minHeight: "44px" }}>Explore augmentation
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>

</div>
</div>
</section>


<section style={{ padding: "112px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "48px" }}>
<div style={{ maxWidth: "640px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>AI in your product teams</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(26px, 3.06vw, 44px)", lineHeight: "1.1", letterSpacing: "-1px", margin: "0" }}>From AI curiosity to AI-native teams.</h2>
</div>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#475569", margin: "0", maxWidth: "420px" }}>We help teams decide where AI creates value, adopt it in their daily work and build AI features users trust.</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
<div style={{ background: "#EDE5D8", borderRadius: "14px", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Consulting</div><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 8px" }}>AI product strategy</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5160", margin: "0" }}>Where AI improves your product, which use cases first, and how to design them.</p></div>
<div style={{ background: "#EDE5D8", borderRadius: "14px", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Consulting · Coaching</div><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 8px" }}>AI adoption & transformation</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5160", margin: "0" }}>New tools, guardrails and ways of working, coached inside your teams until they stick.</p></div>
<div style={{ background: "#EDE5D8", borderRadius: "14px", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", marginBottom: "14px" }}>Delivery</div><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 8px" }}>AI features, built</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5160", margin: "0" }}>Assistants, search and automation designed and engineered into your product.</p></div>
<div style={{ background: "#EDE5D8", borderRadius: "14px", padding: "28px" }}><div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Sprint Academy</div><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 8px" }}>AI Engineering training</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5160", margin: "0" }}>Hands-on training for engineers building LLM features and using AI to develop.</p></div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 112px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
<div style={{ flex: "1 1 460px", minWidth: "0" }}>
<div role="img" aria-label="NDev Sprint Academy" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
<img src={markInk} alt="" style={{ height: "36px", width: "auto", display: "block" }} />
<span style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", letterSpacing: "-.4px", color: "#1B1F2A" }}>SPRINT</span><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "10px", letterSpacing: ".32em", color: "#B45309", marginTop: "5px" }}>ACADEMY</span></span>
</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 14px" }}>Training for teams and professionals.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 26px" }}>Learn to build products the way we do, taught by NDev practitioners. In-company or public sessions.</p>
<a href="/academy" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Explore the trainings</a>
</div>
<div style={{ flex: "1 1 420px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
<a href="/academy/product-management" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "10px", padding: "16px", color: "#1B1F2A", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>Product Management</a>
<a href="/academy/product-ownership" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "10px", padding: "16px", color: "#1B1F2A", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>Product Ownership</a>
<a href="/academy/scrum-master" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "10px", padding: "16px", color: "#1B1F2A", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>Scrum Master</a>
<a href="/academy/product-design-ux-in-scrum-teams" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "10px", padding: "16px", color: "#1B1F2A", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>Product Design & UX in Scrum</a>
<a href="/academy/qa-in-product-teams" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "10px", padding: "16px", color: "#1B1F2A", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>QA in Product Teams</a>
<a href="/academy/cyber-security-team-awareness" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "10px", padding: "16px", color: "#1B1F2A", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>Cyber Security Awareness</a>
<a href="/academy/ai-engineering" style={{ textDecoration: "none", background: "#FFFFFF", border: "1px solid #EEDDBF", borderRadius: "10px", padding: "16px", color: "#B45309", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>AI Engineering · New</a>
<a href="/academy" style={{ textDecoration: "none", border: "1px dashed rgba(251,191,36,.45)", borderRadius: "10px", padding: "16px", color: "#B45309", fontSize: "14px", fontWeight: "600", minHeight: "44px" }}>All trainings →</a>
</div>
</div>
</section>


<section style={{ background: "#EDE5D8", padding: "112px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ maxWidth: "640px", marginBottom: "56px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>The path</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(26px, 3.06vw, 44px)", lineHeight: "1.1", letterSpacing: "-1px", color: "#1B1F2A", margin: "0 0 16px" }}>Start small. Grow with us.</h2>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Each step leads naturally into the next. Join at any point, leave whenever you are ready.</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "#E4DCCF", borderRadius: "14px", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(20px, 2.36vw, 34px)", fontWeight: "500", color: "#B45309", marginBottom: "20px" }}>01</div>
<h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Flash Audit</h3>
<p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>5 days, fixed price. A prioritised view of your product and UX, with quick wins and structural fixes.</p>
</div>
<div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(20px, 2.36vw, 34px)", fontWeight: "500", color: "#B45309", marginBottom: "20px" }}>02</div>
<h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Consulting</h3>
<p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Vision, discovery and a roadmap your team believes in, with clear success metrics.</p>
</div>
<div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(20px, 2.36vw, 34px)", fontWeight: "500", color: "#6D28D9", marginBottom: "20px" }}>03</div>
<h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Delivery</h3>
<p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>We design and build the product with you, sprint by sprint, until it is live and validated.</p>
</div>
<div style={{ background: "#FFFFFF", padding: "32px 28px" }}>
<div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(20px, 2.36vw, 34px)", fontWeight: "500", color: "#2F6B4F", marginBottom: "20px" }}>04</div>
<h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Augmentation</h3>
<p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Our people stay inside your team to run, improve and scale what we built together.</p>
</div>
</div>
</div>
</section>


<section style={{ padding: "112px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "48px" }}>
<div>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Selected work</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(26px, 3.06vw, 44px)", lineHeight: "1.1", letterSpacing: "-1px", margin: "0" }}>Outcomes, not just screens.</h2>
</div>
<a href="/work" style={{ fontWeight: "600", fontSize: "15px", color: "#B45309", textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>All case studies</a>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
<a className="nd-card" href="/work/zitouna-bank-kyc" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "18px" }}>
<div className="nd-thumb" style={{ aspectRatio: "16 / 9", background: "#F3EEE6", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", boxSizing: "border-box" }}><img src={logoZitounaBank} alt="Banque Zitouna" style={{ maxHeight: "72px", maxWidth: "70%", objectFit: "contain" }} /></div>
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}><span style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FBEFD9", borderRadius: "999px", padding: "4px 10px" }}>Consulting</span><span style={{ fontSize: "12px", fontWeight: "600", color: "#6D28D9", background: "#F1EAFE", borderRadius: "999px", padding: "4px 10px" }}>Delivery</span><span style={{ fontSize: "12px", color: "#64748B", padding: "4px 0" }}>Banking</span></div>
<h3 className="nd-card-title" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0" }}>Zitouna Bank · Digital KYC onboarding</h3>
<p style={{ fontSize: "15px", color: "#475569", margin: "0" }}><strong style={{ color: "#0F172A" }}>Digital KYC onboarding for one of Tunisia’s leading Islamic banks</strong></p>
</a>
<a className="nd-card" href="/work/zitouna-payment-izi" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "18px" }}>
<div className="nd-thumb" style={{ aspectRatio: "16 / 9", background: "#F3EEE6", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", boxSizing: "border-box" }}><img src={logoIzi} alt="IZI by Zitouna Payment" style={{ maxHeight: "72px", maxWidth: "70%", objectFit: "contain" }} /></div>
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}><span style={{ fontSize: "12px", fontWeight: "600", color: "#6D28D9", background: "#F1EAFE", borderRadius: "999px", padding: "4px 10px" }}>Delivery</span><span style={{ fontSize: "12px", color: "#64748B", padding: "4px 0" }}>Payments</span></div>
<h3 className="nd-card-title" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0" }}>Zitouna Payment · IZI payment web portal</h3>
<p style={{ fontSize: "15px", color: "#475569", margin: "0" }}><strong style={{ color: "#0F172A" }}>UX/UI and design system for the IZI payment web portal</strong></p>
</a>
<a className="nd-card" href="/work/excellia-solutions" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "18px" }}>
<div className="nd-thumb" style={{ aspectRatio: "16 / 9", background: "#F3EEE6", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", boxSizing: "border-box" }}><img src={logoExcelliaInk} alt="Excellia Solutions" style={{ maxHeight: "72px", maxWidth: "70%", objectFit: "contain" }} /></div>
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}><span style={{ fontSize: "12px", fontWeight: "600", color: "#2F6B4F", background: "#E6F0EA", borderRadius: "999px", padding: "4px 10px" }}>Augmentation</span><span style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FBEFD9", borderRadius: "999px", padding: "4px 10px" }}>Consulting</span><span style={{ fontSize: "12px", color: "#64748B", padding: "4px 0" }}>Fintech</span></div>
<h3 className="nd-card-title" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0" }}>Excellia Solutions · Dedicated UX/UI expert</h3>
<p style={{ fontSize: "15px", color: "#475569", margin: "0" }}><strong style={{ color: "#0F172A" }}>One NDev resource reviewing and building their fintech platforms</strong></p>
</a>
</div>
</div>
</section>


<section style={{ padding: "0 24px 112px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "64px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ flex: "1 1 520px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Not ready for a full project?</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(22px, 2.64vw, 38px)", lineHeight: "1.12", letterSpacing: "-.5px", color: "#1B1F2A", margin: "0 0 16px" }}>Start with a Product & UX Flash Audit.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>5 days. Fixed price. A prioritised report presented to your team in a 1-hour session. If you continue with us, the fee is deducted from your project.</p>
</div>
<a href="/flash-audit" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "16px 28px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Book your audit
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</section>

<Footer  />

</div>
  );
}
