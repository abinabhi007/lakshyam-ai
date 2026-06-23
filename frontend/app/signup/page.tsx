"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import styles from "./signup.module.scss";
import { register } from "@/services/authService";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password,username);
      toast.success("User registered successfully")
      router.push("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Failed to register")
    }
  };

  return (
    <div className={styles.signupPage}>
      <main className={styles.signupCard}>
        <div className="row g-0">
          
          {/* Left Side: Form */}
          <div className="col-12 col-md-6 p-4 p-md-5 d-flex flex-col justify-content-center">
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
              <h1 className={styles.title}>Create Account</h1>
              <p className={styles.subtitle}>
                Join Lakshyam AI and accelerate your career journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              {/* Username */}
              <div className={styles.formGroup}>
                <label className={styles.inputLabel} htmlFor="username">
                  Username
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>
                    person
                  </span>
                  <input
                    className={styles.inputField}
                    id="username"
                    placeholder="e.g. alex_doe"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label className={styles.inputLabel} htmlFor="email">
                  Email
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`material-symbols-outlined ${styles.inputIcon}`}>
                    mail
                  </span>
                  <input
                    className={styles.inputField}
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
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

              {/* Actions */}
              <div className="pt-3">
                <button className={styles.btnSubmit} type="submit">
                  Create Account
                </button>
              </div>
            </form>

            <div className={styles.loginText}>
              <p>
                Already have an account?{" "}
                <Link href="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side: Visual Panel */}
          <div className="col-6 d-none d-md-block">
            <div className={styles.visualPanel}>
              <div className={styles.visualBg}></div>
              <div className={styles.decorTopRight}></div>
              <div className={styles.decorBottomLeft}></div>

              <div className={styles.panelContent}>
                <div className={styles.panelIcon}>
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h2 className={styles.panelTitle}>
                  Take the first step toward your dream career.
                </h2>
                <p className={styles.panelText}>
                  Our AI-driven platform analyzes your skills, coaches you through interviews, and optimizes your resume to help you stand out.
                </p>
              </div>

              {/* Testimonial Block */}
              <div className={styles.testimonialBlock}>
                <div className={styles.rating}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className={styles.testimonialText}>
                  "Lakshyam AI completely transformed my job search approach."
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
