import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptTemplateLiterals = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScriptTemplateLiterals</h1>

        <div style={{backgroundColor:'#a1ffa1'}}>
          <h2>Synonymus</h2>
          <ul>
            <li>Template Literals</li>
            <li>Template Strings</li>
            <li>String Templates</li>
            <li>Back-Tics Syntax</li>
          </ul>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

    
    </main>
  )
}

export default JavaScriptTemplateLiterals