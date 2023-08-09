interface User {
    id: string;
    firstName: string;
    lastName: string;
  }
  
  interface Post {
    id: string;
    title: string;
    body: string;
  }
  
  /**
   * How do we type this return statement so it's both
   * User AND { posts: Post[] }
   */
  export const getDefaultUserAndPosts = (): User & {posts:Post[]} & {age:number} => {
    return {
      id: "1",
      firstName: "Matt",
      lastName: "Pocock",
      posts: [
        {
          id: "1",
          title: "How I eat so much cheese",
          body: "It's pretty edam difficult",
        },
      ],
      age: 30
    };
  };
  