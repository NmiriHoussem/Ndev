import React, { useState } from 'react';
import logoInk from '../../assets/brand/ndev-logo-ink.png';

export function Footer() {

  return (
<footer style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#EDE5D8", color: "#4A5160", padding: "72px 24px 32px", width: "100%", boxSizing: "border-box" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "48px", justifyContent: "space-between", marginBottom: "56px" }}>
<div style={{ flex: "1 1 280px", maxWidth: "340px" }}>
<img src={logoInk} alt="NDev Digital" style={{ height: "56px", width: "auto", display: "block", marginBottom: "20px" }} />
<p style={{ fontSize: "14px", lineHeight: "1.7", margin: "0 0 16px" }}>Product studio. We shape, design and build products people adopt.</p>
<p style={{ fontSize: "14px", lineHeight: "1.7", margin: "0" }}>Immeuble Tamayouz, 1082 Centre Urbain Nord, Tunis</p>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#1B1F2A", marginBottom: "8px" }}>Ways to work</div>
<a href="/consulting" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>Product Consulting</a>
<a href="/delivery" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>Product Delivery</a>
<a href="/team-augmentation" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>Team Augmentation</a>
<a href="/flash-audit" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>Flash Audit</a>
<a href="/academy" style={{ color: "#B45309", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>NDev Sprint Academy</a>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#1B1F2A", marginBottom: "8px" }}>Studio</div>
<a href="/work" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>Work</a>
<a href="/about" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>About</a>
<a href="/contact" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>Contact</a>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
<div style={{ fontSize: "14px", fontWeight: "600", color: "#1B1F2A", marginBottom: "8px" }}>Contact</div>
<a href="mailto:contact@ndev.digital" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>contact@ndev.digital</a>
<a href="tel:+21654882779" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>+216 54 882 779</a>
<a href="https://x.com/ndevdigital" style={{ color: "#4A5160", textDecoration: "none", fontSize: "14px", minHeight: "32px", display: "flex", alignItems: "center" }}>X · @ndevdigital</a>
</div>
</div>
</div>
<div style={{ borderTop: "1px solid #E4DCCF", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "13px", color: "#6B7180" }}>
<span>© 2026 NDev Digital. All rights reserved.</span>
<span style={{ display: "flex", gap: "20px" }}><a href="/privacy-policy" style={{ color: "#6B7180", textDecoration: "none" }}>Privacy policy</a><a href="/terms-of-service" style={{ color: "#6B7180", textDecoration: "none" }}>Terms of service</a></span>
</div>
</div>
</footer>
  );
}
