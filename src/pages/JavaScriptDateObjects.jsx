import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptDateObjects = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Date Objects</h1>

        <p>JavaScript <b>Date Objects</b> let us work with dates:</p>

        <p><b>Wed Feb 08 2023 16:40:34 GMT-0300 (GMT-03:00)</b></p>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>
        </div>

        <br />

        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2023-02-08"</code>);</code>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <h3>Note</h3>

            <p>Data objects are static. The "clock" is not "running".</p>

            <p>The computer clock is ticking, date objects are not.</p>
        </div>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Date Output</h2>

        <p>By default, JavaScript will use the browser's time zone and display a date as a full text string:</p>

        <p><b>Wed Feb 08 2023 16:40:34 GMT-0300 (GMT-03:00)</b></p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Creating Date Objects</h2>

        <p>Date objects are created with the <code style={{color:'blue'}}>new Date()</code> constructor.</p>

        <p>There are <b>9 ways</b> to create a new date object:</p>

        <br />

        <div style={{background:'#cecece'}}>

            <code><code style={{color:'blue'}}>new</code> Date()</code>

            <br />

            <code><code style={{color:'blue'}}>new</code> Date(date string)</code>
            
            <br />
            <br />

            <code><code style={{color:'blue'}}>new</code> Date(year, month)</code>

            <br />

            <code><code style={{color:'blue'}}>new</code> Date(year, month, day)</code>

            <br />

            <code><code style={{color:'blue'}}>new</code> Date(year, month, day, hours)</code>

            <br />

            <code><code style={{color:'blue'}}>new</code> Date(year, month, day, hours, minutes)</code>

            <br />
            
            <code><code style={{color:'blue'}}>new</code> Date(year, month, day, hours, minutes, seconds)</code>

            <br />

            <code><code style={{color:'blue'}}>new</code> Date(year, month, day, hours, minutes, seconds, ms)</code>

            <br />
            <br />

            <code><code style={{color:'blue'}}>new</code> Date(milliseconds)</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript new Date()</h2>

        <p><code style={{color:'blue'}}>new Date()</code> creates a date object with the <b>current date and time</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>new Date(date string)</h2>

        <p><code style={{color:'blue'}}>new Date(date string)</code> creates a date object from a <b>date string</b>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"February 08, 2023 11:11:11</code>);</code>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2023-02-08"</code>);</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>new Date(year, month, ...)</h2>

        <p><code style={{color:'blue'}}>new Date(year, month, ...)</code> creates a date object with a <b></b>.</p>

        <p>7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>, <code style={{color:'red'}}>33</code>, <code style={{color:'red'}}>30</code>, <code style={{color:'red'}}>0</code>);</code>

            <br />

            <p>Using new Date(7 numbers), creates a new date object with the specified date and time:</p>

            <p><b>Tue Dec 25 2018 10:33:30 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <br />

            <h3>Note</h3>

            <p>JavaScript counts months from <b>0</b> to <b>11</b>:</p>

            <p><b>January = 0</b>.</p>

            <p><b>December = 11</b>.</p>
        </div>
        
        <br />

        <p>Specifying a month higher than 11, will not result in an error but add the overflow to the next year:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <p>Specifying:</p>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>15</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>, <code style={{color:'red'}}>33</code>, <code style={{color:'red'}}>30</code>, <code style={{color:'red'}}>0</code>);</code>

            <br />

            <p>Is the same as:</p>

            <br />

            
            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2019</code>, <code style={{color:'red'}}>3</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>, <code style={{color:'red'}}>33</code>, <code style={{color:'red'}}>30</code>, <code style={{color:'red'}}>0</code>);</code>

            <br />

            <p><b>Wed Apr 25 2018 10:33:30 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Using 6, 4, 3, or 2 Numbers</h2>

        <p>6 numbers specify year, month, day, hour, minute, second:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>, <code style={{color:'red'}}>33</code>, <code style={{color:'red'}}>30</code>);</code>

            <br />

            <p>6 numbers specify year, month, day, hour, minute and second:</p>

            <p><b>Tue Dec 25 2018 10:33:30 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <p>5 numbers specify year, month, day, hour, and minute:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>, <code style={{color:'red'}}>33</code>);</code>

            <br />

            <p>5 numbers specify year, month, day, hour, and minute:</p>

            <p><b>Tue Dec 25 2018 10:33:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <p>4 numbers specify year, month, day, and hour:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>25</code>, <code style={{color:'red'}}>10</code>);</code>

            <br />

            <p>4 numbers specify year, month, day, and hour:</p>

            <p><b>Tue Dec 25 2018 10:00:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <p>3 numbers specify year, month, and day:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>25</code>);</code>

            <br />

            <p>3 numbers specify year, month, and day:</p>

            <p><b>Tue Dec 25 2018 00:00:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <p>2 numbers specify year and month:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>, <code style={{color:'red'}}>11</code>);</code>

            <br />

            <p>2 numbers specify year and month:</p>

            <p><b>Sat Dec 01 2018 00:00:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <div style={{background:"lightyellow"}}>
            <br />

            <p>You cannot omit month. If you supply only one parameter it will be treated as milliseconds.</p>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>2018</code>);</code>

            <br />

            <p>One parameter will be interpreted as new Date(milliseconds).</p>

            <p><b>Wed Dec 31 1969 21:00:02 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Previous Century</h2>

        <p>One and two digit years will be interpreted as 19xx:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>99</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>24</code>);</code>

            <br />

            <p>Two digit years will be interpreted as 19xx:</p>

            <p><b>Fri Dec 24 1999 00:00:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>9</code>, <code style={{color:'red'}}>11</code>, <code style={{color:'red'}}>24</code>);</code>

            <br />

            <p>Two digit years will be interpreted as 19xx:</p>

            <p><b>Fri Dec 24 1909 00:00:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
            <h3>JavaScript Stores Dates as Milliseconds</h3>

            <p>JavaScript stores dates as number of milliseconds since January 01, 1970.</p>

            <p><b>Zero time is January 01, 1970 00:00:00 UTC.</b></p>

            <p>One day (24 hours) is 86 400 000 milliseconds.</p>

            <p>Now the time is: <b>1675885234806</b> milliseconds past January 01, 1970</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>new Date(milliseconds)</h2>

        <p><code style={{color:'blue'}}>new Date(milliseconds)</code> creates a new date object as <b>milliseconds</b> plus zero time:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>01 January 1970 <b>plus</b> 100 000 000 000 milliseconds is:</p>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>100000000000</code>);</code>

            <br />

            <p>100000000000 milliseconds from January 01 1970 UTC is:</p>

            <p><b>Sat Mar 03 1973 06:46:40 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>January 01 1970 <b>minus</b> 100 000 000 000 milliseconds is:</p>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(-<code style={{color:'red'}}>100000000000</code>);</code>

            <br />

            <p>-100000000000 milliseconds from January 01 1970 UTC is:</p>

            <p><b>Mon Oct 31 1966 11:13:20 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>January 01 1970 <b>plus</b> 24 hours is:</p>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>24</code> * <code style={{color:'red'}}>60</code> * <code style={{color:'red'}}>60</code> * <code style={{color:'red'}}>1000</code>);</code>

            <br />

            <code style={{color:'green'}}>// or</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>86400000</code>);</code>

            <p>86400000 milliseconds from January 01 1970 UTC is:</p>

            <p>Thu Jan 01 1970 21:00:00 GMT-0300 (GMT-03:00)</p>

            <p>One day (24 hours) is 86,400,000 milliseconds.</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>01 January 1970 <b>plus</b> 0 milliseconds is:</p>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'red'}}>0</code>);</code>

            <br />

            <p>0 milliseconds from January 01 1970 UTC is:</p>

            <p><b>Wed Dec 31 1969 21:00:00 GMT-0300 (GMT-03:00)</b></p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Date Methods</h2>

        <p>When a date object is created, a number of <b>methods</b> allow you to operate on it.</p>

        <p>Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.</p>

        {/* Just a mark to separete sections */}

        <h2>Displaying Dates</h2>

        <p>JavaScript will (by default) output dates in full text string format:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>Wed Feb 08 2023 16:40:34 GMT-0300 (GMT-03:00)</code>
        </div>

        <p>When you display a date object in HTML, it is automatically converted to a string, with the <code style={{color:"blue"}}>toString()</code> method.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.toString();</code>

            <br />

            <p>Convert a date to a string:</p>

            <p>Wed Feb 08 2023 17:48:00 GMT-0300 (GMT-03:00)</p>
        </div>

        <br />

        <p>The <code style={{color:"blue"}}>toDateString()</code> method converts a date to a more readable format:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.toDateString();</code>

            <br />

            <p>Convert a date to a date string:</p>

            <p>Wed Feb 08 2023</p>
        </div>

        <br />

        <p>The <code style={{color:"blue"}}>toUTCString()</code> method converts a date to a string using the UTC standard:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.toUTCString();</code>

            <br />

            <p>Convert a date to a string using the UTC standard:</p>

            <p>Wed, 08 Feb 2023 20:50:15 GMT</p>
        </div>

        <br />
        
        <p>The <code style={{color:"blue"}}>toISOString()</code> method converts a date to a string using the ISO standard:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.toISOString();</code>

            <br />

            <p>Convert a date to a string using the ISO standard:</p>

            <p>2023-02-08T20:51:15.590Z</p>
        </div>





































    




    </main>
  )
}

export default JavaScriptDateObjects