export const takeABreak = async (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const limStr = (s: string, size = 20) => {
  let newString = s.substring(0, size);
  if (newString < s) newString += "...";
  return newString.trim();
};
