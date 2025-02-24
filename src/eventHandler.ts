import producer from "./producer";

const eventHandler = (event: string) => {
  return producer(event);
};
export default eventHandler;
