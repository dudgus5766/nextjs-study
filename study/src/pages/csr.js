import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export default function CSR({ time }) {
  const [clientTime, setClientTime] = useState();

  useEffect(() => {
    setClientTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h2 className={styles.title}>CSR Time</h2>
      <h2 className={styles.title}>{clientTime}</h2>
    </>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
