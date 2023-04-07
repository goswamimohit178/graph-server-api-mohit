import{quotes,users} from "./queryData.js"
import{randomBytes} from "crypto"

const resolvers = {
    Query: {
        users:()=>users,
     user:(_,{id})=>users.find(user=>user.id == id),
     iquotes:(_,{by})=>quotes.filter(qoot=>qoot.by == by),
        quotes:()=>quotes,
    },
    User: {
        quotes:(ur)=>quotes.filter(quotes=>quotes.by == ur.id)
    },

    Mutation: {
        signUpUserDummy:(_,{firstName,lastName,email,password,confirmPassword})=>{
            const id = randomBytes(5).toString("hex")
            users.push({
                id,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            })
            return users.find(user=>user.id == id)
        }
    }
}

export default resolvers