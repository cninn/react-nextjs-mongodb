import React from 'react'
import styles from './page.module.css'
import blog from 'public/code.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>

      <Link href={'/blog/testId'} className={styles.containerr}>
      <div className={styles.imgContainer}>
    <Image className={styles.img} src={blog} alt='...'/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quam facilis laborum dolor sint, laboriosam tempore nostrum quas pariatur debitis nesciunt facere alias quo excepturi, quasi temporibus. Obcaecati, aliquid earum!</p>
      </div>
      </Link>

      <Link href={'/blog/testId'} className={styles.containerr}>
      <div className={styles.imgContainer}>
    <Image className={styles.img} src={blog} alt='...'/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quam facilis laborum dolor sint, laboriosam tempore nostrum quas pariatur debitis nesciunt facere alias quo excepturi, quasi temporibus. Obcaecati, aliquid earum!</p>
      </div>
      </Link>

      <Link href={'/blog/testId'} className={styles.containerr}>
      <div className={styles.imgContainer}>
    <Image className={styles.img} src={blog} alt='...'/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quam facilis laborum dolor sint, laboriosam tempore nostrum quas pariatur debitis nesciunt facere alias quo excepturi, quasi temporibus. Obcaecati, aliquid earum!</p>
      </div>
      </Link>
    </div>
  )
}

export default Blog
