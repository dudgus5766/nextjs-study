import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/src/pages/csr">csr로</Link>
      </h1>
      <h1>
        <Link href="/src/pages/ssg">ssg로</Link>
      </h1>
    </>
  );
}
