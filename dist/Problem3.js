export const getName = (params) => {
    if (params.last) {
        return `${params.first} ${params.last}`;
    }
    return params.first;
};
