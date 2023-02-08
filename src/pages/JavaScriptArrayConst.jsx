import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptArrayConst = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript Array Const</h1>

        {/* Just a mark to separete sections */}

        <h2>ECMAScript 2015 (ES6)</h2>

        <p>In 2015, JavaScript introduced an important new keyword: <code style={{color:'blue'}}>const</code>.</p>

        <p>It has become a common practice to declare arrays using <code style={{color:'blue'}}>const</code>:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <p>Saab,Volvo,BMW</p>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Cannot be Reassigned</h2>

        <p>An array declared with <code style={{color:'blue'}}>const</code> cannot be reassigned:</p>

        <br />

        <div style={{background:'#ffd3d3'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>
            
            <br />

            <code>
                cars = [<code style={{color:'#5d0000'}}>"Toyota"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Audi"</code>]; <code style={{color:'green'}}>// ERROR</code>
            </code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Arrays are Not Constants</h2>

        <p>The keyword <code style={{color:'blue'}}>const</code> is a little misleading.</p>

        <p>It does NOT define a constant array. It defines a constant reference to an array.</p>

        <p>Because of this, we can stll change the elements of a constant array.</p>

        <br />

        {/* Just a mark to separete sections */}


        <h2>Elements Can be Reassigned</h2>

        <p>You can change the elements of a constant array:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code style={{color:'green'}}>// You can create a constant array:</code>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>
            
            <br />
            <br />

            <code style={{color:'green'}}>// You can change an element:</code>

            <br />

            <code>
                cars[<code style={{color:'red'}}>0</code>] = <code style={{color:'#5d0000'}}>"Toyota"</code>;
            </code>

            <br />
            <br />

            <code style={{color:"green"}}>// You can add an element:</code>

            <br />

            <code>cars.push(<code style={{color:'#5d0000'}}>"Audi"</code>);</code>

            <br />
            <br />

            <p>Declaring a constant array does NOT make the elements unchangeable:</p>

            <code>Toyota,Volvo,BMW,Audi</code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Browser Support</h2>

        <p>The const keyword is not supported in Internet Explorer 10 or earlier.</p>

        <p>The following table defines the first browser versions with full support for the const keyword:</p>

        <table>
            <tr>
                <th>Chrome 49</th>
                <th>IE / Edge</th>
                <th>Firefox 36</th>
                <th>Safari 10</th>
                <th>Opera 36</th>
            </tr>
            <tr>
                <td>Mar, 2016</td>
                <td>Oct, 2013</td>
                <td>Feb, 2015</td>
                <td>Sep, 2016</td>
                <td>Mar, 2016</td>
            </tr>
        </table>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Assigned when Declared</h2>

        <p>JavaScript <code style={{color:'blue'}}>const</code> variables must be assigned a value when they are declared:</p>

        <p>Meaning: An array declared with <code style={{color:'blue'}}>const</code> must be initialized when it is declared.</p>

        <p>Using <code style={{color:'blue'}}>const</code> without initializing the array is a syntax error:</p>

        <br />

        <div style={{background:'#ffd3d3'}}>
            <h3>Example</h3>

            <p>This will not work:</p>

            <code>
                <code style={{color:'blue'}}>const</code> cars;
            </code>
            
            <br />

            <code>
                cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

        </div>

        <p>Arrays declared with <code style={{color:'blue'}}>var</code> can be initialized at any time.</p>

        <p>You can even use the array before it is declared:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <p>This is OK:</p>

            <code>
                cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>
            
            <br />

            <code>
                <code style={{color:'blue'}}>var</code> cars;
            </code>

            <br />
            <br />

            <code>cars[0];</code>

            <p>Saab</p>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Const Block Scope</h2>

        <p>An array declared with <code style={{color:'blue'}}>const</code> has <b>Block Scope</b>.</p>

        <p>An array declared in a block is not the same as an array declared outside the block:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />
            <code style={{color:'green'}}>// Here cars[0] is "Saab"</code>
            
            <br />
            <br />

            <code>&#123;</code>

            <br />

            <code>
                <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Toyota"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />

            <code style={{color:'green'}}>// Here cars[0] is "Toyota"</code>

            <br />

            <code>&#125;</code>

            <br />
            <br />

            <code style={{color:"green"}}>// Here cars[0] is <b>"Saab"</b></code>

        </div>

        <p>An array declared with <code style={{color:"blue"}}>var</code> does not have block scope:</p>

        <br />
        
        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
                <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />
            <code style={{color:'green'}}>// Here cars[0] is "Saab"</code>
            
            <br />
            <br />

            <code>&#123;</code>

            <br />

            <code>
                <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Toyota"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <br />

            <code style={{color:'green'}}>// Here cars[0] is "Toyota"</code>

            <br />

            <code>&#125;</code>

            <br />
            <br />

            <code style={{color:"green"}}>// Here cars[0] is <b>"Toyota"</b></code>

        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Redeclaring Arrays</h2>

        <p>Redeclaring an array declared with <code style={{color:'blue'}}>var</code> is allowed anywhere in a program:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
            <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />

            <code>
            <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Toyota"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>

            <br />

            <code>
            cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>

        </div>

        <br />

        <p>Redeclaring or reassigning an array to <code style={{color:'blue'}}>const</code>, in the same scope, or in the same block, is not allowed:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
            <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />
            <br />

            <code>&#123;</code>

            <br />

            <code>
            <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />

            <code>&#125;</code>

        </div>

        <br />

        <p>Redeclaring or reassigning an existing <code style={{color:'blue'}}>const</code> array, in the same scope, or in the same block, is not allowed:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />

            <code>
            <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />
            
            <code>
             cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />
            <br />

            <code>&#123;</code>

            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />

            <code>
            <code style={{color:'blue'}}>var</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />
            
            <code>
             cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Not allowed</code>

            <br />
            

            <code>&#125;</code>

        </div>

        <br />

        <p>Redeclaring an array with <code style={{color:'blue'}}>const</code>, in another scope, or in another block, is allowed:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />
            <br />

            <code>&#123;</code>

            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>
            
            <br />
            

            <code>&#125;</code>

            <br />
            <br />

            <code>&#123;</code>

            <br />

            <code>
            <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"BMW"</code>];
            </code>

            <code style={{color:'green'}}>// Allowed</code>

            <br />

            <code>&#125;</code>

        </div>







    </main>
  )
}

export default JavaScriptArrayConst