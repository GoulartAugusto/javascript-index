import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptPerformance = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Performance</h1>

        <p>How to speed up your JavaScript code.</p>

        {/* Just a mark to separete sections */}

        <h2>Reduce Activity in Loops</h2>

        <p>Loops are often used in programming.</p>

        <p>Each statement in a loop, including the for statement, is executed for each iteration of the loop.</p>

        <p>Statements or assignments that can be placed outise the loop will make the loop run faster.</p>

        <div style={{background:"#ffdddd"}}>
            <h3>Bad:</h3>

            <code>
                <code style={{color:"blue"}}>for</code> (<code style={{color:"blue"}}>let</code> = <code style={{color:"red"}}>0</code> &lt; arr.length; i++) &#123;
            </code>
        </div>

        <br />
        
        <div style={{background:"#cecece"}}>
            <h3>Better Code:</h3>

            <code>
                <code style={{color:"blue"}}>for</code> l = arr.length;
                
                <br />

                <code style={{color:"blue"}}>for</code> (<code style={{color:"blue"}}>let</code> i = <code style={{color:"red"}}>0</code>; i &lt; <code style={{color:"blue"}}>l</code>; i++) &#123;
            </code>
        </div>

        <p>The bad code accesses the length property of an array each time the loop is iterated.</p>
        
        <p>If you expect to access a DOM element several times, access it once, and use it as a local variable:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example:</h3>

            <code>
                <code style={{color:"blue"}}>const</code> obj = document.getElementById("demo");
                
                <br />

                obj.innerHTML = "Hello";
            </code>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

        <h2>Reduce DOM Size</h2>

        <p>Keep the number of elements in the HTML DOM small.</p>

        <p>This will always improve page loading, and speed up rendering (page display), especially on smaller devices.</p>

        <p>Every attempt to search the DOM (like getElementByTagName) will benefit from a smaller DOM.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Avoid Unnecessary Variables</h2>

        <p>Don't create new variables if you don't plan to save values;</p>

        <p>Often you can replace code like this:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:"blue"}}>let</code> fullName = firstName + " " + lastName;
                
                <br />

                document.getElementById("demo").innerHTML = fullName;
            </code>
        </div>

        <br />

        <p>With this:</p>

        <div style={{background:"#cecece"}}>
            <code>
                document.getElementById("demo").innerHTML = firstName + " " + lastName;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Delay JavaScript Loading</h2>

        <p>Putting your scripts at the bottom of the page body lets the browser load the page first.</p>

        <p>While a script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked.</p>

        <br />
        
        <div style={{background:'lightyellow'}}>
            <br />

            <p>The HTTP specification defines that browsers should not download more than two components in parallel.</p>

            <br />
        </div>

        <p>An alternative is to use <code style={{color:"blue"}}>defer="true"</code> in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts;</p>

        <p>If possible, you can add your script to the page by code, after the page has loaded:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>
        
            <code>
                &lt;script&gt;

                <br />

                window.onload = <code style={{color:'blue'}}>function</code> &#123;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>const</code> element = document.createElement("script");

                <br />

                &nbsp;&nbsp;element.src = "myScript.js";

                <br />

                &nbsp;&nbsp;document.body.appendChild(element);

                <br />

                &#125;;

                <br />

                &lt;/script&gt;
            </code>
        </div>

        {/* Just a mark to separete sections */}

        <h2>Avoid Using with</h2>

        <p>Avoid using the <code style={{color:"blue"}}>with</code> keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.</p>

        <p>The <code style={{color:"blue"}}>with</code> keyword is <b>not allowed</b> in strict mode.</p>

        <br />
    </main>
  )
}

export default JavaScriptPerformance