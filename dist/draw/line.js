"use strict";
exports.__esModule = true;
exports.drawLine = void 0;
function drawLine(x1, y1, x2, y2, palette) {
    var _isVerticalLine = isVerticalLine(x1, y1, x2, y2);
    if (_isVerticalLine) {
        palette = drawVerticalLine(x1, y1, x2, y2, palette);
    }
    else {
        palette = drawHorizontalLine(x1, y1, x2, y2, palette);
    }
    return palette;
}
exports.drawLine = drawLine;
function isVerticalLine(x1, y1, x2, y2) {
    if (x1 == x2) {
        // Vertical line
        return true;
    }
    // Horizontal line
    return false;
}
// both xAxis are some & yAxis different 
function drawVerticalLine(x1, y1, x2, y2, palette) {
    var startIndex = (y1 < y2) ? y1 : y2;
    var endIndex = (y1 > y2) ? y1 : y2;
    var xAxis = x1;
    for (var yAxis = startIndex; yAxis <= endIndex; yAxis++) {
        palette[yAxis][xAxis] = 'x';
    }
    return palette;
}
// both yAxis are some & xAxis different
function drawHorizontalLine(x1, y1, x2, y2, palette) {
    var startIndex = x1 < x2 ? x1 : x2;
    var endIndex = x1 > x2 ? x1 : x2;
    var yAxis = y1;
    for (var xAxis = startIndex; xAxis <= endIndex; xAxis++) {
        palette[yAxis][xAxis] = "x";
    }
    return palette;
}
