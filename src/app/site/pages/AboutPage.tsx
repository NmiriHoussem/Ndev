import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';

export function AboutPage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="about" />


<section style={{ padding: "96px 24px 72px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>About NDev</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(36px, 4.31vw, 62px)", lineHeight: "1.04", letterSpacing: "-1.4px", margin: "0 0 28px", maxWidth: "960px" }}>A product studio built on one idea: <span style={{ color: "#B45309" }}>start from the user, not the code.</span></h1>
<div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
<p style={{ flex: "1 1 420px", fontSize: "18px", lineHeight: "1.75", color: "#475569", margin: "0" }}>NDev started in 2023 as a product and UX consulting company, and later grew into design and development. Along the way, we noticed something in many of the teams we worked with: talented people and solid processes, but not always someone to carry the product vision and mindset. Most of the time the challenge is not the process or the people, but how they connect. That is where we like to help: getting teams organised and focused, with a healthy process and good onboarding, so everyone can do their best work.</p>
<p style={{ flex: "1 1 420px", fontSize: "18px", lineHeight: "1.75", color: "#475569", margin: "0" }}>Today we bring product management, UX and engineering together in one team, so companies get clear direction, products people adopt, and the people to keep improving them.</p>
</div>
</div>
</section>


<section style={{ padding: "0 24px 96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "#E7E0D5", border: "1px solid #E7E0D5", borderRadius: "16px", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "32px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(26px, 3.06vw, 44px)", fontWeight: "500" }}>20+</div><div style={{ fontSize: "14px", color: "#64748B" }}>Products shipped</div></div>
<div style={{ background: "#FFFFFF", padding: "32px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(26px, 3.06vw, 44px)", fontWeight: "500" }}>3</div><div style={{ fontSize: "14px", color: "#64748B" }}>Regulated industries</div></div>
<div style={{ background: "#FFFFFF", padding: "32px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(26px, 3.06vw, 44px)", fontWeight: "500" }}>4</div><div style={{ fontSize: "14px", color: "#64748B" }}>Countries</div></div>
<div style={{ background: "#FFFFFF", padding: "32px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(26px, 3.06vw, 44px)", fontWeight: "500" }}>2023</div><div style={{ fontSize: "14px", color: "#64748B" }}>Founded in Tunis</div></div>
</div>
</section>


<section style={{ background: "#EDE5D8", padding: "104px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>How we think</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", color: "#1B1F2A", margin: "0 0 48px" }}>Four principles behind every engagement.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1px", background: "#E4DCCF", borderRadius: "14px", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 10px" }}>Problems before features</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#4A5160", margin: "0" }}>We agree on what is worth solving before anyone opens a design tool.</p></div>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 10px" }}>Users before screens</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#4A5160", margin: "0" }}>Research and testing decide, not opinions in a meeting room.</p></div>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 10px" }}>Senior attention</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#4A5160", margin: "0" }}>The people you meet are the people who work on your product.</p></div>
<div style={{ background: "#FFFFFF", padding: "30px 26px" }}><h3 style={{ fontSize: "19px", color: "#1B1F2A", margin: "0 0 10px" }}>Built to ship</h3><p style={{ fontSize: "15px", lineHeight: "1.65", color: "#4A5160", margin: "0" }}>Strategy and design stay connected to engineering until it is live.</p></div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 104px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Clients</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(23px, 2.78vw, 40px)", lineHeight: "1.12", letterSpacing: "-.8px", margin: "0 0 40px" }}>Trusted by banks, fintechs and platforms.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "#E7E0D5", border: "1px solid #E7E0D5", borderRadius: "16px", overflow: "hidden" }}>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Zitouna Bank</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>IZI Payment</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Amaris Consulting</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Scheidt & Bachmann Group</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Excellia Solutions</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Endatao</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Venari Security</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Codezys</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Datascientist.fr</div>
<div style={{ background: "#FFFFFF", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#475569", minHeight: "96px" }}>Gaz Elec Moins Cher</div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "24px" }}>
<div style={{ flex: "1 1 460px", background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "20px", padding: "44px" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "28px", margin: "0 0 10px" }}>Work with us</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", margin: "0 0 22px" }}>Tell us where your product is today, and we’ll suggest the right way to start.</p>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Contact us</a>
</div>
<div style={{ flex: "1 1 460px", background: "#EDE5D8", borderRadius: "20px", padding: "44px" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "28px", color: "#1B1F2A", margin: "0 0 10px" }}>Join the studio</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 22px" }}>We are always looking for product people who care about users. Send your profile to contact@ndev.digital.</p>
<a href="mailto:contact@ndev.digital" style={{ display: "inline-flex", alignItems: "center", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", border: "1px solid rgba(27,31,42,.25)", minHeight: "44px", boxSizing: "border-box" }}>contact@ndev.digital</a>
</div>
</div>
</section>

<Footer  />
</div>
  );
}
