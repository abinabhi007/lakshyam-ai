"use client";

import styles from "./StatCards.module.scss";

export default function StatCards() {
  return (
    <div className="row g-4 mb-4">
      {/* Card 1 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Avg. Resume Score</h3>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">military_tech</span>
            </div>
          </div>
          <div className={styles.valWrapper}>
            <span className={styles.value}>86</span>
            <span className={styles.limit}>/ 100</span>
          </div>
          <div className={`${styles.footerText} ${styles.textSuccess}`}>
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+5 pts this week</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Interviews Completed</h3>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">forum</span>
            </div>
          </div>
          <div className={styles.valWrapper}>
            <span className={styles.value}>12</span>
          </div>
          <div className={`${styles.footerText} ${styles.textMuted}`}>
            <span>2 pending feedback</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>ATS Match Score</h3>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">rule</span>
            </div>
          </div>
          <div className={styles.valWrapper}>
            <span className={styles.value}>92%</span>
          </div>
          <div className={`${styles.footerText} ${styles.textSuccess}`}>
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>Top 10% Match</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className={styles.statCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Applications Tracked</h3>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">work</span>
            </div>
          </div>
          <div className={styles.valWrapper}>
            <span className={styles.value}>24</span>
          </div>
          <div className={`${styles.footerText} ${styles.textMuted}`}>
            <span>5 Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
