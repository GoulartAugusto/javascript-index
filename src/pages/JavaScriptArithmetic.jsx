import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptArithmetic = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Arithmetic</h1>

        <br />

        <h2>JavaScript Arithmetic Operators</h2>

        <p>Arithmetic operators perform arithmetic on numbers (literals or variables).</p>

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

        {/* Just a mark to  sections */}


        <h2>Arithmetic Operations</h2>

        <p>A typical arithmetic operation operates on two numbers.</p>

        <p>The two numbers can be literals:</p>

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>100</code> + <code style={{color: '#5d0000'}}>50</code>;</code>
        </div>

        <br />

        <p>or variables:</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>(100</code> + <code style={{color: '#5d0000'}}>50)</code> * a;</code>
        </div>

        <br />

        {/* Just a mark to  sections */}

        <h2>Operators and Operands</h2>

        <p>The numbers (in an arithmetic operation) are called <b>operands</b>.</p>

        <p>The operation (to be performed between the two operands) is defined by an <b>operator</b>.</p>

        <br />

        <div>
            <table>
                <tr>
                    <th>Operand</th>
                    <th>Operator</th>
                    <th>Operand</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>+</td>
                    <td>50</td>
                </tr>
            </table>
        </div>

        <br />

        {/* Just a mark to  sections */}

        <h2>Adding</h2>

        <p>The <b>addition</b> operator (+) adds numbers:</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> y = <code style={{color: '#5d0000'}}>2</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x + y;</code>
        </div>
        
        <br />

        {/* Just a mark to  sections */}

        <h2>Subtracting</h2>

        <p>The <b>subtraction</b> operator (-) subtracts numbers.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> y = <code style={{color: '#5d0000'}}>2</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x - y;</code>
        </div>

        <br />

        {/* Just a mark to  sections */}

        <h2>Dividing</h2>

        <p>The <b>division</b> operator (/) divides numbers.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> y = <code style={{color: '#5d0000'}}>2</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x / y;</code>
        </div>

        <br />

        {/* Just a mark to  sections */}

        <h2>Remainder</h2>

        <p>The <b>modulus</b> operator (%) returns the division remainder.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> y = <code style={{color: '#5d0000'}}>2</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x % y;</code>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>In arithmetic, the division of two integers produces a <b>quotient</b> and a <b>remainder</b>.</p>
            
            <p>In mathematics, the result of a <b>modulo operation</b> is the <b>remainder</b> of an arithmetic division.</p>
        </div>

        <br />

        {/* Just a mark to  sections */}

        <h2>Incrementing</h2>

        <p>The <b>increment</b> operator (++) increments numbers.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code>x++;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x;</code>
        </div>        

        <br />

        {/* Just a mark to  sections */}
        
        <h2>Decrementing</h2>

        <p>The <b>decrement</b> operator (--) decrements numbers.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code>x--;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x;</code>
        </div>        
        
        <br />

        {/* Just a mark to  sections */}

        <h2>Exponentiation</h2>

        <p>The <b>exponentiation</b> operator (**) raises the first operand to the power of the second operand.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = x ** <code style={{color: '#5d0000'}}>2</code>;</code>
        </div>

        <br />

        <p>x ** y produces the same result as<code style={{color: '#5d0000'}}>Math.pow(x,y)</code> :</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>5</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> z = Math.pow(x,<code style={{color: '#5d0000'}}>2</code>);</code>
        </div>

        <br />

        {/* Just a mark to  sections */}


        <h2>Operator Precedence</h2>

        <p>Operator precedence describes the order in which operations are performed in an arithmetic expression.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>100</code> + <code style={{color: '#5d0000'}}>50</code> * <code style={{color: '#5d0000'}}>3</code>;</code>
        </div>

        <br />

        <p>Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?</p>
        <p>Is the addition or the multiplication done first?</p>
        <p>As in traditional school mathematics, the multiplication is done first.</p>
        <p>Multiplication (*) and division (/) have higher <b>precedence</b> than addition (+) and subtraction (-).</p>
        <p>And (as in school mathematics) the precedence can be changed by using parentheses.</p>
        <p>When using parentheses, the operations inside the parentheses are computed first:</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = (<code style={{color: '#5d0000'}}>100</code> + <code style={{color: '#5d0000'}}>50</code>) * <code style={{color: '#5d0000'}}>3</code>;</code>
        </div>

        <br />

        <p>When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Example</h3>
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>100</code> + <code style={{color: '#5d0000'}}>50</code> - <code style={{color: '#5d0000'}}>3</code>;</code>

            <br />
            <br />

            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>100</code> / <code style={{color: '#5d0000'}}>50</code> * <code style={{color: '#5d0000'}}>3</code>;</code>

        </div>









    </main>
  )
}

export default JavaScriptArithmetic