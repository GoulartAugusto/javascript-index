import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptComparisonandLogicalOperators = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Comparison and Logical Operators</h1>

        <p>Comparison and Logical operators are used to test for <code style={{color:'blue'}}>true</code> or <code style={{color:'blue'}}>false</code>.</p>

        {/* Just a mark to separete sections */}

        <h2>Comparison Operators</h2>

        <p>Comparison operators are used in logical statements to determine equality or difference between variables or values.</p>

        <p>Given that <code style={{color:'blue'}}>x = 5</code>, the table below explains the comparison operator:</p>

        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Comparing</th>
                <th>Returns</th>
            </tr>

            <tr>
                <td>==</td>
                <td>equal to</td>
                <td>
                    <tr>x == 5</tr>
                    <tr>x == 8</tr>
                    <tr>x == "5"</tr>
                </td>
                <td>
                    <tr>false</tr>
                    <tr>true</tr>
                    <tr>true</tr>
                </td>
            </tr>
            
            <tr>
                <td>===</td>
                <td>equal value and equal type</td>
                <td>
                    <tr>x === 5</tr>
                    <tr>x === "5"</tr>
                </td>
                <td>
                    <tr>true</tr>
                    <tr>false</tr>
                </td>
            </tr>
            
            <tr>
                <td>!=</td>
                <td>not equal</td>
                <td>x != 8</td>
                <td>true</td>
            </tr>
            
            <tr>
                <td>!==</td>
                <td>not equal value or not equal type</td>
                <td>
                    <tr>x !== 5</tr>
                    <tr>x !== "5"</tr>
                    <tr>x !== 8</tr>
                </td>
                <td>
                    <tr>false</tr>
                    <tr>true</tr>
                    <tr>true</tr>
                </td>
            </tr>
            
            <tr>
                <td>&gt;</td>
                <td>greater than</td>
                <td>x &gt; 8</td>
                <td>false</td>
            </tr>
            
            <tr>
                <td>&lt;</td>
                <td>less than</td>
                <td>x &lt; 8</td>
                <td>true</td>
            </tr>
            
            <tr>
                <td>&gt;=</td>
                <td>greater than or equal to</td>
                <td>x &gt;= 8</td>
                <td>false</td>
            </tr>
            
            <tr>
                <td>&lt;=</td>
                <td>less than or equal to</td>
                <td>x &lt;= 8</td>
                <td>true</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>How Can it be Used</h2>

        <p>Comparison operators can be used in conditional statements to compare values and take action depending on the result:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code><code style={{color:'blue'}}>if</code> (age &lt; <code style={{color:'red'}}>18</code>) text = <code style={{color:"#5d0000"}}>"Too young to buy alcohol"</code>;</code>

            <br />
            <br />
        </div>

        <br />

        <p>You will learn more about the use of conditional statements in the next chapter of this tutorial.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Logical Operators</h2>

        <p>Logical operators are used to determine the logic between variables or values.</p>

        <p>Given that <code style={{color:'blue'}}>x = 6</code> and <code style={{color:'blue'}}>y = 3</code>, the table below explains the logical operators:</p>

        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>

            <tr>
                <td>&&</td>
                <td>and</td>
                <td>(x &lt; 10 && y &gt; 1) is true</td>
            </tr>

            <tr>
                <td>||</td>
                <td>or</td>
                <td>(x == 5 || y == 5) is false</td>
            </tr>

            <tr>
                <td>!</td>
                <td>not</td>
                <td>!(x == y) is true</td>
            </tr>

        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Conditional (Ternary) Operator</h2>

        <p>JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.</p>

        <h4>Syntax</h4>

        <div style={{background:'#cecece'}}>
            <br />

            <code>variablename = (condition) ? value1:value2</code>

            <br />
            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> voteable = (age &lt; <code style={{color:"red"}}>18</code>) ? <code style={{color:'#5d0000'}}>"Too young"</code> : <code style={{color:'#5d0000'}}>"Old enough"</code>;</code>
        </div>

        <br />

        <p>If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".</p>

        <br />

        {/* Just a mark to separete sections */}


        <h2>Comparing Different Types</h2>

        <p>Comparing data of different types may give unexpected results.</p>

        <p>When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to <code style={{color:'blue'}}>NaN</code> which is always <code style={{color:'blue'}}>false</code>.</p>

        <br />

        <table>
            <tr>
                <th>Case</th>
                <th>Value</th>
            </tr>

            <tr>
                <td>2 &lt; 12</td>
                <td>true</td>
            </tr>

            <tr>
                <td>2 &lt; "12"</td>
                <td>true</td>
            </tr>

            <tr>
                <td>2 &lt; "John"</td>
                <td>false</td>
            </tr>

            <tr>
                <td>2 &gt; "John"</td>
                <td>false</td>
            </tr>

            <tr>
                <td>2 == "John"</td>
                <td>false</td>
            </tr>

            <tr>
                <td>"2" &lt; "12"</td>
                <td>false</td>
            </tr>

            <tr>
                <td>"2" &gt; "12"</td>
                <td>true</td>
            </tr>

            <tr>
                <td>"2" == "12"</td>
                <td>false</td>
            </tr>
        </table>

        <br />

        <p>When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.</p>

        <p>To secure a proper result, variables should be converted to the proper type before comparison:</p>
        
        <br />
        
        <div style={{background:'#cecece'}}>
            <br />

            <code>age = Number(age);</code>

            <br />

            <code><code style={{color:'blue'}}>if</code> (isNaN(age)) &#123;</code>

            <br />

            <code>voteable = <code style={{color:'#5d0000'}}>"Input is not a number"</code>;</code>

            <br />

            <code>&#125; <code style={{color:'blue'}}>else</code> &#123;</code>

            <br />

            <code>voteable = (age &lt; 18) ? <code style={{color:'#5d0000'}}>"Too young"</code> : <code style={{color:'#5d0000'}}>"Old enough"</code>;</code>

            <br />

            <code>&#125;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Nullish Coalescing Operator (??)</h2>

        <p>The <code style={{color:'blue'}}>??</code> operator returns the first argument if it is not <b>nullish</b> (<code style={{color:'blue'}}>null</code> or <code style={{color:'blue'}}>undefined</code>).</p>

        <p>Otherwise it returns the second argument.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> name = <code style={{color:'blue'}}>null</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:"#5d0000"}}>"missing"</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> result = name ?? text;</code>

            <br />

            <p>The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second.</p>

            <p>"The name is missing"</p>
        </div>

        <br />

        <p><b>The nullish operator is supported in all browsers since March 2020.</b></p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Optional Chaining Operator (?.)</h2>

        <p>The <code style={{color:'blue'}}>?.</code> operator returns <code style={{color:'blue'}}>undefined</code> if an object is <code style={{color:'blue'}}>undefined</code> or <code style={{color:'blue'}}>null</code> (instead of throwing an error).</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Create an object:</code>
            
            <br />

            <code><code style={{color:'blue'}}>const</code> car = &#123; type: <code style={{color:"#5d0000"}}>"Fiat"</code>, model: <code style={{color:"#5d0000"}}>"500"</code>, color: <code style={{color:"#5d0000"}}>"white"</code> &#125;;</code>

            <br />
            <br />

            <code style={{color:'green'}}>// Ask for car name:</code>
            
            <br />

            <code>document.getElementById(<code style={{color:"#5d0000"}}>"demo"</code>).innerHTML = car?.name;</code>

            <br />
            <br />

            <p>The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).</p>

            <p>Car name is:</p>

            <p>undefined</p>
        </div>

        <br />

        <p><b>The optional chaining operator is supported in all browsers since March 2020.</b></p>

    </main>
  )
}

export default JavaScriptComparisonandLogicalOperators