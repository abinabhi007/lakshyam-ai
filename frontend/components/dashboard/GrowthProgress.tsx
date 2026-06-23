"use client";

import styles from "./GrowthProgress.module.scss";

export default function GrowthProgress() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Growth Progress</h3>
      
      <div className={styles.chartArea}>
        <span className={styles.placeholderText}>
          [Chart Visualization Area]
        </span>
      </div>
    </div>
  );
}
