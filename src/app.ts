import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./graphql/productResolvers";
import { typeDefs } from "./graphql/productTypeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export async function startServer() {
  const portVarbEnv = process.env.PORT || "";
  const port = parseInt(portVarbEnv) || 3000;

  await startStandaloneServer(server, {
    listen: { port },
  });
}
