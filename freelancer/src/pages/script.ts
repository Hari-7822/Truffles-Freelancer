import { PrismaClient } from "@prisma/client"; 

// import { execSync } from "child_process";

const Prisma = new PrismaClient();

async function add() {
    const user = await Prisma.user.create({ // create entity
        data : {
        
            name : 'Luffy',
            email : 'Luffy@mail.com',
            password: 'luffymeat',
            role : 'Freelancer',
            skills:'rubber'

        }

    })

    const find = await Prisma.user.findMany() //display all entities

    console.log(find)
    
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
