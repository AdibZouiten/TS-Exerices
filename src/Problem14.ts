interface Base {
  id: string;
}
interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  id: string;
  title: string;
  body: string;
}

interface Comment extends Base {
  id: string;
  comment: string;
}
