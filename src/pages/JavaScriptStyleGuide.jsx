import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptStyleGuide = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Style Guide</h1>

        <p>Always use the same coding conventions for all your JavaScript projects.</p>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Coding Conventions</h2>

        <p>Condig conventions are <b>style guides for programming</b>. They typically cover:</p>

        <ul>
            <li>Naming and declaration rules for variables and Functions.</li>
            <li>Rules for the use of white space, indentation, and comments.</li>
            <li>Programming practices and principles.</li>
        </ul>

        <p>Coding conventions <b>secure quality:</b></p>

        <ul>
            <li>Improve code readability</li>
            <li>Make code maintenance easier</li>
        </ul>

        <p>Coding conventions can be documented rules for teams to follow, or just be your individual coding practice.</p>

        <div style={{background:"lightyellow"}}>
            <br />

            <p>This page describes the general JavaScript code conventions used by W3Schools.</p>
        
            <p>You should also read the next chapter "Best Practices", and learn how to avoid coding pitfalls.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Variables Names</h2>

        <p>At W3Schools we use <b>camelCase</b> for identifiers names (variables and functions).</p>

        <p>All names starts with a <b>letter.</b></p>

        <p>At the bottom of this page, you will find a wider discussion about naming rules.</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <code>
                <code>firstName</code> = <code style={{color:"#5d0000"}}>"John"</code>;

                <br />

                <code>lastName</code> = <code style={{color:"#5d0000"}}>"Doe"</code>;

                <br />
                <br />

                <code>price</code> = <code style={{color:'red'}}>19.90</code>;

                <br />

                <code>tax</code> = <code style={{color:'red'}}>0.20</code>;

                <br />
                <br />

                <code>fullPrice = price + (price * tax);</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Spaces Around Operators</h2>

        <p>Always put spaces around operators ( = + - * / ), and after commas:</p>

        <div style={{background:"#cecece"}}>
            <h3>Examples:</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = y + z;

                <br />

                <code style={{color:'blue'}}>const</code> myArray = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Fiat"</code>];
            </code>
        </div>

        <br />

        
        {/* Just a mark to separete sections */}

        <h2>Code Indentations</h2>

        <p>Always use 2 spaces for indentation of code blocks:</p>

        <div style={{background:"#cecece"}}>
            <h3>Functions:</h3>

            <code>
                <code style={{color:'blue'}}>function</code> toCelsius(fahrenheit) &#123;

                <br />

                &nbsp; &nbsp;<code style={{color:'blue'}}>return</code> (<code style={{color:'red'}}>5</code> / <code style={{color:'red'}}>9</code>) * (fahrenheit - <code style={{color:'red'}}>32</code>);

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>Different editors interpret tabs differently. If is not Visual Studio code, do not use tabs (tabulators) for indentation.</p>
        
            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Statement Rules</h2>

        <p>General rules for simple statements:</p>

        <ul>
            <li>Always end a simple statement with a semicolon.</li>
        </ul>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Examples:</h3>

            <code>
                <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Fiat"</code>];
                
                <br />

                <code style={{color:'blue'}}>const</code> person = &#123;

                <br />

                &nbsp; &nbsp;<code>firstName</code>: <code style={{color:"#5d0000"}}>"John"</code>,

                <br />

                &nbsp; &nbsp;<code>lastName</code>: <code style={{color:"#5d0000"}}>"Doe"</code>,

                <br />

                &nbsp; &nbsp;<code>age</code>: <code style={{color:'red'}}>50</code>;

                <br />

                &nbsp; &nbsp;<code>eyeColor</code>: <code style={{color:'#5d0000'}}>"blue"</code>;

                <br />

                &#125;;
            </code>
        </div>

        <p>General rules for complex (compound) satements:</p>

        <ul>
            <li>Put the opening bracket at the end of the first line.</li>
            <li>Use one space before the opening bracket.</li>
            <li>Put the closing bracket on a new line, with leading spaces.</li>
            <li>Do not end a complex statement with a semicolon.</li>
        </ul>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Functions:</h3>

            <code>
                <code style={{color:'blue'}}>function</code> toCelsius(fahrenheit) &#123;

                <br />

                &nbsp; &nbsp;<code style={{color:'blue'}}>return</code> (<code style={{color:'red'}}>5</code> / <code style={{color:'red'}}>9</code>) * (fahrenheit - <code style={{color:'red'}}>32</code>);

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Loops:</h3>

            <code>
                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>5</code>; i++) &#123;

                <br />

                &nbsp; &nbsp; x += i;

                <br />

                &#125;
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Conditionals:</h3>

            <code>
                <code style={{color:'blue'}}>if</code> (time &lt; <code style={{color:'red'}}>20</code>) &#123;

                <br />

                &nbsp; &nbsp;greeting = <code style={{color:'#5d0000'}}>"Good day"</code>;

                <br />

                &#125; <code style={{color:'blue'}}>else</code> &#123;

                <br />

                &nbsp; &nbsp;greeting = <code style={{color:'#5d0000'}}>"Good evening"</code>;

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Object Rules</h2>

        <p>General rules for objects definitions:</p>

        <ul>
            <li>Place the opening bracket on the same line as the object name.</li>
            <li>Use colon plus one space between each property and its value.</li>
            <li>Use quotes arount string values, not around numeric values.</li>
            <li>Do not add a comma after the last property-value pair.</li>
            <li>Place the closing bracket on a new line, without leading spaces.</li>
            <li>Always end an object definition with a semicolon.</li>
        </ul>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> person = &#123;

                <br />

                &nbsp; &nbsp;<code>firstName</code>: <code style={{color:"#5d0000"}}>"John"</code>,

                <br />

                &nbsp; &nbsp;<code>lastName</code>: <code style={{color:"#5d0000"}}>"Doe"</code>,

                <br />

                &nbsp; &nbsp;<code>age</code>: <code style={{color:'red'}}>50</code>;

                <br />

                &nbsp; &nbsp;<code>eyeColor</code>: <code style={{color:'#5d0000'}}>"blue"</code>

                <br />

                &#125;;
            </code>
        </div>

        <p>Short objects can be written compressed on one line, using spaces only between properties, like this:</p>

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:'blue'}}>const</code> person = &#123; <code>firstName</code>: <code style={{color:"#5d0000"}}>"John"</code>, <code>lastName</code>: <code style={{color:"#5d0000"}}>"Doe"</code>, <code>age</code>: <code style={{color:'red'}}>50</code> <code>eyeColor</code>: <code style={{color:'#5d0000'}}>"blue"</code> &#125;;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h3>Line Length &lt; 80</h3>

        <p>For readability, avoid lines longer than 80 characters.</p>

        <p>If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>
            
            <code>
                document.getElementById("demo").innerHTML =

                <br />

                "Hello Dolly.";
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Naming Conventions</h2>

        <p>Always use the same naming convetion to all your code. For example:</p>

        <ul>
            <li>Variable and function names written as <b>camelCase</b></li>
            <li>Global variables written in <b>UPPERCASE</b> (We don't, but it's quite common)</li>
            <li>Constants (like PI) written in <b>UPPERCASE</b></li>
        </ul>

        <p>Should you use <b>hyp-hens</b>, <b>camelCase</b>, or <b>under_scores</b> in variables names?</p>

        <p>This is a question programmers often discuss. The answer is depends on who you ask:</p>

        <p><b>Hyphens in HTML and CSS:</b></p>

        <p>HTML5 attributes can start with data- (data-quantity, data-price).</p>

        <p>CSS uses hyphens in property-names (font-size).</p>

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.</p>

            <br />
        </div>

        <p><b>Underscores:</b></p>

        <p>Many programmers prefer to use underscores (date_of_birth), especially in SQL databases.</p>

        <p><b>PascalCase:</b></p>

        <p>PascalCase is often preferred by C programmers,</p>

        <p><b>camelCase</b></p>

        <p>camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.</p>

        <div style={{background:"#ffdddd"}}>
            <br />

            <p>Do not start names with a $ sign. It will put you in conflict with many JavaScript library names.</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Loading JavaScript in HTML</h2>

        <p>Use simple syntax for loading external scripts (the type attribute is not necessary):</p>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                &lt;<code style={{color:"#5d0000"}}>script</code> <code style={{color:"red"}}>src</code>=<code style={{color:'blue'}}>"myscript.js"</code>&gt;&lt;/<code style={{color:"#5d0000"}}>script</code>&gt;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Accessing HTML Elements</h2>

        <p>A consequence of using "untidy" HTML styles, might result in JavaScript errors.</p>

        <p>THese two JavaScript statements will produce different results:</p>

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:"blue"}}>const</code> obj = getElementById(<code style={{color:'#5d0000'}}>"Demo"</code>)

                <br />
                <br />

                <code style={{color:"blue"}}>const</code> obj = getElementById(<code style={{color:'#5d0000'}}>"demo"</code>)
            </code>
        </div>

        <p>If possible, use the same naming convension (as JavaScript) in HTML.</p>

        <br />

        {/* Just a mark to separete sections */}


        <h2>File Extensions</h2>

        <p>HTML files should have a <b>.html</b> extension (<b>.html</b> is allowed).</p>

        <p>CSS files should have a <b>.css</b> extension.</p>

        <p>JavaScrip files should have a <b>.js</b> extension.</p>

        {/* Just a mark to separete sections */}

        <h2>Use Lower Case File Names</h2>

        <p>Most web servers (Apache, Unix) are case sensitive about file names:</p>

        <p>london.jpg cannot be accessed as London.jpg.</p>
        
        <p>Other web servers (Microsoft, IIS) are not case sensitive:</p>
        
        <p>london.jpg can be accessed as London.jpg or london.jpg.</p>
        
        <p>If you use a mix of upper and lower case, you have to be extremely consistent.</p>
        
        <p>If you move from a case insensitive, to a case sensitive server, even small errors can break your web site.</p>
        
        <p>To avoid these problems, always use lower case file names (if possible).</p>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>Performance</h2>

        <p>Coding conventions are not used by computers. Most rules have little impact on the execution of programs.</p>

        <p>Indentations and extra spaces are not significant in small scripts.</p>

        <p>For code in development, readability should be preferred. Larger production scripts should be minimized.</p>
    </main>
  )
}

export default JavaScriptStyleGuide