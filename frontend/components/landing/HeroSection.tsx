"use client";

import Link from "next/link";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className="row align-items-center g-4">
        {/* Content Column */}
        <div className="col-12 col-md-6 order-2 order-md-1">
          <div className={styles.badge}>
            <span className={`material-symbols-outlined ${styles.badgeIcon}`}>
              auto_awesome
            </span>
            <span className={styles.badgeText}>AI Career Platform</span>
          </div>

          <h1 className={styles.title}>
            Build Better Resumes. <br />
            <span className={styles.highlight}>Ace Every Interview.</span>
          </h1>

          <p className={styles.description}>
            AI-powered resume analysis, ATS optimization, and mock interview coaching designed to elevate your professional trajectory with precision and human-centric warmth.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <Link className={`text-center ${styles.btnPrimary}`} href="/signup">
              Get Started
            </Link>
            <a className={`text-center ${styles.btnSecondary}`} href="#features">
              Learn More
            </a>
          </div>
        </div>

        {/* Visual Column */}
        <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <div className={styles.visualContainer}>
            <div className={styles.visualBg}></div>
            <img
              className={styles.visualImage}
              alt="AI analyzing document representation"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUcfjF4tKYP8pdwbPaDkIM4nt4hvb548KuskW5JuxDRxOs-byLWxTWPDQlIZF5HCxfQsmPKyHC3nTTS31fRcOuhg6zRvCJmoJoINoalhUyiKej3597pXzo64JASIpamAYp9_fJIr6XZA-hK-XKHDIOy8dA8qzTVzul2es5BRSxZ1rAuu0KoyEzL71iu0_306GjaPOVL2l_2p6HvNPsj-jSk0UqYI8kWlL-yCgCiR_6s9fw9CAa1e-y4Vqd2Wxwq8RG3-Pzf1gHDU8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
