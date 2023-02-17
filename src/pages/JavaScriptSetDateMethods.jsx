import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptSetDateMethods = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Set Date Methods</h1>

        <p>Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.</p>

        {/* Just a mark to separete sections */}

        <h2>Set Date Methods</h2>

        <p>Set Date methods are used for setting a part of a date:</p>

        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>setDate()</td>
                <td>Set the day as a number (1-31)</td>
            </tr>
            <tr>
                <td>setFullYear()</td>
                <td>Set the year (optionally month and day)</td>
            </tr>
            <tr>
                <td>setHours()</td>
                <td>Set the hour (0-23)</td>
            </tr>
            <tr>
                <td>setMilliseconds()</td>
                <td>Set the milliseconds (0-999)</td>
            </tr>
            <tr>
                <td>setMinutes()</td>
                <td>Set the minutes (0-59)</td>
            </tr>
            <tr>
                <td>setMonth()</td>
                <td>Set the month (0-11)</td>
            </tr>
            <tr>
                <td>setSeconds()</td>
                <td>Set the seconds (0-59)</td>
            </tr>
            <tr>
                <td>setTime()</td>
                <td>Set the time (milliseconds since January 1, 1970)</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The setFullYear() Method</h2>

        <p>The <code style={{color:"blue"}}>setFullYear()</code> method sets the year of a date object. In this example to 2020:</p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setFullYear(<code style={{color:'red'}}>2020</code>);</code>

            <br />

            <p>The setFullYear() method sets the year of a date object:</p>

            <p>Mon Feb 17 2020 15:10:23 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        <p>The <code style={{color:"blue"}}>setFullYear()</code> method can <b>optionally</b> set month and day:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setFullYear(<code style={{color:'red'}}>2020</code> ,<code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>3</code>);</code>

            <br />

            <p>The setFullYear() method can optionally set month and day.</p>

            <p>Please note that month counts from 0. December is month 11:</p>

            <p>Thu Dec 03 2020 15:11:48 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The setMonth() Method</h2>

        <p>The <code style={{color:'blue'}}>setMonth()</code> method sets the month of a date object (0-11):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setMonth(<code style={{color:'red'}}>11</code>);</code>

            <br />

            <p>The setMonth() method sets the mont of a date object.</p>

            <p>Note that months count from 0. December is month 11:</p>

            <p>Sun Dec 17 2023 15:13:27 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The setDate() Method</h2>

        <p>The <code style={{color:'blue'}}>setDate()</code> method sets the day of a date object (1-31):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setDate(<code style={{color:'red'}}>15</code>);</code>

            <br />

            <p>The setMonth() method sets the mont of a date object.</p>

            <p>The setDate() method sets the day of a date object:</p>

            <p>Wed Feb 15 2023 15:15:02 GMT-0300 (GMT-03:00)</p>

        </div>

        <p>The setDate() method can also be used to <b>add days</b> to a date:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setDate(d.getDate() + <code style={{color:'red'}}>50</code>);</code>

            <br />

            <p>The setDate() method can be used to add days to a date.</p>

            <p>Sat Apr 08 2023 15:16:36 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>If adding days shifts the month or year, the changes are handled automatically by the Date object.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The setHours() Method</h2>

        <p>The <code style={{color:'blue'}}>setHours()</code> method sets the hours of a date object (0-23):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setHours(<code style={{color:'red'}}>22</code>);</code>

            <br />

            <p>The setHours() method sets the hours of a date object:</p>

            <p>Fri Feb 17 2023 22:19:36 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The setMinutes() Method</h2>

        <p>The <code style={{color:'blue'}}>setMinutes()</code> method sets the minutes of a date object (0-59):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setMinutes(<code style={{color:'red'}}>30</code>);</code>

            <br />

            <p>The setMinutes() method sets the minutes of a date object (0-59):</p>

            <p>Fri Feb 17 2023 15:30:44 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The setSeconds() Method</h2>

        <p>The <code style={{color:"blue"}}>setSeconds()</code> method sets the seconds of a date object (0-59):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.setSeconds(<code style={{color:'red'}}>30</code>);</code>

            <br />

            <p>The setSeconds() method sets the seconds of a date object (0-59):</p>

            <p>Fri Feb 17 2023 15:22:30 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Compare Dates</h2>

        <p>Dates can easily be compared.</p>

        <p>The following example compares today's date with January 14, 2100:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;</code>

            <br />

            <code><code style={{color:"blue"}}>const</code> today = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code><code style={{color:"blue"}}>const</code> someday = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>someday.setFullYear(<code style={{color:'red'}}>2100</code>, <code style={{color:'red'}}>0</code>, <code style={{color:'red'}}>14</code>);</code>

            <br />
            <br />

            <code><code style={{color:'blue'}}>if</code> (<code>someday</code> &gt; today) &#123;</code>

            <br />

            <code>text = <code style={{color:'#5d0000'}}>"Today is before January 14, 2100."</code>;</code>

            <br />

            &#125; <code style={{color:'blue'}}>else</code> &#123;

            <br />

            <code>text = <code style={{color:'#5d0000'}}>"Today is after January 14, 2100."</code>;</code>

            <br />

            &#125;

            <br />
            <br />

            <p>Today is before January 14, 2100.</p>

        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <p>JavaScript counts months from 0 to 11. January is 0. December is 11.</p>

            <br />
        </div>



    </main>
  )
}

export default JavaScriptSetDateMethods