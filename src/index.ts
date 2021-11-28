import { question } from "readline-sync";
import { Key, Prompt } from "./message";
import { validator } from "./reader";
import { UserInputConfig } from "./model/user_input";
import {
  drawInPalette,
  createPalette,
  drawNewLine,
  drawNewRectangle,
  fillPalette,
} from "./palette/palette";

let sessionPaletteData;

function handler(input: UserInputConfig): void {
  console.log(input);
  console.log('\n');

  if (input.command == Key.INVALID_COMMAND) {
    console.log(Prompt.MSG_INVALID_COMMAND);
    return;
  }

  if (input.command == Key.DRAW_NEW_CANVAS) {    
    sessionPaletteData = createPalette(input);
    drawInPalette(sessionPaletteData);
    return;
  }

  if (input.command == Key.DRAW_LINE && isPaletteSessionAvailable()) {
    let _data = drawNewLine(input, sessionPaletteData);
    if (_data == null) {
      console.log(Prompt.MSG_INVALID_LINE_COORDINATES);
    }
    sessionPaletteData = _data;
    drawInPalette(sessionPaletteData);
    return;
  }

  if (input.command == Key.DRAW_RECTANGLE && isPaletteSessionAvailable()) {
    let _data = drawNewRectangle(input, sessionPaletteData);
    if (_data == null) {
      console.log(Prompt.MSG_INVALID_LINE_COORDINATES);
    }
    sessionPaletteData = _data;
    drawInPalette(sessionPaletteData);
    return;
  }

  if (input.command == Key.BUCKET_FILL && isPaletteSessionAvailable()) {
    let _data = fillPalette(input, sessionPaletteData);
    if (_data == null) {
      console.log(Prompt.MSG_FILL_FAILED);
    }
    sessionPaletteData = _data;
    drawInPalette(sessionPaletteData);
    return;
  }

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
