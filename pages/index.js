import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div>
        <Image src="cb-logo.png" width="1181" height="179"></Image>
        <h1 style={{textAlign: "center"}}>This is a log out test</h1>
        <p style={{textAlign: "center"}}>Where coming soon, sorry where still building the css</p>
      </div>
      <style jsx global>{`
        body {
          background-color:#aa000a;
        }
      `}</style>
    </>
  );
}
