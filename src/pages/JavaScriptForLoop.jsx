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
    </main>
  )
}

export default JavaScriptForLoop