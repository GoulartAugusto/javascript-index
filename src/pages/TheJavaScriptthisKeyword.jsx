import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const TheJavaScriptthisKeyword = () => {
  return (
    <main className={styles.main}>
      <Link href='/'>Homepage</Link>

      <h1>The JavaScript <b>this</b> Keyword</h1>

      {/* Just a mark to separete sections */}
      
      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            
        </code>
      </div>

    </main>
  )
}

export default TheJavaScriptthisKeyword