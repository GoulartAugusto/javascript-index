import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptNumberMethods = () => {
  return (
    <main className={styles.main}>
      <Link href='/'>Homepage</Link>

      <h1>JavaScript Number Methods</h1>

      <h2>JavaScript Number Methods</h2>

      <p>These <b>number methods</b> can be used on all JavaScript numbers:</p>

      <table>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>toString()</td>
          <td>Returns a number as a string</td>
        </tr>
        <tr>
          <td>toExponential()</td>
          <td>Returns a number written in exponential notation</td>
        </tr>
        <tr>
          <td>toFixed()</td>
          <td>Returns a number written with a number of decimals</td>
        </tr>
        <tr>
          <td>toPrecision()</td>
          <td>Returns a number written with a specified length</td>
        </tr>
        <tr>
          <td>ValueOf()</td>
          <td>Returns a number as a number</td>
        </tr>
      </table>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The toString() Method</h2>

      <p>The <code style={{color:'red'}}>toString()</code> method returns a number as a string.</p>

      <p>All number methods can be used on any type of numbers (literals, variables, or expressions):</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>123</code>;</code>

        <br />

        <code>x.toString();</code>

        <br />

        <code>(<code style={{color:'red'}}>123</code>).toString();</code>

        <br />

        <code>(<code style={{color:'red'}}>100</code> + <code style={{color:'red'}}>23</code>).toString();</code>

        <br />

        <p>The toString() method converts a number to a string.</p>

        <p>Result</p>

        <code>123</code>
        <br />
        <code>123</code>
        <br />
        <code>123</code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The toExponential() Method</h2>

      <p><code style={{color:'red'}}>toExponential()</code> returns a string, with a number rounded and written using exponential notation.</p>

      <p>A parameter defines the number of characters behind the decimal point:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>9.656</code>;</code>

        <br />

        <code>x.toExponential(<code style={{color:'red'}}>2</code>);</code>

        <br />

        <code>x.toExponential(<code style={{color:'red'}}>4</code>);</code>

        <br />

        <code>x.toExponential(<code style={{color:'red'}}>6</code>);</code>

        <br />

        <p>The toExponential() method returns a string, with the number rounded and written using exponential notation.</p>

        <p>An optional parameter defines the number of digits behind the decimal point.</p>

        <code>9.656e+0</code>
        <br />
        <code>9.66e+0</code>
        <br />
        <code>9.6560e+0</code>
        <br />
        <code>9.656000e+0</code>
      </div>

      <p>The parameter is optional. If you don't specify it, JavaScript will not round the number.</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The toFixed() Method</h2>

      <p><code style={{color:'red'}}>toFixed()</code> returns a string, with the number written with a specified number of decimals:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>9.656</code>;</code>

        <br />

        <code>x.toFixed(<code style={{color:'red'}}>0</code>);</code>

        <br />  

        <code>x.toFixed(<code style={{color:'red'}}>2</code>);</code>

        <br />

        <code>x.toFixed(<code style={{color:'red'}}>4</code>);</code>

        <br />

        <code>x.toFixed(<code style={{color:'red'}}>6</code>);</code>

        <br />

        <p>The toFixed() method rounds a number to a given number of digits.</p>

        <p>For working with money, toFixed(2) is perfect.</p>

        <code>10</code>
        <br />
        <code>9.66</code>
        <br />
        <code>9.6560</code>
        <br />
        <code>9.656000</code>
      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p><code style={{color:'red'}}>toFixed(2)</code> is perfect for working with money.</p>
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}
      
      <h2>The toPrecision() Method</h2>

      <p><code style={{color:'red'}}>toPrecision()</code> returns a string, with a number written with a specific length:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>9.656</code>;</code>

        <br />

        <code>x.toPrecision(<code style={{color:'red'}}></code>);</code>

        <br />  

        <code>x.toPrecision(<code style={{color:'red'}}>2</code>);</code>

        <br />

        <code>x.toPrecision(<code style={{color:'red'}}>4</code>);</code>

        <br />

        <code>x.toPrecision(<code style={{color:'red'}}>6</code>);</code>

        <br />

        <p>The toPrecision() method returns a string, with a number written with a specified length:</p>

        <code>9.656</code>
        <br />
        <code>9.7</code>
        <br />
        <code>9.656</code>
        <br />
        <code>9.65600</code>
      </div>

      <br />
      
      {/* Just a mark to separete sections */}

      <h2>The valueOf() Method</h2>

      <p><code style={{color:'red'}}>valueOf()</code> returns a number as a number.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>123</code>;</code>

        <br />

        <code>x.valueOf();</code>

        <br />

        <code>(<code style={{color:'red'}}>123</code>).valueOf();</code>

        <br />

        <code>(<code style={{color:'red'}}>100</code> + <code style={{color:'red'}}>23</code>).valueOf();</code>

        <br />

        <p>The valueOf() method returns a number as a number:</p>

        <p>Result</p>

        <code>123</code>
        <br />
        <code>123</code>
        <br />
        <code>123</code>
      </div>

      <br />

      <p>In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).</p>

      <p>The <code style={{color:'red'}}>valueOf</code> method is used internally in JavaScript to convert Number objects to primitive values.</p>

      <p>There is no reason to use it in your code.</p>

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p>All JavaScript data types have a <code style={{color:'red'}}>valueOf()</code> and a <code style={{color:'red'}}>toString()</code> method.</p>
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Converting Variables to Numbers</h2>

      <p>There are 3 JavaScript methods that can be used to convert a variable to a number:</p>

      <table>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Number()</td>
          <td>Returns a number converted from its argument,</td>
        </tr>
        <tr>
          <td>parseFloat()</td>
          <td>Parses its argument and returns a floating point number</td>
        </tr>
        <tr>
          <td>parseInt()</td>
          <td>Parses its argument and returns a whole number</td>
        </tr>
      </table>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p>The method above are not <b>number</b> method. They are <b>global</b> JavaScript methods.</p>
      </div>

      <br />

      {/* Just a mark to separete sections */}
      
      <h2>The Number() Method</h2>

      <p>The <code style={{color:'red'}}>Number()</code> method can be used to convert JavaScript variables to numbers:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number(<code style={{color:'blue'}}>true</code>);</code>

        <br />

        <code>Number(<code style={{color:'blue'}}>false</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"10"</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"    10"</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"10   "</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"   10   "</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"10.33"</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"10,33"</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"10 33"</code>);</code>

        <br />

        <code>Number(<code style={{color:'#5d0000'}}>"John"</code>);</code>


        <br />

        <p>The Number() method converts variables to numbers:</p>

        <p>Result</p>

        <code>1</code>
        <br />
        <code>0</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10.33</code>
        <br />
        <code>NaN</code>
        <br />
        <code>NaN</code>
        <br />
        <code>NaN</code>
      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p>If the number cannot be converted, <code style={{color:'red'}}>NaN</code> (Not a Number) is returned.</p>
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The Number() Method Used on Dates</h2>

      <p><code style={{color:'red'}}>Number()</code> can also convert a date to a number.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number(<code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"1970-01-01"</code>))</code>

        <br />

        <p>The Number() method can convert a date to a number:</p>

        <code>0</code>
      </div>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p>The <code style={{color:'red'}}>Number()</code> method returns the number of milliseconds since 1.1.1970.</p>
        <br />
      </div>

      <br />

      <p>The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number(<code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"1970-01-02"</code>))</code>

        <br />

        <p>The Number() method can convert a date to a number:</p>

        <code>86400000</code>
      </div>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number(<code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2017-09-30"</code>))</code>

        <br />

        <p>The Number() method can convert a date to a number:</p>

        <code>1506729600000</code>
      </div>
      
      <br />

      {/* Just a mark to separete sections */}

      <h2>The parseInt() Method</h2>

      <p><code style={{color:'red'}}>parseInt()</code> parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>parseInt(<code style={{color:'#5d0000'}}>"-10"</code>);</code>

        <br />

        <code>parseInt(<code style={{color:'#5d0000'}}>"-10.33"</code>);</code>

        <br />

        <code>parseInt(<code style={{color:'#5d0000'}}>"10"</code>);</code>

        <br />

        <code>parseInt(<code style={{color:'#5d0000'}}>"10.33"</code>);</code>

        <br />

        <code>parseInt(<code style={{color:'#5d0000'}}>"10 20 30"</code>);</code>

        <br />

        <code>parseInt(<code style={{color:'#5d0000'}}>"10 years"</code>);</code>

        <br />

        <code>parseInt(<code style={{color:'#5d0000'}}>"years 10"</code>);</code>

        <br />

        <p>The global JavaScript function parseInt() converts strings to numbers:</p>

        <p>Result</p>

        <code>-10</code>
        <br />
        <code>-10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>NaN</code>
      </div>

      <br />

      <p>If the number cannot be converted, <code style={{color:'red'}}>NaN</code> (Not a Number) is returned.</p>

      <br />

      {/* Just a mark to separete sections */}
      
      <h2>The parseFloat() Method</h2>

      <p><code style={{color:'red'}}>parseFloat()</code> parses a string and returns a number. Spaces are allowed. Only the first number is returned:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>parseFloat(<code style={{color:'#5d0000'}}>"10"</code>);</code>

        <br />

        <code>parseFloat(<code style={{color:'#5d0000'}}>"10.33"</code>);</code>

        <br />

        <code>parseFloat(<code style={{color:'#5d0000'}}>"10 20 30"</code>);</code>

        <br />

        <code>parseFloat(<code style={{color:'#5d0000'}}>"10 years"</code>);</code>

        <br />

        <code>parseFloat(<code style={{color:'#5d0000'}}>"years 10"</code>);</code>

        <br />

        <p>The parseFloat() method converts strings to numbers:</p>

        <p>Result</p>

        <code>10</code>
        <br />
        <code>10.33</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>NaN</code>
      </div>

      <br />

      <p>If the number cannot be converted, <code style={{color:'red'}}>NaN</code> (Not a Number) is returned.</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Number Object Methods</h2>

      <p>The <b>objects methods</b> belong to the Number object:</p>

      <table>
        <tr>
          <th>Method</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Number.isInteger()</td>
          <td>Returns true if the argument is an integer</td>
        </tr>
        <tr>
          <td>Number.isSafeInteger()</td>
          <td>Returns true if the argument is a safe integer</td>
        </tr>
        <tr>
          <td>Number.parseFloat()</td>
          <td>Converts a string to a number</td>
        </tr>
        <tr>
          <td>Number.parseInt()</td>
          <td>Converts a string to a whole number</td>
        </tr>
      </table>

      <br />
      
      <div style={{backgroundColor:'lightyellow'}}>
        <h2>Number Methods Cannot be Used on Variables</h2>

        <p>The number methods above belong to the JavaScript <b>Number Object</b>.</p>

        <p>These methods can only be accessed like <code style={{color:'red'}}>Number.isInteger()</code>.</p>

        <p>Using X.isInteger() where X is a variable, will result in an error:</p>

        <p><code style={{color:'red'}}>TypeError X.isInteger is not a function.</code></p>
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The Number.isInteger() Method</h2>

      <p>The <code style={{color:'red'}}>Number.isInteger()</code> method returns true if the argument is an integer.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number.isInteger(<code style={{color:'red'}}>10</code>);</code>

        <br />

        <code>Number.isInteger(<code style={{color:'red'}}>10.5</code>);</code>

        <br />


        <p>The isInteger() method returns true if the argument is an integer.</p>

        <p>Otherwise it returns false.</p>

        <code>true</code>
        <br />
        <code>false</code>
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The Number.isSafeInteger() Method</h2>
      
      <p>A safe integer is an integer that can be exactly represented as a double precision number.</p>

      <p>The <code style={{color:'red'}}>Number.isSafeInteger()</code> method returns <code style={{color:'red'}}>true</code> if the argument is a safe integer.</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number.isSafeInteger(<code style={{color:'red'}}>10</code>);</code>

        <br />

        <code>Number.isSafeInteger(<code style={{color:'red'}}>12345678901234567890</code>);</code>

        <br />


        <p>The isSafeInteger() method returns true if the argument is a safe integer.</p>

        <p>Otherwise it returns false.</p>

        <code>true</code>
        <br />
        <code>false</code>
        <br />
      </div>
      
      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <br />
        <p>Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).</p>

        <p>This is safe: 9007199254740991. This is not safe: 9007199254740992.</p>
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The Number.parseFloat() Method</h2>
      
      <p><code style={{color:"red"}}>Number.parseFloat()</code> parses a string and returns a number.</p>

      <p>Spaces are allowed. Only the first number is returned:</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number.parseFloat(<code style={{color:'#5d0000'}}>"10"</code>);</code>

        <br />

        <code>Number.parseFloat(<code style={{color:'#5d0000'}}>"10.33"</code>);</code>

        <br />

        <code>Number.parseFloat(<code style={{color:'#5d0000'}}>"10 20 30"</code>);</code>

        <br />

        <code>Number.parseFloat(<code style={{color:'#5d0000'}}>"10 years"</code>);</code>

        <br />

        <code>Number.parseFloat(<code style={{color:'#5d0000'}}>"years 10"</code>);</code>

        <br />

        <p>Number.parseFloat() converts strings to numbers:</p>

        <p>Result</p>

        <code>10</code>
        <br />
        <code>10.33</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>NaN</code>
      </div>

      <br />

      <p>If the number cannot be converted, <code style={{color:'red'}}>NaN</code> (Not a Number) is returned.</p>

      <br />

      <div style={{backgroundColor:'lightyellow'}}>
        <h2>Note</h2>
        <p>The <b>Number</b> methods <code style={{color:'red'}}>Number.parseInt()</code> and <code style={{color:'red'}}>Number.parseFloat()</code></p>

        <p>are the same as the</p>

        <p><b>Global</b> methods <code style={{color:'red'}}>parseInt()</code> <code style={{color:'red'}}>parseFloat()</code></p>
        
        <p>The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).</p>

        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>The Number.parseInt() Method</h2>

      <p><code style={{color:'red'}}>Number.parseInt()
      </code> parses a string and returns a whole number,</p>

      <br />

      <div style={{backgroundColor:'#cecece'}}>
        <h3>Example</h3>

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"-10"</code>);</code>

        <br />

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"-10.33"</code>);</code>

        <br />

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"10"</code>);</code>

        <br />

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"10.33"</code>);</code>

        <br />

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"10 20 30"</code>);</code>

        <br />

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"10 years"</code>);</code>

        <br />

        <code>Number.parseInt(<code style={{color:'#5d0000'}}>"years 10"</code>);</code>

        <br />

        <p>Number.parseInt() converts strings to whole numbers:</p>

        <p>Result</p>

        <code>-10</code>
        <br />
        <code>-10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>10</code>
        <br />
        <code>NaN</code>
      </div>

      <p>If the number cannot be converted, <code style={{color:'red'}}>NaN</code> (Not a Number) is returned.</p>

    </main>
  )
}

export default JavaScriptNumberMethods