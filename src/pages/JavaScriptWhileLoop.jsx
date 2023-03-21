import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const JavaScriptWhileLoop = () => {
  return (
    <main className={styles.main}>
        <Link href='/'>Homepage</Link>

        <h1>JavaScript While Loop</h1>

        <p>Loops can execute a block of code as long as a specified condition is true.</p>

        <br />

        {/* Just a mark to separete sections */}

        <h2>The While Loop</h2>

        <p>The <code style={{color:'blue'}}>while</code> loop loops through a block of code as long as a specified condition is true.</p>
        
        <br />

        <div style={{background:'#cecece'}}>
            <h3>Syntax</h3>

            <code>
                <code style={{color:'blue'}}>while</code> (condition) &#123;

                <br />

                <code style={{color:'green'}}>//code block to be executed</code>

                <br />

                &#125;
            </code>
        </div>

        <br />

        {/* Just a mark to separete sections */}

        <h2>Example</h2>

        <p>In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:</p>

        <br />

        <div style={{background:'#cecece'}}>
            <h3>Example</h3>

            <code>
              <code style={{coilor:'blue'}}>while</code> (i &lt; <code style={{color:'red'}}>10</code>) &#123;

              <br />

              text += <code style={{color:'#5d0000'}}>"The number is "</code> + i;

              <br />

              i++;

              <br />

              &#125;
            </code>

            <br />

            <p>JavaScript While Loop</p>

            <ul>
              <li>The number is 0</li>
              <li>The number is 1</li>
              <li>The number is 2</li>
              <li>The number is 3</li>
              <li>The number is 4</li>
              <li>The number is 5</li>
              <li>The number is 6</li>
              <li>The number is 7</li>
              <li>The number is 8</li>
              <li>The number is 9</li>
            </ul>
        </div>

        <br />

        <div style={{background:'lightyellow'}}>
          <br />

            <p>If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.</p>

          <br />
        </div>

        <br />

      {/* Just a mark to separete sections */}

      <h2>The Do While Loop</h2>

      <p>The <code style={{color:'blue'}}>do while</code> loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</p>

      <br />

      <div style={{background:"#cecece"}}>
        <h4>Syntax</h4>

        <br />

        <code>
          <code style={{color:'blue'}}>do</code> &#123;

          <br />

          <code style={{color:'green'}}>// code block to be executed</code>

          <br />

          &#125;

          <br />

          <code style={{color:'blue'}}>while</code> (condition);
        </code>
      </div>

      <br />

      <h4>Example</h4>

      <p>The example below uses a <code style={{color:'blue'}}>do while</code> loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        <code>
          <code style={{color:'blue'}}>do</code> &#123;

          <br />

          text += <code style={{color:'#5d0000'}}>"The number is "</code> + i;

          <br />

          i++;

          <br />

          &#125;

          <br />

          <code style={{color:'blue'}}>while</code> (i &lt; <code style={{color:'red'}}>10</code>);
        </code>

        <br />

        <p>JavaScript While Loop</p>

        <ul>
          <li>The number is 0</li>
          <li>The number is 1</li>
          <li>The number is 2</li>
          <li>The number is 3</li>
          <li>The number is 4</li>
          <li>The number is 5</li>
          <li>The number is 6</li>
          <li>The number is 7</li>
          <li>The number is 8</li>
          <li>The number is 9</li>
        </ul>

      </div>

      <p>Do not forget to increase the variable used in the condition, otherwise the loop will never end!</p>

      <br />

      {/* Just a mark to separete sections */}

      <h2>Comparing For and While</h2>

      <p>If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.</p>

      <p>The loop in this example uses a for loop to collect the car names from the cars array:</p>

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        
        <code>
          <code>
              <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>];
          </code>

          <br />

          <code>
            <code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>;
          </code>

          <br />

          <code>
            <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;
          </code>

          <br />

          <code>
            <code style={{color:'blue'}}>for</code> (;cars[i];) &#123;
            
            <br />

            text+= cars[i];

            <br />

            i++;

            <br />

            &#125;
          </code>
        </code>

        <br />

        <p>BMW</p>
        <p>Volvo</p>
        <p>Saab</p>
        <p>Ford</p>
      </div>

      <br />

      <p>The loop in this example uses a <code style={{color:'blue'}}>while</code> loop to collect the car names from the cars array:</p>

      <br />

      <div style={{background:'#cecece'}}>
        <h3>Example</h3>

        
        <code>
          <code>
              <code style={{color:'blue'}}>const</code> cars = [<code style={{color:'#5d0000'}}>"BMW"</code>, <code style={{color:'#5d0000'}}>"Volvo"</code>, <code style={{color:'#5d0000'}}>"Saab"</code>, <code style={{color:'#5d0000'}}>"Ford"</code>];
          </code>

          <br />

          <code>
            <code style={{color:'blue'}}>let</code> i = <code style={{color:'red'}}>0</code>;
          </code>

          <br />

          <code>
            <code style={{color:'blue'}}>let</code> text = <code style={{color:'#5d0000'}}>""</code>;
          </code>

          <br />

          <code>
            <code style={{color:'blue'}}>while</code> (cars[i]) &#123;
            
            <br />

            text+= cars[i];

            <br />

            i++;

            <br />

            &#125;
          </code>
        </code>

        <br />

        <p>BMW</p>
        <p>Volvo</p>
        <p>Saab</p>
        <p>Ford</p>
      </div>
    </main>
  )
}

export default JavaScriptWhileLoop