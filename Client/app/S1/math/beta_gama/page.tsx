import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <a href="https://www.youtube.com/watch?v=xU1HBisdJJs&t=906s">Youtube learning link</a>
  <ul>
    <li><b>Beta</b></li>
    <li>Relation between Beta and Gamma functions: \(\beta(m, n) = \dfrac{\Gamma(m) \Gamma(n)}{\Gamma(m + n)}\)</li>
    <li>\(\beta(m, n) = \int_0^1 x^{m-1} (1 - x)^{n-1} \, dx \quad (m, n > 0)\)</li>
    <li>Symmetric property: \(\beta(m, n) = \beta(n, m)\)</li>
    <li>\(\beta(m, n) = 2 \int_0^{\pi/2} (\sin \theta)^{2m-1} (\cos \theta)^{2n-1} \, d\theta\)</li>
  </ul>
  <ul>
    <li><b>Gamma</b></li>
    <li>1) \(\Gamma(n) = \int_0^{\infty} e^{-x} x^{n-1} \, dx\)</li>
    <li>2) \(\Gamma(1) = 1\)</li>
    <li>3) \(\Gamma(n + 1) = n \Gamma(n)\)</li>
    <li>4) \(\Gamma(n + 1) = n!\)</li>
    <li>5) \(\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}\)</li>
    <li>6) \(\Gamma(m) \Gamma(1 - m) = \dfrac{\pi}{\sin(\pi m)}\)</li>
  </ul>
  <ul>
    Exercise:
    <ul>
      <li>1) Prove that, \(\Gamma(1 / 2) = \sqrt{\pi}\)</li>
      <li>2) Evaluate \(B(3, 2)\)</li>
      <li>3) Show that \(B(m, n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m + n)}\)</li>
      <li>4) Find the value of \(B\left(\dfrac{1}{2}, \dfrac{1}{2}\right)\)</li>
      <li>5) Prove that \(B(1, n) = \dfrac{1}{n}\)</li>
      <li>6) Evaluate \(B(2, 3)\) using Gamma functions</li>
      <li>7) Express \(B(m, n)\) as an integral involving sine and cosine:
        <br />\(B(m, n) = 2 \int_0^{\pi/2} (\sin \theta)^{2m-1} (\cos \theta)^{2n-1} \, d\theta\)
      </li>
      <li>8) Evaluate \(\int_0^{\pi/2} \sin^4\theta \cos^2\theta \, d\theta\) using Beta function</li>
      <li>9) Evaluate \(\int_0^{\pi/2} \sin^5\theta \, d\theta\)</li>
      <li>10) Show that \(\int_0^{\pi/2} \sin^{m-1}\theta \cos^{n-1}\theta \, d\theta = \dfrac{1}{2}B\left(\dfrac{m}{2}, \dfrac{n}{2}\right)\)</li>
      <li>11) If \(\Gamma(m)\Gamma(1 - m) = \dfrac{\pi}{\sin(\pi m)}\), find the value of \(\Gamma\left(\dfrac{3}{4}\right)\Gamma\left(\dfrac{1}{4}\right)\)</li>
      <li>12) Evaluate \(\Gamma(5)\)</li>
      <li>13) Prove that \(\Gamma(n + 1) = n\Gamma(n)\) for all positive integers \(n\)</li>
      <li>14) Show that \(\Gamma(n + 1) = n!\)</li>
      <li>15) Find the value of \(\Gamma\left(\dfrac{3}{2}\right)\)</li>
      <li>16) Prove that \(\Gamma\left(\dfrac{5}{2}\right) = \dfrac{3}{4}\sqrt{\pi}\)</li>
    </ul>
  </ul>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Beta and Gamma Function</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
