const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

  type User {
    id: Int
    name: String
    username: String
    password: String
  }

  type Query {
    users: [User]
  }
`;

// posts: [Post]
// posts: [Post]

// type Post {
//   id: Int
//   title: String
//   views: Int
// }

const data = {
  posts: [
      { id: 1, title: "Lorem Ipsum", views: 254, user_id: 1 },
  ],
  users: [
      { id: 1, name: "Stian Martinsen" , username: "okynas", password: "test"},
  ],
  comments: [
      { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
      { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ]
}
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    users: () => {
      return data.users
    },
    // posts: () => {
    //   return data.posts
    // }
  },
  // User: {
  //   posts(parent) {
  //     return data.posts.filter(post => post.user_id === parent.id)
  //   }
  // }
};
 
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({port: process.env.BACKEND_PORT}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});