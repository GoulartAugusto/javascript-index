import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScripttypeof = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript typeof</h1>

        {/* Just a mark to separete sections */}

        <p>In JavaScript there are 5 different data types that can contain values:</p>

        <ul>
            <li><code style={{color:'blue'}}>string</code></li>
            <li><code style={{color:'blue'}}>number</code></li>
            <li><code style={{color:'blue'}}>boolean</code></li>
            <li><code style={{color:'blue'}}>object</code></li>
            <li><code style={{color:'blue'}}>function</code></li>
        </ul>

        <br />

        <p>There are 6 types of objects:</p>

        <ul>
            <li><code style={{color:'blue'}}>Object</code></li>
            <li><code style={{color:'blue'}}>Date</code></li>
            <li><code style={{color:'blue'}}>Array</code></li>
            <li><code style={{color:'blue'}}>String</code></li>
            <li><code style={{color:'blue'}}>Number</code></li>
            <li><code style={{color:'blue'}}>Boolean</code></li>
        </ul>

        <br />

        <p>And 2 data types that cannot contain values:</p>
        
        <ul>
            <li><code style={{color:'blue'}}>null</code></li>
            <li><code style={{color:'blue'}}>undefined</code></li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The typeof Operator</h2>

        <p>You can use the <code style={{color:'blue'}}>typeof</code> operator to find the data type of a JavaScript variable.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>"John"</code> <code style={{color:'green'}}>// Return "string"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>3.14</code> <code style={{color:'green'}}>// Return "number"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>NaN</code> <code style={{color:'green'}}>// Return "number"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>false</code> <code style={{color:'green'}}>// Return "boolean"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> [<code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>3</code>, <code style={{color:'red'}}>4</code>] <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> &#123;name:<code style={{color:'#5d0000'}}>'John'</code>, age:<code style={{color:'red'}}>34</code>&#125; <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>new</code> Date() <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>function</code> () &#123;&#125; <code style={{color:'green'}}>// Return "function"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> myCar <code style={{color:'green'}}>// Return "undefined"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}>// Return "object"</code>
            </code>
        </div>

        <br />

        <p>Please observe:</p>

        <ul>
            <li>The data type of NaN is number</li>
            <li>The data type of an array is object</li>
            <li>The data type of a date is object</li>
            <li>The data type of null is object</li>
            <li>The data type of an undefined variable is <b>undefined *</b></li>
            <li>The data type of a variable that has not been assigned a value is also <b>undefined *</b></li>
        </ul>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>You cannot use <code style={{color:'blue'}}>typeof</code> to determine if a JavaScript object is an array (or a date).</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Primitive Data</h2>

        <p>A primitive data value is a single simple data value with no additional properties and methods.</p>

        <p>The <code style={{color:'blue'}}>typeof</code> operator can return one of these primitive types:</p>

        <ul>
            <li><code style={{color:'blue'}}>string</code></li>
            <li><code style={{color:'blue'}}>number</code></li>
            <li><code style={{color:'blue'}}>boolean</code></li>
            <li><code style={{color:'blue'}}>undefined</code></li>
        </ul>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>typeof</code> <code style={{color:'#5d0000'}}>"John"</code> <code style={{color:'green'}}>// Return "string"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'red'}}>3.14</code> <code style={{color:'green'}}>// Return "number"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>true</code> <code style={{color:'green'}}>// Return "boolean"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>false</code> <code style={{color:'green'}}>// Return "boolean"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> x <code style={{color:'green'}}>// Returns "undefined" (if x has no value)</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Complex Data</h2>

        <p>The <code style={{color:'blue'}}>typeof</code> operator can return one of two complex types:</p>

        <br />

        <ul>
            <li><code style={{color:'blue'}}>function</code></li>
            <li><code style={{color:'blue'}}>object</code></li>
        </ul>

        <p>The <code style={{color:'blue'}}>typeof</code> operator returns "object" for objects, arrays, and null.</p>

        <p>The <code style={{color:'blue'}}>typeof</code> operator does not return "object" for functions.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>typeof</code> &#123;name: <code style={{color:'#5d0000'}}>'John'</code>, age <code style={{color:'red'}}>34</code>&#125; <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> [<code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>3</code>, <code style={{color:'red'}}>4</code>] <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}>// Return "object"</code>

                <br />

                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>function</code> myFunc() &#123;&#125; <code style={{color:'green'}}>// Return "function"</code>
            </code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>The <code style={{color:'blue'}}>typeof</code> operator returns "<code style={{color:'blue'}}>object</code>" for arrays because in JavaScript arrays are objects.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Data Type of typeof</h2>

        <p>The <code style={{color:'blue'}}>typeof</code> operator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.</p>

        <p>But, the <code style={{color:'blue'}}>typeof</code> operator always <b>returns a string</b> (containing the type of the operand).</p>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>The constructor Property</h2>

        <p>The <code style={{color:'blue'}}>constructor</code> property returns the constructor function for all JavaScript variables.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'#5d0000'}}>"John"</code>.constructor <code style={{color:'green'}}>// Returns function String()</code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>

                <br />

                (<code style={{color:'red'}}>3.14</code>).constructor <code style={{color:'green'}}>// Return function Number()</code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>

                <br />

                <code style={{color:'blue'}}>false</code>.constructor <code style={{color:'green'}}>// Return function Boolean()</code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>

                <br />

                [<code style={{color:'red'}}>1</code>, <code style={{color:'red'}}>2</code>, <code style={{color:'red'}}>3</code>, <code style={{color:'red'}}>4</code>,].constructor <code style={{color:'green'}}>// Return function Array()</code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>

                <br />

                <code>
                    &#123;name:<code style={{color:'#5d0000'}}>'John'</code>, age:<code style={{color:'red'}}>34</code>&#125;.constructor <code style={{color:'green'}}>// Return function Object()</code>
                </code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>

                <br />

                <code style={{color:'blue'}}>new</code> Date().constructor <code style={{color:'green'}}>// Return function Date()</code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>

                <br />

                <code style={{color:'blue'}}>function</code> () &#123;&#125;.constructor <code style={{color:'green'}}>// Return function Function()</code>

                <br />

                <code style={{color:'green'}}>&#123;[native code]&#125;</code>
            </code>

            <p>The constructor property returns the constructor function for a variable or an object.</p>
        </div>

        <p>You can check the constructor property to find out if an object is an <code style={{color:'blue'}}>Array</code> (constains the word "Array"):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>];
            </code>

            <br />
            <br />

            <code>isArray(fruits);</code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> isArray(myArray) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> myArray.constructor.toString().indexOf(<code style={{color:'#5d0000'}}>"Array"</code>) &gt; -<code style={{color:'red'}}>1</code>;
                
                <br />

                &#125;
            </code>

            <p>This "home made" isArray() function returns true when used on an array:</p>

            <p>true</p>
        </div>

        <br />

        <p>Or even simpler, you can check if the object is an <b>Array function</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>const</code> fruits =  [<code style={{color:'#5d0000'}}>"Banana"</code>, <code style={{color:'#5d0000'}}>"Orange"</code>, <code style={{color:'#5d0000'}}>"Apple"</code>, <code style={{color:'#5d0000'}}>"Mango"</code>];
            </code>

            <br />
            <br />

            <code>isArray(fruits);</code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> isArray(myArray) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> myArray.constructor === Array;
                
                <br />

                &#125;
            </code>

            <p>This "home made" isArray() function returns true when used on an array:</p>

            <p>true</p>
        </div>

        <br />

        <p>You can check the constructor property to find out if an object is a <code style={{color:'blue'}}>Date</code> (contains the word "Date"):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>const</code> myDate = <code style={{color:"blue"}}>new</code> Date();
            </code>

            <br />
            <br />

            <code>isDate(myDate);</code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> isDate(myDate) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> myDate.constructor.toString().indexOf(<code style={{color:'#5d0000'}}>"Date"</code>) &gt; -<code style={{color:'red'}}>1</code>;
                
                <br />

                &#125;
            </code>

            <p>This "home made" isDate() function returns true when used on an date:</p>

            <p>true</p>
        </div>

        <br />
        
        <p>Or even simpler, you can check if the object is a <b>Date function</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:"blue"}}>const</code> myDate = <code style={{color:"blue"}}>new</code> Date();
            </code>

            <br />
            <br />

            <code>isDate(myDate);</code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>function</code> isDate(myDate) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> myDate.constructor === Date;
                
                <br />

                &#125;
            </code>

            <p>This "home made" isDate() function returns true when used on an date:</p>

            <p>true</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Undefined</h2>

        <p>In JavaScript, a variable without a value, has the value of <code style={{color:'blue'}}>undefined</code>. The type is also <code style={{color:'blue'}}>undefined</code></p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> car; <code style={{color:'green'}}>// Value is undefined, type is undefined</code>
            </code>

            <p>The value (and the data type) of a variable with no value is undefined.</p>
        </div>

        <br />

        <p>Any variable can be emptied, by setting the value to undefined. The type will also be undefined.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                 car = undefined; <code style={{color:'green'}}>// Value is undefined, type is undefined</code>
            </code>

            <p>Variables can be emptied if you set the value to undefined.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Empty Values</h2>

        <p>An empty value has nothing to do with <code style={{color:'blue'}}>undefined</code>.</p>

        <p>An empty string has both a legal value and a type.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> car = <code style={{color:'#5d0000'}}>""</code>; <code style={{color:'green'}}>// The value is "", the typeof is "string"</code>
            </code>

            <p>An empty string has both a legal value and a type:</p>

            <p>The value is:</p>

            <p>The type is: string</p>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

        <h2>Null</h2>

        <p>In JavaScript <code style={{color:'blue'}}>null</code> is "nothing". It is supposed to be something that doesn't exist.</p>

        <p>Unfortunately, in JavaScript, the data type of <code style={{color:'blue'}}>null</code> is an object.</p>

        <div style={{background:'lightyellow'}}>
            <br />

            <p>You can consider it a bug in JavaScript that <code style={{color:'blue'}}>typeof null</code> is an object. It should be <code style={{color:'blue'}}>null</code>.</p>

            <br />
        </div>

        <br />

        <p>You can empty an object by setting it to <code style={{color:'blue'}}>null</code>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>
            
            <code>
                <code style={{color:'blue'}}>let</code> person = &#123; firstName:<code style={{color:'#5d0000'}}>"John"</code>, lastName:<code style={{color:'#5d0000'}}>"Doe"</code>, age:<code style={{color:'red'}}>50</code>, eyeColor:<code style={{color:'#5d0000'}}>"blue"</code>&#125;
                
                <br />

                person = <code style={{color:'blue'}}>null</code>; <code style={{color:'green'}}>// Now value is null, but type is still an object</code>
            </code>
        </div>

        <br />

        <p>You can also empty an object by setting it to <code style={{color:'blue'}}>undefined</code>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>
            
            <code>
                <code style={{color:'blue'}}>let</code> person = &#123; firstName:<code style={{color:'#5d0000'}}>"John"</code>, lastName:<code style={{color:'#5d0000'}}>"Doe"</code>, age:<code style={{color:'red'}}>50</code>, eyeColor:<code style={{color:'#5d0000'}}>"blue"</code>&#125;
                
                <br />

                person = undefined; <code style={{color:'green'}}>// Now both value and type is undefined</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Difference Between Undefined and Null</h2>

        <p><code style={{color:'blue'}}>undefined</code> and <code style={{color:'blue'}}>null</code> are equal in value but different in type:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <br />

            <code>
                <code style={{color:'blue'}}>typeof</code> undefined <code style={{color:'green'}}>// undefined</code>
            </code>

            <br />

            <code>
                <code style={{color:'blue'}}>typeof</code> <code style={{color:'blue'}}>null</code> <code style={{color:'green'}}>// object</code>
            </code>

            <br />
            <br />

            <code>
                <code style={{color:'blue'}}>null</code> === undefined <code style={{color:'green'}}>// false</code>
            </code>

            <br />

            <code>
                <code style={{color:'blue'}}>null</code> == undefined <code style={{color:'green'}}>// true</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The instanceof Operator</h2>

        <p>The <code style={{color:'blue'}}>instanceof</code> operator returns <code style={{color:'blue'}}>true</code> if an object is an instance of the specified object:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>
                    <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>,<code style={{color:'#5d0000'}}>"BMW"</code>];
                </code>

                <br />
                <br />

                (cars <code style={{color:'blue'}}>instanceof</code> Array);

                <br />

                (cars <code style={{color:'blue'}}>instanceof</code> Object);

                <br />

                (cars <code style={{color:'blue'}}>instanceof</code> String);

                <br />

                (cars <code style={{color:'blue'}}>instanceof</code> Number);
            </code>

            <br />

            <p>The instanceof operator returns true if an object is an instance of a specified object:</p>

            <p>true</p>
            <p>true</p>
            <p>false</p>
            <p>false</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The void Operator</h2>

        <p>The <b>void</b> operator evaluates an expression and returns <b>undefined</b>. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                &lt;<code style={{color:'blue'}}>a</code> <code style={{color:'red'}}>href</code>="javascript:void(0);"&gt;

                <br />

                Useless link

                <br />

                &lt;/<code style={{color:'blue'}}>a</code>&gt;
            </code>

            <br />
            <br />

            <code>
                &lt;<code style={{color:'blue'}}>a</code> <code style={{color:'red'}}>href</code>="javascript:void(document.body.style.backgroundColor='red');"&gt;

                <br />

                Click me to change the background color of de body to red

                <br />

                &lt;/<code style={{color:'blue'}}>a</code>&gt;
            </code>
        </div>
    </main>
  )
}

export default JavaScripttypeof