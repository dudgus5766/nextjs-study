import { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';

export default function DateSlug() {
  return (
    <>
      <h1 className={styles.title}>DateSlug</h1>
    </>
  );
}

DateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
