import Header from '../../../../components/Header/Index';

const links = [
{ href: `/`, label: `Home`, className: `HeaderButton` },
{ href: `/S1`, label: `S1 Page`, className: `HeaderButton` },
{ href: `/S1/eng`, label: `English Page`, className: `HeaderButton` },
{ href: `/S1/eng/PicStory`, label: `Picture Story Page`, className: `HeaderButton` },
];

export default function Page() {
  return (
    <div>
<Header links={links} />
<main className='main-box'>
<h1 className='page-header'>Pic 5</h1>
</main>
</div>
  );
}