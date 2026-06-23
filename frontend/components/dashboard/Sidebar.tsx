"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `${styles.menuItem} ${isActive ? styles.active : ""}`;
  };

  const getIconStyle = (path: string) => {
    const isActive = pathname === path;
    return isActive ? { fontVariationSettings: "'FILL' 1" } : {};
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.brandWrapper}>
        <Link href="/" className={styles.brand}>
          Lakshyam AI
        </Link>
        <p className={styles.brandSub}>Career Platform</p>
      </div>

      <div className={styles.menuList}>
        <Link href="/dashboard" className={getLinkClass("/dashboard")}>
          <span className="material-symbols-outlined" style={getIconStyle("/dashboard")}>
            dashboard
          </span>
          <span>Dashboard</span>
        </Link>

        <Link href="/dashboard#resumes" className={getLinkClass("/dashboard#resumes")}>
          <span className="material-symbols-outlined" style={getIconStyle("/dashboard#resumes")}>
            description
          </span>
          <span>My Resumes</span>
        </Link>

        <Link href="/dashboard#coach" className={getLinkClass("/dashboard#coach")}>
          <span className="material-symbols-outlined" style={getIconStyle("/dashboard#coach")}>
            mic
          </span>
          <span>Interview Coach</span>
        </Link>

        <Link href="/dashboard#ats" className={getLinkClass("/dashboard#ats")}>
          <span className="material-symbols-outlined" style={getIconStyle("/dashboard#ats")}>
            analytics
          </span>
          <span>ATS Analysis</span>
        </Link>
      </div>

      <div className={styles.logoutSection}>
        <Link href="/settings" className={getLinkClass("/settings")}>
          <span className="material-symbols-outlined" style={getIconStyle("/settings")}>
            settings
          </span>
          <span>Settings</span>
        </Link>

        <Link href="/" className={styles.logoutItem}>
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
