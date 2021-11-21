import { question } from "readline-sync";
import { PROMPT } from "./message";
import { validate } from "./validator";

function init(): void {
  const command: string = question(PROMPT.ENTER_COMMAND);
  validate(command);
}

init();
