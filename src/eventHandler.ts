import producer from "./producer";

const eventHandler = (event: string = "event") => {
  return producer(event);
};
export default eventHandler;
