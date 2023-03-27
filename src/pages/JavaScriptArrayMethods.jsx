import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptArrayMethods = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Array Methods</h1>
        
      {/* Just a mark to  sections */}

      <h2>Converting Arrays to Strings</h2>

      <p>The JavaScript method <code style={{color:'red'}}>toString()</code> converts an array to a string of (commam d) array value.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>

        <br />

        <code>document.getElementById(<code style={{color:'red'}}>"demo"</code>).innerHTML = fruits.toString();</code>

        <br />

        <p>The toString() method returns an array as a comma separated string:</p>

        <p>Banana,Orange,Apple,Mango</p>

      </div>

      <br />

      <p>The <code style={{color:"red"}}>join()</code> method also joins all array elemnts into a string.</p>

      <p>It behaves just like <code style={{color:'red'}}>toString()</code>, but in addition you can specify the separator.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>

        <br />

        <code>document.getElementById(<code style={{color:'red'}}>"demo"</code>).innerHTML = fruits.join(<code style={{color:'#5d0000'}}>(" * ")</code>);</code>

        <br />

        <p>The join() method joins array elements into a string.</p>

        <p>It this example we have used " * " as a separator between the elements:</p>

        <code>Banana * Orange * Apple * Mango</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Popping and Pushing</h2>

      <p>When you work with arrays, it is easy to remove elements and add new elements.</p>

      <p>This is what popping and pushing is:</p>

      <p>Popping itens <b>out</b> of an array, or pushing items <b>into</b> an array.</p>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array pop()</h2>

      <p>The <code style={{color:"red"}}>pop()</code> method removes the last element from an array:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>

        <br />

        <code>fruits.pop()</code>

        <br />

        <p>The pop() method removes the last element from an array.</p>

        <code>Banana, Orange, Apple, Mango</code>

        <br />

        <code>Banana, Orange, Apple</code>

      </div>

      <br />

      <p>The <code style={{color:"red"}}>pop()</code> method returns the value that was "popped out":</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> fruit = fruits.pop()</code>

        <br />

        <p>The pop() method returns the value that was "popped out":</p>

        <code>Mango</code>

        <br />

        <code>Banana, Orange, Apple</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array push()</h2>

      <p>The <code style={{color:"red"}}>push()</code> method add a new element to an array (at the end):</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits.push(<code style={{color:"#5d0000"}}>"Kiwi"</code>);</code>

        <br />

        <p>The push() method appends a new element to an array:</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Banana,Orange,Apple,Mango,Kiwi</code>

      </div>

      <br />

      <p>The <code style={{color:"red"}}>push()</code> method returns the new array length:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> length = fruits.push(<code style={{color:"#5d0000"}}>"Kiwi"</code>);</code>

        <br />

        <p>The push() method returns the new array length:</p>

        <code>5</code>

        <br />

        <code>Banana,Orange,Apple,Mango,Kiwi</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Shifting Elements</h2>

      <p>Shifting is equivalent to popping, but working on the first element instead of the last.</p>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array shift()</h2>

      <p>The <code style={{color:"red"}}>shift()</code> method removes the first array element and "shifts" all other elements to a lower index.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> fruit = fruits.shift()</code>

        <br />

        <p>The shift() method removes the first element of an array (and "shifts" the other elements to the left):</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Orange,Apple,Mango</code>

      </div>

      <br />

      <p>The <code style={{color:"red"}}>shift()</code> method returns the value that was "shifted out":</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>let</code> fruit = fruits.shift();</code>

        <br />

        <p>The shift() method returns the element that was shifted out.</p>

        <code>Banana</code>

        <br />

        <code>Orange,Apple,Mango</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array unshift()</h2>

      <p>The <code style={{color:'red'}}>unshift()</code> method adds a new element to an arrat (at the beginning), and "unshift" older elements:</p>

      <br />
      
      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits.unshift(<code style={{color:'#5d0000'}}>"Lemon"</code>)</code>

        <br />

        <p>The unshift() method adds new elements to the beginning of an array:</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Lemon,Banana,Orange,Apple,Mango</code>

      </div>

      <br />

      <p>The <code style={{color:'red'}}>unshift()</code> method returns the new array length:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits.unshift(<code style={{color:'#5d0000'}}>"Lemon"</code>)</code>

        <br />

        <p>The unshift() method adds new elements to the beginning of an array:</p>

        <code>5</code>

        <br />

        <code>Lemon,Banana,Orange,Apple,Mango</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Changing Elements</h2>

      <p>Array elements are accessed using their <b>index number</b>:</p>

      <br />

      <div style={{background:"lightyellow"}}>
        <br />

        <p>Array <b>indexes</b> start with 0:</p>

        <ul style={{listStyle:'none'}}>
          <li>[0] is the first array element</li>
          <li>[1] is the second</li>
          <li>[2] is the third ...</li>
        </ul>

        <br />
      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits[<code style={{color:'red'}}>0</code>] = <code style={{color:"#5d0000"}}>"Kiwi"</code>;</code>

        <br />

        <p>Array elements are accessed using their index number:</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Kiwi,Orange,Apple,Mango</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array length</h2>

      <p>The <code style={{color:'red'}}>length</code> property provides an easy way to append a new element to an array:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits[fruits.length] = <code style={{color:"#5d0000"}}>"Kiwi"</code>;</code>

        <br />

        <p>The length property provides an easy way to append new elements to an array without using the push() method:</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Banana,Orange,Apple,Mango,Kiwi</code>

      </div>
      
      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array delete()</h2>

      <br />

      <div style={{background:'#ffa2a2'}}>

        <br />
        
        <h4>Warning !</h4>

        <p>Array elements can be deleted using the JavaScript operator <code style={{color:'red'}}>delete</code>.</p>

        <p>Using <code style={{color:'red'}}>delete</code> leaves <code style={{color:'red'}}>undefined</code> holes in the array.</p>

        <p>Use pop() or shift() instead.</p>

        <br />

      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:"blue"}}>delete</code> fruits[<code style={{color:'red'}}>0</code>];</code>

        <br />

        <p>Deleting elements leaves undefined holes in an array:</p>

        <code>The first fruit is: Banana</code>

        <br />

        <code>The first fruit is: undefined</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Merging (Concatenating) Arrays</h2>

      <p>The <code style={{color:'red'}}>concat()</code> method creates a new array by merging (concatenating) existing arrays:</p>

      <br />

      <div style={{background:"#cecece"}}>
        <h3>Example (Merging Two Array)</h3>

        <code><code style={{color:'blue'}}>const</code> myGirls = [<code style={{color:"#5d0000"}}>"Cecilie"</code>, <code style={{color:"#5d0000"}}>"Lone"</code>];</code>

        <br />

        <code><code style={{color:'blue'}}>const</code> myBoys = [<code style={{color:"#5d0000"}}>"Emil"</code>, <code style={{color:"#5d0000"}}>"Tobias"</code>, <code style={{color:"#5d0000"}}>"Linus"</code>];</code>

        <br />
        <br />

        <code><code style={{color:'blue'}}>const</code> myChildren = myGirls.concat(myBoys);</code>

        <br />
        <br />

        <p>The concat() method merges (concatenates) arrays:</p>

        <p>Cecilie,Lone,Emil,Tobias,Linus</p>

      </div>

      <br />

      <div style={{background:'lightyellow'}}>
        <br />

        <p>The <code style={{color:'red'}}>concat()</code> method does not change the existing arrays. It always return a new array.1</p>
      
      <br />
      </div>

      <br />

      <p>The <code style={{color:'red'}}>concat()</code> method can take any number of array arguments.</p>

      <br />

      <div style={{background:"#cecece"}}>
        <h3>Example (Merging Three Array)</h3>

        <code><code style={{color:'blue'}}>const</code> arr1 = [<code style={{color:"#5d0000"}}>"Cecilie"</code>, <code style={{color:"#5d0000"}}>"Lone"</code>];</code>

        <br />

        <code><code style={{color:'blue'}}>const</code> arr2 = [<code style={{color:"#5d0000"}}>"Emil"</code>, <code style={{color:"#5d0000"}}>"Tobias"</code>, <code style={{color:"#5d0000"}}>"Linus"</code>];</code>

        <br />

        <code><code style={{color:'blue'}}>const</code> arr3 = [<code style={{color:"#5d0000"}}>"Robin"</code>, <code style={{color:"#5d0000"}}>"Morgan"</code>];</code>

        <br />

        <code><code style={{color:'blue'}}>const</code> myChildren = arr1.concat(arr2, arr3);</code>

        <br />
        <br />

        <p>The concat() method merges (concatenates) arrays:</p>

        <p>Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan</p>

      </div>

      <br />

      <p>The <code style={{color:'red'}}>concat()</code> method can also take strings as arguments:</p>

      <br />

      <div style={{background:"#cecece"}}>
        <h3>Example (Merging an Array with Values)</h3>

        <code><code style={{color:'blue'}}>const</code> arr1 = [<code style={{color:"#5d0000"}}>"Emil"</code>, <code style={{color:"#5d0000"}}>"Tobias"</code>, <code style={{color:"#5d0000"}}>"Linus"</code>];</code>

        <br />

        <code><code style={{color:'blue'}}>const</code> myChildren = arr1.concat(<code style={{color:'#5d0000'}}>"Peter"</code>);</code>

        <br />


        <br />
        <br />

        <p>The concat() method can merge string values to arrays:</p>

        <p>Emil,Tobias,Linus,Peter</p>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Splicing and Slicing Arrays</h2>

      <p>The <code style={{color:'red'}}>splice()</code> method adds new items to an array.</p>

      <p>The <code style={{color:'red'}}>slice()</code> method slices out a piece of an array.</p>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array splice()</h2>
      
      <p>The <code style={{color:'red'}}>splice()</code> method can be used to add new items to an array:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits.splice(<code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>0</code>, <code style={{color:'#5d0000'}}>"Lemon"</code>, <code style={{color:'#5d0000'}}>"Kiwi"</code>);</code>

        <br />

        <p>The splice() method adds new elements to an array:</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Banana,Orange,Lemon,Kiwi,Apple,Mango</code>

      </div>

      <br />

      <p>The first parameter (2) defines the position <b>where</b> new elementes should be <b>added</b> (spliced in).</p>

      <p>The second parameter (0) defines <b>how many</b> elements should be <b>removed</b>.</p>


      <p>The rest of paramenters ("Lemon", "Kiwi") define the new elements to be <b>added</b>.</p>

      <p>The <code style={{color:'red'}}>splice()</code> method returns an array with the deleted items:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits.splice(<code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>2</code>, <code style={{color:'#5d0000'}}>"Lemon"</code>, <code style={{color:'#5d0000'}}>"Kiwi"</code>);</code>

        <br />

        <p>The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):</p>

        <code>Original Array:</code>

        <br />

        <code>Banana,Orange,Apple,Mango</code>

        <br />
        <br />

        <code>New Array:</code>

        <br />

        <code>Banana,Orange,Lemon,Kiwi</code>

        <br />
        <br />

        <code>Removed Items:</code>

        <br />

        <code>Apple,Mango</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Using splice() to Remove Elements</h2>

      <p>With clever parameter setting, you can use <code style={{color:'red'}}>splice()</code> to remove elements without leaving "holes" in the array:</p>
      
      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>fruits.splice(<code style={{color:'red'}}>0</code>, <code style={{color:'red'}}>1</code>);</code>

        <br />

        <p>The splice() methods can be used to remove array elements:</p>

        <code>Banana,Orange,Apple,Mango</code>

        <br />

        <code>Orange,Apple,Mango</code>

      </div>

      <br />

      <p>The first parameter (0) defines the position where new elements should be <b>added</b> (spliced in).</p>

      <p>The second parameter (1) defines <b>how many</b> elements should be <b>removed</b>.</p>

      <p>The rest of the parameters are omitted. No new elements will be added.</p>

      <br />

      {/* Just a mark to  sections */}

      <h2>JavaScript Array slice()</h2>

      <p>The <code style={{color:'red'}}>slice()</code> method slices out a piece of an array into a new array.</p>

      <p>This example slices out a part of an array starting from array element 1 ("Orange"):</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Lemon"</code>,<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>const</code> citrus = fruits.slice(<code style={{color:'red'}}>1</code>);</code>

        <br />

        <p>This example slices out a part of an array starting from array element 1 ("Orange"):</p>

        <code>Banana,Orange,Lemon,Apple,Mango</code>

        <br />

        <code>Orange,Lemon,Apple,Mango</code>

      </div>

      <br />

      <div style={{background:'lightyellow'}}>
        <br />

        <h3>Note</h3>

        <p>The <code style={{color:'red'}}>slice()</code> method creates a new array.</p>

        <p>The <code style={{color:'red'}}>slice()</code> method does not remove any elements from the source array.</p>

        <br />
      </div>

      <br />

      <p>This example slices out a part of an array starting from array element 3 ("Apple"):</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Lemon"</code>,<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>const</code> citrus = fruits.slice(<code style={{color:'red'}}>3</code>);</code>

        <br />

        <p>This example slices out a part of an array starting from array element 3 ("Apple")</p>

        <code>Banana,Orange,Lemon,Apple,Mango</code>

        <br />

        <code>Apple,Mango</code>

      </div>

      <br />
      
      <p>The <code style={{color:'red'}}>slice()</code> method can take two arguments like <code style={{color:'red'}}>slice(1, 3)</code>.</p>

      <p>The method then selects elements from the start argument, and up to (but not including) the end argument.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Lemon"</code>,<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>const</code> citrus = fruits.slice(<code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>3</code>);</code>

        <br />

        <p>When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument:</p>

        <code>Banana,Orange,Lemon,Apple,Mango</code>

        <br />

        <code>Orange,Lemon</code>

      </div>

      <br />

      <p>If the end argument is omitted, like in the first examples, the <code style={{color:'red'}}>slice()</code> method slices out the rest of the array.</p>

      
      <br />


      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Lemon"</code>,<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code><code style={{color:'blue'}}>const</code> citrus = fruits.slice(<code style={{color:'red'}}>2</code>);</code>

        <br />

        <p>This example slices out a part of an array starting from array element 2 ("Lemon"):</p>

        <code>Banana,Orange,Lemon,Apple,Mango</code>

        <br />

        <code>Lemon,Apple,Mango</code>

      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Automatic toString()</h2>

      <p>JavaScript automatically converts an array to a comma separated string when a primitive value is expected.</p>

      <p>This is always the case when you try to output an array.</p>

      <p>These two examples will produce the same result:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>,<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = fruits.toString();</code>

        <br />

        <p>The toString() method returns an array as a comma separated string:</p>

        <code>Banana,Orange,Apple,Mango</code>

      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>,<code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>
        
        <br />

        <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = fruits;</code>

        <br />

        <p>JavaScript automatically converts an array to a comma separated string when a simple value is expected:</p>

        <code>Banana,Orange,Apple,Mango</code>

      </div>

      <br />

      <div style={{background:'lightyellow'}}>
        <br />

        <h3>Note</h3>

        <p>All JavaScript objects have a toString() method.</p>

        <br />
      </div>

      <br />

      {/* Just a mark to  sections */}

      <h2>Finding Max and Min Values in an Array</h2>

      <p>There are no built-in functions for finding the highest or lowest value in a JavaScript array.</p>

      <p>You will learn how you solve this problem in the next chapter of this tutorial.</p>

      <br />

    </main>
  )
}

export default JavaScriptArrayMethods