export enum Key {
  ENTER_COMMAND = "ENTER_COMMAND",
  QUIT = "QUIT",
  DRAW_NEW_CANVAS = "DRAW_NEW_CANVAS",
  DRAW_LINE = "DRAW_LINE",
  DRAW_RECTANGLE = "DRAW_RECTANGLE",
  BUCKET_FILL = "BUCKET_FILL",
  INVALID_COMMAND = "INVALID_COMMAND",
}

export enum Prompt {
  MSG_ENTER_COMMAND = "enter command: ",
  MSG_QUIT = "drawning ends.",
  MSG_INVALID_COMMAND = "Invalid command..!!",
  MSG_NO_PALETTE = "No active canvas available, please create canvas.",
  MSG_INVALID_LINE_COORDINATES = "Invalid data line coordinates entered, please retry.",
  MSG_FILL_FAILED = "Filling the canvas with the given colour failed.",
  MSG_CANVAS_CREATION_FAILED = "Canvas creation failed.",
}
