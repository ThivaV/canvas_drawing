"use strict";
exports.__esModule = true;
exports.drawInPalette = exports.drawNewRectangle = exports.drawNewLine = exports.createPalette = void 0;
var line_1 = require("../draw/line");
var rectangle_1 = require("../draw/rectangle");
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
    if (isCoordinatesValid(input.x1, input.y1, input.x2, input.y2, palette[0].length - 2, palette.length - 2)) {
        palette = (0, line_1.drawLine)(input.x1, input.y1, input.x2, input.y2, palette);
        return palette;
    }
    return null;
}
exports.drawNewLine = drawNewLine;
function drawNewRectangle(input, palette) {
    if (isCoordinatesValid(input.x1, input.y1, input.x2, input.y2, palette[0].length - 2, palette.length - 2)) {
        palette = (0, rectangle_1.drawRectangle)(input.x1, input.y1, input.x2, input.y2, palette);
        return palette;
    }
    return null;
}
exports.drawNewRectangle = drawNewRectangle;
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
function isCoordinatesValid(x1, y1, x2, y2, xSize, ySize) {
    if (x1 < 1 && x1 > xSize && x2 < 1 && x2 > xSize) {
        return false;
    }
    if (y1 < 1 && y1 > ySize && y2 < 1 && y2 > ySize) {
        return false;
    }
    return true;
}
