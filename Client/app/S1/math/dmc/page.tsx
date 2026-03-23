import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <a href="https://www.youtube.com/watch?v=OhqNbQi9QPk">Youtube learning link</a>
  <ul>
    <b>5 steps:</b>
  </ul>
  <li>
    <b>Step 1:</b> Find \( f'(x) = 0 \), find the values of x, draw a number line, point out the numbers, from -infinity, numbers, +infinity, note down the maximum and minimum points. Put the critical points in \( f(x) = 0 \) to find the y-axis values.
  </li>
  <li>
    <b>Step 2:</b> Find \( f''(x) \) = 0, determine the concavity of the function. Draw a number line, and note down the ups (+) and downs (-). Put the fluctuation points in \( f(x) = 0 \) to find the y-axis values.
  </li>
  <li>
    <b>Step 3:</b>Plot the critical points and the fluctuation points, (x,y) in graph, draw the graph.
  </li>
  <ul>
    <li>1) \( f(x) = 4x + \frac{64}{x} \) at \( x = 3\)</li>
    <li>2) \( f(x) = x^3 - 15x^2 + 75x \) at \( x = -8\)</li>
    <li>3) \( f(x) = x^2 - 4x + 3 \) , find intervals</li>
    <li>4) \( f(x) = x^3\) , find intervals</li>
    <li>5) \( f(x) = 3x^4 + 4x^3 - 12x^2 + 2\) , find intervals</li>
  </ul>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Differentiation, Monotonicity, Concavity</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
