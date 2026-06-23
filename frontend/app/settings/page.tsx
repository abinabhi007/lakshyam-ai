"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProfileSettings from "@/components/settings/ProfileSettings";
import SecuritySettings from "@/components/settings/SecuritySettings";

export default function SettingsPage() {
  return (
    <div className="bg-light min-h-screen font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Container */}
      <div className="md:ml-64 d-flex flex-column min-h-screen">
        {/* Top Navbar */}
        <DashboardHeader />

        {/* Page Content */}
        <main 
          className="p-4 p-md-5 mx-auto w-100 flex-grow-1" 
          style={{ maxWidth: "896px" }}
        >
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-primary font-weight-bold">Settings</h2>
            <p className="text-muted mt-2">
              Manage your account preferences and security.
            </p>
          </div>

          <div className="d-flex flex-column gap-4 mt-4">
            {/* Profile Information */}
            <ProfileSettings />

            {/* Security */}
            <SecuritySettings />
          </div>
        </main>
      </div>
    </div>
  );
}

