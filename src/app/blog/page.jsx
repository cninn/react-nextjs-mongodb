import React from 'react'
import styles from './page.module.css'
import blog from 'public/code.jpeg'
import Image from 'next/image'
import Link from 'next/link'



async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error('veri yüklemesi başarısız')
  }
  return res.json();
}

const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.container}>
        {data.map(item=>(
      <Link href={'/blog/testId'} className={styles.containerr} key={item.id}>
      <div className={styles.imgContainer}>
    <Image className={styles.img} src={blog} alt='...'/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.body}</p>
      </div>
      </Link>
        ))}


    </div>
  )
}

export default Blog
