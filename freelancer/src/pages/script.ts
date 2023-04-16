import { PrismaClient } from "@prisma/client"; 
import './main.json';

// import { execSync } from "child_process";

const Prisma = new PrismaClient();

async function add() {
    // const user = await Prisma.post.create({ // create entity
        
    //     data: {
    //         id : 2,
    //         head: "Hacker",
    //         desc: ["A professional black hat hacker is needed for mining and other cyber attacks "],
    //         role: ["hacker", "blackhat", "cypersecurity", "forensic", "dev"]
    //     }

    // })

    const f = await Prisma.user.findMany();
    // return (y) //display all entities

    // console.log(find)
    
    // var x = execSync("npm run prisma-push")

    // x ? console.log("true"): console.log("false")
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
