"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCards from "@/components/dashboard/StatCards";
import QuickActions from "@/components/dashboard/QuickActions";
import GrowthProgress from "@/components/dashboard/GrowthProgress";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { getProfile, refreshToken } from "@/services/authService";
import { useEffect, useState } from "react";
import styles from "@/components/dashboard/DashboardLayout.module.scss";

export default function DashboardPage() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response?.username);
      } catch {
        try {
          await refreshToken();
          const response = await getProfile();
          setUser(response?.username);
        } catch (err) {
          console.error("Failed to load profile:", err);
        }
      }
    };
    loadProfile();
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
        <main className={styles.pageContent}>
          {/* Header Section */}
          <div className="mb-4">
            <h2 className="fw-bold" style={{ color: "#6b3b2e" }}>
              Welcome back, {user}
            </h2>
            <p className="text-muted mt-2">
              Here's an overview of your career progress today.
            </p>
          </div>

          {/* Stat Cards Grid */}
          <StatCards />

          {/* Bento Grid Layout for Main Content */}
          <div className="row g-4">
            {/* Quick Actions & Progress (Left Column) */}
            <div className="col-12 col-lg-4 d-flex flex-column gap-4">
              <QuickActions />
              <GrowthProgress />
            </div>

            {/* Recent Activity (Right Columns) */}
            <div className="col-12 col-lg-8">
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
