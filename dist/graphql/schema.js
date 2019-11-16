"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(name: String, email: String): User
  }
`;
const resolvers = {
    Query: {
        allUsers: () => { }
    },
    Mutation: {
        createUser: () => { }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
