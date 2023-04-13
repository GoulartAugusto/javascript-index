import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptErrors = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Errors</h1>

        {/* Just a mark to separete sections */}

        <h2>Throw, and Try...Catch..Finally</h2>

        <p>The <code style={{color:'red'}}>try</code> statement defines a code block to run (to try).</p>

        <p>The <code style={{color:'red'}}>catch</code> statement defines a code block to handle any error.</p>

        <p>The <code style={{color:'red'}}>finally</code> statement defines a code block to run regardless of the result.</p>

        <p>The <code style={{color:'red'}}>throw</code> statement defines a custom error.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Errors Will Happen!</h2>

        <p>When executing JavaScript code, different errors can occur.</p>

        <p>Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>In this example we mosspelled "alert" as "adddlert" to deliberatly produce an error:</p>

            <br />

            <code>
                <code>&lt;p id="demo"&gt;&lt;/p&gt;</code>

                <br />
                <br />

                <code>&lt;script&gt;</code>
                
                <br />

                <code><code style={{color:'blue'}}>try</code> &#123;</code>
            
                <br />

                adddlert(<code style={{color:"#5d0000"}}>"Welcome guest!"</code>);

                <br />

                &#125;

                <br />

                <code><code style={{color:'blue'}}>catch</code>(err) &#123;</code>

                <br />

                document.getElementById("demo").innerHTML = err.message;

                <br />

                &#125;

                <br />

                &lt;/script&gt;
            </code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>JavaScript catches <b>adddlert</b> as an error, and executes the catch code to handle it.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript try and catch</h2>

        <p>The <code style={{color:'red'}}>try</code> statement allows you to define a block of code to be tested for errors while it is being executed.</p>

        <p>The <code style={{color:'red'}}>catch</code> statement allows you to define a block of code to be executed, if an error occurs in the try block.</p>

        <p>The JavaScript statements <code style={{color:'red'}}>try</code> and <code style={{color:'red'}}>catch</code> come in pairs:</p>
   
        <br />

        <div style={{background:'#cecece'}}>
            <code>
                try &#123;

                <br />

                <i>Block of code to try</i>

                <br />

                &#125;

                <br />

                catch(err) &#123;

                <br />

                <i>Block of code to handle errors</i>

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Throws Errors</h2>

        <p>When an error occurs, JavaScript will normally stop and generate an error message.</p>
   
        <p>The technical term for this is: JavaScript will <b>throw an exception (throw an error)</b>.</p>

        <div style={{background:'lightyellow'}}>
            <br />

            <p>JavaScript will actually create an <b>Error object</b> with two properties: <b>name</b> and <b>message</b>.</p>
        
            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The throw Statement</h2>

        <p>The <code style={{color:'red'}}>throw</code> statement allows you to create a custom error.</p>
        
        <p>Technically you can <b>throe an exception (throw an error).</b></p>

        <p>The exception can be a JavaScript <code style={{color:'red'}}>Script</code>, a <code style={{color:'red'}}>Number</code>, a <code style={{color:'red'}}>Boolean</code> or an <code style={{color:'red'}}>Object</code>:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:'blue'}}>throw</code> <code style={{color:'#5d0000'}}>"To big"</code>; <code style={{color:'green'}}>// throw a text</code>

                <br />

                <code style={{color:'blue'}}>throw</code> <code style={{color:'red'}}>500</code>; <code style={{color:'green'}}>// throw a number</code>
            </code>
        </div>

        <br />

        <p>If you use <code style={{color:'red'}}>throw</code> together with <code style={{color:'blue'}}>try</code> and <code style={{color:'blue'}}>catch</code>, you can control program flow and generate custom error messages.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Input Validation Example</h2>

        <p>This example examines inout. If the calue is wrong, an exception (err) is thrown.</p>

        <p>The exception (err) is caught by the catch statement and a custom error message is displayed:</p>

        <br />

        
    </main>
  )
}

export default JavaScriptErrors