"use client";

import styles from "./QuickActions.module.scss";

export default function QuickActions() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Quick Actions</h3>
      
      <div className="d-flex flex-column">
        <button className={`${styles.actionBtn} ${styles.btnPrimary}`}>
          <div className={styles.btnContent}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              upload_file
            </span>
            <span>Upload Resume</span>
          </div>
          <span className={`material-symbols-outlined ${styles.arrow}`}>
            arrow_forward
          </span>
        </button>

        <button className={`${styles.actionBtn} ${styles.btnOutline}`}>
          <div className={styles.btnContent}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              smart_display
            </span>
            <span>Start Mock Interview</span>
          </div>
          <span className={`material-symbols-outlined ${styles.arrow}`}>
            arrow_forward
          </span>
        </button>

        <button className={`${styles.actionBtn} ${styles.btnSecondary}`}>
          <div className={styles.btnContent}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              edit_document
            </span>
            <span>Generate Cover Letter</span>
          </div>
          <span className={`material-symbols-outlined ${styles.arrow}`}>
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
