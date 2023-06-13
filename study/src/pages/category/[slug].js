import { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export default function CategorySlug({ time }) {
  const [clientTime, setClientTime] = useState();
  const router = useRouter();
  const { slug, from } = router.query;

  useEffect(() => {
    setClientTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1>
        Category <span className={styles.title}>{slug}</span> from
        <span className={styles.title}>{from}</span>
      </h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
