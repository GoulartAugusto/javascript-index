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

    <p>The above example, array.sort(), is not accurate. It will favor some numbers over the others.</p>

    <p>The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!</p>

    <p>In JavaScript the method can be translated to this:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> points = [<code style={{color:'red'}}>40</code>, <code style={{color:'red'}}>100</code>, <code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>5</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>];
      </code>

      <br />
      <br />

      <code><code style={{color:'blue'}}>for</code>(<code style={{color:'blue'}}>let</code> i = points.length -<code style={{color:'red'}}>1</code>; i &gt; <code style={{color:'red'}}>0</code>; i--) &#123;
      <br />
      <code style={{color:'blue'}}>let</code> j = Math.floor(Math.random() * (i + <code style={{color:'red'}}>1</code>));</code>

      <br />

      <code><code style={{color:'blue'}}>let</code> k = points.[i];</code>


      <br />

      <code>points[i] = points[j];</code>

      <br />

      <code>points.[j] = k;</code>

      <br />

      &#125;

      <p>Sort the array in random order.</p>

      <p>40,100,1,5,25,10</p>

      <p>25,40,5,10,100,1</p>

    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Find the Highest (or Lowest) Array Value</h2>

    <p>There are no built-in functions for finding the max or min value in an array.</p>

    <p>However, after you have sorted an array, you can use the index to obtain the highest and lowest values.</p>

    <p>Sorting ascending:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> points = [<code style={{color:'red'}}>40</code>, <code style={{color:'red'}}>100</code>, <code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>5</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>];
      </code>

      <br />

      <code>points.sort(<code style={{color:'blue'}}>function</code>(a, b)&#123;<code style={{color:'blue'}}>return</code> a - b&#125;);</code>

      <br />

      <code style={{color:'green'}}>// now points[0] contains the lowest value</code>

      <br />

      <code style={{color:'green'}}>// and points[points.length-1] contains the highest value</code>

      <p>The lowest number is 1.</p>

    </div>

    <br />

    <p>Sorting descending:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
          <code style={{color:"blue"}}>const</code> points = [<code style={{color:'red'}}>40</code>, <code style={{color:'red'}}>100</code>, <code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>5</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>];
      </code>

      <br />

      <code>points.sort(<code style={{color:'blue'}}>function</code>(a, b)&#123;<code style={{color:'blue'}}>return</code> b - a&#125;);</code>

      <br />

      <code style={{color:'green'}}>// now points[0] contains the highest value</code>

      <br />

      <code style={{color:'green'}}>// and points[points.length-1] contains the lowest value</code>

      <p>The highest number is 100.</p>

    </div>

    <br />
    
    <div style={{background:'lightyellow'}}>
      <br />
      <p>Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.</p>
      <br />
    </div>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Using Math.max() on an Array</h2>

    <p>You can use <code style={{color:'red'}}>Math.max.apply</code> to find the highest number in an array:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
        <code style={{color:'blue'}}>function</code> myArrayMax(arr) &#123;
          <br />

          <code style={{color:'blue'}}>return</code> Math.max.apply(<code style={{color:'blue'}}>null</code>, arr);
          <br />

        &#125;
      </code>

      <br />

      <p>The highest number is 100.</p>
    </div>

    <p><code style={{color:'red'}}>Math.max.apply(null, [1, 2, 3])</code> is equivalent to <code style={{color:'red'}}>Math.max(1, 2, 3)</code>.</p>

    <br />

    {/* Just a mark to separete sections */}

    <h2>Using Math.min() on an Array</h2>

    <p>You can use <code style={{color:'red'}}>Math.min.apply</code> to find the lowest number in an array:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example</h3>

      <code>
        <code style={{color:'blue'}}>function</code> myArrayMax(arr) &#123;
          <br />

          <code style={{color:'blue'}}>return</code> Math.min.apply(<code style={{color:'blue'}}>null</code>, arr);
          <br />

        &#125;
      </code>

      <br />

      <p>The lowest number is 1.</p>
    </div>

    <br />

    <p><code style={{color:'red'}}>Math.min.apply(null, [1, 2, 3])</code> is equivalent to <code style={{color:'red'}}>Math.min(1, 2, 3)</code>.</p>

    <br />

    {/* Just a mark to separete sections */}

    <h2>My Min / Max JavaScript Methods</h2>

    <p>The fastest solution is to use a "home made" method.</p>

    <p>This function loops through an array comparing each value with the highest value found:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example (Find Max)</h3>

      <code>
          <code style={{color:"blue"}}>function</code> myArrayMax(arr) &#123;
          <br />

          <code style={{color:'blue'}}>let</code> len = arr.length;

          <br />

          <code style={{color:'blue'}}>let</code> max = -<code style={{color:'red'}}>Infinity</code>;

          <br />

          <code style={{color:'blue'}}>while</code> (len --) &#123;

          <br />

          <code style={{color:'blue'}}>if</code> (arr[len] &gt; max ) &#123;

          <br />

          max = arr[len];

          <br />

          &#125;

          <br />

          &#125;

          <br />

          <code style={{color:'blue'}}>return</code> max;

          <br />

          &#125;
        
      </code>


      <p>The highest number is 100.</p>

    </div>

    <br />

    <p>This function loops through an array comparing each value with the lowest value found:</p>

    <br />

    <div style={{background:'#cecece'}}>
      <h3>Example (Find Min)</h3>

      <code>
          <code style={{color:"blue"}}>function</code> myArrayMin(arr) &#123;
          <br />

          <code style={{color:'blue'}}>let</code> len = arr.length;

          <br />

          <code style={{color:'blue'}}>let</code> min = <code style={{color:'red'}}>Infinity</code>;

          <br />

          <code style={{color:'blue'}}>while</code> (len --) &#123;

          <br />

          <code style={{color:'blue'}}>if</code> (arr[len] &gt; min ) &#123;

          <br />

          min = arr[len];

          <br />

          &#125;

          <br />

          &#125;

          <br />

          <code style={{color:'blue'}}>return</code> min;

          <br />

          &#125;
        
      </code>


      <p>The lowest number is 1.</p>

    </div>

    <br />

    {/* Just a mark to separete sections */}
    
    <h2>Sorting Object Arrays</h2>

    <p>JavaScript arrays often contain objects:</p>

    <br />

    <div style={{background:"#cecece"}}>
      <code>
        <code style={{color:'blue'}}>const</code> cars = [
          <br />

          &#123;type:<code style={{color:"#5d0000"}}>"Volvo"</code>, year:<code style={{color:'red'}}>2016</code>&#125;,

          <br />

          &#123;type:<code style={{color:"#5d0000"}}>"Saab"</code>, year:<code style={{color:'red'}}>2001</code>&#125;,

          <br />

          &#123;type:<code style={{color:"#5d0000"}}>"BMW"</code>, year:<code style={{color:'red'}}>2010</code>&#125;

          <br />

        ];
      </code>
    </div>

    <br />

    <p>Even if objects have properties of different data types, the <code style={{color:'red'}}>sort()</code> method can be used to sort the array.</p>

    <p>The solution is to write a compare function to compare the property valyes:</p>

    <br />

    <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>cars.sort(<code style={{color:"blue"}}>function</code>(a, b)&#123;<code style={{color:"blue"}}>return</code> a.year - b.year&#125;);</code>

        <br />

        <p>Sort car objects on age:</p>

        <ul style={{listStyle:'none'}}>
          <li>Saab 2001</li>
          <li>BMW 2010</li>
          <li>Volvo 2016</li>
        </ul>
    </div>

    <br />

    <p>Comparing string properties is a little more complex:</p>

    <br />

    <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          cars.sort(<code style={{color:'blue'}}>function</code>(a, b) &#123;
          
          <br />

          <code style={{color:'blue'}}>let</code> x = a.type.toLowerCase();

          <br />

          <code style={{color:"blue"}}>let</code> y = b.type.toLowerCase();

          <br />

          <code style={{color:"blue"}}>if</code> (x &gt; y ) &#123;<code style={{color:"blue"}}>return</code> -<code style={{color:"red"}}>1</code>;&#125;

          <br />

          <code style={{color:"blue"}}>if</code> (x &lt; y ) &#123;<code style={{color:"blue"}}>return</code> <code style={{color:"red"}}>1</code>;&#125;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:"red"}}>0</code>;

          <br />

          &#125;);

          <br />
          <br />

          <p>Sort car objects on type.</p>

          <ul style={{listStyle:'none'}}>
            <li>BMW 2010</li>
            <li>Saab 2001</li>
            <li>Volvo 2016</li>
          </ul>

        </code>
    </div>

    </main>
  )
}

export default JavaScriptSortingArrays