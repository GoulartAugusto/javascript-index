import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptModules = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Modules</h1>

        {/* Just a mark to separete sections */}

        <h2>Modules</h2>

        <p>JavaScript modules allow you to break up your code into separate files.</p>

        <p>This makes it easier to maintain a code-base.</p>

        <p>Modules are imported from external files with the import statement.</p>

        <p>Modules also rely on <code style={{color:'#5d0000'}}>type="module"</code> in the &lt;script&gt; tag.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
               &lt;script <code style={{color:'#5d0000'}}>type="module"</code>&gt;


            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Export</h2>

        <p>Modules with <b>functions</b> or <b>variables</b> can be stored in any external file.</p>

        <p>There are two types of exports: <b>Named Exports</b> and <b>Default Exports</b>.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Named Exports</h2>

        <p>Let us create a file named <code style={{color:'#5d0000'}}>person.js</code>, and fill it with the things we want to export.</p>

        <p>You can create named exports two ways. In-line individually, or all at once at the bottom.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>In-line individually</h3>

            <br />

            <code style={{color:'#5d0000'}}>person.js</code>

            <br />

            <code>
                <code style={{color:'blue'}}>export</code> <code style={{color:'blue'}}>const</code> name = <code style={{color:'#5d0000'}}>"Jesse"</code>;
            
                <br />

                <code style={{color:'blue'}}>export</code> <code style={{color:'blue'}}>const</code> age = <code style={{color:'red'}}>40</code>;
            </code>
        </div>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>All at once at the bottom:</h3>

            <br />

            <code style={{color:'#5d0000'}}>person.js</code>

            <br />

            <code>
                 <code style={{color:'blue'}}>const</code> name = <code style={{color:'#5d0000'}}>"Jesse"</code>;
            
                <br />

                <code style={{color:'blue'}}>const</code> age = <code style={{color:'red'}}>40</code>;
                
                <br />

                <code style={{color:'blue'}}>export</code> &#123; name, age &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Default Exports</h2>

        <p>Let us create another file, named <code style={{color:'#5d0000'}}>message.js</code>, and use it for demonstrating default export.</p>

        <p>You can only have one default export in a file.</p>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <br />

            <code style={{color:'#5d0000'}}>message.js</code>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> message = () =&gt; &#123;
                 
                <br />

                <code style={{color:'blue'}}>const</code> <code style={{color:'#5d0000'}}>"Jesse"</code>;
            
                <br />

                <code style={{color:'blue'}}>const</code> age = <code style={{color:'red'}}>40</code>;
                
                <br />

                <code style={{color:'blue'}}>return</code> name + <code style={{color:'#5d0000'}}>' is '</code> + age + <code style={{color:'#5d0000'}}>' years old.'</code>;

                <br />

                <code style={{color:'blue'}}>export</code> <code style={{color:'blue'}}>default</code> message;
            </code>

            <p>the result will be:</p>

            <code>Jesse is 40 years old.</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Import</h2>

        <p>You can import modules into a file in two ways, based on if they are named exports or default exports.</p>

        <p>Named exports are constructed using curly braces. Default exports are not.</p>

        <div style={{background:"#cecece"}}>
            <h3>Import from named exports</h3>

            <p>Import named exports from the file person.js:</p>

            <br />

            <code>
                <code style={{color:'blue'}}>import</code> &#123; name, age &#125; from <code style={{color:'#5d0000'}}>"./person.js"</code>
            </code>
        </div>

        <div style={{background:"#cecece"}}>
            <h3>Import from default exports</h3>

            <p>Import a default export from the file message.js:</p>

            <br />

            <code>
                <code style={{color:'blue'}}>import</code> message from <code style={{color:'#5d0000'}}>"./message.js"</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <div style={{background:"lightyellow"}}>
            <br />

            <h3>Note</h3>

            <p>Modules only work with the HTTP(s) protocol.</p>

            <p>A web-page opened via the file:// protocol cannot use import / export</p>

            <br />
        </div>

        

    </main>
  )
}

export default JavaScriptModules