import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const TheJavaScriptthisKeyword = () => {
  return (
    <main className={styles.main}>
      <Link href='/'>Homepage</Link>

      <h1 style={{fontWeight:'400'}}>The JavaScript <b>this</b> Keyword</h1>

      {/* Just a mark to separete sections */}
      
      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>const</code> person = &#123;

          <br />

          firstName: <code style={{color:'#5d0000'}}>"John"</code>,

          <br />

          lastName: <code style={{color:'#5d0000'}}>"Doe"</code>,

          <br />

          id: <code style={{color:'red'}}>5566</code>

          <br />

          fullName: <code style={{color:'blue'}}>function</code>() &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}><b>this</b></code>.firstName + " " + <code style={{color:'blue'}}><b>this</b></code>.lastName;

          <br />

          &#125;

          <br />

          &#125;;
        </code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}>What is <b>this</b>?</h1>
      
      <p>In JavaScript, the <code style={{color:'blue'}}><b>this</b></code> keyword refers to an <b>object</b>.</p>

      <p><b>Which</b> object depends on how <code style={{color:'blue'}}><b>this</b></code> is being invoked (used or called).</p>

      <p>The <code style={{color:'blue'}}><b>this</b></code> keyword refers to different objects depending on how it is used:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <ul>
          <li>In an object method, <code style={{color:'blue'}}><b>this</b></code> refers to the <b>object</b>.</li>
          <li>Alone, <code style={{color:'blue'}}><b>this</b></code> refers to the <b>global object</b>.</li>
          <li>In a function, <code style={{color:'blue'}}><b>this</b></code> refers to the <b>global object</b>.</li>
          <li>In a function, in strict mode, <code style={{color:'blue'}}><b>this</b></code> is undefined.In an event, this refers to the element that received the event.</li>
          <li>In an event, <code style={{color:'blue'}}><b>this</b></code> refers to the <b>element</b> that received the event.</li>
          <li>Methods like <code style={{color:'blue'}}>call()</code>, <code style={{color:'blue'}}>apply()</code>, and <code style={{color:'blue'}}>bind()</code> can refer <code style={{color:'blue'}}><b>this</b></code> to <b>any object</b>.</li>
        </ul>
      </div>

      <br />

      <div style={{background:'lightyellow'}}>
        <br />

        <h3>Note</h3>

        <p><code style={{color:'blue'}}>this</code> is not a variable. It is a keyword. You cannot change the value of <code style={{color:'blue'}}>this</code></p>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}><b>this</b> in a Method</h1>

      <p>When used in an object method, <code style={{color:'blue'}}>this</code> refers to the <b>object</b>.</p>
      
      <p>In the example on top of this page, <code style={{color:'blue'}}>this</code> referst to the <b>person</b> object.</p>

      <p>Because the <b>fullName</b> method is a method of the <b>person</b> object.</p>

      <br />

      <div style={{background:'#cecece'}}>
        <br />

        <code>
          fullName: <code style={{color:'blue'}}>function</code>() &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}>this</code>.firstName + " " + <code style={{color:'blue'}}>this</code>.lastName;

          <br />
        
          &#125;

        </code>

        <br />
        <br />
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}><b>this</b> Alone</h1>

      <p>When used alone, <code style={{color:'blue'}}>this</code> refers to the <b>global object</b>.</p>

      <p>Because <code style={{color:'blue'}}>this</code> is running in the global scope.</p>

      <p>In a browser window the global object is <code style={{color:'red'}}>[object Window] :</code></p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>let</code> x = <code style={{color:'blue'}}>this</code>;
        </code>
      </div>

      <br />

      <p>In <b>strict mode</b>, when used alone, <code style={{color:'blue'}}>this</code> also refers to the <b>global object:</b></p>

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'#5d0000'}}>"use strict"</code>;
          
          <br />
          
          <code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>this</code>;
        </code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}><b>this</b> in a Function (Default)</h1>

      <p>In a function, the <b>global object</b> is the default binding for <code style={{color:'blue'}}>this</code>.</p>

      <p>In a browser window the global object is <code style={{color:'red'}}>[object Window]</code> :</p>

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <br />

        <code>
          <code style={{color:'blue'}}>function</code> myFunction &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}>this</code>;

          <br />

          &#125;
        </code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}><b>this</b> in a Function (Strict)</h1>

      <p>JavaScript <b>strict mode</b> does not allow default binding.</p>

      <p>So, when used in a function, in stric mode, <code style={{color:'blue'}}>this</code> is <code style={{color:'blue'}}>undefined</code></p>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}><b>this</b> in Event Handlers</h1>

      <p>In HTML event handlers, <code style={{color:'blue'}}>this</code> refers to the HTML element that received the event:</p>

      <br />
      
      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          &lt;<code style={{color:'#5d0000'}}>button</code> <code style={{color:'red'}}>onclick</code>=<code style={{color:'blue'}}>"this.style.display='none'"</code>&gt;
          
          <br />

          Click to Remove Me!
          
          <br />

          &lt;<code style={{color:'#5d0000'}}>/button</code>&gt;
        </code>
      </div>

      
      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}>Object Method Binding</h1>

      <p>In these examples, <code style={{color:'blue'}}>this</code> is the <b>person object:</b></p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>const</code> person = &#123;

          <br />

          firstName: <code style={{color:'#5d0000'}}>"John"</code>,

          <br />

          lastName: <code style={{color:'#5d0000'}}>"Doe"</code>,

          <br />

          id: <code style={{color:'red'}}>5566</code>

          <br />

          myFunction: <code style={{color:'blue'}}>function</code>() &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}><b>this</b></code>;

          <br />

          &#125;

          <br />

          &#125;;
        </code>

        <p>In this example, this refers to the person object.</p>

        <p>[object Object]</p>
      </div>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>const</code> person = &#123;

          <br />

          firstName: <code style={{color:'#5d0000'}}>"John"</code>,

          <br />

          lastName: <code style={{color:'#5d0000'}}>"Doe"</code>,

          <br />

          id: <code style={{color:'red'}}>5566</code>

          <br />

          fullName: <code style={{color:'blue'}}>function</code>() &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}><b>this</b></code>.firstName + " " + <code style={{color:'blue'}}><b>this</b></code>.lastName;

          <br />

          &#125;

          <br />

          &#125;;
        </code>

        <p>In this example, <b>this</b> refers to the <b>person</b> object.</p>

        <p>Because <b>fullName</b> is a method of the person object.</p>

        <code>Result</code>

        <br />

        <code>John Doe</code>
      </div>

      <br />

      <p>i.e. <b>this.firstName</b> is the <b>firstName</b> property of <b>this</b> (the person object).</p>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}>Explicit Function Binding</h1>

      <p>The <code style={{color:'blue'}}>call()</code> and <code style={{color:'blue'}}>apply()</code> method are predefined JavaScript methods.</p>

      <p>They can both be used to call an object method with another object as argument.</p>

      <p>The example blow calls person1.fullName with person2 as an argument, <b>this</b> refers to person2, even if fullName is a method of person1:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>const</code> person1 = &#123;

          <br />

          fullName: <code style={{color:'blue'}}>function</code>() &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}><b>this</b></code>.firstName + " " + <code style={{color:'blue'}}><b>this</b></code>.lastName;

          <br />

          &#125;

          <br />

          &#125;;

          <br />
          <br />

          <code style={{color:'blue'}}>const</code> person2 = &#123;

          <br />

          firstName: <code style={{color:'#5d0000'}}>"John"</code>,

          <br />

          lastName: <code style={{color:'#5d0000'}}>"Doe"</code>,

          <br />

          &#125;

          <br />

          <code style={{color:'green'}}>// Return "John Doe":</code>

          <br />

          person1.fullName.call(person2);
        </code>
        
        <br />
        <br />
        
        <code>Result</code>

        <br />

        <code>John Doe</code>
      </div>

      <br />

      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}>Function Borrowing</h1>

      <p>With the <code style={{color:'blue'}}>bind()</code> method, an object can borrow a method from another object.</p>

      <p>This example creates 2 objects (person and member).</p>

      <p>The member object borrows the fullname method from the person object:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>const</code> person = &#123;

          <br />

          firstName: <code style={{color:'#5d0000'}}>"John"</code>,

          <br />

          lastName: <code style={{color:'#5d0000'}}>"Doe"</code>,

          <br />

          fullName: <code style={{color:'blue'}}>function</code>() &#123;

          <br />

          <code style={{color:'blue'}}>return</code> <code style={{color:'blue'}}><b>this</b></code>.firstName + " " + <code style={{color:'blue'}}><b>this</b></code>.lastName;

          <br />

          &#125;

          <br />

          &#125;;

          <br />
          <br />

          <code style={{color:'blue'}}>const</code> member = &#123;

          <br />

          firstName: <code style={{color:'#5d0000'}}>"Hege"</code>,

          <br />

          lastName: <code style={{color:'#5d0000'}}>"Nilsen"</code>,

          <br />

          &#125;

          <br />
          <br />

          <code style={{color:'blue'}}>let</code> fullName = person.fullName.bind(member);
        </code>

        <br />

        <code>result</code>

        <br />

        <code>Hege Nilsen</code>
      </div>

      <br />

      
      {/* Just a mark to separete sections */}

      <h1 style={{fontWeight:'400'}}><b>This</b> Precedence</h1>

      <p>To determine which object <code style={{color:'blue'}}>this</code> refers to; use the following precedence of order.</p>

      <table>
        <tr>
          <th>Precedence</th>
          <th>Object</th>
        </tr>
        <tr>
          <td>1</td>
          <td>bind()</td>
        </tr>
        <tr>
          <td>2</td>
          <td>apply() and call()</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Object Method</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Global Scope</td>
        </tr>
      </table>

      <br />

      <p>Is <code style={{color:'blue'}}>this</code> in a function being called using bind()?</p>

      <p>Is <code style={{color:'blue'}}>this</code> in a function being called using apply()?</p>
      
      <p>Is <code style={{color:'blue'}}>this</code> in a function being called using call()?</p>

      <p>Is <code style={{color:'blue'}}>this</code> in an object function (method)?</p>

      <p>Is <code style={{color:'blue'}}>this</code> in a function in the global scope?</p>








    </main>
  )
}

export default TheJavaScriptthisKeyword