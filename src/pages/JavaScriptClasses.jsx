import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptClasses = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Arrow Function</h1>

        {/* Just a mark to separete sections */}

        <div style={{background:'#d9eee1'}}>
            <br />

            <p>ECMAScript 2015m alson known as ES6, introduced JavaScript Classes.</p>

            <p>JavaScript Classes are templaetes for JavaScript Objects.</p>

            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Class Syntax</h2>

        <p>Use the keyword <code style={{color:'blue'}}>class</code> to create a class.</p>

        <p>Always add a method named <code style={{color:'blue'}}>constructor()</code>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <code>
                <code style={{color:'blue'}}>class</code> ClassName &#123;

                <br />

                <code style={{color:'#5d0000'}}>constructor</code>() &#123; . . . &#125;

                <br />

                &#125;

                <br />

                &#125;
            </code>
        </div>

        <br />
        <br />


        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>class</code> Car &#123;

                <br />

                <code style={{color:'#5d0000'}}>constructor</code>(name, year) &#123;

                <br />

                <code style={{color:'blue'}}>this</code>.name = name;

                <br />

                <code style={{color:'blue'}}>this</code>.year = year;

                <br />

                &#125;

                <br />

                &#125;
            </code>
        </div>

        <br />

        <p>This example above creates a class named "Car".</p>

        <p>The class has two initial properties: "name" and "year".</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>A JavaScript class is <b>not</b> an object.</p>

            <p>It is a <b>template</b> for JavaScript objects.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using a Class</h2>
        
        <p>When you have a class, you can use the class to create objects:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> myCar1 = <code style={{color:'blue'}}>new</code> Car(<code style={{color:'#5d0000'}}>"Ford", <code style={{color:'red'}}>2014</code></code>);

                <br />

                <code style={{color:'blue'}}>const</code> myCar2 = <code style={{color:'blue'}}>new</code> Car(<code style={{color:'#5d0000'}}>"Audi", <code style={{color:'red'}}>2023</code></code>);
            </code>

            <br />

            <p>Creating two car objects from a car class:</p>

            <p>Ford Audi</p>
        </div>

        <br />

        <p>The example above uses the <b>Car class</b> to create two <b>Car objects</b>.</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>The constructor method is called automatically when a new object is created.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Constructor Method</h2>

        <p>The cosntructor method is a special method:</p>

        <ul>
            <li>It has to have the exact name "constructor"</li>
            <li>It is executed automatically when a new object is created</li>
            <li>it Is used to initialize object properties</li>
        </ul>

        <br />  

        <p>If you do not define a contructor method, JavaScript will add an empty constructor method.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Class Methods</h2>

        <p>Class methods are created with the same syntax as objects methods.</p>

        <p>Use the keyword <code style={{color:"blue"}}>class</code> to create a class.</p>

        <p>Always add a <code style={{color:"blue"}}>constructor()</code> method.</p>

        <p>Then add any number of methods.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <code>
                <code style={{color:"blue"}}>class</code> ClassName &#123;

                <br />

                constructor() &#123; . . . &#125;

                <br />

                method_1() &#123; . . . &#125;

                <br />

                method_1() &#123; . . . &#125;

                <br />

                method_1() &#123; . . . &#125;
                
                <br />
                
                &#125;
            </code>
        </div>

        <br />

        <p>Create a Class method named "age", that returns the Car age:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>class</code> Car &#123;

                <br />

                <code style={{color:'#5d0000'}}>constructor</code>(name, year) &#123;

                <br />

                <code style={{color:'blue'}}>this</code>.name = name;

                <br />

                <code style={{color:'blue'}}>this</code>.year = year;

                <br />

                &#125;

                <br />

                age() &#123;

                <br />

                <code style={{color:'blue'}}>const</code> date = <code style={{color:'blue'}}>new</code> Date();

                <br />

                <code style={{color:'blue'}}>return</code> date.getFullYear() - <code style={{color:'blue'}}>this</code>.year;

                <br />

                &#125;

                <br />
                
                &#125;

                <br />
                <br />

                <code style={{color:'blue'}}>const</code> myCar = <code style={{color:'blue'}}>new</code> Car(<code style={{color:'#5d0000'}}>"Ford"</code>, <code style={{color:'red'}}>2014</code>);

                <br />

                document.getElementById("demo").innerHTML = <code style={{color:'#5d0000'}}>"My car is "</code> + myCar.age() + <code style={{color:'#5d0000'}}>" years old."</code>;
            </code>

            <br />
            <br />

            <code>How to define and use a Class method.</code>

            <br />
            <br />

            <code>My car is 9 years old.</code>
        </div>

        <br />

        <p>You can send parameters to Class methods:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>class</code> Car &#123;

                <br />

                <code style={{color:'#5d0000'}}>constructor</code>(name, year) &#123;

                <br />

                <code style={{color:'blue'}}>this</code>.name = name;

                <br />

                <code style={{color:'blue'}}>this</code>.year = year;

                <br />

                &#125;

                <br />

                age(x) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> x - <code style={{color:'blue'}}>this</code>.year;

                <br />

                &#125;

                <br />
                
                &#125;

                <br />
                <br />

                <code style={{color:'blue'}}>const</code> date = <code style={{color:'blue'}}>new</code> Date();

                <br />

                <code style={{color:'blue'}}>let</code> year =  date.getFullYear();

                <br />


                <br />
                <br />

                <code style={{color:'blue'}}>const</code> myCar = <code style={{color:'blue'}}>new</code> Car(<code style={{color:'#5d0000'}}>"Ford"</code>, <code style={{color:'red'}}>2014</code>);

                <br />

                document.getElementById("demo").innerHTML = <code style={{color:'#5d0000'}}>"My car is "</code> + myCar.age(year) + <code style={{color:'#5d0000'}}>" years old."</code>;
            </code>

            <br />
            <br />

            <code>Pass a parameter into the "age()" method.</code>

            <br />
            <br />

            <code>My car is 9 years old.</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>Browser Support</h2>

        <p>All versions of browsers since March 2016 have full support for Classes in JavaScript.</p>

        <br />
    </main>
  )
}

export default JavaScriptClasses