"use client";

import styles from "./RecentActivity.module.scss";

export default function RecentActivity() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Activity</h3>
        <button className={styles.btnViewAll}>View All</button>
      </div>

      <div className={styles.tableResponsive}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Activity</th>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Status/Score</th>
              <th className={`${styles.th} text-end`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.activityInfo}>
                  <div className={`${styles.iconWrapper} ${styles.iconDoc}`}>
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                  </div>
                  <span className={styles.activityName}>
                    Frontend_Dev_Resume_v2.pdf
                  </span>
                </div>
              </td>
              <td className={`${styles.td} ${styles.date}`}>Oct 24, 2023</td>
              <td className={styles.td}>
                <span className={styles.scoreBadge}>Score: 88</span>
              </td>
              <td className={`${styles.td} text-end`}>
                <button className={styles.btnAction}>
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.activityInfo}>
                  <div className={`${styles.iconWrapper} ${styles.iconMic}`}>
                    <span className="material-symbols-outlined text-[18px]">
                      mic
                    </span>
                  </div>
                  <span className={styles.activityName}>
                    React Technical Interview
                  </span>
                </div>
              </td>
              <td className={`${styles.td} ${styles.date}`}>Oct 22, 2023</td>
              <td className={styles.td}>
                <span className={styles.reviewBadge}>Needs Review</span>
              </td>
              <td className={`${styles.td} text-end`}>
                <button className={styles.btnAction}>
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.activityInfo}>
                  <div className={`${styles.iconWrapper} ${styles.iconDoc}`}>
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                  </div>
                  <span className={styles.activityName}>
                    UX_Design_Portfolio.pdf
                  </span>
                </div>
              </td>
              <td className={`${styles.td} ${styles.date}`}>Oct 18, 2023</td>
              <td className={styles.td}>
                <span className={styles.scoreBadge}>Score: 94</span>
              </td>
              <td className={`${styles.td} text-end`}>
                <button className={styles.btnAction}>
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.activityInfo}>
                  <div className={`${styles.iconWrapper} ${styles.iconMic}`}>
                    <span className="material-symbols-outlined text-[18px]">
                      mic
                    </span>
                  </div>
                  <span className={styles.activityName}>
                    Behavioral Interview - Google
                  </span>
                </div>
              </td>
              <td className={`${styles.td} ${styles.date}`}>Oct 15, 2023</td>
              <td className={styles.td}>
                <span className={styles.scoreBadge}>Score: 82</span>
              </td>
              <td className={`${styles.td} text-end`}>
                <button className={styles.btnAction}>
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
