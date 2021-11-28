import { UserInputConfig } from "../model/user_input";
import { drawLine } from "../draw/line";
import { drawRectangle } from "../draw/rectangle";
import { fill } from "../draw/fill";

const xAxisBorder = "-";
const yAxisBorder = "|";
const emptySpace = " ";

export function createPalette(input: UserInputConfig) {
  if (input.height == 0 || input.width == 0) {
    return;
  }

  // Added +2 for border markings
  const paletteWidth = input.width + 2; // X-Axis
  const paletteHeight = input.height + 2; // Y-Axis

  const palette = [];
  for (let yAxis = 0; yAxis < paletteHeight; yAxis++) {
    const cells = [];
    for (let xAxis = 0; xAxis < paletteWidth; xAxis++) {
      // Set the borders
      if (yAxis == 0 || yAxis == paletteHeight - 1) {
        cells.push(xAxisBorder);
      } else if (xAxis == 0 || xAxis == paletteWidth - 1) {
        cells.push(yAxisBorder);
      } else {
        cells.push(emptySpace);
      }
    }
    palette.push(cells);
  }

  return palette;
}

export function drawNewLine(input: UserInputConfig, palette: any) {
  if (
    isCoordinatesValid(
      input.x1,
      input.y1,
      input.x2,
      input.y2,
      palette[0].length - 2,
      palette.length - 2
    )
  ) {
      palette = drawLine(input.x1, input.y1, input.x2, input.y2, palette);
      return palette;
  }
  
  return null;
}

export function drawNewRectangle(input: UserInputConfig, palette: any) {
    if (
      isCoordinatesValid(
        input.x1,
        input.y1,
        input.x2,
        input.y2,
        palette[0].length - 2,
        palette.length - 2
      )
    ) {
      palette = drawRectangle(input.x1, input.y1, input.x2, input.y2, palette);
      return palette;
    }

    return null;
}

export function fillPalette(input: UserInputConfig, palette: any) {
  if (
    isCoordinatesValidToFill(
      input.x1,
      input.y1,
      palette[0].length - 2,
      palette.length - 2
    )
  ) {
    palette = fill(input.x1, input.y1, input.c, palette);
    return palette;
  }
  return null;
}

export function drawInPalette(sketchData) {
  if (!sketchData) {
    return;
  }

  const height = sketchData.length;
  const width = sketchData[0].length;

  for (let yAxis = 0; yAxis < height; yAxis++) {
    let line = "";
    for (let xAxis = 0; xAxis < width; xAxis++) {
      line += sketchData[yAxis][xAxis];
    }

    // Draw
    console.log(line);
  }
}

function isCoordinatesValid(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  xSize: number,
  ySize: number
): boolean {
  if (x1 < 1 && x1 > xSize && x2 < 1 && x2 > xSize) {
    return false;
  }

  if (y1 < 1 && y1 > ySize && y2 < 1 && y2 > ySize) {
    return false;
  }

  return true;
}

function isCoordinatesValidToFill(
  x1: number,
  y1: number,
  xSize: number,
  ySize: number
): boolean {
  if (x1 < 1 && x1 > xSize) {
    return false;
  }

  if (y1 < 1 && y1 > ySize) {
    return false;
  }

  return true;
}