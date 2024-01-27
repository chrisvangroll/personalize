import { Engage } from "@sitecore/engage";

const sendViewEvent = (engage: Engage, path: string) => {
  const eventData = {
    channel: "WEB",
    currency: "USD",
    pointOfSale: "aq",
    language: "EN",
    page: path
  };

  engage.pageView(eventData)
};

export default sendViewEvent;
