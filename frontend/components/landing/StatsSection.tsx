"use client";

import styles from "./StatsSection.module.scss";

export default function StatsSection() {
  return (
    <section className={`w-100 ${styles.statsSection}`}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-5">
          {/* Stat 1 */}
          <div className={styles.statItem}>
            <span className={styles.statVal}>1000+</span>
            <span className={styles.statLabel}>Resumes Optimized</span>
          </div>

          <div className={styles.divider}></div>

          {/* Stat 2 */}
          <div className={styles.statItem}>
            <span className={styles.statVal}>500+</span>
            <span className={styles.statLabel}>Interviews Coached</span>
          </div>

          <div className={styles.divider}></div>

          {/* Stat 3 */}
          <div className={styles.statItem}>
            <span className={styles.statVal}>98%</span>
            <span className={styles.statLabel}>ATS Pass Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
