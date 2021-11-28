export function fill(x: number, y: number, paint: string, palette: any) {
  var target = palette[y][x];

  function brush(y, x) {
    if (palette[y][x] === target) {
      palette[y][x] = paint;
      brush(y - 1, x); // Look Up
      brush(y + 1, x); // Look Down
      brush(y, x - 1); // Look Left
      brush(y, x + 1); // Look Right
    }
  }

  brush(y, x);

  return palette;
}
