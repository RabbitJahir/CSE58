import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <ul>
    <b>Formula<sub>--muzastan</sub></b>
  </ul>
  <ol>
    <li>\( \int dx = x + C \)</li>
    <li>\( \int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1 \)</li>
    <li>\( \int \frac{1}{x} \, dx = \ln|x| + C \)</li>
    <li>\( \int \frac{1}{\sqrt{x}} \, dx = 2\sqrt{x} + C \)</li>
    <li>\( \int e^{mx} \, dx = \frac{1}{m} e^{mx} + C \)</li>
    <li>\( \int a^x \, dx = \frac{a^x}{\ln a} + C \)</li>
    <li>\( \int \cos x \, dx = \sin x + C \)</li>
    <li>\( \int \sin x \, dx = -\cos x + C \)</li>
    <li>\( \int \sec^2 x \, dx = \tan x + C \)</li>
    <li>\( \int \csc^2 x \, dx = -\cot x + C \)</li>
    <li>\( \int \sec x \tan x \, dx = \sec x + C \)</li>
    <li>\( \int \csc x \cot x \, dx = -\csc x + C \)</li>
    <li>\( \int \tan x \, dx = \ln|\sec x| + C \)</li>
    <li>\( \int \cot x \, dx = \ln|\sin x| + C \)</li>
    <li>\( \int \sec x \, dx = \ln|\sec x + \tan x| + C \)</li>
    <li>\( \int \csc x \, dx = \ln|\csc x - \cot x| + C \)</li>
    <li>\( \int \frac{dx}{a^2 + x^2} = \frac{1}{a} \tan^{-1}\left( \frac{x}{a} \right) + C \)</li>
    <li>\( \int \frac{dx}{a^2 - x^2} = \frac{1}{2a} \ln\left| \frac{a + x}{a - x} \right| + C \)</li>
    <li>\( \int \frac{dx}{x^2 - a^2} = \frac{1}{2a} \ln\left| \frac{x - a}{x + a} \right| + C \)</li>
  </ol>
  <ul>
    <b>Problems: </b>
  </ul>
  <ol>
    <li>\( \int 5x^3 \, dx \)</li>
    <li>\( \int \frac{1}{x} \, dx \)</li>
    <li>\( \int \frac{x^4 + 1}{x^2} \, dx \)</li>
    <li>\( \int \frac{1 + x}{x} \, dx \)</li>
    <li>\( \int (x^2 + e^x + 2^x) \, dx \)</li>
    <li>\( \int (4x^3 + 3x^2 - 2x + 5) \, dx \)</li>
    <li>\( \int (1 - 3x)(1 + x) \, dx \)</li>
    <li>\( \int (3x^{-1} + 4x^2 - 3x + 8) \, dx \)</li>
    <li>\( \int (8e^x - 4a^x + 3x^{-1} + \sqrt[4]{x}) \, dx \)</li>
    <li>\( \int (2x + 9)^5 \, dx \)</li>
    <li>\( \int (\sqrt{5x + 7})^3 \, dx \)</li>
    <li>\( \int ((x^3 + 2)^3 - 3x^2) \, dx \)</li>
    <li>\( \int \frac{dx}{x \ln x \ln(\ln x)} \)</li>
  </ol>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Integration</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
