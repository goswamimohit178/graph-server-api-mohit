import{gql} from "apollo-server"

const typeDefs = gql `
type Query {
    users:[User]
    user(id:ID!):User
    quotes:[Quote]
    iquotes(by:ID!):[Quote]
}
type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    confirmPassword: String
    quotes:[Quote]
}
 type Quote {
    name: String
    by:ID
 }

type Mutation {
    signUpUserDummy(firstName:String!,lastName:String!,email:String!,password:String!,confirmPassword:String!):User
}

`

export default typeDefs