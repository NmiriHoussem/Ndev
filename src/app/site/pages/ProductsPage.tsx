import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import productSlotBooking from '../../../assets/products/slot-booking-v2.webp';

export function ProductsPage() {

  return (
<div className="nd-page" style={{ "--nd-link": "#B45309", "--nd-link-hover": "#92400E", fontFamily: "Inter, system-ui, sans-serif", color: "#0F172A", background: "#FFFFFF", width: "100%" }}>

<Nav active="products" />


<section style={{ background: "#F4EFE6", padding: "88px 24px 80px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#B45309", marginBottom: "16px" }}>Products</div>
<h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(34px, 4.03vw, 58px)", lineHeight: "1.06", letterSpacing: "-1.2px", color: "#1B1F2A", margin: "0 0 22px", maxWidth: "820px" }}>Creative apps and useful tools, built by NDev.</h1>
<p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4A5160", margin: "0", maxWidth: "640px" }}>Alongside our client work, we build our own products: creative apps augmented with AI, and practical tools that take a daily chore off people’s hands. Some live on the web or on mobile, others inside platforms you already use. Each one gets the same product and UX care as a client project.</p>
</div>
</section>


<section style={{ padding: "96px 24px 24px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
<a href="/products/slot-booking" style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", border: "1px solid #E7E0D5", borderRadius: "16px", overflow: "hidden", background: "#FFFFFF" }}>
<div style={{ background: "#FAF7F2", borderBottom: "1px solid #E7E0D5", padding: "20px 20px 0", height: "240px", overflow: "hidden", boxSizing: "border-box" }}>
<img src={productSlotBooking} alt="NDev Slot Booking form with offers, calendar and booking summary" style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px 8px 0 0", border: "1px solid #EEE8DE", borderBottom: "none" }} />
</div>
<div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px", flex: "1" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
<span style={{ fontSize: "12px", fontWeight: "500", color: "#4A5160", border: "1px solid #E7E0D5", borderRadius: "6px", padding: "4px 8px" }}>WordPress plugin</span>
<span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "500", color: "#92400E", background: "#FDF3E1", borderRadius: "6px", padding: "4px 8px" }}><span style={{ width: "6px", height: "6px", borderRadius: "3px", background: "#F59E0B" }}></span>Early access</span>
</div>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.2", color: "#1B1F2A", margin: "4px 0 0" }}>NDev Slot Booking</h2>
<p style={{ fontSize: "15px", lineHeight: "1.6", color: "#475569", margin: "0" }}>Time-slot booking for coworking spaces, meeting rooms, studios and equipment, right on your WordPress site.</p>
<span style={{ marginTop: "auto", paddingTop: "8px", fontSize: "15px", fontWeight: "600", color: "#B45309" }}>See the plugin →</span>
</div>
</a>
</div>
</div>
</section>


<section style={{ padding: "72px 24px 104px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", background: "#EDE5D8", borderRadius: "20px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ flex: "1 1 520px", minWidth: "0" }}>
<h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: "500", fontSize: "clamp(20px, 2.36vw, 34px)", lineHeight: "1.15", color: "#1B1F2A", margin: "0 0 12px" }}>Need a tool that does not exist yet?</h2>
<p style={{ fontSize: "16px", lineHeight: "1.7", color: "#4A5160", margin: "0", maxWidth: "560px" }}>We design and build custom plugins, internal tools and web apps around the way your team already works.</p>
</div>
<a href="/delivery" style={{ display: "inline-flex", alignItems: "center", background: "#1B1F2A", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "15px", padding: "0 26px", minHeight: "50px", borderRadius: "10px" }}>See Delivery</a>
</div>
</section>

<Footer  />
</div>
  );
}
