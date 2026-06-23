"use client";

import Link from "next/link";
import styles from "./CtaSection.module.scss";

export default function CtaSection() {
  return (
    <section className={`container ${styles.ctaSection}`}>
      <div className={styles.ctaCard}>
        {/* Decorative background elements */}
        <div className={styles.decorTopRight}></div>
        <div className={styles.decorBottomLeft}></div>

        <h2 className={styles.title}>Start Your Career Journey Today</h2>
        <p className={styles.description}>
          Join thousands of professionals leveraging AI to unlock their next big opportunity.
        </p>

        <Link className={styles.btnCta} href="/signup">
          Create Free Account
        </Link>
      </div>
    </section>
  );
}
