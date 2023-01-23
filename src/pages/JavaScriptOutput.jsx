import React from 'react'
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptOutput = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>    
        <h1>JavaScript Output</h1>

        <h2>JavaScript Display Possibilities</h2>

        <p>JavaScript can "display" data in different ways:</p>

        <ul>
            <li>Writing into an HTML element, using innerHTML.</li>
            <li>Writing into the HTML output using document.write().</li>
            <li>Writing into an alert box, using window.alert().</li>
            <li>Writing into the browser console, using console.log().</li>
        </ul>

        <h2>Using innerHTML</h2>

        <p>
        To access an HTML element, JavaScript can use the document.getElementById(id) method.
        <br />
        The id attribute defines the HTML element. The innerHTML property defines the HTML content:
        </p>

        <h3>Example</h3>

        <br />

        <code>
            &lt;!DOCTYPE html&gt;
            <br />
            &lt;html&gt;
            <br />
            &lt;body&gt;
            <br />
            
            &lt;h1&gt;My First Web Page&lt;/h1&gt;
            <br />
            &lt;p&gt;My First Paragraph&lt;/p&gt;
            <br />
            <br />
            
            &lt;p id=&quot;demo&quot;&gt;&lt;/p&gt;
            <br />
            
            &lt;script&gt;
            document.getElementById(&quot;demo&quot;).innerHTML = 5 + 6;
            &lt;/script&gt;
            
            <br />
            <br />
            &lt;/body&gt;
            <br />
            &lt;/html&gt;
            <br />

        </code>

    <br />

    <h4>Changing the innerHTML property of an HTML element is a common way to display data in HTML.</h4>

    <br />

    <h2>Using document.write()</h2>

    <p>For testing purposes, it is convenient to use <strong>document.write()</strong>:</p>

    <h3>Example</h3>


    <code>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;body&gt;
        <br />
        <br />

        &lt;h1&gt;My First Web Page&lt;/h1&gt;
        <br />
        &lt;p&gt;My first paragraph.&lt;/p&gt;
        <br />

        <br />
        &lt;script&gt;
        document.write(5 + 6);
        &lt;/script&gt;
        <br />

        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
        <br />
    </code>

    <br />

    <p style={{color: "red"}}>Using document.write() after an HTML document is loaded, will delete all existing HTML:</p>

    <h3>Example</h3>


    <code>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;body&gt;
        <br />
        <br />

        <br />
        &lt;h1&gt;My First Web Page&lt;/h1&gt;
        <br />
        &lt;p&gt;My first paragraph.&lt;/p&gt;
        <br />
        <br />

        &lt;button type=&quot;button&quot; onclick=&quot;document.write(5 + 6)&quot;&gt;Try it&lt;/button&gt;

        <br />
        <br />

        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
    </code>

    <h4>The document.write() method should only be used for testing.</h4>

    <h2>Using window.alert()</h2>

    <p>You can use an alert box to display data:</p>

    <h3>Example</h3>

    <code>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;body&gt;

        <br />
        <br />
        <br />
        &lt;h1&gt;My First Web Page&lt;/h1&gt;
        <br />
        &lt;p&gt;My first paragraph.&lt;/p&gt;
        <br />

        <br />
        &lt;script&gt;
        window.alert(5 + 6);
        &lt;/script&gt;
        <br />

        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
    </code>

    <p>You can skip the <strong>window</strong> keyword.</p>

    <p>
        In JavaScript, the window object is the global scope object. 
        <br />
        This means that variables, properties, and methods by default belong to the window object. 
        <br />
        This also means that specifying the window keyword is optional:
    </p>

    <h3>Example</h3>

    <code>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;body&gt;

        <br />
        <br />
        <br />
        &lt;h1&gt;My First Web Page&lt;/h1&gt;
        <br />
        &lt;p&gt;My first paragraph.&lt;/p&gt;
        <br />

        <br />
        &lt;script&gt;
        alert(5 + 6);
        &lt;/script&gt;
        <br />

        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
    </code>

    <h2>Using console.log()</h2>

    <p>For debugging purposes, you can call the <strong style={{color: "red"}}> console.log()</strong> method in the browser to display data.</p>

    <h3>Example</h3>



    <code>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;body&gt;

        <br />
        <br />
        <br />
        &lt;h1&gt;My First Web Page&lt;/h1&gt;
        <br />
        &lt;p&gt;My first paragraph.&lt;/p&gt;
        <br />

        <br />
        &lt;script&gt;
        console.log(5 + 6);
        &lt;/script&gt;
        <br />

        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
    </code>

    <h2>JavaScript Print</h2>

    <p>
        JavaScript does not have any print object or print methods.
        <br />
        <br />
        You cannot access output devices from JavaScript.
        <br />
        The only exception is that you can call the window.print() method in the browser to print the content of the current window.
    </p>

    <h3>Example</h3>

    <code>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;body&gt;
        <br />

        <br />
        &lt;button onclick=&quot;window.print()&quot;&gt;Print this page&lt;/button&gt;
        <br />

        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
    </code>

    

    </main>
  )
}

export default JavaScriptOutput