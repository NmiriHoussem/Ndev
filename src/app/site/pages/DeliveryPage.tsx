import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';

export function DeliveryPage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#6D28D9", "--nd-link-hover": "#5B21B6", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="delivery" />


<section style={{ background: "#F4EFE6", padding: "88px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-end" }}>
<div style={{ flex: "1 1 560px", minWidth: "0" }}>
<div style={{ fontSize: "13px", fontWeight: "600", color: "#6D28D9", marginBottom: "20px" }}>02 · Product Delivery</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(34px, 4.03vw, 58px)", lineHeight: "1.06", letterSpacing: "-1.2px", color: "#1B1F2A", margin: "0 0 22px" }}>We design and build your product, end to end.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 32px", maxWidth: "580px" }}>Web platforms, SaaS products and mobile apps, from MVP to scale. Every build starts from product vision and UX, so what we ship is what your users adopt.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Start your build</a>
<a href="/work" style={{ display: "inline-flex", alignItems: "center", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", border: "1px solid rgba(27,31,42,.25)", minHeight: "44px", boxSizing: "border-box" }}>See what we shipped</a>
</div>
</div>
<div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "12px", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>Web platforms</span><span style={{ fontSize: "13px", color: "#6B7180" }}>Portals · dashboards · back-offices</span></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "12px", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>SaaS products</span><span style={{ fontSize: "13px", color: "#6B7180" }}>Auth · billing · analytics</span></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E4DCCF", borderRadius: "12px", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "15px", fontWeight: "600", color: "#1B1F2A" }}>Mobile apps</span><span style={{ fontSize: "13px", color: "#6B7180" }}>iOS · Android</span></div>
</div>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px" }}>
<div style={{ flex: "1 1 420px", minWidth: "0" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", marginBottom: "14px" }}>Why it’s different</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 18px" }}>Not a dev shop. A product team that writes the code.</h2>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#475569", margin: "0" }}>A product manager and a designer stay on your build from day one to launch. They protect the vision, test with users and make the trade-offs, while engineers ship.</p>
</div>
<div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "0", borderTop: "1px solid #E7E0D5" }}>
<div style={{ display: "flex", gap: "24px", padding: "22px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontSize: "14px", fontWeight: "600", color: "#64748B", minWidth: "150px" }}>Typical dev shop</span><span style={{ fontSize: "15px", color: "#475569" }}>Builds the spec you hand over</span></div>
<div style={{ display: "flex", gap: "24px", padding: "22px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", minWidth: "150px" }}>NDev Delivery</span><span style={{ fontSize: "15px", color: "#0F172A" }}>Challenges the spec, tests it with users, then builds what works</span></div>
<div style={{ display: "flex", gap: "24px", padding: "22px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontSize: "14px", fontWeight: "600", color: "#64748B", minWidth: "150px" }}>Typical dev shop</span><span style={{ fontSize: "15px", color: "#475569" }}>Measures progress in features</span></div>
<div style={{ display: "flex", gap: "24px", padding: "22px 0", borderBottom: "1px solid #E7E0D5" }}><span style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", minWidth: "150px" }}>NDev Delivery</span><span style={{ fontSize: "15px", color: "#0F172A" }}>Measures progress in activation, conversion and retention</span></div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", marginBottom: "14px" }}>What’s included</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>Everything it takes to ship a product.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}>
<h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>UX/UI design</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0 0 16px" }}>Flows, wireframes, prototypes tested with real users, high-fidelity UI.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Research</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Prototyping</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Accessibility</span></div>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}>
<h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Branding & design systems</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0 0 16px" }}>A product identity and a documented component library your team owns.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Brand identity</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Design tokens</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Guidelines</span></div>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}>
<h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Engineering</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0 0 16px" }}>Front-end, back-end, APIs and cloud infrastructure built for production.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>React · Next.js</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>APIs</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>AI features</span></div>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "26px" }}>
<h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Launch & iterate</h3>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0 0 16px" }}>QA, release, analytics and post-launch improvements based on real usage.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>QA</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Analytics</span><span style={{ fontSize: "12px", color: "#475569", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "3px 8px" }}>Monitoring</span></div>
</div>
</div>
</div>
</section>


<section style={{ background: "#EDE5D8", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", marginBottom: "14px" }}>How a build runs</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", color: "#1B1F2A", margin: "0 0 48px" }}>From idea to live, in four steps.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "#E4DCCF", borderRadius: "14px", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(19px, 2.22vw, 32px)", fontWeight: "500", color: "#6D28D9", marginBottom: "18px" }}>01</div><h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Frame</h3><p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Vision, users, success metrics and the MVP scope, agreed before design starts.</p></div>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(19px, 2.22vw, 32px)", fontWeight: "500", color: "#6D28D9", marginBottom: "18px" }}>02</div><h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Design & test</h3><p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Prototype, test with users, refine. The design system grows with the product.</p></div>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(19px, 2.22vw, 32px)", fontWeight: "500", color: "#6D28D9", marginBottom: "18px" }}>03</div><h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Build in sprints</h3><p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Two-week sprints with a demo each time, so you see the product grow.</p></div>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(19px, 2.22vw, 32px)", fontWeight: "500", color: "#6D28D9", marginBottom: "18px" }}>04</div><h3 style={{ fontSize: "18px", color: "#1B1F2A", margin: "0 0 10px" }}>Launch & learn</h3><p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Release, measure adoption, iterate. We stay until it is live and validated.</p></div>
</div>
</div>
</section>


<section style={{ padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#6D28D9", marginBottom: "14px" }}>Ways to engage</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 48px" }}>Pick the build that fits your stage.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "28px" }}><div style={{ fontSize: "13px", fontWeight: "600", color: "#64748B", marginBottom: "10px" }}>New product</div><h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0 0 10px" }}>MVP Build</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0" }}>From validated idea to a first version in users’ hands, with a fixed scope and timeline.</p></div>
<div style={{ border: "2px solid #7C3AED", borderRadius: "14px", padding: "27px" }}><div style={{ fontSize: "13px", fontWeight: "600", color: "#6D28D9", marginBottom: "10px" }}>Growing product</div><h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0 0 10px" }}>Product Squad</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0" }}>A dedicated PM, designer and engineers who own a product area and ship every sprint.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "14px", padding: "28px" }}><div style={{ fontSize: "13px", fontWeight: "600", color: "#64748B", marginBottom: "10px" }}>Existing product</div><h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", margin: "0 0 10px" }}>Redesign & Rebuild</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569", margin: "0" }}>Modernise a platform that users struggle with, without stopping the business.</p></div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between", background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "20px", padding: "48px" }}>
<div style={{ flex: "1 1 520px" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(19px, 2.22vw, 32px)", margin: "0 0 10px" }}>Shipped? Keep the team.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", margin: "0" }}>After launch, the people who built it can stay inside your team through Team Augmentation.</p>
</div>
<a href="/team-augmentation" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>See Team Augmentation</a>
</div>
</section>

<Footer  />
</div>
  );
}
