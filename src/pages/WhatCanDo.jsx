import React from 'react';
import Link from 'next/link';
import '../app/page.module.css';
import styles from '../app/page.module.css'


const WhatCanDo = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>What Can JavaScript Do?</h1>

        <br />
        <br />
        
        <h3>Here we going to see code examples for what JavaScript can Do in a simple HTML5 page.</h3>

        <br />
        <br />
        
        <h4 id="demo">JavaScript can change HTML content.</h4>

        <br />

        <code>
        &lt;p id=&quot;demo&quot;&gt;JavaScript can change HTML content.&lt;/p&gt; 
        <br />
        <br />
        &lt;button type=&quot;button&quot; onclick='document.getElementById(&quot;demo&quot;).innerHTML = &quot;Hello JavaScript!&quot;'&gt;Click Me!&lt;/button&gt;
        </code>

        <br />
        <br />

        <h4 id="text-size">JavaScript can change the style of an HTML element.</h4>

        <br />
        <br />

        <code>
        &lt;p id=&quot;text-size&quot;&gt;JavaScript can change the style of an HTML element.&lt;/p&gt; 
        <br />
        <br />
        &lt;button type=&quot;button&quot; onclick=&quot;document.getElementById('text-size').style.fontSize='35px'&quot;&gt;Click Me!&lt;/button&gt;
        </code>

        <br />
        <br />

        <h4 id="hide">JavaScript can hide HTML elements.</h4>

        <br />

        <code>
        &lt;button type=&quot;button&quot; onclick=&quot;document.getElementById('hide').style.display='none'&quot;&gt;Click Me!&lt;/button&gt;
        </code>

        <br />
        <br />

        <h4>JavaScript can show hidden HTML elements.</h4>

        <br />

        <code>
        &lt;p id=&quot;show&quot; style=&quot;display:none&quot;&gt;Hello JavaScript!&lt;/p&gt; 
        <br />
        &lt;button type=&quot;button&quot; onclick=&quot;document.getElementById('show').style.display='block'&quot;&gt;Click Me!&lt;/button&gt;
        </code>

        <br />
        <br />


    </main>
  )
}

export default WhatCanDo