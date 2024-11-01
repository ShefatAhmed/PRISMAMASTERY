import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=> {
    // const result = await prisma.post.create({
    //     data: {
    //         title: "this is tile2",
    //         content: "this is content",
    //         authorName: "Joe."
    //     }
    // })
    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB);
}

main()