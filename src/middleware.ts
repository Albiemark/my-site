import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const url = request.nextUrl.clone()

  // LMS subdomain handling
  if (host === 'lms.digital-farm.biz' || host?.startsWith('lms.')) {
    if (!url.pathname.startsWith('/lms')) {
      url.pathname = `/lms${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}