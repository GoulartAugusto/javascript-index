import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptUseStrict = () => {
  return (
    <main className={styles.main}>
      <Link href='/'>Homepage</Link>
    
      <h1>JavaScript Use Strict</h1>

      {/* Just a mark to separete sections */}

      <p><code style={{color:'blue'}}>"use strict";</code> Defines that JavaScript code should be executed in "strict mode".</p>

      {/* Just a mark to separete sections */}

      <h2>The "use strict" Directive</h2>

      <p>The <code style={{color:'blue'}}>"use strict"</code> directive was new in ECMAScript version 5.</p>

      <p>It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.</p>

      <p>The purpose of <code style={{color:'blue'}}>"use strict"</code> is to indicate that the code should be executed in "strict mode".</p>

      <p>With strict mode, you can not, for example, use undeclared variables.</p>

      <p>All modern browsers support "use strict" except Internet Explorer 9 and lowe.</p>

      <br />

      <div style={{background:'lightyellow'}}>
          <br />

          <p>You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.</p>
      
          <p><code style={{color:'blue'}}>"use strict"</code> is just a string, so IE 9 will not throw an error even if it does not understand it.</p>

          <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Declaring Strict Mode</h2>

      <p>Strict mode is declared by adding <code style={{color:'blue'}}>"use strict";</code> to the beginning of a script or a function.</p>

      <p>Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          x = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error because x is not declared</code>
        </code>
      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />

          myFunction();

          <br />
          <br />

          <code style={{color:'blue'}}>function</code> myFunction() &#123;

          <br />

          y = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will also cause an error because y is not declared</code>

          <br />
          
          &#125;
        </code>
      </div>

      <br />

      <p>Declared inside a function, it has local scope (only the code inside the function is in strict mode):</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          x = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will not cause an error.</code>

          <br />

          myFunction();

          <br />
          <br />

          <code style={{color:'blue'}}>function</code> myFunction() &#123;

          <br />

          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          y = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error</code>

          <br />
          
          &#125;
        </code>
      </div>

      {/* Just a mark to separete sections */}

      <h2>The "use strict"; Syntax</h2>

      <p>The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.</p>

      <p>Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.</p>

      <p>So <code style={{color:'blue'}}>"use strict";</code> only matters to new compilers that "understand" the meaning of it.</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Why Strict Mode?</h2>

      <p>Strict mode makes it easier to write "secure" JavaScript.</p>

      <p>Strict mode changes previously accepted "bad syntax" into real errors.</p>

      <p>As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.</p>

      <p>In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.</p>

      <p>In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Not Allowerd in Strict Mode</h2>

      <p>Using a variable, without declaring it, is not allowed:</p>

      <br />

      <div style={{background:'#cecece'}}>

        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          x = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>

        <br />
      </div>

      <br />

      <div style={{background:'lightyellow'}}>
        <br />

        <p>Objects are variables too.</p>

        <br />
      </div>

      <br />

      <p>Using an object, without declaring it, is not allowed:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          x = &#123;p1:<code style={{color:'red'}}>10</code>, p2:<code style={{color:'red'}}>20</code>&#125;; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Deleting a variable (or object) is not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>3.14</code>;

          <br />

          <code style={{color:'blue'}}>delete</code> x; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Deleting a function is not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>function</code> x(p1, p2) &#123; &#125;;
          
          <br />
        
          <code style={{color:'blue'}}>delete</code> x; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Duplicating a parameter name is not allowed:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>function</code> x(p1, p2) &#123; &#125;; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Octal numeric literals are not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>010</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Octal escape characters are not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>let</code> x = <code style={{color:'#5d0000'}}>"\010"</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Writing to a read-only property is not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>const</code> obj =  &#123; &#125;;
        
          <br />

          Object.defineProperty(obj, <code style={{color:'#5d0000'}}>"x"</code> &#123;value:<code style={{color:'red'}}>0</code>, writable:<code style={{color:'blue'}}>false</code>&#125;)

          <br />
          <br />

          obj.x = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Writing to a get-only property is not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>const</code> obj =  &#123;get x() &#123;<code style={{color:'blue'}}>retrun</code> <code style={{color:'red'}}>0</code>&#125;  &#125;;
        
          <br />
          <br />

          obj.x = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>Deleting an undeletable property is not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>delete</code> Object.prototype; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>The word <code style={{color:'red'}}>eval</code> cannot be used as a variable.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>eval</code> = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>The word <code style={{color:'red'}}>arguments</code> cannot be used as a variable.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>arguments</code> = <code style={{color:'red'}}>3.14</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>The word <code style={{color:'red'}}>with</code> statement is not allowed.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>with</code> (Math)&#123;x = cos(<code style={{color:'red'}}>2</code>)&#125;; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>For security reasons, <code style={{color:'red'}}>eval()</code> is not allowed to create variables in the scope from which it was called.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <p>In strict mode, a variable can not be used before it is declared:</p>
        
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>eval</code> (<code style={{color:'#5d0000'}}>"x = 2"</code>);

          <br />

          alert (x); <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <p>In strict mode, eval() can not declare a variable using the var keyword:</p>
        
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>eval</code> (<code style={{color:'#5d0000'}}>"var x = 2"</code>);

          <br />

          alert (x); <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <p>eval() can not declare a variable using the let keyword:</p>
        
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>eval</code> (<code style={{color:'#5d0000'}}>"let x = 2"</code>);

          <br />

          alert (x); <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>

      <br />

      <p>The <code style={{color:'blue'}}>this</code> keyword in functions behaves differently in strict mode.</p>

      <p>he <code style={{color:'blue'}}>this</code> keyword refers to the object that called the function.</p>

      <p>If the object is not specified, functions in strict mode will return <code style={{color:'red'}}>undefined</code> and functions in normal mode will return the global object (window):</p>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />

          <code style={{color:'blue'}}>function</code> myFunction() &#123;

          <br />

          alert(<code style={{color:'blue'}}>this</code>); <code style={{color:'green'}}>// will alert "undefined"</code>

          <br />
          
          &#125;

          <br />

          myFunction();
        </code>
      </div>

      <br />

      {/* Just a mark to separete sections */}
      
      <h2>Future Proof!</h2>

      <p>Keywords reserved for future JavaScript versions can NOT be used as variables names in strict mode.</p>

      <p>These are:</p>
      
      <ul>
        <li>implements</li>
        <li>interface</li>
        <li>let</li>
        <li>package</li>
        <li>private</li>
        <li>protected</li>
        <li>public</li>
        <li>static</li>
        <li>yield</li>
      </ul>

      <br />

      <div style={{background:'#cecece'}}>
        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;

          <br />
          
          <code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>public</code> = <code style={{color:'red'}}>1500</code>; <code style={{color:'green'}}>// This will cause an error</code>
        </code>
      </div>
      
      <br />

      <div style={{background:'#ffdddd'}}>
        <h2>Watch out!</h2>
        
        <br />

        <p>The "use strict" directive is only recognized at the <b>beginning</b> of a script or a function.</p>
      
        <br />
      </div>
    </main>
  )
}

export default JavaScriptUseStrict