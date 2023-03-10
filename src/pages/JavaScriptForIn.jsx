import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptForIn = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h2>JavaScript For In</h2>

        {/* Just a mark to separete sections */}

        <h2>The For In Loop</h2>

        <p>The JavaScript <code style={{color:'blue'}}>for in</code> statement loops through the properties of an Object:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <code>
                <code style={{color:'blue'}}>for</code> (key <code style={{color:'blue'}}>in</code> object) &#123;

                <br />

                <code style={{color:'green'}}> code block to be executed</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> person = &#123; fname: <code style={{color:'#5d0000'}}>"John"</code>, lname: <code style={{color:'#5d0000'}}>"Doe"</code>, age: <code style={{color:'red'}}>25</code> &#125;;
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;
                
                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> x <code style={{color:'blue'}}>in</code> person) &#123;

                <br />

                text+= person[x];

                <br />

                &#125;

                <br />
            </code>

            <p>The for in statement loops through the properties of an object:</p>

            <p>John Doe 25</p>
            
        </div>

        <br />
        
        {/* Just a mark to separete sections */}

        <h2>Example Explained</h2>

        <ul>
            <li>The for in loop iterates over a person object</li>
            <li>Each iteration returns a key (x)</li>
            <li>The key is used to access the value of the key</li>
            <li>The value of the key is person[x]</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>For In Over Arrays</h2>

        <p>The JavaScript <code style={{color:'blue'}}>for in</code> statement can also loop over the properties of an Array:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <code>
                <code style={{color:'blue'}}>for</code> (variable <code style={{color:'blue'}}>in</code> array) &#123;

                <br />

                code

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> numbers =  [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>let</code> txt = <code style={{color:'#5d0000'}}>""</code>;
                
                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> x <code style={{color:'blue'}}>in</code> numbers) &#123;

                <br />

                txt += numbers[x];

                <br />

                &#125;

                <br />
            </code>

            <p>The for in statement can loops over array values:</p>

            <p>45</p>
            <p>4</p>
            <p>9</p>
            <p>16</p>
            <p>25</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Do not use <b>for in</b> over an Array if the index <b>order</b> is important.</p>

            <p>The index order is implementation-dependent, and array values may not be accessed in the order you expect.</p>

            <p>It is better to use a <b>for</b> loop, a <b>for of</b> loop, or <b>Array.forEach()</b> when the order is important.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Array.forEach()</h2>

        <p>The <code style={{color:'blue'}}>forEach()</code> method calls a function (a callback function) once for each array element.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> numbers =  [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>let</code> txt = <code style={{color:'#5d0000'}}>""</code>;
                <br />
                numbers.forEach(myFunction);
                
                <br />
                <br />

                <code style={{color:'blue'}}>function</code> myFunction(value, index, array) &#123;

                <br />

                txt += value;

                <br />

                &#125;

                <br />
            </code>

            <p>Calls a function once for each array element.</p>

            <p>45</p>
            <p>4</p>
            <p>9</p>
            <p>16</p>
            <p>25</p>
        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>The example above uses only the value parameter. It can be rewritten to:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> numbers =  [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>let</code> txt = <code style={{color:'#5d0000'}}>""</code>;
                <br />
                numbers.forEach(myFunction);
                
                <br />
                <br />

                <code style={{color:'blue'}}>function</code> myFunction(value) &#123;

                <br />

                txt += value;

                <br />

                &#125;

                <br />
            </code>

            <p>Calls a function once for each array element.</p>

            <p>45</p>
            <p>4</p>
            <p>9</p>
            <p>16</p>
            <p>25</p>
        </div>
    </main>
  )
}

export default JavaScriptForIn