import React from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

const JavaScriptSyntax = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Syntax</h1>

        <p>JavaScript syntax is the set of rules, how JavaScript programs are constructed:</p>

        <code>
        // How to create variables:
        <br />
        var x;
        <br />
        let y;
        <br />
        <br />
        // How to use variables:
        <br />
        x = 5;
        <br />
        y = 6;
        <br />
        let z = x + y;
        </code>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Values</h2>

        <p>The JavaScript syntax defines two types of values:</p>

        <ul>
            <li>Fixed values</li>
            <li>Variable values</li>
        </ul>

        <p>Fixed values are called <strong>Literals</strong>.</p>
        <p>Variable values are called <strong>Variables</strong>.</p>

        <h2>JavaScript Literals</h2>

        <p>The two most important syntax rules for fixed values are:</p>

        <p>1. <strong>Numbers</strong> are written with or without decimals:</p>

        <p style={{ color: 'green' }}>10.5</p>

        <p style={{ color: 'green' }}>1001</p>

        <br />

        <p>2. <strong>Strings</strong> are text, written within double or single quotes:</p>

        <p style={{ color: 'orangered' }}>"John Doe"</p>

        <p style={{ color: 'orangered' }}>'John Doe'</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Variables</h2>

        <p>In a programming language, <strong>variables</strong> are used to <strong>store</strong> data values.</p>

        <p>JavaScript uses the keywords <code style={{ color: 'blue' }}>var</code>, <code style={{ color: 'blue' }}>let</code> and <code style={{ color: 'blue' }}>const</code> to declare variables.</p>

        <p>An <strong>equal sign</strong> is used to <strong>assign values</strong> to variables.</p>

        <p>In this example, x is defined as a variable. Then, x is assigned (given) the value 6:</p>

        <h5>Example</h5>

        <code>
            <code style={{ color: 'blue' }}>let</code> x;
            <br />
            x = 6;
        </code>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Operators</h2>

        <p>JavaScript uses <b>arithmetic operators</b>  <code style={{ color: 'red' }}>( + - * / )</code> to compute values:</p>

        <code style={{ color: 'red' }}>(5 + 6) * 10</code>

        <p>JavaScript uses an assignment operator ( = ) to assign values to variables:</p>

        <code>
        <code style={{ color: 'blue' }}>let</code> x, y;
        <br />
        x = <code style={{ color: 'red' }}>5</code>;
        <br />
        y = <code style={{ color: 'red' }}>6</code>;
        </code>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Expressions</h2>

        <p>
            An expression is a combination of values, variables, and operators, which computes to a value.
            <br />
            <br />
            The computation is called an evaluation.
            <br />
            <br />
            For example, 5 * 10 evaluates to 50:
        </p>

        <p>Example</p>
        
        <code style={{ color: 'red' }}>5 * 10</code>

        <p>Expressions can also contain variable values:</p>

        <code>x * 10</code>

        <p>The values can be of various types, such as numbers and strings.</p>

        <p>For example, "John" + " " + "Doe", evaluates to "John Doe":</p>

        <p><code style={{ color: 'red' }}>"John"</code> + <code style={{ color: 'red' }}>" "</code> + <code style={{ color: 'red' }}>"Doe"</code></p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Keywords</h2>

        <p>JavaScript <b>keywords</b> are used to identify actions to be performed.</p>

        <p>The <code style={{ color: 'blue' }}>let</code> keyword tells the browser to create variables:</p>

        <code>
        <code style={{ color: 'blue' }}>let</code> x, y;
        <br />
        x = <code style={{ color: 'red' }}>5</code>;
        <br />
        y = <code style={{ color: 'red' }}>6</code>;
        </code>

        <p>The <code style={{ color: 'blue' }}>var</code> keyword also tells the browser to create variables:</p>

        <code>
        <code style={{ color: 'blue' }}>var</code> x, y;
        <br />
        x = <code style={{ color: 'red' }}>5</code>;
        <br />
        y = <code style={{ color: 'red' }}>6</code>;
        </code>

        <div style={{ backgroundColor: 'lightyellow'}}>
            <p>In these examples, using <code style={{ color: 'blue' }}>var</code> or <code style={{ color: 'blue' }}>let</code> will produce the same result.</p>
            <p>You will learn more about <code style={{ color: 'blue' }}>var</code> and <code style={{ color: 'blue' }}>let</code> later in this tutorial.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Comments</h2>

        <p>Not all JavaScript statements are "executed".</p>

        <p>Code after double slashes <code style={{ color: 'green' }}>//</code> or between <code style={{ color: 'green' }}>/*</code> and <code style={{ color: 'green' }}>*/</code> is treated as a <b>comment</b>.</p>

        <h5>Example</h5>

        <code>
            let x = 5; <code style={{ color: 'green' }}>// I will be executed</code>  
            <br />
            <br />
            <code style={{ color: 'green' }}>// x = 6;   I will NOT be executed</code>
        </code>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Identifiers / Names</h2>

        <p>Identifiers are JavaScript names.</p>

        <p>Identifiers are used to name variables and keywords, and functions.</p>

        <p>The rules for legal names are the same in most programming languages.</p>

        <p>A JavaScript name must begin with:</p>

        <ul>
            <li>A letter (A-Z or a-z)</li>
            <li>A dollar sign ($)</li>
            <li>Or an underscore (_)</li>
        </ul>

        <p>Subsequent characters may be letters, digits, underscores, or dollar signs.</p>

        <br />

        <div style={{ backgroundColor: 'lightyellow'}}>
            <h2>Note</h2>
            <p>Numbers are not allowed as the first character in names.</p>
            <p>This way JavaScript can easily distinguish identifiers from numbers.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript is Case Sensitive</h2>

        <p>All JavaScript identifiers are <b>case sensitive</b>.</p>

        <p>The variables <code style={{ color: 'blue' }}>lastName</code> and <code style={{ color: 'blue' }}>lastname</code> , are two different variables:</p>

        <code>
        <code style={{ color: 'blue' }}>let</code> lastname, lastName;
        <br />
        <br />
        lastName = <code style={{ color: 'teal' }}>"Doe"</code>;
        <br />
        lastname = <code style={{ color: 'teal' }}>"Peterson"</code>;
        </code>

        <br />

        <p>JavaScript does not interpret <b>LET</b> or <b>Let</b> as the keyword <b>let</b>.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript and Camel Case</h2>

        <p>Historically, programmers have used different ways of joining multiple words into one variable name:</p>

        <p><b>Hyphens:</b></p>

        <p>first-name, last-name, master-card, inter-city.</p>

        <div style={{ backgroundColor: 'lightyellow'}}>
            <p>Hyphens are not allowed in JavaScript. They are reserved for subtractions.</p>
        </div>

        <p><b>Underscore:</b></p>

        <p>first_name, last_name, master_card, inter_city.</p>
        
        
        <p><b>Upper Camel Case (Pascal Case):</b></p>
        
        <p>FirstName, LastName, MasterCard, InterCity.</p>
        
        <p><b>Lower Camel Case:</b></p>

        <p>JavaScript programmers tend to use camel case that starts with a lowercase letter:</p>

        <p>firstName, lastName, masterCard, interCity.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Character Set</h2>

        <p>JavaScript uses the <b>Unicode</b> character set.</p>
        <p>Unicode covers (almost) all the characters, punctuations, and symbols in the world.</p>
        <p>
            For a closer look, <Link 
                                href='https://www.w3schools.com/charsets/ref_html_utf8.asp' 
                                target='_blank'>Complete Unicode Reference.
                                </Link>
            </p>


    </main>
  )
}

export default JavaScriptSyntax