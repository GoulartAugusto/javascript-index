import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptCommonMistakes = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Common Mistakes</h1>

        <p>This chapter points out some common JavaScript mistakes.</p>

        {/* Just a mark to separete sections */}

        <h2>Accidentally Using the Assignment Operator</h2>

        <p>JavaScript programs may generate unexpected results if a programmer accidentally uses an assignment operator (<code style={{color:"blue"}}>=</code>), insted of a comparison operator (<code style={{color:"blue"}}>==</code>0 in an if statement.)</p>

        <p>This <code style={{color:"blue"}}>if</code> statement returns <code style={{color:"blue"}}>false</code> (as expected), because x is not equal to 10:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0</code>;

                <br />

                <code style={{color:'blue'}}>if</code> (x == <code style={{color:'red'}}>10</code>);
            </code>
        </div>

        <br />

        <p>This <code style={{color:"blue"}}>if</code> statement returns <code style={{color:"blue"}}>true</code> (maybe not as expected), because 10 is true:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0</code>;

                <br />

                <code style={{color:'blue'}}>if</code> (x = <code style={{color:'red'}}>10</code>);
            </code>
        </div>

        <br />

        <p>This <code style={{color:"blue"}}>if</code> statement returns <code style={{color:"blue"}}>false</code> (maybe not as expected), because 0 is false:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0</code>;

                <br />

                <code style={{color:'blue'}}>if</code> (x = <code style={{color:'red'}}>0</code>);
            </code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>An assignment always returns the value of the assignment.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Expecting Loose Comparison</h2>

        <p>In regular comparison, data type does not matter. This <code style={{color:'blue'}}>if</code> statement returns true:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />
                
                <code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"10"</code>;

                <br />

                <code style={{color:'blue'}}>if</code> (x == y);
            </code>
        </div>

        <br />

        <p>In a stric comparison, data type does matter. This <code style={{color:'blue'}}>if</code> statement returns false.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />
                
                <code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"10"</code>;

                <br />

                <code style={{color:'blue'}}>if</code> (x === y);
            </code>
        </div>

        <br />

        <p>It is a common mistake to forget that <code style={{color:'blue'}}>switch</code> statements use strict comparison:</p>

        <p>The <code style={{color:'blue'}}>case switch</code> will display an alert:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />
                
                <code style={{color:'blue'}}>switch</code>(x) &#123;

                <br />
                
                <code style={{color:'blue'}}>case</code> <code style={{color:'red'}}>10</code>: alert(<code style={{color:'#5d0000'}}>"Hello"</code>);

                <br />

                &#125;
            </code>
        </div>

        <p>This <code style={{color:'blue'}}>case switch</code> will not display an alert:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />
                
                <code style={{color:'blue'}}>switch</code>(x) &#123;

                <br />
                
                <code style={{color:'blue'}}>case</code> <code style={{color:'#5d0000'}}>"10"</code>: alert(<code style={{color:'#5d0000'}}>"Hello"</code>);

                <br />

                &#125;
            </code>
        </div>

        <br />
        
        {/* Just a mark to separete sections */}

        <h2>Confusing Addition & Concatenation</h2>

        <p><b>Addition</b> is about adding <b>numbers.</b></p>

        <p><b>Concatenation</b> is about adding <b>strings.</b></p>

        <p>In JavaScript both operations use the same <code style={{color:'blue'}}>+</code> operator.</p>

        <p>Because of this, adding a number as a number will produce a different result from adding a number as a string:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />

                x = <code style={{color:'red'}}>10</code> + <code style={{color:'red'}}>5 </code> <code style={{color:'green'}}> // now x is 15</code>
                
                <br />
                <br />

                <code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>10</code>;
                <br />


                y += <code style={{color:'#5d0000'}}>"5"</code>; <code style={{color:'green'}}> // now y is "105"</code>
            </code>
        </div>

        <br />

        <p>When adding two variables, it can be difficult to anticipate the result:</p>  

        <br />      

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />

                <code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>5</code>;

                <br />
                
                <code style={{color:'blue'}}>let</code> z = x + y; <code style={{color:'green'}}> // now z is 15</code>

                <br />
                <br />

                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>10</code>;

                <br />

                <code style={{color:'blue'}}>let</code> y = <code style={{color:'#5d0000'}}>"5"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> z = x + y; <code style={{color:'green'}}> // now z is "105"</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Misunderstanding Floats</h2>

        <p>All numbers in JavaScript are stored as 64-bits <b>Floating points numbers</b> (Floats).</p>

        <p>All programming languages, including JavaScript, have difficulties with precise floating points values:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0.1</code>;

                <br />
                
                <code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>0.2</code>;
                
                <br />

                <code style={{color:'blue'}}>let</code> z = x + y; <code style={{color:'green'}}> // the result in z will not be 0.3</code>
            </code>

            <p>the result will be</p>

            <code>0.30000000000000004</code>
        </div>

        <br />

        <p>To solve the problem above, it helps to multiply and divide:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>0.1</code>;

                <br />
                
                <code style={{color:'blue'}}>let</code> y = <code style={{color:'red'}}>0.2</code>;
                
                <br />

                <code style={{color:'blue'}}>let</code> z = (x * <code style={{color:'red'}}>10</code> + y * <code style={{color:'red'}}>10</code>) / <code style={{color:'red'}}>10</code> <code style={{color:'green'}}> // now z will be 0.3</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Breaking a JavaScript String</h2>

        <p>JavaScript will allow you to break a statement into two lines:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example 1</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x =

                <br />

                <code style={{color:"#5d0000"}}>"Hello World!"</code>;
            </code>
        </div>

        <br />
        
        <p>But, breaking a statement in te middle of a string will not work:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example 2</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:"#5d0000"}}>"Hello</code>

                <br />

                <code style={{color:"#5d0000"}}>World!"</code>;
            </code>
        </div>

        <br />

        <p>You must use a "backlash" \ if you must break a statement in a string:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example 3</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:"#5d0000"}}>"Hello \</code>

                <br />

                <code style={{color:"#5d0000"}}>World!"</code>;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Misplacing Semicolon</h2>

        <p>Because of a misplaced semicolon, this code block will execute regardless of the value of x:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>if</code> (x == <code style={{color:'red'}}>19</code>);

                <br />

                &#123;

                <br />

                &nbsp;&nbsp; <code style={{color:'green'}}>// code block</code>
            
                <br />

                &#125;
            </code>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

        <h2>Breaking a Return Statement</h2>

        <p>It is a defualt JavaScript behavior to close a statement automatically at the end of a line.</p>

        <p>Because of this, these two examples will return the same result:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 1</h3>

            <code>
                <code style={{color:'blue'}}>function</code> myFunction(a) &#123;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>let</code> power = <code style={{color:'red'}}>10</code>

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>return</code> a * power

                <br />

                &#125;
            </code>

            <p>if myFunction(55)</p>

            <p>This example will return a correct result:</p>

            <code>550</code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 2</h3>

            <code>
                <code style={{color:'blue'}}>function</code> myFunction(a) &#123;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>let</code> power = <code style={{color:'red'}}>10</code>;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>return</code> a * power;

                <br />

                &#125;
            </code>

            <p>if myFunction(55)</p>

            <p>This example will return a correct result:</p>

            <code>550</code>
        </div>

        <br />

        <p>JavaScript will also allow you to break a statement into two lines.</p>

        <p>Because of this, example 3 will alson return the same result:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 3</h3>

            <code>
                <code style={{color:'blue'}}>function</code> myFunction(a) &#123;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>let</code>
                
                <br />
                
                power = <code style={{color:'red'}}>10</code>;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>return</code> a * power;

                <br />

                &#125;
            </code>

            <p>if myFunction(55)</p>

            <p>This example will return a correct result:</p>

            <code>550</code>
        </div>

        <br />

        <p>But, what will happen if you break the return statement in two lines like this:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 4</h3>

            <code>
                <code style={{color:'blue'}}>function</code> myFunction(a) &#123;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>let</code> 
                
                <br />

                &nbsp;&nbsp;power = <code style={{color:'red'}}>10</code>;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>return</code> 
                
                <br />

                &nbsp;&nbsp;a * power;

                <br />

                &#125;
            </code>

            <p>if myFunction(55)</p>

            <p>This example will return undefined:</p>

            <code>undefined</code>
        </div>

        <br />

        <p>The function will return <code style={{color:'red'}}>undefined</code>!</p>

        <br />

        <p>Why? Because JavaScript thought you meant:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 4</h3>

            <code>
                <code style={{color:'blue'}}>function</code> myFunction(a) &#123;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>let</code> 
                
                <br />

                &nbsp;&nbsp;power = <code style={{color:'red'}}>10</code>;

                <br />

                &nbsp;&nbsp;<code style={{color:'blue'}}>return</code>; 
                
                <br />

                &nbsp;&nbsp;a * power;

                <br />

                &#125;
            </code>

            <p>if myFunction(55)</p>

            <p>This example will return undefined:</p>

            <code>undefined</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Explanation</h2>

        <p>If a statement is incomplete like:</p>
        
        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'blue'}}>let</code>
        </div>

        <br />

        <p>JavaScript will try to complete the satement by reading the next line:</p>

        <br />

        <div style={{background:'#cecece'}}>
            power = <code style={{color:'red'}}>10</code>;
        </div>

        <br />

        <p>But since this statement is complete:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'blue'}}>return</code>
        </div>

        <br />

        <p>JavaScript will automatically close it like this:</p>

        <br />

        
        <div style={{background:'#cecece'}}>
            <code style={{color:'blue'}}>return</code>;
        </div>

        <br />

        <p>This happens because closing (ending) statements with semicolon is optional in JavaScript.</p>

        <p>JavaScript will close the return statement at the end of the line, because it is a complete statement.</p>

        <br />

        <div style={{background:'#ffdddd'}}>
            <br />

            <p>Never break a return statement.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Accessing Arrays with Named Indexes</h2>

        <p>Many programming languages suport arrays with named indexes.</p>

        <p>Array with named indexes are called associative arrays (or hashes).</p>

        <p>JavaScript does <b>not</b> support arrays with named indexes.</p>

        <p>In JavaScript, <b>arrays</b> use <b>numbered indexes</b>:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>
            
            <code>
                <code style={{color:"blue"}}>const</code> person = [];

                <br />

                person[<code style={{color:'red'}}>0</code>] = <code style={{color:"#5d0000"}}>"John"</code>;

                <br />

                person[<code style={{color:'red'}}>1</code>] = <code style={{color:"#5d0000"}}>"Doe"</code>;
                
                <br />

                person[<code style={{color:'red'}}>2</code>] = <code style={{color:"red"}}>46</code>;

                <br />

                person.length; <code style={{color:'green'}}> // person.length will return 3</code>

                <br />

                person[<code style={{color:'red'}}>0</code>]; <code style={{color:'green'}}> // person[0] will return "John"</code>
            </code>
        </div>

        <br />

        <p>In JavaScript, <b>objects</b> use <b>named indexes</b>.</p>

        <p>If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object.</p>

        <p>After the automatic redefinition, array methods and properties will produce undeifned or incorrect reuslts:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>
            
            <code>
                <code style={{color:"blue"}}>const</code> person = [];

                <br />

                person[<code style={{color:'#5d0000'}}>"firstName"</code>] = <code style={{color:"#5d0000"}}>"John"</code>;

                <br />

                person[<code style={{color:'#5d0000'}}>"lastName"</code>] = <code style={{color:"#5d0000"}}>"Doe"</code>;
                
                <br />

                person[<code style={{color:'#5d0000'}}>"age"</code>] = <code style={{color:"red"}}>46</code>;

                <br />

                person.length; <code style={{color:'green'}}> // person.length will return 0</code>

                <br />

                person[<code style={{color:'red'}}>0</code>]; <code style={{color:'green'}}> // person[0] will return undefined</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Ending Definitions witha Comma</h2>

        <p>Trailing commas in objects and arrays definition are legal in ECMAScript 5.</p>

        <br/>

        <div style={{background:"#cecece"}}>
            <h3>Object Example</h3>

            <code>
                person = &#123;firstName: <code style={{color:"#5d0000"}}>"John"</code>, lastName: <code style={{color:"#5d0000"}}>"Doe"</code>, age: <code style={{color:"red"}}>46</code>, &#125;
            </code>
        </div>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Array Example</h3>

            <code>
                poitns = [<code style={{color:"red"}}>40</code>, <code style={{color:"red"}}>100</code>, <code style={{color:"red"}}>1</code>, <code style={{color:"red"}}>5</code>, <code style={{color:"red"}}>25</code>, <code style={{color:"red"}}>10</code>,]
            </code>
        </div>


        <br />

        <div style={{background:"#ffdddd"}}>
            <br />

            <p>WARNING!</p>
            
            <p>Internet Explorer 8 will crash.</p>

            <p>JSON does not allow trailing commas.</p>

            <br />
        </div>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>JSON:</h3>

            <code>
                person = &#123;<code style={{color:"#5d0000"}}>"firstName"</code>:<code style={{color:"#5d0000"}}>"John"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>:<code style={{color:"#5d0000"}}>"Doe"</code>, <code style={{color:"#5d0000"}}>"age"</code>:<code style={{color:"red"}}>46</code> &#125;
            </code>
        </div>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>JSON</h3>

            <code>
                poitns = [<code style={{color:"red"}}>40</code>, <code style={{color:"red"}}>100</code>, <code style={{color:"red"}}>1</code>, <code style={{color:"red"}}>5</code>, <code style={{color:"red"}}>25</code>, <code style={{color:"red"}}>10</code>];
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Undefined is Not Null</h2>
        
        <p>JavaScript objects, variables, properties, and methods can be <code style={{color:'red'}}>undefined</code></p>

        <p>In addition, empty JavaScript objects can have the value <code style={{color:'red'}}>null</code></p>

        <p>This can make it a litle bit diffucult to test if an object is empty.</p>

        <p>You can test if an object exists by testing if the type is <code style={{color:'red'}}>undefined</code>:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>if</code> (<code style={{color:'blue'}}>typeof</code> myObj === <code style={{color:'#5d0000'}}>"undefined"</code>)
            </code>
        </div>

        <br />

        <p>But you cannot test if an object is <code style={{color:'red'}}>null</code>, because this will throw an error if the object is <code style={{color:'red'}}>undefined</code></p>
    
        <br />

        <div style={{background:"#cecece"}}>
            <h3>Incorrect</h3>

            <code>
                <code style={{color:'blue'}}>if</code> (myObj === <code style={{color:'blue'}}>null</code>)
            </code>
        </div>

        <p>To solve this problem, you must test if an object is not <code style={{color:'red'}}>null</code>, and not <code style={{color:'red'}}>undefined</code></p>

        <p>But this can still throw an error:</p>
    
        <br />

        <div style={{background:"#cecece"}}>
            <h3>Incorrect</h3>

            <code>
                <code style={{color:'blue'}}>if</code> (myObj !== <code style={{color:'blue'}}>null</code> && <code style={{color:'blue'}}>typeof</code> myObj !== <code style={{color:'#5d0000'}}>"undefined"</code>)
            </code>
        </div>

        <p>Because of this, you must test for not <code style={{color:'red'}}>undefined</code> before you can test for not <code style={{color:'red'}}>null</code>:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Correct</h3>

            <code>
                <code style={{color:'blue'}}>if</code> (myObj !== <code style={{color:'#5d0000'}}>"undefined"</code> && <code style={{color:'blue'}}>typeof</code> myObj !== <code style={{color:'blue'}}>null</code>)
            </code>
        </div>
    </main>
  )
}

export default JavaScriptCommonMistakes