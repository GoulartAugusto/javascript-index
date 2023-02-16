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

        <p></p>

    </main>
  )
}

export default JavaScriptSetDateMethods