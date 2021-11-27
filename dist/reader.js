"use strict";
exports.__esModule = true;
exports.validator = void 0;
var message_1 = require("./message");
function validator(command) {
    var data = {
        command: message_1.Key.INVALID_COMMAND
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
exports.validator = validator;
function validateNewCanvasCommand(input, data) {
    var match = input.match(/^C (\d+?) (\d+?)$/);
    if (match && match.length == 3) {
        data.command = message_1.Key.DRAW_NEW_CANVAS;
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
function validateNewLineCommand(input, data) {
    var match = input.match(/^L (\d+?) (\d+?) (\d+?) (\d+?)$/);
    if (match && match.length == 5) {
        data.command = message_1.Key.DRAW_LINE;
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
function validateNewRectangleCommand(input, data) {
    var match = input.match(/^R (\d+?) (\d+?) (\d+?) (\d+?)$/);
    if (match && match.length == 5) {
        data.command = message_1.Key.DRAW_RECTANGLE;
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
function validateBucketFillCommand(input, data) {
    var match = input.match(/^B (\d+?) (\d+?) ([a-zA-z])$/);
    if (match && match.length == 4) {
        data.command = message_1.Key.BUCKET_FILL;
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
function validateQuitCommand(input, data) {
    var match = input.match(/^Q$/);
    if (match) {
        data.command = message_1.Key.QUIT;
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
