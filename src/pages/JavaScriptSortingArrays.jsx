import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptSortingArrays = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Sorting Arrays</h1>

        {/* Just a mark to separete sections */}

        <h2>Sorting an Array</h2>

        <p>The <code style={{color:'red'}}>sort()</code> method sorts an array alphabetically:</p>

        <br />

        <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
            <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
        </code>

        <br />

        <code>fruits.sort();</code>

        <br />

        <p>The sort() method sorts an array alphabetically:</p>

        <p>Banana,Orange,Apple,Mango</p>

        <p>Apple,Banana,Mango,Orange</p>

      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Reversing an Array</h2>

      <p>The <code>reverse()</code> method reverses the elements in an array</p>

      <p>You can use it to sort an array in descending order:</p>

      <br />

      <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
      </code>

      <br />

      <code>fruits.sort();</code>

      <br />

      <code>fruits.reverse();</code>

      <br />

      <p>The reverse() method reverses the elements in an array.</p>

      <p>By combining sort() and reverse() you can sort an array in descending order:</p>

      <p>Banana,Orange,Apple,Mango</p>

      <p>Orange,Mango,Banana,Apple</p>

    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Numeric Sort</h2>

    <p>By default, the <code style={{color:'red'}}>sort()</code> function sorts values as <b>string.</b></p>

    <p>This worksd well for strings ("Apple" comes before "Banana").</p>

    <p>Howerver, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    </p>

    <p>Because of this, the <code style={{color:'red'}}>sort()</code> method will produce incorrect result when sorting numbers.</p>

    <p>You can fix this by providing a <b>compare function:</b></p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> points = [<code style={{color:'red'}}>40</code>, <code style={{color:'red'}}>100</code>, <code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>5</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>];
      </code>

      <br />

      <code>points.sort(<code style={{color:'blue'}}>function</code>(a, b)&#123;<code style={{color:'blue'}}>return</code> a - b&#125;);</code>

      <br />

      <p>Sort the array in ascending order:</p>

      <p>40,100,1,5,25,10</p>

      <p>1,5,10,25,40,100</p>

    </div>

    <br />

    <p>Use the same trick to sort an array descending:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> points = [<code style={{color:'red'}}>40</code>, <code style={{color:'red'}}>100</code>, <code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>5</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>];
      </code>

      <br />

      <code>points.sort(<code style={{color:'blue'}}>function</code>(a, b)&#123;<code style={{color:'blue'}}>return</code> b - a&#125;);</code>

      <br />

      <p>Sort the array in descending order:</p>

      <p>40,100,1,5,25,10</p>

      <p>100,40,25,10,5,1</p>

    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>The Compare Function</h2>

    <p>The purpose of the compare function is to define an alternative sort order.</p>

    <p>The compare function should return a negative, zero, or positive value, depending on the arguments:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <br />


      <code><code style={{color:'blue'}}>function</code>(a, b)&#123;<code style={{color:'blue'}}>return</code> a - b&#125;;</code>


      <br />
      <br />
    </div>

    <br />

    <p>When the <code style={{color:'red'}}>sort()</code> function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.</p>

    <p>If the result is negative, <code style={{color:'red'}}>a</code> is sorted before <code style={{color:'red'}}>b</code>.</p>

    <p>If the result is positive, <code style={{color:'red'}}>b</code> is sorted before <code style={{color:'red'}}>a</code>.</p>

    <p>If the result is 0, no changes are done with the sort order of the two values.</p>

    <h4>Example</h4>

    <p>The compare function compares all the values in the array, two values at a time <code style={{color:'red'}}>(a, b)</code>.</p>

    <p>When comparing 40 and 100, the <code style={{color:'red'}}>sort()</code> method calls the compare function(40, 100).</p>

    <p>The function calculates 40 - 100 <code style={{color:'red'}}>(a - b)</code>, and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.</p>

    <br />

    {/* Just a mark to separete sections */}
    
    <h2>Sorting an Array in Random Order</h2>

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> points = [<code style={{color:'red'}}>40</code>, <code style={{color:'red'}}>100</code>, <code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>5</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>];
      </code>

      <br />

      <code>points.sort(<code style={{color:'blue'}}>function</code>()&#123;<code style={{color:'blue'}}>return</code> <code style={{color:'red'}}>0.5</code> - Math.random()&#125;);</code>

      <br />

      <p>This line of code is for sorting the array in random order.</p>

      <p>40,100,1,5,25,10</p>

      <p>Example result:</p>

      <p>40,1,10,100,25,5</p>

    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>The Fisher Yates Method</h2>
















    </main>
  )
}

export default JavaScriptSortingArrays