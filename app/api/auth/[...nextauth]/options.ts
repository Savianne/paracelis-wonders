import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import pool from "../../mysql/connectionPool";

export const options: NextAuthOptions  = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        },
      })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if(user.email) {
                const promisePool = pool.promise();

                //Insert to database if not exist
                await promisePool.query(`
                    INSERT IGNORE INTO users (email, dp, name)
                    VALUES (?, ?, ?)    
                `, [user.email, user.image, user.name]);
                
                return true
            } else {
                return false
            }
        },
      }
  }
