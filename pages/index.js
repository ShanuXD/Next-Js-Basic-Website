import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next-Basic | Home</title>
        <meta name="keywords" content="Next-Basic Home Page" />
      </Head>
      <h1 className={styles.title}>Hello</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit repellat
        dolore quidem dignissimos, aliquam, quia nobis praesentium quis quasi
        deleniti quaerat aperiam eligendi libero dolorem. Praesentium nulla
        dicta hic tempore, dolorum voluptatem laboriosam commodi, laudantium
        inventore sequi nostrum quis asperiores optio assumenda et mollitia
        molestias! Et voluptatum rem asperiores repudiandae.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit repellat
        dolore quidem dignissimos, aliquam, quia nobis praesentium quis quasi
        deleniti quaerat aperiam eligendi libero dolorem. Praesentium nulla
        dicta hic tempore, dolorum voluptatem laboriosam commodi, laudantium
        inventore sequi nostrum quis asperiores optio assumenda et mollitia
        molestias! Et voluptatum rem asperiores repudiandae.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit repellat
        dolore quidem dignissimos, aliquam, quia nobis praesentium quis quasi
        deleniti quaerat aperiam eligendi libero dolorem. Praesentium nulla
        dicta hic tempore, dolorum voluptatem laboriosam commodi, laudantium
        inventore sequi nostrum quis asperiores optio assumenda et mollitia
        molestias! Et voluptatum rem asperiores repudiandae.
      </p>
      <Link href="/users">
        <a className={styles.btn}>See All Users</a>
      </Link>
    </>
  );
}
