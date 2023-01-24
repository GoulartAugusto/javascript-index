import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptFunctions = () => {
    function myFunction(p1, p2) {
        return p1 * p2;
      }
      console.log(myFunction(12, 26500));

    function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    }
    console.log(toCelsius(96));

  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Functions</h1>

        <p>A JavaScript function is a block of code designed to perform a particular task.</p>

        <p>A JavaScript function is executed when "something" invokes it (calls it).</p>

        <div style={{backgroundColor: 'lightyellow'}}>
            <h4>All the example of functions on this page are on the console.log()</h4>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code>
                <code style={{color:'green'}}>// Function to compute the product of p1 and p2</code>
                <br />
                <code><code style={{color:'blue'}}>function</code> myFunction(p1, p2) &#123;</code>
                <br />
                <code><code style={{color:'blue'}}>return</code> p1 * p2;</code>
                <br />
                &#125;
            </code>
        </div>

    {/* Just a mark to separete sections */}

    <h2>JavaScript Function Syntax</h2>

    <p>A JavaScript function is defined with the <code style={{color:'blue'}}>function</code> keyword, followed by a <b>name</b>, followed by parentheses ().</p>

    <p>Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).</p>
    
    <p>The parentheses may include parameter names separated by commas: <b>(parameter1, parameter2, ...)</b></p>

    <p>The code to be executed, by the function, is placed inside curly brackets: &#123; &#125;</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
        <code>
            <code><code style={{color:'blue'}}>function</code> name(parameter1, parameter2, parameter3) &#123;</code>
            <br />
            <code style={{color:'green'}}> // code to be executed</code>
            <br />
            &#125;
        </code>
    </div>

    <br />

    <p>Function <b>parameters</b> are listed inside the parentheses () in the function definition.</p>

    <p>Function <b>arguments</b> are the <b>values</b> received by the function when it is invoked.</p>

    <p>Inside the function, the arguments (the parameters) behave as local variables.</p>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Function Invocation</h2>

    <p>The code inside the function will execute when "something" invokes (calls) the function:</p>

    <ul>
        <li>When an event occurs (when a user clicks a button)</li>
        <li>When it is invoked (called) from JavaScript code</li>
        <li>Automatically (self invoked)</li>
    </ul>

    <p>You will learn a lot more about function invocation later in this tutorial.</p>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Function Return</h2>

    <p>When JavaScript reaches a <code style={{color: 'blue'}}>return</code> statement, the function will stop executing.</p>

    <p>If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.</p>

    <p>Functions often compute a <b>return value</b>. The return value is "returned" back to the "caller":</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
        <h3>Example</h3>
        <p>Calculate the product of two numbers, and return the result:</p>
        <code>
            <code><code style={{color:'blue'}}>let</code> x = myFunction(3, 4);</code> <code style={{color:'green'}}>// Function is called, return value will end up in x</code>
            <br />
            <br />
            <code><code style={{color:'blue'}}>function</code> myFunction(a, b) &#123;</code>
            <br />
            <code><code style={{color:'blue'}}>return</code> a * b;</code> <code style={{color:'green'}}>// Function returns the product of a and b</code>
            <br />
            &#125;
        </code>

        <br />

        <p>The result in x will be:</p>

        <code>12</code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Why Functions?</h2>

    <p>You can reuse code: Define the code once, and use it many times.</p>

    <p>You can use the same code many times with different arguments, to produce different results.</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
        <code>
            <code><code style={{color:'blue'}}>function</code> toCelsius(fahrenheit) &#123;</code>
            <br />
            <code><code style={{color:'blue'}}>return</code> (<code style={{color:'red'}}>5</code>/<code style={{color:'red'}}>9</code>) * (fahrenheit-<code style={{color:'red'}}>32</code>);</code>
            <br />
            &#125;
            <br />
            <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = toCelsius(<code style={{color:'red'}}>77</code>);</code>
        </code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>The () Operator Invokes the Function</h2>

    <p>Using the example above, <code style={{color: 'red'}}>toCelsius</code> refers to the function object, and <code style={{color: 'red'}}>toCelsius()</code> refers to the function result.</p>

    <p>Accessing a function without () will return the function object instead of the function result.</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
        <code>
            <code><code style={{color:'blue'}}>function</code> toCelsius(fahrenheit) &#123;</code>
            <br />
            <code><code style={{color:'blue'}}>return</code> (<code style={{color:'red'}}>5</code>/<code style={{color:'red'}}>9</code>) * (fahrenheit-<code style={{color:'red'}}>32</code>);</code>
            <br />
            &#125;
            <br />
            <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = toCelsius;</code>
        </code>
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Functions Used as Variable Values</h2>

    <p>Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
        <code>
            <code><code style={{color:'blue'}}>let</code> x = toCelsius(<code style={{color:'red'}}>96</code>);</code>
            <br />
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The temperature is "</code> + x + <code style={{color:'#5d0000'}}>"Celsius"</code>;</code>
        </code>

        <br />

        <p>You can use the function directly, as a variable value:</p>

        <code>
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The temperature is "</code> + toCelsius(<code style={{color:'red'}}>96</code>) + <code style={{color:'#5d0000'}}>"Celsius"</code>;</code>
        </code>
    </div>
    
    <br />

    {/* Just a mark to separete sections */}

    <h2>Local Variables</h2>

    <p>Variables declared within a JavaScript function, become <b>LOCAL</b> to the function.</p>

    <p>Local variables can only be accessed from within the function.</p>

    <br />

    <div style={{backgroundColor: '#cecece'}}>
        <code>
            <code style={{color:'green'}}>// code here can NOT use carName</code>
            <br />
            <br />
            <code><code style={{color:'blue'}}>function</code> myFunction() &#123;</code>
            <br />
            <code style={{color:'blue'}}>let</code> carName = <code style={{color:'#5d0000'}}>"Volvo"</code>
            <br />
            <code style={{color:'green'}}>// code here CAN use carName</code>
            <br />
            &#125;
            <br />
            <br />
            <code style={{color:'green'}}>// code here can NOT use carName</code>
        </code>
    </div>

    <br />

    <p>Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.</p>

    <p>Local variables are created when a function starts, and deleted when the function is completed.</p>

    </main>
  )
}

export default JavaScriptFunctions