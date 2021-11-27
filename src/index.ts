import { question } from "readline-sync";
import { Key, Prompt } from "./message";
import { validator } from "./input_reader";
import { UserInputConfig } from "./model/user_input";

function handler(input: UserInputConfig): void {
  if (input.command == Key.INVALID_COMMAND) {
    console.log(Prompt.MSG_INVALID_COMMAND);
    return;
  }

  if (input.command == Key.DRAW_NEW_CANVAS) {
    console.log(input);
    return;
  }

  if (input.command == Key.DRAW_LINE) {
    return;
  }

  if (input.command == Key.DRAW_RECTANGLE) {
    return;
  }

  if (input.command == Key.BUCKET_FILL) {
    return;
  }

  if (input.command == Key.QUIT) {
    console.log(Prompt.MSG_QUIT);
    process.exit();
  }
}

function init(): void {
  const command: string = question(Prompt.MSG_ENTER_COMMAND);
  const input: UserInputConfig = validator(command);
  handler(input);
  console.log("\n");
  init();
}

init();
