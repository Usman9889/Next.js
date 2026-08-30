import axios from "axios";
import { PrismaClient } from "./generated/prisma/client";

// const client = new PrismaClient()
import client from '../lib/prisma'
async function fetchData(){
  const user = await client.user.findFirst({
    where:{
      id: 5
    }
  })
  
  // console.log("userData: " + JSON.stringify(user));
  
  return {
    email: user?.email,
    password: user?.password
}
}
export default async function Home() {
  const userData = await fetchData()
  return (
    <div>
      {userData.email}
      <br />
      {userData.password}
    </div>
  );
}
