import { expect } from "chai";
import "mocha";
import { validator } from "../../src/util/reader";
import { UserInputConfig } from "../../src/model/user_input";
import { Key } from "../../src/util/message";

describe("Check User Input Validator - Success Scenarios", () => {
  it("Successfully Accpected Quit Command", () => {
    const result: UserInputConfig = validator("Q");
    expect(result.command).to.equal(Key.QUIT);
    expect(result.x1).to.be.null;
    expect(result.y1).to.be.null;
    expect(result.x2).to.be.null;
    expect(result.y2).to.be.null;
    expect(result.c).to.be.null;
  });
  it("Successfully Accpected Create Canvas Command", () => {
    const result: UserInputConfig = validator("C 20 4");
    expect(result.command).to.equal(Key.DRAW_NEW_CANVAS);
    expect(result.width).to.equal(20);
    expect(result.height).to.equal(4);
    expect(result.x1).to.be.null;
    expect(result.y1).to.be.null;
    expect(result.x2).to.be.null;
    expect(result.y2).to.be.null;
    expect(result.c).to.be.null;
  });
  it("Successfully Accpected Draw Line Command", () => {
    const result: UserInputConfig = validator("L 1 2 6 2");
    expect(result.command).to.equal(Key.DRAW_LINE);
    expect(result.width).to.be.null;
    expect(result.height).to.be.null;
    expect(result.x1).to.equal(1);
    expect(result.y1).to.equal(2);
    expect(result.x2).to.equal(6);
    expect(result.y2).to.equal(2);
    expect(result.c).to.be.null;
  });
  it("Successfully Accpected Draw Rectangle Command", () => {
    const result: UserInputConfig = validator("R 14 1 18 3");
    expect(result.command).to.equal(Key.DRAW_RECTANGLE);
    expect(result.width).to.be.null;
    expect(result.height).to.be.null;
    expect(result.x1).to.equal(14);
    expect(result.y1).to.equal(1);
    expect(result.x2).to.equal(18);
    expect(result.y2).to.equal(3);
    expect(result.c).to.be.null;
  });
  it("Successfully Accpected Fill Canvas with Colour Command", () => {
    const result: UserInputConfig = validator("B 10 3 o");
    expect(result.command).to.equal(Key.BUCKET_FILL);
    expect(result.width).to.be.null;
    expect(result.height).to.be.null;
    expect(result.x1).to.equal(10);
    expect(result.y1).to.equal(3);
    expect(result.x2).to.be.null;
    expect(result.y2).to.be.null;
    expect(result.c).to.equal("o");
  });
});

describe("Check User Input Validator - Failure Scenarios", () => {
  it("Invalid Quit Command", () => {
    const result: UserInputConfig = validator("q");
    expect(result.command).to.equal(Key.INVALID_COMMAND);
    expect(result).to.not.have.property('x1');
    expect(result).to.not.have.property("y1");
    expect(result).to.not.have.property("x2");
    expect(result).to.not.have.property("y2");
    expect(result).to.not.have.property("c");
  });
  it("Successfully Accpected Create Canvas Command", () => {
    const result: UserInputConfig = validator("C 4");
    expect(result.command).to.equal(Key.INVALID_COMMAND);
    expect(result).to.not.have.property("x1");
    expect(result).to.not.have.property("y1");
    expect(result).to.not.have.property("x2");
    expect(result).to.not.have.property("y2");
    expect(result).to.not.have.property("c");
  });
  it("Successfully Accpected Draw Line Command", () => {
    const result: UserInputConfig = validator("L 1 2 f 6 2");
    expect(result.command).to.equal(Key.INVALID_COMMAND);
    expect(result).to.not.have.property("x1");
    expect(result).to.not.have.property("y1");
    expect(result).to.not.have.property("x2");
    expect(result).to.not.have.property("y2");
    expect(result).to.not.have.property("c");
  });
  it("Successfully Accpected Draw Rectangle Command", () => {
    const result: UserInputConfig = validator("R 14 1 18 4 3");
    expect(result.command).to.equal(Key.INVALID_COMMAND);
    expect(result).to.not.have.property("x1");
    expect(result).to.not.have.property("y1");
    expect(result).to.not.have.property("x2");
    expect(result).to.not.have.property("y2");
    expect(result).to.not.have.property("c");
  });
  it("Successfully Accpected Fill Canvas with Colour Command", () => {
    const result: UserInputConfig = validator("B 10 3 1");
    expect(result.command).to.equal(Key.INVALID_COMMAND);
    expect(result).to.not.have.property("x1");
    expect(result).to.not.have.property("y1");
    expect(result).to.not.have.property("x2");
    expect(result).to.not.have.property("y2");
    expect(result).to.not.have.property("c");
  });
});