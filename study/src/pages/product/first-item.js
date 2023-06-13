import { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';

export default function FirstItem({ time }) {
  const [clientTime, setClientTime] = useState();

  useEffect(() => {
    setClientTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1 className={styles.title}>First Item</h1>
    </>
  );
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};