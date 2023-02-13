import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';


const JavaScriptDateFormats = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Date Formats</h1>

        {/* Just a mark to separete sections */}
        
        <h2>JavaScript Date Input</h2>

        <p>There are generally 3 types of JavaScript date input formats:</p>

        <table>
            <tr>
                <th>Type</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>ISO Date</td>
                <td>"2015-03-25" (The International Standard)</td>
            </tr>
            <tr>
                <td>Short Date</td>
                <td>"03/25/2015"</td>
            </tr>
            <tr>
                <td>Long Date</td>
                <td>"Mar 25 2015" or "25 Mar 2015"</td>
            </tr>
        </table>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>The ISO format follows a strict standard in JavaScript.</p>
            <p>The other formats are not so well defined and might be browser specific.</p>
            <br />
        </div>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Date Output</h2>

        <p>Independent of input format, JavaScript will (by default) output dates in full text string format:</p>

        <div style={{background:'#cecece'}}>
            <code>Fri Feb 10 2023 18:27:55 GMT-0300 (GMT-03:00)</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript ISO Dates</h2>

        <p>ISO 8601 is the international standard for the representation of dates and times.</p>

        <p>The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example (Complete date)</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"2015-03-25"</code>);</code>

            <br />

            <p>Tue Mar 24 2015 21:00:00 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>The computed date will be relative to your time zone.</p>
            <p>Depending on your time zone, the result above will vary between March 24 and March 25.</p>
            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>ISO Dates (Year and Month)</h2>

        <p>ISO dates can be written without specifying the day (YYYY-MM):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"2015-03"</code>);</code>

            <br />

            <p>Sat Feb 28 2015 21:00:00 GMT-0300 (GMT-03:00)</p>
        </div>

        <div style={{background:'lightyellow'}}>
            <br />
            <p>Time zones will vary the result above between December 31 2014 and January 01 2015.</p>
            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>ISO Dates (Date-Time)</h2>

        <p>ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"2015-03-25T12:00:00Z"</code>);</code>

            <br />

            <p>Separate date and time with a capital T.</p>

            <p>Indicate UTC time with a capital Z.</p>

            <p>Wed Mar 25 2015 09:00:00 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        <p>Date and time is separated with a capital T.</p>

        <p>UTC time is defined with a capital letter Z.</p>

        <p>If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"2015-03-25T12:00:00-06:30"</code>);</code>

            <br />

            <p>Modify the time relative to UTC by adding +HH:MM or subtraction -HH:MM to the time.</p>

            <p>Wed Mar 25 2015 15:00:00 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />
            <p>UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).</p>
            <br />
        </div>

        <br />

        <div style={{background:'#fdcece'}}>
            <br />
            <p>Omitting T or Z in a date-time string can give different results in different browsers.</p>
            <br />
        </div>

        <br />


        {/* Just a mark to separete sections */}

        <h2>Time Zones</h2>

        <p>When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.</p>

        <p>When getting a date, without specifying the time zone, the result is converted to the browser's time zone.</p>

        <p>In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.</p>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Short Dates.</h2>

        <p>Short dates are written with an "MM/DD/YYYY" syntax like this:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"03/25/2015"</code>);</code>

            <br />

            <p>Wed Mar 25 2015 00:00:00 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>WARNINGS !</h2>

        <div style={{background:'#cecece'}}>

            <p>In some browsers, months or days with no leading zeroes may produce an error:</p>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"2015-3-25"</code>);</code>

        </div>

        <br />

        <div style={{background:'#cecece'}}>

        <p>The behavior of "YYYY/MM/DD" is undefined.
        Some browsers will try to guess the format. Some will return NaN.</p>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"2015/03/25"</code>);</code>

        </div>

        <br />

        <div style={{background:'#cecece'}}>

        <p>The behavior of  "DD-MM-YYYY" is also undefined.
        Some browsers will try to guess the format. Some will return NaN.</p>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"25-03-2015"</code>);</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Long Dates.</h2>

        <p>Long dates are most often written with a "MMM DD YYYY" syntax like this:</p>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"Mar 25 2015"</code>);</code>

        <br />

        <p>Wed Mar 25 2015 00:00:00 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        <p>Month and day can be in any order:</p>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"25 Mar 2015"</code>);</code>

        <br />

        <p>Wed Mar 25 2015 00:00:00 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        <p>And, month can be written in full (January), or abbreviated (Jan):</p>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"January 25 2015"</code>);</code>

        <br />

        <p>Sun Jan 25 2015 00:00:00 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"Jan 25 2015"</code>);</code>

        <br />

        <p>Sun Jan 25 2015 00:00:00 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        <p>Commas are ignored. Names are case insensitive:</p>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code style={{color:'#5d0000'}}>"Jan 25 2015"</code>);</code>

        <br />

        <p>Sun Jan 25 2015 00:00:00 GMT-0300 (GMT-03:00)</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Date Input - Parsing Dates</h2>

        <p>If you have a valid date string, you can use the <code style={{color:'blue'}}>Date.parse()</code> method to convert it to milliseconds.</p>
        
        <p><code style={{color:'blue'}}>Date.parse()</code> returns the number of milliseconds between the date and January 1, 1970:</p>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> msec = Date.parse(<code style={{color:'#5d0000'}}>"March 21, 2012"</code>);</code>

        <br />

        <p>Date.parse() returns the number of milliseconds between the date and January 1, 1970:</p>

        <p>1332298800000</p>

        </div>

        <br />

        <p>You can then use the number of milliseconds to <b>convert it to a date</b> object:</p>

        <br />

        <div style={{background:'#cecece'}}>

        <h3>Example</h3>

        <code><code style={{color:'blue'}}>let</code> msec = Date.parse(<code style={{color:'#5d0000'}}>"March 21, 2012"</code>);</code>

        <br />

        <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}> new</code> Date(<code>msec</code>);</code>

        <br />


        <p>Date.parse(string) returns milliseconds.</p>

        <p>You can use the return value to convert the string to a date object:</p>

        <p>Wed Mar 21 2012 00:00:00 GMT-0300 (GMT-03:00)</p>

        </div>






        



    </main>
  )
}

export default JavaScriptDateFormats