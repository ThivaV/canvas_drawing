"use strict";
exports.__esModule = true;
exports.drawInPalette = exports.drawNewLine = exports.createPalette = void 0;
var line_1 = require("../draw/line");
var xAxisBorder = "-";
var yAxisBorder = "|";
var emptySpace = " ";
function createPalette(input) {
    if (input.height == 0 || input.width == 0) {
        return;
    }
    // Added +2 for border markings
    var paletteWidth = input.width + 2; // X-Axis
    var paletteHeight = input.height + 2; // Y-Axis
    var palette = [];
    for (var yAxis = 0; yAxis < paletteHeight; yAxis++) {
        var cells = [];
        for (var xAxis = 0; xAxis < paletteWidth; xAxis++) {
            // Set the borders
            if (yAxis == 0 || yAxis == paletteHeight - 1) {
                cells.push(xAxisBorder);
            }
            else if (xAxis == 0 || xAxis == paletteWidth - 1) {
                cells.push(yAxisBorder);
            }
            else {
                cells.push(emptySpace);
            }
        }
        palette.push(cells);
    }
    return palette;
}
exports.createPalette = createPalette;
function drawNewLine(input, palette) {
    if ((0, line_1.isCoordinatesValid)(input.x1, input.y1, input.x2, input.y2, palette[0].length - 2, palette.length - 2)) {
        palette = (0, line_1.drawLine)(input.x1, input.y1, input.x2, input.y2, palette);
        return palette;
    }
    return null;
}
exports.drawNewLine = drawNewLine;
function drawInPalette(sketchData) {
    if (!sketchData) {
        return;
    }
    var height = sketchData.length;
    var width = sketchData[0].length;
    for (var yAxis = 0; yAxis < height; yAxis++) {
        var line = "";
        for (var xAxis = 0; xAxis < width; xAxis++) {
            line += sketchData[yAxis][xAxis];
        }
        // Draw
        console.log(line);
    }
}
exports.drawInPalette = drawInPalette;
