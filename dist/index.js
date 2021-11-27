"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var message_1 = require("./message");
var reader_1 = require("./reader");
var palette_1 = require("./palette/palette");
var sessionPaletteData;
function handler(input) {
    console.log(input);
    console.log('\n');
    if (input.command == message_1.Key.INVALID_COMMAND) {
        console.log(message_1.Prompt.MSG_INVALID_COMMAND);
        return;
    }
    if (input.command == message_1.Key.DRAW_NEW_CANVAS) {
        sessionPaletteData = (0, palette_1.createPalette)(input);
        (0, palette_1.drawInPalette)(sessionPaletteData);
        return;
    }
    if (input.command == message_1.Key.DRAW_LINE && isPaletteSessionAvailable()) {
        var _data = (0, palette_1.drawNewLine)(input, sessionPaletteData);
        if (_data == null) {
            console.log(message_1.Prompt.MSG_INVALID_LINE_COORDINATES);
        }
        sessionPaletteData = _data;
        (0, palette_1.drawInPalette)(sessionPaletteData);
        return;
    }
    if (input.command == message_1.Key.DRAW_RECTANGLE && isPaletteSessionAvailable()) {
        var _data = (0, palette_1.drawNewRectangle)(input, sessionPaletteData);
        if (_data == null) {
            console.log(message_1.Prompt.MSG_INVALID_LINE_COORDINATES);
        }
        sessionPaletteData = _data;
        (0, palette_1.drawInPalette)(sessionPaletteData);
        return;
    }
    if (input.command == message_1.Key.BUCKET_FILL && isPaletteSessionAvailable()) {
        return;
    }
    if (input.command == message_1.Key.QUIT) {
        console.log(message_1.Prompt.MSG_QUIT);
        process.exit();
    }
}
function isPaletteSessionAvailable() {
    if (sessionPaletteData) {
        return true;
    }
    console.log(message_1.Prompt.MSG_NO_PALETTE);
    return false;
}
function init() {
    var command = (0, readline_sync_1.question)(message_1.Prompt.MSG_ENTER_COMMAND);
    var input = (0, reader_1.validator)(command);
    handler(input);
    console.log("\n");
    init();
}
init();
