import React from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

const JavaScriptVariables = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Variables</h1>

        <div  style={{ backgroundColor: '#cdffcc'}}>
            <h3>4 Ways to Declare a JavaScript Variable:</h3>

            <ul>
                <li>Using <code style={{color: 'blue'}}>var</code></li>
                <li>Using <code style={{color: 'blue'}}>let</code></li>
                <li>Using <code style={{color: 'blue'}}>const</code></li>
                <li>Using nothing</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>What are Variables?</h2>

        <p>Variables are containers for storing data (storing data values).</p>
        
        <p>In this example,<code style={{color: 'blue'}}>x</code>, <code style={{color: 'blue'}}>y</code>, and <code style={{color: 'blue'}}>z</code>, are variables, declared with the <code style={{color: 'blue'}}>var</code> keyword:</p>
        
        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'blue'}}>var</code> x = 5;
                    <br />
                    <code style={{color: 'blue'}}>var</code> y = 6;
                    <br />
                    <code style={{color: 'blue'}}>var</code> z = x + y;
                </code>

        </div>

        <br />

        <p>In this example,<code style={{color: 'blue'}}>x</code>, <code style={{color: 'blue'}}>y</code>, and <code style={{color: 'blue'}}>z</code>, are variables, declared with the <code style={{color: 'blue'}}>let</code> keyword:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>

            <code>
                <code style={{color: 'blue'}}>let</code> x = 5;
                <br />
                <code style={{color: 'blue'}}>let</code> y = 6;
                <br />
                <code style={{color: 'blue'}}>let</code> z = x + y;
            </code>

        </div>

        <br />

        <p>In this example,<code style={{color: 'blue'}}>x</code>, <code style={{color: 'blue'}}>y</code>, and <code style={{color: 'blue'}}>z</code>, are undeclared variables:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>

            <code>
                x = 5;
                <br />
                y = 6;
                <br />
                z = x + y;
            </code>

        </div>

        <br />

        <p>From all the examples above, you can guess:</p>

        <ul>
            <li>x stores the value 5</li>
            <li>y stores the value 6</li>
            <li>z stores the value 11</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

            <h2>When to Use JavaScript var?</h2>

            <p>Always declare JavaScript variables with <code style={{color: 'blue'}}>var, let,</code> or <code style={{color: 'blue'}}>const</code></p>

            <p>The <code style={{color: 'blue'}}>var</code> keyword is used in all JavaScript code from 1995 to 2015.</p>

            <p>The <code style={{color: 'blue'}}>let</code> and <code style={{color: 'blue'}}>const</code> keywords were added to JavaScript in 2015.</p>

            <p>If you want your code to run in older browsers, you must use <code style={{color: 'blue'}}>var</code>.</p>

        </div>



        <br />

        {/* Just a mark to separete sections */}

        <h2>When to Use JavaScript const?</h2>

        <p>If you want a general rule: always declare variables with <code style={{color: 'blue'}}>const</code>.</p>

        <p>If you think the value of the variable can change, use <code style={{color: 'blue'}}>let</code>.</p>

        <p>In this example, <code style={{color: '#4d0000'}}>price1</code>, <code style={{color: '#4d0000'}}>price2</code>, and <code style={{color: '#4d0000'}}>total</code>, are variables:</p>

        <br />


        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>

            <code>
                <code style={{color: 'blue'}}>const</code> price1 = 5;
                <br />
                <code style={{color: 'blue'}}>const</code> price2 = 6;
                <br />
                <code style={{color: 'blue'}}>let</code> total = price1 + price2;
            </code>

        </div>


        <br />

        <p>The two variables <code style={{color: '#4d0000'}}>price1</code> and <code style={{color: '#4d0000'}}>price2</code> are declared with the <code style={{color: '#4d0000'}}>const</code> keyword.</p>

        <p>These are constant values and cannot be changed.</p>

        <p>The variable <code style={{color: '#4d0000'}}>total</code> is declared with the let keyword.</p>

        <p>This is a value that can be changed.</p>


        <br />

        {/* Just a mark to separete sections */}

        <h2>When to Use JavaScript const?</h2>

        <p>Just like in algebra, variables hold values:</p>

        <div  style={{ backgroundColor: 'lightgray'}}>
            <code>
                <code style={{color: 'blue'}}>let</code> x = 5;
                <br />
                <code style={{color: 'blue'}}>let</code> y = 6;
            </code>
        </div>

        <p>Just like in algebra, variables are used in expressions:</p>

        <div  style={{ backgroundColor: 'lightgray'}}>
            <code>
                <code style={{color: 'blue'}}>let</code> z = x + y;
            </code>
        </div>

        <p>From the example above, you can guess that the total is calculated to be 11.</p>

        <br />

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

            <h2>Note</h2>

            <p>Variables are containers for storing values.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>JavaScript Identifiers</h2>

        <p>All JavaScript <b>variables</b> must be <b>identified</b> with <b>unique names</b>.</p>

        <p>These unique names are called <b>identifiers</b>.</p>

        <p>Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).</p>

        <p>The general rules for constructing names for variables (unique identifiers) are:</p>

        <ul>
            <li>Names can contain letters, digits, underscores, and dollar signs.</li>
            <li>Names must begin with a letter.</li>
            <li>Names can also begin with $ and _ (but we will not use it in this tutorial).</li>
            <li>Names are case sensitive (y and Y are different variables).</li>
            <li>Reserved words (like JavaScript keywords) cannot be used as names.</li>
        </ul>

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

        <h2>Note</h2>

        <p>JavaScript identifiers are case-sensitive.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>The Assignment Operator</h2>

        <p>In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.</p>

        <p>This is different from algebra. The following does not make sense in algebra:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
            <code>
                <code style={{color: 'blue'}}>x</code> = x + 5;
            </code>
        </div>

        <br />

        <p>In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.</p>

        <p>(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)</p>

        <br />

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

            <h2>Note</h2>

            <p>The "equal to" operator is written like == in JavaScript.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Data Types</h2>

        <p>JavaScript variables can hold numbers like 100 and text values like "John Doe".</p>

        <p>In programming, text values are called text strings.</p>

        <p>JavaScript can handle many types of data, but for now, just think of numbers and strings.</p>

        <p>Strings are written inside double or single quotes. Numbers are written without quotes.</p>

        <p>If you put a number in quotes, it will be treated as a text string.</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>const</code> pi = 3.14;
                <br />
                <code style={{color: 'blue'}}>let</code> person = "John Doe";
                <br />
                <code style={{color: 'blue'}}>let</code> answer = 'Yes I'am!';
            </code>

        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Data Types</h2>

        <p>Creating a variable in JavaScript is called "declaring" a variable.</p>

        <p>You declare a JavaScript variable with the <code style={{color: 'blue'}}>var</code> or the <code style={{color: 'blue'}}>let</code> keyword:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
            
            <code>
                <code style={{color: 'blue'}}>var</code> carName;
                <br />
                <p>or:</p>
                <code style={{color: 'blue'}}>let</code> carName;
            </code>

        </div>

        <br />

        <p>After the declaration, the variable has no value (technically it is <b>undefined</b>).</p>
        <p>To <b>assign</b> a value to the variable, use the equal sign:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
            
            <code>
                carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
            </code>

        </div>

        <br />

        <p>You can also assign a value to the variable when you declare it:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
            
            <code>
                <code style={{color: 'blue'}}>let</code> carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
            </code>

        </div>

        <br />

        <p>In the example below, we create a variable called <code style={{color: '#4d0000'}}>carName</code> and assign the value "Volvo" to it.</p>

        <p>Then we "output" the value inside an HTML paragraph with id="demo":</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
            
            <code>
            &#x3C;p id=&#x22;demo&#x22;&#x3E;&#x3C;/p&#x3E;
            <br />
            <br />
            &#x3C;script&#x3E;
            <br />
            let carName = &#x22;Volvo&#x22;;
            <br />
            document.getElementById(&#x22;demo&#x22;).innerHTML = carName;
            <br />
            &#x3C;/script&#x3E;
            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

            <h2>Note</h2>

            <p>It's a good programming practice to declare all variables at the beginning of a script.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>One Statement, Many Variables</h2>

        <p>You can declare many variables in one statement.</p>

        <p>Start the statement with <code style={{color: 'blue'}}>let</code> and separate the variables by <b>comma</b>:</p>

        
        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>let</code> person = <code style={{color: '#4d0000'}}>"John Doe"</code>, carName = <code style={{color: '#4d0000'}}>"Volvo"</code>, price = <code style={{color: 'green'}}>200</code>;
            </code>

        </div>

        <br />

        <p>A declaration can span multiple lines:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>let</code> person = <code style={{color: '#4d0000'}}>"John Doe"</code>

                <br />
                
                carName = <code style={{color: '#4d0000'}}>"Volvo"</code> 
                
                <br />
                
                price = <code style={{color: 'green'}}>200</code>;
            </code>

        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>One Statement, Many Variables</h2>

        <p>In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.</p>

        <p>A variable declared without a value will have the value <code style={{color: '#5d0000'}}>undefined</code>.</p>

        <p>The variable carName will have the value <code style={{color: '#5d0000'}}>undefined</code> after the execution of this statement:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>
            <h3>Example</h3>          
                <code>
                    <code style={{color: 'blue'}}>let</code> carName;
                </code>
        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>Re-Declaring JavaScript Variables</h2>

        <p>If you re-declare a JavaScript variable declared with <code style={{color: 'blue'}}>var</code>, it will not lose its value.</p>

        <p>The variable <code style={{color: 'blue'}}>carName</code> will still have the value "Volvo" after the execution of these statements:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>var</code> carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
                <br />
                <code style={{color: 'blue'}}>var</code> carName;
            </code>

        </div>

        <br />

        <br />

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

            <h2>Note</h2>

            <p>You cannot re-declare a variable declared with <code style={{color: 'blue'}}>let</code> or <code style={{color: 'blue'}}>const</code>.</p>

            <p>This will not work:</p>

                <div  style={{ backgroundColor: 'lightgray'}}>
                    <code>
                        <code style={{color: 'blue'}}>let</code> carName = <code style={{color: '#4d0000'}}>"Volvo"</code>;
                        <br />
                        <code style={{color: 'blue'}}>let</code> carName;
                    </code>

                </div>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Arithmetic</h2>

        <p>As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>5</code> + <code style={{color: '#4d0000'}}>2</code> + <code style={{color: '#4d0000'}}>3</code>;

            </code>

        </div>

        <br />

        <p>You can also add strings, but strings will be concatenated:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>"John"</code> + <code style={{color: '#4d0000'}}>" "</code> + <code style={{color: '#4d0000'}}>"Doe"</code>;

            </code>

        </div>

        <br />

        <p>Also try this:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

        <h3>Example</h3>
            
            <code>
                <code style={{color: 'blue'}}>let</code> x = <code style={{color: '#4d0000'}}>"5"</code> + <code style={{color: '#4d0000'}}>2</code> + <code style={{color: '#4d0000'}}>3</code>;

            </code>

        </div>

        {/* Just a mark to separete sections */}

        <div style={{ backgroundColor: 'lightyellow'}}>

            <h2>Note</h2>

            <p>If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <br />

        <h2>JavaScript Dollar Sign $</h2>

        <p>Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'blue'}}>let</code> $ = <code style={{color: '#4d0000'}}>"Hello World!"</code>;
                    <br />
                    <code style={{color: 'blue'}}>let</code> $$$ = 2;
                    <br />
                    <code style={{color: 'blue'}}>let</code> $myMoney = <code style={{color: 'green'}}> 520000000</code>;
                </code>

        </div>

        <br />

        <p>Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.</p>

        <p>In the JavaScript library jQuery, for instance, the main function <code style={{color: 'green'}}>$</code> is used to select HTML elements. In jQuery <code style={{color: 'blue'}}>$("p");</code> means "select all p elements".</p>


        <br />

        {/* Just a mark to separete sections */}

        <br />

        <h2>JavaScript Underscore (_)</h2>

        <p>Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:</p>

        <br />

        <div  style={{ backgroundColor: 'lightgray'}}>

            <h3>Example</h3>
                
                <code>
                    <code style={{color: 'blue'}}>let</code> _lastName = <code style={{color: '#4d0000'}}>"Johnson"</code>;
                    <br />
                    <code style={{color: 'blue'}}>let</code> _x = 2;
                    <br />
                    <code style={{color: 'blue'}}>let</code> _100 = 5;
                </code>

        </div>

        <br />

        <p>Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.</p>

    </main>
  )
}

export default JavaScriptVariables