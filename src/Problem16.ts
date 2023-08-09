interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, "id">;

const newUser: MyType = {
  firstName: "John",
  lastName: "doe",
};
