import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptOperators = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Operators</h1>

        <p>The <b>Assignment Operator</b> (=) assigns a value to a variable.</p>

        <div style={{ backgroundColo: 'lightgrey' }}>
            <h2>Assignment Examples</h2>

            <code><code style={{ color: 'blue' }}>let</code> x = <code style={{ color: '#4d0000'}}>10</code>;</code>

            <br />
            <br />

            
            <code style={{color: 'green'}}>// Assign the value 5 to x</code>
            <br />
            <code><code style={{ color: 'blue' }}>let</code> x = <code style={{ color: '#4d0000'}}>5</code>;</code>

            <br />

            <code style={{color: 'green'}}>// Assign the value 2 to y</code>
            <br />
            <code><code style={{ color: 'blue' }}>let</code> y = <code style={{ color: '#4d0000'}}>2</code>;</code>

            <br />
            <br />

            <code style={{color: 'green'}}>// Assign the value x + y to z</code>
            <br />

            <code><code style={{ color: 'blue' }}>let</code> z = x + y;</code>
            
        </div>

        <br />

        <p>The <b>Addition Operator</b> (+) adds numbers:</p>

        <br />

        <div style={{ backgroundColor: 'lightgrey' }}>
            <h2>Adding</h2>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>5</code>;</code>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> y = <code style={{color: '#4d0000'}}>2</code>;</code>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> z = x + y;</code>
        </div>

        <br />

        <p>The <b>Multiplication Operator</b> (*) multiplies numbers.</p>

        <br />

        <div style={{ backgroundColor: 'lightgrey' }}>
            <h2>Multiplying</h2>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>5</code>;</code>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> y = <code style={{color: '#4d0000'}}>2</code>;</code>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> z = x * y;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>Types of JavaScript Operators</h2>
        
        <p>There are different types of JavaScript operators:</p>

        <ul>
            <li>Arithmetic Operators</li>
            <li>Assignment Operators</li>
            <li>Comparison Operators</li>
            <li>Logical Operators</li>
            <li>Conditional Operators</li>
            <li>Type Operators</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Arithmetic Operators</h2>

        <p><b>Arithmetic Operators</b> are used to perform arithmetic on numbers:</p>

        <br />

        <div style={{ backgroundColor: 'lightgrey' }}>
            <h3>Arthmetic Operators Example</h3>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> a = <code style={{color: '#4d0000'}}>3</code>;</code>
            <br />
            <code><code style={{ color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>(100 + 50)</code> * a;</code>
        </div>

        <br />

        <div>
            <table>
                <tr>
                    <th>Operator</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>+</td>
                    <td>Addition</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>Subtraction</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>Multiplication</td>
                </tr>
                <tr>
                    <td>**</td>
                    <td>Exponentiation</td>
                </tr>
                <tr>
                    <td>/</td>
                    <td>Division</td>
                </tr>
                <tr>
                    <td>%</td>
                    <td>Modulus (Division Reminder)</td>
                </tr>
                <tr>
                    <td>++</td>
                    <td>Increment</td>
                </tr>
                <tr>
                    <td>--</td>
                    <td>Decrement</td>
                </tr>
            </table>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Assignment Operators</h2>

        <p>Assignment operators assign values to JavaScript variables.</p>

        <p>The <b>Addition Assignment Operator</b> (+=) adds a value to a variable.</p>

        <br />

        <div style={{ backgroundColor: 'lightgrey'}}>
            <h3>Assignment</h3>

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>10</code>;</code>
            <br />
            <code>x += <code style={{color: '#4d0000'}}>5</code>;</code>
        </div>

        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Same As</th>
            </tr>
            <tr>
                <td>=</td>
                <td>x = y</td>
                <td>x = y</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>x += y</td>
                <td>x = x + y</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>x -= y</td>
                <td>x = x - y</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>x *= y</td>
                <td>x = x * y</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>x /= y</td>
                <td>x = x / y</td>
            </tr>
            <tr>
                <td>%=</td>
                <td>x %= y</td>
                <td>x = x % y</td>
            </tr>
            <tr>
                <td>**=</td>
                <td>x **= y</td>
                <td>x = x ** y</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Adding JavaScript Strings</h2>

        <p>The + operator can also be used to add (concatenate) strings.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> text1 = <code style={{color: '#5d0000'}}>"John"</code></code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> text2 = <code style={{color: '#5d0000'}}>"Doe"</code></code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> text3 = text1 + <code style={{color: '#5d0000'}}>" "</code> + text2</code>

            <br />
            <br />

            <p>The result of text3 will be:</p>

            <p>John Doe</p>
        </div>

        <br />

        <p>The += assignment operator can also be used to add (concatenate) strings:</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> text1 = <code style={{color: '#5d0000'}}>"What a very"</code>;</code>
            <br />
            <code>text1 += <code style={{color: '#5d0000'}}>"nice day"</code>;</code>
            <br />

            <br />

            <p>The result of text1 will be:</p>

            <p>What a very nice day</p>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>When used on strings, the + operator is called the concatenation operator.</p>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

        <h2>Adding Strings and Numbers</h2>

        <p>Adding two numbers, will return the sum, but adding a number and a string will return a string:</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5 + 5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> y = <code style={{color: '#5d0000'}}>"5"</code> + <code style={{color: '#5d0000'}}>5</code></code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = <code style={{color: '#5d0000'}}>"Hello"</code> + <code style={{color: '#5d0000'}}>5</code></code>

            <br />
            <br />

            <p>The result of x, y and z will be:</p>

            <p>10</p>
            <p>55</p>
            <p>Hello5</p>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>If you add a number and a string, the result will be a string!</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Comparison Operators</h2>

        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>&&</td>
                <td>logical and</td>
            </tr>
            <tr>
                <td>||</td>
                <td>logical or</td>
            </tr>
            <tr>
                <td>!</td>
                <td>logical not</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}


        <h2>JavaScript Type Operators</h2>
        
        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>typeof</td>
                <td>Returns the type of a variable</td>
            </tr>
            <tr>
                <td>instanceof</td>
                <td>Returns true if an object is an instance of an object type</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise Operators</h2>

        <p>Bit operators work on 32 bits numbers.</p>

        <p>Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.</p>

        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
                <th>Same as</th>
                <th>Result</th>
                <th>Decimal</th>
            </tr>
            <tr>
                <td>&</td>
                <td>AND</td>
                <td>5 & 1</td>
                <td>0101 & 0001</td>
                <td>0001</td>
                <td>1</td>
            </tr>
            <tr>
                <td>|</td>
                <td>OR</td>
                <td>5 | 1</td>
                <td>0101 | 0001</td>
                <td>0101</td>
                <td>5</td>
            </tr>
            <tr>
                <td>~</td>
                <td>NOT</td>
                <td>~ 5</td>
                <td>~ 0101</td>
                <td>1010</td>
                <td>10</td>
            </tr>
            <tr>
                <td>^</td>
                <td>XOR</td>
                <td>5 ^ 1</td>
                <td>0101 ^ 0001</td>
                <td>0100</td>
                <td>4</td>
            </tr>
            <tr>
                <td>&lt;&lt;</td>
                <td>left shift</td>
                <td>5 &lt;&lt; 1</td>
                <td>0101 &lt;&lt; 1</td>
                <td>1010</td>
                <td>10</td>
            </tr>
            <tr>
                <td>&gt;&gt;</td>
                <td>right shift</td>
                <td>5 &gt;&gt; 1</td>
                <td>0101 &gt;&gt; 1</td>
                <td>0010</td>
                <td>2</td>
            </tr>
            <tr>
                <td>&gt;&gt;&gt;</td>
                <td>unsigned right shift</td>
                <td>5 &gt;&gt;&gt; 1</td>
                <td>0101 &gt;&gt;&gt; 1</td>
                <td>0010</td>
                <td>2</td>
            </tr>
        </table>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010</p>

            <br />

            <p>Bitwise operators are fully described in the <Link href='https://www.w3schools.com/js/js_bitwise.asp' target='_blank'>JS Bitwise</Link> chapter.</p>
        </div>

    </main>
  )
}

export default JavaScriptOperators