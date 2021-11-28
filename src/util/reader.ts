import { Key } from "./message";
import { UserInputConfig } from "../model/user_input";

export function validator(command: string): any {
  const data: UserInputConfig = {
    command: Key.INVALID_COMMAND,
  };

  if (validateQuitCommand(command, data)) {
    return data;
  }
  if (validateNewCanvasCommand(command, data)) {
    return data;
  }
  if (validateNewLineCommand(command, data)) {
    return data;
  }
  if (validateNewRectangleCommand(command, data)) {
    return data;
  }
  if (validateBucketFillCommand(command, data)) {
    return data;
  }
  return data;
}

// Quit Command Validator
function validateQuitCommand(input: string, data: UserInputConfig): boolean {
  const match = input.match(/^Q$/);
  if (match) {
    data.command = Key.QUIT;
    data.width = null;
    data.height = null;
    data.x1 = null;
    data.y1 = null;
    data.x2 = null;
    data.y2 = null;
    data.c = null;
    return true;
  }
  return false;
}

// New Canvas Command Validator
function validateNewCanvasCommand(
  input: string,
  data: UserInputConfig
): boolean {
  const match = input.match(/^C (\d+?) (\d+?)$/);
  if (match && match.length == 3) {
    data.command = Key.DRAW_NEW_CANVAS;
    data.width = Number(match[1]);
    data.height = Number(match[2]);
    data.x1 = null;
    data.y1 = null;
    data.x2 = null;
    data.y2 = null;
    data.c = null;
    return true;
  }
  return false;
}

// New Line Command Validator
function validateNewLineCommand(input: string, data: UserInputConfig): boolean {
  const match = input.match(/^L (\d+?) (\d+?) (\d+?) (\d+?)$/);
  if (match && match.length == 5) {
    data.command = Key.DRAW_LINE;
    data.width = null;
    data.height = null;
    data.x1 = Number(match[1]);
    data.y1 = Number(match[2]);
    data.x2 = Number(match[3]);
    data.y2 = Number(match[4]);
    data.c = null;
    return true;
  }
  return false;
}

// New Rectangle Command Validator
function validateNewRectangleCommand(
  input: string,
  data: UserInputConfig
): boolean {
  const match = input.match(/^R (\d+?) (\d+?) (\d+?) (\d+?)$/);
  if (match && match.length == 5) {
    data.command = Key.DRAW_RECTANGLE;
    data.width = null;
    data.height = null;
    data.x1 = Number(match[1]);
    data.y1 = Number(match[2]);
    data.x2 = Number(match[3]);
    data.y2 = Number(match[4]);
    data.c = null;
    return true;
  }
  return false;
}

// Fill the Canvas with Colour Command Validator
function validateBucketFillCommand(
  input: string,
  data: UserInputConfig
): boolean {
  const match = input.match(/^B (\d+?) (\d+?) ([a-zA-z])$/);
  if (match && match.length == 4) {
    data.command = Key.BUCKET_FILL;
    data.width = null;
    data.height = null;
    data.x1 = Number(match[1]);
    data.y1 = Number(match[2]);
    data.x2 = null;
    data.y2 = null;
    data.c = match[3];
    return true;
  }
  return false;
}
