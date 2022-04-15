export const getFromLS = (item: string): string => {
  return localStorage.getItem(item) ?? "";
};
