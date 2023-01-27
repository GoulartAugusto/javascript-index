import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptStringSearch = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript String Search</h1>

        <div style={{backgroundColor:'#a1ffa1'}}>
          <h2>JavaScript Search Methods</h2>
          <ul>
            <li>String indexOf()</li>
            <li>String lastIndexOf()</li>
            <li>String search()</li>
            <li>String match()</li>
            <li>String matchAll()</li>
            <li>String includes()</li>
            <li>String startsWith()</li>
            <li>String endsWith()</li>
          </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String indexOf()</h2>

        <p>The <code style={{color:'#5d0000'}}>indexOf()</code>  method returns the index of (position of) the <b>first</b> occurrence of a string in a string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> str = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>str.indexOf(<code style={{color:'#5d0000'}}>"locate"</code>);</code>

            <br />

            <p>The position of the first occurrence of "locate" is:</p>

            <p>7</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <h3>Note</h3>

          <p>JavaScript counts positions from zero.</p>

          <p>0 is the first position in a string, 1 is the second, 2 is the third, ...</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String lastIndexOf()</h2>

        <p>The <code style={{color:'#5d0000'}}>lastIndexOf()</code> method returns the index of the <b>last</b> occurrence of a specified text in a string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>text.lastIndexOf(<code style={{color:'#5d0000'}}>"locate"</code>);</code>

            <br />

            <p>Return the position of the last occurrence of a specified text:</p>

            <p>21</p>
        </div>

        <p>Both <code style={{color:'#5d0000'}}>indexOf()</code>, and <code style={{color:'#5d0000'}}>lastIndexOf()</code> return -1 if the text is not found:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>text.lastIndexOf(<code style={{color:'#5d0000'}}>"John"</code>);</code>

            <br />

            <p>Both indexOf() and lastIndexOf() return -1 if the text is not found:</p>

            <p>-1</p>
        </div>

        <br />

        <p>Both methods accept a second parameter as the starting position for the search:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>text.indexOf(<code style={{color:'#5d0000'}}>"locate", <code style={{color:'red'}}>15</code></code>);</code>

            <br />

            <p>The indexOf() method accepts a second parameter as the starting position for the search:</p>

            <p>21</p>
        </div>

        <br />

        <p>The <code style={{color:'#5d0000'}}>lastIndexOf()</code> methods searches backwards (from the end to the beginning), meaning: if the second parameter is <code style={{color:'red'}}>15</code>, the search starts at position 15, and searches to the beginning of the string.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>text.lastIndexOf(<code style={{color:'#5d0000'}}>"locate", <code style={{color:'red'}}>15</code></code>);</code>

            <br />

            <p>The indexOf() method accepts a second parameter as the starting position for the search:</p>

            <p>Remember that the lastIndexOf() method searches backwards, so position 15 means start the search at position 15, and search to the beginning.</p>

            <p>7</p>
        </div>

        {/* Just a mark to separete sections */}

        <h2>JavaScript String search()</h2>
        
        <p>The <code style={{color:'#5d0000'}}>search()</code> method searches a string for a string (or a regular expression) and returns the position of the match:</p>


        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>text.search(<code style={{color:'#5d0000'}}>"locate"</code>);</code>

            <br />

            <p>Return the position of the first occurrence of a string in a string:</p>

            <p>7</p>
        </div>

        <br />
        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please locate where 'locate' occurs!"</code>;</code>

            <br />

            <code>text.search(<code style={{color:'orange'}}>/locate/</code>);</code>

            <br />

            <p>Return the position of the first occurrence of a regular expression:</p>

            <p>7</p>
        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>Did You Notice?</h2>

        <p>The two methods, <code style={{color:'#5d0000'}}>indexOf()</code> and <code style={{color:'#5d0000'}}>search()</code>, are <b>equal</b>?</p>

        <p>They accept the same arguments (parameters), and return the same value?</p>

        <p>The two methods are <b>NOT</b> equal. These are the differences:</p>

        <ul>
          <li>The <code style={{color:'#5d0000'}}>search()</code> method cannot take a second start position argument.</li>

          <li>The <code style={{color:'#5d0000'}}>indexOf()</code> method cannot take powerful search values (regular expressions).</li>
        </ul>

        <p>You will learn more about regular expressions in a later chapter.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String match()</h2>

        <p>The <code style={{color:'#5d0000'}}>match()</code> method returns an array containing the results of matching a string against a string (or a regular expression).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The rain in SPAIN stays mainly in the plain"</code>;</code>

            <br />

            <p>Perform a search for "ain":</p>

            <code>text.match(<code style={{color:'#5d0000'}}>"ain"</code>);</code>

            <br />

            <p>Return</p>

            <p>1 ain</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The rain in SPAIN stays mainly in the plain"</code>;</code>

            <br />

            <p>Perform a search for "ain":</p>

            <code>text.match(<code style={{color:'orange'}}>/ain/</code>);</code>

            <br />

            <p>Return</p>

            <p>1 ain</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The rain in SPAIN stays mainly in the plain"</code>;</code>

            <br />

            <p>Perform a global search for "ain":</p>

            <code>text.match(<code style={{color:'orange'}}>/ain/g</code>);</code>

            <br />

            <p>Return</p>

            <p>3 ain,ain,ain</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The rain in SPAIN stays mainly in the plain"</code>;</code>

            <br />

            <p>Perform a global, case-insensitive search for "ain":</p>

            <code>text.match(<code style={{color:'orange'}}>/ain/gi</code>);</code>

            <br />

            <p>Return</p>

            <p>4 ain,AIN,ain,ain</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <h3>Note</h3>

          <p>If a regular expression does not include the g modifier (global search), <code style={{color:'#5d0000'}}>match()</code> will return only the first match in the string.</p>

        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String matchAll()</h2>

        <p>The <code style={{color:'#5d0000'}}>matchAll()</code> method returns an iterator containing the results of matching a string against a string (or a regular expression).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"I love cats. Cats are very easy to love. Cats are very popular."</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> interator = text.matchAll(<code style={{color:'#5d0000'}}>"Cats"</code>);</code>

            <br />

            <p>ES2020 intoduced the string method matchAll().</p>

            <p>Return</p>

            <p>Cats,Cats</p>
        </div>

        <p>If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"I love cats. Cats are very easy to love. Cats are very popular."</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> interator = text.matchAll(<code style={{color:'orange'}}>/Cats/g</code>);</code>

            <br />

            <p>ES2020 intoduced the string method matchAll().</p>

            <p>Return</p>

            <p>Cats,Cats</p>
        </div>

        <br />

        <p>If you want to search case insensitive, the insensitive flag (i) must be set:</p>

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"I love cats. Cats are very easy to love. Cats are very popular."</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> interator = text.matchAll(<code style={{color:'orange'}}>/Cats/gi</code>);</code>

            <br />

            <p>ES2020 intoduced the string method matchAll().</p>

            <p>Return</p>

            <p>cats,Cats,Cats</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <h3>Note</h3>

          <p><code style={{color:'#5d0000'}}>matchAll()</code> is an ES2020 feature.</p>

          <p><code style={{color:'#5d0000'}}>matchAll()</code> does not work in Internet Explorer.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String includes()</h2>

        <p>The <code style={{color:'#5d0000'}}>includes()</code> method returns <code style={{color:'blue'}}>true</code> if a string contains a specified value.</p>

        <p>Otherwise it returns <code style={{color:'blue'}}>false</code>.</p>

        <br />

        <p>Check if a string includes "world":</p>

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.includes(<code style={{color:'#5d0000'}}>"world"</code>);</code>

            <br />

            <p>Check if a string includes "world":</p>

            <p>Return</p>

            <p>true</p>

            <p>The includes() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <p>Check if a string includes "world". Start at position 12:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.includes(<code style={{color:'#5d0000'}}>"world"</code>, <code style={{color:'red'}}>12</code>);</code>

            <br />

            <p>Check if a string includes "world" starting from position 12:</p>

            <p>Return</p>

            <p>false</p>

            <p>The includes() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <h3>Note</h3>

          <p><code style={{color:'#5d0000'}}>includes()</code> is case sensitive.</p>

          <p><code style={{color:'#5d0000'}}>includes()</code>  is an ES6 feature.</p>

          <p><code style={{color:'#5d0000'}}>includes()</code> is not supported in Internet Explorer.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String startsWith()</h2>

        <p>The <code style={{color:'#5d0000'}}>startsWith()</code> method returns <code style={{color:'red'}}>true</code> if a string begins with a specified value.</p>

        <p>Otherwise it returns <code style={{color:'red'}}>false</code>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.startsWith(<code style={{color:'#5d0000'}}>"Hello"</code>);</code>

            <br />

            <p>Check if a string starts with "Hello":</p>

            <p>Return</p>

            <p>true</p>

            <p>The startsWith() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.startsWith(<code style={{color:'#5d0000'}}>"world"</code>);</code>

            <br />

            <p>Check if a string starts with "world":</p>

            <p>Return</p>

            <p>false</p>

            <p>The startsWith() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <p>A start position for the search can be specified:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.startsWith(<code style={{color:'#5d0000'}}>"world"</code>, <code style={{color:'red'}}>5</code>);</code>

            <br />

            <p>Check if a string starts on 5th position with "world":</p>

            <p>Return</p>

            <p>false</p>

            <p>The startsWith() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.startsWith(<code style={{color:'#5d0000'}}>"world"</code>, <code style={{color:'red'}}>6</code>);</code>

            <br />

            <p>Check if a string starts on 6th position with "world":</p>

            <p>Return</p>

            <p>true</p>

            <p>The startsWith() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <h3>Note</h3>

          <p><code style={{color:'#5d0000'}}>startsWith()</code> is case sensitive.</p>

          <p><code style={{color:'#5d0000'}}>startsWith()</code>  is an ES6 feature.</p>

          <p><code style={{color:'#5d0000'}}>startsWith()</code> is not supported in Internet Explorer.</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String endsWith()</h2>

        <p>The <code style={{color:'#5d0000'}}>endsWith()</code> method returns <code style={{color:'red'}}>true</code>  if a string ends with a specified value.</p>

        <p>Otherwise it returns <code style={{color:'red'}}>false</code>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"John Doe"</code>;</code>

            <br />

            <code>text.endsWith(<code style={{color:'#5d0000'}}>"Doe"</code>);</code>

            <br />

            <p>Check if a string ends with "Doe":</p>

            <p>Return</p>

            <p>true</p>

            <p>The endsWith() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Hello world, welcome to the universe."</code>;</code>

            <br />

            <code>text.endsWith(<code style={{color:'#5d0000'}}>"world"</code>, <code style={{color:'red'}}>11</code>);</code>

            <br />

            <p>Check if the 11 first characters of a string ends with "world":</p>

            <p>Return</p>

            <p>true</p>

            <p>The endsWith() method is not supported in Internet Explorer.</p>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <h3>Note</h3>

          <p><code style={{color:'#5d0000'}}>endsWith()</code> is case sensitive.</p>

          <p><code style={{color:'#5d0000'}}>endsWith()</code>  is an ES6 feature.</p>

          <p><code style={{color:'#5d0000'}}>endsWith()</code> is not supported in Internet Explorer.</p>

        </div>
        
    </main>
  )
}

export default JavaScriptStringSearch