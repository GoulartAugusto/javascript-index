import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptStrings = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Strings</h1>

        <div style={{backgroundColor:'#ccffcf'}}>
            <br />
            <p>JavaScript strings are for storing and manipulating text.</p>
            <br />
        </div>

        <br />

        <p>A JavaScript string is zero or more characters written inside quotes.</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            <br />
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"John Doe"</code>;</code>
        </div>

        <br />

        <p>You can use single or double quotes:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> carName1 = <code style={{color:'#5d0000'}}>"Volvo XC60"</code>; <code style={{color:'green'}}>// Double quotes</code></code>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> carName1 = <code style={{color:'#5d0000'}}>'Volvo XC60'</code>; <code style={{color:'green'}}>// Single quotes</code></code>
        </div>

        <br />

        <p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</p>

        <br />
        
        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            <br />
            <code><code style={{color:'blue'}}>let</code> answer1 = <code style={{color:'#5d0000'}}>"It's alright!"</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> answer1 = <code style={{color:'#5d0000'}}>"He is called 'Johnny'"</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> answer1 = <code style={{color:'#5d0000'}}>'He is called "Johnny"'</code>;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>String Length</h2>

        <p>To find the length of a string, use the built-in <b>length</b> property:</p>
        
        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</code>;</code>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> length = text.length;</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Escape Character</h2>

        <p>Because strings must be written within quotes, JavaScript will misunderstand this string:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <br />
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"We are the so-called "<code style={{color:'black'}}>Vikings</code>" from the north."</code>;</code>
        </div>

        <br />

        <p>The string will be chopped to "We are the so-called ".</p>

        <p>The solution to avoid this problem, is to use the <b>backslash  escape character</b>.</p>
        
        <br />

        <p>The backslash (\) escape character turns special characters into string characters:</p>

        <br />

        <table>
            <tr>
                <th>Code</th>
                <th>Result</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>\'</td>
                <td>'</td>
                <td>Single quote</td>
            </tr>
            <tr>

                <td>\"</td>
                <td>"</td>
                <td>Double quote</td>
            </tr>
            <tr>
                <td>\\</td>
                <td>\</td>
                <td>Backslash</td>
            </tr>
        </table>

        <br />

        <p>The sequence <code style={{color:"#5d0000"}}>\"</code>  inserts a double quote in a string:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <br />
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"We are the so-called \"Vikings\" from the north."</code>;</code>
        </div>

        <br />

        <p>The sequence <code style={{color:"#5d0000"}}>\'</code>  inserts a single quote in a string:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <br />
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>'It\'s alright.'</code>;</code>
        </div>

        <br />

        <p>The sequence <code style={{color:"#5d0000"}}>\\</code> inserts a backslash in a string:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <br />
            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"The character \\ is called backslash."</code>;</code>
        </div>

        <br />

        <table>
            <tr>
                <th>Code</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>\b</td>
                <td>Backspace</td>
            </tr>
            <tr>
                <td>\f</td>
                <td>Form Feed</td>
            </tr>
            <tr>
                <td>\n</td>
                <td>	New Line</td>
            </tr>
            <tr>
                <td>\r</td>
                <td>Carriage Return</td>
            </tr>
            <tr>
                <td>\t</td>
                <td>Horizontal Tabulator</td>
            </tr>
            <tr>
                <td>\v</td>
                <td>Vertical Tabulator</td>
            </tr>
        </table>

        <br />
        
        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <h3>Note</h3>
            <p>The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.</p>
            <br />
        </div>


        <br />

        {/* Just a mark to separete sections */}


        <h2>Breaking Long Code Lines</h2>

        <br />

        <p>For best readability, programmers often like to avoid code lines longer than 80 characters.</p>
        
        <p>If a JavaScript statement does not fit on one line, the best place to break it is after an operator:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            <br />
            <code>document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = 
            <br />
            <code style={{color:'#5d0000'}}>"Hello Dolly!"</code>;</code>
        </div>

        <br />

        <p>You can also break up a code line <b>within a text string</b> with a single backslash:</p>
        
        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            <br />
            <code>
                document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = <code style={{color:'#5d0000'}}>"Hello \ 
                <br />
                Dolly!"</code>;
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <br />
            <h3>Note!</h3>
            <p>
                The \ method is not the preferred method. It might not have universal support.
                Some browsers do not allow spaces behind the \ character.
            </p>
            <br />
        </div>

        <br />

        <p>A safer way to break up a string, is to use string addition:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            <br />
            <code>
                document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = <code style={{color:'#5d0000'}}>"Hello"</code> + 
                <br />
                <code style={{color:'#5d0000'}}>"Dolly!"</code>;
            </code>
        </div>

        <br />

        <p>You cannot break up a code line with a backslash:</p>

        <br />

        <div style={{backgroundColor:"#cecece"}}>
            <h3>Example</h3>
            <br />
            <code>
                document.getElementById(<code style={{color:'#5d0000'}}>"demo"</code>).innerHTML = \
                <br />
                <code style={{color:'#5d0000'}}>"Hello Dolly!"</code>;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Strings as Objects</h2>


    </main>
  )
}

export default JavaScriptStrings