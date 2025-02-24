import { describe, expect, it, Mock, vi } from "vitest";
import producer from "../../src/producer";
vi.mock("../../src/producer", async () => {
  const originalModule = await vi.importActual("../../src/producer");
  return {
    default: vi.fn(originalModule.default as never),
  };
});
describe("Producer", () => {
  const testEvent = "event";
  it("when producer produce a event should return the event", () => {
    const result = producer(testEvent);
    expect(result).toEqual("event");
  });

  it("when producer produce a mocked event should return the mocked event", () => {
    (producer as Mock).mockReturnValueOnce("mockedEvent");
    const result = producer(testEvent);
    expect(result).toEqual("mockedEvent");
  });

  it("when producer produce a mocked event should return the mocked event", () => {
    (producer as Mock).mockReturnValueOnce("mockedEvent_2");
    const result = producer(testEvent);
    expect(result).toEqual("mockedEvent_2");
  });

  it("when producer produce a event should return the event", () => {
    const result = producer(testEvent);
    expect(result).toEqual("event");
  });
});
