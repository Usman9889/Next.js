// import { PrismaClient } from "@../app/generated/prisma";

// import { PrismaClient } from "@/app/generated/prisma/client";

// import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// const client = new PrismaClient()
import { PrismaClient, Prisma } from "@/app/generated/prisma/client";
// import { PrismaPg } from '@prisma/adapter-pg'
// import 'dotenv/config'

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// })

// const client = new PrismaClient();
import client from '@/lib/prisma'


export async function GET(){
      const user = await client.user.findFirst({
            where: {
                  id: 4
            }
      }) 
      return NextResponse.json({
            email:user?.email,
            password:user?.password
      })
}

export async function POST(req: NextRequest){

      const body = await req.json()
      console.log(body);

      try{
            await client.user.create({
                  data:{
                        email:body.email,
                        password: body.password
                  }
            })
            return NextResponse.json({
                  body
            })
      } catch(e){
            console.log(e);
            
            return NextResponse.json({
                  message: "Error while signing up"
            },{
                  status: 411
            })
      }}
      
// }
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("BODY:", body);

    
//     await client.user.create({
//       data: {
//         email: body.email,
//         password: body.password,
//       },
//     });

//     return NextResponse.json({ message: "User created" }, { status: 201 });
//   } catch (e) {
//     console.error("PRISMA ERROR 👉", e);
//     throw e; // let Next.js show full stack
//   }
// }
