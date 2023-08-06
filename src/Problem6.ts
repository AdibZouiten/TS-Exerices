// in index.ts file

enum Role {
  admin = "admin",
  user = "user",
  superAdmin = "super-admin",
}

interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: Role;
}

const defaultUser: User2 = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: Role.user,
};

console.log(defaultUser);
