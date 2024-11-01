import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=> {
    const getAllFromDB = await prisma.post.findMany();
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: true
        }
    })
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 2
        }
    })
    // const
    console.log(getAllFromDB);
}

main()