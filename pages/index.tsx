import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Hello</div>

      <Link href="/">
      <div>Главная</div>
      </Link>
      <Link href="/users">
      <div>Пользователи</div>
      </Link>
    </div>
  )
}
