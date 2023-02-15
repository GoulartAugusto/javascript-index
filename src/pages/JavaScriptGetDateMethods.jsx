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

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> months = [<code style={{color:'#5d0000'}}>"January"</code>, <code style={{color:'#5d0000'}}>"February"</code>, <code style={{color:'#5d0000'}}>"March"</code>, <code style={{color:'#5d0000'}}>"April"</code>, <code style={{color:'#5d0000'}}>"May"</code>, <code style={{color:'#5d0000'}}>"June"</code>, <code style={{color:'#5d0000'}}>"July"</code>, <code style={{color:'#5d0000'}}>"August"</code>, <code style={{color:'#5d0000'}}>"September"</code>, <code style={{color:'#5d0000'}}>"October"</code>, <code style={{color:'#5d0000'}}>"November"</code>, <code style={{color:'#5d0000'}}>"December"</code>];</code>


            <br />
            <br />


            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2021-03-25"</code>)</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> month = months[d.getMonth()];</code>

            <br />

            <p>Return the month as a number.</p>

            <p>You can use an array of names to return the month as a name:</p>

            <p>March</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> months = [<code style={{color:'#5d0000'}}>"January"</code>, <code style={{color:'#5d0000'}}>"February"</code>, <code style={{color:'#5d0000'}}>"March"</code>, <code style={{color:'#5d0000'}}>"April"</code>, <code style={{color:'#5d0000'}}>"May"</code>, <code style={{color:'#5d0000'}}>"June"</code>, <code style={{color:'#5d0000'}}>"July"</code>, <code style={{color:'#5d0000'}}>"August"</code>, <code style={{color:'#5d0000'}}>"September"</code>, <code style={{color:'#5d0000'}}>"October"</code>, <code style={{color:'#5d0000'}}>"November"</code>, <code style={{color:'#5d0000'}}>"December"</code>];</code>


            <br />
            <br />


            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date()</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> month = months[d.getMonth()];</code>

            <br />

            <p>Return the month as a number.</p>

            <p>You can use an array of names to return the month as a name:</p>

            <p>February</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getDate() Method</h2>

        <p>The <code style={{color:'blue'}}>getDate()</code> method returns the day of a date as a number (1-31):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"21-03-25"</code>);</code>

            <br />

            <code>d.getDate();</code>

            <br />

            <p>Return the day of a date as a number (1-31):</p>

            <p>25</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getDate();</code>

            <br />

            <p>Return the day of a date as a number (1-31):</p>

            <p>15</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getHours() Method</h2>

        <p>The <code style={{color:'blue'}}>getHours()</code> method returns the hours of a date as a number (0-23):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"21-03-25"</code>);</code>

            <br />

            <code>d.getHours();</code>

            <br />

            <p>Return the hours of a date as a number (0-23):</p>

            <p>21</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getHours();</code>

            <br />

            <p>Return the hours of a date as a number (0-23):</p>

            <p>18</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getMinutes() Method</h2>

        <p>The <code style={{color:'blue'}}>getMinutes()</code> method returns the minutes of a date as a number (0-59):</p>

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"21-03-25"</code>);</code>

            <br />

            <code>d.getMinutes();</code>

            <br />

            <p>Returns the minutes of a date as a number (0-59):</p>

            <p>0</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getMinutes();</code>

            <br />

            <p>Returns the minutes of a date as a number (0-59):</p>

            <p>55</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getSeconds() Method</h2>

        <p>The <code style={{color:'blue'}}>getSeconds()</code> method returns the seconds of a date as a number (0-59):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"21-03-25"</code>);</code>

            <br />

            <code>d.getSeconds();</code>

            <br />

            <p>Return the seconds of a date as a number (0-59):</p>

            <p>0</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getMinutes();</code>

            <br />

            <p>Return the seconds of a date as a number (0-59):</p>

            <p>10</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getMilliseconds() Method</h2>

        <p>The <code style={{color:'blue'}}>getMilliseconds()</code> method returns the milliseconds of a date as a number (0-999):</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"21-03-25"</code>);</code>

            <br />

            <code>d.getMilliseconds();</code>

            <br />

            <p>Return the milliseconds of a date as a number (0-999):</p>

            <p>0</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getMilliseconds();</code>

            <br />

            <p>Return the milliseconds of a date as a number (0-999):</p>

            <p>279</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getDay() Method</h2>

        <p>The <code style={{color:'blue'}}>getDay()</code> method returns the weekday of a date as a number (0-6).</p>

        <br />

        <div style={{background:'lightyellow'}}>
            <h3>Note</h3>

            <p>In JavaScript, the first day of the week (day 0) is Sunday.</p>

            <p>Some countries in the world consider the first day of the week to be Monday.</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"21-03-25"</code>);</code>

            <br />

            <code>d.getDay();</code>

            <br />

            <p>Return the weekday as a number:</p>

            <p>3</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getDay();</code>

            <br />

            <p>Return the weekday as a number:</p>

            <p>3</p>
        </div>

        <br />

        <div style={{color:'lightyellow'}}>
            <h3>Note</h3>

            <p>You can use an array of names, and <code style={{color:'blue'}}>getDay()</code> to return weekday as a name:</p>

            <br />
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> days = [<code style={{color:'#5d0000'}}>"Sunday"</code>, <code style={{color:'#5d0000'}}>"Monday"</code>, <code style={{color:'#5d0000'}}>"Tuesday"</code>, <code style={{color:'#5d0000'}}>"Wednesday"</code>, <code style={{color:'#5d0000'}}>"Thursday"</code>, <code style={{color:'#5d0000'}}>"Friday"</code>, <code style={{color:'#5d0000'}}>"Saturday"</code>];</code>


            <br />
            <br />


            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:'#5d0000'}}>"2021-03-25"</code>)</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> day = days[d.getDay()];</code>

            <br />

            <p>Return the weekday as a number.</p>

            <p>You can use an array of names to return the weekday as a name:</p>

            <p>Wednesday</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> days = [<code style={{color:'#5d0000'}}>"Sunday"</code>, <code style={{color:'#5d0000'}}>"Monday"</code>, <code style={{color:'#5d0000'}}>"Tuesday"</code>, <code style={{color:'#5d0000'}}>"Wednesday"</code>, <code style={{color:'#5d0000'}}>"Thursday"</code>, <code style={{color:'#5d0000'}}>"Friday"</code>, <code style={{color:'#5d0000'}}>"Saturday"</code>];</code>


            <br />
            <br />


            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date()</code>

            <br />

            <code><code style={{color:'blue'}}>let</code> day = days[d.getDay()];</code>

            <br />

            <p>Return the weekday as a number.</p>

            <p>You can use an array of names to return the weekday as a name:</p>

            <p>Wednesday</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getTime() Method</h2>

        <p>The <code style={{color:'blue'}}>getTime()</code> method returns the number of milliseconds since January 1, 1970:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:"#5d0000"}}>"1970-01-01"</code>);</code>

            <br />

            <code>d.getTime();</code>

            <br />

            <p>Return the number of milliseconds since midnight January 1, 1970:</p>

            <p>0</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date(<code style={{color:"#5d0000"}}>"2021-03-25"</code>);</code>

            <br />

            <code>d.getTime();</code>

            <br />

            <p>Return the number of milliseconds since midnight January 1, 1970:</p>

            <p>1616630400000</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>const</code> d = <code style={{color:'blue'}}>new</code> Date();</code>

            <br />

            <code>d.getTime();</code>

            <br />

            <p>Return the number of milliseconds since midnight January 1, 1970:</p>

            <p>1676498849084</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The Date.now() Method</h2>

        <p><code style={{color:'blue'}}>Date.now()</code> returns the number of milliseconds since January 1, 1970.</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Examples</h3>

            <code><code style={{color:'blue'}}>let</code> ms = Date.now();</code>

            <br />

            <p>Return the current date/time in milliseconds since January 1, 1970:</p>

            <p>1676498971869</p>
        </div>

        <br />

        <div style={{background:'#cecece'}}>
            <p>Calculate the number of years since 1970/01/01:</p>

            <br />

            <code><code style={{color:'blue'}}>const</code> minute = <code style={{color:'red'}}>1000</code> * <code style={{color:'red'}}>60</code>;</code>

            <br />

            <code><code style={{color:'blue'}}>const</code> hour = minute * <code style={{color:'red'}}>60</code></code>

            <br />

            <code><code style={{color:'blue'}}>const</code> day = hour * <code style={{color:'red'}}>24</code></code>

            <br />

            <code><code style={{color:'blue'}}>const</code> year = day * <code style={{color:'red'}}>365</code></code>

            <br />
            <br />

            

            <code><code style={{color:'blue'}}>let</code> years = Math.round(Date.now() / year);</code>

            <br />

            <p>Calculate the number of years since January 1, 1970:</p>

            <p>53</p>

            <br />
        </div>

        <br />

        <p><code style={{color:'blue'}}>Date.now()</code> is a static method of the Date object.</p>

        <p>You <b>cannot</b> use it on a date object like <code style={{color:'blue'}}>myDate.now()</code>.</p>

        <p>The syntax is always <code style={{color:'blue'}}>Date.now()</code>.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>UTC Date Get Methods</h2>

        <table>
            <tr>
                <th>Method</th>
                <th>Same As</th>
                <th>Description</th>
            </tr>

            <tr>
                <td>getUTCDate()</td>
                <td>getDate()</td>
                <td>Returns the UTC date</td>
            </tr>
            <tr>
                <td>getUTCFullYear()</td>
                <td>getFullYear()</td>
                <td>Returns the UTC year</td>
            </tr>
            <tr>
                <td>getUTCMonth()</td>
                <td>getMonth()</td>
                <td>Returns the UTC month</td>
            </tr>
            <tr>
                <td>getUTCDay()</td>
                <td>getDay()</td>
                <td>Returns the UTC day</td>
            </tr>
            <tr>
                <td>getUTCHours()</td>
                <td>getHours()</td>
                <td>Returns the UTC hour</td>
            </tr>
            <tr>
                <td>getUTCMinutes()</td>
                <td>getMinutes()</td>
                <td>Returns the UTC minutes</td>
            </tr>
            <tr>
                <td>getUTCSeconds()</td>
                <td>getSeconds()</td>
                <td>Returns the UTC seconds</td>
            </tr>
            <tr>
                <td>getUTCMilliseconds()</td>
                <td>getMilliseconds()</td>
                <td>Returns the UTC milliseconds</td>
            </tr>
        </table>

        <br />

        <p>UTC methods use UTC time (Coordinated Universal Time).</p>

        <p>UTC time is the same as GMT (Greenwich Mean Time).</p>

        <p>The difference between Local time and UTC time can be up to 24 hours.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The getTimezoneOffset() Method</h2>

        <p>The <code style={{color:'blue'}}>getTimezoneOffset()</code> method returns the difference (in minutes) between local time an UTC time:</p>

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code><code style={{color:"blue"}}>let</code> diff = d.getTimezoneOffset();</code>

            <br />

            <p>The time zone difference in minutes is:</p>

            <p>180</p>

        </div>


    </main>
  )
}

export default JavaScriptGetDateMethods