import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptBitwiseOperations = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Bitwise Operations</h1>

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise Operators</h2>

        <br />

        <table>
            <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>&</td>
                <td>AND</td>
                <td>Sets each bit to 1 if both bits are 1</td>
            </tr>
            <tr>
                <td>|</td>
                <td>OR</td>
                <td>Sets each bit to 1 if one of two bits is 1</td>
            </tr>
            <tr>
                <td>^</td>
                <td>XOR</td>
                <td>Sets each bit to 1 if only one of two bits is 1</td>
            </tr>
            <tr>
                <td>~</td>
                <td>NOT</td>
                <td>Inverts all the bits</td>
            </tr>
            <tr>
                <td>&lt;&lt;</td>
                <td>Zero fill left shift</td>
                <td>Shifts left by pushing zeros in from the right and let the leftmost bits fall off</td>
            </tr>
            <tr>
                <td>&gt;&gt;</td>
                <td>Signed right shift</td>
                <td>Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off</td>
            </tr>
            <tr>
                <td>&gt;&gt;&gt;</td>
                <td>Zero fill right shift</td>
                <td>Shifts right by pushing zeros in from the left, and let the rightmost bits fall off</td>
            </tr>
        </table>

        <br />

        <h2>Examples</h2>

        <br />

        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
                <th>Same as</th>
                <th>Result</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </main>
  )
}

export default JavaScriptBitwiseOperations