import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptForLoop = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript For Loop</h1>

        <p>Loops can execute a block of code a number of times.</p>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Loops</h2>

        <p>Loops are handy, if you want to run the same code over and over again, each time with a different value.</p>

        <p>Often this is the case when working with arrays:</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Instead of writing:</h3>

            <br />

            <code>
                <code>text += cars[<code style={{color:'red'}}>0</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />

                <code>text += cars[<code style={{color:'red'}}>1</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />
                
                <code>text += cars[<code style={{color:'red'}}>2</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />
                
                <code>text += cars[<code style={{color:'red'}}>3</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />
                
                <code>text += cars[<code style={{color:'red'}}>4</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />
                
                <code>text += cars[<code style={{color:'red'}}>5</code>] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

                <br />
                <br />

                <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>, <code style={{color:'#5d0000'}}>"Fiat"</code>, <code style={{color:'#5d0000'}}>"Audi"</code>]
                </code>

                <br />

                <h3>You can write:</h3>

                <br />

                <code>
                    <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; cars.length; i++) &#123;

                    <br />

                    text += cars[i] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                    <br />

                    &#125;
                </code>
            </code>

            <br />

            <p>Result:</p>

            <ul style={{listStyle:'none'}}>
                <li>BMW</li>
                <li>Volvo</li>
                <li>Saab</li>
                <li>Ford</li>
                <li>Fiat</li>
                <li>Audi</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Different Kinds of Loops</h2>

        <p>JavaScript supports different kinds of loops:</p>

        <ul>
            <li><code style={{color:'blue'}}>for</code> - loops through a block of code a number of times</li>
            <li><code style={{color:'blue'}}>for/in</code> - loops through the properties of an object</li>
            <li><code style={{color:'blue'}}>for/of</code> - loops through the values of an iterable object</li>
            <li><code style={{color:'blue'}}>while</code> - loops through a block of code while a specified condition is true</li>
            <li><code style={{color:'blue'}}>do/while</code> - also loops through a block of code while a specified condition is true</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>The For Loop</h2>

        <p>The <code style={{color:'blue'}}>for</code> statement creates a loop with 3 optional expressions:</p>

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>for</code> (expression 1; expression 2; expression 3) &#123;

                <br />

                <code style={{color:"green"}}>// code block to be executed</code>
                
                <br />

                &#125;
            </code>
        </div>

        <br />

        <p><b>Expression 1</b> is executed (one time) before the execution of the code block.</p>

        <p><b>Expression 2</b> defines the condition for executing the code block.</p>

        <p><b>Expression 3</b> is executed (every time) after the code block has been executed.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>5</code>; i++) &#123;

                <br />

                text += <code style={{color:'#5d0000'}}>"The number is "</code> + i + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                <br />

                &#125;
            </code>

            <br />

            <p>The result:</p>

            <ul style={{listStyle:'none'}}>
                <li>The number is 0</li>
                <li>The number is 1</li>
                <li>The number is 2</li>
                <li>The number is 3</li>
                <li>The number is 4</li>
            </ul>
        </div>

        <br />

        <p>From the example above, you can read:</p>

        <p>Expression 1 sets a variable before the loop starts (let i = 0).</p>
        
        <p>Expression 2 defines the condition for the loop to run (i must be less than 5).</p>

        <p>Expression 3 increases a value (i++) each time the code block in the loop has been executed.</p>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>Expression 1</h2>

        <p>Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).</p>

        <p>This is not always the case. JavaScript doesn't care. Expression 1 is optional.</p>

        <p>You can initiate many values in expression 1 (separated by comma):</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>];
                </code>

                <br />
                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>, len = cars.length, text = <code style={{color:'#5d0000'}}>""</code>; i &lt; len; i++) &#123;

                <br />

                text += cars[i] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                <br />

                &#125;
            </code>

            <p>result</p>

            <ul>
                <li>BMW</li>
                <li>Volvo</li>
                <li>Saab</li>
                <li>Ford</li>
            </ul>
        </div>

        <br />

        <p>And you can omit expression 1 (like when your values are set before the loop starts):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>, <code style={{color:'#5d0000'}}>"Fiat"</code>, <code style={{color:'#5d0000'}}>"Audi"</code>]
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>let</code> i = <code style={{color:"red"}}>0</code>;

                <br />

                <code style={{color:'blue'}}>let</code> len = cars.length;

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (; i &lt; len; i++) &#123;

                <br />

                text += cars[i] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>

                <br />

                &#125;

                <br />

            </code>

            <br />

            <p>result</p>

            <ul>
                <li>Saab</li>
                <li>Ford</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Expression 2</h2>

        <p>Often expression 2 is used to evaluate the condition of the initial variable.</p>

        <p>This is not always the case. JavaScript doesn't care. Expression 2 is also optional.</p>

        <p>If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.</p>

        <div style={{background:'lightyellow'}}>
            <br />

            <p>If you omit expression 2, you must provide a <b>break</b> inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Expression 3</h2>

        <br />

        <p>Often expression 3 increments the value of the initial variable.</p>
        
        <p>This is not always the case. JavaScript doesn't care. Expression 3 is optional.</p>

        <p>Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.</p>

        <p>Expression 3 can also be omitted (like when you increment your values inside the loop):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>, <code style={{color:'#5d0000'}}>"Fiat"</code>, <code style={{color:'#5d0000'}}>"Audi"</code>]
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>let</code> i = <code style={{color:"red"}}>0</code>;

                <br />

                <code style={{color:'blue'}}>let</code> len = cars.length;

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (; i &lt; len; ) &#123;

                <br />

                text += cars[i] + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                <br />

                i++;
                
                <br />

                &#125;

                <br />

            </code>

            <br />

            <p>result</p>

            <ul>
                <li>BMW</li>
                <li>Volvo</li>
                <li>Saab</li>
                <li>Ford</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Loop Scope</h2>

        <p>Using <code style={{color:'blue'}}>var</code> in a loop:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>var</code> i = <code style={{color:'red'}}>5</code>;

                <br />
                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>var</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>10</code>; i++) &#123;
                
                <br />

                <code style={{color:'green'}}>//some code</code>

                <br />

                &#125;

                <br />
                <br />

                <code style={{color:'green'}}>Here i is 10</code>

                <br />

                <p>10</p>
            </code>
        </div>

        <br />

        <p>Using <code style={{color:'blue'}}>let</code> in a loop:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>5</code>;

                <br />
                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>10</code>; i++) &#123;
                
                <br />

                <code style={{color:'green'}}>//some code</code>

                <br />

                &#125;

                <br />
                <br />

                <code style={{color:'green'}}>Here i is 5</code>

                <br />

                <p>5</p>
            </code>
        </div>

        <br />

        <p>In the first example, using <code style={{color:'blue'}}>var</code>, the variable declared in the loop redeclares the variable outside the loop.</p>

        <p>In the second example, using <code style={{color:'blue'}}>let</code>, the variable declared in the loop does not redeclare the variable outside the loop.</p>

        <p>When <code style={{color:'blue'}}>let</code> is used to declare the i variable in a loop, the i variable will only be visible within the loop.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>For/Of and For/In Loops</h2>

        <p>The <code style=
        {{color:'blue'}}>for/in</code> loop and the <code style=
        {{color:'blue'}}>for/of</code> loop are explained in the next chapter.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>While Loops</h2>

        <p>The <code style=
        {{color:'blue'}}>while</code> loop and the <code style=
        {{color:'blue'}}>do/while</code> are explained in the next chapters.</p>

        <br />
    </main>
  )
}

export default JavaScriptForLoop