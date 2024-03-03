import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
        credentials: {
        email: { label: "Email", type: "email", placeholder: "test@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const formdata = new FormData();
        formdata.append("email", credentials?.email || "");
        formdata.append("password", credentials?.password || "");

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
        };

        const res = await fetch(
          "http://127.0.0.1:8000/api/login",
          requestOptions
        );

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  }
});

export { handler as GET, handler as POST };
