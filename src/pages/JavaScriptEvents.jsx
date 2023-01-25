import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptEvents = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>
        <h1>JavaScript Events</h1>

        <p>HTML events are <b>"things"</b> that happen to HTML elements.</p>

        <p>When JavaScript is used in HTML pages, JavaScript can <b>"react"</b> on these events.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>HTML Events</h2>

        <p>An HTML event can be something the browser does, or something a user does.</p>

        <p>Here are some examples of HTML events:</p>

        <br />

        <ul>
            <li>An HTML web page has finished loading</li>
            <li>An HTML input field was changed</li>
            <li>An HTML button was clicked</li>
        </ul>

        <br />

        <p>Often, when events happen, you may want to do something.</p>

        <p>JavaScript lets you execute code when events are detected.</p>

        <p>HTML allows event handler attributes, <b>with JavaScript code</b>, to be added to HTML elements.</p>

        <br />

        <p>With single quotes:</p>

        <br />

        <code>&lt;element <code style={{color:'red'}}>event</code>=<code style={{color:'blue'}}>'some JavaScript'</code>&gt;</code>

        <br />

        <p>With double quotes:</p>

        <br />

        <code>&lt;element <code style={{color:'red'}}>event</code>=<code style={{color:'blue'}}>"some JavaScript"</code>&gt;</code>

        <br />

        <p>In the following example, an onclick attribute (with code), is added to a &lt;button&gt; element:</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>
            
            <br />

            <code>
                &lt;button <code style={{color:'red'}}>onclick</code>=<code style={{color:'blue'}}>"document.getElementById('demo').innerHTML = Date()"</code>&gt;The time is?&lt;/button&gt;
            </code>

        </div>

        <br />

        <p>In the example above, the JavaScript code changes the content of the element with id="demo".</p>

        <p>In the next example, the code changes the content of its own element (using <code style={{color:'red'}}>this.innerHTML</code>):</p>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>
            
            <br />

            <code>
                &lt;button <code style={{color:'red'}}>onclick</code>=<code style={{color:'blue'}}>"this.innerHTML = Date()"</code>&gt;The time is?&lt;/button&gt;
            </code>

        </div>

        <br />

        <div style={{backgroundColor:'lightyellow'}}>
            <p>JavaScript code is often several lines long. It is more common to see event attributes calling functions:</p>
        </div>

        <br />

        <div style={{backgroundColor: '#cecece'}}>
            <h3>Example</h3>
            
            <br />

            <code>
                &lt;button <code style={{color:'red'}}>onclick</code>=<code style={{color:'blue'}}>"displayDate()"</code>&gt;The time is?&lt;/button&gt;
            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Common HTML Events</h2>

        <p>Here is a list of some common HTML events:</p>

        <br />

        <table>
            <tr>
                <th>Event</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>onchange</td>
                <td>An HTML element has been changed</td>
            </tr>
            <tr>
                <td>onclick</td>
                <td>The user clicks an HTML element</td>
            </tr>
            <tr>
                <td>onmouseover</td>
                <td>The user moves the mouse over an HTML element</td>
            </tr>
            <tr>
                <td>onmouseout</td>
                <td>The user moves the mouse away from an HTML element</td>
            </tr>
            <tr>
                <td>onkeydown</td>
                <td>The user pushes a keyboard key</td>
            </tr>
            <tr>
                <td>onload</td>
                <td>The browser has finished loading the page</td>
            </tr>
        </table>

        <br />

        <p>The list is much longer: <Link href='https://www.w3schools.com/jsref/dom_obj_event.asp' target='_blank'>W3Schools JavaScript Reference HTML DOM Events.</Link></p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Event Handlers</h2>

        <p>Event handlers can be used to handle and verify user input, user actions, and browser actions:</p>

        <br />

        <ul>
            <li>Things that should be done every time a page loads</li>
            <li>Things that should be done when the page is closed</li>
            <li>Action that should be performed when a user clicks a button</li>
            <li>Content that should be verified when a user inputs data</li>
            <li>And more ...</li>
        </ul>

        <br />

        <p>Many different methods can be used to let JavaScript work with events:</p>

        <br />
        
        <ul>
            <li>HTML event attributes can execute JavaScript code directly</li>
            <li>HTML event attributes can call JavaScript functions</li>
            <li>You can assign your own event handler functions to HTML elements</li>
            <li>You can prevent events from being sent or being handled</li>
            <li>And more ...</li>
        </ul>

    </main>
  )
}

export default JavaScriptEvents