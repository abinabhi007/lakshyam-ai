"use client";

import { useState, FormEvent } from "react";
import styles from "./ProfileSettings.module.scss";

export default function ProfileSettings(props: any) {
  const [name, setName] = useState(props.userName);
  const [email, setEmail] = useState(props.email);
  const [bio, setBio] = useState("Experienced Product Manager transitioning to AI tech.");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Profile settings saved!");
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Profile Information</h3>
      
      <div className={styles.avatarArea}>
        <div className={styles.avatarWrapper}>
          <img
            alt="Profile Image"
            className={styles.avatarImg}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB46Lt3keAiQVEWcKhow7dPwC9cdiJYh5Qb6nlLDYuOaLQy7Z32WaL8arI2LyaEkUf9FnQUU5PDxWO0-Ba4hiekfqW_QZxmWOerjcmHZ0f2Oh-yGyuB1JZ1EW84JJW4YA0q0bb-uqb0mB9lcr72lYkAXshDIXECqYYHn14LvGD97iHkMDtGvBzosVlan1nmqlU7HjhNFt89Qq5UOctnPCF0iBY_umyxBOwwPxy_JWhT0Hrc1itv3sy3WIxhZRDgn_-wTiHx8bQY53c"
          />
          <div className={styles.avatarHover}>
            <span className="material-symbols-outlined">photo_camera</span>
          </div>
        </div>
        
        <div className={styles.uploadInfo}>
          <button className={styles.btnUpload} type="button">
            Upload New Picture
          </button>
          <p className={styles.uploadDesc}>JPG, GIF or PNG. Max size of 800K</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className={styles.formLabel}>Full Name</label>
            <input
              className={styles.inputField}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="col-12 col-md-6">
            <label className={styles.formLabel}>Email Address</label>
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="col-12">
            <label className={styles.formLabel}>Bio</label>
            <textarea
              className={styles.inputField}
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="col-12 d-flex justify-content-end mt-4">
            <button type="submit" className={styles.btnSave}>
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
