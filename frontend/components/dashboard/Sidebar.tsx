"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Sidebar.module.scss";
import { logout } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout Successfully");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      router.push("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const closeSidebar = () => setIsOpen(false);

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
    <>
      {/* Mobile hamburger button */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar nav */}
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.brandWrapper}>
          <Link href="/" className={styles.brand} onClick={closeSidebar}>
            Lakshyam AI
          </Link>
          <p className={styles.brandSub}>Career Platform</p>
        </div>

        <div className={styles.menuList}>
          <Link href="/dashboard" className={getLinkClass("/dashboard")} onClick={closeSidebar}>
            <span className="material-symbols-outlined" style={getIconStyle("/dashboard")}>
              dashboard
            </span>
            <span>Dashboard</span>
          </Link>

          <Link href="/dashboard#resumes" className={getLinkClass("/dashboard#resumes")} onClick={closeSidebar}>
            <span className="material-symbols-outlined" style={getIconStyle("/dashboard#resumes")}>
              description
            </span>
            <span>My Resumes</span>
          </Link>

          <Link href="/dashboard#coach" className={getLinkClass("/dashboard#coach")} onClick={closeSidebar}>
            <span className="material-symbols-outlined" style={getIconStyle("/dashboard#coach")}>
              mic
            </span>
            <span>Interview Coach</span>
          </Link>

          <Link href="/dashboard#ats" className={getLinkClass("/dashboard#ats")} onClick={closeSidebar}>
            <span className="material-symbols-outlined" style={getIconStyle("/dashboard#ats")}>
              analytics
            </span>
            <span>ATS Analysis</span>
          </Link>
        </div>

        <div className={styles.logoutSection}>
          <Link href="/settings" className={getLinkClass("/settings")} onClick={closeSidebar}>
            <span className="material-symbols-outlined" style={getIconStyle("/settings")}>
              settings
            </span>
            <span>Settings</span>
          </Link>

          <button className={styles.logoutItem} onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
}
