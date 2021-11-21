"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var message_1 = require("./message");
var validator_1 = require("./validator");
function init() {
    var command = (0, readline_sync_1.question)(message_1.PROMPT.ENTER_COMMAND);
    (0, validator_1.validate)(command);
}
init();
