"use client";

import Link from "next/link";
import styles from "./LandingNav.module.scss";

export default function LandingNav() {
  return (
    <nav className={`navbar py-3 ${styles.navbar}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          Lakshyam AI
        </Link>

        {/* Nav Links */}
        <div className="d-none d-md-flex align-items-center gap-4">
          <a className={styles.navLink} href="#features">
            Features
          </a>
          <a className={styles.navLink} href="#pricing">
            Pricing
          </a>
        </div>

        {/* Actions */}
        <div className="d-flex align-items-center gap-3">
          <Link className={`d-none d-md-inline-block ${styles.loginLink}`} href="/login">
            Login
          </Link>
          <Link className={styles.btnStart} href="/signup">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
