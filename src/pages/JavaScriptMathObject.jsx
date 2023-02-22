import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptMathObject = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Math Object</h1>

        <div style={{background:'#bbffbb'}}>
            <br />
            <p>The JavaScript Math object allows you to perform mathematical tasks on numbers.</p>
            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.PI;</code>

            <br />

            <p>Math.PI returns the ratio of a circle's circumference to its diameter:</p>

            <p>3.141592653589793</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Math Object</h2>

        <p>Unlike other objects, the Math object has no constructor.</p>

        <p>The Math object is static.</p>

        <p>All methods and properties can be used without creating a Math object first.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math Properties (Constants)</h2>

        <p>The syntax for any Math property is : <code style={{color:'blue'}}>Math.property</code>.</p>

        <p>JavaScript provides 8 mathematical constants that can be accessed as Math properties:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.E <code style={{color:'green'}}>// returns Euler's number</code></code>

            <br />

            <code>Math.PI <code style={{color:'green'}}>// returns PI</code></code>

            <br />

            <code>Math.SQRT2 <code style={{color:'green'}}>// returns the square root of 2</code></code>

            <br />

            <code>Math.SQRT1_2 <code style={{color:'green'}}>// returns the square root of 1/2</code></code>

            <br />

            <code>Math.LN2 <code style={{color:'green'}}>// returns the natural logarithm of 2</code></code>

            <br />

            <code>Math.LN10 <code style={{color:'green'}}>// returns the natural logarithm of 10</code></code>

            <br />

            <code>Math.LOG2E <code style={{color:'green'}}>// returns base 2 logarithm of E</code></code>

            <br />

            <code>Math.LOG10E <code style={{color:'green'}}>// returns base 10 logarithm of E</code></code>

            <br />
            
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math Methods</h2>

        <p>The syntax for Math any methods is : <code style={{color:'blue'}}>Math.method(number)</code></p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Number to Integer</h2>

        <p>There are 4 common methods to round a number to an integer:</p>

        <br />

        <table style={{background:'#cecece'}}>
            <tr>
                <td>Math.round(x)</td>
                <td>Returns x rounded to its nearest integer</td>
            </tr>
            <tr>
                <td>Math.ceil(x)</td>
                <td>Returns x rounded up to its nearest integer</td>
            </tr>
            <tr>
                <td>Math.floor(x)</td>
                <td>Returns x rounded down to its nearest integer</td>
            </tr>
            <tr>
                <td>Math.trunc(x)</td>
                <td>Returns the integer part of x (new in ES6)</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.round()</h2>

        <p><code style={{color:'blue'}}>Math.round(x)</code> returns the nearest integer:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.round(<code style={{color:'red'}}>4.6</code>);</code>

            <br />

            <p>Math.round(x) returns the value of x rounded to its nearest integer:</p>

            <p>5</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.round(<code style={{color:'red'}}>4.5</code>);</code>

            <br />

            <p>Math.round(x) returns the value of x rounded to its nearest integer:</p>

            <p>5</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.round(<code style={{color:'red'}}>4.4</code>);</code>

            <br />

            <p>Math.round(x) returns the value of x rounded to its nearest integer:</p>

            <p>4</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.ceil()</h2>

        <p><code style={{color:"blue"}}>Math.ceil(x)</code> returns the value of x rounded <b>up</b> to its nearest integer:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.ceil(<code style={{color:'red'}}>4.9</code>);</code>

            <br />
            
            <code>Math.ceil(<code style={{color:'red'}}>4.7</code>);</code>

            <br />

            <code>Math.ceil(<code style={{color:'red'}}>4.4</code>);</code>

            <br />

            <code>Math.ceil(<code style={{color:'red'}}>4.2</code>);</code>

            <br />

            <code>Math.ceil(-<code style={{color:'red'}}>4.2</code>);</code>

            <br />

            <br />

            <p>Math.ceil() rounds a number up to its nearest integer:</p>

            <p>5</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.floor()</h2>

        <p><code style={{color:'blue'}}>Math.floor(x)</code> returns the value of x rounded <b>down</b> to its nearest integer:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.floor(<code style={{color:'red'}}>4.9</code>);</code>

            <br />
            
            <code>Math.floor(<code style={{color:'red'}}>4.7</code>);</code>

            <br />

            <code>Math.floor(<code style={{color:'red'}}>4.4</code>);</code>

            <br />

            <code>Math.floor(<code style={{color:'red'}}>4.2</code>);</code>

            <br />

            <code>Math.floor(-<code style={{color:'red'}}>4.2</code>);</code>

            <br />

            <br />

            <p>Math.floor(x) returns the value of x rounded down to its nearest integer:</p>

            <p>4</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.trunc()</h2>

        <p><code style={{color:'blue'}}>Math.trunc(x)</code> returns the integer part of x:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.floor(<code style={{color:'red'}}>4.9</code>);</code>

            <br />
            
            <code>Math.floor(<code style={{color:'red'}}>4.7</code>);</code>

            <br />

            <code>Math.floor(<code style={{color:'red'}}>4.4</code>);</code>

            <br />

            <code>Math.floor(<code style={{color:'red'}}>4.2</code>);</code>

            <br />

            <code>Math.floor(-<code style={{color:'red'}}>4.2</code>);</code>

            <br />

            <br />

            <p>Math.trunc(x) returns the integer part of x:</p>

            <p>4</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.sign()</h2>

        <p><code style={{color:'blue'}}>Math.sign(x)</code> returns if x is negative, null or positive:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.sign(-<code style={{color:'red'}}>4</code>);</code>

            <br />
            
            <code>Math.sign(<code style={{color:'red'}}>0</code>);</code>

            <br />

            <code>Math.sign(<code style={{color:'red'}}>4</code>);</code>

            <br />

            <br />

            <p>Math.sign(x) returns if x is negative, null or positive:</p>

            <p>1</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <code>Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.</code>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.pow()</h2>

        <p><code style={{color:'blue'}}>Math.pow(x, y)</code> returns the value of x to the power of y:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.pow(<code style={{color:'red'}}>8</code>, <code style={{color:'red'}}>2</code>);</code>

            <br />

            <br />

            <p>Math.pow(x,y) returns the value of x to the power of y:</p>

            <p>64</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.sqrt()</h2>

        <p><code style={{color:'blue'}}>Math.sqrt(x)</code> returns the square root of x:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.sqrt(<code style={{color:'red'}}>64</code>);</code>

            <br />

            <br />

            <p>Math.sqrt(x) returns the square root of x:</p>

            <p>8</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.abs()</h2>

        <p><code style={{color:'blue'}}>Math.abs(x)</code> returns the absolute (positive) value of x:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.abs(-<code style={{color:'red'}}>4.7</code>);</code>

            <br />

            <br />

            <p>Math.abs(x) returns the absolute (positive) value of x:</p>

            <p>4.7</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.sin()</h2>

        <p><code style={{color:'blue'}}>Math.sin(x)</code> returns the sine (a value between -1 and 1) of the angle x (given in radians).</p>

        <p>If you want to use degrees instead of radians, you have to convert degrees to radians:</p>

        <p>Angle in radians = Angle in degrees x PI / 180.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.sin(<code style={{color:'red'}}>90</code> * Math.PI / <code style={{color:'red'}}>180</code>); <code style={{color:'green'}}> // returns 1 (the sine of 90 degrees)</code></code>

            <br />

            <p>Math.sin(x) returns the sin of x (given in radians):</p>

            <p>Angle in radians = (angle in degrees) * PI / 180.</p>

            <p>The sine value of 90 degrees is 1</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.cos()</h2>

        <p><code style={{color:'blue'}}>Math.cos(x)</code> returns the cosine (a value between -1 and 1) of the angle x (given in radians).</p>

        <p>If you want to use degrees instead of radians, you have to convert degrees to radians:</p>

        <p>Angle in radians = Angle in degrees x PI / 180.</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.cos(<code style={{color:'red'}}>0</code> * Math.PI / <code style={{color:'red'}}>180</code>); <code style={{color:'green'}}> // returns 1 (the cos of 0 degrees)</code></code>

            <br />

            <p>Math.cos(x) returns the cosine of x (given in radians):</p>

            <p>Angle in radians = (angle in degrees) * PI / 180.</p>

            <p>The cosine value of 0 degrees is 1</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.min() and Math.max()</h2>

        <p><code style={{color:'blue'}}>Math.min()</code> and <code style={{color:'blue'}}>Math.max()</code> can be used to find the lowest or highest value in a list of arguments:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.min(<code style={{color:'red'}}>0</code>, <code style={{color:'red'}}>150</code>, <code style={{color:'red'}}>30</code>, <code style={{color:'red'}}>20</code>, -<code style={{color:'red'}}>8</code>, -<code style={{color:'red'}}>200</code>,);</code>

            <br />

            <p>Math.min() returns the lowest value in a list of arguments:</p>

            <p>-200</p>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.max(<code style={{color:'red'}}>0</code>, <code style={{color:'red'}}>150</code>, <code style={{color:'red'}}>30</code>, <code style={{color:'red'}}>20</code>, -<code style={{color:'red'}}>8</code>, -<code style={{color:'red'}}>200</code>,);</code>

            <br />

            <p>Math.max() returns the highest value in a list of arguments.</p>

            <p>150</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Math.random()</h2>

        <p><code style={{color:'blue'}}>Math.random()</code> returns a random number between 0 (inclusive), and 1 (exclusive):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.random();</code>

            <br />

            <p>Math.random() returns a random number between 0 and 1:</p>

            <p>0.8140765989350662</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>You will learn more about <code style={{color:'blue'}}>Math.random()</code> in the next chapter of this tutorial.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Math.log() Method</h2>

        <p><code style={{color:'blue'}}>Math.log(x)</code> returns the natural logarithm of x.</p>

        <p>The natural logarithm returns the time needed to reach a certain level of growth:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.log(<code style={{color:'red'}}>1</code>);</code>

            <br />

            <p>Math.log() returns the natural logarithm of a number:</p>

            <p>0</p>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.log(<code style={{color:'red'}}>2</code>);</code>

            <br />

            <p>Math.log() returns the natural logarithm of a number:</p>

            <p>0.6931471805599453</p>

        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Math.log(<code style={{color:'red'}}>3</code>);</code>

            <br />

            <p>Math.log() returns the natural logarithm of a number:</p>

            <p>1.0986122886681096</p>

        </div>

        <br />

        <p>Math.E and Math.log() are twins.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <p>How many times must we multiply Math.E to get 10?</p>

            <code>Math.log(<code style={{color:'red'}}>10</code>);</code>

            <br />

            <p>How many times must we multiply Math.E to get 10?</p>

            <p>2.302585092994046</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>The Math.log2() Method</h2>

        <p><code style={{color:'blue'}}>Math.log2(x)</code> returns the base 2 logarithm of x.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <p>How many times must we multiply 2 to get 8?</p>

            <code>Math.log2(<code style={{color:'red'}}>8</code>);</code>

            <br />

            <p>Math.log2() returns the base 2 logarithm of a number.</p>

            <p>How many times must we multiply 2 to get 8?</p>

            <p>3</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Math.log10() Method</h2>

        <p><code style={{color:'blue'}}>Math.log10(x)</code> returns the base 10 logarithm of x.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <p>How many times must we multiply 10 to get 1000?</p>

            <code>Math.log10(<code style={{color:'red'}}>1000</code>);</code>

            <br />

            <p>Math.log10() returns the base 10 logarithm of a number.</p>

            <p>How many times must we multiply 10 to get 1000?</p>

            <p>3</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <h3>Complete Math Reference</h3>

            <p>For a complete reference, go to our <Link href='https://www.w3schools.com/jsref/jsref_obj_math.asp' target='_blank'>Complete Math Object Reference</Link>.</p>

            <p>The reference contains descriptions and examples of all Math properties and methods.</p>

            <br />

        </div>



    </main>
  )
}

export default JavaScriptMathObject