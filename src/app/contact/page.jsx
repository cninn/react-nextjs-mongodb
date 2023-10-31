import React from "react";
import styles from "./page.module.css";
import contact from "public/contact1.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactTitle}>
        <h1>Hizmetlerimiz için bize ulaşabilirsiniz</h1>
      </div>

      <div className={styles.heroForm}>
        <div className={styles.hero}>
          <Image className={styles.img}  src={contact} alt="..." />
        </div>
        <div className={styles.hero}>
          <form className={styles.form}>
            <div className={styles.title}>cninnmakesdev</div>
            <input
              type="text"
              placeholder="ad soyad"
              className={styles.input}
            />
            <input type="email" placeholder="email" className={styles.input} />
            <textarea placeholder="mesaj"></textarea>

            <button type="submit">Gönder</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
