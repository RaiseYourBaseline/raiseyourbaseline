import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Add any other hostnames the Rope site should answer to here (e.g. a www variant).
const LBR_HOSTS = ["thelittleblackrope.ca", "www.thelittleblackrope.ca"];
const LBR_PREFIX = "/lbr";

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").split(":")[0];
  const { pathname } = request.nextUrl;
  const isLbrHost = LBR_HOSTS.includes(hostname);

  if (isLbrHost) {
    // Serve the Little Black Rope pages (which live under /lbr in the codebase)
    // at the root of thelittleblackrope.ca, so visitors never see "/lbr" in the URL.
    if (!pathname.startsWith(LBR_PREFIX)) {
      const url = request.nextUrl.clone();
      url.pathname = `${LBR_PREFIX}${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // On every other host (raiseyourbaseline.ca, preview deployments, localhost),
  // the Little Black Rope pages must not be reachable at all.
  if (pathname.startsWith(LBR_PREFIX)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|landing/|resources/).*)"],
};
