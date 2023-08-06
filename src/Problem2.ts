type TypeParams = {
  first: number;
  second: number;
};

export const addTwoNumbers2 = (params: TypeParams) => {
  return params.first + params.second;
};
