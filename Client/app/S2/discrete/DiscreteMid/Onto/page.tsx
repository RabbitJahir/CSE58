import Header from '../../../../components/Header/Index';

const links = [
  { href: `/`, label: `Home`, className: `HeaderButton` },
  { href: `/S2`, label: `S2 Page`, className: `HeaderButton` },
  { href: `/S2/discrete`, label: `Discrete Page`, className: `HeaderButton` },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className='main-box'>
        <h1 className='page-header'>Onto</h1>
      </main>
    </div>
  );
}
