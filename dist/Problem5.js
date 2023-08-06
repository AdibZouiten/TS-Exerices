// in the index.ts file
const myUser = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    isAdmin: false,
};
const userInfo = (users) => {
    return users.id;
};
console.log(userInfo(myUser));
export {};
