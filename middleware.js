import { NextResponse } from 'next/server';

export function middleware(request) {
  // return Response.json({
  //   msg: 'Hey Ho!',
  // });
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/about/:path*'], // Match all paths starting with /about
};
