import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptLet = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Let</h1>

        <div  style={{ backgroundColor: '#cdffcc'}}>
            <ul>
                <li>The <code style={{color: 'blue'}}>let </code>keyword was introduced in ES6 (2015).</li>
                <li>Variables defined with <code style={{color: 'blue'}}>let</code> cannot be Redeclared.</li>
                <li>Variables defined with <code style={{color: 'blue'}}>let</code> must be Declared before use.</li>
                <li>Variables defined with <code style={{color: 'blue'}}>let</code> have Block Scope.</li>
            </ul>
        </div>

        <h2>Cannot be Redeclared</h2>

        <p>Variables defined with <code style={{color: 'blue'}}>let</code> cannot be <b>redeclared</b>.</p>
        <p>You cannot accidentally redeclare a variable.</p>
        <p>With <code style={{color: 'blue'}}>let</code> you can not do this:</p>

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>"John Doe"</code>;
                    <br />
                    <code style={{color: 'blue'}}>let</code> x = 0;
                    <br />
                    <code style={{color: 'green'}}>// SyntaxError: 'x' has already been declared</code>
                </code>

        </div>

        <p>With <code style={{color: 'blue'}}>var</code> you can:</p>

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>"John Doe"</code>;
                    <br />
                    <code style={{color: 'blue'}}>var</code> x = 0;
                    <br />
                </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Block Scope</h2>

        <p>Before ES6 (2015), JavaScript had only <b>Global Scope</b> and <b>Function Scope</b>.</p>

        <p>ES6 introduced two important new JavaScript keywords: <code style={{color: 'blue'}}>let</code> and <code style={{color: 'blue'}}>const</code>.</p>

        <p>These two keywords provide <b>Block Scope</b> in JavaScript.</p>

        <p>Variables declared inside a &#123; &#125; block cannot be accessed from outside the block:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    &#123;
                    <br />
                    <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                    <br />
                    &#125;
                    <br />
                    <br />
                    <code style={{color: 'green'}}>// x can NOT be used here</code>
                    <br />
                </code>

        </div>

        <br />

        <p>Variables declared with the <code style={{color: 'blue'}}>var</code> keyword can NOT have block scope.</p>
        
        <p>Variables declared inside a &#123; &#125; block can be accessed from outside the block.</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

          <h3>Example</h3>
              
              <code>
                  &#123;
                  <br />
                  <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                  <br />
                  &#125;
                  <br />
                  <br />
                  <code style={{color: 'green'}}>// x CAN be used here</code>
                  <br />
              </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Redeclaring Variables</h2>

        <p>Redeclaring a variable using the <code style={{color: 'blue'}}>var</code> keyword can impose problems.</p>

        <p>Redeclaring a variable inside a block will also redeclare the variable outside the block:</p>

        <br />

        <div style={{ backgroundColor: 'lightgray'}}>

          <h3>Example</h3>
                
                <code>
                  <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>10</code>;
                  <br />
                  <code style={{color: 'green'}}>// Here x is 10</code>
                    <br />
                    &#123;
                    <br />
                    <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                    <br />
                    <code style={{color: 'green'}}>// Here x is 2</code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    <code style={{color: 'green'}}>// Here x is 2</code>
                    <br />
                </code>

        </div>

        <br />

        <p>Redeclaring a variable using the <code style={{color: 'blue'}}>let</code> keyword can solve this problem.</p>

        <p>Redeclaring a variable inside a block will not redeclare the variable outside the block:</p>

        <br />

        <div style={{ backgroundColor: 'lightgray'}}>

          <h3>Example</h3>
                
                <code>
                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>10</code>;
                  <br />
                  <code style={{color: 'green'}}>// Here x is 10</code>
                    <br />
                    &#123;
                    <br />
                    <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                    <br />
                    <code style={{color: 'green'}}>// Here x is 2</code>
                    <br />
                    &#125;
                    <br />
                    <br />
                    <code style={{color: 'green'}}>// Here x is 10</code>
                    <br />
                </code>

          </div>

        {/* Just a mark to separete sections */}

        <h2>Browser Support</h2>
        
        <p>The <code style={{color: 'blue'}}>let</code> keyword is not fully supported in Internet Explorer 11 or earlier.</p>

        <p>The Browsers Edge from 2015 and Firefox from 2015, Chrome and Opera from 2016 and Safari from 2017 have full suport for the <code style={{color: 'blue'}}>let</code> keyword. Before these dates they are not compatible.</p>


        <br />

        {/* Just a mark to separete sections */}

        <h2>Redeclaring</h2>

        <p>Redeclaring a JavaScript variable with <code style={{color: 'blue'}}>var</code> is allowed anywhere in a program:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

          <h3>Example</h3>
              
              <code>
                  <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                  <br />
                  <code style={{color: 'green'}}>// Now x is 2</code>
                  <br />
                  <br />
                  <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>3</code>;
                  <br />
                  <code style={{color: 'green'}}>// Now x is 3</code>
              </code>

        </div>

        <br />

        <p>With <code style={{color: 'blue'}}>let</code>, redeclaring a variable in the same block is NOT allowed:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

          <h3>Example</h3>
              
              <code>
                  <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                  <code style={{color: 'green'}}>// Allowed</code>
                  <br />

                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>3</code>;
                  <code style={{color: 'green'}}>// Not allowed</code>
                  <br />
                  <br />

                  &#123;
                  <br />
                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                  <code style={{color: 'green'}}>// Allowed</code>
                  <br />

                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>3</code>;
                  <code style={{color: 'green'}}>// Not allowed</code>
                  <br />
                  &#125;

                  <br />
                  <br />

                  &#123;
                  <br />
                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                  <code style={{color: 'green'}}>// Allowed</code>
                  <br />
                  <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>3</code>;
                  <code style={{color: 'green'}}>// Not llowed</code>
                  <br />
                  &#125;

              </code>
        </div>

        <p>Redeclaring a variable with <code style={{color: 'blue'}}>let</code>, in another block, IS allowed:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

          <h3>Example</h3>
              
              <code>
                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                  <code style={{color: 'green'}}>// Allowed</code>
                  <br />
                  <br />

                  &#123;
                  <br />
                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>3</code>;
                  <code style={{color: 'green'}}>// Allowed</code>
                  <br />
                  &#125;

                  <br />
                  <br />

                  &#123;
                  <br />
                  <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>4</code>;
                  <code style={{color: 'green'}}>// Allowed</code>
                  <br />
                  &#125;

              </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Let Hoisting</h2>

        <p>Variables defined with <code style={{color: 'blue'}}>var</code> are <b>hoisted</b> to the top and can be initialized at any time.</p>

        <p>Meaning: You can use the variable before it is declared:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
                <br />
                <code style={{color: 'blue'}}>var</code> carName;
                <br />
            </code>

        </div>

        <br />

        <p>Variables defined with <code style={{color: 'blue'}}>let</code> are also hoisted to the top of the block, but not initialized.</p>

        <p>Meaning: Using a <code style={{color: 'blue'}}>let</code> variable before it is declared will result in a <code style={{color: '#4d0000'}}>ReferenceError:</code></p>

        <br />

        <div  style={{ backgroundColor: '#ff00003c'}}>

        <h3>Example</h3>
            
            <code>
                carName = <code style={{color: '#4d0000'}}>"Saab"</code>;
                <br />
                <code style={{color: 'blue'}}>let</code> carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
                <br />
            </code>

        </div>

    </main>
  )
}

export default JavaScriptLet