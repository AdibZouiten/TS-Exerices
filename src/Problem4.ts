export const getName2 = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};
