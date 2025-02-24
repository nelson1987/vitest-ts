import { describe, expect, it, vi } from "vitest";
import eventHandler from "../../src/eventHandler";

describe("event", () => {
  it("when handler produce a mocked event should return the event", () => {
    const event = "click";
    const result = eventHandler(event);
    expect(result).toEqual("erro");
  });

  it("when handler produce a event should return the event", () => {
    const event = "click";
    vi.mock("../../src/producer", () => ({
      default: vi.fn(() => "erro"),
    }));
    const result = eventHandler(event);
    expect(result).toEqual(event);
  });
});
