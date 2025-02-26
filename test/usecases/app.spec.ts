import { describe, expect, it, vi } from "vitest";
import eventHandler from "../../src/eventHandler";
import app from "../../src/app";

vi.mock("../../src/eventHandler", { spy: true });

describe("App", () => {
  it("should return the produced event when the handler processes an event", () => {
    const result = app();
    expect(result).toEqual("event");
  });

  it("should return the mocked event when the handler processes a mocked event", () => {
    vi.mocked(eventHandler).mockReturnValueOnce("mockedEvent");
    const result = app();
    expect(result).toEqual("mockedEvent");
  });
});
