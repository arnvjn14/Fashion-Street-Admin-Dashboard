import {PrismaClient} from "@prisma/client"

declare global{
    var prisma:PrismaClient | undefined
}

const prismadb= globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV!=="production") globalThis.prisma=prismadb;

export default prismadb;


// OR



// import {PrismaClient} from "@prisma/client"

// let prism: PrismaClient;

// if(process.env.NODE_ENV==="production"){
//     prism= new PrismaClient();
// }else{
//     if(!(global as any).prisma){
//         (global as any).prisma=new PrismaClient();
//     }
//     prism=(global as any).prisma;
// }

// export const prisma=prism;