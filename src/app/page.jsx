import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>This Page will Show many different examples of JavaScript</h1>

          <br />
          <br />

        <h1>JavaScript Keywords</h1>
        <br />
        <p>
        JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
        <br />
        Our Reserved Words Reference lists all JavaScript keywords.
        <br />
        Here is a list of some of the keywords you will learn about in this tutorial:
        </p>
        <br />
        <h4 style={{backgroundColor: 'lightyellow'}}>JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.</h4>
        <br />

        <div className={styles.tableContent}>
          <table>
            <td>
              <tr><strong>Keyword&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description</strong></tr>
              <tr>var&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Declares a variable</tr>
              <tr>let&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Declares a block variable</tr>
              <tr>const&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Declares a block constant</tr>
              <tr>if&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Marks a block of statements to be executed on a condition</tr>
              <tr>switch&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Marks a block of statements to be executed in different cases</tr>
              <tr>for&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Marks a block of statements to be executed in a loop</tr>
              <tr>function&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Declares a function</tr>
              <tr>return&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Exits a function</tr>
              <tr>try&nbsp;&nbsp;&nbsp;&nbsp; -	&nbsp;&nbsp;&nbsp;&nbsp;Implements error handling to a block of statements</tr>
            </td>
          </table>
        </div>

        <br />

        <div className={styles.pagesLinks}>
          <ul>
            <li><Link href='/WhatCanDo'>What JavaScript Can Do?</Link></li>
            <li><Link href='/FunctionsandEvents'>JavaScript Functions and Events</Link></li>
            <li><Link href='/ExternalJavascript'>External Javascript</Link></li>
            <li><Link href='/JavaScriptOutput'>JavaScript Output</Link></li>
            <li><Link href='/JavaScriptStatements'>JavaScript Statements</Link></li>
            <li><Link href='/JavaScriptSyntax'>JavaScript Syntax</Link></li>
            <li><Link href='/JavaScriptComments'>JavaScript Comments</Link></li>
            <li><Link href='/JavaScriptVariables'>JavaScript Variables</Link></li>
            <li><Link href='/JavaScriptLet'>JavaScript Let</Link></li>
            <li><Link href='/JavaScriptConst'>JavaScript Const</Link></li>
            <li><Link href='/JavaScriptOperators'>JavaScript Operators</Link></li>
            <li><Link href='/JavaScriptArithmetic'>JavaScript Arithmetic</Link></li>
            <li><Link href='/JavaScriptAssignment'>JavaScript Assignment</Link></li>
            <li><Link href='/JavaScriptDataTypes'>JavaScript Data Types</Link></li>
            <li><Link href='/JavaScriptFunctions'>JavaScript Functions</Link></li>
            <li><Link href='/JavaScriptObjects'>JavaScript Objects</Link></li>
            <li><Link href='/JavaScriptEvents'>JavaScript Events</Link></li>
            <li><Link href='/JavaScriptStrings'>JavaScript Strings</Link></li>
            <li><Link href='/JavaScriptStringMethods'>JavaScript String Methods</Link></li>
            <li><Link href='/JavaScriptStringSearch'>JavaScript String Search</Link></li>
            <li><Link href='/JavaScriptTemplateLiterals'>JavaScript Template Literals</Link></li>
            <li><Link href='/JavaScriptNumbers'>JavaScript Numbers</Link></li>
            <li><Link href='/JavaScriptBigInt'>JavaScript BigInt</Link></li>
            <li><Link href='/JavaScriptNumberMethods'>JavaScript Number Methods</Link></li>
            <li><Link href='/JavaScriptNumberProperties'>JavaScript Number Properties</Link></li>
            <li><Link href='/JavaScriptArrays'>JavaScript Arrays</Link></li>
            <li><Link href='/JavaScriptArrayMethods'>JavaScript Array Methods</Link></li>
            <li><Link href='/JavaScriptSortingArrays'>JavaScript Sorting Arrays</Link></li>
            <li><Link href='/JavaScriptArrayIteration'>JavaScript Array Iteration</Link></li>
            <li><Link href='/JavaScriptArrayConst'>JavaScript Array Const</Link></li>
            <li><Link href='/JavaScriptDateObjects'>JavaScript Date Objects</Link></li>
            <li><Link href='/JavaScriptDateFormats'>JavaScript Date Formats</Link></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>
    </main>
  )
}
