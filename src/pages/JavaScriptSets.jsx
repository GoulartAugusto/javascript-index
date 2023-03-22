import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptSets = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Sets</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:'#ddffdd'}}>
            <br />

            <p>A JavaScript Set is a collection of unique values.</p>

            <p>Each value can only occur once in a Set.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Essential Set Methods</h2>

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>new Set()</td>
                <td>Creates a new Set</td>
            </tr>
            <tr>
                <td>add()</td>
                <td>Adds a new element to the Set</td>
            </tr>
            <tr>
                <td>delete()</td>
                <td>Removes an element from a Set</td>
            </tr>
            <tr>
                <td>has()</td>
                <td>Returns true if a value exists in the Set</td>
            </tr>
            <tr>
                <td>forEach()</td>
                <td>Invokes a callback for each element in the Set</td>
            </tr>
            <tr>
                <td>values()</td>
                <td>Returns an iterator with all the values in a Set</td>
            </tr>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>size</td>
                <td>Returns the number of elements in a Set</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>How to Create a Set</h2>

        <p>You can create a JavaScript Set by:</p>

        <ul>
            <li>Passing an Array to <code style={{color:'blue'}}>new Set()</code></li>
            <li>Create a new Set and use <code style={{color:'blue'}}>add()</code> to add values</li>
            <li>Create a new Set and use <code style={{color:'blue'}}>add()</code> to add variables</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The new Set() Method</h2>

        <p>Pass an Array to the new Set() constructor:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set([<code style={{color:'#5d0000'}}>"a"</code>, <code style={{color:'#5d0000'}}>"b"</code>, <code style={{color:'#5d0000'}}>"c"</code>]);
            </code>

            <br />

            <p>Create a Set from an Array:</p>

            <code>letters.size</code>
            
            <p>3</p>
        </div>

        <br />

        <p>Create a Set and add values:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set();
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>// Add values to the Set</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"a"</code>);</code>
            
            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"b"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />

            <p>Add values to a Set:</p>

            <code>letters.size</code>
            
            <p>3</p>
        </div>

        <br />

        <p>Create a Set and add variables:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set();
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>// Create Variables</code>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> a = <code style={{color:'#5d0000'}}>"a"</code>;
            </code>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> b = <code style={{color:'#5d0000'}}>"b"</code>;
            </code>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> c = <code style={{color:'#5d0000'}}>"c"</code>;
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>// Add Variables to the Set</code>

            <br />

            <code>letters.add(a);</code>
            
            <br />

            <code>letters.add(b);</code>

            <br />

            <code>letters.add(c);</code>

            <br />

            <p>Add variables to a Set:</p>

            <code>letters.size</code>
            
            <p>3</p>
        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>The add() Method</h2>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a newSet</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set([<code style={{color:'#5d0000'}}>"a"</code>, <code style={{color:'#5d0000'}}>"b"</code>, <code style={{color:'#5d0000'}}>"c"</code>]);
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>//  Add a new Element</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"d"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"e"</code>);</code>

            <br />
            <br />

            <code style={{color:'green'}}>// Display set.size</code>

            <br />

            <code>letters.size</code>

            <p>Adding new elements to a Set:</p>
            
            <p>5</p>
        </div>

        <br />

        <p>If you add equal elements, only the first will be saved:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create a Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set();
            </code>

            <br />
            <br />

            <code style={{color:'green'}}>// Add values to the Set</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"a"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"b"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />
            
            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />

            <code>letters.add(<code style={{color:'#5d0000'}}>"c"</code>);</code>

            <br />
            <br />

            <code style={{color:'green'}}>// Display set.size</code>

            <br />

            <code>letters.size</code>

            <p>Adding equal elements to a Set:</p>
            
            <p>3</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The forEach() Method</h2>

        <p>The <code style={{color:'blue'}}>forEach()</code> method invokes (calls) a function for each Set element:</p>

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

                <code>
                    letters.forEach (<code style={{color:'blue'}}>function</code>(value) &#123;

                    <br />

                    text += value + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                    <br />
                    
                    &#125;)
                </code>
            </code>

            <br />

            <p>forEach() calls a function for each element:</p>
            
            <p>a</p>
            <p>b</p>
            <p>c</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The values() Method</h2>

        <p>The <code style={{color:'blue'}}>values()</code> method returns a new iterator object containing all the values in a Set:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set([<code style={{color:'#5d0000'}}>"a"</code>, <code style={{color:'#5d0000'}}>"b"</code>, <code style={{color:'#5d0000'}}>"c"</code>]);

                <br />
                <br />

                <code style={{color:'green'}}>// Display set.values()</code>

                <p>Set.values() returns a Set Iterator:</p>

                <code>[object Set Iterator]</code>
            </code>
        </div>

        <br />

        <p>Now you can use the Iterator object to access the elements:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'green'}}>// Create Set</code>

                <br />

                <code style={{color:'blue'}}>const</code> letters = <code style={{color:'blue'}}>new</code> Set([<code style={{color:'#5d0000'}}>"a"</code>, <code style={{color:'#5d0000'}}>"b"</code>, <code style={{color:'#5d0000'}}>"c"</code>]);

                <br />
                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code>
                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code> x <code style={{color:'blue'}}>of</code> letters.values())
                
                <br />

                 &#123;

                    <br />

                    text += x + <code style={{color:'#5d0000'}}>"&lt;br&gt;"</code>;

                    <br />
                    
                    &#125;
                </code>
            </code>

            <p>Iterating Set values:</p>

            <p>a</p>
            <p>b</p>
            <p>c</p>
        </div>
    </main>
  )
}

export default JavaScriptSets