import { useRouter } from 'next/router'
import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/" ><a className={styles.defaultLinkButton}>&#xf7db; Home</a></Link>
      |
      <Link href="/games"><a className={styles.defaultLinkButton}>&#xf7fb; Games</a></Link>
      |
      <Link href="/avatar"><a className={styles.defaultLinkButton}>&#xf11b; Avatar</a></Link>
      |
      <Link href="/create"><a className={styles.defaultLinkButton}>Create</a></Link>
      |
      <Link href="/users"><a className={styles.defaultLinkButton}>Users</a></Link>
      |
      <Link href="https://discord.com"><a className={styles.defaultLinkButton}>Discord</a></Link>
      |
      <Link href="index.html"><a className={styles.defaultLinkButton}>Log Out</a></Link>
      <hr />
    </div>
  )
}
