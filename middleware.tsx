import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/new-page", request.url));
}

export const config = {
  //  *: zero or more -- this one is more prefered and general
  //  +: one or more
  //  ?: zero or one

  matcher: ["/users/:path*"],
};
