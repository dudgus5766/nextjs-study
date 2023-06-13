import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';
import CSR from './csr';

export default function SSG({ time }) {
  const [clientTime, setClientTime] = useState();

  useEffect(() => {
    setClientTime(new Date().toISOString());
  }, []);

  return (
    <div>
      <main>
        <h2>CSR Time</h2>
        <h2>{clientTime}</h2>
      </main>
    </div>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
