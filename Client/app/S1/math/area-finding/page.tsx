import Header from '../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S1`, label: `S1`, className: `HeaderButton` },
  { href: `/S1/math`, label: `Math`, className: `HeaderButton` },
];

const content = String.raw`
  <a href="https://www.youtube.com/watch?v=UjTTx2eYrx8">Youtube Learning Link</a>
  <ul></ul>
`;

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Area Finding</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
