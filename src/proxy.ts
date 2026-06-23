import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Detect user preferred language from headers
  const acceptLanguage = request.headers.get("accept-language") || "";
  
  // Default to English unless Spanish is explicitly preferred in Accept-Language headers
  const detectedLocale = acceptLanguage.toLowerCase().includes("es") ? "es" : "en";

  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap\\.xml|robots\\.txt|.*\\.png|.*\\.jpg|.*\\.svg).*)",
  ],
};
