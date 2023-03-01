import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptifelseandelseif = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript if, else, and else if</h1>

        <p>Conditional statements are used to perform different actions based on different conditions.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Conditional Statements</h2>

        <p>Very often when you write code, you want to perform different actions for different decisions.</p>

        <p>You can use conditional statements in your code to do this.</p>

        <p>In JavaScript we have the following conditional statements:</p>

        <ul>
            <li>Use <code style={{color:'blue'}}>if</code> to specify a block of code to be executed, if a specified condition is true</li>
            <li>Use <code style={{color:'blue'}}>else</code> to specify a block of code to be executed, if the same condition is false</li>
            <li>Use <code style={{color:'blue'}}>else if</code> to specify a new condition to test, if the first condition is false</li>
            <li>Use <code style={{color:'blue'}}>switch</code> to specify many alternative blocks of code to be executed</li>
        </ul>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>The <code style={{color:'blue'}}>switch</code> statement is described in the next chapter.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The if Statement</h2>

        <p>Use the <code style={{color:'blue'}}>if</code> statement to specify a block of JavaScript code to be executed if a condition is true.</p>





    </main>
  )
}

export default JavaScriptifelseandelseif