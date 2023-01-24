import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptDataTypes = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Data Types</h1>

        <div style={{ backgroundColor: '#bbffc9'}}>
            <h3>JavaScript has 8 Datatypes</h3>
            <ul style={{ listStyle: 'decimal'}}>
              <li>String</li>
              <li>Number</li>
              <li>Bigint</li>
              <li>Boolean</li>
              <li>Undefined</li>
              <li>Null</li>
              <li>Symbol</li>
              <li>Object</li>
            </ul>
            <h3>The Object Datatype</h3>
            <p>The object data type can contain:</p>
            <ul>
              <li>An object</li>
              <li>An array</li>
              <li>A date</li>
            </ul>
        </div>
        <br />
        <div style={{ backgroundColor: '#cecece'}}>
          <h3>Examples</h3>
          <br />
          <code style={{ color: 'green'}}>// Number:</code>
          <br />
          <code><code style={{color: 'blue'}}>let</code> length = <code style={{color:'red'}}>16</code>;</code>
          <br />
          <code><code style={{color: 'blue'}}>let</code> weight = <code style={{color:'red'}}>7.5</code>;</code>
          <br />
          <br />
          <code style={{ color: 'green'}}>// Strings:</code>
          <br />
          <code><code style={{color: 'blue'}}>let</code> color = <code style={{color:'#5d0000'}}>"Yellow"</code>;</code>
          <br />
          <code><code style={{color: 'blue'}}>let</code> lastName = <code style={{color:'#5d0000'}}>'Johnson'</code>;</code>
          <br />
          <br />
          <code style={{ color: 'green'}}>// Boolean:</code>
          <br />
          <code><code style={{color: 'blue'}}>let</code> x = <code style={{color:'blue'}}>true</code>;</code>
          <br />
          <code><code style={{color: 'blue'}}>let</code> y = <code style={{color:'blue'}}>false</code>;</code>
          <br />
          <br />
          <code style={{ color: 'green'}}>// Object:</code>
          <br />
          <code><code style={{color: 'blue'}}>const</code> person = &#123;firstName:<code style={{color:'#5d0000'}}>"John"</code>, lastName:<code style={{color:'#5d0000'}}>"Doe"</code>&#125;;</code>
          <br />
          <br />
          <code style={{ color: 'green'}}>//  Array object:</code>
          <br />
          <code><code style={{color: 'blue'}}>const</code> cars = &#91;<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>&#93;;</code>
          <br />
          <br />
          <code style={{ color: 'green'}}>// Date Object:</code>
          <br />
          <code><code style={{color: 'blue'}}>const</code> date = <code style={{color: 'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2023-03-24"</code>);</code>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
          <h3>Note</h3>
          <p>A JavaScript variable can hold any type of data.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>The Concept of Data Types</h2>

        <p>In programming, data types is an important concept.</p>

        <p>To be able to operate on variables, it is important to know something about the type.</p>

        <p>Without data types, a computer cannot safely solve this:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
          <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>16</code> + <code style={{color: '#5d0000'}}>"Volvo"</code>;</code>
        </div>

        <br />

        <p>Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?</p>

        <p>JavaScript will treat the example above as:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
          <code><code style={{color:'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>"16"</code> + <code style={{color: '#5d0000'}}>"Volvo"</code>;</code>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
          <h3>Note</h3>
          <p>When adding a number and a string, JavaScript will treat the number as a string.</p>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
          <h3>Example</h3>
          <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>16</code> + <code style={{color: '#5d0000'}}>"Volvo"</code>;</code>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
          <h3>Example</h3>
          <code><code style={{color:'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>"Volvo"</code> + <code style={{color:'red'}}>16</code>;</code>
        </div>

        <br />

        <p>JavaScript evaluates expressions from left to right. Different sequences can produce different results:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
          <h3>JavaScript:</h3>
          <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>16</code> + <code style={{color:'red'}}>4</code> + <code style={{color: '#5d0000'}}>"Volvo"</code>;</code>
          <br />
          <h4>Result:</h4>
          <code>20Volvo</code>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
          <h3>JavaScript:</h3>
          <code><code style={{color:'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>"Volvo"</code> + <code style={{color:'red'}}>16</code> + <code style={{color:'red'}}>4</code>;</code>
          <br />
          <h4>Result:</h4>
          <code>Volvo164</code>
        </div>

        <br />

        <p>In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".</p>

        <p>In the second example, since the first operand is a string, all operands are treated as strings.</p>

        <br />

      {/* Just a mark to separete sections */}

      <h2>JavaScript Types are Dynamic</h2>

      <p>JavaScript has dynamic types. This means that the same variable can be used to hold different data types:</p>

      <br />

      <div style={{backgroundColor: '#cecece'}}>
          <h3>Example</h3>
          <br />
          <code><code style={{color:'blue'}}>let</code>x; <code style={{color:'green'}}>// Now x is undefined</code></code>
          <br />
          <code>x = <code style={{color:'red'}}>5</code>; <code style={{color:'green'}}>// Now x is a Number</code></code>
          <br />
          <code>x = <code style={{color:'#5d0000'}}>"Johnson"</code>; <code style={{color:'green'}}>// Now x is a String</code></code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>JavaScript Strings</h2>

      <p>A string (or a text string) is a series of characters like "John Doe".</p>

      <p>Strings are written with quotes. You can use single or double quotes:</p>

      <br />

      <div style={{backgroundColor: '#cecece'}}>
          <h3>Example</h3>

          <code><code style={{color:'green'}}>// Using double quotes:</code></code>
          <br />
          <code><code style={{color:'blue'}}>let</code> carName = <code style={{color:'#5d0000'}}>"Volvo XC60"</code>;</code>
          
          <br />
          <br />

          <code><code style={{color:'green'}}>// Using single quotes:</code></code>
          <br />
          <code><code style={{color:'blue'}}>let</code> carName2 = <code style={{color:'#5d0000'}}>'Volvo XC60'</code>;</code>
      </div>

      <br />

      <p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</p>

      <br />

      <div style={{backgroundColor: '#cecece'}}>
          <h3>Example</h3>

          <code><code style={{color:'green'}}>// Single quote inside double quotes:</code></code>
          <br />
          <code><code style={{color:'blue'}}>let</code> answer1 = <code style={{color:'#5d0000'}}>"It's alright"</code>;</code>
          
          <br />
          <br />

          <code><code style={{color:'green'}}>// Single quotes inside double quotes:</code></code>
          <br />
          <code><code style={{color:'blue'}}>let</code> answer2 = <code style={{color:'#5d0000'}}>"He is called 'Johnny'"</code>;</code>

          <br />
          <br />

          <code><code style={{color:'green'}}>/// Double quotes inside single quotes:</code></code>
          <br />
          <code><code style={{color:'blue'}}>let</code> answer3 = <code style={{color:'#5d0000'}}>'He is called "Johnny"'</code>;</code>
      </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>JavaScript Numbers</h2>

    <p>All JavaScript numbers are stored as decimal numbers (floating point).</p>

    <p>Numbers can be written with, or without decimals:</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code style={{color: 'green'}}>// With decimals:</code>
        <br />
        <code style={{color: 'blue'}}>let</code> x1 = <code style={{color: 'red'}}>34.00</code>;
        <br />
        <br />
        <code style={{color: 'green'}}>// Without decimals:</code>
        <br />
        <code style={{color: 'blue'}}>let</code> x1 = <code style={{color: 'red'}}>34</code>;
      </code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Exponential Notation</h2>

    <p>Extra large or extra small numbers can be written with scientific (exponential) notation:</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code style={{color: 'blue'}}>let</code> y = <code style={{color: 'red'}}>123e5</code>; <code style={{color: 'green'}}>// 12300000</code>
        <br />
        <br />

        <code style={{color: 'blue'}}>let</code> x = <code style={{color: 'red'}}>123e-5</code>; <code style={{color: 'green'}}>// 0.00123</code>
      </code>
    </div>

    <br />

    <div style={{backgroundColor: 'lightyellow'}}>
      <h3>Note</h3>

      <p>Most programming languages have many number types:</p>

      <p>
        Whole numbers (integers):
        <br />
        byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
      </p>

      <p>
        Real numbers (floating-piont):
        <br />
        float (32-bit), double (64-bit).
      </p>

      <p>
        <b>
          Javascript are always one type:
          <br />
          double (64-bit floating point).
        </b>
      </p>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>JavaScript BigInt</h2>

    <p>All JavaScript numbers are stored in a a 64-bit floating-point format.</p>

    <p>JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code><code style={{color: 'blue'}}>let</code> x = BigInt(<code style={{color:'#5d0000'}}>"123456789012345678901234567890"</code>);</code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>JavaScript Booleans</h2>

    <p>Booleans can only have two values: <code style={{color: 'red'}}>true</code> or <code style={{color: 'red'}}>false</code>.</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code>;</code>
        <br />
        <code><code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>5</code>;</code>
        <br />
        <code><code style={{color:'blue'}}>let</code> z = <code style={{color:'red'}}>6</code>;</code>
        <br />
        <br />
        <code>(x == y)</code> <code style={{color:'green'}}>// Returns true</code>
        <br />
        <code>(x == z)</code> <code style={{color:'green'}}>// Returns false</code>
      </code>
    </div>

    <br />

    <p>Booleans are often used in conditional testing.</p>

    
    <br />

    {/* Just a mark to separete sections */}

    <h2>JavaScript Arrays</h2>

    <p>JavaScript arrays are written with square brackets.</p>

    <p>Array items are separated by commas.</p>

    <p>The following code declares (creates) an array called <code style={{color: 'red'}}>cars</code>, containing three items (car names):</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>const</code> cars = &#91;<code style={{color:'#5d0000'}}>"Jeep"</code>, <code style={{color:'#5d0000'}}>"Subaru"</code>, <code style={{color:'#5d0000'}}>"Audi"</code>&#93;;</code>
      </code>
    </div>

    <br />

    <p>Array indexes are zero-based, which means the first item is [0], second is [1], and so on.</p>

    <br />

    {/* Just a mark to separete sections */}

    <h2>JavaScript Objects</h2>

    <p>JavaScript objects are written with curly braces &#123; &#125;.</p>

    <p>Object properties are written as name:value pairs, separated by commas.</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>const</code> person = &#123;firstName:<code style={{color:'#5d0000'}}>"Johnson"</code>, lastName:<code style={{color:'#5d0000'}}>"Dodge"</code>, age:<code style={{color:'red'}}>50</code>, eyeColor:<code style={{color:'#5d0000'}}>"blue"</code>&#125;;</code>
      </code>
    </div>

    <br />

    <p>The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.</p>

    {/* Just a mark to separete sections */}
    
    <h2>The typeof Operator</h2>

    <p>You can use the JavaScript <code style={{color:'red'}}>typeof</code> operator to find the type of a JavaScript variable.</p>
    
    <p>The <code style={{color:'red'}}>typeof</code> operator returns the type of a variable or an expression:</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>""</code> <code style={{color:'green'}}> // Returns "string"</code></code>
        <br />
        <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>"John"</code> <code style={{color:'green'}}> // Returns "string"</code></code>
        <br />
        <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>"John Doe"</code> <code style={{color:'green'}}> // Returns "string"</code></code>
      </code>
    </div>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>0</code> <code style={{color:'green'}}> // Returns "number"</code></code>
        <br />
        <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>314</code> <code style={{color:'green'}}> // Returns "number"</code></code>
        <br />
        <code><code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>3.14</code> <code style={{color:'green'}}> // Returns "number"</code></code>
        <br />
        <code><code style={{color:'blue'}}>typeof</code> (<code style={{color:'red'}}>3</code>) <code style={{color:'green'}}> // Returns "number"</code></code>
        <br />
        <code><code style={{color:'blue'}}>typeof</code> (<code style={{color:'red'}}>3 + 4</code>) <code style={{color:'green'}}> // Returns "number"</code></code>
        <br />

      </code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Undefined</h2>

    <p>In JavaScript, a variable without a value, has the value <code style={{color:'blue'}}>undefined</code>. The type is also <code style={{color:'blue'}}>undefined</code>.</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>let</code> car<code style={{color:'green'}}> // Value is undefined, type is undefined</code></code>
      </code>
    </div>

    <br />

    <p>Any variable can be emptied, by setting the value to <code style={{color:'blue'}}>undefined</code>. The type will also be <code style={{color:'blue'}}>undefined</code>.</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code>car = undefined;<code style={{color:'green'}}> // Value is undefined, type is undefined</code></code>
      </code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Empty Values</h2>

    <p>An empty value has nothing to do with <code style={{color:'blue'}}>undefined</code>.</p>

    <p>An empty string has both a legal value and a type.</p>

    <br />

    <div style={{ backgroundColor: '#cecece'}}>
      <h3>Example</h3>

      <code>
        <code><code style={{color:'blue'}}>let</code> car = <code style={{color:'#5d0000'}}>""</code>;<code style={{color:'green'}}>  // The value is "", the typeof is "string"</code></code>
      </code>
    </div>

    </main>
  )
}

export default JavaScriptDataTypes