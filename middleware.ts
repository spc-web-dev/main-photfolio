import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";



export default withAuth(
    function middleware(req) {

        if(req.nextUrl.pathname.startsWith('/dashboard') && !req.nextauth.token) {
            console.log("Middleware triggered for path:", req.nextUrl.pathname);
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                if(req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/api')) {
                    return !!token;
                }
                return true
            },
        }
    }

)

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};