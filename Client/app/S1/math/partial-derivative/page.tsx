const content = String.raw`
  <a href="https://www.youtube.com/watch?v=JAf_aSIJryg">You just need to watch a few minutes(click the line), its easy</a>
  <ul>
    -> Partial Derivative is such a differentiation where we derive with respect to one variable, while keeping the other constant.
  </ul>
  <li>
    <br />
    example_1:
    <br />f(x, y) = 9x<sup>3</sup> + 5x<sup>2</sup>y + 9xy<sup>2</sup> + 3y<sup>2</sup><br />
    δf / δx = 27x<sup>2</sup> + 10xy + 9y<sup>2</sup><br />
    δf / δy = 5x<sup>2</sup> + 18xy + 6y
  </li>
  <li>
    <br />
    2:
    <br />f(x, y) = 4x<sup>3</sup>y + 6x<sup>2</sup> + 3y<sup>2</sup>x + 5y
    <br />
    δf / δx = 12x<sup>2</sup>y + 12x + 3y<sup>2</sup>
    <br />
    δf / δy = 4x<sup>3</sup> + 6xy + 5
  </li>
  <li>
    <br />
    3:
    <br />f(x, y) = 7x<sup>2</sup>y<sup>3</sup> + 5xy + 2y<sup>4</sup>
    <br />
    δf / δx = 14xy<sup>3</sup> + 5y
    <br />
    δf / δy = 21x<sup>2</sup>y<sup>2</sup> + 5x + 8y<sup>3</sup>
  </li>
  <li>
    <br />
    4:
    <br />f(x, y) = 5x<sup>4</sup> + 2x<sup>2</sup>y<sup>2</sup> + y<sup>3</sup>
    <br />
    δf / δx = 20x<sup>3</sup> + 4xy<sup>2</sup>
    <br />
    δf / δy = 4x<sup>2</sup>y + 3y<sup>2</sup>
  </li>
  <li>
    <br />
    5:
    <br />f(x, y) = 6x<sup>2</sup> + 3xy + 2y<sup>2</sup>
    <br />
    δf / δx = 12x + 3y
    <br />
    δf / δy = 3x + 4y
  </li>
  <li>
    <br />
    6:
    <br />f(x, y) = x<sup>3</sup>y<sup>2</sup> + 2xy + y
    <br />
    δf / δx = 3x<sup>2</sup>y<sup>2</sup> + 2y
    <br />
    δf / δy = 2x<sup>3</sup>y + 2x + 1
  </li>
`;

export default function Page() {
  return (
    <div>
      <main className='main-box'>
        <h1 className='page-header'>Partial Derivative</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}
