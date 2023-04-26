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

      













    </main>
  )
}

export default TheJavaScriptthisKeyword