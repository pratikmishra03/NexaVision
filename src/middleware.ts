import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// import { NextResponse } from "next/server";

// // const isPublicRoute = createRouteMatcher([
// //     '/sign-in',
// //     '/sign-up',
// //     '/'

// // ])

// // export default clerkMiddleware((auth, req) => {
// //     const { userId } = auth();
// //     const currentUrl = new URL(req.url)
// //     const isHomePage = currentUrl.pathname === "/"
// //     if (userId && isPublicRoute(req) && !isHomePage) {
// //         return NextResponse.redirect(new URL("/home", req.url))
// //     }

// //     //?Not loggedin
// //     if (!userId) {
// //         if (!isPublicRoute(req)) {
// //             return NextResponse.redirect(new URL("/sign-in", req.url))
// //         }
// //     }
// // });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
