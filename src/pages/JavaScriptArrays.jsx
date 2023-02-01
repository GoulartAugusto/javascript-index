import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptArrays = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h2>JavaScript Arrays</h2>

        <div style={{backgroundColor:'#cceecc'}}>
            <br />
            <p>An array is a special variable, which can hold more than one value:</p>

            <br />

            <code><code style={{color:"blue"}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];</code>

            <br />

            <p>Saab,Volvo,BMW</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Why Use Arrays?</h2>

        <p>If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</p>

        <br />

        <ul>
            <li><code><code style={{color:'blue'}}>let</code> car1 = <code style={{color:'#5d0000'}}>"Saab"</code>;</code></li>
            <li><code><code style={{color:'blue'}}>let</code> car2 = <code style={{color:'#5d0000'}}>"Volvo"</code>;</code></li>
            <li><code><code style={{color:'blue'}}>let</code> car3 = <code style={{color:'#5d0000'}}>"BMW"</code>;</code></li>
        </ul>

        <br />

        <p>However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?</p>

        <p>The solution is an array!</p>

        <p>An array can hold many values under a single name, and you can access the values by referring to an index number.</p>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Creating an Array</h2>

        <p>Using an array literal is the easiest way to create a JavaScript Array.</p>

        <p>Syntax:</p>

        <div style={{backgroundColor:'#cecece'}}>
            <code><code style={{color:'blue'}}>const</code> array_name = [item1, item1, ...];</code>
        </div>

        <br />

        <div style={{backgroundColor:"lightyellow"}}>
            <br />
            <p>It is a common practice to declare arrays with the <code style={{color:'blue'}}>const</code> keyword.</p>
            <br />
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code><code style={{color:"blue"}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];</code>

            <br />

            <p>Saab,Volvo,BMW</p>
        </div>

        <br />

        <p>Spaces and line breaks are not important. A declaration can span multiple lines:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code><code style={{color:"blue"}}>const</code> cars = [
            <br />
            <code style={{color:'#5d0000'}}>"Saab"</code>, 
            <br />
            <code style={{color:'#5d0000'}}>"Volvo"</code>, 
            <br />
            <code style={{color:'#5d0000'}}>"BMW"</code>
            <br />
            ];</code>

            <br />

            <p>Saab,Volvo,BMW</p>
        </div>

        <br />

        <p>You can also create an array, and then provide the elements:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>

            <code style={{color:"blue"}}>const</code> cars = [];
            <br />
            <code>cars[<code style={{color:'red'}}>0</code>] = <code style={{color:'#5d0000'}}>"Saab"</code>;</code> 
            <br />
            <code>cars[<code style={{color:'red'}}>1</code>] = <code style={{color:'#5d0000'}}>"Volvo"</code>;</code> 
            <br />
            <code>cars[<code style={{color:'red'}}>2</code>] = <code style={{color:'#5d0000'}}>"BMW"</code>;</code> 

            </code>

            <br />

            <p>Saab,Volvo,BMW</p>
        </div>
        
        <br />

      {/* Just a mark to separete sections */}

        <h2>Using the JavaScript Keyword new</h2>

        <p>The following example also creates an Array, and assigns values to it:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code><code style={{color:"blue"}}>const</code> cars = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>);</code>

            <br />

            <p>Saab,Volvo,BMW</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <p>The two examples above do exactly the same.</p>

            <p>There is no need to use <code style={{color:'blue'}}>new Array()</code>.</p>

            <p>For simplicity, readability and execution speed, use the array literal method.</p>
            <br />
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Accessing Array Elements</h2>

        <p>You access an array element by referring to the <b>index number</b>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> cars =  [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />

            <code>
                <code style={{color:"blue"}}>let</code> car =  cars[<code style={{color:'red'}}>0</code>];
            </code>

            <br />

            <p>JavaScript array elements are accessed using numeric indexes (starting from 0).</p>

            <p>Saab</p>
        </div>

        <br />

        <div style={{backgroundColor:"lightyellow"}}>
            <br />
            <p><b>Note</b>: Array indexes start with 0.</p>

            <p>[0] is the first element. [1] is the second element.</p>
            <br />
        </div>

      {/* Just a mark to separete sections */}

        <h2>Changing an Array Element</h2>

        <p>This statement changes the value of the first element in <code style={{color:'red'}}>cars</code>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <br />

            <code>cars[<code style={{color:'red'}}>0</code>] = <code style={{color:'#5d0000'}}>"Opel"</code>;</code>

            <br />
            <br />
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> cars =  [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />

            <code>
                <code style={{color:"blue"}}>let</code> cars[<code style={{color:'red'}}>0</code>] = <code style={{color:'#5d0000'}}>"Opel"</code>;
            </code>

            <br />

            <p>JavaScript array elements are accessed using numeric indexes (starting from 0).</p>

            <p>Opel,Volvo,BMW</p>
        </div>

      {/* Just a mark to separete sections */}

        <h2>Access the Full Array</h2>

        <p>With JavaScript, the full array can be accessed by referring to the array name:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> cars =  [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />

            <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = cars;</code>

            <br />

            <p>Opel,Volvo,BMW</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Arrays are Objects</h2>

        <p>Arrays are a special type of objects. The <code style={{color:'red'}}>typeof</code> operator in JavaScript returns "object" for arrays.</p>

        <p>But, JavaScript arrays are best described as arrays.</p>

        <p>Arrays use <b>numbers</b> to access its "elements". In this example, <code style={{color:'red'}}>person[0]</code> returns John:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Array:</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> person =  [<code style={{color:'#5d0000'}}>"John"</code>, <code style={{color:'#5d0000'}}>"Doe"</code>, <code style={{color:'red'}}>46</code>];
            </code>

            <br />

            <p>Arrays use numbers to access its elements.</p>

            <p>John</p>
        </div>

        <br />

        <p>Objects use <b>names</b> to access its "members". In this example, <code style={{color:'red'}}>person.firstName</code> returns John:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Object:</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> person =  &#123;firstName:<code style={{color:'#5d0000'}}>"John"</code>, lastName:<code style={{color:'#5d0000'}}>"Doe"</code>, age:<code style={{color:'red'}}>46</code>&#125;;
            </code>

            <br />

            <p>JavaScript uses names to access object properties.</p>

            <p>John</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Array Elements Can Be Objects</h2>

        <p>JavaScript variables can be objects. Arrays are special kinds of objects.</p>

        <p>Because of this, you can have variables of different types in the same Array.</p>

        <p>You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <code>myArray[<code style={{color:'red'}}>0</code>] = Date.now;</code>

            <br />

            <code>myArray[<code style={{color:'red'}}>1</code>] = myFunction;</code>

            <br />

            <code>myArray[<code style={{color:'red'}}>2</code>] = myCars;</code>
        </div>

        <br />

      {/* Just a mark to separete sections */}
        
        <h2>Array Properties and Methods</h2>

        <p>The real strength of JavaScript arrays are the built-in array properties and methods:</p>

        <div style={{backgroundColor:"#cecece"}}>
            <code>cars.length <code style={{color:'green'}}>// Returns the number of elements</code></code>

            <br />

            <code>cars.sort() <code style={{color:'green'}}>// Sorts the array</code></code>
        </div>

        <p>Array methods are covered in the next chapters.</p>

        <br />

      {/* Just a mark to separete sections */}

        <h2>The length Property</h2>

        <p>The <code style={{color:'red'}}>length</code> property of an array returns the length of an array (the number of array elements).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
            </code>

            <br />

            <code><code style={{color:'blue'}}>let</code> = fruits.length;</code>

            <br />

            <p>The length property returns the length of an array.</p>

            <p>4</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <p>The <code style={{color:'red'}}>length</code> property is always one more than the highest array index.</p>
            <br />
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Accessing the First Array Element</h2>

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
            </code>

            <br />

            <code><code style={{color:'blue'}}>let</code> fruit = fruits[<code style={{color:'red'}}>0</code>];</code>

            <br />

            <p>JavaScript array elements are accesses using numeric indexes (starting from 0).</p>

            <p>Banana</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Accessing the Last Array Element</h2>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
            </code>

            <br />

            <code><code style={{color:'blue'}}>let</code> fruit = fruits[fruits.length - <code style={{color:'red'}}>1</code>];</code>

            <br />

            <p>JavaScript array elements are accesses using numeric indexes (starting from 0).</p>

            <p>Mango</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Looping Array Elements</h2>

        <p>One way to loop through an array, is using a <code style={{color:'red'}}>for</code> loop:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
            </code>

            <br />

            <code><code style={{color:'blue'}}>let</code> fLen = fruits.length;</code>

            <br />
            <br />

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"&lt;ul&gt;"</code>;</code>
            
            <br />

            <code><code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>; i &lt; fLen; i++) &#123;</code>

            <br />

            <code>&nbsp;&nbsp; text += <code style={{color:'#5d0000'}}>"&lt;li&gt;"</code> + fruits[i] + <code style={{color:'#5d0000'}}>"&lt;/li&gt;"</code>;</code>

            <br />

            <code>&#125;</code>

            <br />

            <code>text += <code style={{color:'#5d0000'}}>"&lt;/ul&gt;"</code>;</code>

            <br />
            <br />

            <p>The best way to loop through an array is using a standard for loop:</p>

            <ul>
                <li>Banana</li>
                <li>Orange</li>
                <li>Apple</li>
                <li>Mango</li>
            </ul>
        </div>

        <br />

        <p>You can also use the <code style={{color:'red'}}>Array.forEach()</code> function:</p>

        <br />


        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
            </code>

            <br />

            <code><code style={{color:'blue'}}>let</code> fLen = fruits.length;</code>

            <br />
            <br />

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"&lt;ul&gt;"</code>;</code>
            
            <br />

            <code>fruits.forEach(myFunction);</code>

            <br />

            <code>text += <code style={{color:'#5d0000'}}>"&lt;/ul&gt;"</code>;</code>

            <br />
            <br />

            <code><code style={{color:'blue'}}>function</code> myFunction(value) &#123;</code>

            <br />

            <code>text += <code style={{color:'#5d0000'}}>"&lt;li&gt;"</code> + value + <code style={{color:'#5d0000'}}>"&lt;/li&gt;"</code>;</code>

            <code>&#125;</code>

            <br />
            <br />

            <p>Array.forEach() calls a function for each array element.</p>

            <ul>
                <li>Banana</li>
                <li>Orange</li>
                <li>Apple</li>
                <li>Mango</li>
            </ul>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Adding Array Elements</h2>

        <p>The easiest way to add a new element to an array is using the <code style={{color:'red'}}>push()</code> method:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>];
            </code>

            <br />

            <code>fruits.push(<code style={{color:'#5d0000'}}>"Lemon"</code>); <code style={{color:'green'}}>// Adds a new element (Lemon) to fruits</code></code>

            <br />

            <p>The push method appends a new element to an array..</p>

            <p>Banana,Orange,Apple,Lemon</p>
        </div>

        <br />

        <p>New element can also be added to an array using the <code style={{color:'red'}}>length</code> property:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>];
            </code>

            <br />

            <code>fruits[fruits.length] = <code style={{color:'#5d0000'}}>"Lemon"</code>; <code style={{color:'green'}}>// Adds "Lemon" to fruits</code></code>

            <br />

            <p>The length property provides an easy way to append new elements to an array without using the push() method.</p>

            <p>Banana,Orange,Apple,Lemon</p>
        </div>

        <br />

        <div style={{backgroundColor:'#ffa4a4'}}>
            <h5>WARNING!</h5>

            <p>Adding elements with high indexes can create undefined "holes" in an array:</p>
        </div>

        <br />
        
        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>];
            </code>

            <br />

            <code>fruits[<code style={{color:'red'}}>6</code>] = <code style={{color:'#5d0000'}}>"Lemon"</code>; <code style={{color:'green'}}>// Creates undefined "holes" in fruits</code></code>

            <br />

            <p>Adding elements with high indexes can create undefined "holes" in an array.</p>

            <p>Banana,Orange,Apple,Lemon</p>

            <ul>
                <li>Banana</li>
                <li>Orange</li>
                <li>Apple</li>
                <li>undefined</li>
                <li>undefined</li>
                <li>undefined</li>
                <li>Lemon</li>
            </ul>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>Associative Arrays</h2>
        
        <p>Many programming languages support arrays with named indexes.</p>

        <p>Array with named indexes are called associative arrays (or hashes).</p>

        <p>JavaScript does <b>not</b> support arrays with named indexes.</p>

        <p>In JavaScript, <b>arrays</b> always use <b>numbered indexes</b>.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>


            <code>
                <code><code style={{color:"blue"}}>const</code> person = [];</code>

                <br />

                <code>person[<code style={{color:"red"}}>0</code>] = <code style={{color:'#5d0000'}}>"John"</code>;</code>

                <br />

                <code>person[<code style={{color:"red"}}>1</code>] = <code style={{color:'#5d0000'}}>"Doe"</code>;</code>

                <br />

                <code>person[<code style={{color:"red"}}>2</code>] = <code style={{color:'red'}}>46</code>;</code>

                <br />
                <br />

                <code>person.length. <code style={{color:'green'}}>// Will return 3</code></code>

                <br />

                <code>person[<code style={{color:'red'}}>0</code>]; <code style={{color:'green'}}>// Will return "John"</code></code>


               
            </code>

            <p>John 3</p>
        </div>

        <br />

        <div style={{backgroundColor:'#ffa4a4'}}>
            <h5>WARNING!</h5>

            <p>If you use named indexes, JavaScript will redefine the array to an object.</p>

            <p>After that, some array methods and properties will produce <b>incorrect results.</b></p>
        </div>
        
        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example:</h3>


            <code>
                <code><code style={{color:"blue"}}>const</code> person = [];</code>

                <br />

                <code>person[<code style={{color:"#5d0000"}}>"firstName"</code>] = <code style={{color:'#5d0000'}}>"John"</code>;</code>

                <br />

                <code>person[<code style={{color:"#5d0000"}}>"lastName"</code>] = <code style={{color:'#5d0000'}}>"Doe"</code>;</code>

                <br />

                <code>person[<code style={{color:"#5d0000"}}>"age"</code>] = <code style={{color:'red'}}>46</code>;</code>

                <br />
                <br />

                <code>person.length. <code style={{color:'green'}}>// Will return 0</code></code>

                <br />

                <code>person[<code style={{color:'red'}}>0</code>]; <code style={{color:'green'}}>// Will return undefined</code></code>


               
            </code>

            <p>If you use a named index when accessing an array, JavaScript will redefine the array to a standard object, and some array methods and properties will produce undefined or incorrect results.</p>

            <p>undefined 0</p>
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>The Difference Between Arrays and Objects</h2>

        <p>In JavaScript, <b>arrays</b> use <b>numbered indexes</b>.</p>

        <p>In JavaScript, <b>objects</b> use <b>named indexes</b>.</p>

        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <p>Array are a special kind of objects, with numbered indexes.</p>
            <br />
        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>When to Use Arrays. When to use Objects.</h2>

        <ul>
            <li>JavaScript does not support associative arrays.</li>
            <li>You should use <b>objects</b> when you want the element names to be <b>strings (text).</b></li>
            <li>You should use <b>arrays</b> when you want the element names to be <b>numbers.</b></li>
        </ul>

        <br />

      {/* Just a mark to separete sections */}

        <h2>JavaScript new Array()</h2>

        <p>JavaScript has a built-in array constructor <code style={{color:'red'}}>new Array()</code></p>

        <p>But you can safely use <b>[]</b> instead.</p>

        <p>These two different statements both create a new empty array named points:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array()</code>

            <br />

            <code><code>const</code> points = [];</code>
        </div>

        <br />

        <p>The two different statements both create a new array containing 6 numbers:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'red'}}>40, 100, 1, 5, 25, 10</code>);</code>

            <br />

            <code><code>const</code> points = [<code style={{color:'red'}}>40, 100, 1, 5, 25, 10</code>];</code>

            <br />

            <p>Avoid using new Array(). Use [] instead.</p>

            <code>points.[<code style={{color:'red'}}>0</code>]</code>

            <p>40</p>
        </div>

        <br />

        <p>The <code style={{color:'red'}}>new</code> keyword can produce some unexpected results:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'green'}}>// Create an array with three elements:</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'red'}}>40, 100, 1</code>)</code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'green'}}>// Create an array with two elements:</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'red'}}>40, 100</code>)</code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'green'}}>// Create an array with one element ???</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'red'}}>40</code>)</code>

            <br />
        
            <p>Avoid using new Array().</p>

            <code><code style={{color:'blue'}}>var</code> points = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'red'}}>40</code>);</code>


            <p>results</p>

            <p>,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>A Common Error</h3>

            <code><code style={{color:'blue'}}>const</code> points = [<code style={{color:'red'}}>40</code>];</code>

            <br />
        
            <p>is not the same as:</p>

            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array[<code style={{color:'red'}}>40</code>];</code>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'green'}}>// Create an array with one element</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> points =  [<code style={{color:'red'}}>40</code>];</code>

            <br />
        
            <p>Create an Array with one element.</p>

            <p>results</p>

            <p>40</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <code style={{color:'green'}}>// Create an array with 40 undefined elements:</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> points = <code style={{color:'blue'}}>new</code> Array(<code style={{color:'red'}}>40</code>);</code>

            <br />
        
            <p>Avoid using new Array().</p>

            <code>undefined</code>

        </div>

        <br />

      {/* Just a mark to separete sections */}

        <h2>How to Recognize an Array</h2>

        <p>A common question is: How do I know if a variable is an array?</p>

        <p>The problem is that JavaScript operator <code style={{color:'red'}}>typeof</code> returns "<code style={{color:'red'}}>object</code>":</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>];
            </code>

            <br />

            <code><code style={{color:'blue'}}>let</code> type = <code style={{color:'blue'}}>typeof</code> fruits;</code>

            <br />

            <p>The typeof operator, when used on an array, returns object:</p>

            <p>object</p>
        </div>

        <p>The typeof operator returns object because a JavaScript array is an object.</p>

        <h3>Solution 1</h3>

        <p>To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method <code style={{color:'red'}}>Array.isArray()</code>:</p>
        
        <br />

        <div style={{background:'#cecece'}}>
            <code>Array.isArray(fruits);</code>

            <br />

            <code>result</code>

            <br />

            <code>true</code>
        </div>

        <br />

        <h3>Solution 2:</h3>

        <p>The <code style={{color:'red'}}>instanceof</code> operator returns true if an object is created by a given constructor:</p>

        <div style={{background:"#cecece"}}>
            <code><code style={{color:'blue'}}>const</code> fruits = [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>]</code>

            <br />
            <br />

            <code>fruits <code style={{color:'blue'}}>instanceof</code> Array;</code>

            <br />

            <p>The instanceof operator returns true when used on an array:</p>

            <code>true</code>

        </div>

    </main>
  )
}

export default JavaScriptArrays