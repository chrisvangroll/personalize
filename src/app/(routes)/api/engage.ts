import { Engage, init } from "@sitecore/engage";

let engage: Engage | undefined;

const loadEngage = async () => {
  engage = await init({
    clientKey: "ngsuatxhbmeuas37zfn79tsaf8etr8ro",
    targetURL: "https://api-engage-us.sitecorecloud.io",
    pointOfSale: "aq",
    cookieDomain: "localhost",
    cookieExpiryDays: 365,
    forceServerCookieMode: false,
    includeUTMParameters: true,
    webPersonalization: true 
  });
};

loadEngage();
export { engage };