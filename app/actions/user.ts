"use server"
import client from '@/lib/prisma'
export async function signup(email: string, password: string){

      try{
            await client.user.create({
                  data: {
                        email: email,
                        password: password
                  }
            })
            return true;
      } 
      catch{
            return false;
      }
}