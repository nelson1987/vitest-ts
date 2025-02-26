import { describe, expect, it, vi } from "vitest";
import producer from "../../src/producer";
vi.mock("../../src/producer", { spy: true });

const testEvent = "event";
describe("Producer", () => {
  it("when producer produce a event should return the event", () => {
    const result = producer(testEvent);
    expect(result).toEqual("event");
  });

  it("when producer produce a mocked event should return the mocked event", () => {
    vi.mocked(producer).mockReturnValueOnce("mockedEvent");
    const result = producer(testEvent);
    expect(result).toEqual("mockedEvent");
  });
});
