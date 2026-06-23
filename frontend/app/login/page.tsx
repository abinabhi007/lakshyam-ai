"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import styles from "./login.module.scss";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className="row g-0">
          
          {/* Left Side: Login Form */}
          <div className="col-12 col-md-6 p-4 p-md-5 d-flex flex-col justify-content-center">
            {/* Brand / Logo Area */}
            <div className={styles.brandArea}>
              <div className={styles.logoWrapper}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  rocket_launch
                </span>
              </div>
              <Link href="/" className={styles.brandName}>
                Lakshyam AI
              </Link>
            </div>

            <div>
              <h1 className={styles.title}>Welcome Back</h1>
              <p className={styles.subtitle}>
                Please enter your details to access your dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4">
              {/* Username Field */}
              <div className={styles.formGroup}>
                <label className={styles.inputLabel} htmlFor="username">
                  Username or Email
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>
                    mail
                  </span>
                  <input
                    className={styles.inputField}
                    id="username"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className={styles.formGroup}>
                <label className={styles.inputLabel} htmlFor="password">
                  Password
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>
                    lock
                  </span>
                  <input
                    className={styles.inputField}
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Options Row */}
              <div className="d-flex align-items-center justify-content-between my-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="remember-me"
                    type="checkbox"
                  />
                  <label className="form-check-label text-muted" htmlFor="remember-me" style={{ fontSize: "0.875rem" }}>
                    Remember me
                  </label>
                </div>
                <a className="text-decoration-none text-primary fw-medium" href="#" style={{ fontSize: "0.875rem" }}>
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button className={styles.btnSubmit} type="submit">
                <span>Sign In</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className={styles.divider}>
              <span>Or continue with</span>
            </div>

            <div className="row g-2">
              <div className="col-6">
                <button className={styles.btnSso} type="button">
                  <span className="material-symbols-outlined text-[18px]">language</span>
                  <span>Google</span>
                </button>
              </div>
              <div className="col-6">
                <button className={styles.btnSso} type="button">
                  <span className="material-symbols-outlined text-[18px]">work</span>
                  <span>Microsoft</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className={styles.signUpText}>
              Don't have an account?{" "}
              <Link href="/signup">
                Create Account
              </Link>
            </p>
          </div>

          {/* Right Side: Visual Panel */}
          <div className="col-6 d-none d-md-block">
            <div className={styles.visualPanel}>
              <div className={styles.visualBg}></div>
              
              <div className={styles.visualImageWrapper}>
                <img
                  className={styles.visualImage}
                  alt="Elevate Career Path representation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL7QVGzKAdNuzFUWGE1k59z9PXkL_Tr1txhdEJq4X_FQvMtA9cA4jZgyoQ8L72ZDUt-tg4-msdZq8L03xBE5kE7StkImDMCRTIzTgksNNBbb7HM6muKIIFfXS_kfbU08KUHjf69V2E7BK2BKXJUVfF_NahqvXYp6OwH3OKGCVVLWegmtNa1J5p9fZL3kJ6VNxwyyWbyewfgdoDVxwp0J0NjN8qeTj95nmAFA_bgOoLzjRHon6X5ot5RUYtD8_KlDodlJe72SwpDsQ"
                />
              </div>

              <div className={styles.visualOverlay}>
                <h2 className={styles.overlayTitle}>Elevate Your Career Path</h2>
                <p className={styles.overlayText}>
                  Join Lakshyam AI to unlock AI-driven insights, perfect your resume, and master your next interview with precision.
                </p>
                <div className={styles.indicatorWrapper}>
                  <div className={`${styles.indicatorDot} ${styles.active}`}></div>
                  <div className={styles.indicatorDot}></div>
                  <div className={styles.indicatorDot}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
