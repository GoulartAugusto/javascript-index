import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptReservedWords = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Reserved Words</h1>

        <p>In JavaScript you cannot use these reserved words as variables, labels, or function names:</p>

        {/* Just a mark to separete sections */}

        <br />

        <table>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>abstract</td>
                <td>arguments</td>
                <td>await*</td>
                <td>boolean</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>break</td>
                <td>byte</td>
                <td>case</td>
                <td>catch</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>char</td>
                <td>class*</td>
                <td>const</td>
                <td>continue</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>debugger</td>
                <td>default</td>
                <td>delete</td>
                <td>do</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>double</td>
                <td>else</td>
                <td>enum*</td>
                <td>eval</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>export*</td>
                <td>extends*</td>
                <td>false</td>
                <td>final</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>finally</td>
                <td>float</td>
                <td>for</td>
                <td>function</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>goto</td>
                <td>if</td>
                <td>implements</td>
                <td>import*</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>in</td>
                <td>instanceof</td>
                <td>int</td>
                <td>interface</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>let</td>
                <td>long</td>
                <td>native</td>
                <td>new</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>null</td>
                <td>package</td>
                <td>private</td>
                <td>protected</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>public</td>
                <td>return</td>
                <td>short</td>
                <td>static</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>super*</td>
                <td>switch</td>
                <td>synchronized</td>
                <td>this</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>throw</td>
                <td>throws</td>
                <td>transient</td>
                <td>true</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>try</td>
                <td>typeof</td>
                <td>var</td>
                <td>void</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>volatile</td>
                <td>while</td>
                <td>with</td>
                <td>yield</td>
            </tr>
        </table>

        <br />

        <p>Words marked with* are new in ECMAScript 5 and 6.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Removed Reserved Words</h2>

        <p>The following reserved words have been removed from the ECMAScript 5/6 standard:</p>

        <table>
            <tr style={{display:"flex", gap:'4rem'}}>
                <td>abstract</td>
                <td>boolean</td>
                <td>byte</td>
                <td>char</td>
            </tr>
            <tr style={{display:"flex", gap:'4rem'}}>
                <td>double</td>
                <td>final</td>
                <td>float</td>
                <td>goto</td>
            </tr>
            <tr style={{display:"flex", gap:'4rem'}}>
                <td>int</td>
                <td>long</td>
                <td>native</td>
                <td>short</td>
            </tr>
            <tr style={{display:"flex", gap:'4rem'}}>
                <td>synchronized</td>
                <td>throws</td>
                <td>transient</td>
                <td>volatile</td>
            </tr>
        </table>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>Do not use these words as variables. ECMAScript 5/6 does not have full support in all browsers.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Objects, Properties, and Methods</h2>

        <p>You should also avoid using the name of JavaScript build-in objects, properties and methods:</p>

        <table>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>Array</td>
                <td>Date</td>
                <td>eval</td>
                <td>function</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>hasOwnProperty</td>
                <td>Infinity</td>
                <td>isFinite</td>
                <td>isNaN</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>isPrototypeOf</td>
                <td>length</td>
                <td>Math</td>
                <td>NaN</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>name</td>
                <td>Number</td>
                <td>Object</td>
                <td>prototype</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>String</td>
                <td>toString</td>
                <td>undefined</td>
                <td>valueOf</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Java Reserved Words</h2>

        <p>JavaScript is often used together with Java. You should avoid using some Java objects and properties as JavaScript identifiers:</p>

        <br />

        <table>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>getClass</td>
                <td>java</td>
                <td>JavaArray</td>
                <td>JavaClass</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>javaObject</td>
                <td>JavaPackage</td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Other Reserved Words</h2>

        <p>JavaScript can be used as the programming language in many applications.</p>

        <p>You should also avoid using the name of HTML and Window objects and properties:</p>

        <br />

        <table>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>alert</td>
                <td>all</td>
                <td>anchor</td>
                <td>anchors</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>area</td>
                <td>assign</td>
                <td>blur</td>
                <td>button</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>checkbox</td>
                <td>clearInterval</td>
                <td>clearTimeout</td>
                <td>clientInformation</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>close</td>
                <td>closed</td>
                <td>confirm</td>
                <td>constructor</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>crypto</td>
                <td>decodeuri</td>
                <td>decodeURIComponent</td>
                <td>defaultStatus</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>document</td>
                <td>element</td>
                <td>elements</td>
                <td>embed</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>embeds</td>
                <td>encodeURI</td>
                <td>encodeURIComponent</td>
                <td>escape</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>event</td>
                <td>fileUpload</td>
                <td>focus</td>
                <td>form</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>forms</td>
                <td>frame</td>
                <td>innerHeight</td>
                <td>innerWidth</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>layer</td>
                <td>layers</td>
                <td>link</td>
                <td>location</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>mimeTypes</td>
                <td>navigate</td>
                <td>navigator</td>
                <td>frames</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>frameRate</td>
                <td>hidden</td>
                <td>history</td>
                <td>image</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>images</td>
                <td>offscreenBuffering</td>
                <td>open</td>
                <td>opener</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>option</td>
                <td>outerHeight</td>
                <td>outerWidth</td>
                <td>packages</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>pageXOffset</td>
                <td>pageYOffset</td>
                <td>parent</td>
                <td>parseFloat</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>parseInt</td>
                <td>password</td>
                <td>pkcs11</td>
                <td>plugin</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>prompt</td>
                <td>proprtyIsEnum</td>
                <td>radio</td>
                <td>reset</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>screenX</td>
                <td>screenY</td>
                <td>scroll</td>
                <td>secure</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>select</td>
                <td>self</td>
                <td>setInterval</td>
                <td>setTimeout</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>status</td>
                <td>submit</td>
                <td>taint</td>
                <td>text</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>textarea</td>
                <td>top</td>
                <td>unescape</td>
                <td>untaint</td>
            </tr>
            <tr style={{gap:'4rem', display:'flex'}}>
                <td>window</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>HTML Eventes Handlers</h2>

        <p>In addition you should avoid using the name of all HTML event handlers:</p>

        <br />
        
        <p>Examples:</p>

        <table>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>onblur</td>
                <td>onclick</td>
                <td>onerror</td>
                <td>onfocus</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>onkeydown</td>
                <td>onkeypress</td>
                <td>onkeyup</td>
                <td>onmouseover</td>
            </tr>
            <tr style={{display:'flex', gap:'4rem'}}>
                <td>onload</td>
                <td>onmouseup</td>
                <td>onmousedown</td>
                <td>onsubmit</td>
            </tr>
        </table>

    </main>
  )
}

export default JavaScriptReservedWords