import { Engage, init } from "@sitecore/engage";

let engage: Engage | undefined;

const loadEngage = async () => {
  engage = await init({
    clientKey: "aqfpz1cevdy6oolipfwsrjh9uldh9nua",
    targetURL: "https://api-engage-us.sitecorecloud.io",
    pointOfSale: "aq",
    cookieExpiryDays: 365,
    forceServerCookieMode: true,
    includeUTMParameters: true,
    webPersonalization: true,
  });
};

loadEngage();
export { engage };
