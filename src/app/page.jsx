import vector from 'public/work.png' 
import styles from './page.module.css'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import 'animate.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div  className={styles.item}>
        <h1 className={styles.title}>Modern tasarımlar ile hazırlanmış web sayfaları</h1>
        <p className={styles.desc}>Hayal ettiğiniz web sitenizi gerçeğe dönüştürelim</p>
        <Link href={'/portfolio'}>
        <button className={styles.button}>Çalışmalarımız <ArrowForwardIcon className={styles.icon}/></button>
        </Link>
      </div>
      <div  className={styles.item}>
      <Image src={vector} className={styles.img} alt='...'/>
    </div>
</div>

  )
}
