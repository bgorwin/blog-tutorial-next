import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        
      </Head>
      
      <Image className="w-24 h-24 rounded-full mx-auto" src="/../public/images/profile.jpg" alt="" width="400" height="400" />
      
      
    </Layout>
  );
}