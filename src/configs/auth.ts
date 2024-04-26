import type { AuthOptions, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import VKProvider from "next-auth/providers/vk";
import Credentials from "next-auth/providers/credentials";
import { users } from '../../../db.json'


export const authConfig: AuthOptions = {
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID ?? "",
            clientSecret:process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID ?? "",
            clientSecret:process.env.GOOGLE_SECRET ?? "",
        }),
        VKProvider({
            clientId: process.env.VK_CLIENT_ID ?? "",
            clientSecret: process.env.VK_CLIENT_SECRET ?? "",
        }), 
        Credentials({
            credentials: {
                // email: {label: 'email', type: 'email', required:true},
                password: {label: 'password', type: 'password', required:true},
                nickName: {label: 'nickName', type: 'text', required:true}
            },
            authorize(credentials){
                if(!credentials?.nickName || !credentials.password) return null

                const currentUser = users.find(user => user.nickName === credentials.nickName)

                if(currentUser && currentUser.password === credentials.password){
                    const {password, ...userWithoutPass} = currentUser

                    return userWithoutPass as any;
                }else{
                    console.log(credentials)
                }
                return null
            }
        })      
    ],
    pages: {
        signIn: '/Sign-in'
    }
}