export function drawLine(x1: number, y1: number, x2: number, y2: number, palette: any) {
    const _isVerticalLine = isVerticalLine(x1, y1, x2, y2);

    if (_isVerticalLine) {
        palette = drawVerticalLine(x1, y1, x2, y2, palette);
    } else {
        palette = drawHorizontalLine(x1, y1, x2, y2, palette);
    }

    return palette;
}

function isVerticalLine(x1: number, y1: number, x2: number, y2: number):boolean {
    if (x1 == x2) {
        // Vertical line
        return true;
    }

    // Horizontal line
    return false;
}

// both xAxis are some & yAxis different 
function drawVerticalLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  palette: any
) {
    const startIndex = (y1 < y2) ? y1 : y2;
    const endIndex = (y1 > y2) ? y1 : y2;
    const xAxis = x1;

    for (let yAxis = startIndex; yAxis <= endIndex; yAxis++) {
        palette[yAxis][xAxis] = 'x';
    }

    return palette;
}

// both yAxis are some & xAxis different
function drawHorizontalLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  palette: any
) {
    const startIndex = x1 < x2 ? x1 : x2;
    const endIndex = x1 > x2 ? x1 : x2;
    const yAxis = y1;

    for (let xAxis = startIndex; xAxis <= endIndex; xAxis++) {
        palette[yAxis][xAxis] = "x";        
    }

    return palette;
}