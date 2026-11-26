import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import productSlotBooking from '../../../assets/products/slot-booking-v2.webp';
import { useContactForm, FormStatus } from '../contactForm';

export function ProductSlotBookingPage() {
  const form = useContactForm({ name: '', email: '', url: '', books: '' }, (v) => ({
    name: v.name, email: v.email, company: v.url || '', projectType: 'Product: NDev Slot Booking',
    message: `Early access request for NDev Slot Booking. Website: ${v.url || '(not provided)'}. People will book: ${v.books || '(not provided)'}`,
  }));
  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="products" />

<div style={{ background: "#F4EFE6", borderBottom: "1px solid #E7E0D5", padding: "12px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
<div style={{ fontSize: "14px" }}><a href="/products" style={{ color: "#4A5160", textDecoration: "none" }}>Products</a><span style={{ color: "#A39B8E", margin: "0 8px" }}>/</span><span style={{ color: "#1B1F2A" }}>NDev Slot Booking</span></div>
<nav aria-label="Product" style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}><a href="/products/slot-booking" aria-current="page" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #E7E0D5", color: "#1B1F2A", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>Overview</a><a href="/products/slot-booking/docs" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "8px", color: "#4A5160", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Documentation</a><a href="/products/slot-booking/support" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "8px", color: "#4A5160", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Support</a></nav>
</div>
</div>


<section id="slot-booking" style={{ padding: "72px 24px 88px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
<div style={{ flex: "1 1 420px", minWidth: "0" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
<span style={{ display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "500", color: "#4A5160", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "5px 10px" }}>WordPress plugin</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#92400E", background: "#FDF3E1", borderRadius: "6px", padding: "5px 10px" }}><span style={{ width: "6px", height: "6px", borderRadius: "3px", background: "#F59E0B" }}></span>Pilot · early access</span>
</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(30px, 3.61vw, 52px)", lineHeight: "1.08", letterSpacing: "-1px", color: "#1B1F2A", margin: "0 0 18px" }}>NDev Slot Booking</h1>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 16px" }}>Let your visitors book a time slot on your WordPress site: a meeting room, a coworking desk, a studio, a piece of equipment, a session with you. They pick an offer, a date and a time, add extras if they need them, and send a request you confirm.</p>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 32px" }}>No account to create, no monthly fee to a booking platform. The bookings stay in your WordPress.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
<a href="#early-access" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "16px", padding: "0 28px", minHeight: "52px", borderRadius: "10px" }}>Request early access</a>
<span style={{ fontSize: "14px", color: "#6B7180" }}><a href="/products/slot-booking/docs" style={{ color: "#4A5160" }}>Read the documentation</a> · WordPress 6.0+ · PHP 7.4+</span>
</div>
</div>
<div style={{ flex: "1 1 560px", minWidth: "0" }}>
<div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "16px", padding: "20px" }}>
<img src={productSlotBooking} alt="The booking form: offer, calendar, time slots, extras and booking summary" style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px", border: "1px solid #EEE8DE" }} />
</div>
</div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 104px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>What it does</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", letterSpacing: "-.7px", margin: "0 0 40px", maxWidth: "640px" }}>Built for places that rent their time: coworking spaces, meeting rooms, studios.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Offers by duration</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Per hour, half day, full day. Each offer has its own length and price.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Optional extras</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Equipment, a projector, a coffee break. With a price, or marked as on quote.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>You confirm each request</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Requests arrive as pending. Confirm or decline in one click, the client gets an email.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Calendar sync</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Export to Google Calendar or Outlook, and import busy times so nobody books over them.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Your words, your colour</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Every label, the currency and the accent colour are set from the admin. No code.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Works with your theme</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>One shortcode, in any page. Elementor and Gutenberg included.</p></div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "96px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Set up</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", letterSpacing: "-.7px", margin: "0 0 40px" }}>Live in an afternoon.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#B45309", marginBottom: "10px" }}>1</div><h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 6px" }}>Set your hours</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Open days, opening hours, how far ahead people can book.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#B45309", marginBottom: "10px" }}>2</div><h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 6px" }}>Add offers and extras</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Name them the way your clients do, with your prices.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#B45309", marginBottom: "10px" }}>3</div><h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 6px" }}>Place the form</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Paste <code style={{ fontSize: "13px", background: "#F4EFE6", padding: "2px 6px", borderRadius: "4px" }}>[ndev_slot_booking]</code> in any page.</p></div>
</div>
</div>
</section>


<section id="early-access" style={{ padding: "104px 24px", scrollMarginTop: "80px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
<div style={{ flex: "1 1 380px", minWidth: "0" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 14px" }}>Request early access</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Tell us what people will book on your site. We send you the plugin and help you set it up.</p>
</div>
<form onSubmit={form.submit} style={{ flex: "1 1 480px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Full name<input type="text" name="name" required value={form.values.name} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Email<input type="email" name="email" required value={form.values.email} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160", gridColumn: "1 / -1" }}>Your website<input type="url" name="url" placeholder="https://" value={form.values.url} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160", gridColumn: "1 / -1" }}>What will people book?<input type="text" name="books" value={form.values.books} onChange={form.change} placeholder="Meeting rooms, coworking desks, a studio" style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<button type="submit" disabled={form.sending} style={{ gridColumn: "1 / -1", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", minHeight: "50px", border: "none", borderRadius: "10px", background: "#F59E0B", color: "#1B1F2A", cursor: "pointer" }}>{form.sending ? 'Sending\u2026' : 'Request early access'}</button>
<FormStatus status={form.status} />
</form>
</div>
</section>

<Footer  />
</div>
  );
}
