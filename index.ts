import { question } from "readline-sync";
import { PROMPT } from "./message";

function init(): void {
  const command: string = question(PROMPT.ENTER_COMMAND);
}

init();
