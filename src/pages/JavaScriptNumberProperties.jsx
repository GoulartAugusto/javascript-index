import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptNumberProperties = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScriptNumberProperties</h1>

        <table>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>EPSILON</td>
                <td>The difference between 1 and the smallest number &gt; 1.</td>
            </tr>
            <tr>
                <td>MAX_VALUE</td>
                <td>The largest number possible in JavaScript</td>
            </tr>
            <tr>
                <td>MIN_VALUE</td>
                <td>The smallest number possible in JavaScript</td>
            </tr>
            <tr>
                <td>MAX_SAFE_INTEGER</td>
                <td>The maximum safe integer (2^53 - 1)</td>
            </tr>
            <tr>
                <td>MIN_SAFE_INTEGER</td>
                <td>The minimum safe integer -(2^53 - 1)</td>
            </tr>
            <tr>
                <td>POSITIVE_INFINITY</td>
                <td>Infinity (returned on overflow)</td>
            </tr>
            <tr>
                <td>NEGATIVE_INFINITY</td>
                <td>Negative infinity (returned on overflow)</td>
            </tr>
            <tr>
                <td>NaN</td>
                <td>A "Not-a-Number" value</td>
            </tr>
        </table>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript EPSILON</h2>

        <p><code style={{color:'red'}}>Number.EPSILON</code> is the difference between 1 and the smallest floating point number greater than 1.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.EPSILON;</code>
            
            <br />

            <p>The difference between 1 and the smallest floating point number greater than 1, in JavaScript is:</p>

            <code>2.220446049250313e-16</code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <p><code style={{color:'red'}}>Number.EPSILON</code>  is an ES6 feature.</p>

            <p>It does not work in Internet Explorer.</p>
            <br />
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript MAX_VALUE</h2>

        <p><code style={{color:'red'}}>Number.MAX_VALUE</code> is a constant representing the largest possible number in JavaScript.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.MAX_VALUE;</code>
            
            <br />

            <p>The largest possible number in JavaScript is:</p>

            <code>1.7976931348623157e+308</code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Number Properties Cannot be Used on Variables</h3>
            <br />
            <p>Number properties belong to the JavaScript <b>Number Object</b>.</p>

            <p>These properties can only be accessed as <code style={{color:'red'}}>Number.MAX_VALUE</code>.</p>

            <p>Using x.MAX_VALUE, where x is a variable or a value, will return <code style={{color:'red'}}>undefined</code>:</p>
            <br />
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>6</code></code>

            <br />

            <code>x.MAX_VALUE</code>
            
            <br />

            <p>Using a Number property on a variable, or value, will return undefined:</p>

            <code>undefined</code>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript MIN_VALUE</h2>

        <p><code style={{color:'red'}}>Number.MIN_VALUE</code> is a constant representing the lowest possible number in JavaScript.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.MIN_VALUE;</code>
            
            <br />

            <p>The smallest number possible in JavaScript is:</p>

            <code>5e-324</code>
        </div>


        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript MAX_SAFE_INTEGER</h2>

        <p><code style={{color:'red'}}>Number.MAX_SAFE_INTEGER</code> represents the maximum safe integer in JavaScript.</p>

        <p><code style={{color:'red'}}>Number.MAX_SAFE_INTEGER</code> is (2^53 -1).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.MAX_SAFE_INTEGER;</code>
            
            <br />

            <p>The maximum safe integer in JavaScript is:</p>

            <code>9007199254740991</code>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript MIN_SAFE_INTEGER</h2>

        <p><code style={{color:'red'}}>Number.MIN_SAFE_INTEGER</code> represents the minimum safe integer in JavaScript.</p>

        <p><code style={{color:'red'}}>Number.MIN_SAFE_INTEGER</code> is -(2^53 - 1).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.MIN_SAFE_INTEGER;</code>
            
            <br />

            <p>The minimum safe integer in JavaScript is:</p>

            <code>-9007199254740991</code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <h3>Note</h3>

            <p><code style={{color:'red'}}>MAX_SAFE_INTEGER</code> and <code style={{color:'red'}}>MIN_SAFE_INTEGER</code> are ES6 features.</p>

            <p>They do not work in Internet Explorer.</p>
            <br />
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript POSITIVE_INFINITY</h2>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.POSITIVE_INFINITY;</code>
            
            <br />

            <p>Infinity</p>

            <br />

            <p><code style={{color:'red'}}>POSITIVE_INFINITY</code> is returned on overflow:</p>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>1</code> / <code style={{color:'red'}}>0</code>;</code>

            <br />

            <p>POSITIVE_INFINITY is returned on overflow:</p>

            <p>Infinity</p>

        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript NEGATIVE_INFINITY</h2>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.NEGATIVE_INFINITY;</code>
            
            <br />

            <p>-Infinity</p>

            <br />

            <p><code style={{color:'red'}}>NEGATIVE_INFINITY</code> is returned on overflow:</p>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>-1</code> / <code style={{color:'red'}}>0</code>;</code>

            <br />

            <p>POSITIVE_INFINITY is returned on overflow:</p>

            <p>-Infinity</p>

        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript NaN - Not a Number</h2>

        <p><code style={{color:'red'}}>NaN</code> is a JavaScript reserved word for a number that is not a legal number.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.<code style={{color:'blue'}}>NaN</code>;</code>
            
            <br />

            <p>NaN</p>

            <br />

            <p>Trying to do arithmetic with a non-numeric string will result in <code style={{color:'red'}}>NaN</code> (Not a Number):</p>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code> / <code style={{color:'#5d0000'}}>"Apple"</code>;</code>

            <br />

            <p>A number divided by a non-numeric string becomes NaN (Not a Number):</p>

            <p>NaN</p>

        </div>



    </main>
  )
}

export default JavaScriptNumberProperties