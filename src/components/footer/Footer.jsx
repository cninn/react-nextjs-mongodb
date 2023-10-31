import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        It is an educational work prepared by <span className={styles.cmc}>cninnmakes</span> dev. Prepared by
        following Lama Dev channel
      </div>
      <div className={styles.icons}>
        <Image
        style={{objectFit:'cover'}}
          className={styles.icon}
          src="/facebook.png"
          width={30}
          height={30}
          alt="cmc"
        />
        <Image
        style={{objectFit:'cover'}}
          className={styles.icon}
          src="/ınstagram.png"
          width={30}
          height={30}
          alt="cmc"
        />
        <Image
        style={{objectFit:'cover'}}
          className={styles.icon}
          src="/gmail.png"
          width={30}
          height={30}
          alt="cmc"
        />
        <Image
        style={{objectFit:'cover'}}
          className={styles.icon}
          src="/youtube.png"
          width={30}
          height={30}
          alt="cmc"
        />
      </div>
    </div>
  );
};

export default Footer;
