export const takeABreak = async (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const limStr = (s: string, size = 20) => {
  let newString = s.substring(0, size);
  if (newString < s) newString += "...";
  return newString.trim();
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
