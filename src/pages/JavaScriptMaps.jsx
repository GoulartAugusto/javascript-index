import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptMaps = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Maps</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:'#ddffdd'}}>
            <br />

            <p>A Map holds key-value pairs where the keys can be any datatype.</p>

            <p>A Map remembers the original insertion order of the keys.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Essential Map Methods</h2>

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>new Map()</td>
                <td>Creates a new Map</td>
            </tr>
            <tr>
                <td>set()</td>
                <td>Sets the value for a key in a Map</td>
            </tr>
            <tr>
                <td>get()</td>
                <td>Gets the value for a key in a Map</td>
            </tr>
            <tr>
                <td>delete()</td>
                <td>Removes a Map element specified by the key</td>
            </tr>
            <tr>
                <td>has()</td>
                <td>Returns true if a key exists in a Map</td>
            </tr>
            <tr>
                <td>forEach()</td>
                <td>Calls a function for each key/value pair in a Map</td>
            </tr>
            <tr>
                <td>entries()</td>
                <td>Returns an iterator with the [key, value] pairs in a Map</td>
            </tr>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>size</td>
                <td>Returns the number of elements in a Map</td>
            </tr>
        </table>

        {/* Just a mark to separete sections */}

        <h2>How to Create a Map</h2>

        <p>You can create a JavaScript Map by:</p>

        <ul>
            <li>Passing an Array to <code style={{color:'blue'}}>new Map()</code></li>
            <li>Create a Map and use <code style={{color:'blue'}}>Map.set()</code></li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The new Map() Method</h2>

        <p>You can create a Map by passing an Array to the <code style={{color:'blue'}}>new Map()</code> constructor:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Map</code>

                <br />

                <code style={{color:'blue'}}>const</code> fruits = <code style={{color:'blue'}}>new</code> Map([
                    
                <br />

                [<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'red'}}>500</code>],

                <br />

                [<code style={{color:'#5d0000'}}>"bananas"</code>, <code style={{color:'red'}}>300</code>],
                
                <br />

                [<code style={{color:'#5d0000'}}>"oranges"</code>, <code style={{color:'red'}}>200</code>]

                <br />

                ]);
            </code>

            <p>Creating a Map from an Array:</p>

            <code>fruits.get(<code style={{color:'#5d0000'}}>"apples"</code>);</code>

            <p>return</p>

            <p>500</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The set() Method</h2>

        <p>You can add elements to a Map with the <code style={{color:'blue'}}>set()</code> method:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Map</code>

                <br />

                <code style={{color:'blue'}}>const</code> fruits = <code style={{color:'blue'}}>new</code> Map();
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'green'}}>// Set Map Values</code>

                <br />

                <code>fruits.set(<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'#5d0000'}}>500</code>);</code>

                <br />

                <code>fruits.set(<code style={{color:'#5d0000'}}>"bananas"</code>, <code style={{color:'#5d0000'}}>300</code>);</code>

                <br />

                <code>fruits.set(<code style={{color:'#5d0000'}}>"oranges"</code>, <code style={{color:'#5d0000'}}>200</code>);</code>
            </code>

            <br />

            <p>Using Map.set():</p>

            <code>fruits.get(<code style={{color:'#5d0000'}}>"apples"</code>);</code>

            <p>return</p>

            <p>500</p>
        </div>

        <br />

        <p>The <code style={{color:'blue'}}>set()</code> method can also be used to change existing Map values:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Map</code>

                <br />

                <code style={{color:'blue'}}>const</code> fruits = <code style={{color:'blue'}}>new</code> Map([
                    
                <br />

                [<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'red'}}>500</code>],

                <br />

                [<code style={{color:'#5d0000'}}>"bananas"</code>, <code style={{color:'red'}}>300</code>],
                
                <br />

                [<code style={{color:'#5d0000'}}>"oranges"</code>, <code style={{color:'red'}}>200</code>]

                <br />

                ]);
            </code>

            <p>Using Map.set():</p>

            <code>fruits.set(<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'red'}}>200</code>);</code>

            <br />
            <br />

            <code>fruits.get(<code style={{color:'#5d0000'}}>"apples"</code>);</code>

            <p>return</p>

            <p>200</p>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

        <h2>The get() Method</h2>

        <p>The <code style={{color:'blue'}}>get()</code> method gets the value of a key in a Map:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code>fruits.get(<code style={{color:'#5d0000'}}>"apples"</code>);</code>

                <p>return</p>

                <p>500</p>
            </code>
        </div>

        {/* Just a mark to separete sections */}
        
        <h2>The size Property</h2>

        <p>The <code style={{color:'blue'}}>size</code> property returns the number of elements in a Map:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>fruits.size;</code>

                <p>Using Map.size:</p>

                <p>3</p>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The delete() Method</h2>

        <p>The <code style={{color:'blue'}}>delete()</code> method removes a Map element:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>fruits.<code style={{color:'blue'}}>delete</code>(<code style={{color:'#5d0000'}}>"apples"</code>);</code>

            <p>fruits.size;</p>

            <p>from the original array it will return:</p>

            <p>2</p>
        </div>

        {/* Just a mark to separete sections */}
        
        <h2>The has() Method</h2>

        <p>The <code style={{color:'blue'}}>has()</code> method returns true if a key exists in a Map:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>fruits.has(<code style={{color:'#5d0000'}}>"apples"</code>);</code>

            <p>Using Map.has():</p>

            <p>true</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Objects vs Maps</h2>

        <h4>Differences between JavaScript Objects and Maps:</h4>

        <br />

        <table>
            <tr>
                <th></th>
                <th>Object</th>
                <th>Map</th>
            </tr>
            <tr>
                <th>Iterable</th>
                <td>Not directly iterable</td>
                <td>Directly iterable</td>
            </tr>
            <tr>
                <th>Size</th>
                <td>Do not have a size property</td>
                <td>Have a size property</td>
            </tr>
            <tr>
                <th>Key Types</th>
                <td>Keys must be Strings (or Symbols)</td>
                <td>Keys can be any datatype</td>
            </tr>
            <tr>
                <th>Key Order</th>
                <td>Keys are not well ordered</td>
                <td>Keys are ordered by insertion</td>
            </tr>
            <tr>
                <th>Defaults</th>
                <td>Have default keys</td>
                <td>Do not have default keys</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The forEach() Method</h2>

        <p>The <code style={{color:'blue'}}>forEach()</code> method calls a function for each key/value pair in a Map:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Map</code>

                <br />

                <code style={{color:'blue'}}>const</code> fruits = <code style={{color:'blue'}}>new</code> Map([
                    
                <br />

                [<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'red'}}>500</code>],

                <br />

                [<code style={{color:'#5d0000'}}>"bananas"</code>, <code style={{color:'red'}}>300</code>],
                
                <br />

                [<code style={{color:'#5d0000'}}>"oranges"</code>, <code style={{color:'red'}}>200</code>]

                <br />

                ]);
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>// List all entries</code>

            <br />

            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;
            </code>

            <code>
                fruits.forEach (<code style={{color:'blue'}}>function</code>(value, key) &#123;

                <br />

                text += key + <code style={{color:'#5d0000'}}>' = '</code> + value + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                <br />
                
                &#125;)
            </code>

            <br />

            <p>Using Map.forEach():</p>

            <code>result</code>

            <br />

            <p>
                apples = 500

                <br />

                bananas = 300

                <br />

                oranges = 200
            </p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The entries() Method</h2>

        <p>The<code style={{color:'blue'}}>entries()</code> method returns an iterator object with the [key, values] in a Map:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Map</code>

                <br />

                <code style={{color:'blue'}}>const</code> fruits = <code style={{color:'blue'}}>new</code> Map([
                    
                <br />

                [<code style={{color:'#5d0000'}}>"apples"</code>, <code style={{color:'red'}}>500</code>],

                <br />

                [<code style={{color:'#5d0000'}}>"bananas"</code>, <code style={{color:'red'}}>300</code>],
                
                <br />

                [<code style={{color:'#5d0000'}}>"oranges"</code>, <code style={{color:'red'}}>200</code>]

                <br />

                ]);
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>// List all entries</code>

            <br />

            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;
            </code>

            <code>
            <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code>x of fruits.entries()) &#123;

                <br />

                text += x + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                <br />
                
                &#125;
            </code>

            <br />

            <p>Using Map.entries():</p>

            <code>result</code>

            <br />

            <p>
                apples,500

                <br />

                bananas,300

                <br />

                oranges,200
            </p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Browser Support</h2>

        <p>JavaScript Maps are supported in all browsers, exempt Internet Explorer.</p>
    </main>
  )
}

export default JavaScriptMaps