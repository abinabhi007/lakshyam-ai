"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCards from "@/components/dashboard/StatCards";
import QuickActions from "@/components/dashboard/QuickActions";
import GrowthProgress from "@/components/dashboard/GrowthProgress";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="bg-light min-h-screen font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Container */}
      <div className="md:ml-64 d-flex flex-column min-h-screen">
        {/* Top Navbar */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="p-4 p-md-5 max-w-max-width mx-auto w-100 flex-grow-1">
          {/* Header Section */}
          <div className="mb-4">
            <h2 className="text-primary font-weight-bold">
              Welcome back, Abin 👋
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
