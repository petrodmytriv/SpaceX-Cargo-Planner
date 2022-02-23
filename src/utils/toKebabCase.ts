export const toKebabCase = (item: string) => {
  return item.toLowerCase().replaceAll(" ", "-");
};
