"use strict";
// in index.ts file
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
    Role["superAdmin"] = "super-admin";
})(Role || (Role = {}));
const defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: Role.user,
};
console.log(defaultUser);
