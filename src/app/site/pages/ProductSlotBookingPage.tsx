import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import psbIcon from '../../../assets/products/slot-booking-icon.webp';
import psbShot1 from '../../../assets/products/slot-booking-shot-1.webp';
import psbShot3 from '../../../assets/products/slot-booking-shot-3.webp';
import psbShot4 from '../../../assets/products/slot-booking-shot-4.webp';
import psbShot6 from '../../../assets/products/slot-booking-shot-6.webp';
import psbShot7 from '../../../assets/products/slot-booking-shot-7.webp';
import psbShot8 from '../../../assets/products/slot-booking-shot-8.webp';
import { useContactForm, FormStatus } from '../contactForm';

export function ProductSlotBookingPage() {
  const form = useContactForm({ name: '', email: '', url: '', books: '' }, (v) => ({
    name: v.name, email: v.email, company: v.url || '', projectType: 'Product: NDev Slot Booking',
    message: `Plugin request for NDev Slot Booking. Website: ${v.url || '(not provided)'}. People will book: ${v.books || '(not provided)'}`,
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
</div>
<div style={{ display: "flex", alignItems: "center", gap: "18px", margin: "0 0 18px" }}><img src={psbIcon} alt="" width="64" height="64" style={{ display: "block", width: "64px", height: "64px", borderRadius: "14px", flex: "none" }} /><h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(30px, 3.61vw, 52px)", lineHeight: "1.08", letterSpacing: "-1px", color: "#1B1F2A", margin: "0" }}>NDev Slot Booking</h1></div>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 16px" }}>Let your visitors book a desk, a room, a studio or a piece of equipment by the hour or the day, right on your WordPress site. Pick a template for your activity, set your prices, and take bookings with or without online payment.</p>
<p style={{ fontSize: "17px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 32px" }}>Free, with every feature included. No account to create, no monthly fee to a booking platform. The bookings stay in your WordPress.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
<a href="#early-access" style={{ display: "inline-flex", alignItems: "center", background: "#F59E0B", color: "#1B1F2A", textDecoration: "none", fontWeight: "600", fontSize: "16px", padding: "0 28px", minHeight: "52px", borderRadius: "10px" }}>Get the plugin</a>
<span style={{ fontSize: "14px", color: "#6B7180" }}><a href="/products/slot-booking/docs" style={{ color: "#4A5160" }}>Read the documentation</a> · WordPress 6.0+ · PHP 7.4+ · English and French</span>
</div>
</div>
<div style={{ flex: "1 1 560px", minWidth: "0" }}>
<div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "16px", padding: "20px" }}>
<img src={psbShot3} alt="The floating booking button opens the form in a side panel: space, offer, calendar and time slots" style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px", border: "1px solid #EEE8DE" }} />
</div>
</div>
</div>
</div>
</section>


<section style={{ padding: "0 24px 104px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>What it does</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", letterSpacing: "-.7px", margin: "0 0 40px", maxWidth: "640px" }}>Built for places that rent their time: coworking spaces, studios, meeting rooms, courts.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Templates for your activity</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Coworking, studio, meeting room, podcast, equipment, events, sports. Spaces, offers, extras and form questions are set up in one click.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Spaces with places</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Several spaces, each with its own capacity: 12 desks, 1 private office. Visitors see how many places are left.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Offers and extras</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Per hour, half day, full day, for each space. Extras with a price, or marked as on quote.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Online payment</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Full price or a deposit, through WooCommerce or Stripe. The slot is held while the visitor pays.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Floating booking button</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>A button on every page opens the form in a side panel. No booking page to build.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Your look</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Four styles, your accent colour and corner radius, with a live preview in the settings.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Works with your builder</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>A block, an Elementor widget and a shortcode, each with its own style if you want.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>You stay in control</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Confirm requests by hand, or automatically once paid. See every booking on a monthly calendar by space.</p></div>
<div style={{ border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><h3 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px" }}>Calendar sync</h3><p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Export to Google Calendar or Outlook, and import busy times so nobody books over them.</p></div>
</div>
</div>
</section>


<section style={{ background: "#FAF7F2", borderTop: "1px solid #E7E0D5", borderBottom: "1px solid #E7E0D5", padding: "96px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>Set up</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", letterSpacing: "-.7px", margin: "0 0 40px" }}>Live in an afternoon.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#B45309", marginBottom: "10px" }}>1</div><h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 6px" }}>Pick your activity</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Choose a template on the welcome screen. Spaces, offers and form questions are ready.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#B45309", marginBottom: "10px" }}>2</div><h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 6px" }}>Set your prices</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Rename spaces and offers the way your clients do, set prices, hours and payment.</p></div>
<div style={{ background: "#FFFFFF", border: "1px solid #E7E0D5", borderRadius: "12px", padding: "24px" }}><div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", fontWeight: "500", color: "#B45309", marginBottom: "10px" }}>3</div><h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 6px" }}>Show the form</h3><p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Turn on the floating button, or place the block, the Elementor widget or <code style={{ fontSize: "13px", background: "#F4EFE6", padding: "2px 6px", borderRadius: "4px" }}>[ndev_slot_booking]</code>.</p></div>
</div>
</div>
</section>


<section style={{ padding: "104px 24px 0" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "14px" }}>A look inside</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", letterSpacing: "-.7px", margin: "0 0 40px", maxWidth: "640px" }}>What your visitors and your team see.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "32px 24px" }}>
<figure style={{ margin: "0" }}><div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "14px" }}><img src={psbShot1} alt="The booking form: spaces, offers, calendar and time slots with places left" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", objectPosition: "left top", borderRadius: "8px", border: "1px solid #EEE8DE" }} /></div><figcaption style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5160", marginTop: "12px" }}>The form on any page: space, offer, date and a free time slot, with the places left.</figcaption></figure>
<figure style={{ margin: "0" }}><div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "14px" }}><img src={psbShot4} alt="The template picker with eight activities" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", objectPosition: "left top", borderRadius: "8px", border: "1px solid #EEE8DE" }} /></div><figcaption style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5160", marginTop: "12px" }}>Start from a template for your activity, then change anything.</figcaption></figure>
<figure style={{ margin: "0" }}><div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "14px" }}><img src={psbShot6} alt="Appearance settings with a live preview of the form" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", objectPosition: "left top", borderRadius: "8px", border: "1px solid #EEE8DE" }} /></div><figcaption style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5160", marginTop: "12px" }}>Four styles, your colour and corner radius, with a live preview.</figcaption></figure>
<figure style={{ margin: "0" }}><div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "14px" }}><img src={psbShot7} alt="Payment settings: deposit, WooCommerce or Stripe" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", objectPosition: "left top", borderRadius: "8px", border: "1px solid #EEE8DE" }} /></div><figcaption style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5160", marginTop: "12px" }}>Online payment in full or as a deposit, with WooCommerce or Stripe.</figcaption></figure>
<figure style={{ margin: "0", gridColumn: "1 / -1" }}><div style={{ background: "#FAF7F2", border: "1px solid #E7E0D5", borderRadius: "14px", padding: "14px" }}><img src={psbShot8} alt="The monthly bookings calendar in the WordPress admin" loading="lazy" style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px", border: "1px solid #EEE8DE" }} /></div><figcaption style={{ fontSize: "14px", lineHeight: "1.6", color: "#4A5160", marginTop: "12px" }}>Every booking on a monthly calendar, by space.</figcaption></figure>
</div>
</div>
</section>


