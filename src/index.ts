import { question } from "readline-sync";
import { Key, Prompt } from "./util/message";
import { validator } from "./util/reader";
import { UserInputConfig } from "./model/user_input";
import {
  drawInPalette,
  createPalette,
  drawNewLine,
  drawNewRectangle,
  fillPalette,
} from "./canvas/palette";

let sessionPaletteData;

function handler(input: UserInputConfig): void {
  console.log(input);
  console.log("\n");

  // Invalid command
  if (input.command == Key.INVALID_COMMAND) {
    console.log(Prompt.MSG_INVALID_COMMAND);
    return;
  }

  // Canvas creation
  if (input.command == Key.DRAW_NEW_CANVAS) {
    sessionPaletteData = createPalette(input);
    if (sessionPaletteData == null) {
      console.log(Prompt.MSG_CANVAS_CREATION_FAILED);
    } else {
      drawInPalette(sessionPaletteData);
    }
    return;
  }

  // Draw a line
  if (input.command == Key.DRAW_LINE && isPaletteSessionAvailable()) {
    let _data = drawNewLine(input, sessionPaletteData);
    if (_data == null) {
      console.log(Prompt.MSG_INVALID_LINE_COORDINATES);
    } else {
      sessionPaletteData = _data;
      drawInPalette(sessionPaletteData);
    }
    return;
  }

  // Draw a rectangle
  if (input.command == Key.DRAW_RECTANGLE && isPaletteSessionAvailable()) {
    let _data = drawNewRectangle(input, sessionPaletteData);
    if (_data == null) {
      console.log(Prompt.MSG_INVALID_LINE_COORDINATES);
    } else {
      sessionPaletteData = _data;
      drawInPalette(sessionPaletteData);
    }
    return;
  }

  // Fill the canvas with colour
  if (input.command == Key.BUCKET_FILL && isPaletteSessionAvailable()) {
    let _data = fillPalette(input, sessionPaletteData);
    if (_data == null) {
      console.log(Prompt.MSG_FILL_FAILED);
    } else {
      sessionPaletteData = _data;
      drawInPalette(sessionPaletteData);
    }
    return;
  }

  // Exit command issued
  if (input.command == Key.QUIT) {
    console.log(Prompt.MSG_QUIT);
    process.exit();
  }
}

function isPaletteSessionAvailable() {
  if (sessionPaletteData) {
    return true;
  }

  console.log(Prompt.MSG_NO_PALETTE);
  return false;
}

function init(): void {
  const command: string = question(Prompt.MSG_ENTER_COMMAND);
  const input: UserInputConfig = validator(command);
  handler(input);
  console.log("\n");
  init();
}

init();
