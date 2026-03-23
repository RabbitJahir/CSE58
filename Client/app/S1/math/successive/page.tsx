import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <ul>
    <li>1) \( y = 2x + \frac{4}{x} \), prove that \( x^2 \frac{d^2y}{dx^2} - y = 0 \)</li>
    <li>2) \( y = e^{ax} \), show that \( (1 - x^2) y_2 - xy_1 = a^2 y \)</li>
    <li>3) \( y = \sec(\sec x) \), show that \( y_2 = y(2y^2 - 1) \)</li>
    <li>4) \( y = Ae^{mx} + Be^{-mx}\), show that \( y_2 = -m^2y\)</li>
    <li>5) \( y = Ae^x + Be^{-x}\), show that \( y_2 - y = 0\)</li>
    <li>6) \( y = x^4 + 4x^3 + 10 \), then find \( y_2 \) and \( y_3 \)</li>
    <li>7) \( y = 8x^5 - 4x^3 + 14x^2 \), then find \( y_2 \) and \( y_3 \) and \( y_4 \)</li>
  </ul>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Successive Differentiation</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}