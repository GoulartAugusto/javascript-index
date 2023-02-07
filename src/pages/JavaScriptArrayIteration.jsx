import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptArrayIteration = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Array Iteration</h1>

        <p>Array iteration methods operate on every array item.</p>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array forEach()</h2>

        <p>The <code style={{color:'red'}}>forEach()</code> method calls a function (a callback function) once for each array element.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> txt = <code style={{color:"#5d0000"}}>""</code>;</code>

            <br />

            <code>numbers.forEach(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code>txt += value + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

            <br />

            &#125;

            <br />
            <br />

            <p>Calls a function once for each array element.</p>

            <ul style={{listStyle:'none'}}>
                <li>45</li>
                <li>4</li>
                <li>9</li>
                <li>16</li>
                <li>25</li>
            </ul>
        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The index value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>The exmaple above uses only the value parameter. The example can be rewritten to:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> txt = <code style={{color:"#5d0000"}}>""</code>;</code>

            <br />

            <code>numbers.forEach(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value) &#123;</code>

            <br />

            <code>txt += value + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;</code>

            <br />

            &#125;

            <br />
            <br />

            <p>Calls a function once for each array element.</p>

            <ul style={{listStyle:'none'}}>
                <li>45</li>
                <li>4</li>
                <li>9</li>
                <li>16</li>
                <li>25</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array map()</h2>

        <p>The <code style={{color:'red'}}>map()</code> method creates a new array by performing a function on each array element.</p>

        <p>The <code style={{color:'red'}}>map()</code> method does not execute the function for array elements without values.</p>

        <p>The <code style={{color:'red'}}>map()</code> method does not change the original array.</p>

        <p>This example multiplies each array value by  2:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers1 = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> numbers2 = numbers1.map(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value * <code style={{color:'red'}}>2</code>;</code>

            <br />
            
            &#125;

            <br />

            <p>Creates a new array by performing a function on each array element.</p>

            <code>90,8,18,32,50</code>

        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>When a callback function uses only the value parameter, the index and the array parameter can be omitted:</p>
        
        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers1 = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> numbers2 = numbers1.map(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value * <code style={{color:'red'}}>2</code>;</code>

            <br />
            
            &#125;

            <br />

            <p>Creates a new array by performing a function on each array element.</p>

            <code>90,8,18,32,50</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array filter()</h2>

        <p>The <code style={{color:'red'}}>filter()</code> method creates a new array with array elements that pass a test.</p>

        <p>This example creates a new array from elements with a value larger than 18:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> over18 = numbers.filter(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code>;</code>

            <br />
            
            &#125;

            <br />

            <p>Creates a new array with all array elements that passes a test.</p>

            <code>45, 25</code>

        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>In the example above, the callback function does not use the index and array parameters, so they can be omitte:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> over18 = numbers.filter(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code>;</code>

            <br />
            
            &#125;

            <br />

            <p>Creates a new array with all array elements that passes a test.</p>

            <code>45, 25</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaSript Array reduce()</h2>

        <p>The <code style={{color:"red"}}>reduce()</code> method runs a function on each array element to produce (reduce it to) a single value.</p>

        <p>The <code style={{color:"red"}}>reduce()</code> method works from left-to-right in the array. See also <code style={{color:"red"}}>reduceRight()</code>.</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>The <code style={{color:'red'}}>reduce()</code> method does not reduce the original array.</p>
            <br />
        </div>

        <br />

        <p>The example finds the sum of all numbers in an array:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> sum = numbers.reduce(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(total, value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> total + value ;</code>

            <br />
            
            &#125;

            <br />

            <p>This example finds the sum of all numbers in an array:</p>

            <code>The sum is 99</code>

        </div>

        <br />

        <p>Note that the function takes 4 arguments:</p>

        <ul>
            <li>The total (the initial value / previously returned value)</li>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>The example above does not use the index and array parameters. It can be rewritten to:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> sum = numbers.reduce(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(total, value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> total + value ;</code>

            <br />
            
            &#125;

            <br />

            <p>This example finds the sum of all numbers in an array:</p>

            <code>The sum is 99</code>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> sum = numbers.reduce(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(total, value) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> total + value ;</code>

            <br />
            
            &#125;

            <br />

            <p>This example finds the sum of all numbers in an array:</p>

            <code>The sum is 99</code>

        </div>

        <br />

        <p>The <code style={{color:'red'}}>reduce()</code> method can accept an inital value</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> sum = numbers.reduce(myFunction, <code style={{color:'red'}}>100</code>);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(total, value) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> total + value ;</code>

            <br />
            
            &#125;

            <br />

            <p>This example finds the sum of all numbers in an array:</p>

            <code>The sum is 199</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array reduceRight()</h2>

        <p>The <code style={{color:'red'}}>reduceRight()</code> method runs a function on each array element to produce (reduce it to) a single value.</p>

        <p>The <code style={{color:'red'}}>reduceRight()</code> works from right-to-left in the array. See also <code style={{color:'red'}}>reduce()</code></p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>The <code style={{color:'red'}}>reduceRight()</code> method does not reduce the original array.</p>
            <br />
        </div>

        <p>This example finds the sum of all numbers in an array:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> sum = numbers.reduceRight(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(total, value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> total + value ;</code>

            <br />
            
            &#125;

            <br />

            <p>This example finds the sum of all numbers in an array:</p>

            <code>The sum is 99</code>

        </div>

        <br />
    
        <p>Note that the function takes 4 arguments:</p>

        <ul>
            <li>The total (the inital value / previously returned value)</li>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>The example above does not use the index and array parameters. It can be rewritten to:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> sum = numbers.reduceRight(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(total, value) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> total + value ;</code>

            <br />
            
            &#125;

            <br />

            <p>This example finds the sum of all numbers in an array:</p>

            <code>The sum is 99</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array every()</h2>

        <p>The <code style={{color:'red'}}>every()</code> method checks if all array values pass a test.</p>

        <p>This example checks if all array values are larger tha 18:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> allOver18 = numbers.every(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code> ;</code>

            <br />
            
            &#125;

            <br />

            <p>The every() method checks if all array values pass a test.</p>

            <code>All over 18 is false</code>

        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <p>When a callback function uses the first parameter only (value), the other parameters can be omitted:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> allOver18 = numbers.every(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code> ;</code>

            <br />
            
            &#125;

            <br />

            <p>The every() method checks if all array values pass a test.</p>

            <code>All over 18 is false</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array some()</h2>

        <p>The <code style={{color:'red'}}>some
        ()</code> method checks if some array values pass a test.</p>

        <p>This example checks if some array values are larger than 18:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> someOver18 = numbers.some(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code> ;</code>

            <br />
            
            &#125;

            <br />

            <p>The some() method checks if some array values pass a test.</p>

            <code>Some over 18 is true</code>

        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>JavaScript Array indexOf()</h2>

        <p>The <code style={{color:'red'}}>indexOf()</code> method searches an array for an element value and returns its position.</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p><b>Note:</b> The first item has position 0, the second item has the position 1, and so on.</p>
            <br />
        </div>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <p>Search an array for the item "Apple":</p>

            <br />

            <code><code style={{color:'blue'}}>const</code> fruits = [<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>,<code style={{color:'#5d0000'}}>"Mango"</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> position = fruits.indexOf(<code style={{color:'#5d0000'}}>"Apple"</code>) + <code style={{color:'red'}}>1</code>;</code>

            <br />

            <p>Apple is found in position 1</p>
        </div>

        <br />

        <h3>Syntax</h3>

        <code>array.indexOf(item, start)</code>

        <table>
            <tr>
                <th><b>item</b></th>
                <td>Required. The item to search for.</td>
            </tr>
            <tr>
                <th><b>start</b></th>
                <td>Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.</td>
            </tr>
        </table>

        <br />

        <p><code style={{color:'red'}}>Array.indexOf()</code> returns -1 if the item is not found.</p>

        <p>If the item is present more than once, it returns the position of the first occurrence.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array lastIndexOf()</h2>

        <p><code style={{color:'red'}}>Array.lastIndexOf()</code> is the same as <code style={{color:'red'}}>Array.indexOf()</code>,  but returns the position of the last occurrence of the specified element.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <p>Search an array for the item "Apple":</p>

            <br />

            <code><code style={{color:'blue'}}>const</code> fruits = [<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>,<code style={{color:'#5d0000'}}>"Mango"</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> position = fruits.lastIndexOf(<code style={{color:'#5d0000'}}>"Apple"</code>) + <code style={{color:'red'}}>1</code>;</code>

            <br />

            <p>Apple is found in position 3</p>
        </div>

        <br />

        <h3>Syntax</h3>

        <code>array.lastIndexOf(item, start)</code>

        <table>
            <tr>
                <th><b>item</b></th>
                <td>Required. The item to search for.</td>
            </tr>
            <tr>
                <th><b>start</b></th>
                <td>Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>JavaScript Array find()</h2>

        <p>The <code style={{color:"red"}}>find()</code> method returns the value of the first array element that passes a test function.</p>

        <p>This example finds (returns the value of) the first element that is larger than 18:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> firts = numbers.find(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code> ;</code>

            <br />
            
            &#125;

            <br />

            <code>First number over 18 is 25</code>

        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <br />

        <h3>Browser Support</h3>

        <p><code style={{color:'red'}}>find()</code> is an ES6 feature (JavaScript 2015).</p>

        <p>It is supported in all modern browsers.</p>

        <p><code style={{color:'red'}}>find()</code> is not supported in Internet Explorer.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array findIndex()</h2>

        <p>The <code style={{color:'red'}}>findIndex()</code> method returns the index of the first array element that passes a test function.</p>

        <p>This example finds the index of the first element that is larger than 18:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> numbers = [<code style={{color:'red'}}>45</code>, <code style={{color:'red'}}>4</code>, <code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>16</code>, <code style={{color:'red'}}>25</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> firts = numbers.findIndex(myFunction);</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>function</code> myFunction(value, index, array) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> value &gt; <code style={{color:'red'}}>18</code> ;</code>

            <br />
            
            &#125;

            <br />

            <code>First number over 18 has index 3</code>

        </div>

        <br />

        <p>Note that the function takes 3 arguments:</p>

        <ul>
            <li>The item value</li>
            <li>The item index</li>
            <li>The array itself</li>
        </ul>

        <br />

        <h3>Browser Support</h3>

        <p><code style={{color:'red'}}>findIndex()</code> is an ES6 feature (JavaScript 2015).</p>

        <p>It is supported in all modern browsers.</p>

        <p><code style={{color:'red'}}>findIndex()</code> is not supported in Internet Explorer.</p>

        <br />
        
        {/* Just a mark to separete sections */}

        <h2>JavaScript Array.from()</h2>

        <p>The <code style={{color:"red"}}>Array.from()</code> method returns an Array object from any object with a length property or any iterable object.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>Create an Array from a String:</p>

            <br />

            <code>Array.from(<code style={{color:'#5d0000'}}>"ABCDEFG"</code>);</code>

            <br />

            <p>The Array.from() method returns an Array object from any object with a length property or any iterable object.</p>

            <br />

            <code>A,B,C,D,E,F,G</code>

            <br />

            <p>The Array.from() method is not supported in Internet Explorer.</p>
        </div>
        
        <br />

        <h3>Browser Support</h3>

        <p><code style={{color:'red'}}>from()</code> is an ES6 feature (JavaScript 2015).</p>

        <p>It is supported in all modern browsers.</p>

        <p><code style={{color:'red'}}>from()</code> is not supported in Internet Explorer.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array Keys()</h2>

        <p>The <code style={{color:"red"}}>Array.keys()</code> method returns an Array Iterator object with the keys of an array.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <p>Create an Array Iterator object, containing the keys of the array:</p>

            <br />

            <code><code style={{color:'blue'}}>const</code> fruits = [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>,<code style={{color:'#5d0000'}}>"Mango"</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> key = fruits.keys();</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>for</code> (<code style={{color:"blue"}}>let</code> x of keys) &#123;</code>

            <br />

            <code>text += x + <code style={{color:"#5d0000"}}>"&lt;br&gt;"</code>;</code>

            <br />

            <code>&#125;</code>


            <p>The Array.keys() method returns an Array Iterator object with the keys of the array.</p>

            <ul style={{listStyle:'none'}}>
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

            <p>Array.keys() is not supported in Internet Explorer.</p>
        </div>

        <br />

        <h3>Browser Support</h3>

        <p><code style={{color:'red'}}>keys()</code> is an ES6 feature (JavaScript 2015).</p>

        <p>It is supported in all modern browsers.</p>

        <p><code style={{color:'red'}}>keys()</code> is not supported in Internet Explorer.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Array entries()</h2>

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <p>Create an Array Iterator, and then iterate over the key/value pairs:</p>

            <br />

            <code><code style={{color:'blue'}}>const</code> fruits = [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>,<code style={{color:'#5d0000'}}>"Mango"</code>];</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> f = fruits.entries();</code>

            <br />
            <br />

            <code><code style={{color:"blue"}}>for</code> (<code style={{color:"blue"}}>let</code> x of f) &#123;</code>

            <br />

            <code>document.getElementById(<code style={{color:"#5d0000"}}>"demo"</code>).innerHTML += x;</code>

            <br />

            <code>&#125;</code>


            <p>entries() returns an Array Iterator object with key/value pairs:</p>

            <ul style={{listStyle:'none'}}>
                <li>0,Banana</li>
                <li>1,Orange</li>
                <li>2,Apple</li>
                <li>3,Mango</li>
            </ul>

            <p>The entries() method is not supported in Internet Explorer 11 (or earlier).</p>

            <p>The <code style={{color:"red"}}>entries() </code>method does not change the original array.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Array includes()</h2>

        <p>ECMAScript 2016 introduced <code style={{color:'red'}}>Array.includes()</code> to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <br />

            <code><code style={{color:'blue'}}>const</code> fruits = [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>,<code style={{color:'#5d0000'}}>"Mango"</code>];</code>

            <br />

            <code>fruits.includes(<code style={{color:"#5d0000"}}>"Mango"</code>); <code style={{color:"green"}}>// is true</code></code>


            <p>Check if the fruit array contains "Mango":</p>

            <p>true</p>

            <p>Note: The includes method is not supported in Edge 13 (and earlier versions).</p>
        </div>

        <br />

        <h3>Syntax</h3>

        <code>array.includes(search-item)</code>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>Array.includes() allows to check for NaN values. Unlike Array.indexOf().</p>
            <br />
        </div>

        <p>Array.includes() is not supported in Internet Explorer and Edge 12/13.</p>

        <h3>Browser Support</h3>

        <p><code style={{color:"red"}}>includes()</code> is an ECMAScript 2016 feature.</p>

        <p>It is supported in all modern browsers.</p>

        <p><code style={{color:"red"}}>includes()</code> is not supported in Internet Explorer.</p>



    </main>
  )
}

export default JavaScriptArrayIteration