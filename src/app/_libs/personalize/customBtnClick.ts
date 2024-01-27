import { Engage } from "@sitecore/engage";

const customBtnClick = async (engage: Engage, path: string)=> {
    const eventData = {
        channel: "WEB",
        currency: "USD",
        pointOfSale: "aq",
        language: "EN",
        page: path
      };
      const extensionData = {
        btnClick: "test"
      };
      await engage.event("CUSTOM_BTN_CLICK", eventData, extensionData);
}

export default customBtnClick