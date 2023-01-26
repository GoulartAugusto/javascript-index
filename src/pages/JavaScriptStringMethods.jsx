import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptStringMethods = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript String Methods</h1>

        <div style={{backgroundColor:'#b7ffc3', display:'flex'}}>
            <ul style={{listStyle:'none'}}>
                <li>String length</li>
                <li>String slice()</li>
                <li>String substring()</li>
                <li>String substr()</li>
                <li>String replace()</li>
                <li>String replaceAll()</li>
                <li>String toUpperCase()</li>
                <li>String toLowerCase()</li>
                <li>String concat()</li>
            </ul>
            <ul style={{listStyle:'none'}}>
                <li>String trim()</li>
                <li>String trimStart()</li>
                <li>String trimEnd()</li>
                <li>String padStart()</li>
                <li>String padEnd()</li>
                <li>String charAt()</li>
                <li>String charCodeAt()</li>
                <li>String split()</li>
            </ul>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <p>String search methods are covered in the next chapter.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String Length</h2>

        <p>The <code style={{color:'red'}}>length</code> property returns the length of a string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> length = text.length;</code>

                <br />

                <h4>Result</h4>
                <code>
                    The length of the string is:
                    <br />
                    <br />
                    26
                </code>
            </code>
        </div>

        {/* Just a mark to separete sections */}

        <h2>Extracting String Parts</h2>

        <p>There are 3 methods for extracting a part of a string:</p>

        <ul>
            <li style={{color:'blue'}}>slice(start, end)</li>
            <li style={{color:'blue'}}>substring(start, end)</li>
            <li style={{color:'blue'}}>substr(start, length)</li>
        </ul>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String slice()</h2>

        <p><code style={{color:'red'}}>slice()</code> extracts a part of a string and returns the extracted part in a new string.</p>

        <p>The method takes 2 parameters: start position, and end position (end not included).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>
            <p>Slice out a portion of a string from position 7 to position 13:</p>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = text.slice(7, 13);</code>

                <br />

                <h4>Result</h4>
                <code>
                    The sliced (extracted) part of the string is:
                    <br />
                    <br />
                    Banana
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>

            <p>JavaScript counts positions from zero.</p>
            <p>First position is 0.</p>
            <p>Second position is 1.</p>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>
            <p>If you omit the second parameter, the method will slice out the rest of the string:</p>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = text.slice(7);</code>

                <br />

                <h4>Result</h4>
                <code>
                    Extract a part of a string from position 7:
                    <br />
                    <br />
                    Banana, Kiwi
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>
            <p>If a parameter is negative, the position is counted from the end of the string:</p>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = text.slice(-12);</code>

                <br />

                <h4>Result</h4>
                <code>
                    Extract a part of a string counting from the end:
                    <br />
                    <br />
                    Banana, Kiwi
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>
            <p>This example slices out a portion of a string from position -12 to position -6:</p>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = text.slice(-12, -6);</code>

                <br />

                <h4>Result</h4>
                <code>
                    Extract a part of a string counting from the end:
                    <br />
                    <br />
                    Banana
                </code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String substring()</h2>

        <p><code style={{color:'red'}}>substring()</code> is similar to <code style={{color:'red'}}>slice()</code>.</p>

        <p>The difference is that start and end values less than 0 are treated as 0 in <code style={{color:'red'}}>substring()</code>.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> str = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = str.substring(7, 13);</code>

                <br />

                <h4>Result</h4>
                <code>
                    The substring() method extract a part of a string and returns the extracted parts in a new string:
                    <br />
                    <br />
                    Banana
                </code>
            </code>
        </div>

        <br />

        <p>If you omit the second parameter, <code style={{color:'red'}}>substring()</code> will slice out the rest of the string.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String substr()</h2>

        <p><code style={{color:'red'}}>substr()</code> is similar to <code style={{color:'red'}}>slice()</code>.</p>

        <p>The difference is that the second parameter specifies the <b>length</b> of the extracted part.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> str = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = str.substr(7, 6);</code>

                <br />

                <h4>Result</h4>
                <code>
                    The substr() method extract a part of a string and returns the extracted parts in a new string:
                    <br />
                    <br />
                    Banana
                </code>
            </code>
        </div>
        
        <br />

        <p>If you omit the second parameter, <code style={{color:'red'}}>substr()</code> will slice out the rest of the string.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> str = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = str.substr(7);</code>

                <br />

                <h4>Result</h4>
                <code>
                    The substr() method extract a part of a string and returns the extracted parts in a new string:
                    <br />
                    <br />
                    Banana, Kiwi
                </code>
            </code>
        </div>

        <br />

        <p>If the first parameter is negative, the position counts from the end of the string.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> str = <code style={{color:'#5d0000'}}>"Apple, Banana, Kiwi"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> part = str.substr(-4);</code>

                <br />

                <h4>Result</h4>
                <code>
                    The substr() method extract a part of a string and returns the extracted parts in a new string:
                    <br />
                    <br />
                    Kiwi
                </code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Replacing String Content</h2>

        <p>The <code style={{color:'red'}}>replace()</code> method replaces a specified value with another value in a string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please visit Microsoft!"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> newText = text.replace(<code style={{color:'#5d0000'}}>"Microsoft", "W3Schools"</code>);</code>

                <br />

                <code>
                    <br />
                    Replace "Microsoft" with "W3Schools" in the paragraph below:
                    <br />
                    Please visit Microsoft!
                    <h4>Result</h4>
                    Please visit W3Schools!
                </code>
            </code>
        </div>

        <div style={{backgroundColor:'ligthyellow'}}>
            <h3>Note</h3>

            <p>The <code style={{color:'red'}}>replace()</code> method does not change the string it is called on.</p>

            <p>The <code style={{color:'red'}}>replace()</code> method returns a new string.</p>

            <p>The <code style={{color:'red'}}>replace()</code> method replaces <b>only the first</b> match</p>

            <p>If you want to replace all matches, use a regular expression with the /g flag set. See examples below.</p>
        </div>

        <br />
        
        <p>By default, the replace() method replaces <b>only the first</b> match:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please visit Microsoft and Microsoft!"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> newText = text.replace(<code style={{color:'#5d0000'}}>"Microsoft", "W3Schools"</code>);</code>

                <br />

                <code>
                    <br />
                    Replace "Microsoft" with "W3Schools" in the paragraph below:
                    <br />
                    Please visit Microsoft and Microsoft!
                    <h4>Result</h4>
                    Please visit W3Schools and Microsoft!
                </code>
            </code>
        </div>

        <br />

        <p>By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please visit Microsoft!"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> newText = text.replace(<code style={{color:'#5d0000'}}>"MICROSOFT", "W3Schools"</code>);</code>

                <br />

                <code>
                    <br />
                    Replace "Microsoft" with "W3Schools" in the paragraph below:
                    <br />
                    Please visit Microsoft!
                    <h4>Result</h4>
                    Please visit Microsoft!
                </code>
            </code>
        </div>

        <br />

        <p>To replace case insensitive, use a <b>regular expression</b> with an /i flag (insensitive):</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please visit Microsoft!"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> newText = text.replace(<code style={{color:'#5d0000'}}><code style={{color:'orange'}}>/MICROSOFT/i</code>, "W3Schools"</code>);</code>

                <br />

                <code>
                    <br />
                    Replace "Microsoft" with "W3Schools" in the paragraph below:
                    <br />
                    Please visit Microsoft!
                    <h4>Result</h4>
                    Please visit W3Schools!
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>

            <p>Regular expressions are written without quotes.</p>
        </div>

        <br />

        <p>To replace all matches, use a <b>regular expression</b> with a /g flag (global match):</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"Please visit Microsoft and Microsoft!"</code>;</code>

                <br />
                
                <code><code style={{color:'blue'}}>let</code> newText = text.replace(<code style={{color:'#5d0000'}}><code style={{color:'orange'}}>/Microsoft/g</code>, "W3Schools"</code>);</code>

                <br />

                <code>
                    <br />
                    Replace "Microsoft" with "W3Schools" in the paragraph below:
                    <br />
                    Please visit Microsoft and Microsoft!
                    <h4>Result</h4>
                    Please visit W3Schools and W3Schools!
                </code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String ReplaceAll()</h2>

        <p>In 2021, JavaScript introduced the string method <code style={{color:'red'}}>replaceAll()</code>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>text = text.replaceAll(<code style={{color:'#5d0000'}}>"Cats"</code>, <code style={{color:'#5d0000'}}>"Dogs"</code>)</code>
            
            <br />

            <code>text = text.replaceAll(<code style={{color:'#5d0000'}}>"cats"</code>, <code style={{color:'#5d0000'}}>"dogs"</code>)</code>
        </div>

        <br />

        <p>The <code style={{color:'red'}}>replaceAll()</code> method allows you to specify a regular expression instead of a string to be replaced.</p>

        <p>If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.</p>

        <br />

        
        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>text = text.replaceAll(<code style={{color:'orange'}}>/Cats/g</code>, <code style={{color:'#5d0000'}}>"Dogs"</code>)</code>
            
            <br />

            <code>text = text.replaceAll(<code style={{color:'orange'}}>/cats/g</code>, <code style={{color:'#5d0000'}}>"dogs"</code>)</code>
        </div>

        <br />

        <div style={{backgroundColor:'ligthyellow'}}>
            <h3>Note</h3>

            <p><code style={{color:'red'}}>replaceAll()</code> is an ES2021 feature.</p>

            <p><code style={{color:'red'}}>replaceAll()</code>  does not work in Internet Explorer.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting to Upper and Lower Case</h2>

        <p>A string is converted to upper case with <code style={{color:'red'}}>toUpperCase()</code>:</p>

        <p>A string is converted to lower case with <code style={{color:'red'}}>toLowerCase()</code>:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"Hello World!"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = text1.toUpperCase();</code>
                
                <br />

                <code>
                    <br />
                    Convert string to upper case:
                    <br />
                    Hello World!
                    <h4>Result</h4>
                    HELLO WORLD!
                </code>
            </code>
        </div>

        <br />
        
        <h2>JavaScript String toUpperCase()</h2>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"Hello World!"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = text1.toUpperCase();</code>
                
                <br />

                <code>
                    <br />
                    Convert string to upper case:
                    <br />
                    Hello World!
                    <h4>Result</h4>
                    HELLO WORLD!
                </code>
            </code>
        </div>

        <br />


        <h2>JavaScript String toLowerCase()</h2>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"Hello World!"</code> <code style={{color:'green'}}> // String</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = text1.toLowerCase(); <code style={{color:'green'}}> // text2 is text1 converted to lower</code></code>
                
                <br />

                <code>
                    <br />
                    Convert string to lower case:
                    <br />
                    Hello World!
                    <h4>Result</h4>
                    hello world!
                </code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String concat()</h2>

        <p><code style={{color:'red'}}>concat()</code> joins two or more strings:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"Hello"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = <code style={{color:'#5d0000'}}>"World!"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text3 = text1.concat(<code style={{color:'#5d0000'}}>" "</code>, text2);</code>

                <br />
                

                <code>
                    <br />
                    The concat() method joins two or more strings:
                    <h4>Result</h4>
                    Hello World!
                </code>
            </code>
        </div>

        <br />

        <p>The concat() method can be used instead of the plus operator. These two lines do the same:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code>text = <code style={{color:'#5d0000'}}>"Hello"</code> + <code style={{color:'#5d0000'}}>" "</code> + <code style={{color:'#5d0000'}}>"World!"</code>;</code>

                <br />

                <code>text = <code style={{color:'#5d0000'}}>"Hello"</code>.concat(<code style={{color:'#5d0000'}}>" "</code>, <code style={{color:'#5d0000'}}>"World!"</code>);</code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'ligthyellow'}}>
            <h3>Note</h3>

            <p>All string methods return a new string. They don't modify the original string.</p>

            <p>Formally said:</p>

            <p>Strings are immutable: Strings cannot be changed, only replaced.</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}


        <h2>JavaScript String trim()</h2>

        <p>The <code style={{color:'red'}}>trim()</code> method removes whitespace from both sides of a string:</p>
        
        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = text1.trim();</code>
                
                <br />

                <code>
                    <br />
                    The trim() Method
                    <br />
                    Length text1 = 22
                    <br />
                    Length text2 = 12
                </code>
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String trimStart()</h2>

        <p>CMAScript 2019 added the String method <code style={{color:'red'}}>trimStart()</code> to JavaScript.</p>

        <p>The <code style={{color:'red'}}>trimStart()</code> method works like <code style={{color:'red'}}>trim()</code>, but removes whitespace only from the start of a string.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = text1.trimStart();</code>
                
                <br />

                <code>
                    <br />
                    The trimStart() Method
                    <br />
                    Length text1 = 22
                    <br />
                    Length text2 = 17
                </code>
            </code>
        </div>

        <br />

        <p>JavaScript String trimStart() is supported in all browsers since January 2020.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String trimEnd()</h2>

        <p>ECMAScript 2019 added the String method <code style={{color:'red'}}>trimEnd()</code> to JavaScript.</p>

        <p>The <code style={{color:'red'}}>trimEnd()</code> method works like <code style={{color:'red'}}>trim()</code>, but removes whitespace only from the end of a string.</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text1 = <code style={{color:'#5d0000'}}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text2 = text1.trimEnd();</code>
                
                <br />

                <code>
                    <br />
                    The trimEnd() Method
                    <br />
                    Length text1 = 22
                    <br />
                    Length text2 = 17
                </code>
            </code>
        </div>

        <br />

        <p>JavaScript String <code style={{color:'red'}}>trimEnd()</code> is supported in all browsers since January 2020.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String Padding</h2>

        <p>ECMAScript 2017 added two String methods: <code style={{color:'red'}}>padStart()</code> and <code style={{color:'red'}}>padEnd()</code> to support padding at the beginning and at the end of a string.</p>

        <br />

        <h2>JavaScript String padStart()</h2>

        <p>The <code style={{color:'red'}}>padStart()</code> method pads a string with another string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"5"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> padded = text1.padStart(<code style={{color:'red'}}>4</code>, <code style={{color:'#5d0000'}}>"x"</code>);</code>
                
                <br />

                <code>
                    <br />
                    The padStart() method pads a string with another string:
                    <br />
                    Result
                    <br />
                    xxx5
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"5"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> padded = text1.padStart(<code style={{color:'red'}}>4</code>, <code style={{color:'#5d0000'}}>"0"</code>);</code>
                
                <br />

                <code>
                    <br />
                    The padStart() method pads a string with another string:
                    <br />
                    Result
                    <br />
                    0005
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>

            <p>The <code style={{color:'red'}}>padStart()</code> method is a string method.</p>

            <p>To pad a number, convert the number to a string first.</p>

            <p>See the example below.</p>
        </div>

        <br />

        
        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> numb = <code style={{color:'red'}}>5</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text = numb.toString();</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> padded = text1.padStart(<code style={{color:'red'}}>4</code>, <code style={{color:'#5d0000'}}>"0"</code>);</code>
                
                <br />

                <code>
                    <br />
                    The padStart() method pads a string with another string:
                    <br />
                    Result
                    <br />
                    0005
                </code>
            </code>
        </div>

        <br />

        <p><code style={{color:'red'}}>padStart()</code> is an ECMAScript 2017 feature.</p>

        <p><code style={{color:'red'}}>padStart()</code> is not supported in Internet Explorer.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String padEnd()</h2>

        <p>The <code style={{color:'red'}}>padEnd()</code> method pads a string with another string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"5"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> padded = text1.padEnd(<code style={{color:'red'}}>4</code>, <code style={{color:'#5d0000'}}>"x"</code>);</code>
                
                <br />

                <code>
                    <br />
                    The padEnd() method pads a string with another string:
                    <br />
                    Result
                    <br />
                    5xxx
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"5"</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> padded = text1.padEnd(<code style={{color:'red'}}>4</code>, <code style={{color:'#5d0000'}}>"0"</code>);</code>
                
                <br />

                <code>
                    <br />
                    The padEnd() method pads a string with another string:
                    <br />
                    Result
                    <br />
                    5000
                </code>
            </code>
        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>

            <p>The <code style={{color:'red'}}>padEnd()</code> method is a string method.</p>

            <p>To pad a number, convert the number to a string first.</p>

            <p>See the example below.</p>
        </div>

        <br />


        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code><code style={{color:'blue'}}>let</code> numb = <code style={{color:'red'}}>5</code>;</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> text = numb.toString();</code>

                <br />

                <code><code style={{color:'blue'}}>let</code> padded = text1.padEnd(<code style={{color:'red'}}>4</code>, <code style={{color:'#5d0000'}}>"x"</code>);</code>
                
                <br />

                <code>
                    <br />
                    The padEnd() method pads a string with another string:
                    <br />
                    Result
                    <br />
                    5xxx
                </code>
            </code>
        </div>

        <br />


        <p><code style={{color:'red'}}>padEnd()</code> is an ECMAScript 2017 feature.</p>

        <p><code style={{color:'red'}}>padEnd()</code> is not supported in Internet Explorer.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Extracting String Characters</h2>

        <p>There are 3 methods for extracting string characters:</p>

        <ul>
            <li><code style={{color:'red'}}>charAt(position)</code></li>
            <li><code style={{color:'red'}}>charCodeAt(position)</code></li>
            <li>Property access [ ]</li>
        </ul>

        <br />

        <h2>JavaScript String charAt()</h2>

        <p>The <code style={{color:'red'}}>charAt()</code> method returns the character at a specified index (position) in a string:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"HELLO WORLD"</code></code>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>CHAR</code> = text.charAt(<code style={{color:'red'}}>0</code>);</code>

            <br />

            <p>The charAt() method returns the character at a given position in a string:</p>

            <code>
                Result:

                <br />

                H
            </code>
        </div>


        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript String charCodeAt()</h2>

        <p>The <code style={{color:'red'}}>charCodeAt()</code> method returns the unicode of the character at a specified index in a string:</p>

        <p>The method returns a UTF-16 code (an integer between 0 and 65535).</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"HELLO WORLD"</code></code>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>char</code> = text.charCodeAt(<code style={{color:'red'}}>0</code>);</code>

            <br />

            <p>The charCodeAt() method returns the unicode of the character at a given position in a string:</p>

            <code>
                Result:

                <br />

                72
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Property Access</h2>

        <p>ECMAScript 5 (2009) allows property access [ ] on strings:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"HELLO WORLD"</code></code>
            
            <br />

            <code><code style={{color:'blue'}}>let</code> <code style={{color:'blue'}}>char</code> = text[<code style={{color:'red'}}>0</code>];</code>

            <br />

            <p>Property access on strings:</p>

            <code>
                H
            </code>
        </div>
        
        
        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <h3>Note</h3>

            <p>Property access might be a little <b>unpredictable</b>:</p>

            <ul>
                <li>It makes strings look like arrays (but they are not)</li>
                <li>If no character is found, [ ] returns undefined, while charAt() returns an empty string.</li>
                <li>It is read only. str[0] = "A" gives no error (but does not work!)</li>
            </ul>
        </div>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>"HELLO WORLD"</code></code>
            
            <br />

            <code>text[<code style={{color:'red'}}>0</code>] = <code style={{color:'#5d0000'}}>"A</code>; <code style={{color:'green'}}>// Gives no error, but does not work</code></code>

            <br />

            <p>Property acces on strings are read only:</p>

            <code>
            HELLO WORLD
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting a String to an Array</h2>

        <div style={{backgroundColor:'lightyellow'}}>
            <br />

            <p>If you want to work with a string as an array, you can convert it to an array.</p>

            <br />
        </div>

        <br />

        <h2>JavaScript String split()</h2>

        <p>A string can be converted to an array with the <code style={{color:'red'}}>split() </code>
        method:</p>
         
        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>text.split(<code style={{color:'#5d0000'}}>","</code>) <code style={{color:'green'}}>// Split on commas</code></code>

            <br />

            <code>text.split(<code style={{color:'#5d0000'}}>" "</code>) <code style={{color:'green'}}>// Split on spaces</code></code>

            <br />

            
            <code>text.split(<code style={{color:'#5d0000'}}>"|"</code>) <code style={{color:'green'}}>// Split on pipes</code></code>

        </div>

        <br />

        <p>If the separator is omitted, the returned array will contain the whole string in index [0].</p>

        <p>If the separator is "", the returned array will be an array of single characters:</p>

        <br />

        <div style={{backgroundColor:'#cecece'}}>
            <h3>Example</h3>

            <code>text.split(<code style={{color:'#5d0000'}}>""</code>)</code>

        </div>

    </main>
  )
}

export default JavaScriptStringMethods