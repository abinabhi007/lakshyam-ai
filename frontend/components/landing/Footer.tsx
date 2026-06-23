"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          {/* Brand */}
          <Link href="/" className={styles.brand}>
            Lakshyam AI
          </Link>

          {/* Links */}
          <div className="d-flex align-items-center gap-4">
            <a className={styles.footerLink} href="#">
              Privacy Policy
            </a>
            <a className={styles.footerLink} href="#">
              Terms of Service
            </a>
            <a className={styles.footerLink} href="#">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className={styles.copyright}>
            © 2024 Lakshyam AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
