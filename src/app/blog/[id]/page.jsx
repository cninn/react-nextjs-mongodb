import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import user from 'public/webdev2.jpeg'
import dev from 'public/webdev1.jpeg'
import { notFound } from "next/navigation";

async function getData(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    next:{revalidate:10}
  })

  if(!res.ok){
   return notFound()
  }
  return res.json();
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.desc}>
          <h2>
            {data.title}
          </h2>
          <p>
          {data.body}
          </p>
          <Image src={user} className={styles.userimg} alt="..." />
        </div>
        <div className={styles.postimgcontainer}>
          <Image className={styles.postimg} src={dev} alt="..." />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab placeat,
        labore, dolor facilis expedita cumque sequi nihil modi sit ullam sed
        animi amet ipsa quos eius! Voluptatum, dolorum labore inventore autem
        corrupti natus earum nesciunt itaque quaerat, asperiores dolore magni
        nemo dignissimos. Obcaecati libero possimus recusandae necessitatibus
        distinctio architecto, incidunt est beatae. Eius animi quibusdam vero
        eos magnam soluta voluptas voluptatem vel corporis reiciendis quasi
        delectus quisquam, temporibus esse! Ducimus distinctio atque temporibus
        in inventore ipsam odio optio debitis impedit, quisquam sequi commodi ad
        provident voluptates recusandae vel perferendis voluptatum dolores
        doloremque illo unde ratione, eos rerum molestias. Amet quae
        reprehenderit consectetur eius. Officiis deserunt modi corrupti
        repellendus ad perferendis porro, in quos neque enim! Accusantium,
        deleniti? Dicta fugiat nam maiores accusantium. Enim, qui quasi
        reprehenderit ab quidem, dicta nesciunt quos provident animi expedita
        culpa temporibus ipsum iusto harum error, possimus sint officia a.
        Commodi consequuntur omnis, atque voluptas saepe aliquid temporibus
        voluptatem minus fuga, laborum dignissimos fugit, accusantium tempore ad
        inventore est incidunt maxime voluptate beatae nobis eligendi optio? Nam
        dolorum consequuntur, dolor sint beatae ex, perferendis officiis iste,
        aperiam nihil velit fuga similique voluptatum dolorem recusandae
        consequatur non quidem id? Pariatur quisquam neque similique provident.
        Aspernatur, voluptate quo.
      </p>
    </div>
  );
};

export default BlogPost;
