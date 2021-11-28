import { expect } from "chai";
import "mocha";
import { createPalette } from "../../src/canvas/palette";
import { UserInputConfig } from "../../src/model/user_input";

const input: UserInputConfig = {
  command: "DRAW_NEW_CANVAS",
  width: 20,
  height: 4,
  x1: null,
  y1: null,
  x2: null,
  y2: null,
  c: null,
};

describe("Check Palette Creation Function", () => {
  it("should return a multidimensional array", () => {
    const result = createPalette(input);
    expect(result.length).to.equal(6);
  });

  it("should return null if both width and height is zero", () => {
    input.width = 0;
    input.height = 0;
    const result = createPalette(input);
    expect(result).to.be.null;
  });

  it("should return null if atleast width or height is zero", () => {
    input.width = 20;
    input.height = 0;
    const result = createPalette(input);
    expect(result).to.be.null;
  });
});
