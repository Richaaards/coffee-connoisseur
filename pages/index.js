import Head from "next/head";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Banner button click test");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseurs</title>
        <meta name="description" content="Discover Coffee Shops from Connoisseurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
