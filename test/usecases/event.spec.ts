import { describe, expect, it, Mock, vi } from "vitest";
import eventHandler from "../../src/eventHandler";
import producer from "../../src/producer";
vi.mock("../../src/producer", async () => {
  const originalModule = await vi.importActual("../../src/producer");
  return {
    default: vi.fn(originalModule.default as never),
  };
});

describe("Event Handler", () => {
  const testEvent = "event";
  it("should return the produced event when the handler processes an event", () => {
    const result = eventHandler(testEvent);
    expect(result).toEqual("event");
  });
  it("should return the mocked event when the handler processes a mocked event", () => {
    producer.mockReturnValueOnce("mockedEvent");
    const result = eventHandler(testEvent);
    expect(result).toEqual("mockedEvent");
  });
  it("should return the mocked event when the handler processes a mocked event", () => {
    producer.mockReturnValueOnce("mockedEvent_2");
    const result = eventHandler(testEvent);
    expect(result).toEqual("mockedEvent_2");
  });
  it("should return the produced event when the handler processes an event", () => {
    const result = eventHandler(testEvent);
    expect(result).toEqual("event");
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
    (producer as Mock).mockReturnValueOnce("mockedEvent");
    const result = producer(event);
    expect(result).toEqual("mockedEvent");
  });
  it("when producer produce a mocked event should return the mocked event", () => {
    const event = "event";
    producer.mockReturnValueOnce("mockedEvent_2");
    const result = producer(event);
    expect(result).toEqual("mockedEvent_2");
  });
  it("when producer produce a event should return the event", () => {
    const event = "event";
    const result = producer(event);
    expect(result).toEqual("event");
  });
});
