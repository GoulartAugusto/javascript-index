import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptJSON = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript JSON</h1>

        {/* Just a mark to separete sections */}

        <p>JSON is a format for storing and transporting data.</p>

        <p>JSON is often used when data is sent from a server to a web page.</p>

        {/* Just a mark to separete sections */}

        <h2>What is JSON</h2>

        <ul>
            <li>JSON stands for JavaScript Object Notation</li>
            <li>JSON is a lightweight data interchange format</li>
            <li>JSON is language independent *</li>
            <li>JSON is "self-describing" and easy to understand</li>
        </ul>

        <p>* THe JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.</p>

        {/* Just a mark to separete sections */}

        <h2>JSON Example</h2>

        <p>This JSON syntax defines an employees object: an array of 3 employee records (objects):</p>

        <div style={{background:'#cecece'}}>
            <h3>JSON Example</h3>

            <br />

            <code>
                &#123;

                <br />

                <code style={{color:"#5d0000"}}>"employees"</code>: [

                <br />
                
                &#123; <code style={{color:"#5d0000"}}>"firstName"</code>: <code style={{color:"#5d0000"}}>"John"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Doe"</code>&#125;,

                <br />

                &#123; <code style={{color:"#5d0000"}}>"firstName"</code>: <code style={{color:"#5d0000"}}>"Anna"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Smith"</code>&#125;,

                <br />

                &#123; <code style={{color:"#5d0000"}}>"firstName"</code>: <code style={{color:"#5d0000"}}>"Peter"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Jones"</code>&#125;

                <br />

                ]

                <br />

                &#125;                
            </code>
        </div>

        {/* Just a mark to separete sections */}

        <h2>The JSON Format Evaluates to JavaScript Objects</h2>

        <p>The JSON format is syntactically identical to the code for crating JavaScript objects.</p>

        <p>Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects</p>

        {/* Just a mark to separete sections */}
        
        <h2>JSON Syntax Rules</h2>
        
        <ul>
            <li>Data is in name/value pairs</li>
            <li>Data is separated by commas</li>
            <li>Crly braces hold objects</li>
            <li>Square brackets hold arrays</li>
        </ul>

        {/* Just a mark to separete sections */}

        <h2>JSON Data - A Name and a Value</h2>

        <p>JSON data is written as name/value pairs, just like JavaScript object properties.</p>

        <p>A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:</p>
        
        <div style={{background:'#cecece'}}>
            <code style={{color:"#5d0000"}}>"firstName":"Jonh"</code>
        </div>

        <br />
        
        <div style={{background:"lightyellow"}}>
            <br />

            <p>JSON names require double quotes. JavaScript names do not.</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}
        
        <h2>JSON Objects</h2>

        <p>JSON objects are written inside curly braces.</p>

        <p>Just like in JavaScript, objects can contain multiple name/value pairs:</p>

        <div style={{background:'#cecece'}}>
            &#123;<code style={{color:"#5d0000"}}>"firstName":"Jonh"</code>, <code style={{color:"#5d0000"}}>"lastName":"Doe"</code>&#125;
        </div>        


        {/* Just a mark to separete sections */}

        <h2>JSON Arrays</h2>

        <p>JSON arrays are written inside square brackets.</p>

        <p>Just like in JavaScript, an array can contain objects:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                &#123;

                <br />

                <code style={{color:"#5d0000"}}>"employees"</code>: [

                <br />
                
                &#123; <code style={{color:"#5d0000"}}>"firstName"</code>: <code style={{color:"#5d0000"}}>"John"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Doe"</code>&#125;,

                <br />

                &#123; <code style={{color:"#5d0000"}}>"firstName"</code>: <code style={{color:"#5d0000"}}>"Anna"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Smith"</code>&#125;,

                <br />

                &#123; <code style={{color:"#5d0000"}}>"firstName"</code>: <code style={{color:"#5d0000"}}>"Peter"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Jones"</code>&#125;

                <br />

                ]

                <br />

                &#125;                
            </code>
        </div>

        <p>In the example above, the object "employees" is an array. It contains three objects.</p>

        <p>Each object is a record of a person (with a first name and a last name).</p>

        {/* Just a mark to separete sections */}

        <h3>Converting a JSON Text to a JavaScript Object</h3>
        
        <p>A common use of JSON is to read data from a web server, and display the data in a web page.</p>

        <p>For simplicity, this can be demostrated using a string as input.</p>

        <p>First, create a JavaScript string containing JSON syntax:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:"#5d0000"}}>'  &#123; "employees" : [ </code> + 

                <br />
                
                <code style={{color:"#5d0000"}}>'&#123; "firstName":</code> <code style={{color:"#5d0000"}}>"John"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Doe"&#125;, </code> +

                <br />

                <code style={{color:"#5d0000"}}>'&#123; "firstName":</code> <code style={{color:"#5d0000"}}>"Anna"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Smith"&#125;, </code> +

                <br />

                <code style={{color:"#5d0000"}}>'&#123; "firstName":</code> <code style={{color:"#5d0000"}}>"Peter"</code>, <code style={{color:"#5d0000"}}>"lastName"</code>: <code style={{color:"#5d0000"}}>"Jones"&#125; ] &#125; </code>;        
            </code>
        </div>

        <p>Then, use the JavaScript built-in function <code style={{color:'blue'}}>JSON.parse()</code> to convert the string into a JavaScript object:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <code><code style={{color:'blue'}}>const</code> object = JSON.parse(text);</code>
        </div>

        <p>Finally, use the new JavaScript object in your page:</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <br />

            <code>
                <code>&lt;p id="demo"&gt;&lt;/p&ht;</code>

                <br />
                <br />

                <code>&lt;script&gt;</code>

                <br />

                document.getElementByid("demo").innerHTML = 

                <br />

                obj.employees[1]. firstName + " " + obj.employees[1].lastName;

                <br />

                <code>&lt;/script&gt;</code>

            </code>

            <br />

            <p>the result will be:</p>

            <code>Anna Smith</code>
        </div>
    </main>
  )
}

export default JavaScriptJSON