export function fill(x: number, y: number, paint: string, palette: any) {
  var target = palette[y][x];

  function brush(y, x) {
      if (palette[y][x] === target) {
        palette[y][x] = paint;
        brush(y - 1, x); // check up
        brush(y + 1, x); // check down
        brush(y, x - 1); // check left
        brush(y, x + 1); // check right
      }
  }

  brush(y, x);

  return palette;
}
