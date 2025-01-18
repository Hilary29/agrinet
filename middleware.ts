import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken'); // Récupère le jeton d'authentification

  // Si l'utilisateur n'est pas authentifié
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login'; // Redirige vers la page de connexion
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Autorise l'accès si authentifié
}

export const config = {
  matcher: [ '/auth'], // Pages nécessitant une authentification
};
