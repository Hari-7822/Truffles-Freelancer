import { PrismaClient } from "@prisma/client"; 

import { execSync } from "child_process";

const Prisma = new PrismaClient();

async function add() {
    const user = await Prisma.post.create({ // create entity
        
        data: {
            id : 2,
            head: "Hacker",
            desc: ["A professional black hat hacker is needed for mining and other cyber attacks "],
            role: ["hacker", "blackhat", "cypersecurity", "forensic", "dev"]
        }

    })

    // const f = await Prisma.user.findMany();
    // return (
    //     props:{
    //         name: f
    //     }
    // ) //display all entities

    // // console.log(find)
    
    var x = execSync("npm run prisma-push")

    x ? console.log("true"): console.log("false")
}
import txt from './Header';
var c
export async function f(c) {
    const usr = await Prisma.post.findMany({
        where:{
            role: c
        }
    })

    return {
        usr
    }
}

add()




    .then( async () => {
        
        await Prisma.$disconnect()
    
    } )

    .catch( async (e) => {
        
        console.error(e)
        await Prisma.$disconnect()
        process.exit(1)

    } )
