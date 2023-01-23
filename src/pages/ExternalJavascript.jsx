import React from 'react'
import styles from '../app/page.module.css';
import Link from 'next/link';

const ExternalJavascript = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
      <h1>External JavaScript</h1>

      <br />

      <h3>Scripts can also be placed in external files:</h3>

      <h4>External file: myScript.js</h4>
      <p>The script is placed on './js/myScript.js' and it will work like this:</p>

      <br />

      <p>
        External scripts are practical when the same code is used in many different web pages.
        <br />
        JavaScript files have the file extension .js.
        <br />
        To use an external script, put the name of the script file in the src (source) attribute of a &lt; script &gt; tag:
      </p>

      <br />

      <p>
          You can place an external script reference in &lt; head &gt; or &lt; body &gt; as you like.

              The script will behave as if it was located exactly where the &lt; script &gt; tag is located.
      </p>

      <br />

      <h4>External scripts cannot contain &lt;script&gt; tags.</h4>

      <br />

      <h1>External JavaScript Advantages</h1>

      <br />

      <p>Placing scripts in external files has some advantages:</p>

      <ul>
          <li>It separates HTML and code</li>
          <li>It makes HTML and JavaScript easier to read and maintain</li>
          <li>Cached JavaScript files can speed up page loads</li>
      </ul>

      <p>To add several script files to one page  - use several script tags</p>

      <br />

      <h1>External References</h1>

      <br />

      <p>An external script can be referenced in 3 different ways:</p>

      <ul>
          <li>With a full URL (a full web address)</li>
          <li>With a file path (like /js/)</li>
          <li>Without any path</li>
      </ul>

      <br />

      <p>This example uses a <strong>full URL</strong> to link to myScript.js:</p>
    
    

      <h3>Example</h3>

      <h4>&lt;script src="https://www.w3schools.com/js/myScript.js"&gt;&lt;/script&gt;</h4>

      <br />

      <p>This example uses a <strong>file path</strong> to link to myScript.js:</p>

      <h3>Example</h3>

      <h4>&lt;script src="/js/myScript.js"&gt;&lt;/script&gt; </h4>

      <br />

      <p>This example uses no path to link to myScript.js:</p>

      <h3>Example</h3>

      <h4>&lt;script src="myScript.js"&gt;&lt;/script&gt;</h4>

      <br />

    

    </main>
  )
}

export default ExternalJavascript