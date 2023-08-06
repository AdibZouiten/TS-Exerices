export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}


// in the index.ts file

const myUser:User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  isAdmin: false,
};
const userInfo = (users: User) => {
  return users.id;
};


console.log(userInfo(myUser));