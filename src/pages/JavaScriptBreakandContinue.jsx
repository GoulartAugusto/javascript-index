import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptBreakandContinue = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript While Loop</h1>

        <p>The <code style={{color:'blue'}}>break</code> statement "jumps out" of a loop.</p>

        <p>The <code style={{color:'blue'}}>continue</code> statement "jumps over" one iteration in the loop.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Break Statement</h2>

        <p>You have already seen the <code style={{color:'blue'}}>break</code> statement used in an earlier chapter of this tutorial. It was used to "jump out" of a <code style={{color:'blue'}}>switch()</code> statement.</p>

        <p>The <code style={{color:'blue'}}>break</code> statement can also be used to jump out of a loop:</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>
                    <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>10</code>; i++) &#123;
                </code>

                <br />

                <code>
                    <code style={{color:'blue'}}>if</code> (i === <code style={{color:'red'}}>3</code>) &#123; <code style={{color:'blue'}}>break</code>; &#125;
                </code>

                <br />

                <code>
                    <code>text += <code style={{color:'#5d0000'}}>"The number is "</code> + i + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>
                </code>

                <br />

                &#125;
            </code>

            <h4>A loop with a break statement.</h4>

            <p>The number is 0</p>
            <p>The number is 1</p>
            <p>The number is 2</p>
        </div>

        <br />
        
        <p>In the example above, the <code style={{color:'blue'}}>break</code> statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Continue Statement</h2>

        <p>The <code style={{color:'blue'}}>continue</code> statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.</p>
        
        <p>This example skips the value of 3:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>
                    <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>10</code>; i++) &#123;
                </code>

                <br />

                <code>
                    <code style={{color:'blue'}}>if</code> (i === <code style={{color:'red'}}>3</code>) &#123; <code style={{color:'blue'}}>continue</code>; &#125;
                </code>

                <br />

                <code>
                    <code>text += <code style={{color:'#5d0000'}}>"The number is "</code> + i + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>
                </code>

                <br />

                &#125;
            </code>

            <h4>A loop with a continue statement.</h4>

            <p>A loop which will skip the step where i = 3.</p>

            <br />

            <p>The number is 0</p>
            <p>The number is 1</p>
            <p>The number is 2</p>
            <p>The number is 4</p>
            <p>The number is 5</p>
            <p>The number is 6</p>
            <p>The number is 7</p>
            <p>The number is 8</p>
            <p>The number is 9</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Labels</h2>
    
        <p>To label JavaScript statements you precede the statements with a label name and a colon:</p>
    
        <div style={{background:'#cecece'}}>
            <code>label:</code>

            <br />

            <code>statements</code>
        </div>

        <br />

        <p>The <code style={{color:'blue'}}>break</code> and the <code style={{color:'blue'}}>continue</code> statements are the only JavaScript statements that can "jump out of" a code block.</p>

        <br />

        <p>Syntax:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>break <i>labelname</i>;</code>

            <br />

            <code>continue <i>labelname</i>;</code>
        </div>

        <br />

        <p>The <code style={{color:'blue'}}>continue</code> statement (with or without a label reference) can only be used to <b>skip one loop iteration</b>.</p>

        <p>The <code style={{color:'blue'}}>break</code> statement, without a label reference, can only be used to <b>jump out of a loop or a switch</b>.</p>

        <p>With a label reference, the break statement can be used to <b>jump out of any code block</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>];
                </code>

                <br />

                <code>
                    list: &#123;
                </code>

                <br />

                <code>text += cars[<code style={{color:'red'}}>0</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />

                <code>text += cars[<code style={{color:'red'}}>1</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />

                <code>
                    <code style={{color:'blue'}}>break</code> list;
                </code>

                <br />

                <code>text += cars[<code style={{color:'red'}}>2</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />

                <code>text += cars[<code style={{color:'red'}}>3</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />

                &#125;
            </code>

            <p>BMW</p>
            <p>Volvo</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>A code block is a block of code between &#123; and &#125;</p>
        
            <br />
        </div>
    </main>
  )
}

export default JavaScriptBreakandContinue