import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptForOf = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript For Of</h1>

        {/* Just a mark to separete sections */}

        <h2>The For Of Loop</h2>

        <p>The JavaScript <code style={{color:'blue'}}>for of</code> statement loops through the values of an iterable object.</p>

        <p>It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <code>
                <code style={{color:'blue'}}>for</code> (variable of iterable) &#123;

                <br />

                <code style={{color:'green'}}> // code block to be executed</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        <p><b>variable</b> - For every iteration the value of the next property is assigned to the variable. Variable can be declared with <code style={{color:'blue'}}>const</code>, <code style={{color:'blue'}}>let</code>, or <code style={{color:'blue'}}>var</code>.</p>

        <p><b>iterable</b> - An object that has iterable properties.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Browser Support</h2>

        <p><b>For/of</b> was added to JavaScript in 2015 (ES6)</p>

        <p>Safari 7 was the first browser to support for of.</p>

        <p><b>For/of</b> is not supported in Internet Explorer.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Looping over an Array</h2>

        <div style={{background:'#cecece'}}>
            <h2>Example</h2>

            <code>
                <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Mini"</code>]
                </code>

                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> x of cars) &#123;

                <br />

                <code>text += x;</code>

                <br />

                &#125;
            </code>

            <br />

            <p>The for of statement loops through the values of any iterable object:</p>

            <ul style={{listStyle:'none'}}>
                <li>BMW</li>
                <li>Volvo</li>
                <li>Mini</li>
            </ul>
        </div>

        {/* Just a mark to separete sections */}

        <h2>Looping over a String</h2>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> language = <code style={{color:'#5d0000'}}>"JavaScript"</code>;
                
                <br />
                <br />

                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;

                <br />

                <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>let</code> x of language) &#123;

                <br />

                <code>text += x;</code>

                <br />

                &#125;
            </code>

            <br />

            <p>The for of statement loops through the values of an iterable object.</p>

            <ul style={{listStyle:'none'}}>
                <li>J</li>
                <li>a</li>
                <li>v</li>
                <li>a</li>
                <li>S</li>
                <li>c</li>
                <li>r</li>
                <li>i</li>
                <li>p</li>
                <li>t</li>
            </ul>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The While Loop</h2>

        <p>The <code style={{color:'blue'}}>while</code> loop and the <code style={{color:'blue'}}>do/while</code> loop are explained in the next chapter.</p>
    </main>
  )
}

export default JavaScriptForOf