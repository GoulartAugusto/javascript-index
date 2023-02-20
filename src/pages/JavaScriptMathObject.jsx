import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptMathObject = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Math Object</h1>

        <div style={{background:'#bbffbb'}}>
            <br />
            <p>The JavaScript Math object allows you to perform mathematical tasks on numbers.</p>
            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.PI;</code>

            <br />

            <p>Math.PI returns the ratio of a circle's circumference to its diameter:</p>

            <p>3.141592653589793</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Math Object</h2>

        <p>Unlike other objects, the Math object has no constructor.</p>

        <p>The Math object is static.</p>

        <p>All methods and properties can be used without creating a Math object first.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math Properties (Constants)</h2>

        <p>The syntax for any Math property is : <code style={{color:'blue'}}>Math.property</code>.</p>

        <p>JavaScript provides 8 mathematical constants that can be accessed as Math properties:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code></code>
        </div>





    </main>
  )
}

export default JavaScriptMathObject