import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', '/logo.svg']);

const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isInstructorRoute = createRouteMatcher(['/instructor(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  const { userId, sessionClaims } = auth();

  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  const userRole = sessionClaims?.metadata.role;

  if (isAdminRoute(req) && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (isInstructorRoute(req) && userRole !== 'instructor' && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
