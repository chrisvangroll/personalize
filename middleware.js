// import { NextResponse } from 'next/server';
// import { initServer } from '@sitecore/engage';

// export async function middleware(request) {
//   const response = NextResponse.next();

//   const engageSettings = {
//     // clientKey: "aqfpz1cevdy6oolipfwsrjh9uldh9nua",
//       clientKey: "ngsuatxhbmeuas37zfn79tsaf8etr8ro",
//     targetURL: "https://api-engage-us.sitecorecloud.io",
//     pointOfSale: "aq",
//     cookieExpiryDays: 365,
//     forceServerCookieMode: true,
//     includeUTMParameters: true,
//     webPersonalization: true,
//   };

//   const engageServer = initServer(engageSettings);
//   await engageServer.handleCookie(request, response);

//   return response;
// };