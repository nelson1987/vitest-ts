import { describe, expect, it, vi } from "vitest";
import eventHandler from "../../src/eventHandler";
import producer from "../../src/producer";

describe("Event Handler", () => {
  it("when handler produce a event should return the event", () => {
    const event = "event";
    const result = eventHandler(event);
    expect(result).toEqual("event");
  });
  it("when handler produce a mocked event should return the mocked event", () => {
    const event = "event";
    vi.mock("../../src/producer", () => ({
      default: vi.fn(() => "mockedEvent"),
    }));
    const result = eventHandler(event);
    expect(result).toEqual("mockedEvent");
  });
});

describe("Producer", () => {
  it("when producer produce a event should return the event", () => {
    const event = "event";
    const result = producer(event);
    expect(result).toEqual("event");
  });
  it("when producer produce a mocked event should return the mocked event", () => {
    const event = "event";
    vi.fn(() => "mockedEvent");
    // vi.mock("../../src/producer", () => ({
    //   default: vi.fn(() => "mockedEvent"),
    // }));
    // vi.fn(producer).mockReturnValueOnce('mockedEvent');
    const result = producer(event);
    expect(result).toEqual("event");
  });
});
