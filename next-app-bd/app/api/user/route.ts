import { PrismaClient } from "@/app/generated/prisma/client";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient()

export function GET(req: NextRequest){
  return NextResponse.json({
    email: "usman@gmail.com",
    name: "usman"
  })
}


export async function POST(req: NextRequest){
      //body
      const body = await req.json()
      console.log(body);

      //put entries in the db
      try{
             await client.user.create({
            data: {
                  email: body.email,
                  password: body.password
            }
      })
       return NextResponse.json({
            body
      })
      } catch(e){
            NextResponse.json({
                  message: "Error while signing up"
            },{
                  status: 411
            })
      }
     
      // //header
      // console.log(req.headers.get("authorization"));
      // //query parameters
      // console.log(req.nextUrl.searchParams.get("name"));
      
      //hit the db with username and password

      //postgresql://neondb_owner:npg_bk4greOKHI9f@ep-green-hall-af16u3ci-pooler.c-2.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require
     
}