import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptGetDateMethods = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Get Date Methods</h1>

        {/* Just a mark to separete sections */}

        <h2>The new Date() Constructor</h2>

        <p>In JavaScript, date objects are created with <code style={{color:'blue'}}>new Date()</code>.</p>

        <p><code style={{color:'blue'}}>new Date()</code> returns a date object with the current date and time.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Get the Current Time</h3>

            <code><code style={{color:'blue'}}>const</code> date = <code style={{color:'blue'}}>new</code> Date()</code>

            <br />

            <p>Create a new date object with the current date and time:</p>

            <p>Tue Feb 14 2023 18:56:18 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Date Get Methods</h2>

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>getFullYear()</td>
                <td>Get <b>year</b> as a four digit number (yyyy)</td>
            </tr>
            <tr>
                <td>getMonth()</td>
                <td>Get <b>month</b> as a number (0-11)</td>
            </tr>
            <tr>
                <td>getDate()</td>
                <td>Get <b>day</b> as a number (1-31)</td>
            </tr>
            <tr>
                <td>getDay()</td>
                <td>Get <b>weekday</b> as a number (0-6)</td>
            </tr>
            <tr>
                <td>getHours()</td>
                <td>Get <b>hour</b> (0-23)</td>
            </tr>
            <tr>
                <td>getMinutes()</td>
                <td>Get <b>minute</b> (0-59)</td>
            </tr>
            <tr>
                <td>getSeconds()</td>
                <td>Get <b>second</b> (0-59)</td>
            </tr>
            <tr>
                <td>getMilliseconds()</td>
                <td>Get <b>millisecond</b> (0-999)</td>
            </tr>
            <tr>
                <td>getTime()</td>
                <td>Get <b>time</b> (milliseconds since January 1, 1970)</td>
            </tr>
        </table>

        <br />
        <br />

        <div style={{background:'lightyellow'}}>
            <h3>Note 1</h3>

            <p>The get methods above return <b>Local time</b>.</p>
            <p><b>Universal time</b> (UTC) is documented at the bottom of this page.</p>

            <br />
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <h3>Note 2</h3>

            <p>The get methods return information from existing date objects.</p>
            <p>In a date object, the time is static. The "clock" is not "running".</p>
            <p>The time in a date object is NOT the same as current time.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getFullYear() Method</h2>

        <p>The <code style={{color:'blue'}}>getFullYear()</code> method returns the year of a date as a four digit number:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2021-03-25"</code>)</code>

            <br />

            <code>d.getFullYear();</code>

            <br />

            <p>Return the full year of a date object:</p>

            <p>2021</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date()</code>

            <br />

            <code>d.getFullYear();</code>

            <br />

            <p>Return the full year of a date object:</p>

            <p>2023</p>
        </div>
        
        <br />

        <div style={{background:"#fecece"}}>
            <h3>Warning !</h3>

            <p>Old JavaScript code might use the non-standard method getYear().</p>

            <p>getYear() is supposed to return a 2-digit year.</p>

            <p>getYear() is deprecated. Do not use it!</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getMonth() Method</h2>

        <p>The <code style={{color:'blue'}}>getMonth()</code> method returns the month of a date as a number (0-11).</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <h3>Note</h3>

            <p>In JavaScript, January is month number 0, February is number 1, ...</p>

            <p>Finally, December is month number 11.</p>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2021-03-25"</code>)</code>

            <br />

            <code>d.getMonth();</code>

            <br />

            <p>Return the month of a date as a number from 0 to 11.</p>

            <p>To get the correct month number, you must add 1:</p>

            <p>3</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date()</code>

            <br />

            <code>d.getMonth();</code>

            <br />

            <p>Return the month of a date as a number from 0 to 11.</p>

            <p>To get the correct month number, you must add 1:</p>

            <p>2</p>

        </div>

        <br />
        
        <div style={{background:'lightyellow'}}>
            <h3>Note</h3>

            <p>You can use an array of names to return the month as a name:</p>

            <br />
        </div>

        <br />

        
















    </main>
  )
}

export default JavaScriptGetDateMethods