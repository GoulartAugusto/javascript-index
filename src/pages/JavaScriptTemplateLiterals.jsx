import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptTemplateLiterals = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Template Literals</h1>

        <div style={{backgroundColor:'#a1ffa1'}}>
          <h2>Synonymus</h2>
          <ul>
            <li>Template Literals</li>
            <li>Template Strings</li>
            <li>String Templates</li>
            <li>Back-Tics Syntax</li>
          </ul>
        </div>
        
        <br />

        {/* Just a mark to separete sections */}

        <h2>Back-Tics Syntax</h2>

        <p><b>Template Literals</b> use back-ticks (``) rather than the quotes ("") to define a string:</p>

        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code><code style={{color:'blue'}}>let</code> = <code style={{color:'orange'}}>&#96;Hello World!&#96;</code>;</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Quotes Inside Strings</h2>

        <p>With <b>Template Literals</b>, you can use both single and double quotes inside a string:</p>

        <br />

        
        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'orange'}}>&#96;He's often called "Johnny&#96;</code>;</code>

        </div>
        
        <br />

        {/* Just a mark to separete sections */}
    
        <h2>Multiline Strings</h2>

        <p><b>Template literals</b> allows multiline strings:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code><code style={{color:'blue'}}>let</code> text = 
          <br />
          <code style={{color:'orange'}}>&#96;The quick
          <br />
          brown fox
          <br />
          jumps over
          <br />
          the lazy dog&#96;</code>;</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Interpolation</h2>

        <p><b>Template literals</b> provide an easy way to interpolate variables and expressions into strings.</p>

        <p>The method is called string interpolation.</p>

        <p>The syntax is:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code>$&#123;...&#125;</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Variable Substitutions</h2>

        <p><b>Template literals</b> allow variables in strings:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code>
            <code style={{color:'blue'}}>let</code> firstName = <code style={{color:'#5d0000'}}>"John"</code>;

          <br />

          <code style={{color:'blue'}}>let</code> lastName = <code style={{color:'#5d0000'}}>"Doe"</code>;

          <br />
          <br />

          <code style={{color:'blue'}}>let</code> text = 

          <code style={{color:'orange'}}>&#96;Welcome $&#123;firstName&#125;, $&#123;lastName&#125;&#96;</code>;</code>

        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <br />
          <p>Automatic replacing of variables with real values is called <b>string interpolation</b>.</p>
          <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Expression Substitution</h2>

        <p><b>Template literals</b> allow expressions in strings:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code>
            <code style={{color:'blue'}}>let</code> price = <code style={{color:'red'}}>10</code>;

          <br />

          <code style={{color:'blue'}}>let</code> VAT = <code style={{color:'red'}}>0.25</code>;

          <br />
          <br />

          <code style={{color:'blue'}}>let</code> total = 

          <code style={{color:'orange'}}>&#96;Total $&#123;(price * (1 + VAT)).toFixed(2))&#125;&#96;</code>;</code>

        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
          <br />
          <p>Automatic replacing of expressions with real values is called <b>string interpolation</b>.</p>
          <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>HTML Templates</h2>

        <div style={{backgroundColor:'#cecece'}}>
          <h3>Example</h3>

          <code>
            <code style={{color:'blue'}}>let</code> header = <code style={{color:'#5d0000'}}>"Templates Literals"</code>;

          <br />

          <code style={{color:'blue'}}>let</code> tags = <code style={{color:'#5d0000'}}>["template literals", "javascript", "es6"]</code>;

          <br />
          <br />

          <code style={{color:'blue'}}>let</code> html = 

          <code style={{color:'orange'}}>&#96;&lt;h2&gt;&#123;header&#125;&lt;/h2&gt;&#96;</code>;</code>

          <br />

          <code style={{color:'blue'}}>for</code> (<code style={{color:'blue'}}>const</code> x of tags) &#123;

          <br />

          <code>html += <code style={{color:'orange'}}>
          &#96;&lt;li&gt;&#123;x&#125;&lt;/li&gt;&#96;;
          <br />
          </code>
          &#125;
          </code>

          <br />
          <br />
          <code>html += <code style={{color:'orange'}}>&#96;&lt;/ul&gt;&#96;</code>;</code>

        </div>

        <br />

        <h2>Browser Support</h2>

        <p><b>Template Literals</b> is an ES6 feature (JavaScript 2015).</p>

        <p>It is supported in all modern browsers.</p>

        <p><b>Template Literals</b> is not supported in Internet Explorer.</p>


    </main>
  )
}

export default JavaScriptTemplateLiterals