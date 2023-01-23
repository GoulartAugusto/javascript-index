import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptComments = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Comments</h1>

        <p>JavaScript comments can be used to explain JavaScript code, and to make it more readable.</p>
        <p>JavaScript comments can also be used to prevent execution, when testing alternative code.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Single Line Comments</h2>

        <p>Single line comments start with <code style={{ color: 'green'}}>//</code>.</p>
        <p>Any text between <code style={{ color: 'green'}}>//</code> and the end of the line will be ignored by JavaScript (will not be executed).</p>
        <p>This example uses a single-line comment before each code line:</p>

        <div style={{ backgroundColor: 'lightgray'}}>
            <h3>Example</h3>
            <code>
                <code style={{ color: 'green'}}>// Change heading:</code>
                <br />
                <code>document.getElementById("myH").innerHTML = <code style={{ color: '#4d0000'}}>"My First Page"</code>;</code>
                <br />
                <br />
                <code style={{ color: 'green'}}>// Change paragraph:</code>
                <br />
                <code>document.getElementById("myP").innerHTML = <code style={{ color: '#4d0000'}}>"My First Paragraph"</code>;</code>
            </code>
        </div>

        <br />

        <p>This example uses a single line comment at the end of each line to explain the code:</p>

        <div style={{ backgroundColor: 'lightgray'}}>
            <h3>Example</h3>
            <code>
            <b style={{ color: 'blue'}}>let</b> x = 5;      <code style={{ color: 'green'}}>// Declare x, give it the value of 5</code>
            <br />
            <br />
            <b style={{ color: 'blue'}}>let</b> y = x + 2;  <code style={{ color: 'green'}}>// Declare y, give it the value of x + 2</code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Multi-line Comments</h2>

        <p>Multi-line comments start with <b style={{ color: 'green'}}>/*</b> and end with <b style={{ color: 'green'}}>*/</b>.</p>

        <p>Any text between <b style={{ color: 'green'}}>/*</b> and <b style={{ color: 'green'}}>*/</b> will be ignored by JavaScript.</p>

        <p>This example uses a multi-line comment (a comment block) to explain the code:</p>

        <div style={{ backgroundColor: 'lightgray'}}>
            <h3>Example</h3>

            <code style={{ color: 'green'}}>
                /*
                <br />
                The code below will change
                <br />
                the heading with id = "myH"
                <br />
                and the paragraph with id = "myP"
                <br />
                in my web page:
                <br />
                */
                <br />
            </code>

            <code>document.getElementById("myH").innerHTML = <code style={{ color: '#4d0000'}}>"My First Page"</code>;</code>

            <br />

            <code>document.getElementById("myP").innerHTML = <code style={{ color: '#4d0000'}}>"My First Paragraph"</code>;</code>
        </div>

        <br />

        <div style={{ backgroundColor: 'lightyellow'}}>
            <p>It is most common to use single line comments.</p>
            <p>Block comments are often used for formal documentation.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using Comments to Prevent Execution</h2>

        <p>Using comments to prevent execution of code is suitable for code testing.</p>

        <p>Adding <code style={{ color: 'green'}}>//</code> in front of a code line changes the code lines from an executable line to a comment.</p>

        <p>This example uses // to prevent execution of one of the code lines:</p>

        <br />

        <div style={{ backgroundColor: 'lightgray'}}>
            <h3>Example</h3>

            <code style={{ color: 'green'}}>//document.getElementById("myH").innerHTML = "My First Page";</code>

            <br />

            <code>document.getElementById("myP").innerHTML = <code style={{ color: '#4d0000'}}>"My First Paragraph"</code>;</code>
        </div>

        <br />

        <p>This example uses a comment block to prevent execution of multiple lines:</p>

        <div style={{ backgroundColor: 'lightgray'}}>
            <code style={{ color: 'green'}}>
            /*
            <br />
            document.getElementById("myH").innerHTML = "My First Page";
            <br />
            document.getElementById("myP").innerHTML = "My first paragraph.";
            <br />
            */
            </code>
        </div>
        
    </main>
  )
}

export default JavaScriptComments