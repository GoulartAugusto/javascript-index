import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptBestPractices = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Style Guide</h1>

        <p>Avoid global variables, avoid <code style={{color:'blue'}}>new</code>, avoid <code style={{color:'blue'}}>==</code>, avoid <code style={{color:'blue'}}>eval()</code></p>

        {/* Just a mark to separete sections */}

        <h2>Avoid Global Variables</h2>

        <p>Minimize the use of global variables.</p>

        <p>This includes all data types, objects, and functions.</p>

        <p>Global variables and functions can be overwritten by other scripts.</p>

        <p>Use local variables instead.</p>

        {/* Just a mark to separete sections */}

        <h2>Always Declare Local Variables</h2>

        <p>All variables used in a function should be declared as <b>local</b> variables.</p>

        <p>Local variables <b>must</b> be declared with the <code style={{color:'blue'}}>var</code>, the <code style={{color:'blue'}}>let</code>, or the <code style={{color:'blue'}}>const</code> keyword, otherwise they will become global variables.</p>

        <div style={{background:"lightyellow"}}>
            <br />

            <p>Strict mode does not allow undeclared variables.</p>
            
            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>Declarations on Top</h2>

        <p>It is good coding practice to put all declarations at the top of each script or function.</p>

        <p>This will:</p>

        <ul>
            <li>Give cleaner code</li>
            <li>Provide a single place to look for local variables</li>
            <li>Make it easier to avoid unwanted (implied) global variables</li>
            <li>Reduce the possibility of unwanted re-declarations</li>
        </ul>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:'green'}}>// Declare at the beginning</code>

                <br />

                <code style={{color:"blue"}}>let</code> firstName, lastName, price, discount, fullPrice;

                <br />
                <br />

                <code style={{color:'green'}}>// Use later</code>

                <br />

                firstName = <code style={{color:"#5d0000"}}>"John"</code>;

                <br />

                lastName = <code style={{color:"#5d0000"}}>"Doe"</code>;

                <br />
                <br />

                price = <code style={{color:'red'}}>19.90</code>;

                <br />

                discount = <code style={{color:'red'}}>0.10</code>;
                
                <br />
                <br />

                fullPrice = price - discount;

            </code>
        </div>

        <br />

        <p>This also for loop variables:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; <code style={{color:'red'}}>5</code>; i ++) &#123; 
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Initialize Variables</h2>

        <p>It is a good coding practice to initialize variables when you declare them.</p>

        <p>This will:</p>

        <ul>
            <li>Give cleaner code</li>
            <li>Provide a sigle place to initialize variables</li>
            <li>Avoid undefined values</li>
        </ul>

        <br />

        <div style={{background:"#cecece"}}>
            <code>
                <code style={{color:'green'}}>// Declare and initiate at the beginning</code>

                <br />


                <br />

                <code style={{color:"blue"}}>let</code> firstName = <code style={{color:"#5d0000"}}>""</code>;

                <br />

                <code style={{color:"blue"}}>let</code> lastName = <code style={{color:"#5d0000"}}>""</code>;

                <br />

                <code style={{color:"blue"}}>let</code> price = <code style={{color:'red'}}>0</code>;

                <br />

                <code style={{color:"blue"}}>let</code> discount = <code style={{color:'red'}}>0</code>;
                
                <br />

                <code style={{color:"blue"}}>let</code> fullPrice = <code style={{color:'red'}}>0</code>;

                <br />

                <code style={{color:"blue"}}>let</code> myArray = [];

                <br />

                <code style={{color:"blue"}}>let</code> myObject = &#123;&#125;;
            </code>
        </div>

        <br />

        <div style={{background:"lightyellow"}}>
            <br />

            <p>Initializing variables provides an idea of the intended use (and intended data type).</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Declare Objects with <b>const</b></h2>

        <p>Declaring objects with const will prevent any accidental change of type:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>let</code> car = &#123;type:<code style={{color:"#5d0000"}}>"Fiat"</code>, model:<code style={{color:"#5d0000"}}>"500"</code>, color:<code style={{color:"#5d0000"}}>"white"</code>,&#125;;

                <br />

                car = <code style={{color:"#5d0000"}}>"Fiat"</code> <code style={{color:"green"}}> // Changes object to string</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:"blue"}}>const</code> car = &#123;type:<code style={{color:"#5d0000"}}>"Fiat"</code>, model:<code style={{color:"#5d0000"}}>"500"</code>, color:<code style={{color:"#5d0000"}}>"white"</code>,&#125;;

                <br />

                car = <code style={{color:"#5d0000"}}>"Fiat"</code> <code style={{color:"green"}}> // Not possible</code>               
            </code>
        </div>

        {/* Just a mark to separete sections */}

        <h2>Declare Arrays with <b>const</b></h2>

        <p>Declaring arrays with const will prevent any accidental change of type:</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>let</code> cars = [<code style={{color:"#5d0000"}}>"Saab"</code>, <code style={{color:"#5d0000"}}>"Volvo"</code>, <code style={{color:"#5d0000"}}>"BMW"</code>];

                <br />

                cars = <code style={{color:"red"}}>3</code> <code style={{color:"green"}}> // Changes array to number</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:"blue"}}>let</code> cars = [<code style={{color:"#5d0000"}}>"Saab"</code>, <code style={{color:"#5d0000"}}>"Volvo"</code>, <code style={{color:"#5d0000"}}>"BMW"</code>];

                <br />

                cars = <code style={{color:"red"}}>3</code> <code style={{color:"green"}}> // Not possible</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Don't Use new Object()</h2>

        <ul>
            <li>Use <code style={{color:'blue'}}>""</code> instead of <code style={{color:'blue'}}>new String()</code></li>
            <li>Use <code style={{color:'blue'}}>0</code> instead of <code style={{color:'blue'}}>new Number()</code></li>
            <li>Use <code style={{color:'blue'}}>false</code> instead of <code style={{color:'blue'}}>new Boolean()</code></li>
            <li>Use <code style={{color:'blue'}}>&#123;&#125;</code> instead of <code style={{color:'blue'}}>new Object()</code></li>
            <li>Use <code style={{color:'blue'}}>[]</code> instead of <code style={{color:'blue'}}>new Array()</code></li>
            <li>Use <code style={{color:'blue'}}>/()/</code> instead of <code style={{color:'blue'}}>new RegExp()</code></li>
            <li>Use <code style={{color:'blue'}}>function ()&#123;&#125;</code> instead of <code style={{color:'blue'}}>new Function()</code></li>
        </ul>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x1 = <code style={{color:'#5d0000'}}>""</code>; <code style={{color:'green'}}> // new primitive string</code>
                
                <br />
                
                <code style={{color:'blue'}}>let</code> x2 = <code style={{color:'red'}}>0</code>; <code style={{color:'green'}}> // new primitive number</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x3 = <code style={{color:'blue'}}>false</code>; <code style={{color:'green'}}> // new primitive boolean</code>

                <br />

                <code style={{color:'blue'}}>let</code> x4 = &#123;&#125;; <code style={{color:'green'}}> // new object</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x5 = []; <code style={{color:'green'}}> // new array object</code>
                
                <br />
                
                <code style={{color:'blue'}}>let</code> x6 = <code style={{color:'red'}}>/()/</code>; <code style={{color:'green'}}> // new regexp object</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x7 = <code style={{color:'blue'}}>function</code>() &#123;&#125;; <code style={{color:'green'}}> // new function object</code>
            </code>
        </div>

        {/* Just a mark to separete sections */}

        <h2>Beware of Automatic Type Conversions</h2>

        <p>JavaScript is loosely typed.</p>

        <p>A variable can contain all data types.</p>

        <p>A varialbe can change its data type.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>let</code> x = <code style={{color:"#5d0000"}}>"Hello"</code>; <code style={{color:"green"}}> // typeof x is a string</code>

                <br />

                x = <code style={{color:"red"}}>5</code>; <code style={{color:"green"}}> // changes typeof x to a number</code>
            </code>
        </div>

        <br />

        <p>Beware that numbers can accidentally be converted to strings or <code style={{color:"blue"}}>NaN</code> (Not a Number).</p>

        <p>When doing mathematical operations, JavaScript can convert numbers to strings:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> + <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}> // x.valueOf() is 12,  typeof x is a number</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> + <code style={{color:'#5d0000'}}>"7"</code>; <code style={{color:'green'}}> // x.valueOf() is 57,  typeof x is a string</code>
                
                <br />
                
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"5"</code> + <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}> // x.valueOf() is 57,  typeof x is a string</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> - <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}> // x.valueOf() is -2,  typeof x is a number</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> - <code style={{color:'#5d0000'}}>"7"</code>; <code style={{color:'green'}}> // x.valueOf() is -2,  typeof x is a number</code>
                
                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"5"</code> - <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}> // x.valueOf() is -2,  typeof x is a number</code>

                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> - <code style={{color:'#5d0000'}}>"x"</code>; <code style={{color:'green'}}> // x.valueOf() is NaN,  typeof x is a number</code>
            </code>
        </div>

        <br />

        <p>Substracting a string from string, does not generate an error but returns NaN (Not a Number):</p>

        <br />
        
        <div style={{background:"#cecece"}}>
            <h3>Example</h3>
            
            <code>
                <code style={{color:'#5d0000'}}>"Hello"</code> - <code style={{color:'#5d0000'}}>"Dolly"</code> <code style={{color:'gree'}}> // return NaN</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Use === Comparison</h2>

        <p>The <code style={{color:'red'}}>==</code> comparison operator always converts (to matching types) before comparison.</p>

        <p>The <code style={{color:'red'}}>===</code> operator forces comparison of values and type:</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'red'}}>0</code> == <code style={{color:'#5d0000'}}>""</code>; <code style={{color:'green'}}> // true</code>
               
                <br />
               
                <code style={{color:'red'}}>1</code> == <code style={{color:'#5d0000'}}>"1"</code>; <code style={{color:'green'}}> // true</code>
                
                <br />
                
                <code style={{color:'red'}}>1</code> == <code style={{color:'blue'}}>true</code>; <code style={{color:'green'}}> // true</code>

                <br />
                <br />

                <code style={{color:'red'}}>0</code> === <code style={{color:'#5d0000'}}>""</code>; <code style={{color:'green'}}> // false</code>

                <br />

                <code style={{color:'red'}}>1</code> === <code style={{color:'#5d0000'}}>"1"</code>; <code style={{color:'green'}}> // false</code>

                <br />

                <code style={{color:'red'}}>1</code> === <code style={{color:'blue'}}>true</code>; <code style={{color:'green'}}> // false</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Use Parameter Defaults</h2>

        <p>If a function is called with a misssing argument, the value of the missing argument is set to <code style={{color:'red'}}>undefined</code>.</p>

        <p>Undefined values can break your code. It is a good habit to assign default values to arguments.</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>function</code> myFunction(x, y) &#123;

                <br />

                <code style={{color:'blue'}}>if</code> (y === undefined) &#123;

                <br />

                y = <code style={{color:'red'}}>0</code>;

                <br />

                &#125;

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>End Your Switches with Defaults</h2>

        <p>Always end your <code style={{color:"blue"}}>switch</code> statements with a <code style={{color:"blue"}}>default</code>. Even if you think there is no need for it.</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>switch</code> (<code style={{color:'blue'}}>new</code> Date().getDay()) &#123;

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>0</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Sunday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>1</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Monday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>2</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Tuesday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>3</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Wednesday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>4</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Thursday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>5</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Friday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>6</code>:

                <br />

                day = <code style={{color:'#5d0000'}}>"Saturday"</code>;

                <br />

                <code style={{color:'blue'}}>break</code>

                <br />

                <code style={{color:'blue'}}>default</code>:

                day = <code style={{color:'#5d0000'}}>"Unknown"</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Avoid Number, String, and Boolean as Objects</h2>

        <p>Always treat numbers, strings, or booleans as primitive values. Not as objects.</p>

        <p>Declaring these types as objects, slows down execution speed, and produces nasty side effects:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"John"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> String(<code style={{color:'#5d0000'}}>"John"</code>);

                <br />

                (x === y) <code style={{color:'green'}}> // is false because x is a string and y is an object</code>
            </code>
        </div>

        <br />

        <p>Or even worse:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>new</code> String(<code style={{color:'#5d0000'}}>"John"</code>);

                <br />

                <code style={{color:'blue'}}>let</code> y = <code style={{color:'blue'}}>new</code> String(<code style={{color:'#5d0000'}}>"John"</code>);

                <br />

                (x == y) <code style={{color:'green'}}> // is false because you cannot compare objects.</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Avoid Using eval()</h2>

        <p>The <code style={{color:'blue'}}>eval()</code> function is used to run text as code. In almost all cases, it should not be necessary to use it.</p>

        <p>Because it allows arbitrary code to be run, it also represents a security problem.</p>
    </main>
  )
}

export default JavaScriptBestPractices