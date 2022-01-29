import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { withSiteData } from '../server/withSiteData';

export default function Home() {
  const counter = useSelector(({ ui }) => {
    return ui.counter;
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/test">Go to test page</Link>

      <div>{counter}</div>
    </div>
  );
}

export const getStaticProps = withSiteData()();
