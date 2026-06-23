"use client";

import styles from "./FeaturesSection.module.scss";

export default function FeaturesSection() {
  return (
    <section className={`container ${styles.featuresSection}`} id="features">
      {/* Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>
          Powerful Intelligence,<br />Simple Execution.
        </h2>
        <p className={styles.description}>
          Our suite of tools is built on a linear-esque, fluid architecture designed to keep you focused on your career goals without the visual clutter.
        </p>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {/* Feature 1 */}
        <div className="col-12 col-md-6">
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">document_scanner</span>
            </div>
            <h3 className={styles.cardTitle}>Resume Analysis</h3>
            <p className={styles.cardText}>
              Instant, deep-level parsing of your career history. We identify weak action verbs, structural flaws, and missing metrics to build a compelling narrative.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-12 col-md-6">
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h3 className={styles.cardTitle}>ATS Score</h3>
            <p className={styles.cardText}>
              Simulate top applicant tracking systems. See exactly how your formatting and keywords rank against industry-standard parsing algorithms before you apply.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-12 col-md-6">
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">mic</span>
            </div>
            <h3 className={styles.cardTitle}>Interview Coach</h3>
            <p className={styles.cardText}>
              Practice with conversational AI tailored to your target role. Receive real-time feedback on pacing, confidence, and narrative structure.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="col-12 col-md-6">
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">edit_document</span>
            </div>
            <h3 className={styles.cardTitle}>Cover Letter Generator</h3>
            <p className={styles.cardText}>
              Generate hyper-personalized, context-aware cover letters that bridge the gap between your resume and the specific job description requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
