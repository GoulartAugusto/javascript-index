import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptOperatorPrecedence = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Operator Precedence</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:'#d9eee1'}}>
            <br />

            <p>Operator precedence describes the order in which operations are performed in an arithmetic expression.</p>
        
            <p>Multiplication (<code style={{color:'blue'}}>*</code>) and division (<code style={{color:'blue'}}>/</code>) have higher <b>precedence</b> than addition (<code style={{color:'blue'}}>+</code>) and subtraction (<code style={{color:'blue'}}>-</code>).</p>
        
            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>As in traditional mathematics, multiplication is done first:</p>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code> + <code style={{color:'red'}}>50</code> * <code style={{color:'red'}}>3</code>;

                <br />

                <code>Multiplication has precedence over addition.</code>

                <br />

                <code>250</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>When using parentheses, operations inside the parentheses are computed first:</p>

            <code>
                <code style={{color:'blue'}}>let</code> x = (<code style={{color:'red'}}>100</code> + <code style={{color:'red'}}>50</code>) * <code style={{color:'red'}}>3</code>;

                <br />

                <code>Multiplication has precedence over addition.</code>

                <br />

                <code>But parenthesis has precedence over multiplication.</code>

                <br />

                <code>450</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>Operations with the same precedence (like * and /) are computed from left to right:</p>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>100</code> / <code style={{color:'red'}}>50</code> * <code style={{color:'red'}}>3</code>;

                <br />

                <code>When many operations has the same precedence, they are computed from left to right.</code>

                <br />

                <code>6</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <div style={{background:"lightyellow"}}>
            <h2>Operator Precedence Values</h2>

            <p>Expressions in parentheses are computed <b>before</b> the rest of the expression</p>

            <p>Function are executed <b>before</b> the result is used in the rest of the expression</p>

            <br />
        </div>

        <br />

        <table>
            <tr>
                <th>Val</th>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>18</td>
                <td>( )</td>
                <td>Expression Grouping</td>
                <td>(100 + 50) * 3</td>
            </tr>
            <tr>
                <td>17</td>
                <td>.</td>
                <td>Member Of</td>
                <td>person.name</td>
            </tr>
            <tr>
                <td>17</td>
                <td>[]</td>
                <td>Member Of</td>
                <td>person["name"]</td>
            </tr>
            <tr>
                <td>17</td>
                <td>?.</td>
                <td>Optional Chaining ES2020</td>
                <td>x ?. y</td>
            </tr>
            <tr>
                <td>17</td>
                <td>()</td>
                <td>Function Call</td>
                <td>myFunction()</td>
            </tr>
            <tr>
                <td>17</td>
                <td>new</td>
                <td>New with Arguments</td>
                <td>new Date("June 5,2022")</td>
            </tr>
            <tr>
                <td>16</td>
                <td>new</td>
                <td>New without Arguments</td>
                <td>new Date()</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Increment Operators</h2>

            <p>Postfix increments are executed <b>before</b> prefix increments</p>

            <br />
        </div>

        <br />
        
        <table>
            <tr>
                <td>15</td>
                <td>++</td>
                <td>Postfix Increment</td>
                <td>i++</td>
            </tr>
            <tr>
                <td>15</td>
                <td>--</td>
                <td>Postfix Decrement</td>
                <td>i--</td>
            </tr>
            <tr>
                <td>14</td>
                <td>++</td>
                <td>Prefix Increment</td>
                <td>++i</td>
            </tr>
            <tr>
                <td>14</td>
                <td>--</td>
                <td>Prefix Decrement</td>
                <td>--i</td>
            </tr>
        </table>


        <br />

        <div style={{background:"lightyellow"}}>
            <h2>NOT Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>14</td>
                <td>!</td>
                <td>Logical NOT</td>
                <td>!(x==y)</td>
            </tr>
            <tr>
                <td>14</td>
                <td>~</td>
                <td>Bitwise NOT</td>
                <td>~x</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Unary Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>14</td>
                <td>+</td>
                <td>Unary Plus</td>
                <td>+x</td>
            </tr>
            <tr>
                <td>14</td>
                <td>-</td>
                <td>Unary Minus</td>
                <td>-x</td>
            </tr>
            <tr>
                <td>14</td>
                <td>typeof</td>
                <td>Data Type</td>
                <td>typeof x</td>
            </tr>
            <tr>
                <td>14</td>
                <td>void</td>
                <td>Evaluate Void</td>
                <td>void(0)</td>
            </tr>
            <tr>
                <td>14</td>
                <td>delete</td>
                <td>Property Delete</td>
                <td>delete myCar.color</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Arithmetic Operators</h2>

            <p>Exponentiations are executed <b>before</b> multiplications</p>

            <p>Multiplications and divisions are executed <b>before</b> additions and subtractions</p>

            <br />
        </div>
        
        <table>
            <tr>
                <td>13</td>
                <td>**</td>
                <td>Exponentiation ES2016</td>
                <td>10 ** 2</td>
            </tr>
            <tr>
                <td>12</td>
                <td>*</td>
                <td>Multiplication</td>
                <td>10 * 5</td>
            </tr>
            <tr>
                <td>12</td>
                <td>/</td>
                <td>Division</td>
                <td>10 / 5</td>
            </tr>
            <tr>
                <td>12</td>
                <td>%</td>
                <td>Division Remainder</td>
                <td>10 % 5</td>
            </tr>
            <tr>
                <td>11</td>
                <td>+</td>
                <td>Addition</td>
                <td>10 + 5</td>
            </tr>
            <tr>
                <td>11</td>
                <td>-</td>
                <td>Subtraction</td>
                <td>10 - 5</td>
            </tr>
            <tr>
                <td>11</td>
                <td>+</td>
                <td>Concatenation</td>
                <td>"John" + "Doe"</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Shift Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>10</td>
                <td>&lt;&lt;</td>
                <td>Shift Left</td>
                <td>x &lt;&lt; 2</td>
            </tr>
            <tr>
                <td>10</td>
                <td>&gt;&gt;</td>
                <td>Shift Right (signed)</td>
                <td>x &gt;&gt; 2</td>
            </tr>
            <tr>
                <td>10</td>
                <td>&gt;&gt;&gt;</td>
                <td>Shift Right (unsigned)</td>
                <td>x &gt;&gt;&gt; 2</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Relational Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>9</td>
                <td>in</td>
                <td>Property in Object</td>
                <td>"PI" in Math</td>
            </tr>
            <tr>
                <td>9</td>
                <td>instanceof</td>
                <td>Instance of Object</td>
                <td>x instanceof Array</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Comparison Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>9</td>
                <td>&lt;</td>
                <td>Less than</td>
                <td>x &lt; y</td>
            </tr>
            <tr>
                <td>9</td>
                <td>&lt;=</td>
                <td>Less than or equal</td>
                <td>x &lt;= y</td>
            </tr>
            <tr>
                <td>9</td>
                <td>&gt;=</td>
                <td>Greater than</td>
                <td>x &gt;= y</td>
            </tr>
            <tr>
                <td>9</td>
                <td>&gt;=</td>
                <td>Greater than or equal</td>
                <td>x &gt;= Array</td>
            </tr>
            <tr>
                <td>9</td>
                <td>&lt;=</td>
                <td>Less than or equal</td>
                <td>x &lt;= y</td>
            </tr>
            <tr>
                <td>8</td>
                <td>==</td>
                <td>Equal</td>
                <td>x == y</td>
            </tr>
            <tr>
                <td>8</td>
                <td>===</td>
                <td>Strict equal</td>
                <td>x === y</td>
            </tr>
            <tr>
                <td>8</td>
                <td>!=</td>
                <td>Unequal</td>
                <td>x != y</td>
            </tr>
            <tr>
                <td>8</td>
                <td>!==</td>
                <td>Strict unequal</td>
                <td>x !== y</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Bitwise Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>7</td>
                <td>&</td>
                <td>Bitwise AND</td>
                <td>x & y</td>
            </tr>
            <tr>
                <td>6</td>
                <td>^</td>
                <td>Bitwise XOR</td>
                <td>x ^ y</td>
            </tr>
            <tr>
                <td>5</td>
                <td>|</td>
                <td>Nullish Coalescing ES2020</td>
                <td>x | y</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Logical Operators</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>4</td>
                <td>&&</td>
                <td>Logical AND</td>
                <td>x && y</td>
            </tr>
            <tr>
                <td>3</td>
                <td>||</td>
                <td>Logical OR</td>
                <td>x || y</td>
            </tr>
            <tr>
                <td>3</td>
                <td>??</td>
                <td>Nullish Coalescing ES2020</td>
                <td>x ?? y</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Conditional (ternary) Operator</h2>

            <br />
        </div>
        
        <table>
            <tr>
                <td>2</td>
                <td>? :</td>
                <td>Condition</td>
                <td>? "yes" : "no"</td>
            </tr>
        </table>

        <br />

        <div style={{background:"lightyellow"}}>
            <h2>Assignment Operators</h2>

            <p>Assignments are executed <b>after</b> other operations</p>

            <br />
        </div>
        
        <table>
            <tr>
                <td>2</td>
                <td>=</td>
                <td>Simple Assignment</td>
                <td>x = y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>:</td>
                <td>Colon Assignment</td>
                <td>x: 5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>? :</td>
                <td>Condition</td>
                <td>? "yes" : "no"</td>
            </tr>
            <tr>
                <td>2</td>
                <td>+=</td>
                <td>Addition Assignment</td>
                <td>x += y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>-=</td>
                <td>Subtraction Assignment</td>
                <td>x -= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>*=</td>
                <td>Multiplication Assignment</td>
                <td>x *= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>**=</td>
                <td>Exponentiation Assignment</td>
                <td>x **= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>/=</td>
                <td>Division Assignment</td>
                <td>x /= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>%=</td>
                <td>Remainder Assignment</td>
                <td>x %= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>&lt;&lt;=</td>
                <td>Left Shift Assignment</td>
                <td>x &lt;&lt;= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>&gt;&gt;=</td>
                <td>Right Shift Assignment</td>
                <td>x &gt;&gt;= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>&gt;&gt;&gt;=</td>
                <td>Unsigned Right Shift</td>
                <td>x &gt;&gt;&gt;= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>&=</td>
                <td>Bitwise AND Assignment</td>
                <td>x &= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>|=</td>
                <td>Bitwise OR Assignment</td>
                <td>x |= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>^=</td>
                <td>Bitwise XOR Assignment</td>
                <td>x ^= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>&&=</td>
                <td>Logical AND Assignment</td>
                <td>x &&= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>||=</td>
                <td>Logical OR Assignment</td>
                <td>x ||= y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>yield</td>
                <td>Pause / Resume</td>
                <td>yield y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>yield*</td>
                <td>Delegate</td>
                <td>yield* x</td>
            </tr>
            <tr>
                <td>2</td>
                <td>...</td>
                <td>Spread</td>
                <td>... x</td>
            </tr>
            <tr>
                <td>1</td>
                <td>,</td>
                <td>Comma</td>
                <td>x , y</td>
            </tr>
        </table>
    </main>
  )
}

export default JavaScriptOperatorPrecedence