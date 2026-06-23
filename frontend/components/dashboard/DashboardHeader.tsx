"use client";

import styles from "./DashboardHeader.module.scss";

export default function DashboardHeader() {
  return (
    <header className={styles.header}>
      {/* Search Input Box */}
      <div>
        <div className={styles.searchWrapper}>
          <span className={`material-symbols-outlined ${styles.searchIcon}`}>
            search
          </span>
          <input
            className={styles.searchInput}
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className={styles.actionsArea}>
        <button className={styles.btnNotify}>
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className={styles.avatarWrapper}>
          <img
            alt="User Profile"
            className={styles.avatar}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjtKvKH3RYLOmvTuHQk2GdLMCZexOT_ArjisuOSAFH8j4jO8mBTGQzdvb1doI3hRzSGjZwUerMn8pBXIKV3azhMYUbL5FuQOPinanGECAMYiP8Zb7NCDBCvtHIa7_EgHxplL0ksK-72OUZGaPonrWC4givxhc9tCwzmDzNDjE3XF1D7YgnIE9rn1sn84tymyWh6qof5eomAn4u9geuF9jPK09Up7CsrEiIdniB5YVN3hFEHZ9a9HYayYTnWp9WofkXcwx8zjD7w8s"
          />
        </div>
      </div>
    </header>
  );
}
