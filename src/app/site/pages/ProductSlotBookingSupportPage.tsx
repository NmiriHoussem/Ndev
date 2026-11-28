import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { useContactForm, FormStatus } from '../contactForm';

export function ProductSlotBookingSupportPage() {
  const form = useContactForm({ name: '', email: '', url: '', code: '', message: '' }, (v) => ({
    name: v.name, email: v.email, company: v.url || '', projectType: 'Support: NDev Slot Booking',
    message: `Support request for NDev Slot Booking.\nWebsite: ${v.url || '(not provided)'}\nPlugin version: ${v.code || '(not provided)'}\n\n${v.message}`,
  }));
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="products" />
<div style={{ background: "#F4EFE6", borderBottom: "1px solid #E7E0D5", padding: "12px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
<div style={{ fontSize: "14px" }}><a href="/products" style={{ color: "#4A5160", textDecoration: "none" }}>Products</a><span style={{ color: "#A39B8E", margin: "0 8px" }}>/</span><span style={{ color: "#1B1F2A" }}>NDev Slot Booking</span></div>
<nav aria-label="Product" style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}><a href="/products/slot-booking" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "8px", color: "#4A5160", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Overview</a><a href="/products/slot-booking/docs" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "8px", color: "#4A5160", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Documentation</a><a href="/products/slot-booking/support" aria-current="page" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #E7E0D5", color: "#1B1F2A", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Support</a></nav>
</div>
</div>

<section style={{ padding: "64px 24px 40px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Support</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(28px, 3.33vw, 48px)", lineHeight: "1.08", letterSpacing: "-1px", color: "#1B1F2A", margin: "0 0 16px" }}>Help with NDev Slot Booking</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0", maxWidth: "640px" }}>Support is handled by the team that built the plugin, in English, French or Arabic. We reply within two business days, Monday to Friday, Tunis time.</p>
</div>
</section>

<section style={{ padding: "0 24px 80px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h2 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 12px" }}>Included</h2><ul style={{ margin: "0", paddingLeft: "20px", listStyle: "disc" }}>
<li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Questions about how the plugin works</li><li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Help with settings described in the documentation</li><li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Fixing bugs you report</li><li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Updates for new WordPress versions</li></ul></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h2 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 12px" }}>Not included</h2><ul style={{ margin: "0", paddingLeft: "20px", listStyle: "disc" }}>
<li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Custom features or design changes</li><li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Installing or setting up the plugin for you</li><li style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", margin: "0 0 6px" }}>Problems caused by another plugin, a theme or your host</li></ul>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "12px 0 0" }}>Need any of these? We do it as a paid service, <a href="/contact">ask us for a quote</a>.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px", background: "#FAF7F2" }}><h2 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 12px" }}>Before you write</h2>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0 0 10px" }}>Most answers are in the <a href="/products/slot-booking/docs">documentation</a>, and the <a href="/products/slot-booking/docs#faq">troubleshooting</a> section covers the common cases.</p>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Once the plugin is listed on WordPress.org, you can also ask in its support forum there.</p></div>
</div>
</section>

<section id="ticket" style={{ padding: "0 24px 104px", scrollMarginTop: "80px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
<div style={{ flex: "1 1 380px", minWidth: "0" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 14px" }}>Open a support request</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 14px" }}>Tell us what you expected and what happened instead. The more precise, the faster we fix it.</p>
<p style={{ fontSize: "15px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Useful to include: your WordPress and PHP versions, your theme, the page link, and a screenshot if you can.</p>
</div>
<form onSubmit={form.submit} style={{ flex: "1 1 480px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Full name<input type="text" name="name" required value={form.values.name} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Email<input type="email" name="email" required value={form.values.email} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Your website<input type="url" name="url" placeholder="https://" value={form.values.url} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Plugin version (optional)<input type="text" name="code" placeholder="1.2.1" value={form.values.code} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160", gridColumn: "1 / -1" }}>What is happening?<textarea name="message" required minLength={10} value={form.values.message} onChange={form.change} rows={6} style={{ fontFamily: "inherit", fontSize: "15px", padding: "12px 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A", resize: "vertical" }}></textarea></label>
<button type="submit" disabled={form.sending} style={{ gridColumn: "1 / -1", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", minHeight: "50px", border: "none", borderRadius: "10px", background: "#F59E0B", color: "#1B1F2A", cursor: "pointer" }}>{form.sending ? 'Sending\u2026' : 'Send request'}</button>
<FormStatus status={form.status} />
</form>
</div>
</section>

<Footer  />
</div>
  );
}
