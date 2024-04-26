export { default } from 'next-auth/middleware'

export const config = { matcher: ['/Chat', '/protected/:path*'] }