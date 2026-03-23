import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <a href="https://www.youtube.com/watch?v=3wrXDw5ETh4">Youtube learning link</a>
  <ul>
    <b>Extreme value theorem:</b>
    If a function f is continuous on a finite closed interval [a, b], then f has both a maximum and a minimum value on that interval[a,b], then f has both an absolute minima and an absolute maxima.
  </ul>
  <br />
  <ul>
    Shortcut to check if interval gap is huge.<br />
    For a continuous function f(x) on a closed interval [a,b], the Extreme Value Theorem says: Absolute max and min occur either at critical points or at the endpoints.<br />Critical points: the points in f'(x) = 0.<br />Endpoints: given interval, [a,b]
  </ul>
  <ul>
    <ol>
      <li>\( f(x) = 2x^3 - 15x^2 + 36x, \quad [1,5] \)</li>
      <li>\( f(x) = 6\frac{x^4}{3} - 3\frac{x^1}{3}, \quad [-1,1] \)</li>
      <li>\( f(x) = 4x^2 - 12x + 10, \quad [1,2] \)</li>
      <li>\( f(x) = 8x - x^2 \)</li>
      <li>\( f(x) = \frac{3x}{\sqrt{4x^2 + 1}} \)</li>
      <li>\( f(x) = 1 + |9 - x^2|, \quad [-5,1] \)</li>
      <li>\( f(x) = |6 - 4x|, \quad [-3,3] \)</li>
    </ol>
  </ul>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Absolute Maxima and Minima</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
