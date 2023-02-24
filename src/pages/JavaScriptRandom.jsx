import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptRandom = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Random</h1>

        <p><code style={{color:'blue'}}>Math.random()</code> returns a random number between 0 (inclusive),  and 1 (exclusive):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random number:</code>

            <br />

            <code>Math.random();</code>

            <br />

            <p>Math.random() returns a random number between 0 (included) and 1 (excluded):</p>

            <p>0.15436673858338001</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p><code style={{color:'blue'}}>Math.random()</code> always returns a number lower than 1.</p>
        
            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Random Integers</h2>

        <p><code style={{color:'blue'}}>Math.ramdom()</code> used with <code style={{color:'blue'}}>Math.floor()</code> can be used to return random integers.</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>There is no such thing as JavaScript integers.</p>

            <p>We are talking about numbers with no decimals here.</p>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random integer from 0 to 9:</code>

            <br />

            <code>Math.floor(Math.random() * 10);</code>

            <br />

            <p>Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included):</p>

            <p>8</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random integer from 0 to 10:</code>

            <br />

            <code>Math.floor(Math.random() * 11);</code>

            <br />

            <p>Math.floor(Math.random() * 11) returns a random integer between 0 and 10 (both included):</p>

            <p>0</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random integer from 0 to 99:</code>

            <br />

            <code>Math.floor(Math.random() * 100);</code>

            <br />

            <p>Math.floor(Math.random() * 100) returns a random integer between 0 and 99 (both included):</p>

            <p>68</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random integer from 0 to 100:</code>

            <br />

            <code>Math.floor(Math.random() * 101);</code>

            <br />

            <p>Math.floor(Math.random() * 101) returns a random integer between 0 and 100 (both included):</p>

            <p>55</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random integer from 1 to 10:</code>

            <br />

            <code>Math.floor(Math.random() * 10) + <code >1</code>;</code>

            <br />

            <p>Math.floor(Math.random() * 100) returns a random integer between 1 and 10 (both included):</p>

            <p>1</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// Returns a random integer from 1 to 100:</code>

            <br />

            <code>Math.floor(Math.random() * 100) + 1;</code>

            <br />

            <p>Math.floor(Math.random() * 100) + 1 returns a random integer between 1 and 100 (both included):</p>

            <p>62</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>A Proper Random Function</h2>

        <p>As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.</p>

        <p>This JavaScript function always returns a random number between min (included) and max (excluded):</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>function</code> getRndInteger(min, max) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> Math.floor(Math.random() * (max - min) ) + min;</code>

            <br />

            &#125;

            <br />

            <p>getRndInteger(min, max) returns a random number between 0 and 9 (both included):</p>

            <p>if this function was called by a click button a example of number that can be returned is:</p>

            <p>7</p>

        </div>

        <br />

        <p>This JavaScript function always returns a random number between min and max (both included):</p>
        
        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>function</code> getRndInteger(min, max) &#123;</code>

            <br />

            <code><code style={{color:'blue'}}>return</code> Math.floor(Math.random() * (max - min + 1) ) + min;</code>

            <br />

            &#125;

            <br />

            <p>getRndInteger(min, max) returns a random number between 1 and 10 (both included):</p>

            <p>if this function was called by a click button a example of number that can be returned is:</p>

            <p>9</p>

        </div>


    </main>
  )
}

export default JavaScriptRandom