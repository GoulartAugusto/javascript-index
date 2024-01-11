import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptStatements = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Statements</h1>

        <br />

        <h1>JavaScript Programs</h1>

        <p>
        A <strong>computer program</strong> is a list of "instructions" to be "executed" by a computer.
        <br />
        <br />
        In a programming language, these programming instructions are called <strong>statements</strong>.
        <br />
        <br />
        A <strong>JavaScript program</strong>  is a list of programming <strong>statements</strong>.
        </p>

        <h4>In HTML, JavaScript programs are executed by the web browser.</h4>

        <h2>JavaScript Statements</h2>

        <p>
            JavaScript statements are composed of:
            <br />
            <br />
            Values, Operators, Expressions, Keywords, and Comments.
            <br />
            <br />
            This statement tells the browser to write "Hello Dolly." inside an HTML element with id="dolly":
        </p>

        <h3>Example</h3>
        <br />
        <code>
            document.getElementById("dolly").innerHTML = "Hello Dolly.";
        </code>

        <script>
            document.getElementById("dolly").innerHTML = "Hello Dolly.";
        </script>
        
        <br />

        <p>
        Most JavaScript programs contain many JavaScript statements.
        <br />
        <br />
        The statements are executed, one by one, in the same order as they are written.
        </p>

        <h4>JavaScript programs (and JavaScript statements) are often called JavaScript code.</h4>

        <h2>Semicolons ;</h2>

        <p>
        Semicolons separate JavaScript statements.
        <br />
        <br />
        Add a semicolon at the end of each executable statement:
        </p>

        <h3>Example</h3>

        <code>
        let a, b, c;  // Declare 3 variables
        <br />
        a = 5;        // Assign the value 5 to a
        <br />
        b = 6;        // Assign the value 6 to b
        <br />
        c = a + b;    // Assign the sum of a and b to c
        <br />
        </code>
        
        <p>When separated by semicolons, multiple statements on one line are allowed:</p>

        <code>a = 5; b = 6; c = a + b;</code>

        <h3>
        On the web, you might see examples without semicolons.
        <br />
        <br />
        Ending statements with semicolon is not required, but highly recommended.
        <br />
        </h3>

        <h2>JavaScript White Space</h2>

        <p>
        JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
        <br />
        The following lines are equivalent:
        </p>

        <code>
        let person = "Hege";
        <br />
        let person="Hege";
        </code>

        <p>A good practice is to put spaces around operators ( = + - * / ):</p>

        <code>
        let x = y + z;
        </code>

        <h2>JavaScript Line Length and Line Breaks</h2>

        <p>
        For best readability, programmers often like to avoid code lines longer than 80 characters.
        <br />
        If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
        </p>

        <h3>Example</h3>

        <code>
        document.getElementById("demo").innerHTML =
        <br />
        "Hello Dolly!";
        </code>

        <h2>JavaScript Code Blocks</h2>

        <p>
        JavaScript statements can be grouped together in code blocks, inside curly brackets &#123; . . . &#x7D;.
        <br />
        <br />
        The purpose of code blocks is to define statements to be executed together.
        <br />
        <br />
        One place you will find statements grouped together in blocks, is in JavaScript functions:
        </p>

        <h3>Example</h3>

        <code>
            function myFunction() &#123;
            <br />
            document.getElementById("demo1").innerHTML = "Hello Dolly!";
            <br />
            document.getElementById("demo2").innerHTML = "How are you?";
            <br />
            &#125;;
        </code>

        

    </main>
  )
}

export default JavaScriptStatements