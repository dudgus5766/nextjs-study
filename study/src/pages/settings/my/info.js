import { useEffect, useState } from 'react';
import styles from '../../../../styles/Home.module.css';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  console.log('server');

  return {
    props: {},
  };
}

export default function MyInfo({ time }) {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;

  return (
    <>
      <h1 className={styles.title}>My Info</h1>
      <h1 className={styles.title}>Clicked {String(clicked)}</h1>
      <h1 className={styles.title}>Status : {status}</h1>
      <button
        onClick={() => {
          alert('clicked');
          setClicked(true);
          location.replace('/settings/my/info?status=editing');
        }}>
        edit(replace)
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          alert('clicked');
          setClicked(true);
          router.push('/settings/my/info?status=editing');
        }}>
        edit(push)
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          alert('clicked');
          setClicked(true);
          router.push('/settings/my/info?status=editing', undefined, {
            shallow: true,
          });
        }}>
        edit(shallow)
      </button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
