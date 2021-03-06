import Config from "utils/AUMT/Config";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";
import { theme } from "../../default";

describe("TextLine tests", () => {
  let contextRestoreSpy: jest.SpyInstance;
  let contextStrokeTextSpy: jest.SpyInstance;
  let contextFillSpy: jest.SpyInstance;

  describe("centered", () => {
    let textLine: TextLine;

    beforeEach(() => {
      jest.clearAllMocks();

      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        Config.setTheme(theme);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
        contextStrokeTextSpy = jest.spyOn(Config.getContext(), "strokeText");
        contextFillSpy = jest.spyOn(Config.getContext(), "fill");
        textLine = new TextLine("", new Vector());
      }
    });

    test("setPosition should set the text position with centered being factored", () => {
      textLine.setPosition(new Vector(-100, -100));

      expect(textLine.getPosition()).toEqual({ x: -100, y: -90 });
    });

    test("setText should set the text to '' if no argument is provided", () => {
      textLine.setText();

      expect(textLine.getText()).toEqual("");
    });

    test("setText should set the text", () => {
      textLine.setText("testing");

      expect(textLine.getText()).toEqual("testing");
    });

    test("getRect should return the rectangle", () => {
      expect(textLine.getRect()).toEqual({
        height: 20,
        position: { x: 0, y: -10 },
        width: 0,
      });
    });

    test("render should have drawn the text on canvas", () => {
      textLine.setText("testing");
      textLine.render();

      const { x, y } = textLine.getPosition();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
      expect(contextStrokeTextSpy).toHaveBeenLastCalledWith("testing", x, y);
    });

    test("render should have drawn the text on canvas, debug === true", () => {
      Config.setDebug(true);
      textLine.setText("testing");
      textLine.render();

      const { x, y } = textLine.getPosition();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
      expect(contextStrokeTextSpy).toHaveBeenLastCalledWith("testing", x, y);
      expect(contextFillSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("not centered", () => {
    let textLine: TextLine;

    beforeEach(() => {
      jest.clearAllMocks();

      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        Config.setTheme(theme);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
        contextStrokeTextSpy = jest.spyOn(Config.getContext(), "strokeText");
        contextFillSpy = jest.spyOn(Config.getContext(), "fill");
        textLine = new TextLine("", new Vector(), false, 20);
      }
    });

    test("setPosition should set the text position", () => {
      textLine.setPosition(new Vector(-100, -100));

      expect(textLine.getPosition()).toEqual({ x: -100, y: -100 });
    });

    test("render should have drawn the text on canvas, debug === true", () => {
      Config.setDebug(true);
      textLine.setText("testing");
      textLine.render();

      const { x, y } = textLine.getPosition();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
      expect(contextStrokeTextSpy).toHaveBeenLastCalledWith("testing", x, y);
      expect(contextFillSpy).toHaveBeenCalledTimes(0);
    });

    test("render should not have drawn the text on canvas, text === ''", () => {
      textLine.render();

      expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
      expect(contextStrokeTextSpy).toHaveBeenCalledTimes(0);
    });
  });
});
