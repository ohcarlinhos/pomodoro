import bus from "../util/bus";

const EVENT_NAME = "modal:toggle";

export const useModal = () => {
  function open<T>(payload: T) {
    bus.emit(EVENT_NAME, { status: true, ...payload });
  }

  function close() {
    bus.emit(EVENT_NAME, { status: false });
  }

  function listen<T, E>(fn: (payload: T) => E) {
    bus.on(EVENT_NAME, fn);
  }

  function off<T, E>(fn: (payload: T) => E) {
    bus.off(EVENT_NAME, fn);
  }

  return { open, close, listen, off };
};
