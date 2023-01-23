import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const FunctionsandEvents = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Functions and Events</h1>

        <h3>A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
        For example, a function can be called when an event occurs, like when the user clicks a button.</h3>

        <h2>JavaScript in &lt;head&gt; or &lt;body&gt;</h2>

        <br />

        <p>
        You can place any number of scripts in an HTML document.
        <br />
        Scripts can be placed in the &lt;body&gt;, or in the &lt;head&gt; section of an HTML page, or in both.
        </p>

        <br />

        <h1>JavaScript in &lt;head&gt;</h1>

        <p>
        In this example, a JavaScript function is placed in the &lt;head&gt; section of an HTML page.
        <br />
        The function is invoked (called) when a button is clicked:
        </p>

        <br />

        <h2>Demo JavaScript in Head</h2>

        <p>Inserting this script on the head of a HTML document</p>
        <code>
        &lt;script&gt; function myFunction() "{" document.getElementById(&quot;changed&quot;).innerHTML = &quot;Paragraph changed.&quot;; "}" &lt;/script&gt;
        </code>
        <br />

        <p>The Function is going to be called when the button are Clicked like in the following code</p>

        <br />
        
        <code>
        &lt;p id=&quot;changed&quot;&gt;A Paragraph&lt;/p&gt; 
        <br />
        &lt;button type=&quot;button&quot; onclick=&quot;myFunction()&quot;&gt;Try it&lt;/button&gt;
        </code>

        <br />
        <br />

        <h1>JavaScript in &lt;body&gt;</h1>

        <br />

        <p>
            In this example, a JavaScript function is placed in the &lt;body&gt; section of an HTML page.
            <br />
            The function is invoked (called) when a button is clicked:
        </p>

        <br />

        <code>
        &lt;p id=&quot;on-body&quot;&gt;A Paragraph&lt;/p&gt; 
        <br />
        &lt;button type=&quot;button&quot; onclick=&quot;mySecondFunction()&quot;&gt;Try it&lt;/button&gt;
        </code>

        <br />

        <code>
        &lt;script&gt; 
        <br />
        function mySecondFunction()  document.getElementById(&quot;on-body&quot;).innerHTML = &quot;Paragraph changed.&quot;;  
        <br />
        &lt;/script&gt;
        </code>

        <br />

        <h4>Placing scripts at the bottom of the &lt;body&gt; element improves the display speed, because script interpretation slows down the display.</h4>
    </main>
  )
}

export default FunctionsandEvents