import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptSwitchStatement = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Switch Statement</h1>

        <p>The <code style={{color:'blue'}}>switch</code> statement is used to perform different actions based on different conditions.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The JavaScript Switch Statement</h2>

        <p>Use the <code style={{color:'blue'}}>switch</code> statement to select one of many code blocks to be executed.</p>

        <br />

        <h4>Syntax</h4>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>switch</code> (expression) &#123;

                <br />

                <code style={{color:'blue'}}>case</code> x:

                <br />

                <code style={{color:'green'}}>// code block</code>

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> y:

                <br />

                <code style={{color:'green'}}>// code block</code>

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>default</code>:

                <br />

                <code style={{color:'green'}}>// code block</code>

                <br />

                &#125;

            </code>
        </div>

        <br />

        <p>This is how it works:</p>

        <ul>
            <li>The switch expression is evaluated once.</li>
            <li>The value of the expression is compared with the values of each case.</li>
            <li>If there is a match, the associated block of code is executed.</li>
            <li>If there is no match, the default code block is executed.</li>
        </ul>

        <br />

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>The <code style={{color:'blue'}}>getDay()</code> method returns the weekday as a number between 0 and 6.</p>

            <p>(Sunday=0, Monday=1, Tuesday=2...)</p>

            <p>This example uses the weekday number to calculate the weekday name:</p>

            <br />

            <code>
                <code style={{color:'blue'}}>switch</code> (<code style={{color:'blue'}}>new</code> Date().getDay()) &#123;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>0</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Sunday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>1</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Monday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>2</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Tuesday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>3</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Wednesday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>4</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Thursday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>5</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Friday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>6</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Saturday"</code>;

                <br />

                &#125;

            </code>

            <p>The result of day will be:</p>

            <p><code>Thursday</code></p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The break Keyword</h2>

        <p>When JavaScript reaches a <code style={{color:'blue'}}>break</code> keyword, it breaks out of the switch block.</p>

        <p>This will stop the execution inside the switch block.</p>

        <p>It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p><b>Note:</b> If you omit the break statement, the next case will be executed even if the evaluation does not match the case.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The default Keyword</h2>

        <p>The <code style={{color:'blue'}}>default</code> keyword specifies the code to run if there is no case match:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>The <code style={{color:'blue'}}>getDay()</code> method returns the weekday as a number between 0 and 6.</p>

            <p>If today is neither Saturday (6) nor Sunday (0), write a default message:</p>

            <br />

            <code>
                <code style={{color:'blue'}}>switch</code> (<code style={{color:'blue'}}>new</code> Date().getDay()) &#123;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>6</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Today is Saturday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>0</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Today is Sunday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>default</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Looking forward to the Weekend"</code>;

                <br />

                &#125;

            </code>

            <p>The result of text will be:</p>

            <p><code>Looking forward to the Weekend</code></p>

        </div>

        <br />

        <br />

        <p>The <code style={{color:'blue'}}>default</code> case does not have to be the last case in a switch block:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>

                <code style={{color:'blue'}}>switch</code> (<code style={{color:'blue'}}>new</code> Date().getDay()) &#123;

                <br />

                <code style={{color:'blue'}}>default</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Looking forward to the Weekend"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />


                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>6</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Today is Saturday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>0</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Today is Sunday"</code>;

                <br />

                &#125;

            </code>

            <p>The result of text will be:</p>

            <p><code>Looking forward to the Weekend</code></p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>If <code style={{color:'blue'}}>default</code> is not the last case in the switch block, remember to end the default case with a break.</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Common Code Blocks</h2>      

        <p>Sometimes you will want different switch cases to use the same code.</p>

        <p>In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>

                <code style={{color:'blue'}}>switch</code> (<code style={{color:'blue'}}>new</code> Date().getDay()) &#123;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>4</code>:

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>5</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Soon it is Weekend"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>0</code>:

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>6</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"It is Weekend"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>default</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Looking forward to the Weekend"</code>;

                <br />

                &#125;

            </code>

            <p>The result of text will be:</p>

            <p><code>Soon it is Weekend</code></p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Switching Details</h2>

        <p>If multiple cases matches a case value, the <b>first</b> case is selected.</p>

        <p>If no matching cases are found, the program continues to the <b>default</b> label.</p>

        <p>If no default label is found, the program continues to the statement(s) <b>after the switch</b>.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Strict Comparison</h2>

        <p>Switch cases use <b>strict</b> comparison (===).</p>

        <p>The values must be of the same type to match.</p>

        <p>A strict comparison can only be true if the operands are of the same type.</p>

        <p>In this example there will be no match for x:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"0"</code>;

                <br />

                <code style={{color:'blue'}}>switch</code> (x) &#123;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>0</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"Off"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>1</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"On"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>;

                <br />

                <code style={{color:'blue'}}>default</code>:

                <br />

                text = <code style={{color:'#5d0000'}}>"No value found"</code>;

                <br />

                &#125;

            </code>

            <p>The result:</p>

            <p><code>No value found</code></p>

        </div>
    </main>
  )
}

export default JavaScriptSwitchStatement