export const typeDefs = `#graphql
  type Query {
    hello: String!
    getAllProducts: [Product]
    getOneProduct(id: ID!): Product
  }
  
  type Mutation {
    createProduct(name: String!, quantity: Int!): Product 
    deleteProduct(id: ID!): Boolean
    updateProduct(id: ID!, name: String, quantity: Int): Boolean
  }

  type Product {
    id: ID!
    name: String!
    quantity: Int!
    createdAt: String!
  }
`;
