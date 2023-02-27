import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptBooleans = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Booleans</h1>

        <div style={{background:'#ceffce'}}>
            <br />

            <p>A JavaScript Boolean represents one of two values: <b>true</b> or <b>false</b>.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Boolean Values</h2>

        <p>Very often, in programming, you will need a data type that can only have one of two values, like</p>

        <ul>
            <li>YES / NO</li>
            <li>ON / OFF</li>
            <li>TRUE / FALSE</li>
        </ul>

        <p>For this, JavaScript has a <b>Boolean</b> data type. It can only take the values <b>true</b> or <b>false</b>.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Boolean() Function</h2>

        <p>You can use the <code style={{color:'blue'}}>Boolean()</code> function to find out if an expression (or a variable) is true:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Boolean(<code style={{color:'red'}}>10</code> &gt; <code style={{color:'red'}}>9</code>)</code>

            <br />

            <p>Display the value of Boolean(10 &gt; 9):</p>

            <p>true</p>
        </div>

        <br />

        <p>Or even easier:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>
            
            (<code style={{color:'red'}}>10</code> &gt; <code style={{color:'red'}}>9</code>)

            <br />

            <code style={{color:'red'}}>10</code> &gt; <code style={{color:'red'}}>9</code>

            <br />

            <p>Display the value of 10 &gt; 9:</p>            

            <p>true</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Comparisons and Conditions</h2>

        <p>The chapter JS Comparisons gives a full overview of comparison operators.</p>
        
        <p>The chapter JS Conditions gives a full overview of conditional statements.</p>

        <p>Here are some examples:</p>

        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>

            <tr>
                <td>==</td>
                <td>equal to</td>
                <td>if(day == "Monday")</td>
            </tr>

            <tr>
                <td>&gt;</td>
                <td>greater than</td>
                <td>if(salary &gt; 9000)</td>
            </tr>

            <tr>
                <td>&lt;</td>
                <td>less than</td>
                <td>if(age &lt; 18)</td>
            </tr>
        </table>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p><b>The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.</b></p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Everything With a "Value" is True</h2>

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code style={{color:'red'}}>100</code>

            <br />
            <br />

            <code style={{color:'red'}}>3.14</code>

            <br />
            <br />

            -<code style={{color:'red'}}>15</code>

            <br />
            <br />

            <code style={{color:'#5d0000'}}>"Hello"</code>

            <br />
            <br />

            <code style={{color:'#5d0000'}}>"false"</code>

            <br />
            <br />

            <code><code style={{color:'red'}}>7</code> + <code style={{color:'red'}}>1</code> + <code style={{color:'red'}}>3.14</code></code>

            <p>
            100 is true
            <br />
            3.14 is true
            <br />
            -15 is true
            <br />
            Any (not empty) string is true
            <br />
            Even the string 'false' is true
            <br />
            Any expression (except zero) is true
            </p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Everything Without a "Value" is False</h2>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of <b>0</b> (zero) is <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0</code>;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of 0:</p>

            <p>false</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of <b>-0</b> (minus zero) is <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = -<code style={{color:'red'}}>0</code>;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of -0:</p>

            <p>false</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of "" (empty string) is <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>""</code>;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of "":</p>

            <p>false</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of <b>undefined</b> is <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of undefined:</p>

            <p>false</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of <b>null</b> is <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>null</code>;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of null:</p>

            <p>false</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of <b>false</b> is (you guessed it) <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>false</code>;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of false:</p>

            <p>false</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>The Boolean value of <b>NaN</b> is  <b>false</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code> / <code style={{color:'#5d0000'}}>"Hallo"</code>;</code>

            <br />

            <code>Boolean(x);</code>

            <p>Display the Boolean value of NaN:</p>

            <p>false</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Booleans as Objects</h2>

        <p>Normally JavaScript booleans are primitive values created from literals:</p>

        <div style={{background:'#cecece'}}>
            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>false</code>;</code>
        </div>

        <br />

        <p>But booleans can also be defined as objects with the keyword <code style={{color:'blue'}}>new</code>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>false</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />
            <br />

            <code style={{color:'green'}}>// typeof x returns boolean</code>

            <br />

            <code style={{color:'green'}}>// typeof y returns object</code>

            <br />

            <p>Booleans and Boolean objects cannot be safely compared:</p>

            <p>boolean</p>

            <p>object</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Do not create Boolean objects.</p>

            <p>The <code style={{color:"blue"}}>new</code> keyword complicates the code and slows down execution speed.</p>

            <p>Boolean objects can produce unexpected results:</p>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>When using the <code style={{color:'red'}}>==</code> operator, x and y are <b>equal</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>false</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />
            <br />

            <p>Booleans and Boolean objects cannot be safely compared:</p>

            <p>true</p>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>When using the <code style={{color:'red'}}>===</code> operator, x and y are <b>not equal</b>:</p>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>false</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />
            <br />

            <p>Booleans and Boolean objects cannot be safely compared:</p>

            <p>false</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>Note the difference between (x==y) and (x===y).</p>
            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p><code style={{color:'red'}}>(x == y)</code> true or false?</p>


            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />

            <p>Booleans and Boolean objects cannot be safely compared:</p>

            <p>false</p>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p><code style={{color:'red'}}>(x === y)</code> true or false?</p>


            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Boolean(<code style={{color:'blue'}}>false</code>);</code>

            <br />

            <p>Booleans and Boolean objects cannot be safely compared:</p>

            <p>false</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Comparing two JavaScript objects <b>always</b> return <b>false</b>.</p>

            <br />
        </div>

    </main>
  )
}

export default JavaScriptBooleans