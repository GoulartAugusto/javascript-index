import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptRegularExpressions = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Regular Expressions</h1>

        <p>A regular expression is a sequence of characters that forms a search pattern.</p>

        <p>The search pattern can be used for text search and text replace operations.</p>

        {/* Just a mark to separete sections */}

        <h2>What Is a Regular Expression?</h2>

        <p>A regular expression is a sequence of characters that forms a <b>search pattern</b>.</p>

        <p>When you search for data in a text, you can use this search pattern to describe what you are searching for.</p>

        <p>A regular expression can be a single character, or a more complicated pattern.</p>

        <p>Regular expressions can be used to perform all types of <b>text search</b> and <b>text replace</b> operations.</p>

        <br />

        <h3>Syntax</h3>

        <code style={{background:'#cecece'}}>
            <i>/pattern/modifiers;</i>
        </code>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>/w3schools/i;</code>
        </div>

        <br />

        <p>Example explained:</p>

        <p><b>w3schools/i</b>  is a regular expression.</p>

        <p><b>w3schools</b>  is a pattern (to be used in a search).</p>

        <p><b>i</b>  is a modifier (modifies the search to be case-insensitive).</p>

        {/* Just a mark to separete sections */}

        <h2>Using String Methods</h2>

        <p>In JavaScript, regular expressions are often used with the two <b>string methods</b>: <code style={{color:'blue'}}>search()</code> and <code style={{color:'blue'}}>replace()</code>.</p>
    
        <p>The <code style={{color:'blue'}}>search()</code> method uses an expression to search for a match, and returns the position of the match.</p>
    
        <p>The <code style={{color:'blue'}}>replace()</code> method returns a modified string where the pattern is replaced.</p>

        {/* Just a mark to separete sections */}

        <h2>Using String search() With a String</h2>

        <p>The <code style={{color:'blue'}}>search()</code> method searches a string for a specified value and returns the position of the match:</p>
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>Use a string to do a search for "W3schools" in a string:</p>

            <br />

            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Visit W3Schools!"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> n = text.search(<code style={{color:'#5d0000'}}>"W3Schools"</code>);
            </code>

            <p>The result in <i>n</i> will be:</p>

            <code>6</code>
        </div>

        {/* Just a mark to separete sections */}

        <h2>Using String search() With a Regular Expression</h2>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>Use a regular expression to do a case-insensitive search for "w3schools" in a string:</p>

            <br />

            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Visit W3Schools!"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> n = text.search(<code style={{color:'orange'}}>/W3Schools/i</code>);
            </code>

            <p>The result in <i>n</i> will be:</p>

            <code>6</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using String replace() With a String</h2>

        <p>The <code style={{color:'blue'}}>replace()</code> method replaces a specified value with another value in a string:</p>

        <div style={{background:'#cecece'}}>
            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Visit Microsoft!"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> result = text.replace(<code style={{color:'#5d0000'}}>"Microsoft"</code>, <code style={{color:'#5d0000'}}>"Google"</code>)
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Use String replace() With a Regular Expression</h2>

        <div style={{background:'#cecece'}}>
            <p>Use a case insensitive regular expression to replace Microsoft with Google in a string:</p>

            <code>
                <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Visit Microsoft!"</code>;

                <br />

                <code style={{color:'blue'}}>let</code> result = text.replace(<code style={{color:'orange'}}>/microsoft/i</code>, <code style={{color:'#5d0000'}}>"Google"</code>)
            </code>

            <p>The result in res will be:</p>

            <p>"Visit Google!"</p>
        </div>

        {/* Just a mark to separete sections */}
        
        <h2>Did you Notice?</h2>

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Regular expression arguments (instead of string arguments) can be used in the methods above.</p>
        
            <p>Regular expressions can make your search much more powerful (case insensitive for example).</p>
        
            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Regular Expression Modifiers</h2>

        <p><b>Modifiers</b> can be used to perform case-insensitive more global searches:</p>

        <br />

        <table>
            <tr>
                <th>Modifier</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>i</td>
                <td>Perform case-insensitive matching</td>
            </tr>
            <tr>
                <td>g</td>
                <td>Perform a global match (find all matches rather than stopping after the first match)</td>
            </tr>
            <tr>
                <td>m</td>
                <td>Perform multiline matching</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Regular Expression Patterns</h2>

        <p><b>Brackets</b> are used to find a range of characters:</p>

        <table>
            <tr>
                <th>Expression</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>[abc]</td>
                <td>Find any of the characters between the brackets</td>
            </tr>
            <tr>
                <td>[0-9]</td>
                <td>Find any of the digits between the brackets</td>
            </tr>
            <tr>
                <td>(x|y)</td>
                <td>Find any of the alternatives separated with |</td>
            </tr>
        </table>

        <br />

        <p><b>Metacharacters</b> are characters with a special meaning:</p>

        <br />

        <table>
            <tr>
                <th>Metacharacter</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>\d</td>
                <td>Find a digit</td>
            </tr>
            <tr>
                <td>\s</td>
                <td>Find a whitespace character</td>
            </tr>
            <tr>
                <td>\b</td>
                <td>Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b</td>
            </tr>
            <tr>
                <td>\uxxxx</td>
                <td>Find the Unicode character specified by the hexadecimal number xxxx</td>
            </tr>
        </table>

        <br />

        <p>Quantifiers define quantities:</p>

        <br />

        <table>
            <tr>
                <th>Quantifiers</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>n+</td>
                <td>Matches any string that contains at least one n</td>
            </tr>
            <tr>
                <td>n*</td>
                <td>Matches any string that contains zero or more occurrences of n</td>
            </tr>
            <tr>
                <td>n?</td>
                <td>Matches any string that contains zero or one occurrences of n</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using the RegExp Object</h2>

        <p>In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using test()</h2>

        <p>The <code style={{color:'blue'}}>test()</code> method is a RegExp expression method.</p>

        <p>It searches a string for a pattern, and returns true or false, depending on the result.</p>

        <p>The following example searches a string for the character "e":</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>
                    <code style={{color:"blue"}}> const</code> pattern = <code style={{color:'orange'}}>/e/</code>;

                    <br />

                    <code>pattern.test(<code style={{color:"#5d0000"}}>"The best things in life are free!"</code>)</code>;
                </code>
                
                <p>Since there is an "e" in the string, the output of the code above will be:</p>

                <code>true</code>
            </code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:</p>

            <code>
                <code style={{color:'orange'}}>/e/</code>.test(<code style={{color:"#5d0000"}}>"The best things in life are free!"</code>);
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using exec()</h2>

        <p>The <code style={{color:'blue'}}>exec()</code> method is  RegExp expression method.</p>

        <p>It searches a string for a specified pattern, and returns the found text as an object.</p>

        <p>If no match is found, it returns an empty <i>(null)</i> object.</p>

        <p>The following example searches a string for the character "e":</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'orange'}}>/e/</code>.exec(<code style={{color:"#5d0000"}}>"The best things in life are free!"</code>);
            </code>

            <p>Found e in position 2 in the text: The best things in life are free!</p>
        </div>
    </main>
  )
}

export default JavaScriptRegularExpressions