<section id="early-access" style={{ padding: "104px 24px", scrollMarginTop: "80px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
<div style={{ flex: "1 1 380px", minWidth: "0" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(21px, 2.5vw, 36px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 14px" }}>Get the plugin</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0 0 14px" }}>NDev Slot Booking is free. It is being reviewed for the WordPress.org plugin directory.</p>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0" }}>Leave your email: we send you the plugin now, and let you know when you can install it straight from your WordPress admin.</p>
</div>
<form onSubmit={form.submit} style={{ flex: "1 1 480px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Full name<input type="text" name="name" required value={form.values.name} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160" }}>Email<input type="email" name="email" required value={form.values.email} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160", gridColumn: "1 / -1" }}>Your website<input type="url" name="url" placeholder="https://" value={form.values.url} onChange={form.change} style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#4A5160", gridColumn: "1 / -1" }}>What will people book?<input type="text" name="books" value={form.values.books} onChange={form.change} placeholder="Meeting rooms, coworking desks, a studio" style={{ fontFamily: "inherit", fontSize: "15px", minHeight: "46px", padding: "0 14px", borderRadius: "8px", border: "1px solid #D6CEC2", background: "#FFFFFF", color: "#1B1F2A" }} /></label>
<button type="submit" disabled={form.sending} style={{ gridColumn: "1 / -1", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", minHeight: "50px", border: "none", borderRadius: "10px", background: "#F59E0B", color: "#1B1F2A", cursor: "pointer" }}>{form.sending ? 'Sending\u2026' : 'Send me the plugin'}</button>
<FormStatus status={form.status} />
</form>
</div>
</section>

<Footer  />
</div>
  );
}
