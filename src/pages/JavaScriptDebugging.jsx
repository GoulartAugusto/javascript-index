import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptDebugging = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Debugging</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:"lightyellow"}}>
            <br />

            <p>Errors can (will) happen, every time you write some new computer code.</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Code Debugging</h2>

        <p>Programming code might contain syntax errors, or logical errors.</p>

        <p>Many of these errors are diffucult to diagnose.</p>

        <p>Often, when programming code constains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.</p>

        <p>Searching for (and fixing) errors in programming code is called code debugging.</p>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Debuggers</h2>

        <p>Debugging is not easy. But furtunately, all modern browsers have a built-in JavaScript debugger.</p>

        <p>Built-in debuggers can be turned on and off, forcing errors to be reported to the user.</p>

        <p>With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.</p>

        <p>Normally (otherwiese follow steps at the bottom of this page), you activate debugging in your browser with the F12 key, and select "Console" in the debugger menu.</p>

        {/* Just a mark to separete sections */}

        <h2>The console.log() Method</h2>

        <p>If your browser support debugging, you can use <code style={{color:'blue'}}>console.log()</code> to display JavaScript in the debugger window:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>&lt;!DOCTYPE html&gt;</code>

                <br />

                <code>&lt;html&gt;</code>

                <br />

                <code>&lt;body&gt;</code>

                <br />
                <br />

                <code>&lt;h1&gt;</code>My First Web Page<code>&lt;/h1&gt;</code>

                <br />
                <br />

                <code>&lt;script&gt;</code>

                <br />

                a = <code style={{color:'red'}}>5</code>;

                <br />

                b = <code style={{color:'red'}}>6</code>;

                <br />
                
                a + b = c

                <br />
                
                console.log(c)

                <br />

                <code>&lt;/script&gt;</code>

                <br />
                <br />

                <code>&lt;body&gt;</code>

                <br />
                
                <code>&lt;html&gt;</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Setting Breakpoints</h2>

        <p>In the debugger window, you can set breakpoints in the JavaScript code.</p>

        <p>At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.</p>

        <p>After examining values, you can resume the execution of code (tipically with a play button)</p>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>The debugger Keyword</h2>

        <p>The <code style={{color:'red'}}>debugger</code> keyword stips the execution of JavaScript, and call (if available) the debugging fuction.</p>

        <p>This has the same function as setting a breakpoint in the debugger.</p>

        <p>If no debugging is available, the debugger statement has no effect.</p>
    
        <p>With the debugger turned on, this code will stop executing before it exeutes the third line.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:"red"}}>15</code> * <code style={{color:"red"}}>5</code>;

                <br />

                <code style={{color:'blue'}}>debugger</code>;

                <br />

                document.getElementById("demo").innerHTML = x;
            </code>

            <br />

            <code>75</code>

            <p>With the debugger turned on, the code below should stop executing before it executes the third line.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Major Browsers' Debugging Tools</h2>

        <p>Normally, you activate debugging in your browser with F12 , and select "Console" in the debugger menu.</p>

        <p>Otherwise follow these steps:</p>

        <h3>Chrome</h3>

        <ul>
            <li>Open the browser.</li>
            <li>From the menu, select "More tools".</li>
            <li>From tools, choose "Developer tools".</li>
            <li>Finnaly, select Console</li>
        </ul>

        <h3>Firefox</h3>

        <ul>
            <li>Open the browser.</li>
            <li>From the menu, select "Web Developer"</li>
            <li>Finally, select "Web Console".</li>
        </ul>

        <h3>Edge</h3>

        <ul>
            <li>Open the browser.</li>
            <li>From the menu, select "Developer Tools".</li>
            <li>Finnaly, select "Console".</li>
        </ul>

        <h3>Opera</h3>

        <ul>
            <li>Open the browser.</li>
            <li>From the menu, select "Developer".</li>
            <li>From "Developer", select "Developer tools".</li>
            <li>Finnaly, select Console</li>
        </ul>

        <h3>Safari</h3>

        <ul>
            <li>Go to Safari, Preferences, Advanced in the main menu.</li>
            <li>Check "Enable Show Develop menu in menu bar".</li>
            <li>When the new option "Develop" appears in the menu:</li>
            <li>Choose "Show Error Console".</li>
        </ul>

        {/* Just a mark to separete sections */}

        <h2>Did you know?</h2>

        <div style={{background:"lightyellow"}}>
            <br />

            <p>Debugging is the process of testing, finding, and reducing bugs (errors) in computer programs.</p>

            <p>The first known computer bug was a real bug (an insect) stuck in the electronics.</p>

            <br />
        </div>



    </main>
  )
}

export default JavaScriptDebugging