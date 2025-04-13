import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
const nextauth = NextAuth({
  providers: [Google],
})

export const { handlers, signIn, signOut, auth } = nextauth;

export default nextauth;
