import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScripttypeof = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript typeof</h1>

        {/* Just a mark to separete sections */}

        <p>In JavaScript there are 5 different data types that can contain values:</p>

        <ul>
            <li><code style={{color:'blue'}}>string</code></li>
            <li><code style={{color:'blue'}}>number</code></li>
            <li><code style={{color:'blue'}}>boolean</code></li>
            <li><code style={{color:'blue'}}>object</code></li>
            <li><code style={{color:'blue'}}>function</code></li>
        </ul>

        <br />

        <p>There are 6 types of objects:</p>

        <ul>
            <li><code style={{color:'blue'}}>Object</code></li>
            <li><code style={{color:'blue'}}>Date</code></li>
            <li><code style={{color:'blue'}}>Array</code></li>
            <li><code style={{color:'blue'}}>String</code></li>
            <li><code style={{color:'blue'}}>Number</code></li>
            <li><code style={{color:'blue'}}>Boolean</code></li>
        </ul>

        <br />

        <p>And 2 data types that cannot contain values:</p>
        
        <ul>
            <li><code style={{color:'blue'}}>null</code></li>
            <li><code style={{color:'blue'}}>undefined</code></li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The typeof Operator</h2>

        <p>You can use the <code style={{color:'blue'}}>typeof</code> operator to find the data type of a JavaScript variable.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>"John"</code> <code style={{color:'green'}}>// Return "string"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>3.14</code> <code style={{color:'green'}}>// Return "number"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>NaN</code> <code style={{color:'green'}}>// Return "number"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>false</code> <code style={{color:'green'}}>// Return "boolean"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> [<code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>3</code>, <code style={{color:'red'}}>4</code>] <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> &#123;name:<code style={{color:'#5d0000'}}>'John'</code>, age:<code style={{color:'red'}}>34</code>&#125; <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>new</code> Date() <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>function</code> () &#123;&#125; <code style={{color:'green'}}>// Return "function"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> myCar <code style={{color:'green'}}>// Return "undefined"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}>// Return "object"</code>
            </code>
        </div>

        <br />

        <p>Please observe:</p>

        <ul>
            <li>The data type of NaN is number</li>
            <li>The data type of an array is object</li>
            <li>The data type of a date is object</li>
            <li>The data type of null is object</li>
            <li>The data type of an undefined variable is <b>undefined *</b></li>
            <li>The data type of a variable that has not been assigned a value is also <b>undefined *</b></li>
        </ul>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>You cannot use <code style={{color:'blue'}}>typeof</code> to determine if a JavaScript object is an array (or a date).</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Primitive Data</h2>

        <p>A primitive data value is a single simple data value with no additional properties and methods.</p>

        <p>The <code style={{color:'blue'}}>typeof</code> operator can return one of these primitive types:</p>

        <ul>
            <li><code style={{color:'blue'}}>string</code></li>
            <li><code style={{color:'blue'}}>number</code></li>
            <li><code style={{color:'blue'}}>boolean</code></li>
            <li><code style={{color:'blue'}}>undefined</code></li>
        </ul>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>"John"</code> <code style={{color:'green'}}>// Return "string"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>3.14</code> <code style={{color:'green'}}>// Return "number"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>true</code> <code style={{color:'green'}}>// Return "boolean"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>false</code> <code style={{color:'green'}}>// Return "boolean"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> x <code style={{color:'green'}}>// Returns "undefined" (if x has no value)</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Complex Data</h2>

        <p>The <code style={{color:'blue'}}>typeof</code> operator can return one of two complex types:</p>

        <br />

        <ul>
            <li><code style={{color:'blue'}}>function</code></li>
            <li><code style={{color:'blue'}}>object</code></li>
        </ul>

        <p>The <code style={{color:'blue'}}>typeof</code> operator returns "object" for objects, arrays, and null.</p>

        <p>The <code style={{color:'blue'}}>typeof</code> operator does not return "object" for functions.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>typeof</code> &#123;name: <code style={{color:'#5d0000'}}>'John'</code>, age <code style={{color:'red'}}>34</code>&#125; <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> [<code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>3</code>, <code style={{color:'red'}}>4</code>] <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>function</code> myFunc() &#123;&#125; <code style={{color:'green'}}>// Return "function"</code>
            </code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>The <code style={{color:'blue'}}>typeof</code> operator returns "<code style={{color:'blue'}}>object</code>" for arrays because in JavaScript arrays are objects.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Data Type of typeof</h2>
    </main>
  )
}

export default JavaScripttypeof