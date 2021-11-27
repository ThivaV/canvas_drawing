export function drawRectangle(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  palette: any
) {
  palette = drawParallalTo_xAxis(x1, y1, x2, y2, palette);
  palette = drawParallalTo_yAxis(x1, y1, x2, y2, palette);
  return palette;
}

function drawParallalTo_xAxis(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  palette: any
) {
  const startIndex = x1 < x2 ? x1 : x2;
  const endIndex = x1 > x2 ? x1 : x2;
  const diff = endIndex - startIndex;

  let xMin = 0;
  let xMin_y = 0;
  let xMax = 0;
  let xMax_y = 0;

  if (startIndex == x1) {
    xMin = x1;
    xMin_y = y1;
    xMax = x2;
    xMax_y = y2;
  } else {
    xMin = x2;
    xMin_y = y2;
    xMax = x1;
    xMax_y = y1;
  }

  // Left to Right - Parallal to xAxis (xMin)
  for (let index = 0; index <= diff; index++) {
    palette[xMin_y][xMin] = "x";
    xMin += 1;
  }

  // Right to Left - Parallal to xAxix
  for (let index = 0; index <= diff; index++) {
    palette[xMax_y][xMax] = "x";
    xMax -= 1;
  }

  return palette;
}

function drawParallalTo_yAxis(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  palette: any
) {
  const startIndex = y1 < y2 ? y1 : y2;
  const endIndex = y1 > y2 ? y1 : y2;
  const diff = endIndex - startIndex;

  let yMin = 0;
  let yMin_x = 0;
  let yMax = 0;
  let yMax_x = 0;

  if (startIndex == y1) {
    yMin = y1;
    yMin_x = x1;
    yMax = y2;
    yMax_x = x2;
  } else {
    yMin = y2;
    yMin_x = x2;
    yMax = y1;
    yMax_x = x1;
  }

  // Bottom to Up - Parallal to yAxis (yMin)
  for (let index = 0; index <= diff; index++) {
    palette[yMin][yMin_x] = "x";
    yMin += 1;
  }

  // Up to Down - Parallal to yAxix
  for (let index = 0; index <= diff; index++) {
    palette[yMax][yMax_x] = "x";
    yMax -= 1;
  }

  return palette;
}
