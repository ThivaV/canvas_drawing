"use strict";
exports.__esModule = true;
exports.Prompt = exports.Key = void 0;
var Key;
(function (Key) {
    Key["ENTER_COMMAND"] = "ENTER_COMMAND";
    Key["QUIT"] = "QUIT";
    Key["DRAW_NEW_CANVAS"] = "DRAW_NEW_CANVAS";
    Key["DRAW_LINE"] = "DRAW_LINE";
    Key["DRAW_RECTANGLE"] = "DRAW_RECTANGLE";
    Key["BUCKET_FILL"] = "BUCKET_FILL";
    Key["INVALID_COMMAND"] = "INVALID_COMMAND";
})(Key = exports.Key || (exports.Key = {}));
var Prompt;
(function (Prompt) {
    Prompt["MSG_ENTER_COMMAND"] = "enter command: ";
    Prompt["MSG_QUIT"] = "drawning ends.";
    Prompt["MSG_INVALID_COMMAND"] = "Invalid command..!!";
    Prompt["MSG_NO_PALETTE"] = "No active canvas available, please create canvas.";
    Prompt["MSG_INVALID_LINE_COORDINATES"] = "Invalid data line coordinates entered, please retry.";
})(Prompt = exports.Prompt || (exports.Prompt = {}));
