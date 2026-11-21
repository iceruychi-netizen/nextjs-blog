import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Nguyễn Hữu Triết';
export const siteTitle = "Triet's Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Blog cá nhân của Nguyễn Hữu Triết, làm bằng Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.avatar}>HT</div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p className={utilStyles.lightText}>Sinh viên năm 3, thích chơi game.</p>
          </>
        ) : (
          <>
            <Link href="/">
              <div className={styles.avatarSmall}>HT</div>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
