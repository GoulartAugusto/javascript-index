import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptConst = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Const</h1>

        <br />

        <div  style={{ backgroundColor: '#cdffcc'}}>
            <ul>
                <li>The <code style={{color: 'blue'}}>const</code> keyword was introduced in ES6 (2015).</li>
                <li>Variables defined with <code style={{color: 'blue'}}>const</code> cannot be Redeclared.</li>
                <li>Variables defined with <code style={{color: 'blue'}}>const</code> cannot be Reassigned.</li>
                <li>Variables defined with <code style={{color: 'blue'}}>const</code> have Block Scope.</li>
            </ul>
        </div>

        <br />

        <h2>Cannot be Reassigned</h2>

        <p>A <code style={{color: 'blue'}}>const</code> variable cannot be reassigned:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'blue'}}>const</code> PI = <code style={{color: '#4d0000'}}>3.141592653589793</code>;
                    <br />
                    PI = <code style={{color: '#4d0000'}}>3.14</code>;
                    <code style={{color: 'green'}}>// This will give an error</code>
                    <br />
                    PI = PI + <code style={{color: '#4d0000'}}>10</code>;
                    <code style={{color: 'green'}}>// This will also give an error</code>
                </code>

        </div>

        <br />

        <h2>Must be Assigned</h2>

        <p>JavaScript <code style={{color: 'blue'}}>const</code> variables must be assigned a value when they are declared:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Correct</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> PI = <code style={{color: '#4d0000'}}>3.141592653589793</code>;
                <br />
            </code>

        </div>

        <br />

        <div  style={{ backgroundColor: '#ff000052'}}>

        <h3>Incorrect</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> PI;
                <br />
                PI = <code style={{color: '#4d0000'}}>3.141592653589793</code>;
            </code>

        </div>

        <br />

        <div style={{ backgroundColor: 'lightyellow'}}>
            <h2>When to use JavaScript const?</h2>
            <h5>Always declare a variable with <code style={{color: 'blue'}}>const</code> when you know that the value should not be changed.</h5>

            <p>Use <code style={{color: 'blue'}}>const</code> when you declare:</p>

            <ul>
                <li>A new Array</li>
                <li>A new Object</li>
                <li>A new Function</li>
                <li>A new RegExp</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Constant Objects and Arrays</h2>

        <p>The keyword <code style={{color: 'blue'}}>const</code> is a little misleading.</p>

        <p>It does not define a constant value. It defines a constant reference to a value.</p>

        <p>Because of this you can NOT:</p>

        <ul>
            <li>Reassign a constant value</li>
            <li>Reassign a constant array</li>
            <li>Reassign a constant object</li>
        </ul>

        <p>But you CAN:</p>

        <ul>
            <li>Change the elements of constant array</li>
            <li>Change the properties of constant object</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Constant Arrays</h2>

        <p>You can change the elements of a constant array:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'green'}}>// You can create a constant array:</code>
                    <br />
                    <code style={{color: 'blue'}}>const</code> cars = [<code style={{color: '#4d0000'}}>"Saab", "Volvo", "BMW"</code>];
                    <br />
                    <br />

                    <code style={{color: 'green'}}>// You can change an element:</code>
                    <br />
                    cars[0] = <code style={{color: '#4d0000'}}>"Toyota"</code>;
                    
                    <br />
                    <br />
                    
                    <code style={{color: 'green'}}>// You can add an element:</code>
                    <br />
                    cars.push(<code style={{color: '#4d0000'}}>"Audi"</code>);
                    <br />
                </code>

        </div>

        <p>But you can NOT reassign the array:</p>

        <br />

        <div  style={{ backgroundColor: '#ff000052'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> cars = [<code style={{color: '#4d0000'}}>"Saab", "Volvo", "BMW"</code>];

                <br />

                cars = [<code style={{color: '#4d0000'}}>"Toyota", "Volvo", "Audi"</code>]; 
                <code style={{color: 'green'}}>// Error</code>
                
            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Constant Objects</h2>

        <br />

        <p>You can change the properties of a constant object:</p>


        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'green'}}>// You can create a const object:</code>
                    <br />
                    <code style={{color: 'blue'}}>const</code> car = &#123;type:<code style={{color: '#4d0000'}}>"Fiat"</code>, model:<code style={{color: '#4d0000'}}>"500"</code>, color:<code style={{color: '#4d0000'}}>"white"</code>&#125;;
                    <br />
                    <br />

                    <code style={{color: 'green'}}>// You can change a property:</code>
                    <br />
                    car.color = <code style={{color: '#4d0000'}}>"red"</code>;
                    
                    <br />
                    <br />
                    
                    <code style={{color: 'green'}}>// You can add a property:</code>
                    <br />
                    car.owner(<code style={{color: '#4d0000'}}>"Johnson"</code>);
                    <br />
                </code>

        </div>

        <br />

        <p>But you can NOT reassign the object:</p>
        
        <br />

        <div  style={{ backgroundColor: '#ff000052'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> car = &#123;type:<code style={{color: '#4d0000'}}>"Fiat"</code>, model:<code style={{color: '#4d0000'}}>"500"</code>, color:<code style={{color: '#4d0000'}}>"white"</code>&#125;;
                <br />
                <br />

                car = &#123;type:<code style={{color: '#4d0000'}}>"Volvo"</code>, model:<code style={{color: '#4d0000'}}>"EX60"</code>, color:<code style={{color: '#4d0000'}}>"red"</code>&#125;; 
                <code style={{color: 'green'}}>// Error</code>

            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Browser Support</h2>

        <p>The <code style={{color: 'blue'}}>const</code> keyword is not fully supported in Internet Explorer.</p>

        <p>The Browsers Edge from 2015 and Firefox from 2015, Chrome and Opera from 2016 and Safari from 2017 have full suport for the <code style={{color: 'blue'}}>const</code> keyword. Before these dates they are not compatible.</p>

        <br />

        {/* Just a mark to separete sections */}


        <h2>Block Scope</h2>

        <br />

        <p>Declaring a variable with <code style={{color: 'blue'}}>const</code> is similar to <code style={{color: 'blue'}}>let</code> when it comes to Block Scope.</p>

        <p>The x declared in the block, in this example, is not the same as the x declared outside the block:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>10</code>;
                <br />
                <code style={{color: 'green'}}>// Here x is 10</code>
                <br />
                <br />
                &#123;
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <br />
                <code style={{color: 'green'}}>// Here x is 2</code>
                <br />
                &#125;
                <br />
                <br />
                <code style={{color: 'green'}}>// Here x is 10</code>

            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Redeclaring</h2>

        <p>Redeclaring a JavaScript <code style={{color: 'blue'}}>var</code> variable is allowed anywhere in a program:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />

                <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>3</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />

                x = <code style={{color: '#4d0000'}}>4</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />
            </code>
        </div>

        <p>Redeclaring an existing <code style={{color: 'blue'}}>var</code> or <code style={{color: 'blue'}}>let</code> variable to <code style={{color: 'blue'}}>const</code>, in the same scope, is not allowed:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />
                <br />

                &#123;
                <br />
                <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />
                &#125;

                <br />
                <br />

                &#123;
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />
                &#125;

            </code>
        </div>

        <br />

        <p>Reassigning an existing <code style={{color: 'blue'}}>const</code> variable, in the same scope, is not allowed:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />

                x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />
                <br />


                &#123;
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Allowed</code>
                <br />

                x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                <code style={{color: 'blue'}}>var</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>// Not allowed</code>
                <br />

                &#125;

            </code>
        </div>

        <br />

        <p>Redeclaring a variable with <code style={{color: 'blue'}}>const</code>, in another scope, or in another block, is allowed:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>2</code>;
                <code style={{color: 'green'}}>//Allowed</code>
                <br />
                <br />

                &#123;
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>3</code>;
                <code style={{color: 'green'}}>//Allowed</code>
                <br />
                &#125;

                <br />
                <br />

                &#123;
                <br />
                <code style={{color: 'blue'}}>const</code> x = <code style={{color: '#4d0000'}}>4</code>;
                <code style={{color: 'green'}}>//Allowed</code>
                <br />
                &#125;

            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Hoisting</h2>

        <p>Variables defined with <code style={{color: 'blue'}}>var</code> are <b>hoisted</b> to the top and can be initialized at any time.</p>

        <p>Meaning: You can use the variable before it is declared:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
        
            <h3>Example</h3>
            <p>This is OK:</p>

            <br />

            carName = <code style={{color: '#4d0000'}}>"Volvo"</code>
            <br />
            <code style={{color: 'blue'}}>var</code> carName;
            
        </div>

        <br />

        <p>Variables defined with <code style={{color: 'blue'}}>const</code> are also hoisted to the top, but not initialized.</p>

        <p>Meaning: Using a <code style={{color: 'blue'}}>const</code> variable before it is declared will result in a <code style={{color: '#4d0000'}}>ReferenceError:</code></p>

        <br />

        <div  style={{ backgroundColor: '#ff00003c'}}>

        <h3>Example</h3>
            
            <code>
                alert (carName);
                <br />
                <code style={{color: 'blue'}}>const</code> carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
                <br />
            </code>

        </div>


    </main>
  )
}

export default JavaScriptConst