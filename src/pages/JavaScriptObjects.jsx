import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Car from '../../public/objectExplained.gif';

const JavaScriptObjects = () => {

    function find_max(nums) {
        let max_num = Number
    }
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Objects</h1>

        <h2>Real Life Objects, Properties, and Methods</h2>

        <p>In real life, a car is an <b>object</b>.</p>

        <p>A car has <b>properties</b> like weight and color, and <b>methods</b> like start and stop:</p>

        <br />

        <table>
            <tr>
                <th>Object</th>
                <th>Properties</th>
                <th>Methods</th>
            </tr>
            <tr>
                <td><Image src={Car} width={150} /></td>                    
            </tr>
            <tr>
                <td></td>
                <td>car.name = Fiat</td>
                <td>car.start()</td>
            </tr>
            <tr>
                <td></td>
                <td>car.model = 500</td>
                <td>car.drive()</td>
            </tr>
            <tr>
                <td></td>
                <td>car.weight = 850kg</td>
                <td>car.brake()</td>
            </tr>
            <tr>
                <td></td>
                <td>car.color = white</td>
                <td>car.stop()</td>
            </tr>
        </table>

        <br />

        <p>All cars have the same <b>properties</b>, but the property <b>values</b> differ from car to car.</p>

        <p>All cars have the same <b>methods</b>, but the methods are performed <b>at different times</b>.</p>

        <br />

    {/* Just a mark to separete sections */}

        <h2>JavaScript Objects</h2>

        <p>You have already learned that JavaScript variables are containers for data values.</p>

        <p>This code assigns a <b>simple value</b> (Fiat) to a <b>variable</b> named car:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code><code style={{color: 'blue'}}>let</code> car = <code style={{color: '#5d0000'}}>"Fiat"</code>;</code>
        </div>

        <br />

        <p>Objects are variables too. But objects can contain many values.</p>

        <p>This code assigns <b>many values</b> (Fiat, 500, white) to a <b>variable</b> named car:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code><code style={{color: 'blue'}}>const</code> car = &#123;type:<code style={{color: '#5d0000'}}>"Fiat"</code>, model:<code style={{color: '#5d0000'}}>"500"</code>, color:<code style={{color: '#5d0000'}}>"white"</code>&#125;;</code>
        </div>

        <br />

        <p>The values are written as <b>name:value</b> pairs (name and value separated by a colon).</p>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>It is a common practice to declare objects with the <code style={{color: 'blue'}}>const</code>  keyword.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Object Definition</h2>

        <p>You define (and create) a JavaScript object with an object literal:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color: 'blue'}}>const</code> person = &#123;firstName:<code style={{color: '#5d0000'}}>"John"</code>, lastName:<code style={{color: '#5d0000'}}>"Doe"</code>, age:<code style={{color: 'red'}}>50</code>, eyeColor:<code style={{color: '#5d0000'}}>"blue"</code>&#125;;</code>
        </div>
        
        <br />

        <p>Spaces and line breaks are not important. An object definition can span multiple lines:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color: 'blue'}}>const</code> person = &#123; 
            <br />
            firstName:<code style={{color: '#5d0000'}}>"John"</code>, 
            <br />
            lastName:<code style={{color: '#5d0000'}}>"Doe"</code>, 
            <br />
            age:<code style={{color: 'red'}}>50</code>, 
            <br />
            eyeColor:<code style={{color: '#5d0000'}}>"blue"</code>
            <br />
            &#125;;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Object Properties</h2>

        <p>The <b>name:values</b> pairs in JavaScript objects are called <b>properties</b>:</p>

        <br />

        <table>
            <tr>
                <th>Property</th>
                <th>Property Value</th>
            </tr>
            <tr>
                <td>firstName</td>
                <td>John</td>
            </tr>
            <tr>
                <td>lastName</td>
                <td>Doe</td>
            </tr>
            <tr>
                <td>age</td>
                <td>50</td>
            </tr>
            <tr>
                <td>eyeColor</td>
                <td>blue</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Accessing Object Properties</h2>
        
        <p>You can access object properties in two ways:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code>objectName.propertyName</code>
        </div>

        <br />

        <p>or</p>
        
        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code>objectName&#91;<code style={{color: '#5d0000'}}>"propertyName"</code>&#93;</code>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example1</h3>
            
            <code>person.lastName;</code>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example2</h3>

            <code>person&#91;<code style={{color: '#5d0000'}}>"lastName"</code>&#93;;</code>
        </div>

        <br />
        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>Javascript objects are containers for <b>named values</b>, called properties.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Object Methods</h2>
        
        <p>Objects can also have <b>methods</b>.</p>

        <p>Methods are <b>actions</b> that can be performed on objects.</p>

        <p>Methods are stored in properties as <b>function definitions</b>.</p>

        <br />

        <table>
            <tr>
                <th>Property</th>
                <th>Property Value</th>
            </tr>
            <tr>
                <td>firstName</td>
                <td>John</td>
            </tr>
            <tr>
                <td>lastName</td>
                <td>Doe</td>
            </tr>
            <tr>
                <td>age</td>
                <td>50</td>
            </tr>
            <tr>
                <td>eyeColor</td>
                <td>blue</td>
            </tr>
            <tr>
                <td>fullName</td>
                <td>function() &#123;return this.firstName + " " + this.lastName;&#125;</td>
            </tr>
        </table>

        <br />

        <div style={{backgroundColor: 'lightyellow'}}>
            <p>A method is a function stored as a property.</p>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color: 'blue'}}>const</code> person = &#123; 
            <br />
            firstName: <code style={{color: '#5d0000'}}>"John"</code>, 
            <br />
            lastName: <code style={{color: '#5d0000'}}>"Doe"</code>, 
            <br />
            id: <code style={{color: 'red'}}>5577</code>, 
            <br />
            fullName: <code style={{color: 'blue'}}>function</code>() &#123;
            <br />
            <code style={{color: 'blue'}}>return</code> <code style={{color: 'blue'}}>this</code>.firstName + <code style={{color: '#5d0000'}}>" "</code> + <code style={{color: 'blue'}}>this</code>.lastName;
            <br />
            &#125;
            &#125;;
            <br />
            &#125;;</code>
        </div>

        <br />

        <p>In the example above, <code style={{color: 'blue'}}>this</code> refers to the person object.</p>

        <p>I.E. <b>this.firstName</b> means the <b>firstName</b> property of <b>this</b>.</p>

        <p>I.E. <b>this.firstName</b> means the <b>firstName</b> property of <b>person</b></p>

        <br />

        <br />
        
        {/* Just a mark to separete sections */}

        <h1 style={{fontWeight: '300'}}>What is <b>this</b>?</h1>

        <p>In JavaScript, the <code style={{color: 'blue'}}>this</code> keyword refers to an <b>object</b>.</p>

        <p><b>Which</b> object depends on how <code style={{color: 'blue'}}>this</code> is being invoked (used or called).</p>

        <p>The <code style={{color: 'blue'}}>this</code> keyword refers to different objects depending on how it is used.</p>

        <br />

        <ul style={{backgroundColor: '#cecece'}}>
            <li>In an object method, <code style={{color: 'blue'}}>this</code> refers to the <b>object</b>.</li>
            <li>Alone, <code style={{color: 'blue'}}>this</code> refers to the <b>global object.</b></li>
            <li>In a function, <code style={{color: 'blue'}}>this</code> refers to the <b>global object.</b></li>
            <li>In a function, in strict mode, <code style={{color: 'blue'}}>this</code> is <code style={{color: 'blue'}}>undefined</code></li>
            <li>In a event, <code style={{color: 'blue'}}>this</code> refers to the <b>element</b> that received the event.</li>
            <li>Methods like <code style={{color: 'blue'}}>call()</code>, <code style={{color: 'blue'}}>apply()</code>, and <code style={{color: 'blue'}}>bind()</code> can refer <code style={{color: 'blue'}}>this</code> to <b>any object.</b></li>
        </ul>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>
            <p><code style={{color: 'blue'}}>this</code> is not a varialbe. It is a keyword. You cannot change the value of <code style={{color: 'blue'}}>this</code>.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h1 style={{fontWeight: '300'}}>The <b>this</b> keyword</h1>

        <p>In a function definition, <code style={{color: 'blue'}}>this</code> refers to the "owner" of function.</p>

        <p>In the example above, <code style={{color: 'blue'}}>this</code> is the <b>person object</b> that "owns" the <code style={{color: 'blue'}}>fullName</code> function.</p>

        <p>In other words, <code style={{color: 'blue'}}>this.firstName</code> means the <code style={{color: 'blue'}}>firstName</code> property of <b>this object.</b></p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Accessing Object Methods</h2>

        <p>You access an object method with the following syntax:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code>objectName.methodName()</code>
        </div>

        <br />
        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>
            <code>name = person.fullName();</code>
        </div>

        <br />

        <p>If you access a method <b>without</b> the () parentheses, it will return the <b>function definition:</b></p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code>name = person.fullName;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Do Not Declare Strings, Numbers, and Booleans as Objects!</h2>

        <p>When a JavaScript variable is declared with the keyword "new", the variable is created as an object:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <code>x = <code style={{color: 'blue'}}>new</code> String(); <code style={{color: 'green'}}>// Declares x as a String object</code></code>

            <br />

            <code>y = <code style={{color: 'blue'}}>new</code> Number(); <code style={{color: 'green'}}>// Declares y as a Number object</code></code>

            <br />

            <code>z = <code style={{color: 'blue'}}>new</code> Boolean(); <code style={{color: 'green'}}>// Declares z as a Boolean object</code></code>
        </div>

        <br />

        <p>Avoid <code style={{color: 'blue'}}>String</code>, <code style={{color: 'blue'}}>Number</code>, and <code style={{color: 'blue'}}>Boolean</code> objects. They complicate your code and slow down exection speed.</p>
    </main>
  )
}

export default JavaScriptObjects