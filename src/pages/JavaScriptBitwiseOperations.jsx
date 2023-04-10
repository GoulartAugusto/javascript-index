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
                <td>5 & 1</td>
                <td>1</td>
                <td>0101 & 0001</td>
                <td>0001</td>
            </tr>
            <tr>
                <td>5 | 1</td>
                <td>5</td>
                <td>0101 | 0001</td>
                <td>0101</td>
            </tr>
            <tr>
                <td>~ 5</td>
                <td>10</td>
                <td>~0101</td>
                <td>1010</td>
            </tr>
            <tr>
                <td>5 &lt;&lt; 1</td>
                <td>10</td>
                <td>0101 &lt;&lt; 1</td>
                <td>1010</td>
            </tr>
            <tr>
                <td>5 ^ 1</td>
                <td>4</td>
                <td>0101 ^ 0001</td>
                <td>0100</td>
            </tr>
            <tr>
                <td>5 &gt;&gt; 1</td>
                <td>2</td>
                <td>0101 &gt;&gt; 1</td>
                <td>0010</td>
            </tr>
            <tr>
                <td>5 &gt;&gt;&gt; 1</td>
                <td>2</td>
                <td>0101 &gt;&gt;&gt; 1</td>
                <td>0010</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Uses 32 bits Bitwise Operands</h2>
    
        <p>JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.</p>

        <p>Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.</p>

        <p>After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.</p>

        <br />

        <div style={{background:"lightyellow"}}>
            <br />

            <p>The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10.</p>

            <p>Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.</p>

            <p>00000000000000000000000000000101 (5)</p>

            <p>11111111111111111111111111111010 (~5 = -6)</p>

            <p>A signed integer uses the leftmost bit as the minus sign.</p>

            <br />
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise AND</h2>

        <p>When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.</p>

        <p>One bit example:</p>

        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>0 & 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0 & 1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1 & 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1 & 1</td>
                <td>1</td>
            </tr>
        </table>

        <br />

        <p>4 bits example:</p>
        
        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>1111 & 0000</td>
                <td>0000</td>
            </tr>
            <tr>
                <td>1111 & 0001</td>
                <td>0001</td>
            </tr>
            <tr>
                <td>1111 & 0010</td>
                <td>0010</td>
            </tr>
            <tr>
                <td>1111 & 0100</td>
                <td>0100</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise OR</h2>

        <p>When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1:</p>

        <p>One bit example:</p>

        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>0 | 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0 | 1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1 | 0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1 | 1</td>
                <td>1</td>
            </tr>
        </table>

        <br />

        <p>4 bits example:</p>
        
        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>1111 | 0000</td>
                <td>1111</td>
            </tr>
            <tr>
                <td>1111 | 0001</td>
                <td>1111</td>
            </tr>
            <tr>
                <td>1111 | 0010</td>
                <td>1111</td>
            </tr>
            <tr>
                <td>1111 | 0100</td>
                <td>1111</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise XOR</h2>

        <p>When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:</p>

        <p>One bit example:</p>

        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>0 ^ 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0 ^ 1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1 ^ 0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1 ^ 1</td>
                <td>0</td>
            </tr>
        </table>

        <br />

        <p>4 bits example:</p>

        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>1111 ^ 0000</td>
                <td>1111</td>
            </tr>
            <tr>
                <td>1111 ^ 0001</td>
                <td>1110</td>
            </tr>
            <tr>
                <td>1111 ^ 0010</td>
                <td>1101</td>
            </tr>
            <tr>
                <td>1111 ^ 0100</td>
                <td>1011</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise AND (&)</h2>

        <p>Bitwise AND returns 1 only if both bits are 1:</p>

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>1</td>
                <td>00000000000000000000000000000001</td>
            </tr>
            <tr>
                <td>5 & 1</td>
                <td>00000000000000000000000000000001 (1)</td>
            </tr>
        </table>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> & <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>The & Operator</p>

            <p>return</p>

            <code>1</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise OR (|)</h2>

        <p>Bitwise OR returns 1 if one of the bits is 1:</p>

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>1</td>
                <td>00000000000000000000000000000001</td>
            </tr>
            <tr>
                <td>5 | 1</td>
                <td>00000000000000000000000000000001 (5)</td>
            </tr>
        </table>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> | <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>The | Operator</p>

            <p>return</p>

            <code>5</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>JavaScript Bitwise XOR</h2>

        <p>When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:</p>

        <p>One bit example:</p>

        <br />
        
        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>0 ^ 0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0 ^ 1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1 ^ 0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1 ^ 1</td>
                <td>0</td>
            </tr>
        </table>

        <br />

        <p>4 bits example:</p>

        <br />

        <table>
            <tr>
                <th>Operation</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>1111 ^ 0000</td>
                <td>1111</td>
            </tr>
            <tr>
                <td>1111 ^ 0001</td>
                <td>1110</td>
            </tr>
            <tr>
                <td>1111 ^ 0010</td>
                <td>1101</td>
            </tr>
            <tr>
                <td>1111 ^ 0100</td>
                <td>1011</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise AND (&)</h2>

        <p>Bitwise AND returns 1 only if both bits are 1:</p>
        
        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>1</td>
                <td>00000000000000000000000000000001</td>
            </tr>
            <tr>
                <td>5 & 1</td>
                <td>00000000000000000000000000000001 (1)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> & <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>result</p>

            <code>1</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise OR (|)</h2>

        <p>Bitwise OR returns 1 if one of the bits is 1:</p>

        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>1</td>
                <td>00000000000000000000000000000001</td>
            </tr>
            <tr>
                <td>5 | 1</td>
                <td>00000000000000000000000000000101 (5)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> | <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>result</p>

            <code>5</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript Bitwise XOR (^)</h2>

        <p>Bitwise XOR returns 1 if the bits are different:</p>

        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>1</td>
                <td>00000000000000000000000000000001</td>
            </tr>
            <tr>
                <td>5 ^ 1</td>
                <td>00000000000000000000000000000100 (4)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> ^ <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>result</p>

            <code>5</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}
        
        <h2>JavaScript Bitwise NOT (~)</h2>

        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>~5</td>
                <td>11111111111111111111111111111010 (-6)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = ~5;
            </code>

            <br />

            <p>result</p>

            <code>-6</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript (Zero Fill) Bitwise Left Shift (&lt;&lt;)</h2>

        <p>This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:</p>

        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>5 &lt;&lt; 1</td>
                <td>00000000000000000000000000001010 (10)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> &lt;&lt; <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>result</p>

            <code>10</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript (Sign Preserving) Bitwise Right Shift (&gt;&gt;)</h2>

        <p>This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:</p>

        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>-5</td>
                <td>11111111111111111111111111111011</td>
            </tr>
            <tr>
                <td>-5 &gt;&gt; 1</td>
                <td>11111111111111111111111111111101 (-3)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = -<code style={{color:'red'}}>5</code> &gt;&gt; <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>result</p>

            <code>-3</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>JavaScript (Zero Fill) Right Shift (&gt;&gt;&gt;)</h2>

        <p>This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:</p>

        <br />

        <table>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
            <tr>
                <td>5</td>
                <td>00000000000000000000000000000101</td>
            </tr>
            <tr>
                <td>5 &gt;&gt;&gt; 1</td>
                <td>00000000000000000000000000000010 (2)</td>
            </tr>
        </table>

        <br />

        <div style={{background:"#cecece"}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>let</code> x = <code style={{color:'red'}}>5</code> &gt;&gt;&gt; <code style={{color:'red'}}>1</code>;
            </code>

            <br />

            <p>result</p>

            <code>2</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Binary Numbers</h2>

        <p>Binary numbers with only one bit set are easy to understand:</p>

        <br />

        <table>
            <tr>
                <th>Binary Representation</th>
                <th>Decimal value</th>
            </tr>
            <tr>
                <td>00000000000000000000000000000001</td>
                <td>1</td>
            </tr>
            <tr>
                <td>00000000000000000000000000000010</td>
                <td>2</td>
            </tr>
            <tr>
                <td>00000000000000000000000000000100</td>
                <td>4</td>
            </tr>
            <tr>
                <td>00000000000000000000000000001000</td>
                <td>8</td>
            </tr>
            <tr>
                <td>00000000000000000000000000010000</td>
                <td>16</td>
            </tr>
            <tr>
                <td>00000000000000000000000000100000</td>
                <td>32</td>
            </tr>
            <tr>
                <td>00000000000000000000000001000000</td>
                <td>64</td>
            </tr>
        </table>

        <br />

        <p>Setting a few more bits reveals the binary pattern:</p>

        <br />

        <table>
            <tr>
                <th>Binary Representation</th>
                <th>Decimal value</th>
            </tr>
            <tr>
                <td>00000000000000000000000000000101</td>
                <td>5 (4 + 1)</td>
            </tr>
            <tr>
                <td>00000000000000000000000000001101</td>
                <td>13 (8 + 4 + 1)</td>
            </tr>
            <tr>
                <td>00000000000000000000000000101101</td>
                <td>45 (32 + 8 + 4 + 1)</td>
            </tr>
        </table>

        <p>JavaScript binary numbers are stored in two's complement format.</p>

        <p>This means that a negative number is the bitwise NOT of the number plus 1:</p>

        <br />

        <table>
            <tr>
                <th>Binary Representation</th>
                <th>Decimal value</th>
            </tr>
            <tr>
                <td>00000000000000000000000000000101</td>
                <td>5</td>
            </tr>
            <tr>
                <td>11111111111111111111111111111011</td>
                <td>-5</td>
            </tr>
            <tr>
                <td>00000000000000000000000000000110</td>
                <td>6</td>
            </tr>
            <tr>
                <td>11111111111111111111111111111010</td>
                <td>-6</td>
            </tr>
            <tr>
                <td>00000000000000000000000000101000</td>
                <td>40</td>
            </tr>
            <tr>
                <td>11111111111111111111111111011000</td>
                <td>-40</td>
            </tr>
            <tr>
                <td>00000000000000000000000001000000</td>
                <td>64</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Decimal to Binary</h2>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>function</code> dec2bin(-<code style={{color:'red'}}>5</code>) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> (dec &gt;&gt;&gt; <code style={{color:'red'}}>0</code>).toString(<code style={{color:'red'}}>2</code>);

                <br />

                &#125;
            </code>

            <p>return</p>
            
            <code>11111111111111111111111111111011</code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Converting Binary to Decimal</h2>

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>function</code> bin2dec(<code style={{color:'red'}}>101</code>) &#123;

                <br />

                <code style={{color:'blue'}}>return</code> parseInt(bin, <code style={{color:'red'}}>2</code>).toString(<code style={{color:'red'}}>10</code>);

                <br />

                &#125;
            </code>

            <p>return</p>
            
            <code>5</code>
        </div>
    </main>
  )
}

export default JavaScriptBitwiseOperations