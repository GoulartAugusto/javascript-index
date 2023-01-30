import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptBigInt = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript BigInt</h1>

        <div style={{backgroundColor:'#97ff97'}}>
            <br />
            <p>JavaScript <code style={{color:'red'}}>BigInt</code> variables are used to store big integer values that are too big to be represented by a normal JavaScript <code style={{color:'red'}}>Number</code>.</p>
            <br />
        </div>

      {/* Just a mark to separete sections */}

        <h2>JavaScript Integer Accuracy</h2>

        <p>JavaScript integers are only accurate up to 15 digits:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Integer Precision</h3>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>999999999999999</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>9999999999999999</code>;</code>

            <br />

            <p>Integers (numbers without a period or exponent notation) are accurate up to 15 digits:</p>

            <p>999999999999999</p>

            <p>10000000000000000</p>
        </div>

        <br />

        <p>In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).</p>

        <p>With this standard, large integer cannot be exactly represented and will be rounded.</p>

        <p>Because of this, JavaScript can only safely represent integers:</p>

        <p>Up to <b>9007199254740991</b> +(253-1)</p>

        <p>and</p>

        <p>Down to <b>-9007199254740991</b> -(253-1).</p>
        
        <p>Integer values outside this range lose precision.</p>

        <br />

      {/* Just a mark to separete sections */}

        <h2>How to Create a BigInt</h2>

        <p>To create a <code style={{color:'red'}}>BigInt</code>, append n to the end of an integer or call <code style={{color:'red'}}>BigInt()</code>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>9999999999999999</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>9999999999999999n</code>;</code>

            <br />

            <p>Integers (numbers without a period or exponent notation) are accurate up to 15 digits:</p>

            <p>10000000000000000</p>

            <p>9999999999999999</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>1234567890123456789012345n</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = BigInt(<code style={{color:'red'}}>1234567890123456789012345</code>);</code>

            <br />

            <p>Integers (numbers without a period or exponent notation) are accurate up to 15 digits:</p>

            <p>123456789012345678901234567890</p>

            <p>123456789012345678901234567890</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}


        <h2>BigInt: A new JavaScript Datatype</h2>

        <p>The JavaScript <code style={{color:'red'}}>typeof</code> a <code style={{color:'red'}}>BigInt</code> is "bigint":</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = BigInt(<code style={{color:'red'}}>999999999999999</code>);</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> type = <code style={{color:'blue'}}>typeof</code> x;</code>

            <br />

            <p>The typeof a BigInt is:</p>

            <p>bigint</p>

        </div>

        <br />

        <p><code style={{color:'red'}}>BigInt</code> is the second numeric data type in JavaScript (after <code style={{color:'red'}}>Number</code>).</p>

        <p>With <code style={{color:'red'}}>BigInt</code> the total number of supported data types in JavaScript is 8:</p>

        <br />

        <ul style={{listStyle:'decimal'}}>
            <li>String</li>
            <li>Number</li>
            <li>Bigint</li>
            <li>Boolean</li>
            <li>Undefined</li>
            <li>Null</li>
            <li>Symbol</li>
            <li>Object</li>
        </ul>

        <br />

      {/* Just a mark to separete sections */}

        <h2>BigInt Operators</h2>

        <p>Operators that can be used on a JavaScript Number can also be used on a BigInt.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>BigInt Multiplication Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = 9007199254740995n;</code>

            <br />

            
            <code><code style={{color:'blue'}}>let</code> y = 9007199254740995n;</code>

            <br />
            
            <code><code style={{color:'blue'}}>let</code> z = x * y;</code>

            <br />

            <p>Operators that can be used a Number can be used on a BigInt.</p>

            <p>81129638414606735738984533590025</p>

        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>

            <p>Arithmetic between a <code style={{color:'red'}}>BigInt</code> and a <code style={{color:'red'}}>Number</code> is not allowed (type conversion lose information).</p>

            <p>Unsigned right shift (&gt;&gt;&gt;) can not be done on a <code style={{color:'red'}}>BigInt</code> (it does not have a fixed width).</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>BigInt Decimals</h2>

        <p>A <code style={{color:'red'}}>BigInt</code> can not have decimals.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>BigInt Division Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = 5n;</code>

            <br />

            
            <code><code style={{color:'blue'}}>let</code> y = x / <code style={{color:'red'}}>2</code>;</code>

            <br />
            
            <code><code style={{color:'green'}}>// Error: Cannot mix BigInt and other types, use explicit conversion.</code></code>

            <br />

            <p>A BigInt can not have decimals.</p>

            <p>Cannot mix BigInt and other types, use explicit conversions.</p>

            <br />
            <br />

            <code><code style={{color:'blue'}}>let</code> x = 5n;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> y = Number(x) / <code style={{color:'red'}}>2</code>;</code>

        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>BigInt Hex, Octal and Binary</h2>

        <p><code style={{color:'red'}}>BigInt</code> can also be written in hexadecimal, octal, or binary notation:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>BigInt Division Example</h3>

            <code><code style={{color:'blue'}}>let</code> hex = 0x20000000000003n;</code>

            <br />

            
            <code><code style={{color:'blue'}}>let</code> oct = 0o400000000000000003n;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> bin = 0b100000000000000000000000000000000000000000000000000011n;</code>

            <br />
            
            <p>9007199254740995</p>
            
            <p>9007199254740995</p>
            
            <p>9007199254740995</p>

        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Precision Curiosity</h2>

        <p>Rounding can compromise program security:</p>

        <div style={{backgroundColor:'#cecece'}}>
            <h3>MAX_SAFE_INTEGER Example</h3>

            <code><code style={{color:'red'}}>9007199254740992</code> === <code style={{color:'red'}}>9007199254740993</code>; <code style={{color:'green'}}>// is true !!!</code></code>

            <br />
            
            <p>Is 9007199254740992 equal to 9007199254740993?</p>
            
            <p>true</p>

        </div>

        <br />

        <h2>BigInt is supported in all browsers since September 2020:</h2>

      {/* Just a mark to separete sections */}

        <h2>Minimum and Maximum Safe Integers</h2>

        <p>ES6 added max and min properties to the Number object:</p>

        <ul>
            <li>MAX_SAFE_INTEGER</li>
            <li>MIN_SAFE_INTEGER</li>
        </ul>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>MAX_SAFE_INTEGER Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.MAX_SAFE_INTEGER;</code>

            <br />
            
            <p>9007199254740991</p>

        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>MIN_SAFE_INTEGER Example</h3>

            <code><code style={{color:'blue'}}>let</code> x = Number.MIN_SAFE_INTEGER;</code>

            <br />
            
            <p>-9007199254740991</p>

        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>The Number.isInteger() Method</h2>

        <p>The <code style={{color:'red'}}>Number.isInteger()</code> method returns <code style={{color:'red'}}>true</code> if the argument is an integer.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example:isInteger();</h3>

            <code>Number.isInteger(<code style={{color:'red'}}>10</code>) x = Number.MIN_SAFE_INTEGER;</code>

            <br />

            <code>Number.isInteger(<code style={{color:'red'}}>10.5</code>) x = Number.MIN_SAFE_INTEGER;</code>
            
            <p>The isInteger() method returns true if the argument is an integer.</p>

            <p>Otherwise it returns false.</p>

            <p>true</p>

            <p>false</p>

        </div>

        <br />

      {/* Just a mark to separete sections */}

      <h2>The Number.isSafeInteger() Method</h2>

      <p>A safe integer is an integer that can be exactly represented as a double precision number.</p>

      <p>The <code style={{color:'red'}}>Number.isSafeInteger()</code> method returns <code style={{color:'red'}}>true</code> if the argument is a safe integer.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
            <h3>Example isSafeInteger()</h3>

            <code>Number.isSafeInteger(<code style={{color:'red'}}>10</code>);</code>

            <br />

            <code>Number.isSafeInteger(<code style={{color:'red'}}>12345678901234567890</code>) </code>
            
            <p>The isSafeInteger() method returns true if the argument is a safe integer.</p>

            <p>Otherwise it returns false.</p>

            <p>true</p>

            <p>false</p>

        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <br />
          <p>Safe integers are all integers from -(253 - 1) to +(253 - 1).
          This is safe: 9007199254740991. This is not safe: 9007199254740992.</p>
          <br />
        </div>


    </main>
  )
}

export default JavaScriptBigInt