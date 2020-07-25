import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "prisma-binding";

const resolvers = {
  Query: {
    description: () => `hell ya!`,
    posts: () => [{ id: "foo" }],
  },
};

const server = new GraphQLServer({
  typeDefs: "./schema/schema.graphql",
  resolvers,
});

server.start(() =>
  console.log("The server is running on http://localhost:4000")
);
