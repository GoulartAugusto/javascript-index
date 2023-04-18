import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptScope = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Scope</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:'#d9eee1'}}>
            <br />

            <p>Scope determines the accessibility (visibility) of variables.</p>

            <p>JavaScript has 3 types of scope:</p>

            <ul>
                <li>Block Scope</li>
                <li>Function Scope</li>
                <li>Global Scope</li>
            </ul>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Block Scope</h2>

        <p>Before ES6 (2015), JavaScript had only <b>Global Scope</b> and <b>Function Scope</b>.</p>

        <p>ES6 introduced two important new JavaScript keywords: <code style={{color:'blue'}}>let</code> and <code style={{color:'blue'}}>const</code>.</p>

        <p>These two keywords provide <b>Block Scope</b> in JavaScript.</p>

        <p>Variables declared inside a &#123; &#125; block cannot be accessed from outside the block:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                &#123;

                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>2</code>;

                <br />
                
                &#123;

                <br />

                <code style={{color:'green'}}>// x can NOT be used here</code>
            </code>
        </div>

        <br />

        <p>Variables declared with the <code style={{color:'blue'}}>var</code> keyword can NOT have block scope.</p>

        <p>Variables declared inside a &#123; &#125; block can be accessed from outside the block.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                &#123;

                <br />

                <code style={{color:'blue'}}>var</code> x = <code style={{color:'red'}}>2</code>;

                <br />
                
                &#123;

                <br />

                <code style={{color:'green'}}>// x CAN be used here</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Local Scope</h2>

        <p>Variables declared within a JavaScript function, become <b>LOCAL</b> to the function.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// code here can NOT use carName</code>

                <br />
                <br />

                <code style={{color:'blue'}}>function</code> myFunction() &#123;

                <br />

                <code style={{color:'blue'}}>let</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <br />

                <code style={{color:'green'}}>// code here CAN use carName</code>

                <br />

                &#125;

                <br />
                <br />

                <code style={{color:'green'}}>// code here can NOT use carName</code>
            </code>

            <p>carName is undefined outside myFunction()</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Local variables have <b>Function Scope</b>:</p>

            <p>They can only be accessed from within the function.</p>

            <br />
        </div>

        <p>Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.</p>

        <p>Local variables are created when a function starts, and deleted when the function is completed.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Function Scope</h2>

        <p>JavaScript has function scope: Each function creates a new scope.</p>

        <p>Variables defined inside a function are not accessible (visible) from outside the function.</p>

        <p>Variables declared with <code style={{color:'blue'}}>var</code>, <code style={{color:'blue'}}>let</code> and <code style={{color:'blue'}}>const</code> are quite similar when declared inside a function.</p>

        <p>They all have <b>Function Scope</b></p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> myFunction() &#123;

                <br />
                
                <code style={{color:'blue'}}>var</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>; <code style={{color:'green'}}>// Function Scope</code>
                
                <br />

                &#125;
            </code>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> myFunction() &#123;

                <br />
                
                <code style={{color:'blue'}}>let</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>; <code style={{color:'green'}}>// Function Scope</code>
                
                <br />

                &#125;
            </code>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> myFunction() &#123;

                <br />
                
                <code style={{color:'blue'}}>const</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>; <code style={{color:'green'}}>// Function Scope</code>
                
                <br />

                &#125;
            </code>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Global JavaScript Variables</h2>

        <p>A variable declared outside a function, becomes <b>GLOBAL</b>.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <br />
                
                 <code style={{color:'green'}}>// code here can use carName</code>
                
                <br />
                <code style={{color:'blue'}}>function</code> myFunction() &#123;

                <br />

                <code style={{color:'green'}}>// code here can also use carName</code>

                <br />

                &#125;
            </code>

            <br />
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>A global variable has <b>Global Scope</b>:</p>

            <p>All scripts and functions on a web page can access it.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Global Scope</h2>

        <p>Variables declared <b>Globally</b> (outside any function) have <b>Global Scope</b>.</p>
        
        <p><b>Global</b> variables can be accessed from anywhere in a JavaScript program.</p>

        <p>Variables declared with <code style={{color:'blue'}}>var</code>, <code style={{color:'blue'}}>let</code> and <code style={{color:'blue'}}>const</code> are quite similar when declared outside a block</p>

        <p>They all have <b>Global Scope</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>var</code> x = <code style={{color:'red'}}>2</code>; <code style={{color:'green'}}> // Global scope</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>2</code>; <code style={{color:'green'}}> // Global scope</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>const</code> x = <code style={{color:'red'}}>2</code>; <code style={{color:'green'}}> // Global scope</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Variables</h2>

        <p>In JavaScript, objects and functions are also variables.</p>

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Scope determines the accessibility of variables, objects, and functions from different parts of the code</p>
        
            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Automatically Global</h2>

        <p>If you assing a value to a variable that has not been declared, it will atomatically become a <b>GLOBAL</b> variable.</p>

        <p>This code wxample will declare a blobal variable <code style={{color:'blue'}}>carName</code>, even if the value is assigned inside a function.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                myFunction();

                <br />

                <code style={{color:'green'}}>// code here can use carName</code>

                <br />
                <br />

                <code style={{color:'blue'}}>function</code> myFunction() &#123;

                <br />

                carName = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Strict Mode</h2>

        <p>All modern browser support running JavaScript in "Strict Mode".</p>

        <p>You will learn more about how to use strict mode in a later chapter of this tutorial.</p>

        <br />

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>In "Strict Mode", undeclared variables are not automatically global.</p>

            <br />            
        </div>

        <br />

        {/*Just a mark to separete sections */}

        <h2>Global Variables in HTML</h2>

        <p>Wiht JavaScript, the global scope is the JavaScript environment.</p>

        <p>in HTML, the global scope is the window object.</p>

        <p>Global cariables defined with the <code style={{color:'blue'}}>var</code> keyword belong to the window object:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>var</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <code style={{color:'green'}}>// code here can use window.carName</code>
            </code>
        </div>

        <br />

        <p>Global variabels defined with the <code style={{color:'blue'}}>let</code> keyword do not belong to the window object:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>
            
            <code>
                <code style={{color:'blue'}}>let</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <code style={{color:'green'}}>// code here can not use window.carName</code>
            </code>
        </div>

        <br />

        {/*Just a mark to separete sections */}

        <h2>Warning</h2>

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>Do NOT create global variables unless you intend to.</p>

            <p>Your global variables (or functions) can overwrite window variables (or functions). Any function, including the window object, can overwrite your global variables and functions.</p>

            <br />            
        </div>

        <br />

        {/*Just a mark to separete sections */}

        <h2>The Lifetime of JavaScript Variables</h2>

        <p>The lifetime of a JavaScript variable starts when it is declared.</p>

        <p>Function (local) variables are deleted when the function is completed.</p>

        <p>In a web browser, global variables are deleted when you close the browser window (or tab).</p>

        <br />

        {/*Just a mark to separete sections */}

        <h2>Function Arguments</h2>

        <p>Function arguments (parameters) work as local variables inside functions.</p>

        <br />
    </main>
  )
}

export default JavaScriptScope