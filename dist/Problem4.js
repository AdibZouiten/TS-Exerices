export const getName2 = (first, last) => {
    if (last) {
        return `${first} ${last}`;
    }
    return first;
};
