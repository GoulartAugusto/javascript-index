import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptArrowFunction = () => {
  return (
    <main className={styles.main}>
      <Link href='/'>Homepage</Link>

      <h1>JavaScript Arrow Function</h1>

      <div style={{background:'#d9eee1'}}>
        <br />

        <p>Arrow functions were introduced in ES6.</p>

        <p>Arrow functions allow us to write shorter function syntax:</p>
        
        <br />

        <code style={{background:'#cecece'}}>
            <code style={{color:"blue"}}>let</code> myFunction = (a, b) =&gt; a * b;
        </code>

      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Before Arrow:</h3>

        <code>
            hello = <code style={{color:'blue'}}>function</code>() &#123;

            <br />

            <code style={{color:'blue'}}>return</code> <code style={{color:'#5d0000'}}>"Hello World!"</code>;

            <br />
            
            &#125;
        </code>
      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>With Arrow Function:</h3>

        <code>
            hello = () =&gt; &#123;

            <br />

            <code style={{color:'blue'}}>return</code> <code style={{color:'#5d0000'}}>"Hello World!"</code>;

            <br />
            
            &#125;
        </code>
      </div>

      <br />

      <p>It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets <i>and</i> the <code style={{color:'blue'}}>return</code> keyword:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Arrow Functions Return Value by Default:</h3>


        <code>
            hello = () =&gt; <code style={{color:'#5d0000'}}>"Hello World!"</code>;
        </code>
      </div>

      <br />

      <div style={{background:'lightyellow'}}>
        <br />

        <p><b>Note:</b> This works only if the function has only one statement.</p>

        <br />
      </div>

      <p>If you have parameters, you pass them inside the parentheses:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
            hello = (val) =&gt; <code style={{color:'#5d0000'}}>"Hello "</code> + val;
        </code>
      </div>

      <p>In fact, if you have only one parameter, you can skip the parentheses as well:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Arrow Function Without Parentheses:</h3>

        <code>
            hellow = val =&gt; <code style={{color:'#5d0000'}}>"Hello "</code> + val;
        </code>
      </div>

      <br />

      {/* Just a mark to separete sections */}
      
      <h2>What About <code style={{color:'blue'}}>this</code>?</h2>

      <p>The handling of <code style={{color:'blue'}}>this</code> is also different in arrow functions compared to regular functions.</p>
      
      <p>In short, with arrow functions there are no binding of <code style={{color:'blue'}}>this</code>.</p>
    
      <p>In regular functions the <code style={{color:'blue'}}>this</code> keyword represented the object that called the function, which could be the window, the document, a button or whatever.</p>
    
      <p>With arrow functions the <code style={{color:'blue'}}>this</code> keyword <i>always</i> represents the object that defined the arrow function.</p>

      <p>Let us take a look at two examples to understand the difference.</p>

      <p>Both examples call a method twice, first when the page loads, and once again when the user clicks a button.</p>

      <p>The first example uses a regular function, and the second example uses an arrow function.</p>

      <p>The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.</p>

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <p>With a regular function <code style={{color:'blue'}}>this</code> represents the object that <i>calls</i> the function:</p>

        <code>
            <code style={{color:'green'}}>// Regular Function:</code>

            <br />

            hello = <code style={{color:'blue'}}>function</code>() &#123;

            <br />

            document.getElementById("demo").innerHTML += <code style={{color:'blue'}}>this</code>;

            <br />

            &#125;

            <br />
            <br />
        
            <code style={{color:'green'}}>// The Window object calls the function::</code>

            <br />

            window.addEventListener("load", hello);

            <br />
            <br />

            <code style={{color:'green'}}>// The Button object calls the function:</code>

            <br />

            document.getElementById("btn").addEventListener("click", hello);
        </code>
      </div>

      <br />

      
      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <p>With an arrow function <code style={{color:'blue'}}>this</code> represents the <i>owner</i> of the function:</p>

        <code>
            <code style={{color:'green'}}>// Arrow Function:</code>

            <br />

            hello = () =&gt; &#123;

            <br />

            document.getElementById("demo").innerHTML += <code style={{color:'blue'}}>this</code>;

            <br />

            &#125;

            <br />
            <br />
        
            <code style={{color:'green'}}>// The Window object calls the function::</code>

            <br />

            window.addEventListener("load", hello);

            <br />
            <br />

            <code style={{color:'green'}}>// The Button object calls the function:</code>

            <br />

            document.getElementById("btn").addEventListener("click", hello);
        </code>
      </div>

      <br />

      <p>Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Browser Support</h2>

      <p>Since Semptember of 2015 all browsers full support Arrow Functions in JavaScript.</p>

    </main>
  )
}

export default JavaScriptArrowFunction