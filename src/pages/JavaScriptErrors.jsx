import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptErrors = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Errors</h1>

        {/* Just a mark to separete sections */}

        <h2>Throw, and Try...Catch..Finally</h2>

        <p>The <code style={{color:'red'}}>try</code> statement defines a code block to run (to try).</p>

        <p>The <code style={{color:'red'}}>catch</code> statement defines a code block to handle any error.</p>

        <p>The <code style={{color:'red'}}>finally</code> statement defines a code block to run regardless of the result.</p>

        <p>The <code style={{color:'red'}}>throw</code> statement defines a custom error.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Errors Will Happen!</h2>

        <p>When executing JavaScript code, different errors can occur.</p>

        <p>Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>In this example we mosspelled "alert" as "adddlert" to deliberatly produce an error:</p>

            <br />

            <code>
                <code>&lt;p id="demo"&gt;&lt;/p&gt;</code>

                <br />
                <br />

                <code>&lt;script&gt;</code>
                
                <br />

                <code><code style={{color:'blue'}}>try</code> &#123;</code>
            
                <br />

                adddlert(<code style={{color:"#5d0000"}}>"Welcome guest!"</code>);

                <br />

                &#125;

                <br />

                <code><code style={{color:'blue'}}>catch</code>(err) &#123;</code>

                <br />

                document.getElementById("demo").innerHTML = err.message;

                <br />

                &#125;

                <br />

                &lt;/script&gt;
            </code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>JavaScript catches <b>adddlert</b> as an error, and executes the catch code to handle it.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript try and catch</h2>

        <p>The <code style={{color:'red'}}>try</code> statement allows you to define a block of code to be tested for errors while it is being executed.</p>

        <p>The <code style={{color:'red'}}>catch</code> statement allows you to define a block of code to be executed, if an error occurs in the try block.</p>

        <p>The JavaScript statements <code style={{color:'red'}}>try</code> and <code style={{color:'red'}}>catch</code> come in pairs:</p>
   
        <br />

        <div style={{background:'#cecece'}}>
            <code>
                try &#123;

                <br />

                <i>Block of code to try</i>

                <br />

                &#125;

                <br />

                catch(err) &#123;

                <br />

                <i>Block of code to handle errors</i>

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Throws Errors</h2>

        <p>When an error occurs, JavaScript will normally stop and generate an error message.</p>
   
        <p>The technical term for this is: JavaScript will <b>throw an exception (throw an error)</b>.</p>

        <div style={{background:'lightyellow'}}>
            <br />

            <p>JavaScript will actually create an <b>Error object</b> with two properties: <b>name</b> and <b>message</b>.</p>
        
            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The throw Statement</h2>

        <p>The <code style={{color:'red'}}>throw</code> statement allows you to create a custom error.</p>
        
        <p>Technically you can <b>throe an exception (throw an error).</b></p>

        <p>The exception can be a JavaScript <code style={{color:'red'}}>Script</code>, a <code style={{color:'red'}}>Number</code>, a <code style={{color:'red'}}>Boolean</code> or an <code style={{color:'red'}}>Object</code>:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:'blue'}}>throw</code> <code style={{color:'#5d0000'}}>"To big"</code>; <code style={{color:'green'}}>// throw a text</code>

                <br />

                <code style={{color:'blue'}}>throw</code> <code style={{color:'red'}}>500</code>; <code style={{color:'green'}}>// throw a number</code>
            </code>
        </div>

        <br />

        <p>If you use <code style={{color:'red'}}>throw</code> together with <code style={{color:'blue'}}>try</code> and <code style={{color:'blue'}}>catch</code>, you can control program flow and generate custom error messages.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Input Validation Example</h2>

        <p>This example examines inout. If the calue is wrong, an exception (err) is thrown.</p>

        <p>The exception (err) is caught by the catch statement and a custom error message is displayed:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code>&lt;!DOCTYPE html&gt;</code>

                <br />

                <code>&lt;html&gt;</code>

                <br />

                <code>&lt;body&gt;</code>

                <br />
                <br />

                <code>&lt;p&gt;Pease input a number between 5 and 10:&lt;/p&gt;</code>

                <br />
                <br />

                <code>&lt;input id="demo" type="text"&gt;</code>

                <br />

                <code>&lt;button type="button" onclick="myFunction()"&gt;Test Input&lt;/button&gt;</code>

                <br />

                <code>&lt;p id="p01"&gt;&lt;/p&gt;</code>

                <br />
                <br />

                <code>&lt;script&gt;</code>

                <br />

                <code>
                    <code style={{color:'blue'}}>function</code> myFunction() &#123;

                    <br />

                    <code style={{color:'blue'}}>const</code> message = document.getElementById("p01");

                    <br />

                    <code style={{color:'blue'}}>let</code> x = document.getElementById("demo").value;

                    <br />

                    <code style={{color:'blue'}}>try</code> &#123;

                    <br />

                    <code style={{color:'blue'}}>if</code>(x.trim() == "") <code style={{color:'blue'}}>throw</code> "empty";

                    <br />

                    <code style={{color:'blue'}}>if</code>(isNaN(x)) <code style={{color:'blue'}}>throw</code> "Not a Number";

                    <br />

                    <code>x = Number(x);</code>

                    <br />

                    <code style={{color:'blue'}}>if</code>(x &lt; <code style={{color:'red'}}>5</code>) <code style={{color:'blue'}}>throw</code> "Too low";

                    <br />

                    <code style={{color:'blue'}}>if</code>(x &gt; <code style={{color:'red'}}>10</code>) <code style={{color:'blue'}}>throw</code> "Too high";

                    <br />

                    &#125;

                    <code><code style={{color:'blue'}}>catch</code>(err)</code> &#123;

                    <br />

                    message.innerHTML = "Input is " + err;

                    <br />

                    &#125;

                    <br />

                    &#125;

                </code>

                <br />

            <code>&lt;/script&gt;</code>
            
            <br />
            <br />

            <code>&lt;/body&gt;</code>

            <br />

            <code>&lt;/html&gt;</code>

            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>HTML Validation</h2>

        <p>The code above is just an example.</p>

        <p>Modern browsers will often use a combination of JavaScript and built-in HTML validation, using predefined validation rules defined in HTML attributes:</p>
        
        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                &lt;<code style={{color:'#5d0000'}}>input</code> <code style={{color:'red'}}>id</code>=<code style={{color:'blue'}}>"demo"</code> <code style={{color:'red'}}>type</code>=<code style={{color:'blue'}}>"number"</code> <code style={{color:'red'}}>min</code>=<code style={{color:'blue'}}>"5"</code> <code style={{color:'red'}}>max</code>=<code style={{color:'blue'}}>"10"</code> <code style={{color:'red'}}>step</code>=<code style={{color:'blue'}}>"1"</code>&gt;
            </code>

            <br />
        </div>

        <br />

        <p>You can read more about forms validation in a later chapter of this tutorial.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The finally Statement</h2>
        
        <p>The <code style={{color:'blue'}}>finally</code> statement lets you execute code, after try and catch, regardless of the result:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <br />

            <code>
                <code style={{color:'blue'}}>try</code> &#123;

                <br />

                <i>Block of code to <code style={{color:'blue'}}>try</code></i>

                <br />

                &#125;

                <br />

                <code style={{color:'blue'}}>catch</code>(err) &#123;

                <br />

                <i>Block of code to handle erros</i>

                <br />

                &#125;

                <br />

                <code style={{color:'blue'}}>finally</code> &#123;

                <br />

                <i>Block of code to be executerd regardless of the <code style={{color:'blue'}}>try</code> / <code style={{color:'blue'}}>catch</code> result</i>
                
                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
            <code>
                    <code style={{color:'blue'}}>function</code> myFunction() &#123;

                    <br />

                    <code style={{color:'blue'}}>const</code> message = document.getElementById("p01");

                    <br />

                    <code>message.innerHTML = "";</code>

                    <br />

                    <code style={{color:'blue'}}>let</code> x = document.getElementById("demo").value;

                    <br />

                    <code style={{color:'blue'}}>try</code> &#123;

                    <br />

                    <code style={{color:'blue'}}>if</code>(x.trim() == "") <code style={{color:'blue'}}>throw</code> "is empty";

                    <br />

                    <code style={{color:'blue'}}>if</code>(isNaN(x)) <code style={{color:'blue'}}>throw</code> "is Not a Number";

                    <br />

                    <code>x = Number(x);</code>

                    <br />

                    <code style={{color:'blue'}}>if</code>(x &lt; <code style={{color:'red'}}>5</code>) <code style={{color:'blue'}}>throw</code> "is too low";

                    <br />

                    <code style={{color:'blue'}}>if</code>(x &gt; <code style={{color:'red'}}>10</code>) <code style={{color:'blue'}}>throw</code> "is too high";

                    <br />

                    &#125;

                    <code><code style={{color:'blue'}}>catch</code>(err)</code> &#123;

                    <br />

                    message.innerHTML = "Error:" + err + ".";

                    <br />

                    &#125;

                    <br />

                    <code style={{color:'blue'}}>finally</code> &#123;

                    <br />

                    document.getElementById("demo").value = "";

                    <br />

                    &#125;

                    <br />

                    &#125;

                </code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Error Object</h2>

        <p>JavaScript has a built in error object that provides error information when an error occurs.</p>

        <p>The error object provides two useful properties: name and message.</p>

        {/* Just a mark to separete sections */}

        <h2>Error Object Properties</h2>

        <br />

        <table>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>name</td>
                <td>Set or returns an error name</td>
            </tr>
            <tr>
                <td>message</td>
                <td>Set or returns an error message (a string)</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Error Name Values</h2>

        <br />

        <table>
            <tr>
                <th>Error Name</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Eval Error</td>
                <td>An error has occurred in the eval() function</td>
            </tr>
            <tr>
                <td>RangeError</td>
                <td>A number "out of range" has occurred</td>
            </tr>
            <tr>
                <td>ReferenceError</td>
                <td>An illegal reference has occurred</td>
            </tr>
            <tr>
                <td>SyntaxError</td>
                <td>A syntax error has occurred</td>
            </tr>
            <tr>
                <td>TypeError</td>
                <td>A type error has occurred</td>
            </tr>
            <tr>
                <td>URIError</td>
                <td>An error in encodeURI() has occurred</td>
            </tr>
        </table>

        <br />

        <p>The six different values are described below.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Eval Error</h2>

        <p>An <code style={{color:'red'}}>EvalError</code> indicates an error in the eval() function.</p>

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Range Error</h2>

        <br />

        <p>A <code style={{color:'red'}}>RangeError</code> is thrown if you use a number that is outside the range of legal values.</p>

        <p>For example: You cannot set the number of significant digits of a number to 500.</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> num = <code style={{color:'red'}}>1</code>;

                <br />

                <code style={{color:'blue'}}>try</code> &#123;

                <br />

                num.toPrecision(<code style={{color:'red'}}>500</code>); <code style={{color:'green'}}>// A number cannot have 500 significant digits</code>

                <br />

                &#125;
                
                <code style={{color:'blue'}}>catch</code>(err)  &#123;

                <br />

                document.getElementById("demo").innerHTML = err.name;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Reference Error</h2>

        <p>A <code style={{color:'red'}}>ReferenceError</code> is thrown if you use (reference) a variable that has not been declared:</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code>

                <br />

                <code style={{color:'blue'}}>try</code> &#125;

                <br />

                x = y + <code style={{color:'red'}}>1</code>; <code style={{color:'green '}}>// y cannot be used (referenced)</code>

                <br />

                <code style={{color:'blue'}}>catch</code>(err) &#123;

                <br />

                document.getElementById("demo").innerHTML = err.name;
                
            </code>

            <p>You cannot use the value of a non-existing variable:</p>

            <p>ReferenceError</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Syntax Error</h2>

        <p>A <code style={{color:'red'}}>SyntaxError</code> is thrown if you try to evaluate code with a syntax error.</p>

        <br />
        
        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:'blue'}}>try</code> &#123;

                <br />

                <code style={{color:'blue'}}>eval</code>.("alert('Hello)") <code style={{color:'green'}}>// Missing ' will produce an error </code>

                <br />

                &#125;

                <br />

                <code style={{color:'blue'}}>catch</code>(err) &#123;

                <br />

                document.getElementById("demo").innerHTML = err.name;

                <br />

                &#125;
            </code>
        </div>
        

        <br />

        {/* Just a mark to separete sections */}

        <h2>Type Error</h2>

        <p>A <code style={{color:'red'}}>TypeError</code> is thrown if you use a value that is outside the range of expected types:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:'blue'}}>let</code> num = <code style={{color:'red'}}>1</code>;

                <br />
                
                <code style={{color:'blue'}}>try</code> &#123;

                <br />

                num.toUpperCase(); <code style={{color:'green'}}>// You cannot convert a number to upper case</code>

                <br />

                &#125;

                <br />

                <code style={{color:'blue'}}>catch</code>(err) &#123;

                <br />

                document.getElementById("demo").innerHTML = err.name;

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>URI (Uniform Resource Identifier) Error</h2>

        <p>A <code style={{color:'red'}}>URIError</code> is thrown if you use illegal characters in a URI function:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:'blue'}}>try</code> &#123;

                <br />

                decodeURI("%%%"); <code style={{color:'green'}}>// You cannot URI decode percent signs</code>

                <br />

                &#125;

                <br />

                <code style={{color:'blue'}}>catch</code>(err) &#123;

                <br />

                document.getElementById("demo").innerHTML = err.name;

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Non-Standard Error Object Properties</h2>

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>Mozilla and Microsoft define some non-standard error object properties:</p>

            <ul style={{listStyle:'none'}}>
                <li>fileName (Mozilla)</li>
                <li>lineNumber (Mozilla)</li>
                <li>columnNumber (Mozilla)</li>
                <li>stack (Mozilla)</li>
                <li>description (Microsoft)</li>
                <li>number (Microsoft)</li>
            </ul>

            <p>Do not use these properties in public web sites. They will not work in all browsers.</p>

            <br />
        </div>

    </main>
  )
}

export default JavaScriptErrors