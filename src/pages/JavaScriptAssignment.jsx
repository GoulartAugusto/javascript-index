import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptAssignment = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Assignment</h1>

        <h2>JavaScript Assignment Operators</h2>

        <p>Assignment operators assign values to JavaScript variables.</p>

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

        <h2>Shift Assignment Operators</h2>
        
        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Same As</th>
            </tr>
            <tr>
                <td>&lt;&lt;=</td>
                <td>x &lt;&lt;= y</td>
                <td>x = x &lt;&lt; y</td>
            </tr>
            <tr>
                <td>&gt;&gt;=</td>
                <td>x &gt;&gt;= y</td>
                <td>x = x &gt;&gt; y</td>
            </tr>
            <tr>
                <td>&gt;&gt;&gt;=</td>
                <td>x &gt;&gt;&gt;= y</td>
                <td>x = x &gt;&gt;&gt; y</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Bitwise Assignment Operators</h2>
        
        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Same As</th>
            </tr>
            <tr>
                <td>&=</td>
                <td>x &= y</td>
                <td>x = x & y</td>
            </tr>
            <tr>
                <td>^=</td>
                <td>x ^= y</td>
                <td>x = x ^ y</td>
            </tr>
            <tr>
                <td>|=</td>
                <td>x |= y</td>
                <td>x = x | y</td>
            </tr>
        </table>


        <br />


        {/* Just a mark to separete sections */}

        <h2>Logical Assignment Operators</h2>
        
        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Same As</th>
            </tr>
            <tr>
                <td>&&=</td>
                <td>x &&= y</td>
                <td>x = x && (x = y)</td>
            </tr>
            <tr>
                <td>||=</td>
                <td>x ||= y</td>
                <td>x = x || (x = y)</td>
            </tr>
            <tr>
                <td>??=</td>
                <td>x ??= y</td>
                <td>x = x ?? (x = y)</td>
            </tr>
        </table>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <h3>Note</h3>

            <p>The Logical assignment operators are <Link href='https://www.w3schools.com/js/js_2020.asp' target='_blank'>ES2020.</Link></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The = Operator</h2>

        <p>The <b>Simple Assignment Operator</b> assigns a value to a variable.</p>

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Simple Assignment Examples</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code> + y;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The += Operator</h2>

        <p>The <b>Addition Assignment Operator</b> adds a value to a variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Addition Assignment Examples</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x += <code style={{color: '#5d0000'}}>5</code>;</code>

            <br />
            <br />

            <code><code style={{color: 'blue'}}>let</code> text = <code style={{color: '#5d0000'}}>"Hello"</code>; text += <code style={{color: '#5d0000'}}>" World"</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The -= Operator</h2>

        <p>The <b>Subtraction Assignment Operator</b> subtracts a value from a variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Subtraction Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x -= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The *= Operator</h2>

        <p>The <b>Multiplication Assignment Operator</b> multiplies a variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Multiplication Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x *= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The **= Operator</h2>

        <p>The <b>Exponentiation Assignment Operator</b> raises a variable to the power of the operand.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Exponentiation Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x **= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The **= Operator</h2>

        <p>The <b>Division Assignment Operator</b> divides a variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Division Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x /= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The %= Operator</h2>

        <p>The <b>Remainder Assignment Operator</b> assigns a remainder to a variable.</p>
        
        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Remainder Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x %= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The &lt;&lt;= Operator</h2>

        <p>The <b>Left Shift Assignment Operator</b> left shifts a variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Left Shift Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>-100</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x &lt;&lt;= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The &gt;&gt;= Operator</h2>

        <p>The <b>Right Shift Assignment Operator</b> right shifts a variable (signed).</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Right Shift Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>-100</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x &gt;&gt;= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The &gt;&gt;&gt;= Operator</h2>

        <p>The <b>Unsigned Right Shift Assignment Operator</b> right shifts a variable (unsigned).</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Unsigned Right Shift Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>-100</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x &gt;&gt;&gt;= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The &= Operator</h2>

        <p>The <b>Bitwise AND Assignment Operator</b> does a bitwise AND operation on two operands and assigns the result to the the variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Bitwise AND Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x &= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The |= Operator</h2>

        <p>The <b>Bitwise OR Assignment Operator</b> does a bitwise OR operation on two operands and assigns the result to the variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Bitwise OR Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x |= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The ^= Operator</h2>

        <p>The <b>Bitwise XOR Assignment Operator</b> does a bitwise XOR operation on two operands and assigns the result to the variable.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Bitwise XOR Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x ^= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The &&= Operator</h2>

        <p>The <b>Logical AND assignment operator</b> is used between two values.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Logical AND Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x &&= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <h3>Note</h3>
            <p>The &&= operator is an<Link href='https://www.w3schools.com/js/js_2020.asp' target='_blank'>ES2020 feature.</Link></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The ||= Operator</h2>

        <p>The <b>Logical OR assignment operator</b> is used between two values.</p>

        <p>If the first value is false, the second value is assigned.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Logical OR Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x ||= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <h3>Note</h3>
            <p>The ||= operator is an<Link href='https://www.w3schools.com/js/js_2020.asp' target='_blank'>ES2020 feature.</Link></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The ??= Operator</h2>

        <p>The <b>Nullish coalescing assignment operator</b> is used between two values.</p>

        <p>If the first value is undefined or null, the second value is assigned.</p>

        <br />

        <div style={{backgroundColor: 'lightgrey'}}>
            <h3>Nullish Coalescing Assignment Example</h3>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x = <code style={{color: '#5d0000'}}>10</code>;</code>
            <br />
            <code><code style={{color: 'blue'}}>let</code> x ??= <code style={{color: '#5d0000'}}>5</code>;</code>
        </div>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <h3>Note</h3>
            <p>The ??= operator is an<Link href='https://www.w3schools.com/js/js_2020.asp' target='_blank'>ES2020 feature.</Link></p>
        </div>









        





















    </main>
  )
}

export default JavaScriptAssignment