"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProfileSettings from "@/components/settings/ProfileSettings";
import SecuritySettings from "@/components/settings/SecuritySettings";
import { useEffect, useState } from "react";
import { getProfile, refreshToken } from "@/services/authService";
import styles from "@/components/dashboard/DashboardLayout.module.scss";

export default function SettingsPage() {
  const [user, setUser] = useState("");
  const [userMail, setUserMail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response?.username);
        setUserMail(response?.email);
      } catch {
        try {
          await refreshToken();
          const response = await getProfile();
          setUser(response?.username);
          setUserMail(response?.email);
        } catch (err) {
          console.error("Failed to load profile:", err);
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className={styles.layout}>
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Container — offset on desktop */}
      <div className={styles.mainWrapper}>
        {/* Top Navbar */}
        <DashboardHeader />

        {/* Page Content */}
        <main className={styles.pageContent} style={{ maxWidth: "960px" }}>
          {/* Header */}
          <div className="mb-4">
            <h2 className="fw-bold" style={{ color: "#6b3b2e" }}>Settings</h2>
            <p className="text-muted mt-2">
              Manage your account preferences and security.
            </p>
          </div>

          <div className="d-flex flex-column gap-4">
            {/* Profile Information */}
            <ProfileSettings userName={user} email={userMail} />

            {/* Security */}
            <SecuritySettings />
          </div>
        </main>
      </div>
    </div>
  );
}
