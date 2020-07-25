import { GraphQLServer } from "graphql-yoga";

const resolvers = {
  Query: {
    description: () => `hell ya!`,
  },
};

const server = new GraphQLServer({
  typeDefs: "./schema/schema.graphql",
  resolvers,
});

server.start(() =>
  console.log("The server is running on http://localhost:4000")
);
