"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var message_1 = require("./message");
var input_reader_1 = require("./input_reader");
function handler(input) {
    if (input.command == message_1.Key.INVALID_COMMAND) {
        console.log(message_1.Prompt.MSG_INVALID_COMMAND);
        return;
    }
    if (input.command == message_1.Key.DRAW_NEW_CANVAS) {
        console.log(input);
        return;
    }
    if (input.command == message_1.Key.DRAW_LINE) {
        return;
    }
    if (input.command == message_1.Key.DRAW_RECTANGLE) {
        return;
    }
    if (input.command == message_1.Key.BUCKET_FILL) {
        return;
    }
    if (input.command == message_1.Key.QUIT) {
        console.log(message_1.Prompt.MSG_QUIT);
        process.exit();
    }
}
function init() {
    var command = (0, readline_sync_1.question)(message_1.Prompt.MSG_ENTER_COMMAND);
    var input = (0, input_reader_1.validator)(command);
    handler(input);
    console.log("\n");
    init();
}
init();
