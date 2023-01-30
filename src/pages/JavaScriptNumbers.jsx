import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptNumbers = () => {
  return (
    <main className={styles.main}>
      <Link href='/'>Homepage</Link>
      <h1>JavaScript Numbers</h1>

      <p>JavaScript has only one type of number. Numbers can be written with or without decimals.</p>

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}> // A number with decimals</code></code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>3</code>; <code style={{color:'green'}}> // A number without decimals</code></code>
      </div>

      <br />

      <p>Extra large or extra small numbers can be written with scientific (exponent) notation:</p>

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>123e5</code>; <code style={{color:'green'}}>// 12300000</code></code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>123e-5</code>; <code style={{color:'green'}}>// 0.00123</code></code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>JavaScript Numbers are Always 64-bit Floating Point</h2>

      <p>Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.</p>

      <p>JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.</p>

      <p>This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:</p>

      <table>
        <tr>
          <th>Value (aka Fraction/Mantissa)</th>
          <th>Exponent</th>
          <th>Sign</th>
        </tr>
        <tr>
          <td>52 bits (0 - 51)</td>
          <td>11 bits (52 - 62)</td>
          <td>1 bit (63)</td>
        </tr>
      </table>

      {/* Just a mark to separete sections */}

      <h2>Integer Precision</h2>

      <p>Integers (numbers without a period or exponent notation) are accurate up to 15 digits.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>999999999999999</code>; <code style={{color:'green'}}>// x will be 999999999999999</code></code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>9999999999999999</code>; <code style={{color:'green'}}>// y will be 10000000000000000</code></code>
      </div>

      <p>The maximum number of decimals is 17.</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Floating Precision</h2>

      <div style={{backgroundColor:'#cecece'}}>
        <p>Floating point arithmetic is not always 100% accurate:</p>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0.2</code> + <code style={{color:'red'}}>0.1</code>;</code>

      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

        <p>To solve the problem above, it helps to multiply and divide:</p>

        <code><code style={{color:'blue'}}>let</code> x = (<code style={{color:'red'}}>0.2</code> * <code style={{color:'red'}}>10</code> + <code style={{color:'red'}}>0.1</code> * <code style={{color:'red'}}>10</code>) / <code style={{color:'red'}}>10</code>;</code>

        <p>Floating point arithmetic is not always 100% accurate:</p>

        <p>0.2 + 0.1 = 0.30000000000000004</p>

        <p>But it helps to multiply and divide:</p>

        <p>0.2 + 0.1 = 0.3</p>

      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Adding Numbers and Strings</h2>

      <div style={{backgroundColor:'#ffa7a784'}}>
        <p>WARNING !!</p>

        <p>JavaScript uses the + operator for both addition and concatenation.</p>

        <p>Numbers are added. Strings are concatenated.</p>
      </div>

      <p>If you add two numbers, the result will be a number:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>20</code>;</code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

        <p>If you add two numbers, the result will be a number:</p>

        <p>30</p>
      </div>

      <br />

      <p>If you add two strings, the result will be a string concatenation:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"10"</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"20"</code>;</code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

        <p>If you add two numeric strings, the result will be a concatenated string:</p>

        <p>1020</p>
      </div>

      <br />

      <p>If you add a number and a string, the result will be a string concatenation:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"20"</code>;</code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

        <p>If you add a number and a numeric string, the result will be a concatenated string:</p>

        <p>1020</p>
      </div>

      <br />

      <p>If you add a string and a number, the result will be a string concatenation:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"10"</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>20</code>;</code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

        <p>If you add a numeric string and a number, the result will be a concatenated string:</p>

        <p>1020</p>
      </div>

      <br />

      <p>A common mistake is to expect this result to be 30:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>20</code>;</code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> z = <code style={{color:'#5d0000'}}>"The result is: "</code> + x + y;</code>

        <p>A common mistake is to expect this result to be 30:</p>

        <p>The result is: 1020</p>
      </div>

      <br />

      <p>A common mistake is to expect this result to be 102030:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>20</code>;</code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> z = <code style={{color:'#5d0000'}}>"30"</code>;</code>

        <code><code style={{color:'blue'}}>let</code> result = x + y + z;</code>

        <p>A common mistake is to expect this result to be 102030:</p>

        <p>The result is: 3030</p>
      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <p>The JavaScript interpreter works from left to right.</p>

        <p>First 10 + 20 is added because x and y are both numbers.</p>

        <p>Then 30 + "30" is concatenated because z is a string.</p>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Numeric Strings</h2>

      <p>JavaScript strings can have numeric content:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code>; <code style={{color:'green'}}>// x is a number</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"100"</code>; <code style={{color:'green'}}>// y is a string</code>;</code>

        <p>JavaScript will try to convert strings to numbers when dividing:</p>

        <p>10</p>

      </div>

      <br />

      <p>JavaScript will try to convert strings to numbers in all numeric operations:</p>

      <p>This will work:</p>

      <div style={{backgroundColor:'#cecece'}}>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"100"</code>;</code>

        <br />

        <code><code style={{color:'blue'}}>let</code> z  = x * y;</code>

        <p>JavaScript will try to convert strings to numbers when multiplying:</p>

        <p>1000</p>

      </div>

      <br />
      
      <p>And this will work:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"100"</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"10"</code>;</code>

      <code><code style={{color:'blue'}}>let</code> z = x - y;</code>

      <p>JavaScript will try to convert strings to numbers when subtracting:</p>

      <p>90</p>

      </div>

      <br />

      <p>But this will not work:</p>

      <div style={{backgroundColor:'#cecece'}}>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"100"</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"10"</code>;</code>

      <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

      <p>JavaScript will NOT convert strings to numbers when adding:</p>

      <p>10010</p>

      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <p>In the last example JavaScript uses the + operator to concatenate the strings.</p>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>NaN - Not a Number</h2>
      
      <p><code style={{color:'red'}}>NaN</code> is a JavaScript reserved word indicating that a number is not a legal number.</p>

      <p>Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code> / <code style={{color:'#5d0000'}}>"Apple"</code>;</code>

      <br />

      <p>A number divided by a non-numeric string becomes NaN (Not a Number):</p>

      <p>NaN</p>

      </div>

      <br />

      <p>However, if the string contains a numeric value , the result will be a number:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code> / <code style={{color:'#5d0000'}}>"10"</code>;</code>

      <br />

      <p>A number divided by a numeric string becomes a number:</p>

      <p>10</p>

      </div>

      <br />

      <p>You can use the global JavaScript function <code style={{color:'red'}}>isNaN()</code> to find out if a value is a not a number:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code> / <code style={{color:'#5d0000'}}>"Apple"</code>;</code>

      <br />

      <code>isNaN(x)</code>

      <p>You can use the global JavaScript function isNaN() to find out if a value is not a number:</p>

      <p>true</p>

      </div>

      <br />

      <p>Watch out for <code style={{color:'red'}}>NaN</code>. If you use <code style={{color:'red'}}>NaN</code> in a mathematical operation, the result will also be <code style={{color:'red'}}>NaN</code>:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>NaN</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>5</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

      <p>If you use NaN in a mathematical operation, the result will also be NaN:</p>

      <p>NaN</p>

      </div>

      <br />

      <p>Or the result might be a concatenation like NaN5:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>NaN</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"5"</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> z = x + y;</code>

      <p>If you use NaN in a mathematical operation, the result can be a concatenation:</p>

      <p>NaN5</p>

      </div>

      <br />

      <p><code style={{color:'red'}}>NaN</code> is a number: <code style={{color:'red'}}>typeof</code> <code style={{color:'red'}}>NaN</code> returns <code style={{color:'red'}}>number</code>:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>NaN</code>;</code>

      <br />

      <p>The typeof NaN is number:</p>

      <p>number</p>

      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Infinity</h2>

      <p><code style={{color:'red'}}>Infinity</code> (or <code style={{color:'red'}}>-Infinity</code>) is the value JavaScript will return if you calculate a number outside the largest possible number.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> = myNumber <code style={{color:'red'}}>2</code>;</code>

      <br />

      <code><code style={{color:'green'}}>// Execute until Infinity</code></code>

      <br />

      <code><code style={{color:'blue'}}>while</code> (myNumber != <code style={{color:'red'}}>Infinity</code>) &#123;</code>

      <br />
      <br />

      myNumber = myNumber * myNumber;

      <br />
      <br />

      &#125;

      <p>Infinity is returned if you calculate a number outside the largest possible number:</p>

      <p>4</p>
      <p>16</p>
      <p>256</p>
      <p>65536</p>
      <p>4294967296</p>
      <p>18446744073709552000</p>
      <p>3.402823669209385e+38</p>
      <p>1.157920892373162e+77</p>
      <p>1.3407807929942597e+154</p>
      <p>Infinity</p>

      </div>

      <br />

      <p>Division by 0 (zero) also generates <code style={{color:'red'}}>Infinity</code>:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x <code style={{color:'red'}}>2 </code> / <code style={{color:'red'}}>0</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y <code style={{color:'red'}}>-2 </code> / <code style={{color:'red'}}>0</code>;</code>

      <br />

      <p>Division by zero generates Infinity;</p>

      <p>Infinity</p>

      <p>-Infinity</p>

      </div>

      <br />

      <p><code style={{color:'red'}}>Infinity</code> is a number: <code style={{color:'red'}}>typeof</code> <code style={{color:'red'}}>Infinity</code> returns <code style={{color:'red'}}>number</code>.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>typeof </code><code style={{color:'red'}}>Infinity</code>;</code>

      <br />

      <p>Infinity is a number:</p>

      <p>number</p>

      </div>

      <br />

      {/* Just a mark to separete sections */}
      
      <h2>Hexadecimal</h2>

      <p>JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.</p>

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0xFF</code>;</code>

      <br />

      <p>Numeric constants, preceded by 0x, are interpreted as hexadecimal:</p>

      <p>0xFF = 255</p>

      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <p>Never write a number with a leading zero (like 07).</p>

        <p>Some JavaScript versions interpret numbers as octal if they are written with a leading zero.</p>
      </div>

      <br />

      <p>By default, JavaScript displays numbers as <b>base 10</b> decimals.</p>

      <p>But you can use the <code style={{color:'red'}}>toString()</code> method to output numbers from <b>base 2</b> to <b>base 36</b>.</p>

      <p>Hexadecimal is <b>base 16</b>. Decimal is <b>base 10</b>. Octal is <b>base 8</b>. Binary is <b>base 2</b>.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> myNumber <code style={{color:'red'}}>32</code>;</code>

      <br />

      <code>myNumber.toString(<code style={{color:'red'}}>32</code>);</code>

      <br />

      <code>myNumber.toString(<code style={{color:'red'}}>16</code>);</code>

      <br />

      <code>myNumber.toString(<code style={{color:'red'}}>12</code>);</code>

      <br />

      <code>myNumber.toString(<code style={{color:'red'}}>10</code>);</code>

      <br />

      <code>myNumber.toString(<code style={{color:'red'}}>8</code>);</code>

      <br />

      <code>myNumber.toString(<code style={{color:'red'}}>2</code>);</code>

      <br />
      
      <p>The toString() method can output numbers from base 2 to 36:</p>

      <p>Decimal 32 =</p>

      <p>Hexatrigesimal (base 36): w</p>

      <p>Duotrigesimal (base 32): 10</p>

      <p>Hexadecimal (base 16): 20</p>

      <p>Duodecimal (base 12): 28</p>

      <p>Decimal (base 10): 32</p>

      <p>Octal (base 8): 40</p>
      
      <p>Binary (base 2): 100000</p>

      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>JavaScript Numbers as Objects</h2>

      <p>Normally JavaScript numbers are primitive values created from literals:</p>

      <div style={{backgroundColor:'#cecece'}}>
        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>123</code></code>
      </div>

      <br />

      <p>But numbers can also be defined as objects with the keyword <code style={{color:'red'}}>new</code>:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>123</code>)</code>
      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <h3>Example</h3>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>123</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>123</code>);</code>

      <p>Infinity is a number:</p>

      <p>number</p>

      <p>object</p>

      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <p>Do not create Number objects.</p>

        <p>The new keyword complicates the code and slows down execution speed.</p>

        <p>Number Objects can produce unexpected results:</p>
      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <p>When using the <code style={{color:'red'}}>==</code> operator, x and y are <b>equal</b>:</p>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>500</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>500</code>);</code>

      <p>Numbers and Number objects cannot be safely compared:</p>

      <p>true</p>

      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <p>When using the <code style={{color:'red'}}>===</code> operator, x and y are <b>not equal</b>:</p>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>500</code>;</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>500</code>);</code>

      <p>Numbers and Number objects cannot be safely compared:</p>

      <p>false</p>

      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <p>Note the difference between (x==y) and (x===y).</p>
      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <p>(x == y) true or false?</p>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>500</code>);</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>500</code>);</code>

      <p>JavaScript objects cannot be compared:</p>

      <p>false</p>

      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>

      <p>(x === y) true or false?</p>

      <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>500</code>);</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> Number(<code style={{color:'red'}}>500</code>);</code>

      <p>JavaScript objects cannot be compared:</p>

      <p>false</p>

      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p>Comparing two JavaScript objects <b>always</b> returns <b>false</b>.</p>
        <br />
      </div>




    </main>
  )
}

export default JavaScriptNumbers