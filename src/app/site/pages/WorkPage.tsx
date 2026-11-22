import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { PROJECTS } from '../projects';

export function WorkPage() {
  const [filter, setFilter] = useState('All');
  const labels = ['All', 'Consulting', 'Delivery', 'Augmentation'];
  const filters = labels.map((l) => ({ label: l, on: l === filter, off: l !== filter, pick: () => setFilter(l) }));
  const cases = filter === 'All' ? PROJECTS : PROJECTS.filter((c) => c.key.indexOf(filter) !== -1);
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="work" />

<section style={{ padding: "96px 24px 48px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Work</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(34px, 4.03vw, 58px)", lineHeight: "1.06", letterSpacing: "-1.2px", margin: "0 0 20px", maxWidth: "820px" }}>Products we shaped, designed and shipped.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#475569", margin: "0 0 40px", maxWidth: "640px" }}>Products and engagements for banks, fintechs, platforms and media across 4 countries.</p>
<div role="group" aria-label="Filter by way to work" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{filters.map((f, $index) => (<React.Fragment key={$index}>
{f.on ? (<><button type="button" onClick={f.pick} aria-pressed="true" style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "600", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #1B1F2A", background: "#1B1F2A", color: "#FFFFFF", cursor: "pointer" }}>{f.label}</button></>) : null}
{f.off ? (<><button type="button" onClick={f.pick} aria-pressed="false" style={{ fontFamily: "inherit", fontSize: "14px", fontWeight: "500", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#334155", cursor: "pointer" }}>{f.label}</button></>) : null}
</React.Fragment>))}
</div>
</div>
</section>

<section style={{ padding: "24px 24px 112px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "40px 28px" }}>
{cases.map((c, $index) => (<React.Fragment key={$index}>
<a className="nd-card" href={c.href} target={c.target} rel={c.rel} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "16px" }}>
{c.hasShot ? (<><div className="nd-thumb" style={{ aspectRatio: "16 / 9", borderRadius: "14px", overflow: "hidden", border: "1px solid #E7E0D5", boxSizing: "border-box" }}><img src={c.shot} alt={`${c.brand} website`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", display: "block" }} /></div></>) : null}
{c.noShot ? (<><div className="nd-thumb" style={{ aspectRatio: "16 / 9", background: c.bg, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", boxSizing: "border-box" }}>
{c.hasLogo ? (<><img src={c.logo} alt={c.brand} style={{ maxHeight: "72px", maxWidth: "70%", objectFit: "contain" }} /></>) : null}
{c.noLogo ? (<><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "26px", fontWeight: "500", letterSpacing: "-.3px", color: c.fg, textAlign: "center" }}>{c.brand}</span></>) : null}
</div></>) : null}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
<span style={{ fontSize: "12px", fontWeight: "600", color: "#334155", background: "#F3EEE6", borderRadius: "999px", padding: "4px 10px" }}>{c.model}</span>
<span style={{ fontSize: "13px", color: "#64748B" }}>{c.industry}</span>
</div>
<h2 className="nd-card-title" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "22px", lineHeight: "1.25", margin: "0" }}>{c.title}</h2>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>{c.desc}</p>
{c.hasResult ? (<><p style={{ fontSize: "14px", color: "#0F172A", fontWeight: "600", margin: "0" }}>{c.result}</p></>) : null}
</a>
</React.Fragment>))}
</div>
</section>

<section style={{ padding: "0 24px 96px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ flex: "1 1 520px" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(20px, 2.36vw, 34px)", color: "#1B1F2A", margin: "0 0 10px" }}>Your product could be next.</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Start with a 5-day Flash Audit, or tell us what you are building.</p>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="/flash-audit" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Book a Flash Audit</a>
<a href="/contact" style={{ display: "inline-flex", alignItems: "center", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "14px 24px", borderRadius: "10px", border: "1px solid rgba(27,31,42,.25)", minHeight: "44px", boxSizing: "border-box" }}>Contact us</a>
</div>
</div>
</section>

<Footer  />
</div>
  );
}
