import{ApolloServer,gql} from "apollo-server"
import{ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from "./schemaGql.js"; 
import resolvers from "./resolver.js";
//import mongoose from "mongoose"
//import { MONGO_URI } from "./config.js";

//mongoose.connect(MONGO_URI)
// mongodb+srv://Mohit:Mohit123@cluster0.notdtaa.mongodb.net/graphqldb?retryWrites=true&w=majority
const server = new ApolloServer ({
    typeDefs,
    resolvers,
    plugins:[ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) =>{
console.log(`server ready at ${url}`);
});