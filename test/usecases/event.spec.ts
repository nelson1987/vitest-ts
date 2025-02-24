import { describe, expect, it, Mock, vi } from "vitest";
import eventHandler from "../../src/eventHandler";
import producer from "../../src/producer";

vi.mock("../../src/producer", { spy: true });

describe("Event Handler", () => {
  const testEvent = "event";
  it("should return the produced event when the handler processes an event", () => {
    const result = eventHandler(testEvent);
    expect(result).toEqual("event");
  });

  it("should return the mocked event when the handler processes a mocked event", () => {
    vi.mocked(producer).mockReturnValueOnce("mockedEvent");
    const result = eventHandler(testEvent);
    expect(result).toEqual("mockedEvent");
  });

  it("should return the mocked event when the handler processes a mocked event", () => {
    vi.mocked(producer).mockReturnValueOnce("mockedEvent_2");
    const result = eventHandler(testEvent);
    expect(result).toEqual("mockedEvent_2");
  });

  it("should return the produced event when the handler processes an event", () => {
    const result = eventHandler(testEvent);
    expect(result).toEqual("event");
  });
});
