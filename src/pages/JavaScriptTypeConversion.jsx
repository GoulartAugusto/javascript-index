import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptTypeConversion = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Type Conversion</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:'#dbffdb'}}>
            <br />

            <ul>
                <li>Converting Strings to Numbers</li>
                <li>Converting Numbers to Strings</li>
                <li>Converting Dates to Numbers</li>
                <li>Converting Numbers to Dates</li>
                <li>Converting Booleans to Numbers</li>
                <li>Converting Numbers to Booleans</li>
            </ul>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Type Conversion</h2>

        <p>JavaScript variables can be converted to a new variable and another data type:</p>

        <ul>
            <li>By the use of a JavaScript function</li>
            <li><b>Automatically</b> by JavaScript itself</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Strings to Numbers</h2>

        <p>The global method <code style={{color:'blue'}}>Number()</code> converts a variable (or a value) into a number.</p>

        <p>A numeric string (like "3.14") converts to a number (like 3.14).</p>

        <p>An empty string (like "") converts to 0.</p>

        <p>A non numeric string (like "John") converts to <code style={{color:'blue'}}>NaN</code> (Not a Number).</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>These will convert:</p>

            <br />

            <code>
                <code>Number(<code style={{color:'#5d0000'}}>"3.14"</code>)</code>

                <br />
                
                <code>Number(Math.PI)</code>
                
                <br />

                <code>Number(<code style={{color:'#5d0000'}}>" "</code>)</code>

                <br />

                <code>Number(<code style={{color:'#5d0000'}}>""</code>)</code>
            </code>

            <p>The Number() metod converts a variable (or value) into a number:</p>

            <code>results</code>

            <br />

            <code>3.14</code>

            <br />

            <code>3.141592653589793</code>

            <br />

            <code>0</code>

            <br />

            <code>0</code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>These will not convert:</p>

            <code>
                <code>Number(<code style={{color:'#5d0000'}}>"99 88"</code>)</code>

                <br />
                
                <code>Number(<code style={{color:'#5d0000'}}>"John"</code>)</code>
            </code>

            <code>results</code>

            <br />

            <code>NaN</code>

            <br />

            <code>NaN</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Number Methods</h2>

        <p>In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:</p>

        <br />

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Number()</td>
                <td>Returns a number, converted from its argument</td>
            </tr>
            <tr>
                <td>parseFloat()</td>
                <td>Parses a string and returns a floating point number</td>
            </tr>
            <tr>
                <td>parseInt()</td>
                <td>Parses a string and returns an integer</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Unary + Operator</h2>

        <p>The <b>unary + operator</b> can be used to convert a variable to a number:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"5"</code>; <code style={{color:'green'}}>// y is a string</code>

                <br />
                
                <code style={{color:'blue'}}>let</code> x = + y; <code style={{color:'green'}}>// x is a number</code>
            </code>
        </div>

        <br />

        <p>If the variable cannot be converted, it will still become a number, but with the value <code style={{color:'blue'}}>NaN</code> (Not a Number):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"John"</code>; <code style={{color:'green'}}>// y is a string</code>

                <br />
                
                <code style={{color:'blue'}}>let</code> x = + y; <code style={{color:'green'}}>// x is a number (NaN)</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Numbers to Strings</h2>

        <p>The global method <code style={{color:'blue'}}>String()</code> can convert numbers to strings.</p>

        <p>It can be used on any type of numbers, literals, variables, or expressions:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>String(x)</code> <code style={{color:'green'}}> // returns a string from a number variable x</code>

                <br />

                <code>String(<code style={{color:'red'}}>123</code>)</code> <code style={{color:'green'}}> // returns a string from a number literal 123</code>

                <br />

                <code>String(<code style={{color:'red'}}>100</code> + <code style={{color:'red'}}>23</code>)</code> <code style={{color:'green'}}> // returns a string from a number from an expression</code>
            </code>
        </div>

        <br />

        <p>The Number method <code style={{color:'blue'}}>toString()</code> does the same.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>x.toString()</code>

                <br />

                <code>(<code style={{color:'red'}}>123</code>)</code>.toString()

                <br />

                <code>(<code style={{color:'red'}}>100</code> + <code style={{color:'red'}}>23</code>)</code>.toString()
            </code>

            <br />

            <p>The toString() method converts a number to a string.</p>

            <p>123</p>
            <p>123</p>
            <p>123</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>More Methods</h2>
        
        <p>In the chapter Number Methods, you will find more methods that can be used to convert numbers to strings:</p>

        <br />

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>toExponential()</td>
                <td>Returns a string, with a number rounded and written using exponential notation.</td>
            </tr>
            <tr>
                <td>toFixed()</td>
                <td>Returns a string, with a number rounded and written with a specified number of decimals.</td>
            </tr>
            <tr>
                <td>toPrecision()</td>
                <td>Returns a string, with a number written with a specified length</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Dates to Numbers</h2>

        <p>The global method <code style={{color:'blue'}}>Number()</code> can be used to convert dates to numbers.</p>

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code>d = <code style={{color:'blue'}}>new</code> Date();</code>

                <br />

                <code>Number(d)</code> <code style={{color:'green'}}> // returns 1404568027739</code>
            </code>

            <br />
        </div>

        <br />

        <p>The date method <code style={{color:'blue'}}>getTime()</code> does the same.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code>d = <code style={{color:'blue'}}>new</code> Date();</code>

                <br />

                <code>d.getTime()</code> <code style={{color:'green'}}> // returns 1404568027739</code>
            </code>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Dates to Strings</h2>

        <p>The global method <code style={{color:'blue'}}>String()</code> can convert dates to strings.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>String(Date()) <code style={{color:'green'}}> // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"</code></code>
        </div>

        <br />

        <p>The Date method <code style={{color:'blue'}}>toString()</code> does the same.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>Date().toString() <code style={{color:'green'}}> // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"</code></code>
        </div>

        <br />

        <p>In the chapter Date Methods, you will find more methods that can be used to convert dates to strings:</p>

        <br />

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>getDate()</td>
                <td>Get the day as a number (1-31)</td>
            </tr>
            <tr>
                <td>getDay()</td>
                <td>Get the weekday a number (0-6)</td>
            </tr>
            <tr>
                <td>getFullYear()</td>
                <td>Get the four digit year (yyyy)</td>
            </tr>
            <tr>
                <td>getHours()</td>
                <td>Get the hour (0-23)</td>
            </tr>
            <tr>
                <td>getMilliseconds()</td>
                <td>Get the milliseconds (0-999)</td>
            </tr>
            <tr>
                <td>getMinutes()</td>
                <td>Get the minutes (0-59)</td>
            </tr>
            <tr>
                <td>getMonth()</td>
                <td>Get the month (0-11)</td>
            </tr>
            <tr>
                <td>getSeconds()</td>
                <td>Get the seconds (0-59)</td>
            </tr>
            <tr>
                <td>getTime()</td>
                <td>Get the time (milliseconds since January 1, 1970)</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Booleans to Numbers</h2>

        <p>The global method <code style={{color:'blue'}}>Number()</code> can also convert booleans to numbers.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code>Number(<code style={{color:'blue'}}>false</code>)</code> <code style={{color:'green'}}> // returns 0</code>
            </code>

            <br />

            <code>
                <code>Number(<code style={{color:'blue'}}>true</code>)</code> <code style={{color:'green'}}> // returns 1</code>
            </code>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Booleans to Strings</h2>

        <p>The global method <code style={{color:'blue'}}>String()</code> can convert booleans to strings.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code>String(<code style={{color:'blue'}}>false</code>)</code> <code style={{color:'green'}}> // returns "false"</code>
            </code>

            <br />

            <code>
                <code>String(<code style={{color:'blue'}}>true</code>)</code> <code style={{color:'green'}}> // returns "true"</code>
            </code>
        </div>

        <br />

        <p>The Boolean method <code style={{color:'blue'}}>toString()</code> does the same.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code><code style={{color:'blue'}}>false</code>.toString()</code> <code style={{color:'green'}}> // returns "false"</code>
            </code>

            <br />

            <code>
                <code><code style={{color:'blue'}}>true</code>.toString()</code> <code style={{color:'green'}}> // returns "true"</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Automatic Type Conversion</h2>

        <p>When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.</p>

        <p>The result is not always what you expect:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code style={{color:'red'}}>5</code> + <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}> // returns 5         because null is converted to 0</code>
            </code>

            <br />

            <code>
                <code style={{color:'#5d0000'}}>"5"</code> + <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}> // returns "5null"   because null is converted to "null"</code>
            </code>

            <br />

            <code>
                <code style={{color:'#5d0000'}}>"5"</code> + <code style={{color:'red'}}>2</code> <code style={{color:'green'}}> // returns "52"      because 2 is converted to "2"</code>
            </code>

            <br />

            <code>
                <code style={{color:'#5d0000'}}>"5"</code> - <code style={{color:'red'}}>2</code> <code style={{color:'green'}}> // returns 3         because "5" is converted to 5</code>
            </code>

            <br />

            <code>
                <code style={{color:'#5d0000'}}>"5"</code> * <code style={{color:'#5d0000'}}>"2"</code> <code style={{color:'green'}}> // returns 10        because "5" and "2" are converted to 5 and 2</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Automatic String Conversion</h2>

        <p>JavaScript automatically calls the variable's <code style={{color:'blue'}}>toString()</code> function when you try to "output" an object or a variable:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = myVar;</code>

                <br />

                <code style={{color:'green'}}>// if myVar = &#123;name:"Fjohn"&125;</code> <code style={{color:'green'}}> // toString converts to "[object Object]"</code>

                <br />
                <br />

                <code style={{color:'green'}}>// if myVar = [1,2,3,4]</code> <code style={{color:'green'}}> // toString converts to "1,2,3,4"</code>

                <br />
                <br />

                <code style={{color:'green'}}>// if myVar = new Date()</code> <code style={{color:'green'}}> // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"</code>
            </code>

            <br />
        </div>

        <br />

        <p>Numbers and booleans are also converted, but this is not very visible:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code style={{color:'green'}}>// if myVar = 123</code> <code style={{color:'green'}}> // toString converts to "123"</code>

                <br />
                <br />

                <code style={{color:'green'}}>// if myVar = true</code> <code style={{color:'green'}}> // toString converts to "true"</code>

                <br />
                <br />

                <code style={{color:'green'}}>// if myVar = false</code> <code style={{color:'green'}}> // toString converts to "false"</code>
            </code>

            <br />
        </div>
    </main>
  )
}

export default JavaScriptTypeConversion