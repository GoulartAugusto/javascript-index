import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptHoisting = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Hoisting</h1>

        <p>Hoisting is JavaScript's default behavior of moving declarations to the top.</p>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Declarations are Hoisted</h2>

        <p>In JavaScript, a variable can be declared after it has been used.</p>

        <p>In other words; a variable can be used before it has been declared.</p>

        <p><b>Example 1</b> gives the same result as <b>Example 2</b></p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 1</h3>

            <code>
                x = <code style={{color:'red'}}>5</code> <code style={{color:'green'}}>// Assing 5 to x</code>

                <br />
                <br />

                elem = document.getElementById("demo"); <code style={{color:'green'}}>// Find an element</code>

                <br />

                elem.innerHTML = x; <code style={{color:'green'}}>// Display x in the element</code>

                <br />
                <br />
                
                <code style={{color:'blue'}}>var</code> x; <code style={{color:'green'}}>// Declare x</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 2</h3>

            <code>
                <code style={{color:'blue'}}>var</code> x; <code style={{color:'green'}}>// Declare x</code>

                <br />

                x = <code style={{color:'red'}}>5</code> <code style={{color:'green'}}>// Assing 5 to x</code>

                <br />
                <br />

                elem = document.getElementById("demo"); <code style={{color:'green'}}>// Find an element</code>

                <br />

                elem.innerHTML = x; <code style={{color:'green'}}>// Display x in the element</code>

                <br />
                
                
            </code>
        </div>

        <br />

        <p>To understand this, you have to understand the term "hoisting".</p>

        <p>Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).</p>

        {/* Just a mark to separete sections */}
        
        <h2>The let and const Keywords</h2>

        <p>Variables defined with <code style={{color:'blue'}}>let</code> and <code style={{color:'blue'}}>const</code> are hoisted to the top of the block, but not <i>initialized</i>.</p>

        <p>Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.</p>

        <p>Using a <code style={{color:'blue'}}>let</code> variable before it is declared will result in a <code style={{color:'red'}}>ReferenceError</code>.</p>

        <p>The variable is in a "temporal dead zone" from the start of the block until it is declared:</p>

        <div style={{background:"#ffdddd"}}>
            <h3>Example</h3>

            <p>This will result in a <code style={{color:'red'}}>ReferenceError</code> :</p>

            <br />

            <code style={{background:'#cecece'}}>
                <code>carName</code> = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> carName;
            </code>

            <p>With let, you cannot use a variable before it is declared.</p>

            <p>ReferenceError: Cannot access 'carName' before initialization</p>
        </div>

        <br />

        <p>Using a <code style={{color:'blue'}}>const</code> variable before it is declared, is a syntax error, so the code will simply not run.</p>

        <br />

        <div style={{background:"#ffdddd"}}>
            <h3>Example</h3>

            <p>This will not run:</p>

            <br />

            <code style={{background:'#cecece'}}>
                <code>carName</code> = <code style={{color:'#5d0000'}}>"Volvo"</code>;

                <br />

                <code style={{color:'blue'}}>const</code> carName;
            </code>

            <p>With <b>const</b>, you cannot use a variable before it is declared.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Initializations are Not Hoisted</h2>

        <p>JavaScript only hoists declarations, not initializations.</p>

        <p><b>Example 1</b> does <b>not</b> give the same result as <b>Example 2</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 1</h3>

            <code>
                <code style={{color:'blue'}}>var</code> x = <code style={{color:'red'}}>5</code>; <code style={{color:'green'}}>// initialize x</code>

                <br />

                <code style={{color:'blue'}}>var</code> y = <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}>// initialize y</code>


                <br />
                <br />

                elem = document.getElementById("demo"); <code style={{color:'green'}}>// Find an element</code>

                <br />

                elem.innerHTML = x + " " + y; <code style={{color:'green'}}>// Display x and y</code>

                <br />

                <br />

                result

                <br />

                5 7
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example 2</h3>

            <code>
                <code style={{color:'blue'}}>var</code> x = <code style={{color:'red'}}>5</code>; <code style={{color:'green'}}>// initialize x</code>

                <br />
                <br />

                elem = document.getElementById("demo"); <code style={{color:'green'}}>// Find an element</code>

                <br />

                elem.innerHTML = x + " " + y; <code style={{color:'green'}}>// Display x and y</code>

                <br />
                <br />

                <code style={{color:'blue'}}>var</code> y = <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}>// initialize y</code>

                <br />
                <br />

                result

                <br />

                x is 5 and y is undefined
            </code>
        </div>

        <br />

        <p>Does it make sense that y is undefined in the last example?</p>

        <p>This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.</p>

        <p>Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.</p>

        <p>Example 2 is the same as writing:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>var</code> x = <code style={{color:'red'}}>5</code>; <code style={{color:'green'}}>// initialize x</code>

                <br />
                
                <code style={{color:'blue'}}>var</code> y; <code style={{color:'green'}}>// Declare y</code>
                
                <br />
                <br />

                elem = document.getElementById("demo"); <code style={{color:'green'}}>// Find an element</code>

                <br />

                elem.innerHTML = x + " " + y; <code style={{color:'green'}}>// Display x and y</code>

                <br />
                <br />

                y = <code style={{color:'red'}}>7</code>; <code style={{color:'green'}}>// Assing 7 to y</code>


                <br />
                <br />

                result

                <br />

                5 undefined
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Declare Your Variables At the Top!</h2>

        <p>Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.</p>

        <p>If a developer doesn't understand hoisting, programs may contain bugs (erros).</p>

        <p>To avoid bugs, always declare all variables at the beginning of every scope.</p>

        <p>Since this is how JavaScript interprets the code, it is always a good rule.</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>JavaScript in stric mode does not allow variables to be used if they are not declared.</p>
        
            <p>Study <b>"use strict"</b> in the next chapter.</p>
        </div>
    </main>
  )
}

export default JavaScriptHoisting