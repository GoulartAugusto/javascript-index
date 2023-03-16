import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptWhileLoop = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript While Loop</h1>

        <p>Loops can execute a block of code as long as a specified condition is true.</p>

        {/* Just a mark to separete sections */}

    </main>
  )
}

export default JavaScriptWhileLoop