import React, { useState } from 'react';
import logoInk from '../../assets/brand/ndev-logo-ink.png';
import markInk from '../../assets/brand/ndev-mark-ink.png';

export function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const current = active ?? 'home';
  const items = [
    { id: 'consulting', label: 'Consulting', href: '/consulting' },
    { id: 'delivery', label: 'Delivery', href: '/delivery' },
    { id: 'augmentation', label: 'Team Augmentation', href: '/team-augmentation' },
    { id: 'work', label: 'Work', href: '/work' },
    { id: 'academy', label: 'Academy', href: '/academy' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];
  const links = items.map((it) => ({ ...it, isActive: it.id === current, isInactive: it.id !== current }));
  const isAcademy = current === 'academy';
  const notAcademy = !isAcademy;
  return (
<header className={open ? "nd-nav nd-nav-open" : "nd-nav"} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }} style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#F7F3EC", borderBottom: "1px solid #E4DCCF", padding: "0 24px", width: "100%", boxSizing: "border-box" }}>
{isAcademy ? (<><div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", minHeight: "36px", borderBottom: "1px solid #E4DCCF", fontSize: "13px", color: "#4A5160" }}><a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "36px", color: "#1B1F2A", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>NDev Digital</a><span className="nd-hide-sm" aria-hidden="true">·</span><span className="nd-hide-sm">Sprint Academy is the training studio of NDev Digital</span></div></>) : null}
<div style={{ maxWidth: "1200px", margin: "0 auto", minHeight: "80px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 32px", padding: "12px 0", boxSizing: "border-box" }}>
{notAcademy ? (<><a href="/" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px" }}><img src={logoInk} alt="NDev Digital" style={{ height: "40px", width: "auto", display: "block" }} /></a></>) : null}
{isAcademy ? (<><a href="/academy" aria-label="Sprint Academy home" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", textDecoration: "none" }}>
<img src={markInk} alt="" style={{ height: "32px", width: "auto", display: "block" }} />
<span style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}><span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "600", fontSize: "20px", letterSpacing: "-.4px", color: "#1B1F2A" }}>SPRINT</span><span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600", fontSize: "9px", letterSpacing: ".32em", color: "#B45309", marginTop: "4px" }}>ACADEMY</span></span>
</a></>) : null}
<button type="button" className="nd-nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} style={{ display: "none", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "8px", border: "1px solid rgba(27,31,42,.2)", background: "transparent", color: "#1B1F2A", cursor: "pointer" }}>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
</button>
<nav id="nd-main-nav" className="nd-nav-links" aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 6px" }}>
{links.map((link, $index) => (<React.Fragment key={$index}>
{link.isActive ? (<><a href={link.href} aria-current="page" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 12px", borderRadius: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", color: "#1B1F2A", background: "rgba(27,31,42,.06)" }}>{link.label}</a></>) : null}
{link.isInactive ? (<><a href={link.href} style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 12px", borderRadius: "6px", fontSize: "14px", fontWeight: "500", textDecoration: "none", color: "#4A5160" }}>{link.label}</a></>) : null}
</React.Fragment>))}
</nav>
{notAcademy ? (<><a href="/flash-audit" className="nd-nav-cta" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "14px", padding: "11px 18px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Book a Flash Audit</a></>) : null}
{isAcademy ? (<><a href="#training-request" data-format="team" className="nd-nav-cta" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "14px", padding: "11px 18px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box" }}>Train my team</a></>) : null}
</div>
</header>
  );
}
