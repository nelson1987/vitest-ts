import { describe, expect, it, vi } from "vitest";
import eventHandler from "../../src/eventHandler";
import producer from "../../src/producer";

vi.mock("../../src/producer", { spy: true });

const testEvent = "event";
describe("Event Handler", () => {
  it("should return the produced event when the handler processes an event", () => {
    const result = eventHandler(testEvent);
    expect(result).toEqual("event");
  });

  it("should return the mocked event when the handler processes a mocked event", () => {
    vi.mocked(producer).mockReturnValueOnce("mockedEvent");
    const result = eventHandler(testEvent);
    expect(result).toEqual("mockedEvent");
  });
});
