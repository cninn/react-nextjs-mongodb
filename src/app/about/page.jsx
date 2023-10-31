import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import aboutHero from 'public/setupdesk.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
      <Image className={styles.img} src={aboutHero} alt='...'/>
      <div className={styles.imgText}>
        <h3>Dijital Dünyada İz Bırakın</h3>
        <h5>Tasarımın Gücü, Bizim Ellerimizde</h5>
      </div>
      </div>

      <div className={styles.descContainer}>
        <div className={styles.desc}>
          <h2 className={styles.descTitle} >Biz Kimiz?</h2>
          <p className={styles.descText}>
          Web tasarım dünyasının öncüsü olarak, yaratıcılığı ve işlevselliği bir araya getirerek müşterilerimize benzersiz dijital deneyimler sunuyoruz. Ekibimiz, web tasarımı, geliştirme ve dijital pazarlama konularında uzmanlaşmış profesyonellerden oluşuyor. İster küçük bir işletme, ister büyük bir şirket olun, projelerinizi hayata geçirmek için gereken uzmanlığa ve deneyime sahibiz. Müşteri odaklı yaklaşımımız, her işinizi birinci önceliğimiz haline getirirken, kreatif tasarımlarımız ve son teknolojiye dayalı çözümlerimiz, markanızı çevrimiçi dünyada öne çıkarmanıza yardımcı olacak.
          </p>
        </div>
       <div className={styles.desc}>
       <h2 className={styles.descTitle}>Neler Yapıyoruz?</h2>
          <p className={styles.descText}>
          Dijital dünyada varlık göstermek isteyen herkes için özelleştirilmiş çözümler sunuyoruz. Web tasarımından uygulama geliştirmeye, SEO optimizasyonundan içerik yönetimine kadar geniş bir yelpazede hizmetler sunuyoruz. Web siteleri, kullanıcı dostu tasarımlarımızla çarpıcı ve etkileyici hale getiriyoruz. E-ticaret projelerinizde size özel çözümler sunarak satışlarınızı artırıyoruz. Dijital pazarlama stratejilerimizle markanızı hedef kitlenize ulaştırıyoruz. İşte bu yüzden, müşterilerimiz bizi işlerini dijital dünyada büyütmeleri için güvenilir bir partner olarak görüyor. Her projede en iyi sonuçları elde etmek için buradayız ve sizi dijital başarınıza taşımak için sabırsızlanıyoruz.
          </p>
          <Link href={"/contact"} style={{alignSelf:'flex-end'}}>
       
          <button className={styles.button}>İletişim <ArrowForwardIcon className={styles.icon}/></button>
          </Link>
       </div>
      </div>
    
    </div>
  )
}

export default About
