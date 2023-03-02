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

        <br />

        <h4>Syntax</h4>

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>if</code> (condition) &#123;

                <br />

                <code style={{color:'green'}}>// block of code to be executed if the condition is true</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Note that <code style={{color:'blue'}}>if</code> is in lowercase letters. Uppercase letters (If or IF) will generate JavaScript error.</p>

            <br />
        </div>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>Make a "Good day" greeting if the hour is less than 18:00:</p>

            <code>
                <code style={{color:'blue'}}>if</code> (hour &lt; <code style={{color:'red'}}>18</code>) &#123;

                <br />

                <code> greeting = <code style={{color:'#5d0000'}}>"Good day"</code>;</code>

                <br />

                &#125;
            </code>

            <br />

            <p>The result of greeting will be:</p>

            <p><code>Good day</code></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The else Statement</h2>

        <p>Use the <code style={{color:'blue'}}>else</code> statement to specify a block of code to be executed if the condition is false.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>if</code> (condition) &#123;

                <br />

                <code style={{color:'green'}}>// block of code to be executed if the condition is true</code>

                <br />

                <code>
                    &#125; <code style={{color:'blue'}}>else</code> &#123;
                </code>

                <br />

                <code style={{color:'green'}}>//  block of code to be executed if the condition is false</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":</p>

            <code>
                <code style={{color:'blue'}}>if</code> (hour &lt; <code style={{color:'red'}}>18</code>) &#123;

                <br />

                <code> greeting = <code style={{color:'#5d0000'}}>"Good day"</code>;</code>

                <br />

                <code>
                    &#125; <code style={{color:'blue'}}>else</code> &#123;
                </code>

                <br />

                <code> greeting = <code style={{color:'#5d0000'}}>"Good evening"</code>;</code>

                <br />

                &#125;
            </code>

            <br />

            <p>The result of greeting will be:</p>

            <p><code>Good day</code></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The else if Statement</h2>

        <p>Use the <code style={{color:'blue'}}>else if</code> statement to specify a new condition if the first condition is false.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>if</code> (condition1) &#123;

                <br />

                <code style={{color:'green'}}>// block of code to be executed if the condition1 is true</code>

                <br />

                <code>
                    &#125; <code style={{color:'blue'}}>else if</code> (condition2) &#123;
                </code>

                <br />

                <code style={{color:'green'}}>// block of code to be executed if the condition1 is false and condition2 is true</code>

                <br />

                <code>
                    &#125; <code style={{color:'blue'}}>else</code> &#123;
                </code>

                <br />

                <code style={{color:'green'}}>// block of code to be executed if the condition1 is false and condition2 is false</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":</p>

            <code>
                <code style={{color:'blue'}}>if</code> (time &lt; <code style={{color:'red'}}>10</code>) &#123;

                <br />

                <code> greeting = <code style={{color:'#5d0000'}}>"Good morning"</code>;</code>

                <br />

                <code>
                    &#125; <code style={{color:'blue'}}>else if</code> (time &lt; <code style={{color:'red'}}>20</code>) &#123;
                </code>

                <br />

                <code> greeting = <code style={{color:'#5d0000'}}>"Good day"</code>;</code>

                <br />

                <code>
                    &#125; <code style={{color:'blue'}}>else</code> &#123;
                </code>

                <br />

                <code> greeting = <code style={{color:'#5d0000'}}>"Good evening"</code>;</code>

                <br />

                &#125;
            </code>

            <br />

            <p>The result of greeting will be:</p>

            <p><code>Good morning</code></p>
        </div>

    </main>
  )
}

export default JavaScriptifelseandelseif