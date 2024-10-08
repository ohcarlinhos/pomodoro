export const takeABreak = async (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const limStr = (s: string, size = 20) => {
  let newString = s.substring(0, size);
  if (newString < s) newString += "...";
  return newString.trim();
};

export const zeroLeft = (value: number, size = 2): string => {
  let s = String(value);
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
};

export const desktopNotify = (message = "") => {
  if (!message) return;
  if (!("Notification" in window)) return;
  const permission = Notification.permission;
  if (permission === "granted") return new Notification(message);
  //...
  else if (permission !== "denied")
    Notification.requestPermission((p) => {
      if (p === "granted") return new Notification(message);
    });
};

export const secondsToString = (seconds: number) => {
  let string = "";
  let calcSec = seconds;
  let sec = 0;

  const hour = Math.floor(Math.floor(calcSec / 60) / 60);

  if (hour) {
    calcSec -= hour * 60 * 60;
    string += `${hour}h `;
  }

  const min = Math.floor(calcSec / 60);

  if (min) {
    calcSec -= min * 60;
    string += `${min}m `;
  } else sec = seconds;

  sec = calcSec;
  if (sec) string += `${sec}s`;

  return string;
};
