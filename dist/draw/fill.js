"use strict";
exports.__esModule = true;
exports.fill = void 0;
function fill(x, y, paint, palette) {
    var target = palette[y][x];
    function brush(y, x) {
        if (palette[y][x] === target) {
            palette[y][x] = paint;
            brush(y - 1, x); // check up
            brush(y + 1, x); // check down
            brush(y, x - 1); // check left
            brush(y, x + 1); // check right
        }
    }
    brush(y, x);
    return palette;
}
exports.fill = fill;
