import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptIterables = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Iterables</h1>

        <div style={{background:'#dbffd5'}}>
            <br />

            <p>Iterables are iterable objects (like Arrays).</p>

            <p>Iterables can be accessed with simple and efficient code.</p>

            <p>Iterables can be iterated over with <code style={{color:'blue'}}>for..of</code> loops</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>The For Of Loop</h2>

        <p>The JavaScript <code style={{color:'blue'}}>for..of</code> statement loops through the elements of an iterable object.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h4>Syntax</h4>

            <code>
                <code style={{color:'blue'}}>for</code> (variable of iterable) &#123;

                <br />

                <code style={{color:'green'}}>// code block to be executed</code>
            
                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Iterating</h2>

        <p>Iterating is easy to understand.</p>

        <p>It simply means looping over a sequence of elements.</p>

        <p>Here are some easy examples:</p>

        <ul>
            <li>Iterating over a String</li>
            <li>Iterating over an Array</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Iterating Over a String</h2>

        <p>You can use a <code style={{color:'blue'}}>for..of</code> loop to iterate over the elements of a string:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a String</code>

                <br />

                <code style={{color:'blue'}}>const</code> name = <code style={{color:'#5d0000'}}>'Augusto'</code>;

                <br />
                <br />

                <code style={{color:'green'}}>// List all Elements</code>

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code> x <code style={{color:'blue'}}>of</code> name) &#123;

                <br />

                <code>text += x + <code style={{color:'#5d0000'}}>"&lt;br&gt;</code></code>;

                <br />

                &#125;
            </code>

            <br />

            <p>Iterate over a String:</p>

            <ul style={{listStyle:'none'}}>
                <li>A</li>
                <li>u</li>
                <li>g</li>
                <li>u</li>
                <li>s</li>
                <li>t</li>
                <li>o</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Iterating Over an Array</h2>

        <p>You can use a <code style={{color:'blue'}}>for..of</code> loop to iterate over the elements of an Array:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Array</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = [<code style={{color:'#5d0000'}}>"a"</code>, <code style={{color:'#5d0000'}}>"b"</code>, <code style={{color:'#5d0000'}}>"c"</code>];

                <br />
                <br />

                <code style={{color:'green'}}>// List all Elements</code>

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code> x <code style={{color:'blue'}}>of</code> letters) &#123;

                <br />

                <code>text += x + <code style={{color:'#5d0000'}}>"&lt;br&gt;</code></code>;

                <br />

                &#125;

            </code>

            <p>Iterate over an Array:</p>

            <ul style={{listStyle:'none'}}>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Iterating Over a Set</h2>

        <p>You can use a <code style={{color:'blue'}}>for..of</code> loop to iterate over the elements of a Set:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set([<code style={{color:'#5d0000'}}>"a"</code>, <code style={{color:'#5d0000'}}>"b"</code>, <code style={{color:'#5d0000'}}>"c"</code>]);

                <br />
                <br />

                <code style={{color:'green'}}>// List all Elements</code>

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code> x <code style={{color:'blue'}}>of</code> letters) &#123;

                <br />

                <code>text += x + <code style={{color:'#5d0000'}}>"&lt;br&gt;</code></code>;

                <br />

                &#125;

            </code>

            <p>Iterate over a Set:</p>

            <ul style={{listStyle:'none'}}>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Sets and Maps are covered in the next chapters.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Iterating Over a Map</h2>
        
        <p>You can use a <code style={{color:'blue'}}>for..of</code> loop to iterate over the elements of a Map:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Map</code>

                <br />

                <code style={{color:'blue'}}>const</code> fruits = <code style={{color:'blue'}}>new</code> Map([
                    
                    <br />

                    ([<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'red'}}>500</code>]),

                    <br />

                    ([<code style={{color:'#5d0000'}}>"bananas"</code>, <code style={{color:'red'}}>300</code>]),
                    
                    <br />

                    ([<code style={{color:'#5d0000'}}>"oranges"</code>, <code style={{color:'red'}}>200</code>])

                    <br />

                    ]);

                <br />
                <br />

                <code style={{color:'green'}}>// List all entries</code>

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code> x <code style={{color:'blue'}}>of</code> fruits) &#123;

                <br />

                <code>text += x + <code style={{color:'#5d0000'}}>"&lt;br&gt;</code></code>;

                <br />

                &#125;

            </code>

            <p>Iterate over a Map:</p>

            <ul style={{listStyle:'none'}}>
                <li>apples,500</li>
                <li>bananas,300</li>
                <li>oranges,200</li>
            </ul>
        </div>
    </main>
  )
}

export default JavaScriptIterables