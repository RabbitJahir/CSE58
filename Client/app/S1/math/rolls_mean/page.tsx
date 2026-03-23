import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <ul>
    <a href="https://www.youtube.com/watch?v=0jiVRRKmGoE">Rolles and Means youtube</a>
    <li><b>Rolles</b></li>
    <li>
      <b>1.</b> Solve for f(a)=f(b), if equal, move on.<br />
      <b>2.</b> Check if it is continuous on the closed intervals [a,b].
      <br />
      -- If polynomial, continuous on (-&infin;, &infin;)<br />
      -- If modulus (absolute value), continuous everywhere<br />
      -- If rational, denominator must not be equal to 0<br />
      -- If exponential (e^x), continuous everywhere<br />
      -- If roots, the inside of the radical must be &ge; 0<br />
      -- If log(x), argument must be &gt; 0<br />

      <b>3.</b> Check if it is differentiable on the open intervals (a,b).
      <br />
      -- If polynomial, differentiable on (-&infin;, &infin;)<br />
      -- If modulus (absolute value), not differentiable where inside = 0<br />
      -- If exponential (e^x), differentiable everywhere<br />
      -- If rational, differentiable where denominator &ne; 0<br />
      -- If roots, differentiable where inside &gt; 0 <br />
      -- If log(x), differentiable where x &gt; 0<br />

      <b>4.</b> Find f'(x), change x to c, f '(c) = 0, solve for c, if c is inside the given range, thats the answer.
    </li>
    <ol>
      <li>f(x) = x(x-3)</li>
      <li>\( f(x) = -3x \sqrt{x+1} \)</li>
      <li>f(x) = x<sup>2</sup>-5x+4, [1,4]</li>
      <li>f(x) = x<sup>2/3</sup>-1, [-8,8]</li>
      <li>f(x) = <sup>x<sup>2</sup>-2x-3</sup>&frasl;<sub>x+2</sub>, [-1,3]</li>
      <li>f(x) = <sup>x<sup>2</sup>-1</sup>&frasl;<sub>x</sub>, [-1,1]</li>
      <li>f(x) = cos x, [0, 2&pi;]</li>
    </ol>
    <li><b>Means</b></li>
    <ol>
      <li>Must follow, both step 2 and 3.</li>
      <li>f'(c) = <sup>f(b) - f(a)</sup>&frasl;b-a</li>
    </ol>
    <ol>
      <li>f(x) = x<sup>3</sup>, [0, 1]</li>
      <li>f(x) = x<sup>4</sup>-8x, [0, 2]</li>
      <li>\( f(x) = \frac{x+1}{x} \) , \( [-1 , 2] \)</li>
      <li>f(x) = sin x, [0, &pi;]</li>
    </ol>
  </ul>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Rolles and Mean Theorem</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
