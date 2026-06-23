"use client";

import { useState, FormEvent } from "react";
import styles from "./SecuritySettings.module.scss";

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Security</h3>
      <p className={styles.subtitle}>
        Update your password to keep your account secure.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="mb-2">
              <label className={styles.formLabel}>Current Password</label>
              <input
                className={styles.inputField}
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <label className={styles.formLabel}>New Password</label>
              <input
                className={styles.inputField}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <label className={styles.formLabel}>Confirm New Password</label>
              <input
                className={styles.inputField}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-start">
          <button type="submit" className={styles.btnUpdate}>
            Update Password
          </button>
        </div>
      </form>
    </section>
  );
}
