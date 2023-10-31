import React from 'react'
import styles from './page.module.css'
import port1 from 'public/port1.jpeg'
import port2 from 'public/port2.jpeg'
import port3 from 'public/port3.jpeg'
import port4 from 'public/port4.jpeg'
import port5 from 'public/port5.jpeg'
import port6 from 'public/port6.png'
import port7 from 'public/port7.jpeg'
import port8 from 'public/port8.jpeg'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portText}>
        <h1>Çalışmalarımız</h1>
        <h4>Buradaki resimler eğitim amaçlı konulmuştur bize ait değildir.</h4>
      </div>
      <div className={styles.portContainer}>
        <Image className={styles.port}  src={port1} alt='...'/>
        <Image className={styles.port}  src={port2} alt='...'/>
        <Image className={styles.port}  src={port3} alt='...'/>
        <Image className={styles.port}  src={port4} alt='...'/>
        <Image className={styles.port}  src={port5} alt='...'/>
        <Image className={styles.port}  src={port6} alt='...'/>
        <Image className={styles.port}  src={port7} alt='...'/>
        <Image className={styles.port}  src={port8} alt='...'/>
      </div>
    </div>
  )
}

export default Portfolio
