import { log } from "console";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

console.log("process.env.NEXTAUTH_SECRET: ", process.env.NEXTAUTH_SECRET);


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<{ name: string; id: string } | null> {

                const username = credentials?.username
                const password = credentials?.password

                console.log("credentials: ", credentials);

                const user = {
                    id: "1",
                    username: "pritam",
                    password: "12345",
                };

                if (username === user.username && password === user.password) {
                    console.log("User authenticated successfully");
                    return { name: user.username, id: user.id };
                }
                return null; // Return null if authentication fails
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
