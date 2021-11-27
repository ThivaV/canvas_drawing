"use strict";
exports.__esModule = true;
exports.drawRectangle = void 0;
function drawRectangle(x1, y1, x2, y2, palette) {
    palette = drawParallalTo_xAxis(x1, y1, x2, y2, palette);
    palette = drawParallalTo_yAxis(x1, y1, x2, y2, palette);
    return palette;
}
exports.drawRectangle = drawRectangle;
function drawParallalTo_xAxis(x1, y1, x2, y2, palette) {
    var startIndex = x1 < x2 ? x1 : x2;
    var endIndex = x1 > x2 ? x1 : x2;
    var diff = endIndex - startIndex;
    var xMin = 0;
    var xMin_y = 0;
    var xMax = 0;
    var xMax_y = 0;
    if (startIndex == x1) {
        xMin = x1;
        xMin_y = y1;
        xMax = x2;
        xMax_y = y2;
    }
    else {
        xMin = x2;
        xMin_y = y2;
        xMax = x1;
        xMax_y = y1;
    }
    // Left to Right - Parallal to xAxis (xMin)
    for (var index = 0; index <= diff; index++) {
        palette[xMin_y][xMin] = "x";
        xMin += 1;
    }
    // Right to Left - Parallal to xAxix
    for (var index = 0; index <= diff; index++) {
        palette[xMax_y][xMax] = "x";
        xMax -= 1;
    }
    return palette;
}
function drawParallalTo_yAxis(x1, y1, x2, y2, palette) {
    var startIndex = y1 < y2 ? y1 : y2;
    var endIndex = y1 > y2 ? y1 : y2;
    var diff = endIndex - startIndex;
    var yMin = 0;
    var yMin_x = 0;
    var yMax = 0;
    var yMax_x = 0;
    if (startIndex == y1) {
        yMin = y1;
        yMin_x = x1;
        yMax = y2;
        yMax_x = x2;
    }
    else {
        yMin = y2;
        yMin_x = x2;
        yMax = y1;
        yMax_x = x1;
    }
    // Bottom to Up - Parallal to yAxis (yMin)
    for (var index = 0; index <= diff; index++) {
        palette[yMin][yMin_x] = "x";
        yMin += 1;
    }
    // Up to Down - Parallal to yAxix
    for (var index = 0; index <= diff; index++) {
        palette[yMax][yMax_x] = "x";
        yMax -= 1;
    }
    return palette;
}
